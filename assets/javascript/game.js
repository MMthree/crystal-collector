var compNum;
var userScore = 0;
var userWins = 0;
var userLosses = 0;
var gemValues = [];
console.log(gemValues)


$(document).ready(function () {

// sets the score you need to match
function generateCompNum () {
compNum = Math.floor(Math.random() *108 + 12);
$("#computer-score").text(compNum);
}

generateCompNum();

// gemValues
//Generates 4 random numbers and puts them in gemValues array
function generateGemNumber() {
    console.log(gemValues);
for (var i = 0; i < 4; i++) {
    var gemRandNum = Math.floor(Math.random() *12 + 1);
    gemValues.push(gemRandNum);  
}resetGemValues();
}


//assigns a value from gemValues[] to the gem images and makes them clickable
generateGemNumber();


function resetGemValues() {
    $('img').each(function (index) {
        $(this).attr('data-crystal', gemValues[index]);
       
    })
}
    
    $('img').on('click', function(){
        var gemAdd = ($(this).attr('data-crystal'));
        gemAdd = parseInt(gemAdd);
        $("#user-score").text (userScore += gemAdd);
      

        

    if (userScore === compNum) {
        userWins++;
        $("#user-wins").text(userWins);
        $("#computer-score").text(compNum);
        userScore = 0;
        $("#user-score").text (userScore);
        compNum = 0;
        gemValues = [];
        generateCompNum();
        generateGemNumber();

    } else if (userScore > compNum) {
        userLosses++;
        compNum = 0;
        gemValues = [];
        generateCompNum();
        generateGemNumber();
        $("#user-losses").text(userLosses);
        userScore = 0;
        $("#user-score").text (userScore);
    }
 });




})