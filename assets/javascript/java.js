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
// var months = $("#months").val().trim();
var mRate = "";
// var billed = $("#billed").val().trim();

var database = firebase.database();

 
// when you click it runs the table
$("#submitF").on("click", function() {

  event.preventDefault();

  names = $("#name").val().trim();
  roles = $("#role").val().trim();
  start = $("#start").val().trim();

  mRate = $("#mrate").val().trim();

  console.log(names);

database.ref().push({
   name: names,
  role: roles,
  start: start,
  // months: months,
  monthly_rate: mrate,



});

  

  alert("hi");
  
  
});

});


