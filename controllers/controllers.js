

bioApp.controller('AboutController', function($scope){
$scope.message = "derpderperpet";
});


bioApp.controller('GamingController', function($scope){

	$scope.controllername = 'gaming'
});

bioApp.controller('ContactController', function($scope){

	$scope.controllername = 'Contact Us'
});

bioApp.controller('HeaderController', function($scope){
$scope.tab = 1;

$scope.selectTab = function(setTab){
	$scope.tab = setTab;
	};

$scope.isSelected = function(checkTab){
	 $scope.tab === checkTab;
	};
});

bioApp.controller('PhotographyController', function($scope){
$scope.controllername = 'photography'
});


bioApp.controller('SoftwareController', function($scope){
$scope.controllername = 'software'
});


//$('#theCarousel').carousel();

