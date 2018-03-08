import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from '../app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppContentComponent } from './app-content/app-content.component';
import { AppFooterComponent } from './app-footer/app-footer.component';


@NgModule({
  imports: [CommonModule, RouterModule, NgbModule.forRoot()],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppContentComponent
  ],
  exports: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppContentComponent
  ]
})
export class AppMainModule {}
