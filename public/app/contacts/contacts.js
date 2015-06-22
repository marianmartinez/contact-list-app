(function() {
    'use strict';

    angular
        .module('app.contacts')
        .controller('ContactsController', ContactsController);

    ContactsController.$inject = [ '$state', 'contacts', 'dataService'];

    function ContactsController($state, contacts, dataService){
      var vm = this; //vm stands for ViewModel

      vm.contacts = contacts;

      vm.addContact = function() {
        dataService.addContact(vm.contact).then(function(response) {
          $state.go('contacts.detail', { contactId: response._id }, {reload: true});
        });
      };
    }

})();
