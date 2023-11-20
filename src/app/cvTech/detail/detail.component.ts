import {Component, Input} from '@angular/core';
import {Personne} from "../../model/personne";
import {EmbaucheService} from "../service/embauche.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

 @Input() personne!: Personne;

  constructor(
    private embaucheService: EmbaucheService,
    private router : Router
  ) {
  }

  embaucher(){
    this.embaucheService.embaucher(this.personne);

 }

  moreInfo() {
    const link = ['cv', this.personne.id];
    this.router.navigate(link);
  }
}
