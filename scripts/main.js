(function (window){
'use strict';

var FORM_SELECTOR = '[data-coffee-order="form"]';
var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';

var App = window.App;
var Truck = App.Truck;
var Datastore = App.Datastore;
var RemoteDataStore = App.RemoteDataStore;
var FormHandler = App.FormHandler;
var Validation = App.Validation;
var Checklist = App.Checklist;
//var remoteDs = new RemoteDataStore(SERVER_URL);
var myTruck = new Truck('867', new Datastore());
//var myTruck = new Truck('867', remoteDs);
window.myTruck = myTruck;
var formHandler = new FormHandler(FORM_SELECTOR);
var checklist = new Checklist(CHECKLIST_SELECTOR);
checklist.addClickHandler(myTruck.deliverOrder.bind(myTruck));

formHandler.addSubmitHandler(function(data){
    console.log(myTruck.createOrder(data));
    return myTruck.createOrder(data).then(function(){
        checklist.addRow(data);
    });   
});

formHandler.addInputHandler(Validation.isCompanyEmail);

myTruck.printOrders(checklist.addRow.bind(checklist));


console.log(formHandler);

})(window);