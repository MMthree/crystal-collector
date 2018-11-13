
var compNum = Math.floor(Math.random() *108 + 12);
var userScore = "";
var userWins = "";
var userLosses = "";
var gemValues = [];
console.log(gemValues)


// sets the score you need to match
$("#computer-score").text(compNum);

//Generates 4 random numbers and puts them in gemValues array
for (var i = 0; i < 4; i++) {
    var gemRandNum = Math.floor(Math.random() *12 + 1);
    gemValues.push(gemRandNum);  
}



//The commented out code below is working to give the gems each their own number and 
//adding it to the score, but it only adds once. I couldnt't figure out how to keep adding to the score
//with every click.  The other live code on lines 42-49 is random stuff I was trying without the green code below.
//I was also changing stuff last night while showing Tanya so hopefully this all makes sense lol

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
    


var gemOneAdd = $("#gem-one") = gemValues[0];
console.log(gemOneAdd)


$("img").on("click", function(){


});