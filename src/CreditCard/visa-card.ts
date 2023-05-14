import { DateUtilities } from "../Tools/date-utilities";
import { DEFAULT_TAX } from "../enum/tax.enum";
import { CreditCard } from "./credit-card";

export class Visa extends CreditCard{
  private cardHolder: string;
  constructor(cardHolder: string, cardNumber: string, cvv: string, expirationDate: string){
    super(cardNumber, cvv, expirationDate);
    this.cardHolder = cardHolder;
  }

  getCardHolder(){
    return this.cardHolder;
  }

  setCardHolder(cardHolder: string){
    return this.cardHolder =  cardHolder;
  }

  override calculatedTax(): number {
    if(DateUtilities.isWeekEnd()){
      return DEFAULT_TAX.VISA + 0.01;
    }
    return  DEFAULT_TAX.VISA;
  }

  override printInfo(): string {
    return `CardNumber: ${super.getCardNumber()}, CardHolder: ${this.getCardHolder()}, Tax: ${this.calculatedTax()} `
  }
}
