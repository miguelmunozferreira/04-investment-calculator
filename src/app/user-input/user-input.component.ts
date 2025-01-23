import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InvestmentService } from "../investment.service";

@Component({
  selector: "app-user-input",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./user-input.component.html",
  styleUrl: "./user-input.component.css",
})
export class UserInputComponent {
  inputInvestmentInitial = signal(0);
  inputInvestmentAnnual = signal(0);
  inputExpectedReturn = signal(5);
  inputDuration = signal(10);

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      investmentInitial: this.inputInvestmentInitial(),
      investmentAnnual: this.inputInvestmentAnnual(),
      investmentExpected: this.inputExpectedReturn(),
      duration: this.inputDuration(),
    });
    this.inputInvestmentInitial.set(0);
    this.inputInvestmentAnnual.set(0);
    this.inputExpectedReturn.set(5);
    this.inputDuration.set(10);
  }
}
