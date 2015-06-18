// utils factory

(function() {
    'use strict';

    angular
        .module('app.utils')
        .factory('utils', utils);

    function utils() {
        return {
            findById: findById
        };

        function findById(a, id) {
          for (var i = 0; i < a.length; i++) {
            if (a[i].id == id) return a[i];
          }
          return null;
        }
    }

})();
