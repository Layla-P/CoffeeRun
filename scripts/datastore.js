(function (window) {
    'use strict';
    var App = window.App || {};
    var Promise = window.Promise;

    function Datastore() {
        this.data = {};
    }

    function promiseResolvedWith(value) {
        var promise = new Promise(function (resolve, reject) {
            resolve(value);
        });
        return promise;
    }

    Datastore.prototype.add = function (key, value) {
        this.data[key] = value;
        return promiseResolvedWith(null);
    }
    Datastore.prototype.get = function (key) {        
        return promiseResolvedWith(this.data[key]);
    }
    Datastore.prototype.getAll = function () {
        return promiseResolvedWith(this.data);
    }

    Datastore.prototype.remove = function (key) {
        delete this.data[key];
        return promiseResolvedWith(null);
    }

    App.Datastore = Datastore;
    window.App = App;
})(window);
