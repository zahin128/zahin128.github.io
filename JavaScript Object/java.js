


function Course(cname,coursecode, ch, venue, noseat) {

      this.cname = cname;
      this.coursecode = coursecode;
      this.ch = ch;
      this.venue = venue;
      this.noseat = noseat;


}

var course1 = new Course('Web Technologies','INFO 2302',3,'Lab 5',14);
var course2 = new Course('EOP','CSC1100',3,'Lab 4',5);
var course3 = new Course('Islamic Worldview','UNGS2011',3,'Lecture Hall 2',26);



msg = ' the course ' + course1.cname + ' the course code '  + course1.coursecode;

document.getElementById('message1').textContent = msg;

msg2 = ' the course ' + course2.cname + '  the course code '  + course3.coursecode;

document.getElementById('message2').textContent = msg2;

msg3 = ' the course ' + course3.cname + ' the course code '  + course3.coursecode;

document.getElementById('message3').textContent = msg3;
