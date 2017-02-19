(function(angular){
    angular
        .module('application')
        .controller('navController', function($location, $routeParams){

            this.goto = path=>{
                $location.path(path);
            };

            this.current = $location.path();

            if(this.current == '/resume'){ this.resume='border'}
            else if(this.current == '/contact'){ this.contact='border-white'; this.nav = 'white'}
            else if(this.current == '/portfolio'){ this.portfolio='border-white'; this.nav = 'white'}
            else{this.else='border-white'; this.nav = 'white'};


        });
}(window.angular));
