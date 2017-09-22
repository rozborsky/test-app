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
import { TextCutting } from './text-cutting.pipe';
import { MessageMenuComponent } from './message-menu/message-menu.component';
import { RegistrationComponent } from './registration/registration.component';

const appRoutes: Routes =[
  { path: '', component: ContentComponent},
  { path: 'registration', component: RegistrationComponent}
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
    RegistrationComponent
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
