

bioApp.controller('AboutController', function($scope){
$scope.imageUrl = "images/justin_boston.jpg";
$scope.aboutMe = "Welcome to my personal page. I created this site to practice some web technologies I have been working with. My hope is to also give you a glimpse into my life as a software developer and show you the things that mean most to me. You can find all of the code for this site on github as well as other future project! Feel free to send me a message for any inquiries or questions. Enjoy!"
$scope.test = "Software Developer & Aspiring Photographer"

});


bioApp.controller('GamingController', function($scope){

	$scope.controllername = 'Gaming'
  $scope.history1 = 'Gaming has and always will play a role in my life. I grew up playing different variations of games. At 4 years old I recall beating my older brother and all of his friends at any game we would play. I fell in love with the Zelda franchise when Ocarina of Time hit N64 and have been a die hard Zelda fan ever since. I got heavily into Starcraft and CS 1.6 during my middle school and high school days.'
  $scope.history2 = 'At 22 I quit my job to pursue a career as a professional gamer playing SC2. I moved to Romania where I played professionally in a team house for 3.5 months. After Romania I decided that progaming was not what I wanted to do and began my career as a software developer. Now, as a casual gamer, I play Hearthstone, a little bit of Starcraft and League of Legends.'
  $scope.pcSpecs = [
   'I7-2600K 3.4 GHz', 'NVidia GeForce GTX 660 Ti', 'RAM 16 GB', 'Razer DeathAdder', 'Generic Logitech Wireless Keyboard','250 GB INTEL SSD SC2MH250A2', '1 TB WDC WD10EZEX'
  ];


});

bioApp.controller('ContactController', function($scope, $http, $log, promiseTracker, $timeout){

	$scope.controllername = 'Contact Me'
    $scope.subjectListOptions = {
      'inquire': 'Question',
      'comment' : 'Comment',
      'bug': 'Report a Bug'

    };


	$scope.submit = function(form) {
  // Trigger validation flag.
  $scope.submitted = true;

  // If form is invalid, return and let AngularJS show validation errors.
  if (form.$invalid) {
    return;
  }

  // Default values for the request.
  $scope.progress = promiseTracker('progress');
  var config = {
    params : {
      'callback' : 'JSON_CALLBACK',
      'name' : $scope.name,
      'email' : $scope.email,
      'subjectList' : $scope.subjectList,
      'comments' : $scope.comments
    },
    tracker : 'progress'
  };

  // Perform JSONP request.
  $http.post('/api/contact', config)
    .success(function(data, status, headers, config) {
      if (data.success) {
        $scope.name = null;
        $scope.email = null;
        $scope.subjectList = null;
        $scope.comments = null;
        $scope.messages = 'Your email was sent successfully!';
        $scope.submitted = false;
      } else {
        $scope.messages = 'Oops, we received your request, but there was an error.';
        $log.error(data);
      }
    })
    .error(function(data, status, headers, config) {
      $scope.progress = data;
      $scope.messages = 'There was a network error. Try again later.';
      $log.error(data);
    });
  
  // Hide the status message which was set above after 3 seconds.
  $timeout(function() {
    $scope.messages = null;
  }, 5000);
};


$scope.sub2 = function(){
$http.get('/api/test')
  .then(function(result) {
    $scope.result = result.data;
    })
  };

});

bioApp.controller('HeaderController', function($scope, $location){

 	$scope.isActive = function isActive(path) {

        return $location.path().substr(0, path.length) == path;
    };
});

