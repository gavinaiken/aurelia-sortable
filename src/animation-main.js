import {oribella} from "oribella";

export function configure(aurelia) {
  aurelia.container.registerInstance("oribella", oribella);
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    /*.plugin('aurelia-animator-css')*/
    .plugin("oribella/aurelia-sortable");

  aurelia.start().then(a => a.setRoot());
}
