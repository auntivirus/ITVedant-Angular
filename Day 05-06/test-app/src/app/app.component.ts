import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  fontcolor = "pink";
  id = 101;
  name = "ABCD EFGH";
  salary = 1234;
// Creating an object of emp
  emp = {
    'id': '102',
    'name': 'IJKL MNOP',
    'salary': 235601
  }
  // Single Style Binding e.g.
  singleStyle = "red";
  // Multiple Style Binding e.g.
  multipleStyle = "color:green; font-size:28px; text-decoration:underline";

  // Single Class Binding e.g.
  x = "x";
  // Multiple Class Binding e.g.
  pc1 = true;
  pc2 = true;
  pc3 = true;

  multipleSelector = {
    'c1': this.pc1,
    'c2': this.pc2,
    'c3': this.pc3
  }
  // Conditional Binding e.g.
  condition = true;

  /*
    Two way data binding -
      It refers to sharing data between component class and it's template
      It is automatic synchronization of data. So if you change data in one place, it will automatically reflect at another place.
      This is useful for input validation and manipulation.
      Two Way Data Binding is defined with 'ngModel'. It's syntax is: [(ngModel)]
      For the two way data binding, we need to import module named as FormsModule
  */
 myText = "";

//  Event Binding
func() {
  alert("Event Binding Triggered!!!");
  }

  setColor = '';

  redColor() {
    this.setColor = "red";
  }
  blueColor() {
    this.setColor = "yellow";
  }
/*                     Data Types
      Data Types                      Uses
      1. number                       It can store whole as well as decimal numbers.
      2. boolean                      It represents true/false.
      3. string                       It represents sequence of characters.
      4. void                         It represents function return types.
      5. null                         It is used when object does not have any value.
      6. undefined                    It denotes un-initialized value.
      7. any                          It is used to store any type of value.

      Syntax for variable declaration in TypeScript
      varname : datatype

      Template Reference Variable - 
      Syntax: <input type="text" #reference_var>
*/
// EOL
}
