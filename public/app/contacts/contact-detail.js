(function() {
  'use strict';

  angular
      .module('app.contacts')
      .controller('ContactDetailController', ContactDetailController);


  ContactDetailController.$inject = ['$http', '$stateParams', 'utils', 'contacts'];

  function ContactDetailController($http, $stateParams, utils, contacts){
    var vm = this; //vm stands for ViewModel
    vm.contact = utils.findById(contacts, $stateParams.contactId);
  }

})();
