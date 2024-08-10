function miracle(){
    let set = [
    "The teacher gives each team member a treat.",
    "Each team member receives 100XP",
    "Each team member receives 150XP",
    "Each team member receives 200XP",
    "Each team member receives 300XP",
    "Each team member receives 25GP",
    "Each team member receives 50GP	",
    "Each team member receives 75GP",
    "Each team member receives 100GP",
    "Each team member receives 200GP",
    "Each team member gains 1SP.",
    "Each team member gains 2SP.",
    "Each team member can have a piece of fruit for a snack.",
    "The team can take a 5 minute fun break.",
    "The team can take a 5 minute reading break.",
    "The team can take a 10 minute reading break.",
    "The team can take a 15 minute reading break.",
    "The team can take a 5 minute outside break.",
    "The team can take a 10 minute outside break.",
    "The team can take a 15 minute outside break.",
    "The team can take a 10 minute fun break.",
    "The team can take a 15 minute fun break."
    ]

    let random = Math.floor(Math.random()*(set.length-1));

    document.getElementById("random").innerHTML = set[random];
}


function randomEvent(){
    let set = [
        "Costume Party! A party without costumes just isn't a party! Everyone must wear a distinctive accessory. Everyone gains 1 SP.",
        "Dance Party! You get 1 minute to dance your pants off! (Please don't really take your pants off!) Everyone gains 1 SP.",
        "You had a great night's sleep! You're energized for the day.  Everyone gains 2 SP..",
        "You had a nightmare! You didn't get good sleep because of it. Everyone lose 1 SP.",
        "You're practicing your courtly manners for the king's visit. Call everyone Milord and Milady for the rest of class. Everyone gains 1 SP.",
        "Gift of the game master! The teacher gives a surprise to all players! Everyone gains 1 SP.",
        "The sky is the limit! ...Unless you're playing indoors. Everyone has 30 seconds to make a paper airplane. The furthest to fly wins 100XP!  Everyone gains 1 SP.",
        "Ahoy, Mayeys! Ye best be seafaring folk, or ye will walk the plank! Everyone who speaks with a pirate accent for the class earns 150XP. Everyone gains 1 SP.",
        "A magical storm blocks the SP regeneration for all but the most powerful. Only the highest level player(s) gains 1 SP.",
        "An angel decides to help the feeble. The player with the least XP receives 300XP. Everyone gains 1 SP.",
        "You find a potion and give it to your weakest teammate. The player with the fewest SP receives 2 SP. Everyone gains 1 SP.",
        "We see it once in a year, twice in a week, and never in a day. What is it? ...The letter 'E'! The teacher picks 6 letters. Each team must come up with as many words as possible using only those letters in 30 seconds.The team with the most words gains 250XP. Everyone gains 1 SP.",
        "Amazon Prime would like you to review an item you purchased. One random player stands in front of the board, facing away from it. All other students come and write one truthful compliment about that student on the board behind him or her. The teacher will take a picture of the board before you sit down. Everyone gains 1 SP.",
        "An angel visits the healers and bestows her powers upon them. All healers gain 1 SP & 1 HP Everyone gains 1 SP.",
        "You spot a bandit camp just off the trail up ahead. They haven't spotted your team yet, but you'll need to be careful to get past them... Or you could try to sneak in and steal some gold as you pass. One random player rolls a D20. 1-6: You're spotted! Your whole team loses 3HP. 7-14: You sneak past. Your whole team gains 100XP. 15-20: While sneaking past, your team relieves the bandits of some of their plunder. Your whole team receives 100XP and 50GP. Everyone gains 1 SP.",
        "Bandits attack a nearby town! The warriors rush to the rescue. All warriors receive 10 GP and 100 XP as a thank you from the townsfolk for their help. Everyone gains 1 SP.",
        "A bear trainer has lost control of his performing bear and it goes after the king! But you, oh bravest of souls, heroically stood in harm's way on his behalf. One random player receives 200 XP and 200 GP, but loses 3 HP. Everyone gains 1 SP.",
        "You have found the fabled book of spells! When you open it, it refills some of the mage's power. All mages gain 2 SP. Everyone gains 1 SP.",
        "An alien lands and bestows strange new powers. Each team can choose one team member to gain 300 XP. Everyone gains 1 SP.",
        "You didn't sleep well and feel exhausted. All players lose 1 SP.",
        "A massive comet has struck a faraway land and your town takes damage from the shockwave. Everyone's HP is set to 3. Everyone gains 1 SP.",
        "A fairy seeks a champion! She will grant a wish to one who fights for her. One random player pretends to fight a monster to protect the fairy and receives a wish of 2 HP, 1 SP, 25 GP, or 100 XP. Everyone gains 1 SP.",
        "You drink from a fountain of wisdom and are surged with power. It feels dangerous... Everyone gains 2 SP, but the surge of power makes you lose 1HP if you use a skill today- unless you're a healer. They're especially resistant to surges. Everyone gains 1 SP.",
        "Today's your lucky day! One random player receives 50 GP! Everyone gains 1 SP.",
        "Passersby admire the strength of the warriors. All warriors receive 25 GP. Everyone gains 1 SP.",
        "The townsfolk are fascinated by the mages' magic and want to see more! All mages receive 25 GP for an exceptional performance. Everyone gains 1 SP.",
        "The locals are impressed by the rangers' archery skills. All rangers receive 25 GP for winning the archery tournament. Everyone gains 1 SP.",
        "A nefarious familiar has been spying on the town's mayor for an evil witch. The mayor hires the rangers to hunt it. Rangers receive 100 XP and 10 GP for a job well done. Everyone gains 1 SP.",        
        "Peeves played a trick on the rangers. The rangers are glued to their seats for the class! The magic will lift at the end of class. Rangers gain 50 XP. Everyone gains 1 SP.",
        "It pays to be a ranger! One random ranger guesses odds or evens and then rolls a D6 on behalf of all rangers four times. All rangers gain 100 XP each time odds or evens is correctly guessed. Everyone gains 1 SP.",
        "If you are good subjects, the king will reward you. If no one loses any HP today, the Gamemaster must distribute candy at the next class. Everyone gains 1 SP.",
        "Someone mispronounced Hocus Pocus and the spell backfired! All players receive 200 XP if they stand and do the Hokey Pokey. Everyone gains 1 SP.",
        "You go to train under the master healer who imparts his wisdom to you. All healers gain 200 XP. Everyone gains 1 SP.",
        "It's raining cats and dogs! All players must end their sentences with 'meow' or 'woof.' Everyone gains 1 SP.",
        "You take a swim in the pool of life and heal up to 2 HP. Everyone gains 2 HP. Everyone gains 1 SP.",
        "The mages have been silenced! All mages must be silent for the entire class. Everyone gains 1 SP.",
        "If the shoe fits... answer it! Every player removes a shoe and places it in front of them. The teacher secretly sets an alarm. When the alarm goes off, the last student to answer the shoe phone with a, 'Hello?' loses 3 HP. Everyone gains 1 SP.",
        "A battle erupts! One random player chooses another player to duel (Rock, Paper, Scissors). Winner receives 100 XP. Everyone gains 1 SP.",
        "For the remainder of class, the teacher must speak with a squeeky voice! Everyone gains 1 SP.",
        "The teacher picks an action (EG: sitting down). For the remainder of class, every time the teacher does that action, the first student to stand up gets 50 XP. Everyone gains 1 SP.",
        "The Gamemaster is feeling generous today! Everyone receives 20 XP and 20 GP! Everyone gains 1 SP.",
        "You find a small leather bag hidden beneath a rock. Inside is a small potion in a clear bottle. The liquid inside swirls with colors. You see red, blue, gold, and green spiral inside. One random player rolls a D6 to see what happens! 1: Lose 1 SP. 2: Lose 3 HP. 3: Gain 1 SP. 4: Gain 3 HP. 5: Gain 100 XP. 6: Gain 20 GP. Everyone gains 1 SP.",
        "Stop to take stock of your good fortune! Say or do something nice for your teachers today! Everyone gains 1 SP.",
        "?backwards alphbet the sing you Can   One random player must attempt to sing the alphabet song backwards. If successful, gain 250 XP. Everyone gains 1 SP.",
        "Let's have some fun! The player with the least XP chooses a song that the teacher must sing... if the teacher knows it. Everyone gains 1 SP.",
        "An astrologer promises to create the best ointment for your wound after he had a vision, but he also has no idea what he's doing. One random player's HP is set to 4. Everyone gains 1 SP.",
        "You've never looked cooler, Twinkle Toes! Every player must touch both of their feet with both of their elbows at the same time. If successful, gain 100 GP. Everyone gains 1 SP.",
        "You are under attack! A monster snuck up on you and caught you unaware. This team must fight it off! The team with the least XP gains 25 GP. Everyone gains 1 SP.",
        "You can't resist the wave! For the remainder of class, every time the teacher says the word 'no,' everyone must do the wave and gain 25 GP. Everyone gains 1 SP.",
        "Who's a little teapot? You! You's a little teapot! One random team gains 200 XP for singing 'I'm a Little Teapot' with the motion! Everyone gains 1 SP.",
        "A wizard's apparition appears to grant one player a wish! One random player may receive 3 HP, 1 SP, 25 GP, or 50 XP. Everyone gains 1 SP.",
        "The pets have been cursed! Pet abilities cannot be used in battles today.",
        "Pet abilities that can be used once per day are doubly effective today! They can be used twice!",
        "Day of Service! Whenever you perform an act of service today, you receive 10 GP.",
        "A witch has cursed the weapons! Weapons cannot be used in battle today!",
        "An evil warlock has cursed the armor! Armor cannot be used in battle today!",
        "The pets were all transformed into toads by an enchantress. Toads have no abilities. The spell will wear off by tomorrow.",
        "Every time you spend gold today, you lose 1 HP.",
        "Every time you spend SP today, you lose 10 GP.",
        "Arena! Two players are summoned to the Thumb War Arena to duel! Winner receives 50 XP and 25 GP.",
        "A Carnival comes to town! One random player, roll a D6. 1: Lose 1HP. 2: Lose 10GP 3: Nothing. 4: Gain 10 GP. 5: Gain 1 HP. 6: Gain 1 SP",
        "You stumble upon a City of Shadows. One random player roll a D6 on behalf of the class. 1: You are attacked by a Vampire Prince. -2HP per player. 2: You are turned into toads. You cannot use skills today. 3: Gain 1 HP Each. 4: Gain 20 XP each. 5: Gain 20 GP each. 6: Perform a miracle."
    ];

    let random = Math.floor(Math.random()*(set.length-1));

    document.getElementById("random_event").innerHTML = set[random];
}