import { Page, NavController, NavParams, Alert } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { Http } from 'angular2/http';
import { Geolocation } from 'ionic-native';

@Page({
  templateUrl: 'build/pages/list/list.html'
})

export class ListPage {
  static get parameters() {
    return [
      [NavController],
      [NavParams],
      [Http]
    ];
  }

  constructor(nav, navParams, http) {
    this.nav = nav;
    this.http = http;
    this.coords = {x: 0, y:0};
    
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.cities = [
      {
        name: 'São Paulo',
        slug: 'sao-paulo',
        img: 'http://ionicframework.com/dist/preview-app/www/img/card-saopaolo.png'
      }
    ];
  }

  itemTapped(event, item) {
    this.nav.push(ItemDetailsPage, {
      item: item
    });
  }
}