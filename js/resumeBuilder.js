/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
 $("#main").append("Alfredo Diaz-Swain");
 var awesomeThoughts = "My name is Alfredo and I am awesome!";
 var funThoughts = awesomeThoughts.replace("awesome", "FUN");

 $('#main').append(funThoughts); */

var formattedName= HTMLheaderName.replace("%data%", "Alfredo Diaz-Swain");
var formattedRole= HTMLheaderRole.replace("%data%", "Front-End Web Developer");
var formattedSkills= HTMLskills.replace("%data%", "['bilingual', 'HTML & CSS', 'JavaScript', 'teamwork']");
var formattedMobile= HTMLmobile.replace("%data%", "415-632-2800"); 
var formattedLocation= HTMLlocation.replace("%data%", "1599 Hays St, San Leandro, CA 94577"); 
var formattedEmail= HTMLemail.replace("%data%", "diazalfredo83@gmail.com");
var picture= HTMLbioPic.replace("%data%", "/Documents/Alfredo/Udacity/frontend-nanodegree-resume/images/fry.jpg");
var welcome= HTMLwelcomeMsg.replace("%data%", "The world starts when we let our imagination goes!");

var bio= {
	"name": formattedName, 
	"role": formattedRole, 
	"skills": formattedSkills, 
	"phone": formattedMobile, 
	"email": formattedEmail,
	"location": formattedLocation,
	"picture": picture, 
	"message": welcome 
}

$('#header').prepend(bio);
//$("#header").prepend(formattedName);
 
