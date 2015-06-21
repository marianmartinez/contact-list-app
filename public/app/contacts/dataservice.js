// dataservice factory

(function() {
    'use strict';

    angular
        .module('app.contacts')
        .factory('dataService', dataService);

    dataService.$inject = ['$http','utils'];

    function dataService($http, utils) {

      var service = {
          getContacts: getContacts,
          findById: findById,
          addContact: addContact
      };

      return service;

      /////////

      function getContacts() {
          return $http.get('/contacts')
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

      function addContact(contact) {
        return $http.post('/contacts', contact)
              .then(addContactComplete)
              .catch(addContactFailed);

          function addContactComplete(response) {
            return response.data;
          }

          function addContactFailed(error) {
            console.log('XHR Failed for addContact.');
          }
      }
    }

})();
