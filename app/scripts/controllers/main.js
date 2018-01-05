'use strict';


/**
 * @ngdoc function
 * @name myAngularjsPracticeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAngularjsPracticeApp
 */
app.controller('MainCtrl', function($scope, $mdDialog, $mdToast, MainFactory){
    console.log('Hello');
    // read people
    $scope.readPeople = function(){
 
        // use people factory
        MainFactory.readPeople().then(function successCallback(response){
            
            $scope.people = response.data.value;
        }, function errorCallback(response){
            $scope.showToast("Unable to read record.");
        });
 
    }
     
    // show 'create people form' in dialog box
    $scope.showCreateProductForm = function(event){
    
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
    $scope.clearPeopleForm = function(){
        $scope.id = "";
        $scope.name = "";
        $scope.UserName = "";
        $scope.LastName = "";
    }

    // create new product
    $scope.createPerson = function(){
    
        MainFactory.createPeople($scope).then(function successCallback(response){
    
            // tell the user new product was created
            $scope.showToast(response.data.message);
    
            // refresh the list
            $scope.readPeople();
    
            // close dialog
            $scope.cancel();
    
            // remove form values
            $scope.clearPeopleForm();
    
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
