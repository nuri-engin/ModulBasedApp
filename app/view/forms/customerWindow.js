Ext.define('myApp.view.forms.customerWindow', { // 1
  extend: 'Ext.window.Window',
  alias: 'widget.customerwindow',
  xtype: 'customerwindow',
  requires: [
    'myApp.view.forms.customerWindowViewController',
    'myApp.view.forms.customerForm'
  ],
  controller: 'customerwindow', // 2
  height: 368,
  width: 489,
  iconCls: 'customer-16',
  layout: 'fit',
  closable: true,
  minimizable: true,
  title: '',
  tools: [{ // 3
     type: 'restore',
     tooltip: 'Restore window...',
     handler: function (event, toolEl, panelHeader) {
       var cmpx = panelHeader.up('window');
       if (cmpx.collapsed) {
         cmpx.expand();
       }
     }
  }],
  initComponent: function () {
    var me = this;
    // 4
    var myForm = Ext.create('myApp.view.forms.customerForm', {
      gridModule: me.gridModule,
      ViewModel: {
        data: {
          action: me.action,
          ownerCmp: me,
          rec: me.record || null
        }
      }
    });
    me.items = [myForm];
    me.callParent(arguments);
  }
});
