// Player Robot
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

// Enemy Robot
var enemyName = "Maul";
var enemyHealth = 50;
var enemyAttack = 12;

fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

    if (promptFight === "fight" || promptFight ==="FIGHT") {

        // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use the result to update the value in the 'enemyHealth' var
        enemyHealth = enemyHealth - playerAttack

        // Log resulting message to the console so we know that it worked
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // Check players health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.")
        }
    // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
       var confirmSkip = window.confirm("Are you sure you'd like to quit?")

    // if yes, leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // Subtract money for skipping
        playerMoney = playerMoney - 2;
    }
    else {
        fight();
    }
    } else {
        window.alert('"' + promptFight + '" ' + "Is not a valid option. Try Again!");
    }
};

console.log(playerName);
console.log("This logs a string, good for leaving yourself a message");
// This will do math and log 20
console.log(10 + 10);
//Display robots name in console
console.log("Robot: " + playerName);

// Execute fight function
fight();