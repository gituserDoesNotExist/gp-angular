import { OnChanges, Directive, Input, ElementRef, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightButton]'
})
export class HighlightButtonDirective implements OnChanges{

  @Input("appHighlightButton") gameOver: boolean;

  constructor(private elRef: ElementRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.gameOver) {
      this.elRef.nativeElement.style.backgroundColor = "green";
    }
  }

}
