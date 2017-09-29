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
  "biopic": "images/image.jpg",
  // Display Data from this object
  display : function() {
    // Role
    $("#header").prepend(HTMLheaderRole.replace("%data%", this.role));
    // Name
    $("#header").prepend(HTMLheaderName.replace("%data%", this.name));
    // Pic
    $("#header").append(HTMLbioPic.replace("%data%", this.biopic));
    // Skill Title
    $("#header").append(HTMLskillsStart);
    // Display all Skills
    this.skills.forEach(function(skill) {
      $("#skills").append(HTMLskills.replace("%data%", skill));
    });
    // Collect Contact info
    var mobile  = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var email   = HTMLemail.replace("%data%", bio.contacts.email);
    var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var git     = HTMLgithub.replace("%data%", bio.contacts.github);
    var loc     = HTMLlocation.replace("%data%", bio.contacts.location);
    // Display Contact Info (Header)
    $("#topContacts").append(mobile, email, twitter, git, loc);
    // Display Contact Info (Footer)
    $("#footerContacts").append(mobile, email, twitter, git, loc);

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
      "location": "San Francisco, CA, USA",
      "description": "Worked on developing an iOS app using Swift with social interaction capabilities."
    },
    {
      "employer": "The Product X",
      "url": "productx.com",
      "title": "Product Intern",
      "dates": "2015 - 2016",
      "location": "San Jose, CA, USA",
      "description": "Worked on a mobile product."
    }
  ],
  // Display Data from this object
  display: function() {
    // Display all jobs/titles
    this.jobs.forEach(function(job) {

      // Declare
      var employer;
      var dates;
      var location;
      var desc;

      // Begin
      $("#workExperience").append(HTMLworkStart);
      // Retrieve and Define Properties
      employer  = HTMLworkEmployer.replace("%data%", job.employer);
      title     = HTMLworkTitle.replace("%data%", job.title);
      employer  = employer.replace("#", job.url);
      dates     = HTMLworkDates.replace("%data%", job.dates);
      location  = HTMLworkLocation.replace("%data%", job.location);
      desc      = HTMLworkDescription.replace("%data%", job.description);
      // Place Values for Display
      $(".work-entry:last").append(employer + title);
      $(".work-entry:last").append(dates);
      $(".work-entry:last").append(location);
      $(".work-entry:last").append(desc);
    });
  }
};

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

    // Show all projects
    this.projects.forEach(function(project) {
      // Begin Project Section/Div
      $("#projects").append("<div id=\"projects-foldable-content\"></div>");
      $("#projects-foldable-content").append(HTMLprojectStart);
      // Properties
      var title = HTMLprojectTitle.replace("%data%", "<a href=\""+ project.link + "\" target=\"_bkank\">" + projects.projects[0].title + "</a>");
      var date  = HTMLprojectDates.replace("%data%", project.dates);
      var desc  = HTMLprojectDescription.replace("%data%", project.description);
      var image;
      project.images.forEach(function(image) {
        // format and append image
        image = HTMLprojectImage.replace("%data%", image);
      });
      // Project Title
      $(".project-entry:last").append(title);
      // Project Date
      $(".project-entry:last").append(date);
      // Project Description
      $(".project-entry:last").append(desc);
      // Since image(s) are optional, check if any are present
      if (project.images.length > 0) {
        // Display image(s)
        $(".project-entry:last").append(image);
      }
    });
  }
};

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

  "onlineCourses": [
    {
    "title": "Front-End Web Developer",
    "dates": "July 2017 - Present",
    "school": "Udacity",
    "url": "https://www.udacity.com"
    }
  ],
  // Display Data from this object
  display : function() {

    // Declarations
    var schoolName, school, degree, dates, loc, major, title, url;

    // Iteration - display all objects: Education
    this.schools.forEach(function(school) {

      // Properties
      schoolName  = HTMLschoolName.replace("%data%", school.name);
      school      = schoolName.replace("#", school.url);
      degree      = HTMLschoolDegree.replace("%data%", school.degree);
      dates       = HTMLschoolDates.replace("%data%", school.dates);
      loc         = HTMLschoolLocation.replace("%data%", school.location);
      major       = HTMLschoolMajor.replace("%data%", school.majors);

      // Education
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(school + degree);
      $(".education-entry:last").append(dates);
      $(".education-entry:last").append(loc);
      $(".education-entry:last").append(major);
    });

    // Iteration - display all objects: Online Courses
    this.onlineCourses.forEach(function(course) {

      // Properties
      title = HTMLonlineTitle.replace("%data%", this.onlineCourses[0].title) + HTMLonlineSchool.replace("%data%", this.onlineCourses[0].school);
      url = HTMLonlineURL.replace("%data%", this.onlineCourses[0].url);

      // Online Courses
      $(".education-entry:last").append(HTMLonlineClasses);
      $(".education-entry:last").append(title.replace("#", course.url));
      $(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
      $(".education-entry:last").append(url.replace("#", course.url));
    });
  }
};

// Display Projects
education.display();
// ------------

// Function to display a map
function addMap() {
    $("#mapDiv").append(googleMap);
}

// Display Map
addMap();
// ------------
