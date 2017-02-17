(function(angular){
    angular
        .module('application')
        .controller('navController', function($location, $routeParams){

            this.goto = path=>{
                $location.path(path);
            };

            this.current = $location.path()

            if(this.current == '/resume'){ this.resume='border'}
            else if(this.current == '/contact'){ this.contact='border'}
            else if(this.current == '/portfolio'){ this.portfolio='border'}
            else{this.else='border'}

        });
}(window.angular));
