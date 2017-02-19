"use strict";

(function(angular) {
	const applicationGlobalSettings = {
		title               : "Dylan Mahaffey's portfolio",
		version          : 1.0,
		author           : "Dylan Mahaffey"
	};

	angular
		.module("application", ["ngRoute"])
		.constant("settings", applicationGlobalSettings)
		.config(
			function ($locationProvider, $routeProvider) {
				$locationProvider.html5Mode(true);

				$routeProvider
					.when("/resume", {
						templateUrl: "/resume/resume.partial.html",
					})
                    .when("/portfolio", {
						templateUrl: "/partials/portfolio.partial.htm",
						controller: "portfolioController",
						controllerAs: "vm"
					})
					.when("/contact", {
						templateUrl: "partials/contact.partial.htm",
						controller: "contactController",
						controllerAs: "vm"
					})
					.otherwise({
						templateUrl: "/partials/welcome.partial.htm",
					// 	// controller: "welcomeController",
					// 	// controllerAs: "vm"
					});
			})
}(window.angular));
