import { DateUtilities } from "../Tools/date-utilities";
import { PaymentProcessor } from "./payment-processor";

export class SquarePaymentProcessor implements PaymentProcessor{
  private date = new DateUtilities()
  public processPayment(amount: number): boolean {
    return this.date.isDayOdd();
  }
}
