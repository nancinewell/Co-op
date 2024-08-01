function miracle(){
    let set = ["The teacher gives each team member a treat.",
    "Each team member receives 300XP",
    "Each team member receives 50GP	",
    "The team can take a 10 minute fun break.",
    "Each team member gains 1 crystal.",
    "Each team member receives 100XP",
    "Each team member receives 200GP",
    "Each team member receives 25GP",
    "Each team member receives 75GP",
    "Each team member receives 100GP",
    "Each team member gains 2 crystals.",
    "The team can take a 5 minute fun break.",
    "The team can take a 15 minute fun break."
    ]

    let random = Math.floor(Math.random()*(set.length-1));

    document.getElementById("random").innerHTML = set[random];
}


function randomEvent(){
    let set = [
        "Costume Party! A party without costumes just isn't a party! Everyone must wear a distinctive accessory.",
        "Dance Party! You get 1 minute to dance your pants off! (Please don't really take your pants off!)",
        "You had a great night's sleep! You're energized for the day. Receive 2 mana.",
        "You had a nightmare! You didn't get good sleep because of it. Lose 1 mana.",
        "You're practicing your courtly manners for the king's visit. Call everyone Milord and Milady for the rest of class.",
        "Gift of the game master! The teacher gives a surprise to all players!",
        "The sky is the limit! ...Unless you're playing indoors. Everyone has 30 seconds to make a paper airplane. The furthest to fly wins!"
    ];

    let random = Math.floor(Math.random()*(set.length-1));

    document.getElementById("random_event").innerHTML = set[random];
}