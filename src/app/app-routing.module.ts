import { ScheduleComponent } from './schedule/schedule.component';
import { VarderingarComponent } from './varderingar/varderingar.component';
import { OmOssComponent } from './om-oss/om-oss.component';
import { KingpinKidsComponent } from './kingpin-kids/kingpin-kids.component';
import { GrapplingTypeComponent } from './grapplingtype/grapplingtype.component';
import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {OmOssComponent} from './om-oss/om-oss.component'
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import {KingpinKidsSidaComponent} from './kingpin-kids-sida/kingpin-kids-sida.component';

const routes: Routes = [ 
  { path: '', component: HomeComponent  },
  { path: 'about', component: OmOssComponent },
  {path: 'home', component: HomeComponent},
  {path: 'inriktning', component: GrapplingTypeComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'kinpin-kids', component: KingpinKidsComponent},
  {path: 'about', component: OmOssComponent},
  {path: 'values', component: VarderingarComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'KingpinKids', component: KingpinKidsSidaComponent}
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
