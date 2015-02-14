angular.module('appModule')
.service('signupService', ['$http', function($http) {
    this.saveUser = function(user) {
        return $http.post('/api/user', user);
    };

  /*  this.searchGoats = function(query) {
        return $http.get('/goats/search/' + query);
    };
    
    this.getGoats = function() {
        return $http.get('/goats');
    };
    
    this.getGoat = function(name) {
        return $http.get('/goat/' + name);
    };*/
}]);