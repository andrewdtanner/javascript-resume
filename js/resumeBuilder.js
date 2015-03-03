var bio = {};

  bio.name = "Andrew Tanner";
  bio.role = "Software Engineer";
  bio.contactInfo = {};
    bio.contactInfo.mobile = "512.743.3954";
    bio.contactInfo.email = "AndrewDTanner@gmail.com";
    bio.contactInfo.github = "AndrewDTanner";
    bio.contactInfo.location = "San Antonio, TX"; 
  bio.bioPic = "http://placehold.it/100x100";
  bio.welcomeMessage = "Welcome to my Resume";
  bio.skills = [
    "Awesomeness",
    "Programming",
    "HTML",
    "JavaScript"
  ];
bio.display = function(){
  $("#header").prepend(HTMLbioPic.replace("%data%", bio.bioPic));
  $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
  $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
  $("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));
  $("#header").append(HTMLskillsStart);
  for(var skill in bio.skills)
  {
    $("#skillsH3").append(HTMLskills.replace("%data%", bio.skills[skill]));
  }
  $("#topContacts").append(HTMLemail.replace("%data%", bio.contactInfo.email));
  $("#topContacts").append(HTMLmobile.replace("%data%", bio.contactInfo.mobile));
  $("#topContacts").append(HTMLgithub.replace("%data%", bio.contactInfo.github));
  $("#topContacts").append(HTMLlocation.replace("%data%",bio.contactInfo.location));
}

var work = [{},{}];
    work[0].employer = HTMLworkEmployer.replace("%data%", "Accenture Federal Services");
    work[0].title = HTMLworkTitle.replace("%data%", "Developer");
    work[0].dates = HTMLworkDates.replace("%data%", "2014");
    work[0].location = HTMLworkLocation.replace("%data%", "San Antonio, TX");
    work[0].description = HTMLworkDescription.replace("%data%", "Developing Stuff");
    work[1].employer = HTMLworkEmployer.replace("%data%", "Time Warner Cable");
    work[1].title = HTMLworkTitle.replace("%data%", "Technical Analyst");
    work[1].dates = HTMLworkDates.replace("%data%", "2012");
    work[1].location = HTMLworkLocation.replace("%data%", "San Antonio, TX");
    work[1].description = HTMLworkDescription.replace("%data%", "Analytical Stuff");
work.display = function(){
  for(i in work)
  {
    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(work[i].employer);
    $(".work-entry:last").append(work[i].title);
    $(".work-entry:last").append(work[i].dates);
    $(".work-entry:last").append(work[i].location);
    $(".work-entry:last").append(work[i].description);
  }
}    

var education = {};
  education["name"] = HTMLschoolName.replace("%data%", "University of Texas at San Antonio");
  education["degree"] = HTMLschoolDegree.replace("%data%", "Bachelor of Business Administration");
  education["dates"] = HTMLschoolDates.replace("%data%", "2008-2012");
  education["location"] = HTMLschoolLocation.replace("%data%", "San Antonio, TX");
  education["major"] = HTMLschoolMajor.replace("%data%", "Information Systems");
education.display = function(){
  $("#education").append(HTMLschoolStart);
  $(".education-entry").append(education.name);
  $(".education-entry").append(education.degree);
  $(".education-entry").append(education.dates);
  $(".education-entry").append(education.location);
  $(".education-entry").append(education.major);
}
  
var onlineClasses = [{},{},{},{},{}];
  onlineClasses[0].title = "Java Bootcamp";
  onlineClasses[0].school = "Accenture Federal Services";
  onlineClasses[0].dates = "2015";
  onlineClasses[0].url = "Classroom";
  onlineClasses[1].title = "Intro to HTML and CSS";
  onlineClasses[1].school = "Udacity";
  onlineClasses[1].dates = "2014";
  onlineClasses[1].url = "https://www.udacity.com/course/ud304";
  onlineClasses[2].title = "JavaScript Basics";
  onlineClasses[2].school = "Udacity";
  onlineClasses[2].dates = "2014";
  onlineClasses[2].url = "https://www.udacity.com/course/ud804";
  onlineClasses[3].title = "Intro to Java Programming";
  onlineClasses[3].school = "Udacity";
  onlineClasses[3].dates = "2014";
  onlineClasses[3].url = "https://www.udacity.com/course/cs046";
  onlineClasses[4].title = "SAP ABAP Bootcamp";
  onlineClasses[4].school = "Accenture Federal Services";
  onlineClasses[4].dates = "2014";
  onlineClasses[4].url = "Classroom";
onlineClasses.display = function(){
  $("#continuedEducation").append(HTMLonlineClassesStart);
  for(var i =0; i<onlineClasses.length; i=i+1){
    $(".continuedEducation-entry:last").append(HTMLonlineTitle.replace("%data%", onlineClasses[i].title));
    $(".continuedEducation-entry:last").append(HTMLonlineSchool.replace("%data%", onlineClasses[i].school));
    $(".continuedEducation-entry:last").append(HTMLonlineDates.replace("%data%", onlineClasses[i].dates));
    $(".continuedEducation-entry:last").append(HTMLonlineURL.replace("%data%", onlineClasses[i].url));
  }
}

var project = [{},{}];
  project[0].title = HTMLprojectTitle.replace("%data%", "Interactive Resume");
  project[0].dates = HTMLprojectDates.replace("%data%", "2014");
  project[0].description = HTMLprojectDescription.replace("%data%", "It's a Resume");
  project[0].image = HTMLprojectImage.replace("%data%", "http://placehold.it/100x100");
  project[1].title = HTMLprojectTitle.replace("%data%", "Online Porfolio"),
  project[1].dates = HTMLprojectDates.replace("%data%", "2014"),
  project[1].description = HTMLprojectDescription.replace("%data%", "It's a Porfolio of my work"),
  project[1].image = HTMLprojectImage.replace("%data%", "http://placehold.it/100x100");
  




projects.display = function() {
  for(var i in project)  {
    $("#projects").append(HTMLprojectStart);

    $(".project-entry:last").append(project[i].title);
    $(".project-entry:last").append(project[i].dates);
    $(".project-entry:last").append(project[i].description)
    $(".project-entry:last").append(project[i].image)
  }
}

bio.display();
work.display();
projects.display();
education.display();
onlineClasses.display();


$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});