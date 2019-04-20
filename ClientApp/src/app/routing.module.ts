import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FormPageComponent } from './form-page/form-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { RouterModule, Routes } from '@angular/router';
import { ExampledashComponent } from './exampledash/exampledash.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'formpage', component: FormPageComponent },
  { path: 'dashboard', component: ExampledashComponent },
  { path: 'home', component: LandingPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},


];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
     RouterModule
  ]
})
export class RoutingModule { }
