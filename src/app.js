import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = '';
    config.map([
      { route: ['','flickr'], moduleId: './flickr-sortable', nav: true, title:'Sortable Flickr' },
      { route: ['list'], moduleId: './list-sortable', nav: true, title: 'Vertical sortable list'}
    ]);

    this.router = router;
  }
}
