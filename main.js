
//array of divs
const $buttons = ["circle1", "circle2", "circle3", "circle4"];

// decarling empty arrays to store user and game patterns
var gameTurn = [];
var userTurn = [];
var $startButton = $('#startgame');

//declaring circle class
var $circle = $('.circle')
let currentCheckIndex = 0;

//start counter on 0
$('#counter').text(0);


// initialize button click events
$circle.click(function() {
    let userSelection = $(this).attr('id');
    userTurn.push(userSelection);
    checkForWin();
});

// when buttons are clicked on calls the makeLight class to light up
$circle.on('mousedown', function() {
    $(this).addClass('makeLight');
});

// when mouse is up removes the class to go back to normal
$circle.on('mouseup', function() {
    $(this).removeClass('makeLight');
});


//start function
function startGame()
{
    $startButton.click(function() {
        console.log("your game is starting");
        $('#counter').text(0);
        randomizer();
    })
}

// picking a random number and adding a delay to call the flasher function
function randomizer()
{
    gameTurn.push($buttons[getRandom()]);          //build array from pattern
    console.log(gameTurn.length);
    console.log(gameTurn);

    flasher();

}

// call flasher to iterate through array and create a flash illusion
function flasher() {
  var timer = 500;
  console.log('flashing');
  console.log(gameTurn.length);
  console.log(gameTurn);
  let i = 0;
  while (i < gameTurn.length) {
    var turn = gameTurn[i];
    console.log(turn);
    setTimeout(function(x) {
      $(`#${x}`).addClass('makeLight')
      console.log(turn);

    }, timer, turn)

    timer += 500;

    setTimeout(function(x) {
      $(`#${x}`).removeClass('makeLight')
    }, timer, turn);

    timer += 500;
    i++;
  }
}


// function to check for win
function checkForWin() {
    // checking to see if the game turn and user turn have the same index
    if (gameTurn[currentCheckIndex] === userTurn[currentCheckIndex])
    {
        console.log("count 1");
    }else{
    alert("You have lost, try again!");
    location.reload();
    }


    setTimeout(function() {
        // if the current index is = to the last element in the gameturn array
        if(currentCheckIndex ===  gameTurn.length-1){
            setTimeout(function()
            {
                //add one to the counter to keep track of pattern
                $('#counter').text(userTurn.length);

                setTimeout(function()
                {
                    randomizer();
                }, 600);

                // reset index and userTurn array
                currentCheckIndex = 0;
                userTurn = [];

            // if length is greater than 4 delay calling the randomizer function
            if(gameTurn.length > 4)
                {
                    setTimeout(function()
                    {
                        randomizer();
                    }, 500);
                }

            }, 500);
        }else{
            setTimeout(function()
            {
                currentCheckIndex++;
            }, 300);
        }
    }, 500);
    winner();
}

// create pattern
function getRandom() {
    return Math.floor(Math.random() * 4);
}

startGame();

// calling the winner function
function winner() {
    if (userTurn.length === 6)
        {
            setTimeout(function()
            {
                $('.circle').addClass('makeLight');

                setTimeout(function()
                {
                    $('#counter').text("WINNER");
                }, 500);

                setTimeout(function()
                {
                    alert("you have won!")
                    location.reload();
                }, 1000);
            }, 2000);
        }
}
