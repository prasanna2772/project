import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { FormelementsComponent } from './formelements/formelements.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import{FormsModule}from '@angular/forms';
import { ElementsComponent } from './elements/elements.component';
import{HttpClientModule}from '@angular/common/http';

const appRoutes : Routes = [{path:'',component:FormelementsComponent},{path:'main',component:ElementsComponent}];

@NgModule({
  declarations: [
    AppComponent,
    FormelementsComponent,
    ElementsComponent
   
  ],
  imports: [
    BrowserModule,HttpClientModule,
    DragDropModule,FormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
