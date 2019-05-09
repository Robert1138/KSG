import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material'; 





//f0ead6

import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FormPageComponent } from './form-page/form-page.component';
import { AboutComponent } from './about/about.component';


import { ViewpdfService } from './viewpdf.service';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';

import { CustomMaterialModule } from './material';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ExampledashComponent } from './exampledash/exampledash.component';

//services
import { AccountService } from './account.service';
import { Login2Component } from './login2/login2.component';
import { User2Component } from './user2/user2.component';
import { UserService } from './user.service';
import { UserTableComponent } from './user-table/user-table.component';
import { AccountsInfoComponent } from './accounts-info/accounts-info.component';
import { AccountDetailsComponent } from './account-details/account-details.component';  




@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FormPageComponent,
    AboutComponent,
    LoginComponent,
    UserComponent,
    LandingPageComponent,
    ExampledashComponent,
    Login2Component,
    User2Component,
    UserTableComponent,
    AccountsInfoComponent,
    AccountDetailsComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatStepperModule,
    RoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    PdfViewerModule,
    CustomMaterialModule,
    HttpClientModule,
    MatTableModule,
  ],
  providers: [
    ViewpdfService, AccountService, UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
