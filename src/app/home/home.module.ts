import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { TitleModule } from '../shared/components/title/title.module';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TitleModule
  ],
  exports: [],
  providers: [],
})
export class HomeModule {}
