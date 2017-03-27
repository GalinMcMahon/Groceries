$(function(){
  var groceries = [];
  var userInputs = ["1", "2", "3"];
  $("#submit").click(function(event) {
    userInputs.forEach(function(userInput){
      groceries.push($("#yourGroceries" + userInput).val());
    });
    groceries.sort();
    var uppercase = groceries.map(function(grocery){
      return grocery.toUpperCase();
    });
    uppercase.forEach(function(grocery) {
        $("#result-list").append("<li>" + grocery + "</li>");
    });
    event.preventDefault();
  });
});
