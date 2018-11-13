
var compNum = Math.floor(Math.random() *108 + 12);
var userScore = "";
var userWins = "";
var userLosses = "";
var gemValues = [];
console.log(gemValues)


// inputs the score you need to match to the webpage
$("#computer-score").text(compNum);

//Generates 4 random numbers and puts them in gemValues array
for (var i = 0; i < 4; i++) {
    var gemRandNum = Math.floor(Math.random() *12 + 1);
    gemValues.push(gemRandNum);  
}

var gemOneAdd = $("#gem-one") = gemValues[0];
console.log(gemOneAdd)

//The commented out code below is working to give the gems each their own number and 
//adding it to the score, but only once. I couldnt't figure out how to keep adding to the score
//with every click.  

//write's the gem value to the page
// $("#gem-one").on("click", function() {
//     var gemOneAdd = document.getElementById("user-score").innerHTML = gemValues[0];
// });
// $("#gem-two").on("click", function() {
//     var gemTwoAdd = document.getElementById("user-score").innerHTML = gemValues[1];
// });
// $("#gem-three").on("click", function() {
//     var gemThreeAdd = document.getElementById("user-score").innerHTML = gemValues[2];
// });
// $("#gem-four").on("click", function() {
//     var gemFourAdd = document.getElementById("user-score").innerHTML = gemValues[3];
// });
    

$("img").on("click", function(){


});