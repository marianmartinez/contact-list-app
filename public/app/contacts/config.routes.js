(function() {
  'use strict';

  angular.module( 'app.contacts')
    .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes( $stateProvider ) {

    $stateProvider

      /*  Contacts  */

      .state( 'contacts', {

        /***********************************************************************
        Abstract set to true means this state can not be explicitly activated.
        It can only be implicitly activated by activating one of its children.
        ***********************************************************************/
        abstract: true,

        url: '/contacts',

        templateUrl: 'contacts/templates/contacts.html',

        /***********************************************************************
        Resolve any asynchronous controller dependencies
        before* the controller is instantiated. In this case, since contacts
        returns a promise, the controller will wait until getContacts() is
        resolved before instantiation. Non-promise return values are considered
        to be resolved immediately.
        ***********************************************************************/
        resolve: {
          contacts: ['dataservice',
            function(dataservice){
              return dataservice.getContacts();
            }]
        },

        controller: 'ContactsController',

        controllerAs: 'vm'

      })

      /* Contacts > List */

      .state('contacts.list', {

        /*********************************************************************
        Empty url means that this child state will become active
        when its parent's url is navigated to. Urls of child states are
        automatically appended to the urls of their parent. So this state's
        url is '/contacts' (because '/contacts' + '')
        *********************************************************************/
        url: '',

        /*********************************************************************
        IMPORTANT: This is not a top level state. Its
        template will be inserted into the ui-view within this state's
        parent's template; so the ui-view within contacts.html.
        *********************************************************************/
        templateUrl: 'contacts/templates/contacts-list.html'
      })

    /* Contacts > Detail */

      .state('contacts.detail', {

        url: '/{contactId:[0-9]{1,4}}',

        templateUrl: 'contacts/templates/contact-detail.html',

        controller: 'ContactDetailController',

        controllerAs: 'vm'

      });
  }

})();
