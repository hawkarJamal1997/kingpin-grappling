import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NavbarComponent} from './navbar/navbar.component'

const routes: Routes = [ 
  { path: '', component: NavbarComponent  },
  { path: 'about', component: NavbarComponent },
  { path: 'contact', component: NavbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
