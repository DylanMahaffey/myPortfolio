"use strict";

(function(angular) {
    angular
        .module("application")
        .controller("contactController", ['$http', function($http){



                this.sendEmail = function(name, email, phone, message){
                    console.log(name + email + phone + message);
                    if(!name||!email||!message){
                        this.invalid = true;
                    }else{
                        this.thanks = true;
                $http({
                    url: "http://formspree.io/dylan.mahaffey@gmail.com",
                    data: $.param({
                        name: name,
                        email: email,
                        phone, phone,
                        message: message
                    }),
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });
            }
            };

            this.close = () => {
					// hide modal immediately
					this.thanks = false;

					// clear these thereafter
					this.form.controls = { };
					this.form.$setPristine();
					this.error = null;
				};


        }]);
}(window.angular));
