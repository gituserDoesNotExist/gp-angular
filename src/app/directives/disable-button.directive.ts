import { Directive, HostListener, ElementRef, Input, SimpleChanges, OnChanges } from '@angular/core';

@Directive({
  selector: '[appDisableButton]'
})
export class DisableButtonDirective implements OnChanges {
  
  private initColor: string;

  @Input("appDisableButton") disable: boolean;

  constructor(private elRef: ElementRef) {
    this.initColor = elRef.nativeElement.style.color;
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log("there was a change");
    if (this.disable) {
      // console.log("now it is true");
      this.elRef.nativeElement.disabled = true;
      this.elRef.nativeElement.classList.add("ttt-disable");
    }
  }

  // @HostListener("mouseenter") onMouseEnter() {
  //   this.elRef.nativeElement.classList.add("ttt-disable");
  // }

  // @HostListener("mouseleave") onMouseLeave() {
  //   console.log(this.elRef);
  //   console.log(this.disable);
  //   this.elRef.nativeElement.style.color = this.initColor;
  // }

}
