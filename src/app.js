import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','Sortable Flickr'], name: 'Sortable Flickr', moduleId: './flickr-sortable', nav: true, title:'Sortable Flickr' },
      { route: ['Vertical sortable list'], name: 'Vertical sortable list', moduleId: './list-sortable', nav: true, title:'Vertical sortable list' }
    ]);

    this.router = router;
  }
}
