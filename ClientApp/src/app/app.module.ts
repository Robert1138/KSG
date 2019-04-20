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



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FormPageComponent,
    AboutComponent,
    LoginComponent,
    UserComponent
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

  ],
  providers: [
    ViewpdfService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
