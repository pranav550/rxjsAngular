import { CreateObservableComponent } from './featured/create-observable/create-observable/create-observable.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { CreateObservableModule } from './featured/create-observable/create-observable.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo:'createObservable', pathMatch:'full'},
  {path:'createObservable', component:CreateObservableComponent},
  { path: 'createObservable', loadChildren: () => import('./featured/create-observable/create-observable.module').then(m => m.CreateObservableModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CreateObservableModule
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
