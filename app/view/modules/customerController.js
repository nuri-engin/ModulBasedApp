Ext.define('myApp.view.modules.customersController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.customersmodule',
  config: {
    control: { // Alternate to listen some events
      'customersmodule button[action=showhelp]': {
        click: 'btnactionclick'
      }
    }
  },
  init: function () {
    console.log('Customers view controller init');
  },
  myrenderevent: function (cmpx, eOpts) {
    console.log('Grid - customers render event');
  },
  myafterrender: function (cmpx, eOpts) {
    console.log('Grid - customers afterrender event');
  },
  btnactionclick: function (btnx, evt, eOpts) {
    console.log('Button clicked: ' + btnx.action);
  }
});
