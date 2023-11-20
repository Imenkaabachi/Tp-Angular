import { Directive, HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  private colors: string[] = [
    'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
  ];

  @HostBinding('style.color') textColor!: string; // qu elle est la propo que je vais gerer
  @HostBinding('style.border-color') borderColor!: string;

  @HostListener('keyup') onKeyup() {
    this.changeColor();
  }

  private changeColor() {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    const randomColor = this.colors[randomIndex];

    this.textColor = randomColor;
    this.borderColor = randomColor;
  }
}
