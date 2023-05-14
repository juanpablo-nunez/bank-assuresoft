import { Printable } from "../Tools/printable";

export class PayPalAccount implements Printable{
  private email: string;
  constructor(email: string){
    this.email = email;
  }

  public printInfo():string {
    return "Account: " + this.email;
  }
}
