(function(){



var bioApp = angular.module('bioApp',[]);


bioApp.controller('AboutController', ['$scope', function($scope){
$scope.message = "derpderperpet";
}]);


bioApp.controller('GamingController', ['$scope', function($scope){
}]);


bioApp.controller('HeaderController', ['$scope', function($scope){
$scope.tab = 1;

$scope.selectTab = function(setTab){
	$scope.tab = setTab;
	};

$scope.isSelected = function(checkTab){
	 $scope.tab === checkTab;
	};


}]);

bioApp.controller('PhotographyController', ['$scope', function($scope){
$scope.message = "derpderperpet";
}]);


bioApp.controller('SoftwareController', ['$scope', function($scope){
$scope.message = "derpderperpet";
}]);


$('#theCarousel').carousel();



}());

