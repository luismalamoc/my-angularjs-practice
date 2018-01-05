'use strict';


/**
 * @ngdoc function
 * @name myAngularjsPracticeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAngularjsPracticeApp
 */
app.controller('MainCtrl', function($scope, $mdDialog, $mdToast, MainFactory){
    
    // read 
    $scope.read = function(){
 
        // use factory
        MainFactory.get().then(function successCallback(response){
            $scope.list = response.data.data;
        }, function errorCallback(response){
            $scope.showToast("Unable to read record.");
        });
 
    }
     
    // show 'create form' in dialog box
    $scope.showCreateForm = function(event){
    
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'views/create.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            scope: $scope,
            preserveScope: true,
            fullscreen: true // Only for -xs, -sm breakpoints.
        });
    }
     
    // methods for dialog box
    function DialogController($scope, $mdDialog) {
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
    }

    // clear variable / form values
    $scope.clearForm = function(){
        $scope.name = "";
        $scope.movies = "";
    }

    // create new product
    $scope.create = function(){
    
        MainFactory.create($scope).then(function successCallback(response){
    
            // tell the user new product was created
            $scope.showToast("Success "+response.data.id+" to "+response.data.name);
        
            // close dialog
            $scope.cancel();
    
            // remove form values
            $scope.clearForm();
    
        }, function errorCallback(response){
            $scope.showToast("Unable to create record.");
        });
    }

    // show toast message
    $scope.showToast = function(message){
        $mdToast.show(
            $mdToast.simple()
                .textContent(message)
                .hideDelay(3000)
                .position("top right")
        );
    }


    
    // readOneProduct will be here

});
