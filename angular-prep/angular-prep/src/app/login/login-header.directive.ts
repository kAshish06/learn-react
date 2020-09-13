import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[loginHeader]',
})
export class LoginHeader {
  normalColor = 'green';
  @Input() highLightColor: string;
  //@HostListener lets you subscribe to events of the host element
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = this.highLightColor;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = this.normalColor;
  }
  constructor(private el: ElementRef) {
    // ElementRef grants access to host DOM node
    this.el.nativeElement.style.color = this.highLightColor;
  }
}
