import { interval, of, from, timer } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { take, toArray } from "rxjs/operators";

@Component({
  selector: "app-to-array",
  templateUrl: "./to-array.component.html",
  styleUrls: ["./to-array.component.css"],
})
export class ToArrayComponent implements OnInit {
  source1: any;
  source2: any;
  source3: any;
  source4: any;
  users = [
    { name: "test1", skills: "React" },
    { name: "test2", skills: "Angular" },
    { name: "test3", skills: "Javascript" },
    { name: "test4", skills: "Nodejs" },
  ];
  constructor() { }

  ngOnInit(): void {
    this.useInterval();
    this.useOf();
    this.useFrom();
    this.useTimer()
  }

  useInterval() {
    const source1 = interval(1000);
    source1.pipe(take(3), toArray()).subscribe((res) => {
      this.source1 = res;
    });
  }

  useOf() {
    const source2 = of("test1", "test2", "test3", "test4");
    source2.pipe(toArray()).subscribe((res) => {
      this.source2 = res;
    });
  }

  useFrom() {
    const source3 = from(this.users);
    source3.pipe(toArray()).subscribe((res) => {
      this.source3 = res;
    });
  }

  useTimer() {
    const source4 = timer(1000, 1000);
    source4.pipe(take(3), toArray()).subscribe(res => {
      console.log(res)
      this.source4 = res;
    })
  }
}
