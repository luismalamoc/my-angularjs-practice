app.factory("MainFactory", function($http){
     
    var factory = {};
 
    // read all products
    factory.get = function(){
        return $http({
            method: 'GET',
            url: 'https://reqres.in/api/users'
        });
    };
     
    // create product
    factory.create = function($scope){
        return $http({
            method: 'POST',
            data: {
                'name' : $scope.name,
                'movies' : JSON.stringify($scope.movies.split(','))
            },
            url: 'https://reqres.in/api/users'
        });
    };
 
// readOneProduct will be here
     
    return factory;
});