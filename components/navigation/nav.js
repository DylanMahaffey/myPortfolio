(function(angular){
    angular
        .module('application')
        .component('navigation', {
            templateUrl   : 'components/navigation/nav.htm',
            controller       : 'navController',
            controllerAs   : 'vm'
        });
}(window.angular));
