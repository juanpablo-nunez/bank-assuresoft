import { CreditCard } from '../CreditCard/credit-card';
import { PaymentProcessor } from '../PaymentProcessor/payment-processor';
import { PaymentMethod } from './payment-method';

export class CreditCardPayment extends PaymentMethod {
  private creditCard: CreditCard;

  constructor(paymentProcessor: PaymentProcessor,creditCard:CreditCard){
    super(paymentProcessor);
    this.creditCard = creditCard;
  }
  public pay(amount: number): void {
    const totalAmount: number = amount + this.creditCard.calculatedTax();
    const paymentStatus: boolean = this.paymentProcessor.processPayment(totalAmount);
    console.log("Payment Status: " + paymentStatus);
    console.log(this.creditCard.printInfo());
  }
}
