import {Component, OnInit} from '@angular/core';
import {Personne} from "../../model/personne";
import {CvService} from "../service/cv.service";
import {EmbaucheService} from "../service/embauche.service";
import {ToastrService} from "ngx-toastr";
import {FilterByAgePipe} from "../../pipes/filter-by-age.pipe";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers: [FilterByAgePipe],

})
export class CvComponent implements OnInit{
  personnes!: Personne[];
  selectedPersonne! : Personne;
  embauchees! : any;

  constructor(
    private cvService : CvService,
    private embaucheService : EmbaucheService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.cvService.getPersonnesFromApi().subscribe(
      (personnes) => {
        this.personnes = personnes;
      },
      (error) => {
        this.toastr.error('Problème d\'accès à l\'API et les données affichées sont fictives', 'Erreur d\'accès à l\'API');
        this.personnes = this.cvService.getPersonnes();
      }
    )
    this.embauchees= this.embaucheService.getEmbauchees();
  }


  onSelectPersonne(personne) {
    this.selectedPersonne = personne;
  }
}
