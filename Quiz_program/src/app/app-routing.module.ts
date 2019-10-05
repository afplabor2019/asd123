import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { LoginComponent } from './components/login/login.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'test', component: TestComponent},
  {path:'login', component: LoginComponent},
  {path:'addQuestion', component: AddQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
