(function(){


app.controller('HeaderController', ['$scope', function($scope){
$scope.tab = 1;

$scope.selectTab = function(setTab){
	$scope.tab = setTab;
	};

$scope.isSelected = function(checkTab){
	 $scope.tab === checkTab;
	};


}]);



}());

