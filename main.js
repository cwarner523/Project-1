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
   gameTurn.push(getRandom());          //build array from pattern
   userTurn = [];
   console.log(gameTurn);
   flasher(1);                  
   activateUser(userTurn);          //Players turn to build matching pattern
}

function flash(times)
{
    console.log(this);
    this.style.opacity = '1';
}

function flasher(times)
{
    if (times > 0)
    {
        $(gameTurn[0]).fadeTo(350, 1.0, function() {$(this).fadeTo(250, 0.7); });
    }
}



function activateUser(userTurn)
{
    $(gameTurn[0]).click(function()         //click first div   
    {
        var userSelection = (this);
        userTurn.push(userSelection);       //adding users selection to their pattern
        flasher(1);                         //flash when user clicks
        console.log(userSelection);         
    }
    
    );
}
/*
function userBoard()
{
    var userSelection = (this.id);
    userTurn.push(userSelection);
    flasher(1);
}
*/

// create pattern
function getRandom()
{
    return arrOfDivs[Math.floor(Math.random() * 4)];
}

startGame();
//randomizer();
