import { Printable } from "../Tools/printable";

export abstract class CreditCard implements Printable {
  private cardNumber: string;
  private cvv: string;
  private expirationDate: string;

  constructor(cardNumber: string, cvv: string, expirationDate: string){
    this.cardNumber = cardNumber;
    this.cvv = cvv;
    this.expirationDate = expirationDate;
  }

  calculatedTax(): number {
    return 0;
  }

  public getCardNumber(): string {
    return this.cardNumber;
  }

  public getCvv(): string {
    return this.cvv;
  }

  public getExpirationDate(): string {
    return this.expirationDate;
  }

  public setCardNumber(cardNumber:string): string {
    return this.cardNumber = cardNumber;
  }

  public setCvv(cvv:string): string {
    return this.cvv = cvv;
  }

  public setExpirationDate(expirationDate: string): string {
    return this.expirationDate = expirationDate;
  }

  printInfo(): string {
    return `CardNumber: ${this.cardNumber}, CVV: ${this.cvv}, Expiration: ${this.expirationDate}, Tax: ${this.calculatedTax()} `
  }

}
