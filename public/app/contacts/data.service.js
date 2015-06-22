(function() {
    'use strict';

    angular
        .module('app.contacts')
        .factory('dataService', dataService);

    dataService.$inject = ['$http','utils'];

    function dataService($http, utils) {

      var service = {
          getContacts: getContacts,
          addContact: addContact,
          getContact: getContact,
          updateContact: updateContact,
          deleteContact: deleteContact,
          findById: findById
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

      function getContact(id) {
        return $http.get('/contacts/' + id)
              .then(getContactComplete)
              .catch(getContactFailed);

          function getContactComplete(response) {
            return response.data;
          }

          function getContactFailed(error) {
            console.log('XHR Failed for getContact.');
          }
      }

      function updateContact(id, contact) {
        return $http.put('/contacts/' + id, contact)
              .then(updateContactComplete)
              .catch(updateContactFailed);

          function updateContactComplete(response) {
            return response.data;
          }

          function updateContactFailed(error) {
            console.log('XHR Failed for updateContact.');
          }
      }

      function deleteContact(id) {
        return $http.delete('/contacts/' + id)
              .then(deleteContactComplete)
              .catch(deleteContactFailed);

          function deleteContactComplete(response) {
            return response.data;
          }

          function deleteContactFailed(error) {
            console.log('XHR Failed for deleteContact.');
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
