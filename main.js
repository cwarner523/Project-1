// declaring variables for boxes
var $circle1 = $('#circle1')
var $circle2 = $('#circle2')
var $circle3 = $('#circle3')
var $circle4 = $('#circle4')
//array of divs
var arrOfDivs = [$circle1, $circle2, $circle3, $circle4];

// decarling empty arrays to store user and game patterns
var gameTurn = [];
var userTurn = [];
var $startButton = $('#startgame');


//start function
function startGame()
{
    $startButton.click(function()
    {
        console.log("your game is starting");
        randomizer();
    })
}

function randomizer()
{
   gameTurn.push(getRandom());
   userTurn = [];
   console.log(gameTurn);
   flasher(1);
   userBoard()
}

function flasher(times)
{
    if (times > 0)
    {
        $(gameTurn[0]).fadeTo(350, 1.0, function() {$(this).fadeTo(250, 0.7); });
    }
}

function userBoard()
{

}


function getRandom()
{
    return arrOfDivs[Math.floor(Math.random() * 4)];
}

startGame();
//randomizer();
