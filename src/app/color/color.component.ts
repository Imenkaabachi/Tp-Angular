import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})

export class ColorComponent implements OnInit{

  textColor: string = '';
  fontSize: number = 16;
  fontFamily: string = 'Arial';

constructor(
  private activatedRoute: ActivatedRoute
) {
}

  ngOnInit(): void {
  this.activatedRoute.params.subscribe(
    (params)=>{
      this.textColor = params['default'];
    }

  );
  }
}
