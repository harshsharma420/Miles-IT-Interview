import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNot]'
})
export class AppNotDirective {

  constructor(
    private tempRef: TemplateRef<any>,
    private viewCont: ViewContainerRef
  ) { }
//this will do the opposite of ngIf
  @Input() set appNot(condition: boolean) {
    if (!condition) {
      this.viewCont.createEmbeddedView(this.tempRef);
    } else {
      this.viewCont.clear();
    }
  }
}
