angular.module('myAngularjsPracticeApp')
.factory("MainFactory", function($http){
 
    var factory = {};
 
    // read all products
    factory.readPeople = function(){
        return $http({
            method: 'GET',
            url: 'http://services.odata.org/TripPinRESTierService/(S(3mslpb2bc0k5ufk24olpghzx))/People'
        });
    };
     
    // create product
    factory.createPeople = function($scope){
        return $http({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Origin': '*'
            },
            data: {
                'FirstName' : $scope.FirstName,
                'UserName' : $scope.UserName,
                'LastName' : $scope.LastName,
                'Emails':[
                    'anemail@example.com'
                ],
                'AddressInfo': [
                    {
                        'Address': 'Huerfanos 670.',
                        'City': {
                            'Name': "Santiago",
                            'CountryRegion': 'Chile',
                            'Region': 'ID',
                        }
                    }
                ]
            },
            url: 'http://services.odata.org/TripPinRESTierService/(S(3mslpb2bc0k5ufk24olpghzx))/People'
        });
    };
 
// readOneProduct will be here
     
    return factory;
});