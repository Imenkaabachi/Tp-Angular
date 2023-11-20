import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthentificationService} from "../authentification.service";
import {Router} from "@angular/router";
import {BehaviorSubject, map, tap} from "rxjs";
import {AuthUser} from "./model/AuthUser";
import {LoginData} from "./model/LoginData";
import {ToastrService} from "ngx-toastr";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  showError = false


  constructor(
    private authService: AuthentificationService,
    private router: Router,
    private toastr: ToastrService
    ) {
  }

  login(formulaire : NgForm){


    const data : LoginData = new LoginData(formulaire.form.value.email, formulaire.form.value.password);

    //pipe prend un observable et retourne un observable
    this.authService.login(data).pipe(
      tap((authenticated)=>{
        // it allows you to peek into the observable stream and do something with the values passed through without altering them.
        // It's like being able to look at the cards in a card game as they are dealt, without changing the order or the game itself.
        if(authenticated){
          this.toastr.success('Vous êtes authentifié !', 'Success Authentification');
          this.router.navigate(['cv']);
        }else{
          this.showError = true
        }
      })
    ).subscribe()




  }


}
