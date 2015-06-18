(function() {
    'use strict';

    angular
      .module('app', [

        'ngMaterial',
        'ui.router',

        /* Common services */
        'app.utils',

        /* Feature areas */
        'app.contacts'  

    ]);

})();
