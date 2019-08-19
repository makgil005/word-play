$(document).ready(function(){
  var myArray;
  var outputArray = [];
  $(".theForm").submit(function(event){
    myArray = $("#userInput").val().split(" ");
    myArray.forEach(function(word){
      if(word.length > 2){
        outputArray.push(word);
      }
    });
    outputArray.reverse();
    outputArray = outputArray.join(" ");
    $(".output").text(outputArray);
    event.preventDefault();
  });
});
