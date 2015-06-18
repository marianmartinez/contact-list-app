(function() {
    'use strict';

    angular
        .module('app.contacts')
        .controller('ContactsController', ContactsController);

    ContactsController.$inject = [ '$state', 'contacts', 'utils'];

    function ContactsController($state,   contacts,   utils){
      var vm = this; //vm stands for ViewModel

      vm.contacts = contacts;
    }

})();
