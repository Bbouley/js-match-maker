// var studentArray = createStudent(prompt('How many students?'));

// var mentorArray = createMentor(prompt('How many mentors?'));

var formInfo = document.getElementsByTagName('form')[0];

var button = document.getElementById('input');

var student = document.getElementsByClassName('students')[0];

var mentors = document.getElementsByClassName('mentors')[0];



// formInfo.children[0].value;
// formInfo.children[1].value;
// formInfo.children[2].value;

function appendChild(parent){

}

function student(name, number, city){
  this.name = formInfo.children[0].value;
  this.number = formInfo.children[1].value;
  this.city = formInfo.children[2].value;
}

  function createStudent(numOfStudents){
    var studentArray = [];
    for (var i = 0; i < numOfStudents; i++) {
    var studentDetails = new student;
      studentArray.push(studentDetails);
    } return studentArray;
  }


button.onclick = function(){
  if (formInfo[3].checked === true){
    createStudent(1);
    for (var i = 0; i < 3; i++) {
    formInfo.children[i].value = null;
    }
  } else if (formInfo[4].checked === true){
      createMentor(1);
    for (var i = 0; i < 3; i++) {
    formInfo.children[i].value = null;
    }
  }
};

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











