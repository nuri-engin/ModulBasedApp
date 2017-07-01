Ext.define('myApp.view.forms.customerFormViewModel', { //Step 1
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.customerform',
  data: { //Step 2
    action: 'add',
    ownerCmp: null,
    rec: null
  },
  formulas: { //Step 3
    readOnlyId: function (get) {
      return (get('action') !== 'add');
    },
    ownerNotNull: function (get) {
      var cmpx = get('ownerCmp');
      return (cmpx! == null && cmpx !== undefined);
    },
    refName: function (get) {
      var value = '';
      if (get('action') !== 'add') {
        var id = get('rec.id'), custname = get('rec.name');
        if (custname === '') { custname = '(not defined)' }
        value = 'Editing: ' + id + ' - ' + custname + "...";
      } else {
        value = 'New customer...';
      }
      // 4
      var xtypeOwner = this.getView().ownerCt.getXType();
      if (xtypeOwner == "customerwindow") {
        this.getView().ownerCt.setTitle(value);
      }
      return value;
    }
  }
});
