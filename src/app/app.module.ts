import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VarderingarComponent } from './varderingar/varderingar.component';
import { InriktningarComponent } from './inriktningar/inriktningar.component';
import { OmOssComponent } from './om-oss/om-oss.component';
import { KingpinKidsComponent } from './kingpin-kids/kingpin-kids.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    VarderingarComponent,
    InriktningarComponent,
    OmOssComponent,
    KingpinKidsComponent
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


