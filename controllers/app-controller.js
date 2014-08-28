(function(){



var app = angular.module('app',[]);


app.controller('AboutController', ['$scope', function($scope){
$scope.message = "derpderperpet";
}]);


app.controller('GamingController', ['$scope', function($scope){
}]);


app.controller('HeaderController', ['$scope', function($scope){
$scope.tab = 1;

$scope.selectTab = function(setTab){
	$scope.tab = setTab;
	};

$scope.isSelected = function(checkTab){
	 $scope.tab === checkTab;
	};


}]);

app.controller('PhotographyController', ['$scope', function($scope){
$scope.message = "derpderperpet";
}]);


app.controller('SoftwareController', ['$scope', function($scope){
$scope.message = "derpderperpet";
}]);


$('#theCarousel').carousel();



}());

