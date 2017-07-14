
//array of divs
const buttons = ["#circle1", "#circle2", "#circle3", "#circle4"];

// decarling empty arrays to store user and game patterns
var gameTurn = [];
var userTurn = [];
var $startButton = $('#startgame');
var $circle = $('.circle')


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
    console.log('randomizer')
   gameTurn.push(buttons[getRandom()]);          //build array from pattern
   let randNum = gameTurn[0];
   console.log(randNum);
   flasher(1);                
    activateUser();          //Players turn to build matching pattern
}

function flasher(times)
{
    console.log('flasher')
    if (times > 0)
    {
        $(gameTurn[0]).fadeTo(350, 1.0, function() {$(this).fadeTo(250, 0.7); });
    }
}


function activateUser()
{
    console.log('activate user')
    $circle.click(function()
    {
        let userSelection = $(this).attr('id');
        userTurn.push(userSelection);
        console.log(userSelection)
        flasher(1);   
    })
    //console.log($(this));
    //userTurn.push(userSelection);       //adding users selection to their pattern
    //flasher(1);                         //flash when user clicks
    //console.log(userTurn[0])
    checkForWin();
}

function checkForWin()
{  
    
    if (randNum)
    {
        console.log("count 1")
        randomizer();
    }else{
        console.log("You have lost, try again!")
    }
}

// create pattern
function getRandom()
{
    return Math.floor(Math.random() * 4);
}

startGame();
//randomizer();
