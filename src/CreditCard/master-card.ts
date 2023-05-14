import { DateUtilities } from "../Tools/date-utilities";
import { DEFAULT_TAX } from "../enum/tax.enum";
import { CreditCard } from "./credit-card";

export class MasterCard extends CreditCard{
  private date = new DateUtilities();
  constructor(cardNumber: string, cvv: string, expirationDate: string){
    super(cardNumber, cvv, expirationDate);
  }

  override calculatedTax(): number {
    if(this.date.isWeekEnd()){
      return DEFAULT_TAX.MASTERCARD + 0.01;
    }
    return  DEFAULT_TAX.MASTERCARD;
  }

}
