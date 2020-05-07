// create reference




database.ref().child("creatures").on("value", snap => console.log(snap.val()))
const creatures = {

    "Coreset": {
        "Wildfire Tiger": {
            "creatureName": "Wildfire Tiger",
            "life": 15,
            "physical": 3,
            "elemental": 1,
            "physdef": 0,
            "eledef": -1,
            "mainAbility": "When you Switch to this creature, it receives +1 Stamina.",
            "spiritAbility": "1 Action + 2 cards: Your active creature receives +1 Physical.",
            "undefined": 6.5
        },
        "Judo Tortoise": {
            "creatureName": "Judo Tortoise",
            "life": 15,
            "physical": 1,
            "elemental": 1,
            "physdef": 1,
            "eledef": 0,
            "mainAbility": "While this is your active creature, if your opponent takes a Switch action, this creature receives +1 Stamina.",
            "spiritAbility": "1 Action + 2 cards: The active enemy creature receives 2 Flinch.",
            "undefined": 6.5
        },
        "Armordillo": {
            "creatureName": "Armordillo",
            "life": 15,
            "physical": 2,
            "elemental": 2,
            "physdef": 0,
            "eledef": 0,
            "mainAbility": "Whenever this creature receives physical damage, deal 1 direct damage to the attacking creature.",
            "spiritAbility": "1 Action + 2 cards: The active enemy creature receives -1 Physical.",
            "undefined": 6.5
        },
        "Tempest Dragon": {
            "creatureName": "Tempest Dragon",
            "life": 15,
            "physical": 1,
            "elemental": 2,
            "physdef": -1,
            "eledef": 0,
            "mainAbility": "When you Switch to this creature, deal 1 direct damage to the active enemy creature.",
            "spiritAbility": "1 Action + 2 cards: Your active creature receives +1 Elemental.",
            "undefined": 6.5
        },
        "Poison Vines": {
            "creatureName": "Poison Vines",
            "life": 15,
            "physical": 2,
            "elemental": 1,
            "physdef": 0,
            "eledef": 0,
            "mainAbility": "If this is your active creature at the start of your turn, choose an inactive enemy creature to receive 1 Drain.",
            "spiritAbility": "1 Action + 2 cards: All enemy creatures receive 1 Drain.",
            "undefined": 6.5
        },
        "Mind Juggler": {
            "creatureName": "Mind Juggler",
            "life": 15,
            "physical": 1,
            "elemental": 2,
            "physdef": -1,
            "eledef": 1,
            "mainAbility": "When you Switch to this creature, you may cycle 1 card.",
            "spiritAbility": "1 Action + 2 cards: The active enemy creature receives -1PhysDef or -1EleDef.",
            "undefined": 6.5
        },
        "Angel Guardian": {
            "creatureName": "Angel Guardian",
            "life": 15,
            "physical": 1,
            "elemental": 2,
            "physdef": 0,
            "eledef": 1,
            "mainAbility": "If this is your active creature at the start of your turn, you may heal 1 damage from another ally creature.",
            "spiritAbility": "1 Action + 2 cards: The active enemy creature receives -1 Elemental.",
            "undefined": 7
        },
        "Hunting Owl": {
            "creatureName": "Hunting Owl",
            "life": 15,
            "physical": 1,
            "elemental": 1,
            "physdef": 0,
            "eledef": 0,
            "mainAbility": "When you Switch to this creature, you may spend 1 Stamina to choose a new active creature for your opponent.",
            "spiritAbility": "1 Action + 2 cards: The active enemy creature receives 2 direct damage.",
            "undefined": 6.5
        },
    },
     "Expansion 1": {

        "Mantis Warrior": {
            "creatureName": "Mantis Warrior",
            "life": 15,
            "physical": 2,
            "elemental": 1,
            "physdef": 0,
            "eledef": -1,
            "mainAbility": "The first time each turn this creature receives Physical damage, reduce it by 1.",
            "spiritAbility": "1 Action + 2 cards: You may choose a new active creature for you and/or your opponent. Your active creature and opponent's active creature deal Physical damage to each other.",
            "undefined": 6
        },
        "Raven Seer": {
            "creatureName": "Raven Seer",
            "life": 15,
            "physical": 1,
            "elemental": 2,
            "physdef": 0,
            "eledef": 0,
            "mainAbility": "If this is your active creature at the start of your turn, look at the top card of any deck. You may discard that card.",
            "spiritAbility": "1 Action + 2 cards: Discard a random card from your opponent's hand.",
            "undefined": 6
        },
        "Monkey Monk": {
            "creatureName": "Monkey Monk",
            "life": 15,
            "physical": 1,
            "elemental": 1,
            "physdef": 0,
            "eledef": 1,
            "mainAbility": "When you Switch to this creature, you may place one card from you hand underneath this creature, or add 1 card from underneath this creature to your hand.",
            "spiritAbility": "1 Action + 2 cards: Your active creature receives -1 to either their Physical or Elemental stat of 2 or greater, then receives +1 to the other.",
            "undefined": 6.5
        },
        "Drill Sergeant Eagle": {
            "creatureName": "Drill Sergeant Eagle",
            "life": 15,
            "physical": 1,
            "elemental": 2,
            "physdef": 0,
            "eledef": 0,
            "mainAbility": "When you Switch to this creature, choose an inactive ally creature to receive 1 Stamina.",
            "spiritAbility": "1 Action + 2 cards: Your active creature deals Physical damage to the active enemy creature."
        },
        "Hummingbird Warlock": {
            "creatureName": "Hummingbird Warlock",
            "life": 15,
            "physical": 1,
            "elemental": 3,
            "physdef": 0,
            "eledef": 0,
            "mainAbility": "If this is your active creature at the end of your turn, all active creatures receive 1 Drain.",
            "spiritAbility": "1 Action + 2 cards: Heal 2 damage from you active creature."
        },
        "Weasel Assassin": {
            "creatureName": "Weasel Assassin",
            "life": 15,
            "physical": 1,
            "elemental": 1,
            "physdef": -1,
            "eledef": 0,
            "mainAbility": "After this creature deals damage to an enemy creature with 2 Stamina, it receives 1 Flinch.",
            "spiritAbility": "1 Action + 2 cards: All enemy creatures receive 1 Flinch."
        },
        "Ice Caribou": {
            "creatureName": "Ice Caribou",
            "life": 15,
            "physical": 2,
            "elemental": 1,
            "physdef": 1,
            "eledef": 0,
            "mainAbility": "While this is your active creature, if your opponent deals damage to one or more of your inactive ally creatures, the active enemy creature receives 2 Drain.",
            "spiritAbility": "1 Action + 2 cards: Your creatures receive +1 PhysDef."
        },
        "Lumbering Gorilla": {
            "creatureName": "Lumbering Gorilla",
            "life": 15,
            "physical": 3,
            "elemental": 2,
            "physdef": 1,
            "eledef": 0,
            "mainAbility": "This creature cannot play more than one card per turn."
        },
        "Queen Bee": {
            "creatureName": "Queen Bee",
            "life": 15,
            "physical": 1,
            "elemental": 1,
            "physdef": 0,
            "eledef": 1,
            "spiritAbility": "1 Action + 2 cards: All enemy creature receive -1 PhysDef."
        }
    }
}
database.ref().child("creatures").set(creatures)