import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { UserInput } from "./user-input/user-input.model";
import { InvestmentResult } from "./investment-results/investment-results.model";
import { InvestmentService } from "./investment.service";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  investmentResult: Array<InvestmentResult> | undefined;

  constructor(private investmentService: InvestmentService) {}

  onCalculateInvestment(userInput: UserInput) {
    this.investmentResult = this.investmentService.calculateInvestmentResults(userInput.investmentInitial, userInput.investmentAnnual, userInput.investmentExpected, userInput.duration);
  }
}
