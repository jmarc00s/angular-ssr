import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about.routing.module';
import { AboutComponent } from './about.component';
import { TitleModule } from '../shared/components/title/title.module';


@NgModule({
  declarations: [ AboutComponent ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    TitleModule
  ]
})
export class AboutModule { }
