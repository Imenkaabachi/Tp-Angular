import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Personne} from "../../model/personne";

@Component({
  selector: 'app-liste', templateUrl: './liste.component.html', styleUrls: ['./liste.component.css']
})
export class ListeComponent {
  @Input() personnes!: Personne[];
  @Output() selectedPersonne = new EventEmitter();

  onSelectPersonne(selectedPersonne) {
    this.selectedPersonne.emit(selectedPersonne)
  }
}
