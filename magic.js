//If the user wants, they can enter their name in between the quotation marks.
let userName = "";


//A ternary expression that decides what to do if the user enters a name or not. If the user enters a name — like 'Jane' — use string interpolation to log Hello, Jane! to the console. Otherwise, simply log Hello!.
userName ? `Hello, ${userName}!`:'Hello!';


//The value of the variable should be a string that is the question the user wants to ask the Magic Eight Ball.
let userQuestion = "Will I be famous";

console.log(`${userName}` + userQuestion + "?")

//We need to generate a random number between 0 and 7.

let randomNumber = Math.floor(Math.random() * 8);

//We will save a value to this variable in the next steps, depending on the value of randomNumber.
let eightBall; 


switch(randomNumber){
  case 0:
  eightBall = 'It is certain';
  break;
  case 1:
  eightBall = 'It is decidedly so';
  break;
  case 2: 
  eightBall = 'Reply hazy try again';
  break;
  case 3: 
  eightBall ='Cannot predict now';
  break;
  case 4:
  eightBall = 'Do not count on it';
  break;
  case 5: 
  eightBall = 'My sources say no';
  break;
  case 6: 
  eightBall = 'Outlook not so good';
  break;
  case 7: 
   eightBall = 'Signs point to yes';
   break;
   default: 
   eightball = ' The future is unknown';
   break;

}



console.log(eightBall)
