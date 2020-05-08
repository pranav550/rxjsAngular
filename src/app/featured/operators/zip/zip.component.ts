import { ListService } from './../../../shared/services/list.service';
import { Component, OnInit } from '@angular/core';
import { of, zip } from 'rxjs';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.css']
})
export class ZipComponent implements OnInit {

  constructor(private list: ListService) { }

  ngOnInit(): void {
    this.getZip()
  }

  getZip() {
    const source1 = of("Hello")
    const source2 = of("World")
    zip(source1, source2).subscribe(res => {
      this.list.print(res, 'element1')
      // console.log(res)
    })
  }

}
