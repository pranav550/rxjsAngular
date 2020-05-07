import { ListService } from './../../../shared/services/list.service';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { startWith, scan, } from 'rxjs/operators';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.css']
})
export class StartWithComponent implements OnInit {

  constructor(private service: ListService) { }

  ngOnInit(): void {
    this.getStartWith()
  }

  getStartWith() {
    let source = of("dkjhfffjfijio89979juiytg7t76g67yg78657767677786778");
    source.pipe(startWith('Bearer '), scan((curr, next) => curr + next)).subscribe(res => {
      console.log(res)
      this.service.print(res, 'element1')
    })
  }

}
