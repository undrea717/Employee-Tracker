 $(document).ready(function(){

 var config = {
    apiKey: "AIzaSyAVGylpBVfaLy4ntCTEu410RrXJ1Z-cNGA",
    authDomain: "employee-tracker-12a5f.firebaseapp.com",
    databaseURL: "https://employee-tracker-12a5f.firebaseio.com",
    projectId: "employee-tracker-12a5f",
    storageBucket: "employee-tracker-12a5f.appspot.com",
    messagingSenderId: "745845504120"
  };
  firebase.initializeApp(config);


  // setting generic vars
var names = "";
var roles = "";
var start = "";
var months = "";
var mRate = "";
var billed = "";

var database = firebase.database();

var timeDiff = function(start, end) {

    return moment(new Date(end)).diff(new Date(start), "months", true);

  }
 
// when you click it runs the table
$("#submitF").on("click", function() {

  event.preventDefault();

  today = moment().format("DD-MM-YY");
  names = $("#name").val().trim();
  roles = $("#role").val().trim();
  start = $("#start").val().trim();
  months = Math.floor(timeDiff(start, today));
  mRate = $("#mrate").val().trim();
  billed = (months * mRate);



  $("#employeeInfo").append("<tr><td>" + names + "</td><td>" + roles + "</td><td>" + start + "</td><td>" + months + "</td><td>" + mRate + "</td><td>" + billed + "</td></tr>") ;


  console.log(months);
  console.log(billed);

database.ref().push({
   name: names,
  role: roles,
  start: start,
  months: months,
  monthly_rate: mRate,
  billed: billed,
 

});
 // alert("hi");
});
 database.ref().on("child_added", function(childSnapshot) {

  $("#employeeInfo").append("<tr><td>" + childSnapshot.val().name + "</td><td>" + childSnapshot.val().role + "</td><td>" + childSnapshot.val().start + "</td><td>" + childSnapshot.val().months + "</td><td>" + childSnapshot.val().monthly_rate + "</td><td>" + childSnapshot.val().billed + "</td></tr>") ;




  


})



});


