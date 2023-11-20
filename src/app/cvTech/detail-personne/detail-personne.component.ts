import {Component, OnInit} from '@angular/core';
import {CvService} from "../service/cv.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Personne} from "../../model/personne";

@Component({
  selector: 'app-detail-personne',
  templateUrl: './detail-personne.component.html',
  styleUrls: ['./detail-personne.component.css']
})
export class DetailPersonneComponent implements OnInit{
  personne! : Personne ;
  constructor(
    private cvService : CvService,
    private activatedRoute : ActivatedRoute,
    private router:Router
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.cvService.getPersonneById(params['id']).subscribe(
          (personne) => {
            this.personne = personne;
          }
        );
      }
    )

  }

  deletePersonne() {

    const link = ['cv']
    this.cvService.deletePersonne(this.personne.id).subscribe(
      (response)=>{
        this.router.navigate(link);
      }
    );
  }
}
