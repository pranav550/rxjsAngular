import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FromComponent } from './from/from.component';
import { IntervalComponent } from './interval/interval.component';
import { OfComponent } from './of/of.component';
import { TimerComponent } from './timer/timer.component';
import { Routes, RouterModule } from '@angular/router';
import { CreateObservableComponent } from './create-observable/create-observable.component';
import {MatListModule} from '@angular/material/list';

const routes: Routes = [
  {path:'createObservable', component:CreateObservableComponent},
  {path:'createObservable', children:[
    {path:'from', component: FromComponent},
    {path:'of', component: OfComponent},
    {path:'interval', component: IntervalComponent},
    {path:'timer', component: TimerComponent},
    
  ]}
];



@NgModule({
  declarations: [FromComponent, IntervalComponent, OfComponent, TimerComponent, CreateObservableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule
  ]
})
export class CreateObservableModule { }
