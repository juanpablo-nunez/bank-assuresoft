import { PaymentProcessor } from "../PaymentProcessor/payment-processor";

export abstract class PaymentMethod {
  protected  paymentProcessor: PaymentProcessor;
  constructor(paymentProcessor: PaymentProcessor){
    this.paymentProcessor = paymentProcessor;
  }
  pay(amount: number):void {
    console.log("PaymentMethod: amount" + amount);
  }
}