bioApp.controller('PhotographyController', function($scope, Lightbox){
$scope.controllername = 'Photography'


  $scope.images = [
    {
      url: '../images/observatory2.JPG',
      thumbUrl: '../images/observatory2.JPG',
      caption: "Griffith Observatory Sunset"
    },
    {
      url: '../images/docks.JPG',
      thumbUrl: '../images/docks.JPG',
      caption: "Big Bear Docks"
    },
    {
      url: '../images/hollywood.JPG',
      thumbUrl: '../images/hollywood.JPG',
      caption: "Hollywood Sign"
    },
        {
          url: '../images/desert.JPG',
      thumbUrl: '../images/desert.JPG',
      caption: "Desert Sunset"
    },
    {
      url: '../images/cityhall.JPG',
      thumbUrl: '../images/cityhall.JPG',
      caption: "Pasadena City Hall"
    },
    {
      url: '../images/cat1.JPG',
      thumbUrl: '../images/cat1.JPG',
      caption: "Curious Cat Breaks Free"
    },

        {
          url: '../images/icecicle.JPG',
      thumbUrl: '../images/icecicle.JPG',
      caption: "Frost"
    },
    {
      url: '../images/vines.JPG',
      thumbUrl: '../images/vines.JPG',
      caption: "Beanstalk"
    },
    {
      url: '../images/snow.JPG',
      thumbUrl: '../images/snow.JPG',
      caption: "Melting"
    },

    {
          url: '../images/trees.JPG',
      thumbUrl: '../images/trees.JPG',
      caption: "Get Lost"
    },
    {
      url: '../images/trails.JPG',
      thumbUrl: '../images/trails.JPG',
      caption: "Where it starts"
    },
    {
      url: '../images/stump.JPG',
      thumbUrl: '../images/stump.JPG',
      caption: "Jagged"
    },
    {
      url: '../images/sadie5.JPG',
      thumbUrl: '../images/sadie5.JPG',
      caption: "My pup posing"
    },
        {
          url: '../images/sadie4.JPG',
      thumbUrl: '../images/sadie4.JPG',
      caption: "Getting Ready for Fall"
    },

    {
      url: '../images/sadie2.JPG',
      thumbUrl: '../images/sadie2.JPG',
      caption: "Hurry Up!"
    },
        {
      url: '../images/sadie3.JPG',
      thumbUrl: '../images/sadie3.JPG',
      caption: "Striking a Pose"
    },
    {
      url: '../images/alie.JPG',
      thumbUrl: '../images/alie.JPG',
      caption: "Lazy Days"
    },
        {
      url: '../images/cat2.JPG',
      thumbUrl: '../images/cat2.JPG',
      caption: "Blue Eyed Cat"
    },
        {
      url: '../images/observatory.JPG',
      thumbUrl: '../images/observatory.JPG',
      caption: "Griffith Observatory"
    }

  ];

    $scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.images, index);
  };

});


bioApp.controller('SoftwareController', function($scope){
	$scope.controllername = 'Software';

	$scope.openTab = function() {
    $scope.githubUrl = 'https://github.com/sincerelysleepy';
};

$scope.isHidden = false;



 	$scope.isActive = function isActive(path) {

        return $location.path().substr(0, path.length) == path;
    };

	$scope.frameworks = [
	{
		name: "C# / .NET",		
		description: "C# is the foundation of my experience with software development. I learned the majority of programming fundamamentals in the .NET world. I currently manage a CRM built on .NET technologies for one of the largest loan providers in the US. "
	},
		{
		name: "Javascript",
		description: "Being relatively new to JS, I'm finding it syntactically similar to C#, which makes it easy to pick up. I've built this site in javascript and have been working with it a little at work creating a dashboard for one of our clients." 
	},
		{
		name: "WPF",	
		description: "Although I'm not a huge fan of WPF, I have quite a bit of experience working with XAML. My company's CRM is built with WPF which has helped me pick up the technology."
	},
		{
		name: "HTML",
		description: "Believe it or not, this site actually uses HTML. Shocker, I know! HTML had been popping up often for me as I'm transitioning from the .NET world to the open source web world."
	},
		{
		name: "ASP.NET MVC 5",		
		description: "ASP.NET was my welcome to the web technology. I work for a consulting firm and we have a licensing page for a particular type of software which is built in ASP.NET. I've had the opportunity to dabble around, fix bugs and add certain features to this site."		
	},
		{
		name: "WCF",
		description: "WCF is used quite a bit in the .NET world from what I've seen. I'm not necessarily a huge fan but I work with it daily as we have several APIs that are setup using WCF around our custom CRM that communicate with other services."
	},
    {
    name: "node-js",
    description: "Node is a new playing field for myself and I'm quickly learning to love it. This site is served up with node and several of my Restful APIs have been setup using node. Checkout my github repository for this site to see how I'm using node."
  },
		{
		name: "AngularJS",
		description: "Angular has been my focus the past month and I've come to love it. Again, this site is built on Angular and is my first app I've built using it. Dynamic templates is one of the many great features in Angular and I'd highly recommend checking it out!"
	},	
		{
		name: "TSQL",
		description: "I use TSQL on a daily basis as that's our database of choice for my company's CRM application. I'm relatively well versed and am familiar with writing stored procs, basic CRUD, views, triggers and other concepts. I would eventually like to branch out and work with a NOSQL DB."
	},
		{
		name: "Bootstrap",
		description: "As I'm not the best designer in the world, I find bootstrap a great framework to open up with for ideas. The more CSS I'm learning, the more daring I am becoming and eventually I will branch away from it, but for now, it's perfect. This site also uses bootstrap"
	},
		{
		name: "Misc",
		description: "Along with the major technologies and frameworks listed above, I have learned some other frameworks and patterns which include but are not limited to Ideablade's DevForce, Miscrosoft's MEF, Caliburn micro, Telerik's UI controls, repository and factory patterns."
	}
	];

  $scope.oneAtATime = true;

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };


	$scope.selectedFramework = $scope.frameworks[0];

	$scope.setSelectedFramework = function(framework) {

	$scope.isHidden = true;
    $scope.selectedFramework = framework;

    };

});




