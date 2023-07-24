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