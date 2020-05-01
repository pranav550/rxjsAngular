import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  print(val, divId){
    let el = document.createElement('li')
    el.innerText = val
    document.getElementById(divId).appendChild(el)
  }
}
