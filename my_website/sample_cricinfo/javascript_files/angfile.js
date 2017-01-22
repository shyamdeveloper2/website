 var app = angular.module("cricApp", ["ngRoute"]);

 app.config(["$routeProvider", function ($routeProvider) {
     $routeProvider
         .when('/', {
             templateUrl: '/main.html',
             //  controller: 'TodoController'
         })
         .when('/a', {
             templateUrl: '/a.html',
             //controller: 'TodoDetailCtrl'
         })
         .when('/b', {
             templateUrl: '/b.html',
             //controller: 'TodoDetailCtrl'
         }).when('/c', {
             templateUrl: '/c.html',
             //controller: 'TodoDetailCtrl'
         }).when('/d', {
             templateUrl: '/d.html',
             //controller: 'TodoDetailCtrl'
         }).when('/e', {
             templateUrl: '/e.html',
             //controller: 'TodoDetailCtrl'
         }).when('/f', {
             templateUrl: '/f.html',
             //controller: 'TodoDetailCtrl'
         }).when('/g', {
             templateUrl: '/g.html',
             //controller: 'TodoDetailCtrl'
         }).when('/h', {
             templateUrl: '/h.html',
             //controller: 'TodoDetailCtrl'
         }).when('/i', {
             templateUrl: '/i.html',
             //controller: 'TodoDetailCtrl'
         });
        }]);

 app.controller("mycontroller", function ($scope) {
     $scope.myVar = false;

     $scope.dmenuinl = function () {
         $scope.myVar = true;

     };

     $scope.dmenuout = function () {
         $scope.myVar = false;
     };
     $scope.inc_obj = function (oo) {

         var ele = document.getElementsByTagName("div");
         //ele.innerHTML = "<a href=" + oo.ln + ">" + oo.on + "</a>";
         ele.onmouseover = function () {
             ele.style.backgroundColor = "pink";
         };
         ele.onmouseout = function () {
             ele.style.backgroundColor = "skyblue";
         };
         document.getElementsByTag("div").appendChild(ele);
     }



 });
 //     $scope.liprot = function (on, ln) {
 //         this.on = on;
 //         this.ln = ln;
 //     }
 //
 //     $scope.o1 = new $scope.liprot("Shyam", "http://www.google.com");
 //     $scope.o2 = new $scope.liprot("Sai", "http://www.google.com");
 //
 //     $scope.inc_obj = function (oo) {
 //
 //         var ele = document.createElement("div");
 //         ele.innerHTML = "<a href=" + oo.ln + ">" + oo.on + "</a>";
 //         ele.onmouseover = function () {
 //             ele.style.backgroundColor = "pink";
 //         };
 //         ele.onmouseout = function () {
 //             ele.style.backgroundColor = "skyblue";
 //         };
 //         document.getElementById("lspage").appendChild(ele);
 //     }
 //
 //     $scope.inc_obj($scope.o1);
 //     $scope.inc_obj($scope.o2);
 //
 //
 //
 //
 // });
