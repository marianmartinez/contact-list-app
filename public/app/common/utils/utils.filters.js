// utils filter

(function() {
    'use strict';

    angular
        .module('app.utils')
        .filter('idTimestamp', idTimestamp);

        function idTimestamp() { //orderBy Mongodb _id timestamp

          return function(object){
            var timestamp = object._id.toString().substring(0,8);
            var date = new Date( parseInt( timestamp, 16 ) * 1000 );
            console.log(date);
            return date;
          };

        }


})();
