import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserUnputComponent } from "./user-unput/user-unput.component";
import { Investmentinput } from './investment-input.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserUnputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Investment-Calculator';

  onCalculateInvestmentResults(data:Investmentinput) {
    const {initialInvestment, duration, expectedReturn, annualInvestment} = data;
    const annualData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    //return annualData;
    console.log(annualData);
  }
}
