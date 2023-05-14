import { DateUtilities } from "../Tools/date-utilities";
import { DEFAULT_TAX } from "../enum/tax.enum";
import { CreditCard } from "./credit-card";

export class AmericanExpressCard extends CreditCard{
  constructor(cardNumber: string, cvv: string, expirationDate: string){
    super(cardNumber, cvv, expirationDate);
  }

  override calculatedTax(): number {
    if(DateUtilities.isWeekEnd()){
      return DEFAULT_TAX.AMERICA_EXPRESS + 0.01;
    }
    return  DEFAULT_TAX.AMERICA_EXPRESS;
  }

}
