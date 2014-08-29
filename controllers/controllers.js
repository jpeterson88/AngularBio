

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

 	$scope.isActive = function isActive(path) {

        return $location.path().substr(0, path.length) == path;
    };


    $scope.areItemsActive = function (paths){
    	for(i=0;i<paths.length;i++){
    			var active = $scope.isActive(paths[i]);
    			if(active){
    				return true;
    		}

    	};
    		
    };





});

bioApp.controller('PhotographyController', function($scope){
$scope.controllername = 'photography'


 $scope.photogInterval = 5000;
  $scope.slides = [
    {
      image: '../images/cat.JPG',
      text: "Hollywood Cat"
    },
    {
      image: '../images/dock.JPG',
      text: "Big Bear Sunset"
    },
    {
      image: '../images/sunset.JPG',
      text: "Desert Sunset"
    },
    {
      image: '../images/dog2.JPG',
      text: "Much Shibe, wow"
    }
  ];

});


bioApp.controller('SoftwareController', function($scope){
$scope.controllername = 'software'
});




