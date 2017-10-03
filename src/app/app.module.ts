import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from "ngx-modal";
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { MessageComponent } from './message/message.component';
import { TextCutting } from './pipes/text-cutting.pipe';
import { MessageMenuComponent } from './message-menu/message-menu.component';
import { RegistrationComponent } from './registration/registration.component';
import { SuccessRegistrationComponent } from './success-registration/success-registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';

const appRoutes: Routes =[
  { path: '', component: ContentComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'success-registration', component: SuccessRegistrationComponent },
  { path: 'signIn', component: SignInComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    MessageFormComponent,
    MessageComponent,
    TextCutting,
    MessageMenuComponent,
    RegistrationComponent,
    SuccessRegistrationComponent,
    PageNotFoundComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    ModalModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
