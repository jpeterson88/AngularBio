

bioApp.controller('AboutController', function($scope){
$scope.message = "derpderperpet";
});


bioApp.controller('GamingController', function($scope){

	$scope.controllername = 'Gaming'
});

bioApp.controller('ContactController', function($scope){

	$scope.controllername = 'Contact Me'
});

bioApp.controller('HeaderController', function($scope, $location){

 	$scope.isActive = function isActive(path) {

        return $location.path().substr(0, path.length) == path;
    };
});

bioApp.controller('PhotographyController', function($scope){
$scope.controllername = 'Photography'


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
	$scope.controllername = 'Software';

	$scope.openTab = function() {
    $scope.githubUrl = 'https://github.com/sincerelysleepy';
};

	$scope.frameworks = [
	{
		frmwrkName: "C# / .NET",
		location: "../templates/c-sharp.html"
	},
		{
		frmwrkName: "Javascript",
		location: "../templates/javascript.html"
	},
		{
		frmwrkName: "WPF",
		location: "../templates/wpf.html"
	},
		{
		frmwrkName: "WCF",
		location: "../templates/wcf.html"
	},
		{
		frmwrkName: "AngularJS",
		location: "../templates/angular.html"
	},	
		{
		frmwrkName: "HTML",
		location: "../templates/hypertext.html"
	},
		{
		frmwrkName: "TSQL",
		location: "../templates/tsql.html"
	},
		{
		frmwrkName: "ASP.NET",
		location: "../templates/asp.html"
	},
		{
		frmwrkName: "Bootstrap",
		location: "../templates/bootstrap.html"
	},
		{
		frmwrkName: "Misc",
		location: "../templates/misc.html"
	}
	];
});




