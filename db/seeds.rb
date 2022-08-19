# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

# Game.create([
#     {
#         title: "God of War",
#         description: "As mentor and protector to Atreus, a son determined to earn his respect, he is forced to deal with and control the rage that has long defined him while out in a very dangerous world with his son. His vengeance against the Gods of Olympus behind him, Kratos now lives in the realm of Norse deities and monsters",
#         image_url: "https://iili.io/gKwh8X.webp"
#     },
#     {
#         title: "Grand Theft Auto 5",
#         description: "Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world",
#         image_url: "https://iili.io/gKwyS1.png"
#     },
#     {
#         title: "The Legend of Zelda: Breath of the Wild",
#         description: "The game is an installment of The Legend of Zelda series and is set at the end of its timeline. The player controls an amnesiac Link, who awakens from a hundred-year slumber, and attempts to regain his memories and prevent the destruction of Hyrule by Calamity Ganon",
#         image_url: "https://iili.io/gKNjfV.jpg"
#     },
#     {
#         title: "Pokemon Legends: Arceus",
#         description: "Pokémon Legends: Arceus is an action role-playing game that preserves the core gameplay of past entries in the main line series. The player is able to roam freely across the game map, divided into five large areas of individual biomes",
#         image_url: "https://iili.io/gKNeJ1.jpg"
#     },
#     {
#         title: "Red Dead Redemption 2",
#         description: "After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive",
#         image_url: "https://iili.io/gKNP0N.jpg"
#     },
#     {
#         title: "Assassin's Creed: Valhalla",
#         description: "In Assassin's Creed Valhalla, become Eivor, a legendary Viking raider on a quest for glory. Explore a dynamic and beautiful open world set against the brutal backdrop of England's Dark Ages. Raid your enemies, grow your settlement, and build your political power in the quest to earn a place among the gods in Valhalla",
#         image_url: "https://iili.io/gKOJgS.png"
#     }
# ])

Review.create([
    {
        title: "Massive Open-World",
        description: "Had a great time playing this game. The huge map had tons of cool locations to explore",
        score: 5,
        game_id: Game.find_by(slug: "the-legend-of-zelda-breath-of-the-wild")["id"]
    },
    {
        title: "Wild West",
        description: "The main character was amazing, and so was exploring and adventuring in the wild west",
        score: 5,
        game_id: Game.find_by(slug: "red-dead-redemption-2")["id"]
    },
    {
        title: "Fun, but too long",
        description: "The game was fun to play, but you really had to grind in order to progress",
        score: 3,
        game_id: Game.find_by(slug: "assassin-s-creed-valhalla")["id"]
    }
])
