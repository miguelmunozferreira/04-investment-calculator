import { Component, Input } from "@angular/core";
import { InvestmentResult } from "./investment-results.model";

@Component({
  selector: "app-investment-results",
  standalone: true,
  imports: [],
  templateUrl: "./investment-results.component.html",
  styleUrl: "./investment-results.component.css",
})
export class InvestmentResultsComponent {
  formatter = new Intl.NumberFormat("en-US");
  @Input({ required: true }) investmentResult!: Array<InvestmentResult>;

  formatNumber(value: number): string {
    return this.formatter.format(value);
  }
}
