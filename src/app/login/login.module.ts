import { TitleModule } from './../shared/components/title/title.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login.routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    TitleModule
  ],
  exports: [],
  providers: [],
})
export class LoginModule {}
