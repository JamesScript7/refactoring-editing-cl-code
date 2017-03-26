// These are comments! It won't be shown by the console. :)
'use strict';
// 'use strict' is declared at the top.
// Part of this is to make sure ES6 works

let title = "Welcome to Meme Trivia!" + "\n";
// \n adds a new line

console.log(title);

// So you can see JS uses functions to jump around like
// in bash with :start, :start1, :top, etc...

function start() {
  let age = prompt("Year of Birth:");
  let birth = 2017 - parseInt(age);
  // parseInt function parses a string argument and returns an integer.
  let deny = "Sorry, you are underaged!" + "\n";
  
  if (birth >= 18) {
    console.log(`You are ${birth} years old!` + "\n");
  	// String interpolation in ES6 using ` backticks and ${} template literals.
    setTimeout(function() {
      start1();
    }, 1000);
    // Will wait 1000 milliseconds before executing whatever that's in
    // the code block.
  } else if (birth < 18) {
    setTimeout(function() {
      console.log(deny);
      console.log("Good Bye");
    }, 1000);
  } else {
    let continueTrivia = confirm("Sorry, I didn't catch that... Would you like to try again?");
    
    continueTrivia ? start() : console.log("Thanks for playing!");
    // Ternary Operator evaluates the condition before the question mark.
    // if "True" it runs the expression after the question mark and before the colon.
    // if "False" it runs the expression after the colon mark. 
  }
  // if/else statement in JS.
}

function start1() {
  let password = prompt("Enter a Password:");
  
  if (password === "Friday") {
  	// I use the triple equal sign so it checks the value AND type.
    console.log("Welcome!" + "\n");
    setTimeout(function() {
      top1();
    }, 1000);
  } else {
    console.log("Incorrect password!");
    setTimeout(function() {
      start1();
    }, 1000);
  }
}

const colorArr = ["PINK", "GREEN", "RED", "BLUE"];
// const is part of ES6. The value of the variable can't be
// reassigned or redeclared. In this case the arr becomes immutable.

function top1() {
  let colorChoice = prompt("Pick a color: [1] Pink, [2] Green, [3] Red, [4] Blue");
  
  switch (colorChoice) {
    case "1":
      console.log("A command that turns the text color " + colorArr[0] + "\n");
      setTimeout(function() {
        top2(colorArr[0]);
      }, 1000);
      break;
    case "2":
      console.log("A command that turns the text color " + colorArr[1] + "\n");
      setTimeout(function() {
        top2(colorArr[1]);
      }, 1000);
      break;
    case "3":
      console.log("A command that turns the text color " + colorArr[2] + "\n");
      setTimeout(function() {
        top2(colorArr[2]);
      }, 1000);
      break;
    case "4":
      console.log("A command that turns the text color " + colorArr[3] + "\n");
      setTimeout(function() {
        top2(colorArr[3]);
      }, 1000);
      break;
    default:
      console.log("I didn't understand that..." + "\n");
      console.log("exiting...");
  }
  // Look! A wild Switch Statement! Part of many conditional statements.
}

function top2(color) {
  let userName;
  
  console.log("The color of the text that was passed down as an argument is " + color + "\n");
  
  userName = prompt("Please enter your Name:");
  
  console.log(`Hello, ${userName}. ${title}`);
  
  setTimeout(function(){
    questLoop();
  }, 1000);
}

let questionList = [{
  "question": "What is something someone may say to their friend if they are wearing shoes that are undesirable aesthetically?",
  "choices": ["What are these!?", "Bruhh..", "Kindly remove your shoes", "What are those!?"],
  "correctAnswer": "4",
  "correctResponse": "CORRECT! What Are Those!? Defining it as a question yelled at someone wearing unkempt or off-brand footwear."
  }, {
  "question": "On the The Dr. Phil Show, teenage girl Danielle Bregoli became famous with this catch phrase:",
  "choices": ["Catch me inside, how bout dat!", "Catch me outside, how bout dat!", "Kindly meet me outside for confrontation.", "What are those!?"],
  "correctAnswer": "2",
  "correctResponse": "CORRECT! Cash Me Ousside, How Bow Dah is a memorable quote uttered by 13-year-old Danielle Bregoli on The Dr. Phil Show, during which she challenges the show's audience to a fight with the phrase Catch me outside, how about that?"
  }, {
  "question": "As a game among friends to jokingly prove their credibility/loyalty in which one person would text another Rain Drop and the other would have to reply:",
  "choices": ["Drip Drop","Rain Rain Go Away","Drop Top","Don't rain on my parade"],
  "correctAnswer": "3",
  "correctResponse": "CORRECT! Rain Drop Drop Top is a lyric from the song Bad and Boujee by hip hop group Migos that became a phrasal template for jokes primarily on Twitter."
  }
];
// This is an array that holds 3 objects. You can see the key and value pairs at play.
// You can also see that value of choices is an array that is in an object that is in an array.

