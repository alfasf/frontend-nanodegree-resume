/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
 $("#main").append("Alfredo Diaz-Swain");
 var awesomeThoughts = "My name is Alfredo and I am awesome!";
 var funThoughts = awesomeThoughts.replace("awesome", "FUN");

 $('#main').append(funThoughts); */

var bio = {
    "name" : "Alfredo Diaz-Swain",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "650-555-5555",
        "email": "john@example.com",
        "github": "johndoe",
        "twitter": "@johndoe",
        "location": "San Leandro, CA"
    },
    "welcomeMessage": "The world starts when we let our imagination goes!",
    "skills": [
        'bilingual', 'HTML & CSS', 'JavaScript', 'teamwork'
    ],
    "bioPic": "images/fry.jpg"
};

var name= bio.name;
var formattedName= HTMLheaderName.replace("%data%", name);
$("#header").append(formattedName);

var role= bio.role;
var formattedRole= HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedRole);

var skills= bio.skills;
var formattedSkills= HTMLskills.replace("%data%", skills);
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);

var contacMobile= bio.contacts.mobile;
var formattedMobile= HTMLmobile.replace("%data%", contacMobile);
$("#topContacts").prepend(formattedMobile);

var contactEmail= bio.contacts.email; 
var formattedEmail= HTMLemail.replace("%data%", contactEmail);
$("#topContacts").prepend(formattedEmail);

var contactLocation= bio.contacts.location; 
var formattedLocation= HTMLlocation.replace("%data%", contactLocation);
$("#topContacts").append(contactLocation);

var bioPic= bio.bioPic;
var picture= HTMLbioPic.replace("%data%", bioPic);
$("#header").prepend(picture);

var message= bio.welcomeMessage;
var welcome= HTMLwelcomeMsg.replace("%data%", message);
$("#header").prepend(welcome)


//$('#header').prepend(bio);
//$("#header").prepend(formattedName);
 
