"use strict";

(function(angular) {
    angular
        .module("application")
        .controller("contactController", ['contactService', function(service){
                this.hey = 'dood suh'

                service.text()
        }]);
}(window.angular));
