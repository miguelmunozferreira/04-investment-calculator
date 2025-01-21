import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UserInput } from "./user-input.model";

@Component({
  selector: "app-user-input",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./user-input.component.html",
  styleUrl: "./user-input.component.css",
})
export class UserInputComponent {
  @Output() calculateInvestment = new EventEmitter<UserInput>();
  inputInvestmentInitial = 0;
  inputInvestmentAnnual = 0;
  inputExpectedReturn = 0;
  inputDuration = 10;

  onSubmit() {
    if (this.inputInvestmentAnnual)
      this.calculateInvestment.emit({
        investmentInitial: this.inputInvestmentInitial,
        investmentAnnual: this.inputInvestmentAnnual,
        investmentExpected: this.inputExpectedReturn,
        duration: this.inputDuration,
      });
  }
}
