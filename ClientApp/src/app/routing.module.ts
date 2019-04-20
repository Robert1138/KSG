import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FormPageComponent } from './form-page/form-page.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'formpage', component: FormPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },


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
