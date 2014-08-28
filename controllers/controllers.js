(function(){



var viewControllers = angular.module('viewControllers',[]);


viewControllers.controller('AboutController', ['$scope', function($scope){
$scope.message = "derpderperpet";
}]);


viewControllers.controller('GamingController', ['$scope', function($scope){
}]);


viewControllers.controller('HeaderController', ['$scope', function($scope){
$scope.tab = 1;

$scope.selectTab = function(setTab){
	$scope.tab = setTab;
	};

$scope.isSelected = function(checkTab){
	 $scope.tab === checkTab;
	};


}]);

viewControllers.controller('PhotographyController', ['$scope', function($scope){
$scope.message = "derpderperpet";
}]);


viewControllers.controller('SoftwareController', ['$scope', function($scope){
$scope.message = "derpderperpet";
}]);


$('#theCarousel').carousel();



}());

