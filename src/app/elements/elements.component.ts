import { Component, OnInit } from '@angular/core';
import {ElementserviceService} from '../elementservice.service';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {
arr:any[]=[];
  constructor(public doRec:ElementserviceService) { }

  ngOnInit() {
  }
getser(data){
this.doRec.gets(data).subscribe((data:any)=>{
  console.log(data);
})
}
}
