import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { RegistrationComponent } from './registration/registration.component';
import { SuccessRegistrationComponent } from './success-registration/success-registration.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const appRoutes: Routes =[
    { path: '', component: ContentComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'success-registration', component: SuccessRegistrationComponent },
    { path: 'signIn', component: SignInComponent },
    { path: '**', component: PageNotFoundComponent }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);