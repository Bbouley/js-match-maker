var formInfo = document.getElementsByTagName('form')[0];

var button = document.getElementById('input');

var students = document.getElementsByClassName('students')[0];

var mentors = document.getElementsByClassName('mentors')[0];

var studentArray = [];

var mentorArray = [];

function appendChild(parent, text){
  var p = document.createElement('p');
  p.innerHTML = text;
  parent.appendChild(p);
}

function textOutput(array){
  return ('Name: ' + array[0].name + '\n' +
          'Number: ' + array[0].number + '\n' +
          'City: ' +array[0].city);
}

function student(name, number, city){
  this.name = formInfo.children[0].value;
  this.number = formInfo.children[1].value;
  this.city = formInfo.children[2].value;
}

  function createStudent(numOfStudents){
    for (var i = 0; i < numOfStudents; i++) {
    var studentDetails = new student;
      studentArray.push(studentDetails);
    } return studentArray;
  }


button.onclick = function(){
  if (formInfo[3].checked === true){
    createStudent(1);
    appendChild(students, textOutput(studentArray));
    for (var i = 0; i < 3; i++) {
    formInfo.children[i].value = null;
    }
  } else if (formInfo[4].checked === true){
      createMentor(1);
      appendChild(mentors, textOutput(mentorArray));
    for (var i = 0; i < 3; i++) {
    formInfo.children[i].value = null;
    }
  }
};

function mentor(name, number, city){
  this.name = formInfo.children[0].value;
  this.number = formInfo.children[1].value;
  this.city = formInfo.children[2].value;
}

function createMentor(numOfMentors){
  for (var i = 0; i < numOfMentors; i++) {
  var mentorDetails = new mentor;
    mentorArray.push(mentorDetails);
  } return mentorArray;
}


function printStudents(array){
  for (var i = 0; i<array.length; i++) {
  return 'Name : ' + array[i].name + '\n' +
        'Phone Number : ' + array[i].number + '\n' +
        'City : ' + array[i].city;
  }
}

function printMentors(array){
  for (var i = 0; i<array.length; i++) {
  alert('Name : ' + array[i].name + '\n' +
        'Phone Number : ' + array[i].number + '\n' +
        'City : ' + array[i].city);
  }
}

function numOfStudents(){
  var num = studentArray.length;
  alert('There are '+ num + ' students')
}

function numOfMentors(){
  var num = mentorArray.length;
  alert('There are '+ num + ' mentors');
}











