 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB9M8vnNlHYTFIQrxQtHCORCWzH5ddM_ac",
    authDomain: "employee-worksheet.firebaseapp.com",
    databaseURL: "https://employee-worksheet.firebaseio.com",
    projectId: "employee-worksheet",
    storageBucket: "employee-worksheet.appspot.com",
    messagingSenderId: "479008241580"
  };
  firebase.initializeApp(config);
var row = 0;


  function newtablerow(){
  	var newtr = $("<tr id='row" + row + "'>");
  	$(".table").append(newtr);
  	for (var i = 0; i < 6; i++) {
  		$("#row" + row).append("<td class='column" + i + "'>");
  	}
  	row++;

  }

  var database = firebase.database();

$("#button").on("click", function(event) {
	var name = $("#name").val(),
	 role = $("#role").val(),
	 date = $("#date").val(),
	 rate = $("#rate").val();

database.ref().push({
	name: name,
	role: role,
	date: date,
	rate: rate,
	dateAdded: firebase.database.ServerValue.TIMESTAMP
})

});

database.ref().on("value", function(snapshot){



});
console.log(database.ref());