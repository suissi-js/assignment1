(function () {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.message = "";

    $scope.checkIfTooMuch = function () {
      var n_dishes = 0;

      if (typeof $scope.dishes !== 'undefined') {
        var l_dishes = $scope.dishes.split(",");
        for (var i = 0; i < l_dishes.length; i++) {
          if (l_dishes[i].replace(/ /g, "").length > 0) {
            n_dishes += 1;
          }
        }
      }

      console.log(n_dishes);
      if ( n_dishes > 3) { // 4, 5, ...
        $scope.message = "Too much!";
        $scope.messageColor = "green";
        $scope.borderColor = "green";
      } else if (n_dishes > 0) { // 1, 2, or 3
        $scope.message = "Enioy!";
        $scope.messageColor = "green";
        $scope.borderColor = "green";
      } else { // Spaces or empty strings
        $scope.message = "Please enter data first";
        $scope.messageColor = "red";
        $scope.borderColor = "red";
      }
    };
  };

})();