let winCount = 0;

function questLoop() {
  for (var i=0; i<questionList.length; i++) {
    let
      question = questionList[i].question,
      choices = questionList[i].choices,
      correctAnswer = questionList[i].correctAnswer,
      correctResponse = questionList[i].correctResponse,
  	// Good 'ol for loop that's using i to iterate the 
    // length of the questionList array.
      answer = prompt(
      question + "\n" + "\n" + 
      "[1] " + choices[0] + "\n" + 
      "[2] " + choices[1] + "\n" + 
      "[3] " + choices[2] + "\n" + 
      "[4] " + choices[3]
    );
    // Also, instead of writing let for each new variable
    // I chose to continue them with "," and ending the 
    // string of variables with ";"
    // It makes it cleaner!
  
    if (answer === correctAnswer) {
      confirm(correctResponse);
      winCount++;
      // This is short hand for winCount = winCount + 1
      // You can also write it as winCount += 1
    } else {
      alert("Sorry, that was incorrect, let's move on...");
    }
  }
  
  if (winCount > 1) {
    win();
  } else if (winCount < 2) {
    fail();
  }
}

let finishMsg = "Thank you for playing!";

function fail() {
  console.log("                _,-\'_)_  ");
  console.log("              ,' ,-\' __)  ,--------. ");
  console.log("             :     -\'  _)/         \`\\");
  console.log("           ,\'       ,-\'_,\`           :");
  console.log("        ,-\'       ,(,-(              :");
  console.log("      ,\'       ,-\' ,    _            :");
  console.log("     /        ,-._/\`---\'            /");
  console.log("    /        (____)(----. )       ,\'");
  console.log("   /         (      \`.__,     /\ /,");
  console.log("  :           ;-.___         /__\/");
  console.log("  :         ,\'      \`--.      -,\ ");
  console.log("  :        /            \    .__/");
  console.log("   \\      (__            \    :_");
  console.log("    \\       ,\`-, *       /   _:,\\");
  console.log("     \\    ,\'   \`-.     ,\'_,-\'    \\");
  console.log("    (_\\,-\'    ,\'\")--,\'-\'       __\\");
  console.log("     \\       /  // ,\':      ,--\'  \`-.");
  console.log("      \`-.    \`-/ \'  :   _,\'         \`.");
  console.log("         \`-._ /      \`--\'/             \\");
  console.log("            ,\'           :              \\");
  console.log("           /             :               \\");
  console.log("        ,-\'              :               /");
  console.log("       /                 :             -\'");
  // We have to escape special characters with \, the backslash character
  
  console.log("\n" + `Your score: ${winCount}/${questionList.length}` + "\n");
  
  winCount = 0;
  // resetting the win counter to zero in case the game be played again
  
  setTimeout(function() {
    console.log("You LOSE! Brush up on your memes!" + "\n");
    setTimeout(function() {
      window.open("http://knowyourmeme.com/");
      
      confirm("Would you like to play again?") ? questLoop() : console.log(finishMsg + "\n" + "\n" + "Checkout some memes!");
    }, 1000);
  }, 1000);
}

function win() {
  console.log(`Your score: ${winCount}/${questionList.length}`);
  
  if (winCount === questionList.length) {
    console.log("A perfect score!");
  }
  
  console.log("You passed! Congratulations!");
  
  setTimeout(function() {
    winCount = 0;
    
    let playAgain = prompt("Would you like to play again?");
    
    if (playAgain.toLowerCase() === "y") {
    	// .toLowerCase method is used here so we don't need to check for
    	// capitalization of the input.
      top1();
    } else if (playAgain.toLowerCase() === "n") {
      console.log(finishMsg);
    } else {
      console.log("Good Bye");
    }
  }, 1000);
}

start();
// This is what starts the game! :)