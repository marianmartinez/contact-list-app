(function() {
  'use strict';

  angular
      .module('app.contacts')
      .controller('ContactsDetailController', ContactsDetailController);


  ContactsDetailController.$inject = ['$http', '$state', '$stateParams', 'utils', 'contacts', 'dataService'];

  function ContactsDetailController($http, $state, $stateParams, utils, contacts, dataService){
    var vm = this; //vm stands for ViewModel
    vm.contact = utils.findById(contacts, $stateParams.contactId); // get contact from contacts object

    /* get contact info from server API
     vm.contact = dataService.getContact(id).then(function(response) {
       console.log(response);
     });
    */

    vm.deleteContact = function(id) {
      dataService.deleteContact(id).then(function(response) {
        $state.go('contacts.list', $stateParams, {reload: true});
      });
    };

    vm.editContact = function(id) {
      $state.go('contacts.detail.edit', $stateParams);
    };

    vm.updateContact = function() {
      dataService.updateContact(vm.contact._id, vm.contact).then(function(response) {
        $state.go('contacts.detail', $stateParams, {reload: true});
      });
    };
  }

})();
