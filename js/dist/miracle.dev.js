"use strict";

function miracle() {
  var set = ["The teacher gives each team member a treat.", "Each team member receives 300XP", "Each team member receives 50GP	", "The team can take a 10 minute fun break.", "Each team member gains 1 crystal.", "Each team member receives 100XP", "Each team member receives 200GP", "Each team member receives 25GP", "Each team member receives 75GP", "Each team member receives 100GP", "Each team member gains 2 crystals.", "The team can take a 5 minute fun break.", "The team can take a 15 minute fun break."];
  var random = Math.floor(Math.random() * (set.length - 1));
  document.getElementById("random").innerHTML = set[random];
}

function randomEvent() {
  var set = ["Costume Party! A party without costumes just isn't a party! Everyone must wear a distinctive accessory. Everyone gains 1 SP.", "Dance Party! You get 1 minute to dance your pants off! (Please don't really take your pants off!) Everyone gains 1 SP.", "You had a great night's sleep! You're energized for the day.  Everyone gains 2 SP..", "You had a nightmare! You didn't get good sleep because of it. Everyone lose 1 SP.", "You're practicing your courtly manners for the king's visit. Call everyone Milord and Milady for the rest of class. Everyone gains 1 SP.", "Gift of the game master! The teacher gives a surprise to all players! Everyone gains 1 SP.", "The sky is the limit! ...Unless you're playing indoors. Everyone has 30 seconds to make a paper airplane. The furthest to fly wins 100XP!  Everyone gains 1 SP.", "Ahoy, Mayeys! Ye best be seafaring folk, or ye will walk the plank! Everyone who speaks with a pirate accent for the class earns 150XP. Everyone gains 1 SP.", "A magical storm blocks the SP regeneration for all but the most powerful. Only the highest level player(s) gains 1 SP.", "An angel decides to help the feeble. The player with the least XP receives 300XP. Everyone gains 1 SP.", "You find a potion and give it to your weakest teammate. The player with the fewest SP receives 2 SP. Everyone gains 1 SP.", "We see it once in a year, twice in a week, and never in a day. What is it? ...The letter 'E'! The teacher picks 6 letters. Each team must come up with as many words as possible using only those letters in 30 seconds.The team with the most words gains 250XP. Everyone gains 1 SP.", "Amazon Prime would like you to review an item you purchased. One random player stands in front of the board, facing away from it. All other students come and write one truthful compliment about that student on the board behind him or her. The teacher will take a picture of the board before you sit down. Everyone gains 1 SP.", "An angel visits the healers and bestows her powers upon them. All healers gain 1 SP & 1 HP Everyone gains 1 SP.", "You spot a bandit camp just off the trail up ahead. They haven't spotted your team yet, but you'll need to be careful to get past them... Or you could try to sneak in and steal some gold as you pass. One random player rolls a D20. 1-6: You're spotted! Your whole team loses 3HP. 7-14: You sneak past. Your whole team gains 100XP. 15-20: While sneaking past, your team relieves the bandits of some of their plunder. Your whole team receives 100XP and 50GP. Everyone gains 1 SP."
  /*,
  " Everyone gains 1 SP.",
  " Everyone gains 1 SP.",
  " Everyone gains 1 SP.",
  " Everyone gains 1 SP.",
  " Everyone gains 1 SP.",
  " Everyone gains 1 SP.",
  " Everyone gains 1 SP.",*/
  ];
  var random = Math.floor(Math.random() * (set.length - 1));
  document.getElementById("random_event").innerHTML = set[random];
}