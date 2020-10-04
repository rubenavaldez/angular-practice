import { Component } from '@angular/core';
// Decorator uses the @ symbol 
@Component({
  selector: 'app-root',  //name of the tag the componet is applied to 
  // templateUrl: './app.component.html', // html template 
  // change to backtick ` for multiple lines 
  template:`  
  <h1>Hello World!</h1>
  <p>How are you?</p>
  <p>{{myObject.location}}</p>
  <ul>
    <li *ngFor="let arr of myArr">{{arr}}</li>
  </ul>
  <ul>
    <li *ngIf="myArr; else otherTmpl">Yes it exists</li>
    <li *ngIf="myArr != 'something'">Not something</li>
    <li *ngIf="myArr == 'nothing'">It's nothing</li>
  </ul>
  <ng-template #otherTmpl>No, I do</ng-template>

  <div *ngIf="myBool; then tmpl1 else tmpl2"></div>
  <ng-template #tmpl1>Template 1</ng-template>
  <ng-template #tmpl2>Template 2</ng-template>
  `,
  styleUrls: ['./app.component.css']  // style sheet for this component 
})
export class AppComponent {  //component class properties and method also dependency injections
  title = 'component101';
  myObject = {
    gender:'male',
    age: 33,
    location:'USA'
  };
  myArr =['him','hers','yours'];
  myBool = false;
}
