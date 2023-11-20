import { Pipe, PipeTransform } from '@angular/core';
import {Personne} from "../model/personne";

@Pipe({
  name: 'filterByAge'
})
export class FilterByAgePipe implements PipeTransform {
  transform(personnes: Personne[], category: 'junior' | 'senior'): Personne[] {
    if (!personnes || personnes.length === 0) {
      return [];
    }

    if (category === 'junior') {
      return personnes.filter((personne) => personne.age < 40);
    } else {
      return personnes.filter((personne) => personne.age >= 40);
    }
  }
}
