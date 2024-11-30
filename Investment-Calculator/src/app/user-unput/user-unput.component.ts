import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-unput',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-unput.component.html',
  styleUrl: './user-unput.component.css'
})
export class UserUnputComponent {
  @Output() calculate = new EventEmitter<{
    initialInvestment: number,
    duration: number,
    expectedReturn: number,
    annualInvestment: number
  }>();
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';
  
  onSubmit(){
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment 
  });

  }

}
