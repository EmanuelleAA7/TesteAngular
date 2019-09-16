import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssueComponent } from './issue/issue.component';
import { LoginFormComponent } from './login-form/login-form.component';


const routes: Routes = [
  { path: 'issue', component: IssueComponent },
  { path: 'login', component: LoginFormComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
