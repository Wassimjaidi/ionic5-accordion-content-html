import { Component } from '@angular/core';
import { Stripe } from '@ionic-native/stripe/ngx';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  paymentAmount: string = '3.33';
  currency: string = 'USD';
  currencyIcon: string = '$';
  cardDetails: any = {
    number: '',
    expMonth: '',
    expYear: '',
    cvc: '',
  }
  automaticClose = false;

  stripe_key = 'pk_test_zQl6VMFWVkCIxJaeGtfYuzQq00kXc6kGNj'


  information = {
    "items": [
      {
        "name": "Sur place"
      },
      {
        "name": "A emporter"
      },
      {
        "name": "Livraison"
      }
    ]
  }
  listItems:any;



  constructor(private stripe: Stripe, private http: HttpClient) {
    this.listItems = this.information.items
    this.listItems[0].open = true;
  }



  toggleSection(index) {
    this.listItems[index].open = !this.listItems[index].open;
    console.log('this.information', this.listItems)
  }




  /*payWithStripe() {
    this.stripe.setPublishableKey(this.stripe_key);
    this.stripe.createCardToken(this.cardDetails)
      .then(token => {
        console.log(token);
        alert(token.id)
        alert('payment successful')
         this.makePayment(token.id);
      })
      .catch(
        error => alert('erreur' + error));
  }


  makePayment(token) {
    this.http.post('https://us-central1-shoppr-c97a7.cloudfunctions.net/payWithStripe', {
        amount: 100,
        currency: "usd",
        token: token.id
      })
      .subscribe(data => {
        console.log(data);
      });
  }*/


}
