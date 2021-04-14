import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'faq', component: FaqComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCg_1k4w5b0sK2QIWzchHV1lQx1RzDJzdA'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
