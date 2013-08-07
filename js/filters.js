'use strict';

/* Filters */

angular.module('filters', [])
    .filter('sum', function() {
        return function(input) {
            var out = 0;

            for (var i = 0; i < input.length; i++) {
                out += +input[i].emotion ;
            }

            return out;
        }
    })
    .filter('min', function() {
        return function(input) {
            var out = 0;
            out = input[0].emotion;
            return out;
        }
    });


