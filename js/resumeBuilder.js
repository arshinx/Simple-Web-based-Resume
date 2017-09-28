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
    var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var email = HTMLemail.replace("%data%", bio.contacts.email);
    var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var github = HTMLgithub.replace("%data%", bio.contacts.github);
    var location = HTMLlocation.replace("%data%", bio.contacts.location);
    // Display Contact Info (Header)
    $("#topContacts").append(mobile);
    $("#topContacts").append(email);
    $("#topContacts").append(twitter);
    $("#topContacts").append(github);
    $("#topContacts").append(location);
    // Display Contact Info (Footer)
    $("#footerContacts").append(mobile);
    $("#footerContacts").append(email);
    $("#footerContacts").append(twitter);
    $("#footerContacts").append(github);
    $("#footerContacts").append(location);

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
  // Function to Display Work Elements
  display: function() {
    $("#workExperience").append(HTMLworkStart);
    var employer  = HTMLworkEmployer.replace("%data%", work.jobs[0].employer);
    title         = HTMLworkTitle.replace("%data%", work.jobs[0].title);
    employer      = employer.replace("#", work.jobs[0].url);
    var dates     = HTMLworkDates.replace("%data%", work.jobs[0].dates)
    var location  = HTMLworkLocation.replace("%data%", work.jobs[0].location);
    var desc      = HTMLworkDescription.replace("%data%", work.jobs[0].description);
    $(".work-entry:last").append(employer + title);
    $(".work-entry:last").append(dates);
    $(".work-entry:last").append(location);
    $(".work-entry:last").append(desc);

  }
}

// Display Work
work.display();
// ------------

// Education
var education = {
  "schools": [
    {
      "name": "CMU",
      "location": "Pittsburgh",
      "degree": "CS",
      "dates": "Aug 2017 - Present",
      "majors": ["Web Development"],
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

  }
}

// Projects
var projects = {
  "projects": [
    {
      "title": "Tahoe on Web",
      "dates": "May 2015",
      "description": "A Website featuring Lake Tahoe using various styling techniques — Built with HTML & CSS.",
      "images": ["https://s3-us-west-2.amazonaws.com/udacity-profiles/production/projects/1926548703-project-09aa932ebb6307a312889e6ad84570e1.png?t=1506614005419"]
    }
  ]
}
