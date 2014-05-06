var app = angular.module("mainApp", []);  //string must match ng-app name
app.factory("Heros", function () {
    return [{ name: "Wolverine", howAwesome: "meh" }, { name: "NinjaTurtle", howAwesome: "uber" }];
});
app.controller("CreateController", function ($scope, Heros) {
    $scope.heros = Heros;
    $scope.test = "testing 1, 2, 3";
    $scope.addSuperhero = function () {
        var name = $scope.superHero.name;
        alert(name);
        var howAwesome = $scope.superHero.howAwesome;
        $scope.heros.push({ name: name, howAwesome: howAwesome });
    };
});
app.controller("DisplayController", function ($scope, Heros) {
    $scope.heros = Heros;
    $scope.editHero = function (hero) {
        var index = $scope.heros.indexOf(hero);
        $('#myModal').modal();
        $scope.modal = {}; 
        $scope.modal.name = hero.name;
        $scope.modal.howAwesome = hero.howAwesome;
        $scope.modal.index = index;
    }
    $scope.saveHero = function (hero) {
        $scope.heros[hero.index].name = hero.name;
        $scope.heros[hero.index].howAwesome = hero.howAwesome;
        $('#myModal').modal('hide');
     
    }
    $scope.deleteHero = function (hero) {
        var index = $scope.heros.indexOf(hero);
        $scope.heros.splice(index, 1);        
    }
});
