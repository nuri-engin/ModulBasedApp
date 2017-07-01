/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
 Ext.Loader.setConfig({});
 Ext.application({
    name: 'myApp',
    controllers: ['app'],
    views: [
      'myViewport',
      'appZone'
    ],
    launch: function () {
      Ext.create('myApp.view.myViewport');
    }
    //extend: 'myApp.Application',

    //autoCreateViewport: 'myApp.view.main.Main'

    //-------------------------------------------------------------------------
    // Most customizations should be made to myApp.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
