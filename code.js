function play_craps() {//Defines the function play_craps
    console.log("play_craps() function started"); //Writes a message to the console saying that the game has started
    var die1 = Math.ceil(Math.random() * 6); //defines a variable that is assigned a random float between 0 and 6, which is rounded up.
    var die2 = Math.ceil(Math.random() * 6); //defines another variable that is assigned a random float between 0 and 6, which is rounded up.
    var sum = die1 + die2; //defines a variable that is assigned the sum of the two random numbers
    document.write("Die 1 = " + die1); //Write the value of the first die
    document.write("<br/>"); //Create a space between lines
    document.write("Die 2 = " + die2); //Write the value of the second die
    document.write("<br/>"); //Create a space between lines
    document.write("Sum = " + sum); //Write the value of the sum of the two dice
    document.write("<br/>"); //Create a space between lines
    if (sum == 7 || sum == 11) { //if the sum of the random numbers is equal to 7 or 11...
        document.write("CRAPS - you lose!"); //Write a losing statement to the screen.
        document.write("<br/>"); //Create a space between lines
    }
    else if (die1 == die2 && die1 % 2 == 0) { //If you didn't lose, the two dice have equal values, and the values are both even...
        document.write("DOUBLES - you win!"); //Write a victory statement to the screen
        document.write("<br/>"); //Create a space between lines
    }
    else{ //If you didn't win or lose...
        document.write("Draw - You neither won nor lost. Please try again!"); //Write a statement saying that you didn't win or lose
        document.write("<br/>"); //Create a space between lines
    }
}