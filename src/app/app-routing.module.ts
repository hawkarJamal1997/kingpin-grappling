import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {OmOssComponent} from './om-oss/om-oss.component'
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import {KingpinKidsSidaComponent} from './kingpin-kids-sida/kingpin-kids-sida.component';
import { MedlemskapComponent} from './medlemskap/medlemskap.component';

const routes: Routes = [ 
  { path: '', component: HomeComponent  },
  { path: 'about', component: OmOssComponent },
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'KingpinKids', component: KingpinKidsSidaComponent},
  {path:'membership', component: MedlemskapComponent}
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
