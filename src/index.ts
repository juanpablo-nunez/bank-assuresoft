import { PaymentProcessor } from "./PaymentProcessor/payment-processor";
import { PayPalPayment } from "./PaymentMethod/paypal-payment";
import { StripePaymentProcessor } from "./PaymentProcessor/stripe-payment-processor";
import { PaymentMethod } from "./PaymentMethod/payment-method";
import { CreditCardPayment } from './PaymentMethod/credit-card-payment';
import { PayPalAccount } from "./PaypalAccount/paypal-account";
import { Visa } from "./CreditCard/visa-card";
import { MasterCard } from "./CreditCard/master-card";


let stripe: PaymentProcessor = new StripePaymentProcessor();

let pp: PaymentMethod = new PayPalPayment(stripe, new PayPalAccount("rory@infonet.com.bo"));
pp.pay(50);

let ccv: PaymentMethod = new CreditCardPayment(stripe, new Visa("Juan Perez","11122112254","113","07/23" ));
ccv.pay(67);

let ccm: CreditCardPayment = new CreditCardPayment(stripe, new MasterCard("11122323112254","363","07/28" ));
ccm.pay(67);
