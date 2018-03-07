import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppContentComponent } from './app-content/app-content.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatGridListModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatExpansionModule,
  MatFormFieldModule
} from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule
  ],
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
