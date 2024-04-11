import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAppNot]'
})
export class AppNotDirective {

  constructor(
    private tempRef: TemplateRef<any>,
    private viewCont: ViewContainerRef
  ) { }

  @Input() set appNot(condition: boolean) {
    if (!condition) {
      this.viewCont.createEmbeddedView(this.tempRef);
    } else {
      this.viewCont.clear();
    }
  }
}
