import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {CvService} from "../service/cv.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent {
  errorMessage = '';
  constructor(
    private cvService : CvService,
    private router : Router
  ) {
  }

  addPersonne(formulaire: NgForm) {
    this.cvService.addPersonne(formulaire.value).subscribe(
      (response) => {
        const link = ['cv'];
        this.router.navigate(link);
      },
      (error) => {
        this.errorMessage = 'probleme de connexion a votre serveur'
      }
    );

  }


}
