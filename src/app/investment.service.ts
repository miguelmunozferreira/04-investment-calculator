import { Injectable, signal } from "@angular/core";
import { InvestmentInput } from "./investment-input.model";

@Injectable({ providedIn: "root" })
export class InvestmentService {
  resultData = signal<
    | {
        year: number;
        interest: number;
        valueEndOfYear: number;
        annualInvestment: number;
        totalInterest: number;
        totalAmountInvested: number;
      }[]
    | undefined
  >(undefined);

  calculateInvestmentResults(data: InvestmentInput) {
    const annualData = [];
    let investmentValue = data.investmentInitial;

    for (let i = 0; i < data.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (data.investmentExpected / 100);
      investmentValue += interestEarnedInYear + data.investmentAnnual;
      const totalInterest = investmentValue - data.investmentAnnual * year - data.investmentInitial;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: data.investmentAnnual,
        totalInterest: totalInterest,
        totalAmountInvested: data.investmentInitial + data.investmentAnnual * year,
      });
    }

    this.resultData.set(annualData);
  }
}
