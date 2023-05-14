import { PaymentProcessor } from "../PaymentProcessor/payment-processor";
import { PayPalAccount } from "../PaypalAccount/paypal-account";
import { PaymentMethod } from "./payment-method";

export class PayPalPayment extends PaymentMethod{
  private paypalAccount: PayPalAccount;
  constructor(paymentProcessor:PaymentProcessor,paypalAccount: PayPalAccount) {
    super(paymentProcessor);
    this.paypalAccount = paypalAccount;
  }
  pay(amount: number): void {
    const paymentStatus: Boolean = this.paymentProcessor.processPayment(amount);
    if (paymentStatus) {
        console.log("SUCCESS: " + this.paypalAccount.printInfo());
    } else {
      console.log("FAILED: " + this.paypalAccount.printInfo());
    }
  }

}
