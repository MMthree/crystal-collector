
var compNum = Math.floor(Math.random() *108 + 12);
var userScore;
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

//assigns a value from gemValues[] to the gem images
for (var i=0; i < gemValues.length; i++) {
    $(".crystal");
}


//gives each crystal image a number from gemValues array
for( i=0; i<gemValues.length; i++) {
    $(".crystals").data("value");
}







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
    


// var gemOneAdd = $("#gem-one") = gemValues[0];
// console.log(gemOneAdd)


// $("img").on("click", function(){
//     for (var i=0; i<gemValues.length; i++){
//         console.log(gemvaules)
//     }

// });