
var compNum = Math.floor(Math.random() *108 + 12);
var userScore;
var userWins;
var userLosses;
var gemValues = [];
console.log(gemValues)


$(document).ready(function () {

// sets the score you need to match
$("#computer-score").text(compNum);



//Generates 4 random numbers and puts them in gemValues array
function generateGemNumber() {
for (var i = 0; i < 4; i++) {
    var gemRandNum = Math.floor(Math.random() *12 + 1);
    gemValues.push(gemRandNum);  
}
}

//assigns a value from gemValues[] to the gem images and makes them clickable
generateGemNumber();

    $('img').each(function (index) {
        $(this).attr('data-crystal', gemValues[index]);
        // $("#user-score").text($(this).attr("data-crystal",)); //trying to keep adding points to the user score

    })
    
    $('img').on('click', function(){
        $("#user-score").text(gemValues += userScore);
        console.log($(this).attr('data-crystal'));
    });
    


    if (userScore === compNum) {
        userWins++;
        $("#user-wins").text(userWins);
    } else if (userScore > compNum) {
        userLosses++;
        $("#user-losses").text(userLosses);
    }


//write's the gem value to the page




})
