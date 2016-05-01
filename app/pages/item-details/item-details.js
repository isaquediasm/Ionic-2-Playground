import {Page, NavController, NavParams} from 'ionic-angular';
import { Http } from 'angular2/http';
import { VenueCategory } from '../venue-category/venue-category'

@Page({
  templateUrl: 'build/pages/item-details/item-details.html'
})

export class ItemDetailsPage {
  static get parameters() {
    return [[NavController], [NavParams], [Http]];
  }

  constructor(nav, navParams, http) {
    this.nav = nav;
    this.http = http;
    
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.http.get("https://api.foursquare.com/v2/venues/explore?near="+this.selectedItem.slug+"&client_id=K1UTKJVEG3H5EDPJDNJAMY1UQD2IRYWTFW2M2Y3C2X2XMVWP&client_secret=SUWOYLT5BAKIG315OSFMBQO4KSJNIDUEY322XAZNWPYHMBQT&v=20160428")
      .subscribe(data => {
        /* var alert = Alert.create({
                title: "Your IP Address",
                subTitle: data.json().origin,
                buttons: ["close"]
            });
            this.nav.present(alert);*/


        this.data = data.json();
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }

  searchCategory(item) {
    this.nav.push(VenueCategory, {
      item: item
    })
  }
}
