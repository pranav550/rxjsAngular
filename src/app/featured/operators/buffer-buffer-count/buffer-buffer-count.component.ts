import { ListService } from './../../../shared/services/list.service';
import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { buffer, take, bufferCount } from 'rxjs/operators';

@Component({
  selector: 'app-buffer-buffer-count',
  templateUrl: './buffer-buffer-count.component.html',
  styleUrls: ['./buffer-buffer-count.component.css']
})
export class BufferBufferCountComponent implements OnInit {

  constructor(private list: ListService) { }

  ngOnInit(): void {
    this.getBuffer()
    this.getBufferCount()
  }


  getBuffer() {
    const clicks = fromEvent(document, 'click');
    interval(1000).pipe(take(10), buffer(clicks)).subscribe(res => {
      this.list.print(res, 'element1')
    })
  }

  getBufferCount() {
    interval(1000).pipe(take(10), bufferCount(2)).subscribe(res => {
      this.list.print(res, 'element2')
    })
  }


}
