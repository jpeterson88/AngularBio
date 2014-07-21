(function(){



var app = angular.module('app',[]);
app.controller('IndexController', ['$scope', function($scope){
$scope.message = "Greeting is an act of communication in which human beings intentionally make their presence known to each other, to show attention to, and to suggest a type of relationship (usually cordial) or social status (formal or informal) between individuals or groups of people coming in contact with each other. Greetings sometimes are used just prior to a conversation or to greet in passing, such as on a sidewalk or trail. While greeting customs are highly culture and situation-specific and may change within a culture depending on social status and relationship, they exist in all known human cultures. Greetings can be expressed both audibly and physically, and often involve a combination of the two. This topic excludes military and ceremonial salutes but includes rituals other than gestures. A greeting can also be expressed in written communications, such as letters and emails.";
}]);


$('#theCarousel').carousel();


}());
