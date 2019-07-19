import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ElementRef } from '@angular/core';
//import { ElementserviceService } from '../elementservice.service';
import { Router } from '@angular/router';
import { ElementserviceService } from '../elementservice.service';




@Component({
  selector: 'app-formelements',
  templateUrl: './formelements.component.html',
  styleUrls: ['./formelements.component.css']
})

export class FormelementsComponent  {
     numbers =[
      { name: 'Text', type: 'input-text', inputType: 'text', placeholder: 'Enter the Text' ,text:'Name'},
      { name: 'checkbox', type: 'input-check', inputType: 'checkbox', placeholder: 'Name', checkbox: 'Check box' },
      {name:'radio',type:'radio', inputType:'radio', radio:'radio'}
    ];
  otherNumbers:any[]=[];
  result:any;
    constructor(protected elementRef: ElementRef, public myRouter:Router, public receiver:ElementserviceService )  {}
    renderHtmlCode(htmlObject: any): any {
      if (htmlObject.inputType === 'label') {
        
      } else {     
         return '<input type="' + this.otherNumbers[0].inputType + '" />';
    }
    }
       drop(event: CdkDragDrop<{input:string,convert:string}[]>){
      if(event.previousContainer!==event.container){
       transferArrayItem(event.previousContainer.data,event.container.data,event.previousIndex,event.currentIndex)
      }
      else{
     moveItemInArray(this.numbers,event.previousIndex,event.currentIndex);
      }
      this.result += this.renderHtmlCode(this.otherNumbers);
    }   
    dosub(data:any) {
  this.receiver.gets(data).subscribe((data:any)=>{
   // this.myRouter.navigateByUrl("main");   
  console.log("data");
})

    }
    
  }
  
 
  



