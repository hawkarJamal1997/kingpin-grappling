import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VarderingarComponent } from './varderingar/varderingar.component';
import { InriktningarComponent } from './inriktningar/inriktningar.component';

@NgModule({
  declarations: [
    AppComponent,
    VarderingarComponent,
    InriktningarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
