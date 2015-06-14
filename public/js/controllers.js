var contactListApp = angular.module('contactListApp', ['ngMaterial']);

contactListApp.controller('contactListCtrl', function($scope){

  $scope.contacts = [
    {'name': 'Pepe', 'email': 'pepe@pepe.com', 'phone': '666831799'},
    {'name': 'Juan', 'email': 'juan@juan.com', 'phone': '630444444'},
    {'name': 'Ana', 'email': 'ana@ana.com', 'phone': '680555555'}
  ];

});
