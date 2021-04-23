import { GrapplingTypeComponent } from './grapplingtype/grapplingtype.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { VarderingarComponent } from './varderingar/varderingar.component';
import { OmOssComponent } from './om-oss/om-oss.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { KingpinKidsSidaComponent } from './kingpin-kids-sida/kingpin-kids-sida.component';
import { LokalenComponent } from './lokalen/lokalen.component';
import { MedlemskapComponent } from './medlemskap/medlemskap.component';

import { ScheduleComponent } from './schedule/schedule.component';
import { HomeHeaderComponent } from './home-header/home-header.component';


@NgModule({
  declarations: [
    AppComponent,
    VarderingarComponent,
    GrapplingTypeComponent,
    OmOssComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    FaqComponent,
    KingpinKidsSidaComponent,
    LokalenComponent,
    ScheduleComponent,
    MedlemskapComponent,
    HomeHeaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatExpansionModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCg_1k4w5b0sK2QIWzchHV1lQx1RzDJzdA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

