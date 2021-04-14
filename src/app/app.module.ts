import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core'



import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { VarderingarComponent } from './varderingar/varderingar.component';
import { InriktningarComponent } from './inriktningar/inriktningar.component';
import { OmOssComponent } from './om-oss/om-oss.component';
import { KingpinKidsComponent } from './kingpin-kids/kingpin-kids.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    VarderingarComponent,
    InriktningarComponent,
    OmOssComponent,
    KingpinKidsComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    FaqComponent
  ],
  imports: [
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

