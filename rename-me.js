//alert("JavaScript works!");

// Ricardo Aviles
// Project 2
// SDI 1301
// Functions and Loops


var playerNames = ["Sarah","Rick"];
var gameName = "Perfect World";
var playerTypes = ["Seeker", "Cleric"];
var strength = [100, 150, 175, 200];
var power = [1000, 2000, 3000, 4000];
var level = [1, 2, 3, 4, 5];

var character1 = strength[0] && power[3];
var character2 = strength[3] && power[0];
var getPower = function (power, strength){
  if (character1 = power = 1000, strength = 100){
		console.log (playerTypes [0] + " you have enough power for this quest.")
	} else {
		console.log (playerNames [0] + " Your power is not enough for this quest.");
	}
	if (character2 = power = 1000, strength = 100){
		console.log (playerTypes [1] + " you have enough power for this quest.")
	} else {
		console.log (playerNames [1] + " Your power is not enough for this quest.");
	}
};
var earnedRewards = function(givenPoints){
	var pointsEarned = 100,
		points;
	if (givenPoints < pointsEarned){
		console.log("You need more points to continue.");
		points = 0 < 200;
	} else {
		points = (givenPoints < pointsEarned);
	}
	points = pointsEarned * 2;
	return points;
};
var extraPoints = earnedRewards(100);

var questLeveling = function(power, strength, level){
	if (questLeveling = power = 1500, strength = 150, level = 1){
		console.log (playerTypes [0] + " you have passed your first quest. You can update your weapons and armor with your earned coins.");
	} else {
		console.log (playerTypes [0] + " you need to repeat the quest 1 for you to be able to continue to quest 2.");
	}
	if (questLeveling = power = 1500, strength = 150, level = 1){
		console.log (playerTypes [1] + " you have passed your first quest. You can update your weapons and armor with your earned coins.");
	} else {
		console.log (playerTypes [1] + " you need to repeat the quest 1 for you to be able to continue to quest 2.");
	}
};

console.log(playerNames[0] + " and " + playerNames[1] + " play " + gameName + " online.");
console.log(playerNames[1] + " is a " + playerTypes[0] + ".");
console.log(playerNames[0] + " is a " + playerTypes[1] + ".");
console.log("Both players are getting ready for there first quest, but they need to meet the minimum strength and power requirements to play the quest.");
getPower();
console.log("Your first reward is " + extraPoints + " coins.");
questLeveling();
console.log("Leveling your weapons and armor will increase your power and stregnth. Once you have done this verify that you have enough power and stregnth for the next quests.");
for (var quests = 1000; quests > 0; quests-=250){
	console.log("These are the power points required for the next levels: " + quests + " points.");
};
