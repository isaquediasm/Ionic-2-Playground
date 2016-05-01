
import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()

export class PeopleService {
  constructor(http:Http) {
    this.people = http.get('https://randomuser.me/api/')
      .map(response => response.json());
  }
}