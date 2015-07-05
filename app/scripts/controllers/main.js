(function(){
'use strict';

/**
 * @ngdoc function
 * @name okottaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the okottaApp
 */

angular.module('okottaApp')
	.controller('MainCtrl', ['$translate', '$scope', 'contentBlocksService', function ($translate, $scope, contentBlocksService) {

	// load data for content blocks
	$scope.contentBlocksCollection = [];

    contentBlocksService
		.loadContentBlocksData()
		.then( function(contentBlocksCollection) {     
			var contentBlocksCollectionResults = [].concat(contentBlocksCollection);

			$scope.contentBlocksCollection = contentBlocksCollectionResults;        
		});

	// data for languages list
	$scope.languagesCollection = ['en', 'de'];
	$scope.selectedIndex = 0;

	// *********************************
    // Internal methods
    // *********************************

	// decide which language to switch to
	$scope.getLanguage = function() {
		if ($translate.use() === 'en_EN' && $scope.selectedIndex === 0 || $translate.use() === 'de_DE' && $scope.selectedIndex === 0) {
    		return 'en_EN';
    	} else {
    		return 'de_DE';
    	}
	};

	// switch to a different language
	$scope.toggleLanguage = function($index) {
		$scope.selectedIndex = $index;

	   	$translate.use($scope.getLanguage());
	};
}]);

angular.module('okottaApp')
	.service('contentBlocksService', ['$q', function($q) {
		// data for main content blocks
		var contentBlocksCollection = [
			{
				"image": "images/claim_.png",
				"alt": "Claim",
				"content": "CLAIM"
			}, 
			{
				"image": "images/organise.png",
				"alt": "Organise",
				"content": "ORGANISE"
			},
			{
				"image": "images/optimise.png",
				"alt": "Optimise",
				"content": "OPTIMISE"
			}
		];

		// Promise-based API
        return {
            loadContentBlocksData: function() {
                // Simulate async nature of real remote calls
                return $q.when(contentBlocksCollection);
            }
        };
}]);
})();