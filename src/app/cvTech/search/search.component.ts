import {Component, OnInit} from '@angular/core';
import {Personne} from "../../model/personne";
import {CvService} from "../service/cv.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

inputSearch  ='';
  searchResult! : Personne[];

  constructor(
    private cvService : CvService,
    private router : Router,
  ) {
  }

  ngOnInit(): void {
    this.searchResult = [];
  }

  search() {
    const name = this.inputSearch.trim();
    if (name.length){
      this.cvService.findByName(name).subscribe(
        (personnes) => {
          this.searchResult = personnes;
        }
      );
    }else {
      this.searchResult =[];
    }

  }

  onSelectPersonne(personne: Personne) {
    const link = ['cv', personne.id];
    this.router.navigate(link);
    this.searchResult = [];
    this.inputSearch = '';
  }
}
