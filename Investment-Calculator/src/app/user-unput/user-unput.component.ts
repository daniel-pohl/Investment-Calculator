import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-unput',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-unput.component.html',
  styleUrl: './user-unput.component.css'
})
export class UserUnputComponent {
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';
  
  onSubmit(){
    console.log('submitted!!');
    console.log(this.enteredInitialInvestment);
    console.log(this.enteredAnnualInvestment);
    console.log(this.enteredExpectedReturn);
    console.log(this.enteredDuration);
  }

}
