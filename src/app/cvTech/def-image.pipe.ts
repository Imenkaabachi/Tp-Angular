import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defImage'
})
export class DefImagePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (!value)
      return "cv.jpg";
    else
      return value;
  }

}
