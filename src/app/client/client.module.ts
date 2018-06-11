import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { AngularFireAuth } from 'angularfire2/auth';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    HomeComponent,
    LoginPageComponent
  ],
  providers: [AngularFireAuth],
  exports: [
    HomeComponent,
    LoginPageComponent
  ]
})
export class ClientModule { }
