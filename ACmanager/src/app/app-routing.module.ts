import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalViewComponent } from './principal-view/principal-view.component';

const routes: Routes = [
{path: 'principal-view', component:PrincipalViewComponent},
{ path: '**', component:PrincipalViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
