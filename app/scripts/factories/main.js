app.factory("MainFactory", function($http){
     
    var factory = {};
 
    // read all products
    factory.get = function($scope){
        return $http({
            method: 'GET',
            url: $scope.apiUrl+'users'
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
            url: $scope.apiUrl+'users'
        });
    };
 
// readOneProduct will be here
     
    return factory;
});