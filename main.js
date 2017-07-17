
//array of divs
const $buttons = ["circle1", "circle2", "circle3", "circle4"];

// decarling empty arrays to store user and game patterns
var gameTurn = [];
var userTurn = [];
var $startButton = $('#startgame');
var $circle = $('.circle')
let currentCheckIndex = 0;
$('#counter').text(0);


// initialize button click events
$circle.click(function()
{
    let userSelection = $(this).attr('id');
    userTurn.push(userSelection);
    //console.log(userSelection)
    //$(this).animate({opacity: 0.5},500).animate({opacity: 1}, 300);
    checkForWin(); 
});

    $circle.on('mousedown', function()
    {
        $(this).addClass('makeLight');
    });

    $circle.on('mouseup', function()
        {
            $(this).removeClass('makeLight');
        });



//start function
function startGame()
{
    $startButton.click(function()
    {
        console.log("your game is starting");
        $('#counter').text(0);
        randomizer();
    })
}


function randomizer()
{
    console.log('randomizer')
    gameTurn.push($buttons[getRandom()]);          //build array from pattern
   let randNum = gameTurn;
   console.log(randNum);

    setTimeout(function()
    {
        flasher(1);
    }, 500);

}

function flasher()
{
    for(i = 0; i < gameTurn.length; i++)
    {
    
    //$(`#${gameTurn[i]}`).fadeTo(450, 0.5, function() {$(this).fadeTo(350, 1.0); });
            $(`#${gameTurn[i]}`).delay(i * 400).animate({
                opacity: '0.5',
            });
            $(`#${gameTurn[i]}`).delay(i * 200).animate({
                opacity: '1',
            });
            if(gameTurn[i] === 'circle1'){
            $($('#circle1a')).animate({
                opacity: '0',
                
            });
            }
    }

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
    setTimeout(function() 
    { 
        if(currentCheckIndex ===  gameTurn.length-1){
            setTimeout(function()
            {
            console.log('resetting check index');
            $('#counter').text(userTurn.length);
            
            setTimeout(function()
            {
                randomizer();
            }, 500);

            currentCheckIndex = 0;
            userTurn = [];

            if(gameTurn.length > 4)
                {
                    setTimeout(function()
                    {
                        randomizer();
                    }, 500);
                }

            }, 500);
        }else{
            currentCheckIndex++;   
        }
    }, 500);

}

// create pattern
function getRandom()
{
    return Math.floor(Math.random() * 4);
}

startGame();
