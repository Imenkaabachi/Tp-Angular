import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, map, Observable, of} from "rxjs";
import {AuthUser} from "./login/model/AuthUser";
import {LoginData} from "./login/model/LoginData";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private user = new BehaviorSubject<AuthUser | null>(null);
  user$ = this.user.asObservable();

  constructor(private http : HttpClient) {
    this.refreshAuthState()
  }


  login(data : LoginData) : Observable<boolean>{
    return this.http.post("https://apilb.tridevs.net/api/Users/login", data).pipe(
      map((response: any) => {
        const authToken = {
          token: response.id,
          ttl: response.ttl,
        };

        const user = new AuthUser(response.userId, data.email);
        localStorage.setItem('AuthToken', JSON.stringify(authToken));
        localStorage.setItem('AuthUser', JSON.stringify(user));

        this.refreshAuthState();
        return true;


      }),
      catchError((error: any) => {
        this.refreshAuthState();
        return of(false);
      })
    );

  }




  refreshAuthState(){
    const userFound = localStorage.getItem('AuthUser');
    if(!userFound){
      this.user.next(null);
    }else{
      const user : AuthUser = JSON.parse(userFound);
      this.user.next(new  AuthUser(user.id, user.email));
    }
  }

  logout() {
    const user = localStorage.getItem('AuthUser');
    if(!user){
      return false
    }
    localStorage.removeItem('AuthToken');
    localStorage.removeItem('AuthUser');
    this.refreshAuthState()
    return true  }
}
