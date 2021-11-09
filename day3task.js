// Day 3 Task 
var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ];

  for(var s=0;s<obj.length;s++){
      console.log(obj[s]);
  }

  for(var i in obj){
      console.log(obj[i].person);
  }

  for(var f of obj){
      console.log(f.age);
  }

  obj.forEach(element => {
      console.log(element.company);
  });

  // Resume in jason format
let myresume = {
 "Name":"Harisudhan N",
 "email":"harisudhan1008@gmail.com",
 "Phone number":"9791749054",
 "Academic profile":
    {"SSLC":{"School":"St.joseph's Matriculation Higher Secondary School,Perambalur",
            "Year":"2015-2016",
            "Percantage": "90.8%" 
        },
     "HSC":{"School":"St.joseph's Matriculation Higher Secondary School,Perambalur",
            "Group": "Computer Science",
            "Year":"2017-2018",
            "Percantage": "66%"
         },
     "UG":{"Degree":"B.Sc,. Computer Science",
           "College":"Srinivasan college of arts and science",
           "Year":"2018-2021",
           "Percantage":"80%"
        }
    },
 "Technical Proficiency" :["HTML","Javascript","CSS"],
 "Certificates":{"Course":"Full Stack Developer(MERN) ",
                 "From":"Guvi Geek Network Pvt Ltd"},
 "Personal Information" :{"Father's name":"Nagarajan N",
                          "Date of Birth":"31/03/2001",
                          "Age":"20",
                          "Ethnicity":"India",
                          "Language Known":"Tamil,English"},
};