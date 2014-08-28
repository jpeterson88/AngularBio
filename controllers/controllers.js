(function(){



var viewControllers = angular.module('viewControllers',[]);


viewControllers.controller('AboutController', ['$scope', function($scope){
$scope.message = "derpderperpet";
}]);


viewControllers.controller('GamingController', ['$scope', function($scope){

	$scope.controllername = 'gaming'
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
$scope.controllername = 'photography'
}]);


viewControllers.controller('SoftwareController', ['$scope', function($scope){
$scope.controllername = 'software'
}]);


//$('#theCarousel').carousel();



}());

