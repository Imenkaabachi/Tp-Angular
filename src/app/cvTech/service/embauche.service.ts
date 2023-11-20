import { Injectable } from '@angular/core';
import {Personne} from "../../model/personne";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private personnes! : Personne[];
  constructor(private toastr: ToastrService) {
    this.personnes= [];
  }
  getEmbauchees(){
    return this.personnes;
  }
  embaucher(personne){
    const index = this.personnes.indexOf(personne);
    if(index<0){
      this.personnes.push(personne);
      this.toastr.success(`${personne.name} a été embauché(e) avec succès`, 'Embauche réussie', {
        toastClass: 'toast-person-success',
      });
    }else {
      this.toastr.warning(`${personne.name} est déjà sélectionnée`, 'Déjà sélectionnée', {
        toastClass: 'toast-person-selected',
      });    }
  }
  debaucher(personne){
    const index = this.personnes.indexOf(personne);
    if(index >= 0){
      this.personnes.splice(index,1);
    }
  }
}
