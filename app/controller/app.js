
Ext.define('myApp.controller.app', {
  extend: 'Ext.app.Controller',
  requires: [
    'myApp.view.appZone',
    'myApp.view.myViewport'
  ],
  config: {
    refs: {
      myappzone: {
        selector: 'appzone',
        xtype: 'appzone',
        autoCreate: false
      }
    }
  },
  init: function () {
    console.log('App controller init');
    var me = this;
    this.control({
      'appzone #accessPanel treepanel' : {
        itemdblclick: me.handleAccess
      }
    });
  },
  handleAccess: function (cmpView, record, itemx, index, evt, eOpts) {
    console.log('Handle access for: ' + record.data.text);
    var me = this, moduleData = record.data;
    if (moduleData.hasOwnProperty('moduleType')) {
      var typeModule = moduleData.moduleType;
      if (typeModule == '') {
        return;
      } else if (typeModule == 'link') {
        me.executeLink(moduleData);
      } else if (typeModule == 'window') {
        me.runWindow(moduleData);
      } else if (typeModule == 'module') {
        me.addModule(moduleData);
      }
    }
  },
  addModule: function (data) {
    //console.log('Adding Module: ' + data.options);
    var me = this;
    var myZone = me.getMyappzone();
    var ModulesTab = myZone.query('tabpanel #mainZone')[0];
    var existModule = false;
    for (var i=0;i < ModulesTab.items.items.lenght;i++){
      if (ModulesTab.items.items[i].xtype==data.moduleAlias){
        existModule= true;
        break;
      }
    }
    if (existModule) {
      ModulesTab.setActiveTab(i);
      return;
    } else {
      var mynewModule = Ext.create(data.options);
      ModulesTab.add(mynewModule);
      ModulesTab.setActiveTab((ModulesTab.items.items.lenght -1));
      return;
    }
  },
  runWindow: function (data) {
    console.log('Execute window: ' + data.options);
    Ext.Msg.alert("Window module", "here we show window: <b>" + data.text + "</b>");
  },
  executeLink: function (data) {
    console.log('Launch link: ' + data.options);
    window.open(data.options);
  }
});
