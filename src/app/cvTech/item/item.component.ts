import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Personne} from "../../model/personne";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
 @Input() personne! : Personne;
 @Output() selectedPersonne = new EventEmitter();

  onSelectPersonne() {
 // emettre un event et l'injecter dans la personne
    this.selectedPersonne.emit(
      this.personne
    )
  }
}
