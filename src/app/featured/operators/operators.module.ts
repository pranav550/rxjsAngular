import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToArrayComponent } from "./to-array/to-array.component";
import { Routes, RouterModule } from "@angular/router";
import { OperatorsComponent } from "./operators/operators.component";
import { MatListModule } from "@angular/material/list";
import { MapMapToComponent } from './map-map-to/map-map-to.component';
import { PluckComponent } from './pluck/pluck.component';
import { StartWithComponent } from './start-with/start-with.component';
import { EveryComponent } from './every/every.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { DefaultIfEmptyComponent } from './default-if-empty/default-if-empty.component';
import { DelayWhenComponent } from './delay-when/delay-when.component';
import { TakeWhileTakeUntilComponent } from './take-while-take-until/take-while-take-until.component';
const routes: Routes = [
  { path: "operators", component: OperatorsComponent },
  {
    path: "operators",
    children: [
      { path: "to-array", component: ToArrayComponent },
      { path: "map-mapTo", component: MapMapToComponent },
      { path: "pluck", component: PluckComponent },
      { path: "startWith", component: StartWithComponent },
      { path: "every", component: EveryComponent },
      { path: "distinctUntilChanged", component: DistinctUntilChangedComponent },
      { path: "defaultIfEmpty", component: DefaultIfEmptyComponent },
      { path: "delayWhen", component: DelayWhenComponent },
      { path: "takeWhileTakeUntil", component: TakeWhileTakeUntilComponent }
    ],
  },
];
@NgModule({
  declarations: [ToArrayComponent, OperatorsComponent, MapMapToComponent, PluckComponent, StartWithComponent, EveryComponent, DistinctUntilChangedComponent, DefaultIfEmptyComponent, DelayWhenComponent, TakeWhileTakeUntilComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatListModule],
})
export class OperatorsModule { }
