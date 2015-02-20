angular.module('appModule').
    factory('LoginService', function($resource) {
        return $resource('/api/authenticate', {}, {
            
            query: { method: 'POST'},
            save : { method: 'POST'},
            delete : {method : 'DELETE' },
            vote   : { method: 'PUT' , params :{id  : 'vote'} ,isArray: true}
        })
    });