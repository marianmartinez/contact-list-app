// dataservice factory

(function() {
    'use strict';

    angular
        .module('app.contacts')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http','utils'];

    function dataservice($http, utils) {

      var path = '/assets/data/contacts.json';

        var service = {
            getContacts: getContacts,
            findById: findById
        };

        return service;

        /////////

        function getContacts() {
            return $http.get(path)
                .then(getContactsComplete)
                .catch(getContactsFailed);

            function getContactsComplete(response) {
                return response.data;
            }

            function getContactsFailed(error) {
                console.log('XHR Failed for getContacts.');
            }
        }

        function findById(id) {
            return getContacts()
                .then(findByIdComplete)
                .catch(findByIdFailed);

            function findByIdComplete(response, id) {
              console.log(response);
              return utils.findById(response.data, id);
            }

            function findByIdFailed(error) {
                console.log('XHR Failed for findById.');
            }
        }
    }

})();
