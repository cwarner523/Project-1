
//array of divs
const $buttons = ["circle1", "circle2", "circle3", "circle4"];

// decarling empty arrays to store user and game patterns
var gameTurn = [];
var userTurn = [];
var $startButton = $('#startgame');
var $circle = $('.circle')
let currentCheckIndex = 0;
// initialize button click events
$circle.click(function()
{
    let userSelection = $(this).attr('id');
    userTurn.push(userSelection);
    console.log(userSelection)
    flasher();  

    checkForWin(); 
});

//declaring count variable
var count = 0;

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
   gameTurn.push($buttons[getRandom()]);          //build array from pattern
   let randNum = gameTurn;
   console.log(randNum);
   flasher(1);                
// activateUser();          //Players turn to build matching pattern
}

function flasher(times)
{
    for(i = 0; i < gameTurn.length; i++)
    {
        //$(`#${gameTurn[i]}`).fadeTo(450, 0.5, function() {$(this).fadeTo(350, 1.0); });
        $(`#${gameTurn[i]}`).animate({
            opacity: '0.5',
        });
        $(`#${gameTurn[i]}`).animate({
            opacity: '1',
        });
    }
}

function activateUser()
{
    let userSelection = $(this).attr('id');
    userTurn.push(userSelection);
    console.log(userSelection)
    flasher();  
    checkForWin(); 
    //console.log($(this));
    //userTurn.push(userSelection);       //adding users selection to their pattern
    //flasher(1);                         //flash when user clicks
    //console.log(userTurn[0])
    // `#${gameTurn[0]}`
}

function checkForWin()
{ 

    console.log(`Game turn: ${gameTurn}, user turn: ${userTurn}`);
    if (gameTurn[currentCheckIndex] === userTurn[currentCheckIndex])
    {
        console.log("count 1");
        
    }else{
    alert("You have lost, try again!");
    location.reload();
    }   
    


    console.log(currentCheckIndex);
    console.log(gameTurn.length);
    console.log(gameTurn.length-1);
    $('#counter').text(count++);
    if(currentCheckIndex ===  gameTurn.length-1){
        console.log('resetting check index');
        $('#counter').text(count++);
        randomizer();
        currentCheckIndex = 0;
        userTurn = [];
    }
    else{
        currentCheckIndex++;
    }

}

// create pattern
function getRandom()
{
    return Math.floor(Math.random() * 4);
}

startGame();
//randomizer();
