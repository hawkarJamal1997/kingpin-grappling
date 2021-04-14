import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NavbarComponent} from './navbar/navbar.component'
import {OmOssComponent} from './om-oss/om-oss.component'
const routes: Routes = [ 
  { path: '', component: NavbarComponent  },
  { path: 'about', component: OmOssComponent },
  { path: 'contact', component: NavbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
