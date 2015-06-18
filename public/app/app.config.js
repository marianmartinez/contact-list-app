(function() {
    'use strict';

     angular
       .module('app')
       .run(run)
       .config(configure);

     run.$inject = [ '$rootScope', '$state', '$stateParams'];
     configure.$inject = ['$urlRouterProvider'];

     function run($rootScope, $state, $stateParams) {
      // Add references to $state and $stateParams to the $rootScope
      // so that you can access them from any scope within your app.
       $rootScope.$state = $state;
       $rootScope.$stateParams = $stateParams;
     }

     function configure($urlRouterProvider) {
       $urlRouterProvider.otherwise( '/contacts' );
     }

})();
