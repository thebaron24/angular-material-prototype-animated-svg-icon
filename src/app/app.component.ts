import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'ng-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular Material Animated Icons';
  animate = false;

  constructor(
    iconReg: MatIconRegistry, sanitizer: DomSanitizer
    ) {
      iconReg.addSvgIconSetInNamespace
        ( "action", sanitizer.bypassSecurityTrustResourceUrl("node_modules/material-design-icons/sprites/svg-sprites/svg-sprite-action.svg"));

      console.log(iconReg.getDefaultFontSetClass());
  }

  toggleAnimate(){
    this.animate = !this.animate;
  }
}
