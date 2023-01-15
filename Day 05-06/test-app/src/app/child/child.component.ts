import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  check: boolean = true;

  myvalue: string = "";
  display(x:any) {
    this.myvalue = x;
  }

  /*      Directives - 
          They are defined as classes that can add new behaviour to the elements in the template or modify existing behaviour.
          
        Built-in attribute directives:
        i.   NgClass
        ii.  NgStyle
        iii. NgModel

        Built-in structural directives:
          It is responsible for HTML Layout.
          They shape or re-shape DOM structure by adding, removing and manipulating the host element.

          i.   NgIf -
                  Syntax: <element *ngIf="condition"></element>
                  OR
                  Syntax: <element *ngIf="condition then refVar1 else refVar2"></element>
          ii.  NgSwitch -
                  Syntax: [ngSwitch] - to check condition
                          *ngSwitchCase 
                          *ngSwitchDefault
          iii. NgFor -
                  Syntax <element *ngFor="let varname of target_var"></element>
*/

  num: number = 37;
  // ngSwitch examples
  color: string = "green";
  operation: string = "";
  num1: number = 11;
  num2: number = 22;

  op(operation: string) {
    this.operation = operation;
    console.log(this.operation);
  }

  // ngFor examples
  obj1 = [
    {'id':101,'name':'ABC','salary':1000},
    {'id':102,'name':'DEF','salary':2000},
    {'id':103,'name':'IJK','salary':3000},
    {'id':104,'name':'LMN','salary':4000}
  ];
}


// EOL