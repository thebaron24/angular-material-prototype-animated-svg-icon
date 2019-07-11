import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { MatAnimatedIconComponent } from './mat-animated-icon/mat-animated-icon.component';
import { VarDirective } from './directives/var.directive';

@NgModule({
  imports:      [ MaterialModule, HttpClientModule ],
  declarations: [ AppComponent, VarDirective, MatAnimatedIconComponent, VarDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
