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
      // iconReg.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('/assets/MaterialIcons-Regular.svg#MaterialIcons-Regular'));
  }

  toggleAnimate(){
    this.animate = !this.animate;
  }
}
