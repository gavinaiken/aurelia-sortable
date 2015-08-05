import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';


@inject(HttpClient)
export class ListSortable{
  items = [];

  constructor(http){
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });

    this.http = http;
  }

  activate(){
    return this.http.fetch('users/aurelia/repos')
      .then(response => response.json())
      .then(repos => this.items = repos);
  }

  moved() {
  }
}
