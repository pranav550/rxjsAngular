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
import { SkipSkipLastComponent } from './skip-skip-last/skip-skip-last.component';
import { SkipWhileSkipUntilComponent } from './skip-while-skip-until/skip-while-skip-until.component';
import { ConcatComponent } from './concat/concat.component';
import { ConcatAllComponent } from './concat-all/concat-all.component';
import { ConcatMapConcatMapToComponent } from './concat-map-concat-map-to/concat-map-concat-map-to.component';
import { MergeMergeMapMergeAllComponent } from './merge-merge-map-merge-all/merge-merge-map-merge-all.component';
import { BufferBufferCountComponent } from './buffer-buffer-count/buffer-buffer-count.component';
import { BufferTimeBufferToggleComponent } from './buffer-time-buffer-toggle/buffer-time-buffer-toggle.component';
import { ThrottleThrottleTimeComponent } from './throttle-throttle-time/throttle-throttle-time.component';
import { ZipComponent } from './zip/zip.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ForkjoinComponent } from './forkjoin/forkjoin.component';
import { RetryRetryWhenComponent } from './retry-retry-when/retry-retry-when.component';
import { WithLatestFromComponent } from './with-latest-from/with-latest-from.component';
import { DebounceDebounceTimeComponent } from './debounce-debounce-time/debounce-debounce-time.component';
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
      { path: "takeWhileTakeUntil", component: TakeWhileTakeUntilComponent },
      { path: "skip-skipLast", component: SkipSkipLastComponent },
      { path: "skipWhile-skipUntil", component: SkipWhileSkipUntilComponent },
      { path: "concat", component: ConcatComponent },
      { path: "concatAll", component: ConcatAllComponent },
      { path: "concatMap-concatMapTo", component: ConcatMapConcatMapToComponent },
      { path: "merge-mergeMap-merge-All", component: MergeMergeMapMergeAllComponent },
      { path: "buffer-bufferCount", component: BufferBufferCountComponent },
      { path: "bufferTime-bufferToggle", component: BufferTimeBufferToggleComponent },
      { path: "throttle-throttleTime", component: ThrottleThrottleTimeComponent },
      { path: "zip", component: ZipComponent },
      { path: "combineLatest", component: CombineLatestComponent },
      { path: "forkjoin", component: ForkjoinComponent },
      { path: "retry-retryWhen", component: RetryRetryWhenComponent },
      { path: "withLatestFrom", component: WithLatestFromComponent },
      { path: "debounce-debounceTime", component: DebounceDebounceTimeComponent },

    ],
  },
];
@NgModule({
  declarations: [ToArrayComponent, OperatorsComponent, MapMapToComponent, PluckComponent, StartWithComponent, EveryComponent, DistinctUntilChangedComponent, DefaultIfEmptyComponent, DelayWhenComponent, TakeWhileTakeUntilComponent, SkipSkipLastComponent, SkipWhileSkipUntilComponent, ConcatComponent, ConcatAllComponent, ConcatMapConcatMapToComponent, MergeMergeMapMergeAllComponent, BufferBufferCountComponent, BufferTimeBufferToggleComponent, ThrottleThrottleTimeComponent, ZipComponent, CombineLatestComponent, ForkjoinComponent, RetryRetryWhenComponent, WithLatestFromComponent, DebounceDebounceTimeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatListModule],
})
export class OperatorsModule { }
