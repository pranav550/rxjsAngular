import { ListService } from './../../../shared/services/list.service';
import { Component, OnInit } from '@angular/core';
import { timer, Subscription } from 'rxjs';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  release:Subscription
  constructor(private service:ListService) { }

  ngOnInit(): void {
    this.getTimer()
  }

  getTimer(){
    const numbers = timer(2000, 1000);
   this.release= numbers.subscribe(x => {
      let argument = 'item ' + x
      this.service.print(argument, 'element1')
      if(x>=5){
        this.release.unsubscribe()
      }
    });

  }

}
