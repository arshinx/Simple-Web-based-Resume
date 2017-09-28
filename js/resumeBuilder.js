/* Data */

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
    // Name
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    // Role
    $("#header").append(HTMLheaderRole.replace("%data%", bio.role));
    // Pic
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    // Skills
    $("#header").append(HTMLskillsStart);
  }
};

// Display Bio
bio.display();

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
  ]
}

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
  ]
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
