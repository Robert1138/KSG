import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FormPageComponent } from './form-page/form-page.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { Login2Component } from './login2/login2.component';
import { User2Component } from './user2/user2.component';

import { RouterModule, Routes } from '@angular/router';
import { ExampledashComponent } from './exampledash/exampledash.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'formpage', component: FormPageComponent },
  { path: 'login', component: LoginComponent},
  { path: 'user', component: UserComponent },
  { path: 'dashboard', component: ExampledashComponent },
  { path: 'home', component: LandingPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'account/:id', component: LandingPageComponent },

  { path: 'login2', component: Login2Component},
  { path: 'user2', component: User2Component },


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
