'use strict';

/* Directives */



angular.module('components', [])
  .directive('emotionSlider', function() {
  	return  {
  		// body...
  		restrict: 'E',
  		template: '<input id="slider" type="text" class="span2" value="" data-slider-min="-10" data-slider-max="10" ' +
            'data-slider-step="1"  data-slider-orientation="horizontal" ' +
            'data-slider-selection="after"data-slider-tooltip="show" ng-model="journey.experience.emotion">'
  		
  	}
  });


