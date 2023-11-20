import { Injectable } from '@angular/core';
import {Personne} from "../../model/personne";
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private selectPersonneSubject = new Subject<Personne>();
  private link="https://apilb.tridevs.net/api/personnes";
  private personnes!: Personne[];

  constructor(private httpClient: HttpClient) {
    this.personnes=[
      new Personne(1, "imen", "kaabachi", 25, "imen.jpg", 123456, "Software Engineer"),
      new Personne(2, "Smith", "Jane", 30, "as.jpg", 789012, "Data Scientist"),
      new Personne(3, "Johnson", "Robert", 22, "", 654321, "Web Developer"),
    ];
  }

  getPersonnesFromApi():Observable<Personne[]>{
    return this.httpClient.get<Personne[]>(this.link);
  }

  selectCv(personne : Personne) {
    this.selectPersonneSubject.next(personne);
  }


  getPersonnes() : Personne[]{
    return this.personnes;
  }

  getPersonneById(id): Observable<Personne> {
    return this.httpClient.get<Personne>(this.link+`/${id}`);
  }

  addPersonne(personne:Personne){
    let token = localStorage.getItem('token');
    if (token){
      const params = new HttpParams().set('access_token',token);
      return this.httpClient.post(this.link,personne,{params});
    }
    return this.httpClient.post(this.link,personne);
  }

  deletePersonne(id: number){
    return this.httpClient.delete(this.link+`/${id}`);
  }

  findByName(name): Observable<Personne[]>{
    const filter = {
      where: {
        name: {
          like: `%${name}%`
        }
      }
    };
    const urlWithFilter = this.link+`/?filter=${encodeURIComponent(JSON.stringify(filter))}`;

    return this.httpClient.get<Personne[]>(urlWithFilter);
  }
}
