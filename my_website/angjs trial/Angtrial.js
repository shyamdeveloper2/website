var appnew = angular.module("todolist", []);
appnew.controller ("mycontrol", function ($scope) {

    $scope.films = ["theri", "ghilli", "kathi"];

    $scope.addItem = function () {
        $scope.errortext = " ";

        if (!scope.addMe) {
            return;
        }
        if ($scope.films.indexOf($scope.addMe) == -1) {
            $scope.films.push($scope.addMe);
        } else {
            $scope.errortext = "The item is already in list";
        }
    }
    $scope.removeItem = function (x) {
        $scope.errortext = "";
        $scope.films.splice(x, 1);
    }
});

//
//var app = angular.module("myShoppingList", []); 
//app.controller("myCtrl", function($scope) {
//    $scope.products = ["Milk", "Bread", "Cheese"];
//    $scope.addItem = function () {
//        $scope.errortext = "";
//        if (!$scope.addMe) {return;}        
//        if ($scope.products.indexOf($scope.addMe) == -1) {
//            $scope.products.push($scope.addMe);
//        } else {
//            $scope.errortext = "The item is already in your shopping list.";
//        }
//    }
//    $scope.removeItem = function (x) {
//        $scope.errortext = "";    
//        $scope.products.splice(x, 1);
//    }
//});