import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, } from '@angular/core';
import { from, timer, interval, fromEvent } from 'rxjs';
import { delayWhen } from 'rxjs/operators';


@Component({
  selector: 'app-delay-when',
  templateUrl: './delay-when.component.html',
  styleUrls: ['./delay-when.component.css']
})
export class DelayWhenComponent implements OnInit, AfterViewInit {
  @ViewChild('circle') circle: ElementRef
  constructor() { }

  ngOnInit(): void {
    //this.getDelayWhen()
  }

  ngAfterViewInit() {
    this.getDelayWhen()
  }

  getDelayWhen() {
    const app = document.getElementById('btn');
    let btn_clicks = fromEvent(this.circle.nativeElement, 'mousemove');
    btn_clicks.pipe(delayWhen(() => timer(100))).subscribe(res => {
      console.log(res)
      app.setAttribute('style', `top: ${res['clientY']}px; left: ${res['clientX']}px;`);

    });
  }

}
