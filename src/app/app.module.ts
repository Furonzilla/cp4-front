import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { IdeaCardComponent } from './components/idea-card/idea-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './pages/form/form.component';
import { FormEditIdeaComponent } from './pages/form-edit-idea/form-edit-idea.component';
import { UserIdeasComponent } from './pages/user-ideas/user-ideas.component';
import {ReactiveFormsModule} from '@angular/forms';
import {authInterceptorProviders} from './core//helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    SignInComponent,
    SignUpComponent,
    IdeaCardComponent,
    FormComponent,
    FormEditIdeaComponent,
    UserIdeasComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [authInterceptorProviders,],
  bootstrap: [AppComponent],
})
export class AppModule {}
