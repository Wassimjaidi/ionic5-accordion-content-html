import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  


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



  constructor( private http: HttpClient) {
    this.listItems = this.information.items
    this.listItems[0].open = true;
  }



  toggleSection(index) {
    this.listItems[index].open = !this.listItems[index].open;
    console.log('this.information', this.listItems)
  }





}
