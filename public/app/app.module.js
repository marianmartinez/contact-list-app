(function() {
    'use strict';

    angular
      .module('app', [

        'ngMaterial',
        'ui.router',

        /* Common */
        'app.utils',

        /* Feature areas */
        'app.contacts'

    ]);

})();
