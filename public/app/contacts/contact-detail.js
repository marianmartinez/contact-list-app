(function() {
  'use strict';

  angular
      .module('app.contacts')
      .controller('ContactDetailController', ContactDetailController);


  ContactDetailController.$inject = ['$http', '$state', '$stateParams', 'utils', 'contacts', 'dataService'];

  function ContactDetailController($http, $state, $stateParams, utils, contacts, dataService){
    var vm = this; //vm stands for ViewModel
    vm.contact = utils.findById(contacts, $stateParams.contactId);

    vm.deleteContact = function(id) {
      dataService.deleteContact(id).then(function(response) {
        $state.go('contacts.list', $stateParams, {reload: true});
      });
    };
  }

})();
