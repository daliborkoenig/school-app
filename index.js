const school=[
    {
      name: "FbW1",
      students: [
        {
          name: "Alex",
          email: "alex@yahoo.com",
          city: "Berlin",
        },
        {
          name: "Max",
          email: "max@yahoo.com",
          city: "Hamburg",
        },
      ],
    },
  
    {
      name: "FbW2",
      students: [
        {
          name: "Jon",
          email: "jon@yahoo.com",
          city: "Berlin",
        },
        {
          name: "Pilar",
          email: "pilar@yahoo.com",
          city: "Berlin",
        },
      ],
    },
    {
      name: "FbW3",
      students: [],
    },
  ]

function createClass(obj){
  school.push(obj)
}
createClass({ name:  "FbW5", students:  [{name: 'someName', email: 'pilar@yahoo.com', city: 'Riga'},{name: 'Byron', email: 'byron.sutton@gmail.com', city: 'Zagreb'}]  })
createClass({ name:  "FbW4", students:  []  })

function createStudent(obj){
  school[obj.classID-1].students.push({name: obj.name, email: obj.email, city:obj.city})
}

createStudent({ classID: 4, name: 'Mark', email: 'mark.eaton@gmail.com', city: 'Berlin' })
createStudent({ classID: 3, name: 'Marilyn', email: 'marilyn.spears@yahoo.com', city: 'Hamburg' })

function removeClass(obj){
  school.splice(obj.classID-1,1)
}
removeClass({ classID: 2 })

function removeStudent(obj){
  school[obj.classID-1].students.splice(obj.studentID-1,1)
}
removeStudent({ classID: 1, studentID: 2 });

function editStudent(obj){
  school[obj.classID-1].students[obj.studentID-1].email = obj.email
  school[obj.classID-1].students[obj.studentID-1].city = obj.city
  school[obj.classID-1].students[obj.studentID-1].name = obj.name
}
editStudent({

  classID: 3,
  
  studentID: 1,
  
  email: "alex@test.de",
  
  city: "Hamburg",
  
  name: "Alex",
  
})
// console.log(school[2]);

function renderSchoolTemplate(){
  school.sort((a, b) => a.name.localeCompare(b.name));
  count = 0
  console.log(` ${Object.keys({school})[0]} Classes:`)
  console.log(`------------------`)
  school.forEach(element => {
    console.log(` ${element.name} - (class ID: ${school.indexOf(element)+1}):`);
    if(element.students.length === 0){
      console.log(`   The class is empty `);
    };
    element.students.forEach(student => {
      count ++
      console.log(`  ${element.students.indexOf(student)+1}- ${student.name}, ${student.email}, ${student.city} - (student ID: ${element.students.indexOf(student)+1})`)
    })
    console.log(`********************************************`);
  });
  console.log(`  Total classes ${school.length}, total students ${count}`);
}

renderSchoolTemplate()
