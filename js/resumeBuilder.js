/* Create and Display Content */

// Bio
var bio = {
  "name": "Arshin Jain",
  "role": "Web Designer",
  "contacts": {
      "mobile": "+650.121.9898",
      "email": "arshin.jain@outlook.com",
      "github": "arshinx",
      "twitter": "@arshin",
      "location": "Palo Alto, CA"
  },
  "skills": ["Presentations", "Mobile Development", "Tennis"],
  "welcomeMessage": "Greetings!",
  "biopic": "images/fry.jpg",
  // Display Data from this object
  display : function() {
    // Role
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    // Name
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    // Pic
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    // Skill Title and Skills
    $("#header").append(HTMLskillsStart);
    for (var i in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
    // Collect Contact info
    var mobile  = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var email   = HTMLemail.replace("%data%", bio.contacts.email);
    var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var git     = HTMLgithub.replace("%data%", bio.contacts.github);
    var loc     = HTMLlocation.replace("%data%", bio.contacts.location);
    // Display Contact Info (Header)
    $("#topContacts").append(mobile);
    $("#topContacts").append(email);
    $("#topContacts").append(twitter);
    $("#topContacts").append(git);
    $("#topContacts").append(loc);
    // Display Contact Info (Footer)
    $("#footerContacts").append(mobile);
    $("#footerContacts").append(email);
    $("#footerContacts").append(twitter);
    $("#footerContacts").append(git);
    $("#footerContacts").append(loc);

  }
};

// Display Bio
bio.display();
// -----------

// Work
var work = {
  "jobs": [
    {
      "employer": "The Company",
      "url": "thecompany.com",
      "title": "Software Developer Intern",
      "dates": "2016 - 2017",
      "location": "San Francisco, USA",
      "description": "Worked on developing an iOS app using Swift with social interaction capabilities."
    }
  ],
  // Display Data from this object
  display: function() {
    // Begin
    $("#workExperience").append(HTMLworkStart);
    // Retrieve and Define Properties
    var employer  = HTMLworkEmployer.replace("%data%", work.jobs[0].employer);
    title         = HTMLworkTitle.replace("%data%", work.jobs[0].title);
    employer      = employer.replace("#", work.jobs[0].url);
    var dates     = HTMLworkDates.replace("%data%", work.jobs[0].dates)
    var location  = HTMLworkLocation.replace("%data%", work.jobs[0].location);
    var desc      = HTMLworkDescription.replace("%data%", work.jobs[0].description);
    // Place Values for Display
    $(".work-entry:last").append(employer + title);
    $(".work-entry:last").append(dates);
    $(".work-entry:last").append(location);
    $(".work-entry:last").append(desc);
  }
}

// Display Work
work.display();
// ------------

// Projects
var projects = {
  "projects": [
    {
      "title": "Tahoe on Web",
      "dates": "May 2015",
      "description": "A Website featuring Lake Tahoe using various styling techniques — Built with HTML & CSS.",
      "images": ["https://s3-us-west-2.amazonaws.com/udacity-profiles/production/projects/1926548703-project-09aa932ebb6307a312889e6ad84570e1.png?t=1506614005419"]
    }
  ],
  // Display Data from this object
  display: function() {
    // Begin Project Section/Div
    $("#projects").append("<div id=\"projects-foldable-content\"></div>");
    $("#projects-foldable-content").append(HTMLprojectStart);
    // Properties
    var title = HTMLprojectTitle.replace("%data%", "<a href=\""+ projects.projects[0].link + "\" target=\"_bkank\">" + projects.projects[0].title + "</a>");
    var date  = HTMLprojectDates.replace("%data%", projects.projects[0].dates);
    var desc  = HTMLprojectDescription.replace("%data%", projects.projects[0].description);
    var image = HTMLprojectImage.replace("%data%", projects.projects[0].images[0]);
    // Project Title
    $(".project-entry:last").append(title);
    // Project Date
    $(".project-entry:last").append(date);
    // Project Description
    $(".project-entry:last").append(desc);
    // Since image(s) are optional, check if any are present
    if (projects.projects[0].images.length > 0) {
      // Display image(s)
      $(".project-entry:last").append(image);
    }
  }
}

// Display Projects
projects.display();
// ------------

// Education
var education = {
  "schools": [
    {
      "name": "CMU",
      "location": "Pittsburgh",
      "degree": "Bachelors",
      "dates": "Aug 2017 - Present",
      "majors": ["C.S."],
      "url": "udacity.com"
    }
  ],

  "online": [
    {
    "title": "Front-End Web Developer",
    "dates": "July 2017 - Present",
    "school": "Udacity",
    "url": "https://www.udacity.com"
    }
  ],
  // Display Data from this object
  display : function() {

    // Properties
    var schoolName  = HTMLschoolName.replace("%data%", this.schools[0].name);
    var school      = schoolName.replace("#", this.schools[0].url);
    var degree      = HTMLschoolDegree.replace("%data%", this.schools[0].degree);
    var dates       = HTMLschoolDates.replace("%data%", this.schools[0].dates);
    var loc         = HTMLschoolLocation.replace("%data%", this.schools[0].location);
    var major       = HTMLschoolMajor.replace("%data%", this.schools[0].majors);

    var title = HTMLonlineTitle.replace("%data%", this.online[0].title) + HTMLonlineSchool.replace("%data%", this.online[0].school);
    var url = HTMLonlineURL.replace("%data%", this.online[0].url);

    // Education
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(school + degree);
    $(".education-entry:last").append(dates);
    $(".education-entry:last").append(loc);
    $(".education-entry:last").append(major);

    // Online Classes
    $(".education-entry:last").append(HTMLonlineClasses);
    $(".education-entry:last").append(title.replace("#", education.online[0].url));
    $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.online[0].dates));
    $(".education-entry:last").append(url.replace("#", education.online[0].url));
  }
}

// Display Projects
education.display();
// ------------
