var studentArray = createStudent(prompt('How many students?'));

var mentorArray = createMentor(prompt('How many mentors?'));

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
  } return studentArray;
}

function mentor(name, number, city){
  this.name = prompt('Mentor Name:');
  this.number = prompt('Mentor Number:');
  this.city = prompt('Mentor city');
}

function createMentor(numOfMentors){
  var mentorArray = [];
  for (var i = 0; i < numOfMentors; i++) {
  var mentorDetails = new mentor;
    mentorArray.push(mentorDetails);
  } return mentorArray;
}

var numOfStudents = studentArray.length;

var numOfMentors = mentorArray.length;

function printStudents(array){
  for (var i = 0; i<array.length; i++) {
  alert('Name : ' + array[i].name + '\n' +
        'Phone Number : ' + array[i].number + '\n' +
        'City : ' + array[i].city);
  };
}

printStudents(studentArray);








