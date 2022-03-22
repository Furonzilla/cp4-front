import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEditIdeaComponent } from './pages/form-edit-idea/form-edit-idea.component';
import { FormComponent } from './pages/form/form.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { UserIdeasComponent } from './pages/user-ideas/user-ideas.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'edit',
    component: FormEditIdeaComponent,
  },
  {
    path: 'your-ideas',
    component: UserIdeasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
