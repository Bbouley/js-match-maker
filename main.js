function student(name, number, city){
  this.name = prompt('Student Name:');
  this.number = prompt('Student Number:');
  this.city = prompt('Student city');
}

function createStudent(numOfStudents){
  var studentArray = [];
  for (var i = 0; i < numOfStudents; i++) {
  var studentDetails = new student;
    studentArray.push(studentDetails);
  } console.log(studentArray);
};

createStudent(prompt('How many students?'));






