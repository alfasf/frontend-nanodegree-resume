/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
 $("#main").append("Alfredo Diaz-Swain");
 var awesomeThoughts = "My name is Alfredo and I am awesome!";
 var funThoughts = awesomeThoughts.replace("awesome", "FUN");

 $('#main').append(funThoughts); */

var formattedName= HTMLheaderName.replace("%data%", "Alfredo Diaz-Swain");
var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Web Developer");

$('#header').prepend(formattedRole);
$("#header").prepend(formattedName);
 
