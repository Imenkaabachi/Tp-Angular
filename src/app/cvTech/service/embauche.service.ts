import { Injectable } from '@angular/core';
import {Personne} from "../../model/personne";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private personnes! : Personne[];
  constructor() {
    this.personnes= [];
  }
  getEmbauchees(){
    return this.personnes;
  }
  embaucher(personne){
    const index = this.personnes.indexOf(personne);
    if(index<0){
      this.personnes.push(personne);
    }else {
      alert(`${personne.name} est deja selectionée`)
    }
  }
  debaucher(personne){
    const index = this.personnes.indexOf(personne);
    if(index >= 0){
      this.personnes.splice(index,1);
    }
  }
}
