import {Component, OnInit} from '@angular/core';
import {Personne} from "../../model/personne";
import {CvService} from "../service/cv.service";
import {EmbaucheService} from "../service/embauche.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit{
  personnes!: Personne[];
  selectedPersonne! : Personne;
  embauchees! : any;

  constructor(
    private cvService : CvService,
    private embaucheService : EmbaucheService
  ) {
  }

  ngOnInit(): void {
    this.cvService.getPersonnesFromApi().subscribe(
      (personnes) => {
        this.personnes = personnes;
      },
      (error) => {
        alert('probleme d accès à l api et les donnees affichees sont fake');
        this.personnes = this.cvService.getPersonnes();
      }
    )
    this.embauchees= this.embaucheService.getEmbauchees();
  }


  onSelectPersonne(personne) {
    this.selectedPersonne = personne;
  }
}
