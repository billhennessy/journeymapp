'use strict';

/* Services */
/*
angular.module('journeyServices', ['ngResource']).
	
	factory('Journey', function($resource){
	return $resource('../services/index.php/journey/:journeyId',{}, {
	  query: {method:'GET', params:{id:'journeys'}, isArray:true},
	  update: {method: 'PUT'}
	  
	});
	return new function() {
        this.askFacebookForAuthentication = function(fail, success) {
            FB.login(function(response) {
                if (response.authResponse) {
                    FB.api('/me', success);
                } else {
                    fail('User cancelled login or did not fully authorize.');
                }
            });
        }
    }
 });
 
*/

 // This is a module for cloud persistance in mongolab - https://mongolab.com
angular.module('mongoJourney', ['ngResource']).
    factory('Journey', function($resource) {
      var Journey = $resource('https://api.mongolab.com/api/1/databases/journeymappdb/collections/journeys/:id',
          { apiKey: '51043999e4b05b6f94bdea1b' }, {
			update: { method: 'PUT' }
          }
      );

      Journey.prototype.update = function(cb) {
        return Journey.update({id: this._id.$oid},
            angular.extend({}, this, {_id:undefined}), cb);
      };

      Journey.prototype.destroy = function(cb) {
        return Journey.remove({id: this._id.$oid}, cb);
      };

      return Journey;
    });

angular.module('mongoExperience', ['ngResource']).
    factory('Experience', function($resource) {
      var Experience = $resource('https://api.mongolab.com/api/1/databases/journeymappdb/collections/experiences/:id',
          { apiKey: '51043999e4b05b6f94bdea1b' }, {
      update: { method: 'PUT' }
          }
      );

      Experience.prototype.update = function(cb) {
        return Experience.update({id: this._id.$oid},
            angular.extend({}, this, {_id:undefined}), cb);
      };

      Experience.prototype.destroy = function(cb) {
        return Experience.remove({id: this._id.$oid}, cb);
      };

      return Experience;
    });
