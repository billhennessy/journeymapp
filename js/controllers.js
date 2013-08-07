/*  Controllers */
'use strict';

//JourneyListCtrl.$inject = ['$scope', 'Journey'];

function ListCtrl($scope, Journey) {
  $scope.journeys = Journey.query();
}


function CreateCtrl($scope, $location, Journey) {
    $scope.journey = {
        name: '',
        startDate: new Date(),
        experiences: [
            {person:'', date:'', description:'',emotion: ''}
        ]

    };
    $scope.save = function() {

    Journey.save($scope.journey, function(journey) {
      $location.path('/journey/' + journey._id.$oid);
    });
  }
}

function EditCtrl($scope, $location, $routeParams, Journey) {
  var self = this;

  //$scope.journey = Journey.get({journeyId: $routeParams.journeyId});
  Journey.get({id: $routeParams.journeyId}, function(journey) {
    // $scope.journey.experiences = [];
     self.original = journey;
      self.experiences = [];
    $scope.journey = new Journey(self.original);

  });

  $scope.isClean = function() {
    return angular.equals(self.original, $scope.journey);
  }

  $scope.destroy = function() {
    self.original.destroy(function() {
      $location.path('/journey');
    });
  };

  $scope.save = function() {
    $scope.journey.update(function() {
      $location.path('/journey');
    });
  };

    $scope.addExperience = function() {

        $scope.journey.experiences.push({person:'',date:'', description:'', emotion:''});
    };

    $scope.removeExperience = function(experience) {
        var experiences = $scope.journey.experiences;
        for (var i = 0, ii = experiences.length; i < ii; i++) {
            if (experience === experiences[i]) {
                experiences.splice(i, 1);
            }
        }
    };
}


/*

function JourneyListCtrl($scope, Journey) {
	$scope.journeys = Journey.query();
	
}

function JourneyDetailCtrl($scope, $routeParams, $location, Journey) {
	$scope.journey = Journey.get({journeyId: $routeParams.journeyId});
	
     $scope.update = function () {
        if ($scope.journey.id > 0)
            $scope.journey.$update({journeyId:$scope.journey.id});
        else
            $scope.journey.$save();
        $location.path("/journey/");
    };
	$scope.reset = function () {
		$location.path("/journey/");
		};
}
function ConnectCtrl(Journey, $scope, $resource) {

    $scope.user = {}
    $scope.error = null;
	
	$scope.login =  function loginUser() {    
		FB.login(function(response) { }, {scope:'email'});     
     }
}

ConnectCtrl.$inject = ['Journey', '$scope', '$resource'];
*/
