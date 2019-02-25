(function () {
// use strict - used to prevent accidental declaration of global variables
//Ex: just declaring x = "hello" without var x, will automatically declared as global variable in JS
//Use strict prevents this declaration and makes it undefined within this scope.
'use strict';
//x = "hello";
angular.module('LunchCheck', [])

.controller('LunchCheckController', lunchCheckController);

lunchCheckController.$inject = ['$scope','$filter'];
function lunchCheckController ($scope, $filter) {
  //console.log($scope);
  $scope.name = "";
  $scope.listMsg = "";
  $scope.textColor = "";
  $scope.checkQty = function () {
    //var splitNames = getNonEmptyNames($scope.name.split(',')); //if you don't take empty value into account
    var splitNames = getNonEmptyNames($scope.name.split(','));
    if (splitNames.length == 1 & splitNames == "") {
      $scope.listMsg = "Please enter data first";
      $scope.textColor = "red";
    }else if (splitNames.length <= 3) {
      $scope.listMsg = "Enjoy!";
      $scope.textColor = "green";
    }else if (splitNames.length > 3) {
      $scope.listMsg = "Too much!";
      $scope.textColor = "green";
    }
  };
}

function getNonEmptyNames(listNames){
  var tmpListNames = ['']; //initialize as an array
  var j=0;
  for (var i = 0; i < listNames.length; i++) {
    if (listNames[i].trim()!="") {
      tmpListNames[j++] = listNames[i];
    }
  }
  return tmpListNames;
}
})();
