import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NavbarComponent} from './navbar/navbar.component'
import {OmOssComponent} from './om-oss/om-oss.component'
const routes: Routes = [ 
  { path: '', component: HomeComponent  },
  { path: 'about', component: OmOssComponent },
  { path: 'contact', component: NavbarComponent },
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
