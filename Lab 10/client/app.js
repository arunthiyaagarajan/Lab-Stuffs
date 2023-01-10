(function () {
  "use strict";

  angular
    .module("myApp", ["ngRoute"])

    .controller("MyController", function ($scope, $http) {
      $http.get("http://localhost:3000/").then(function (response) {
        $scope.datas = response.data;
      });
    })

    .controller("createController", function ($scope) {
      $scope.createEntry = function () {
        var newData =
          '{"s_date":"' +
          $scope.s_date +
          '", "d_date":"' +
          $scope.d_date +
          '", "c_name":"' +
          $scope.c_name +
          '", "amount":"' +
          $scope.amount +
          '", "status":"' +
          $scope.status +
            '"}';
          
          console.log(newData);

        fetch("http://localhost:3000/new", {
          method: "POST",
          body: newData,
          headers: { "Content-type": "application/json; charset=UTF-8" },
        })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err));
        $scope.s_date = "";
        $scope.d_date = "";
        $scope.c_name = "";
        $scope.amount = "";
        $scope.status = "";
    };
})

    // .controller("updateController", function ($scope, $http) {
    //   $http.get("http://localhost:3000/").then(function (response) {
    //     $scope.datas = response.data;
    //   });

    //   $scope.getId = function () {
    //     var selectedId = $scope.id;
    //     console.log(selectedId);
    //     $scope.s_date = selectedId["s_date"];
    //     $scope.d_date = selectedId["d_date"];
    //     $scope.c_name = selectedId["c_name"];
    //     $scope.amount = selectedId["amount"];
    //     $scope.status = selectedId["status"];
    //   };

    //   $scope.updateEntry = function () {
    //     var newData =
    //       '{"id":"' +
    //       $scope.id["id"] +
    //       '", "s_date":"' +
    //       $scope.s_date +
    //       '", "d_date":"' +
    //       $scope.d_date +
    //       '", "c_name":"' +
    //       $scope.c_name +
    //       '", "amount":"' +
    //       $scope.amount +
    //       '", "status":"' +
    //       $scope.status +
    //       '"}';

    //     fetch("http://localhost:3000/update", {
    //       method: "POST",
    //       body: newData,
    //       headers: { "Content-type": "application/json; charset=UTF-8" },
    //     })
    //       .then((response) => response.json())
    //       .then((json) => console.log(json))
    //       .catch((err) => console.log(err));
    //     $scope.id = "";
    //     $scope.s_date = "";
    //     $scope.d_date = "";
    //     $scope.c_name = "";
    //     $scope.amount = "";
    //     $scope.status = "";
    //   };
    // })

    // .controller("searchController", function ($scope, $rootScope) {
    //   $scope.getData = function () {
    //     var searchJson = { status: $scope.status };
    //     var jsonObj = JSON.stringify(searchJson);
    //     fetch("http://localhost:3000/search", {
    //       method: "POST",
    //       body: jsonObj,
    //       headers: { "Content-type": "application/json; charset=UTF-8" },
    //     })
    //       .then((response) => response.json())
    //       .then((json) => {
    //         console.log(json);
    //         $scope.datas = json;
    //       })
    //       .catch((err) => console.log(err));
    //   };
    // })

    // .controller("deleteController", function ($scope, $http) {
    //   $http.get("http://localhost:3000/").then(function (response) {
    //     $scope.datas = response.data;
    //   });
    //   $scope.deleteEntry = function () {
    //     var delJson = { delID: $scope.del.id };
    //     var jsonObj = JSON.stringify(delJson);

    //     fetch("http://localhost:3000/delete", {
    //       method: "POST",
    //       body: jsonObj,
    //       headers: { "Content-type": "application/json; charset=UTF-8" },
    //     })
    //       .then((response) => response.json())
    //       .then((json) => console.log(json))
    //       .catch((err) => console.log(err));
    //     $scope.del = "";
    //   };
    // })

    .config(function ($routeProvider) {
      $routeProvider
        .when("/", {
          templateUrl: "view.html",
        })
        .when("/create", {
          templateUrl: "create.html",
          controller: "createController",
        });
    })
    .config([
      "$locationProvider",
      function ($locationProvider) {
        $locationProvider.hashPrefix("");
      },
    ]);
})();
