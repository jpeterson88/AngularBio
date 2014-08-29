

bioApp.controller('AboutController', function($scope){
$scope.message = "derpderperpet";
});


bioApp.controller('GamingController', function($scope){

	$scope.controllername = 'gaming'
});

bioApp.controller('ContactController', function($scope){

	$scope.controllername = 'Contact Us'
});

bioApp.controller('HeaderController', function($scope, $location){

 	$scope.isActive = function (path) {

        return $location.path().substr(0, path.length) == path;
    };
});

bioApp.controller('PhotographyController', function($scope){
$scope.controllername = 'photography'


 $scope.myInterval = 5000;
  $scope.slides = [
    {
      image: '../images/cat.JPG'
    },
    {
      image: '../images/dock.JPG'
    },
    {
      image: '../images/sunset.JPG'
    },
    {
      image: '../images/dog2.JPG'
    }
  ];

});


bioApp.controller('SoftwareController', function($scope){
$scope.controllername = 'software'
});




