// export const questions = [
//     {
//         id: 0,
//         question: "Hav i storleksordning (1=störst)",
//         answers: [{ "title": "Stilla Havet", "answer": 1 }, { "title": "Atlanten", "answer": 2 }, { "title": "Indiska Oceanen", "answer": 3 }, { "title": "Arktiska Havet", "answer": 4 }, { "title": "Tasmanhavet", "answer": 5 }, { "title": "Korallhavet", "answer": 6 }, { "title": "Sydkinesiska Havet", "answer": 7 }, { "title": "Karibiska Havet", "answer": 8 }, { "title": "Medelhavet", "answer": 9 }, { "title": "Berings Hav", "answer": 10 }],
//     },
//     {
//         id: 1,
//         question: "Vilket dataspelsföretag har gjort...",
//         answers: [{ "title": "Hay Day", "answer": "Supercell" }, { "title": "Minecraft", "answer": "Mojang" }, { "title": "Assassin's Creed", "answer": "Ubisoft" }, { "title": "Grand Theft Auto", "answer": "Rockstar Games" }, { "title": "Angry Birds", "answer": "Rovio" }, { "title": "FIFA", "answer": "Electronic Arts" }, { "title": "Candy Crush Saga", "answer": "King" }, { "title": "Donkey Kong", "answer": "Nintendo" }, { "title": "Call of Duty", "answer": "Activision" }, { "title": "Colin McRae Rally", "answer": "Codemasters" }],
//     },
//     {
//         id: 2,
//         question: "Människor som har gått på månen",
//         answers: [{ "title": "Neil Armstrong", "answer": true }, { "title": "Buzz Aldrin", "answer": true }, { "title": "Juri Gagarin", "answer": false }, { "title": "Alan Shepard", "answer": true }, { "title": "John Glenn", "answer": false }, { "title": "Edgar Mitchell", "answer": true }, { "title": "Alan Bean", "answer": true }, { "title": "John Young", "answer": true }, { "title": "Andy Copeland", "answer": false }, { "title": "James Irwin", "answer": true }],
//     },
//     {
//         id: 3,
//         question: "Vilket instrument är artistens huvudinstrument?",
//         answers: [{ "title": "Louis Armstrong", "answer": "Trumpet" }, { "title": "Charles Mingus", "answer": "Bas" }, { "title": "Phil Collins", "answer": "Trummor" }, { "title": "John Coltrane", "answer": "Saxofon" }, { "title": "Eddie Van Halen", "answer": "Gitarr" }, { "title": "Miles Davis", "answer": "Trumpet" }, { "title": "Benny Goodman", "answer": "Klarinett" }, { "title": "Jerry Lee Lewis", "answer": "Piano" }, { "title": "Alicia Keys", "answer": "Piano" }, { "title": "George Harrison", "answer": "Gitarr" }],
//     },
//     {
//         id: 4,
//         question: "Franska är ett officiellt språk i...",
//         answers: [{ "title": "Mali", "answer": true }, { "title": "Bahamas", "answer": false }, { "title": "Kanada", "answer": true }, { "title": "Liechtenstein", "answer": false }, { "title": "Haiti", "answer": true }, { "title": "Schweiz", "answer": true }, { "title": "Sudan", "answer": false }, { "title": "Luxemburg", "answer": true }, { "title": "Senegal", "answer": true }, { "title": "Namibia", "answer": false }],
//     },
//     {
//         id: 5,
//         question: "Filmer med Harrison Ford",
//         answers: [{ "title": "Blade Runner", "answer": true }, { "title": "Spy Game", "answer": false }, { "title": "The Expendables", "answer": false }, { "title": "The League", "answer": false }, { "title": "K-19 The Widowmaker", "answer": true }, { "title": "Firewall", "answer": true }, { "title": "Snake Eyes", "answer": false }, { "title": "Firman", "answer": false }, { "title": "Jagad", "answer": true }, { "title": "Frantic", "answer": true }],
//     },
//     {
//         id: 6,
//         question: "Svenska statsministrar i ordning (1=först)",
//         answers: [{ "title": "Louis De Geer d.ä.", "answer": 1 }, { "title": "Stefan Löfven", "answer": 10 }, { "title": "Thorbjörn Fälldin", "answer": 7 }, { "title": "Hjalmar Branting", "answer": 4 }, { "title": "Carl Bildt", "answer": 8 }, { "title": "Gillis Bildt", "answer": 2 }, { "title": "Göran Persson", "answer": 9 }, { "title": "Tage Erlander", "answer": 6 }, { "title": "Per Albin Hansson", "answer": 5 }, { "title": "Erik Gustaf Boström", "answer": 3 }],
//     },
//     {
//         id: 7,
//         question: "Rangordna efter storlek på spelplanen (1=störst)",
//         answers: [{ "title": "Badminton", "answer": 10 }, { "title": "Tennis", "answer": 8 }, { "title": "Baseball", "answer": 1 }, { "title": "Fotboll", "answer": 2 }, { "title": "Ishockey", "answer": 4 }, { "title": "Volleyboll", "answer": 9 }, { "title": "Innebandy", "answer": 6 }, { "title": "Futsal", "answer": 5 }, { "title": "Amerikansk Fotboll", "answer": 3 }, { "title": "Basket", "answer": 7 }],
//     },
//     {
//         id: 8,
//         question: "Uppfinningar i kronologisk ordning (1=äldst)",
//         answers: [{ "title": "Pianot", "answer": 6 }, { "title": "Hjulet", "answer": 2 }, { "title": "Fyrverkeriet", "answer": 4 }, { "title": "Alfabetet", "answer": 3 }, { "title": "Geväret", "answer": 5 }, { "title": "Åran", "answer": 1 }, { "title": "Miniräknaren", "answer": 10 }, { "title": "Säkerhetständstickan", "answer": 7 }, { "title": "Dieselmotorn", "answer": 8 }, { "title": "FM-Radion", "answer": 9 }],
//     },
//     {
//         id: 9,
//         question: "I vilket land finns...",
//         answers: [{ "title": "Stonehenge", "answer": "Storbritannien" }, { "title": "Förbjudna Staden", "answer": "Kina" }, { "title": "Akropolis", "answer": "Grekland" }, { "title": "Lutande tornet i Pisa", "answer": "Italien" }, { "title": "Montmartre", "answer": "Frankrike" }, { "title": "Gizaplatån", "answer": "Egypten" }, { "title": "Chichén Itzá", "answer": "Mexiko" }, { "title": "Angkor Wat", "answer": "Kamnodja" }, { "title": "Taj Mahal", "answer": "Indien" }, { "title": "Uluru", "answer": "Australien" }],
//     },
//     {
//         id: 10,
//         question: "Vem har skrivit romanen?",
//         answers: [{ "title": "Da Vincikoden", "answer": "Dan Brown" }, { "title": "1984", "answer": "George Orwell" }, { "title": "Anne på Grönkulla", "answer": "L.M. Montgomery" }, { "title": "Anna Karenina", "answer": "Leo Tolstoy" }, { "title": "Räddaren i nöden", "answer": "J.D. Salinger" }, { "title": "Svärdet och spiran", "answer": "Ken Follett" }, { "title": "Lysande utsikter", "answer": "Charles Dickens" }, { "title": "Hobbiten", "answer": "J.R.R. Tolkien" }, { "title": "Bott och straff", "answer": "Fjodor Dostojevskij" }, { "title": "Odysseus", "answer": "James Joyce" }],
//     },
//     {
//         id: 11,
//         question: "Är en serie producerad av Netflix",
//         answers: [{ "title": "Mad men", "answer": false }, { "title": "Dexter", "answer": false }, { "title": "Orange is the new black", "answer": true }, { "title": "Breaking Bad", "answer": false }, { "title": "Grace and Frankie", "answer": true }, { "title": "Marco Polo", "answer": true }, { "title": "The Ranch", "answer": true }, { "title": "Big Love", "answer": false }, { "title": "Narcos", "answer": true }, { "title": "House of Cards", "answer": true }],
//     },
//     {
//         id: 12,
//         question: "USA:s presidenter i ordning (1=senast)",
//         answers: [{ "title": "Barack Obama", "answer": 1 }, { "title": "Bill Clinton", "answer": 2 }, { "title": "Jimmy Carter", "answer": 3 }, { "title": "Gerald Ford", "answer": 4 }, { "title": "John F. Kennedy", "answer": 5 }, { "title": "Harry Truman", "answer": 6 }, { "title": "Herbert Hoover", "answer": 7 }, { "title": "Theorode Roosevelt", "answer": 8 }, { "title": "Ulysses S. Grant", "answer": 9 }, { "title": "Abraham Lincoln", "answer": 10 }],
//     },
//     {
//         id: 13,
//         question: "Är ett namn på en rymdstation",
//         answers: [{ "title": "Almaz", "answer": true }, { "title": "Skylab", "answer": true }, { "title": "Mariner", "answer": false }, { "title": "Lunera", "answer": false }, { "title": "Shenzhou", "answer": false }, { "title": "Progress", "answer": false }, { "title": "Salyut", "answer": true }, { "title": "Voyager", "answer": false }, { "title": "Tiangong", "answer": true }, { "title": "Mir", "answer": true }],
//     },
//     {
//         id: 14,
//         question: "Så gamla blev de (antal år)",
//         answers: [{ "title": "Kurt Cobain", "answer": 27 }, { "title": "Amy Winehouse", "answer": 27 }, { "title": "Jimi Hendrix", "answer": 27 }, { "title": "Princess Diana", "answer": 36 }, { "title": "Jim Morrison", "answer": 27 }, { "title": "Heath Ledger", "answer": 28 }, { "title": "Marilyn Monroe", "answer": 36 }, { "title": "James Dean", "answer": 24 }, { "title": "John Lennon", "answer": 40 }, { "title": "Janis Joplin", "answer": 27 }],
//     },
//     {
//         id: 15,
//         question: "Från vilken stad ort kommer bandet?",
//         answers: [{ "title": "Hellacopters", "answer": "Stockholm" }, { "title": "The Hives", "answer": "Fagersta" }, { "title": "Ace of Base", "answer": "Göteborg" }, { "title": "Takida", "answer": "Ånge" }, { "title": "The Cardigans", "answer": "Huskvarna/Jönköping" }, { "title": "Kent", "answer": "Eskilstuna" }, { "title": "The Knife", "answer": "Göteborg" }, { "title": "Ebba Grön", "answer": "Stockholm" }, { "title": "Nationalteatern", "answer": "Göteborg" }, { "title": "Vikingarna", "answer": "Slottsbro/Grums" }],
//     },
//     {
//         id: 16,
//         question: "I vilket land ligger nationalparken?",
//         answers: [{ "title": "Yellowstone", "answer": "USA" }, { "title": "Serengeti", "answer": "Tanzania" }, { "title": "Canaima", "answer": "Venezuela" }, { "title": "Iguazù", "answer": "Argentina" }, { "title": "Torres del Paine", "answer": "Chile" }, { "title": "Tikal", "answer": "Guatemala" }, { "title": "Galápagos", "answer": "Ecuador" }, { "title": "Fiordland", "answer": "Nya Zeeland" }, { "title": "Banff", "answer": "Kanada" }, { "title": "Sagarmatha", "answer": "Nepal" }],
//     },
//     {
//         id: 17,
//         question: "Efternamnet på dessa berömda syskon",
//         answers: [{ "title": "Dakota & Elle", "answer": "Fanning" }, { "title": "Mary-Kate & Ashley", "answer": "Olsen" }, { "title": "Venus & Serena", "answer": "Williams" }, { "title": "Wilbur & Orville", "answer": "Wright" }, { "title": "Alec, Daniel, William, Stephen", "answer": "Baldwin" }, { "title": "John F., Robert, Ted", "answer": "Kennedy" }, { "title": "Nick & Aaron", "answer": "Carter" }, { "title": "Ben & Casey", "answer": "Affleck" }, { "title": "Jane & Peter", "answer": "Fonda" }, { "title": "Ralph & Joseph", "answer": "Fiennes" }],
//     },
//     {
//         id: 18,
//         question: "Vilken sport är klubben mest känd för?",
//         answers: [{ "title": "Schalke 04", "answer": "Fotboll" }, { "title": "Edmonton Oilers", "answer": "Ishockey" }, { "title": "Redbergslids IK", "answer": "Handboll" }, { "title": "Miami Heat", "answer": "Basket" }, { "title": "HV71", "answer": "Ishockey" }, { "title": "Leicester Tigers", "answer": "Rugby" }, { "title": "West Ham United", "answer": "Fotboll" }, { "title": "Jönköping Södra", "answer": "Fotboll" }, { "title": "Chicago Cubs", "answer": "Baseball" }, { "title": "Carlstad Crusaders", "answer": "Amerikansk Fotboll" }],
//     },
//     {
//         id: 19,
//         question: "Har tilldelats en Oscar för bästa film",
//         answers: [{ "title": "Chinatown", "answer": false }, { "title": "Hamlet", "answer": true }, { "title": "Gudfadern", "answer": true }, { "title": "Lawrence of Arabia", "answer": true }, { "title": "Gudfadern del II", "answer": true }, { "title": "Ben-Hur", "answer": true }, { "title": "Gladiator", "answer": true }, { "title": "Troja", "answer": false }, { "title": "Annie Hall", "answer": true }, { "title": "Braveheart", "answer": true }],
//     },
//     {
//         id: 20,
//         question: "Mineraler i ordning efter hårdhet (1=mjukast)",
//         answers: [{ "title": "Kalcit", "answer": 3 }, { "title": "Diamant", "answer": 10 }, { "title": "Korund", "answer": 9 }, { "title": "Apatit", "answer": 5 }, { "title": "Topas", "answer": 8 }, { "title": "Kvarts", "answer": 7 }, { "title": "Fluorit", "answer": 4 }, { "title": "Gips", "answer": 2 }, { "title": "Fältspat", "answer": 6 }, { "title": "Talk", "answer": 1 }],
//     },
//     {
//         id: 21,
//         question: "Är ett flygbolag",
//         answers: [{ "title": "Mango", "answer": true }, { "title": "LC Busre", "answer": true }, { "title": "Sun d'Or", "answer": true }, { "title": "LIAT", "answer": true }, { "title": "Nigerian Eagle Airlines", "answer": true }, { "title": "Air Hamburg", "answer": true }, { "title": "NetJets", "answer": true }, { "title": "Air Moskwa", "answer": false }, { "title": "Volare Airlines", "answer": true }, { "title": "Air Fulmar", "answer": false }],
//     },
//     {
//         id: 22,
//         question: "Vem har gjort låten populär?",
//         answers: [{ "title": "Born in the U.S.A.", "answer": "Bruce Springsteen" }, { "title": "Life on Mars?", "answer": "David Bowie" }, { "title": "Dancing Queen", "answer": "ABBA" }, { "title": "Creep", "answer": "Radiohead" }, { "title": "Let it be", "answer": "The Beatles" }, { "title": "Rolling in the Deep", "answer": "Adele" }, { "title": "Losing my Religion", "answer": "R.E.M" }, { "title": "Hotel California", "answer": "Eagles" }, { "title": "Smells like teen spirit", "answer": "Nirvana" }, { "title": "Viva La Vida", "answer": "Coldplay" }],
//     },
//     {
//         id: 23,
//         question: "Sporter i ordning efter utövarens topphastighet (1=snabbast)",
//         answers: [{ "title": "Formel 1", "answer": 1 }, { "title": "Sprintlöpning", "answer": 10 }, { "title": "Längdskidåkning", "answer": 8 }, { "title": "Landsvägscykling", "answer": 5 }, { "title": "Rodel", "answer": 4 }, { "title": "Backhoppning", "answer": 6 }, { "title": "Kappsegling", "answer": 7 }, { "title": "Speedski", "answer": 3 }, { "title": "NASCAR", "answer": 2 }, { "title": "Speed skating (skridskor)", "answer": 9 }],
//     },
//     {
//         id: 24,
//         question: "Från vilket land kommer bilmärket?",
//         answers: [{ "title": "Tesla", "answer": "USA" }, { "title": "Nissan", "answer": "Japan" }, { "title": "Alfa Romeo", "answer": "Italien" }, { "title": "Skoda", "answer": "Tjeckien" }, { "title": "Kia", "answer": "Sydkorea" }, { "title": "Dacia", "answer": "Rumänien" }, { "title": "Tata", "answer": "Indien" }, { "title": "Lexus", "answer": "Japan" }, { "title": "Smart", "answer": "Tyskland" }, { "title": "SEAT", "answer": "Spanien" }],
//     },
//     {
//         id: 25,
//         question: "Är en röd druvsort?",
//         answers: [{ "title": "Muscadelle", "answer": false }, { "title": "Malbec", "answer": true }, { "title": "Carignan", "answer": true }, { "title": "Colombard", "answer": false }, { "title": "Sémillon", "answer": false }, { "title": "Syrah", "answer": true }, { "title": "Vermentino", "answer": false }, { "title": "Marsanne", "answer": false }, { "title": "Fer", "answer": false }, { "title": "Riesling", "answer": false }],
//     },
//     {
//         id: 26,
//         question: "Vems konstverk?",
//         answers: [{ "title": "Näckrosor", "answer": "Claude Monet" }, { "title": "Räv i vinterlandskap", "answer": "Bruno Liljefors" }, { "title": "Skriet", "answer": "Edvard Munch" }, { "title": "Nattvarden", "answer": "Leonardo Da Vinci" }, { "title": "Starry Night / Stjärnenatt", "answer": "Vincent van Gogh" }, { "title": "En premiär", "answer": "Andern Zorn" }, { "title": "Midvinterblot", "answer": "Carl Larsson" }, { "title": "The Night Watch / Nattvakten", "answer": "Rembrandt" }, { "title": "Campbells soppburkar", "answer": "Andy Warhol" }, { "title": "Guernica", "answer": "Pablo Picasso" }],
//     },
//     {
//         id: 27,
//         question: "En av världens tio största öar",
//         answers: [{ "title": "Madagaskar", "answer": true }, { "title": "Sachalin", "answer": false }, { "title": "Storbritannien", "answer": true }, { "title": "Honshu", "answer": true }, { "title": "Java", "answer": false }, { "title": "Victoriaön", "answer": true }, { "title": "Borneo", "answer": true }, { "title": "Grönland", "answer": true }, { "title": "Australien", "answer": false }, { "title": "Kuba", "answer": false }],
//     },
//     {
//         id: 1000,
//         question: "Är ett dataspel i Call of Duty-serien",
//         answers: [{ "title": "Ghosts", "answer": true }, { "title": "Finest Hour", "answer": true }, { "title": "Infinite Warfare", "answer": true }, { "title": "Advanced Warfare", "answer": true }, { "title": "Platoon", "answer": false }, { "title": "Rouge", "answer": false }, { "title": "Training Day", "answer": false }, { "title": "Black Ops", "answer": true }, { "title": "Heroes", "answer": false }, { "title": "Modern Warfare", "answer": true }],
//     },
//     {
//         id: 1001,
//         question: "För vilken konsol utgavs spelet med ensamrätt?",
//         answers: [{ "title": "The Last Guardian", "answer": "Playstation" }, { "title": "Uncharted", "answer": "Playstation" }, { "title": "Grabbed by the Ghoulies", "answer": "X-Box" }, { "title": "The Last of Us", "answer": "Playstation" }, { "title": "Fast RMX", "answer": "Switch" }, { "title": "Fable", "answer": "X-Box" }, { "title": "God of War", "answer": "Playstation" }, { "title": "Xenoblade Chronicles", "answer": "Wii" }, { "title": "Fire Emblem Warriors", "answer": "Switch" }, { "title": "Halo", "answer": "X-Box" }],
//     },
//     {
//         id: 1002,
//         question: "(Varit) Gifta med varandra, syskon eller förälder och barn?",
//         answers: [{ "title": "Elvis & Priscilla Presley", "answer": "Gifta" }, { "title": "Roger Rabbit & Jessica", "answer": "Gifta" }, { "title": "Jaden & Willow Smith", "answer": "Syskon" }, { "title": "Rooney & Kate Mara", "answer": "Syskon" }, { "title": "Jake & Elwood Blues", "answer": "Syskon" }, { "title": "Eric & Kitty Forman", "answer": "Förälder & Barn" }, { "title": "Johnny Depp & Vanessa Paradise", "answer": "Gifta" }, { "title": "Shirley MacLaine & Warren Beatty", "answer": "Syskon" }, { "title": "Jake & Maggie Gyllenhaal", "answer": "Syskon" }, { "title": "Jeff & Beau Bridges", "answer": "Syskon" }],
//     },
//     {
//         id: 1003,
//         question: "En roll figur i vilket dataspel?",
//         answers: [{ "title": "Dante", "answer": "Devil May Cry" }, { "title": "Kratos", "answer": "God of War" }, { "title": "Master Chief", "answer": "Halo" }, { "title": "Nathan Drake", "answer": "Uncharted" }, { "title": "Big Daddy", "answer": "Devilshock" }, { "title": "Sam Fisher", "answer": "Splinter Cell" }, { "title": "Lara Croft", "answer": "Tomb Raider" }, { "title": "Alyx Vance", "answer": "Half-Life 2" }, { "title": "Niko Bellic", "answer": "GTA IV" }, { "title": "Agent 47", "answer": "Hitman" }],
//     },
//     {
//         id: 1004,
//         question: "Är ett spel till Commodore 64?",
//         answers: [{ "title": "Malibu", "answer": false }, { "title": "Winter Games", "answer": true }, { "title": "Pirates!", "answer": true }, { "title": "Lemmings", "answer": true }, { "title": "Prince of Persia", "answer": true }, { "title": "KillTheBoss", "answer": false }, { "title": "Turrican", "answer": true }, { "title": "The Queens Men", "answer": false }, { "title": "Commando", "answer": true }, { "title": "Forget Paris", "answer": false }],
//     },
//     {
//         id: 1005,
//         question: "Årtiondet när denna mobil gavs ut",
//         answers: [{ "title": "Siemens S10", "answer": "1990-talet" }, { "title": "Nokia 3210", "answer": "1990-talet" }, { "title": "LG Chocolate", "answer": "2000-talet" }, { "title": "Apple iPhone 3G", "answer": "2000-talet" }, { "title": "Samsung Galaxy S", "answer": "2010-talet" }, { "title": "Nokia 808 Pureview", "answer": "2010-talet" }, { "title": "Nokia 9000", "answer": "1990-talet" }, { "title": "Motorola StarTAC", "answer": "1990-talet" }, { "title": "Apple iPhone 4GS", "answer": "2010-talet" }, { "title": "Motorola DynaTAC 8000X", "answer": "1970-talet" }],
//     },
//     {
//         id: 1006,
//         question: "Är ett av de 20 mest sålda dataspelen (alla plattformar)",
//         answers: [{ "title": "Lemmings", "answer": false }, { "title": "Mario Kart Wii", "answer": true }, { "title": "Pokémon", "answer": true }, { "title": "The Sims", "answer": false }, { "title": "Frogger", "answer": false }, { "title": "Mario Kart 8", "answer": false }, { "title": "Minecraft", "answer": true }, { "title": "Tetris", "answer": true }, { "title": "Diablo III", "answer": true }, { "title": "Grand Theft Auto V", "answer": true }],
//     },
//     {
//         id: 1007,
//         question: "Är en film i regi av Steven Spielberg",
//         answers: [{ "title": "Flickan från ovan", "answer": false }, { "title": "Amistad", "answer": true }, { "title": "Apollo 13", "answer": false }, { "title": "King Kong", "answer": false }, { "title": "The Terminal", "answer": true }, { "title": "Purpurfärgen", "answer": true }, { "title": "Lincoln", "answer": true }, { "title": "Hajen", "answer": true }, { "title": "Minority Report", "answer": true }, { "title": "Apornas Planet", "answer": false }],
//     },
//     {
//         id: 1008,
//         question: "Är/var en mobiltelefon som hade färgdisplay (mer än 4 färger)",
//         answers: [{ "title": "Nokia 7650", "answer": true }, { "title": "Ericsson P800", "answer": true }, { "title": "Nokia 9000 Communicator", "answer": false }, { "title": "Siemens S10", "answer": false }, { "title": "Nokia 8110", "answer": false }, { "title": "Nokia 1680", "answer": true }, { "title": "Nokia 7110", "answer": false }, { "title": "LG Optimus 2X", "answer": true }, { "title": "Sharp Aquos SH-12C", "answer": true }, { "title": "Samsung SGH-Z105", "answer": true }],
//     },
//     {
//         id: 1009,
//         question: "Var en av de 50 mest besökta webbsajterna (enligt Alexa 01/2019)",
//         answers: [{ "title": "vk.com", "answer": true }, { "title": "t.co", "answer": true }, { "title": "xxx.com", "answer": false }, { "title": "pornhub.com", "answer": true }, { "title": "mail.ru", "answer": true }, { "title": "mail.us", "answer": false }, { "title": "alipay.com", "answer": true }, { "title": "paypal.com", "answer": false }, { "title": "baidu.com", "answer": true }, { "title": "yahoo.com", "answer": true }],
//     },
//     {
//         id: 1010,
//         question: "Vilket nummer saknas i filmens titel?",
//         answers: [{ "title": "Ronin", "answer": 47 }, { "title": "Dresses", "answer": 27 }, { "title": "gram", "answer": 21 }, { "title": "Feet from Stardom", "answer": 20 }, { "title": "snart 30", "answer": 13 }, { "title": "Sommaren '", "answer": 42 }, { "title": "Jump Street", "answer": 21 }, { "title": "orsaker att hata dig", "answer": 10 }, { "title": "Fahrenheit", "answer": 451 }, { "title": "dagar senare", "answer": 28 }],
//     },
//     {
//         id: 1011,
//         question: "Ordna dessa sociala medier efter utgivningsår (1=äldst)",
//         answers: [{ "title": "Tumblr", "answer": 7 }, { "title": "Friendster", "answer": 2 }, { "title": "MySpace", "answer": 3 }, { "title": "Vine", "answer": 10 }, { "title": "Google+", "answer": 9 }, { "title": "Facebook", "answer": 4 }, { "title": "YouTube", "answer": 5 }, { "title": "Twitter", "answer": 6 }, { "title": "ICQ", "answer": 1 }, { "title": "Whatsapp", "answer": 8 }],
//     },
//     {
//         id: 1012,
//         question: "Isländska öar, Pokémons eller ingendera?",
//         answers: [{ "title": "Engey", "answer": "Island" }, { "title": "Súlnasker", "answer": "Island" }, { "title": "Ryuk", "answer": "Ingendera" }, { "title": "Hvalbakur", "answer": "Island" }, { "title": "Ekans", "answer": "Pokémon" }, { "title": "Brokey", "answer": "Island" }, { "title": "Vigur", "answer": "Island" }, { "title": "Pidgey", "answer": "Pokémon" }, { "title": "Absol", "answer": "Pokémon" }, { "title": "Gengar", "answer": "Pokémon" }],
//     },
//     {
//         id: 1013,
//         question: "Term i amerikansk fribrottning, mat eller både och?",
//         answers: [{ "title": "Enzuigiri", "answer": "fribrottning" }, { "title": "Gong Bao", "answer": "mat" }, { "title": "Aguachile", "answer": "mat" }, { "title": "Hart Attack", "answer": "fribrottning" }, { "title": "Chicken Wing", "answer": "både och" }, { "title": "G9", "answer": "fribrottning" }, { "title": "Flapjack", "answer": "både och" }, { "title": "Tripas", "answer": "mat" }, { "title": "Spanish Fly", "answer": "fribrottning" }, { "title": "Chimichanga", "answer": "mat" }],
//     },
//     {
//         id: 1014,
//         question: "Är en stad i Kanto-regionen i Pokémon",
//         answers: [{ "title": "Stratos City", "answer": false }, { "title": "Xeneroville", "answer": false }, { "title": "Fuchsia City", "answer": true }, { "title": "Lavender Town", "answer": true }, { "title": "Viridian City", "answer": true }, { "title": "Tempera City", "answer": false }, { "title": "Celadon City", "answer": true }, { "title": "Pallet Town", "answer": true }, { "title": "Saffron City", "answer": true }, { "title": "Sonnewik", "answer": false }],
//     },
//     {
//         id: 1015,
//         question: "Vad står spelspråksförkortningen för?",
//         answers: [{ "title": "GG", "answer": "Good Game" }, { "title": "n00b", "answer": "newbie" }, { "title": "FPS", "answer": "First Person Shooter" }, { "title": "WP", "answer": "Well Played" }, { "title": "FTW", "answer": "For the Win" }, { "title": "XP", "answer": "Experience Points" }, { "title": "OMW", "answer": "On My Way" }, { "title": "GTG", "answer": "Good to Go" }, { "title": "BRB", "answer": "Be Right Back" }, { "title": "AFK", "answer": "Away from Keyboard" }],
//     },
//     {
//         id: 1016,
//         question: "Är en dataspelserie som har funnits sedan 80-talet",
//         answers: [{ "title": "Q*bert", "answer": true }, { "title": "Tekken", "answer": false }, { "title": "Pac-Man", "answer": true }, { "title": "Driver", "answer": false }, { "title": "Donkey Kong", "answer": true }, { "title": "Frogger", "answer": true }, { "title": "Super Mario Bros.", "answer": true }, { "title": "Tony Hawks's Pro Skater", "answer": false }, { "title": "Tetris", "answer": true }, { "title": "Tomb Raider", "answer": false }],
//     },
//     {
//         id: 1017,
//         question: "Vem spelade James Bond i denna film?",
//         answers: [{ "title": "Älskade Spion", "answer": "Roger Moore" }, { "title": "Goldfinger", "answer": "Sean Connery" }, { "title": "Live and Let Die", "answer": "Roger Moore" }, { "title": "Dr. No", "answer": "Sean Connery" }, { "title": "Skyfall", "answer": "Daniel Craig" }, { "title": "Octopussy", "answer": "Roger Moore" }, { "title": "I hennes majestäts hemliga tjänst", "answer": "George Lazenby" }, { "title": "Man lever bara två gånger", "answer": "Sean Connery" }, { "title": "Tomorrow Never Dies", "answer": "Pierce Brosnan" }, { "title": "Tid för hämnd", "answer": "Timothy Dalton" }],
//     },
//     {
//         id: 1018,
//         question: "En skurk i vilken Disney-film?",
//         answers: [{ "title": "Pleakly", "answer": "Lilo & Stitch" }, { "title": "Madame Medusa", "answer": "Bernard och Bianca" }, { "title": "Claude Frollo", "answer": "Ringaren i Notre Dame" }, { "title": "Scar", "answer": "Lejonkungen" }, { "title": "Cruella de Vil", "answer": "101 dalmatiner" }, { "title": "Shan Yu", "answer": "Mulan" }, { "title": "Shere Khan", "answer": "Djungelboken" }, { "title": "Edgar", "answer": "Aristocats" }, { "title": "Jafar", "answer": "Aladdin" }, { "title": "Madame Mim", "answer": "Svärdet i stenen" }],
//     },
//     {
//         id: 1019,
//         question: "Vilket nummer har filmen i filmserien?",
//         answers: [{ "title": "Indiana Jones: De fördömdas tempel", "answer": 2 }, { "title": "The Fast and the Furious: Tokyo Drift", "answer": 3 }, { "title": "Harry Potter och Fenixorden", "answer": 4 }, { "title": "Rambo: Last Blood", "answer": 5 }, { "title": "Hungerspelen: Fatta Eld", "answer": 2 }, { "title": "Mad Max: Fury Road", "answer": 4 }, { "title": "Jurassic Park: Jurrasic World", "answer": 4 }, { "title": "Terminator: Domedagen", "answer": 2 }, { "title": "Shrek: Nu och för alltid", "answer": 4 }, { "title": "Mission Impossible: Rouge Nation", "answer": 5 }],
//     },
//     {
//         id: 1020,
//         question: "Är/var ett socialt nätverk",
//         answers: [{ "title": "Myface", "answer": false }, { "title": "Pinterest", "answer": true }, { "title": "Baboo", "answer": false }, { "title": "Yo", "answer": true }, { "title": "Black Social", "answer": false }, { "title": "Snap Inc.", "answer": true }, { "title": "Jodel", "answer": true }, { "title": "StayFriends", "answer": true }, { "title": "Quick", "answer": false }, { "title": "Google+", "answer": true }],
//     },
//     {
//         id: 1021,
//         question: "Är en figur i TV-serien Smurfarna",
//         answers: [{ "title": "Glasögonsmurf", "answer": true }, { "title": "Calimero", "answer": false }, { "title": "Gammelsmurf", "answer": true }, { "title": "Semestersmurf", "answer": false }, { "title": "Rödsmurf", "answer": false }, { "title": "Starksmurf", "answer": true }, { "title": "Azrael", "answer": true }, { "title": "Latsmurf", "answer": true }, { "title": "Läckersmurf", "answer": true }, { "title": "Lustigsmurf", "answer": true }],
//     },
//     {
//         id: 1022,
//         question: "Är en mangaserie",
//         answers: [{ "title": "Naruto", "answer": true }, { "title": "One Piece", "answer": true }, { "title": "Kasai Banzai", "answer": false }, { "title": "Kinniku Banzuke", "answer": false }, { "title": "Dragon Ball", "answer": true }, { "title": "Death Note", "answer": true }, { "title": "Uzumaki", "answer": true }, { "title": "Ghost in the Shell", "answer": true }, { "title": "Attack on Titan", "answer": true }, { "title": "Takeshi's Castle", "answer": false }],
//     },
//     {
//         id: 1023,
//         question: "Är en version racingspelserien Need for Speed",
//         answers: [{ "title": "Top Gear", "answer": false }, { "title": "Rivals", "answer": true }, { "title": "Underground", "answer": true }, { "title": "Shift", "answer": true }, { "title": "No Limits", "answer": true }, { "title": "Fast Five", "answer": false }, { "title": "Thriller", "answer": false }, { "title": "Hot Pursuit", "answer": true }, { "title": "Most Wanted", "answer": true }, { "title": "Undercover", "answer": false }],
//     },
//     {
//         id: 1024,
//         question: "Fakta om tv-serien Game of Thrones",
//         answers: [{ "title": "Kallas för Kunga-mördaren", "answer": "Jamie Lannister" }, { "title": "Skaparen Davids efternamn", "answer": "Benioff" }, { "title": "Skaparen D.B.:s efternamn", "answer": "Weiss" }, { "title": "2 inspelningsländer på M", "answer": "Malta, Marocko" }, { "title": "Året första säsongen sändes", "answer": "2011" }, { "title": "Regissör Nutters förnamn", "answer": "David" }, { "title": "Raman Djawadis", "answer": "Musiken" }, { "title": "Produktionsbolaget", "answer": "HBO" }, { "title": "Viserys systers förnamn", "answer": "Daenerys" }, { "title": "Eddards efternamn", "answer": "Stark" }],
//     },
//     {
//         id: 1025,
//         question: "Utgetts av Electronic Arts",
//         answers: [{ "title": "Populous", "answer": true }, { "title": "Titanfall", "answer": true }, { "title": "Far Cry", "answer": false }, { "title": "The Sims", "answer": true }, { "title": "Need for Speed", "answer": true }, { "title": "Assassin's Creed", "answer": false }, { "title": "FIFA 17", "answer": true }, { "title": "Battlefield 1", "answer": true }, { "title": "Warp", "answer": true }, { "title": "Rayman", "answer": false }],
//     },
//     {
//         id: 1026,
//         question: "Ordna spelkonsolerna enligt utgivningsdatum (i EU; 1=tidigast)",
//         answers: [{ "title": "NES", "answer": 1 }, { "title": "Playstation 4", "answer": 9 }, { "title": "Wii U", "answer": 8 }, { "title": "Playstation", "answer": 3 }, { "title": "SNES", "answer": 2 }, { "title": "Xbox One S", "answer": 10 }, { "title": "N64", "answer": 4 }, { "title": "Xbox 360 (Orginal)", "answer": 6 }, { "title": "Playstation 2", "answer": 5 }, { "title": "Wii", "answer": 7 }],
//     },
//     {
//         id: 1027,
//         question: "Ordna dessa Apple-produckter efter utgivningsårt (1=äldst)",
//         answers: [{ "title": "iMac G3", "answer": 3 }, { "title": "Macintosh", "answer": 2 }, { "title": "Apple II", "answer": 1 }, { "title": "iPhone X", "answer": 10 }, { "title": "Apple TV", "answer": 7 }, { "title": "MacBook Pro", "answer": 6 }, { "title": "Mac mini", "answer": 5 }, { "title": "iPhone 6s", "answer": 9 }, { "title": "Magic Mouse", "answer": 8 }, { "title": "iPod", "answer": 4 }],
//     },
//     {
//         id: 1028,
//         question: "Är ett dataspel som blivit film (läget 2019)",
//         answers: [{ "title": "Silent Hill", "answer": true }, { "title": "Doom", "answer": true }, { "title": "Sim City", "answer": false }, { "title": "Mortal Kombat", "answer": true }, { "title": "Battlefield", "answer": false }, { "title": "Warcraft", "answer": true }, { "title": "Super Mario", "answer": true }, { "title": "Tomb Raider", "answer": true }, { "title": "Grand Theft Auto", "answer": false }, { "title": "Monkey Island", "answer": false }],
//     },
//     {
//         id: 1029,
//         question: "Vilken rädsla?",
//         answers: [{ "title": "Klaustrofobi", "answer": "Slutna utrymmen" }, { "title": "Brontofobi", "answer": "Åska" }, { "title": "Nyktrofobi", "answer": "Mörker" }, { "title": "Xenofobi", "answer": "Främlinger" }, { "title": "Panfobi", "answer": "Allt" }, { "title": "Araknofobi", "answer": "Spindlar" }, { "title": "Akrofobi", "answer": "Höjder" }, { "title": "Apifobi", "answer": "Bin" }, { "title": "Trypanofobi", "answer": "Sprutor" }, { "title": "Hematofobi", "answer": "Blod" }],
//     },
//     {
//         id: 1030,
//         question: "Militära grader i ordning (1=högst)",
//         answers: [{ "title": "Major", "answer": 4 }, { "title": "Brigadgeneral", "answer": 2 }, { "title": "Överste", "answer": 3 }, { "title": "Menig", "answer": 10 }, { "title": "Fänrik", "answer": 7 }, { "title": "Kapten", "answer": 5 }, { "title": "Kopral", "answer": 9 }, { "title": "Löjtnant", "answer": 6 }, { "title": "General", "answer": 1 }, { "title": "Sergeant", "answer": 8 }],
//     },
//     {
//         id: 1031,
//         question: "Vem är känd som uppfinnaren av (efternamn)...",
//         answers: [{ "title": "Batteriet", "answer": "Volta" }, { "title": "Bilen", "answer": "Benz" }, { "title": "Dynamiten", "answer": "Nobel" }, { "title": "World Wide Web", "answer": "Berners-Lee" }, { "title": "Televisionen", "answer": "Baird" }, { "title": "Elektriska stolen", "answer": "Edison" }, { "title": "Kardborrbandet", "answer": "de Mestral" }, { "title": "Telefonen", "answer": "Bell" }, { "title": "Glödlampan", "answer": "Edison" }, { "title": "Symaskinen", "answer": "Singer" }],
//     },
//     {
//         id: 2000,
//         question: "Är en dinosaurie",
//         answers: [{ "title": "Pteranodon", "answer": true }, { "title": "Tyrannosaurus Rex", "answer": true }, { "title": "Satyrus", "answer": false }, { "title": "Kentrosaurus", "answer": true }, { "title": "Triceratops", "answer": true }, { "title": "Cryolophosaurus", "answer": true }, { "title": "Medinosaurus", "answer": false }, { "title": "Spinosaurus", "answer": true }, { "title": "Giganotosaurus", "answer": true }, { "title": "Heksanosaurus", "answer": false }],
//     },
//     {
//         id: 2001,
//         question: "En av världens största sjöar",
//         answers: [{ "title": "Victoria", "answer": true }, { "title": "Titicacasjön", "answer": false }, { "title": "Svarta Havet", "answer": false }, { "title": "Malawisjön", "answer": true }, { "title": "Loch Ness", "answer": false }, { "title": "Aralsjön", "answer": false }, { "title": "Stora Björnsjön", "answer": true }, { "title": "Kaspiska Havet", "answer": true }, { "title": "Bajkalsjön", "answer": true }, { "title": "Michigansjön", "answer": true }],
//     },
//     {
//         id: 2002,
//         question: "Vilken sport spelas i",
//         answers: [{ "title": "Super Bowl", "answer": "Amerikansk fotboll" }, { "title": "The British Open", "answer": "Golf" }, { "title": "Wimbledon", "answer": "Tennis" }, { "title": "The Ashes", "answer": "Cricket" }, { "title": "Stanley Cup", "answer": "Ishockey" }, { "title": "Kentucky Derby", "answer": "Hästkapplöpning" }, { "title": "Tour de France", "answer": "Cykling" }, { "title": "Monaco GP", "answer": "Formel 1" }, { "title": "The Petersen Classic", "answer": "Bowling" }, { "title": "The Four Hills Tournament", "answer": "Backhoppning" }],
//     },
//     {
//         id: 2003,
//         question: "Vilken serie eller seriefigur är denna skapare mest känd för?",
//         answers: [{ "title": "Martin Kellerman", "answer": "Rocky" }, { "title": "Cecilia Torudd", "answer": "Ensamma mamman" }, { "title": "Rune Andréasson", "answer": "Bamse" }, { "title": "Lise Myhre", "answer": "Nemi" }, { "title": "Rudolf Petersson", "answer": "91:an" }, { "title": "Tony Cronstam", "answer": "Elvis" }, { "title": "Joakim Pirinen", "answer": "SockeConny" }, { "title": "Ulf Lundkvist", "answer": "Assar" }, { "title": "Birgitta Lilliehöök", "answer": "Spara och Slösa" }, { "title": "Charlie Christensen", "answer": "Arne Anka" }],
//     },
//     {
//         id: 2004,
//         question: "Dog i motorsportolycka",
//         answers: [{ "title": "Henri Toivonen", "answer": true }, { "title": "Wayne Rainey", "answer": false }, { "title": "Pierre Levegh", "answer": true }, { "title": "Gilles Villeneuve", "answer": true }, { "title": "Ronnie Peterson", "answer": true }, { "title": "Franz Wittman", "answer": false }, { "title": "Jim Clark", "answer": true }, { "title": "Ayrton Senna", "answer": true }, { "title": "Darrel Waltrip", "answer": false }, { "title": "Giuseppe Farina", "answer": false }],
//     },
//     {
//         id: 2005,
//         question: "Längdmått i ordning (1=längst)",
//         answers: [{ "title": "Nautisk mil", "answer": "1" }, { "title": "Engelsk mil", "answer": "2" }, { "title": "Yard", "answer": "5" }, { "title": "Kilometer", "answer": "3" }, { "title": "Tum", "answer": "8" }, { "title": "Millimeter", "answer": "10" }, { "title": "Aln", "answer": "6" }, { "title": "Meter", "answer": "4" }, { "title": "Centimeter", "answer": "9" }, { "title": "fot", "answer": "7" }],
//     },
//     {
//         id: 2006,
//         question: "Ett av antikens underverk",
//         answers: [{ "title": "Artemis templet", "answer": true }, { "title": "Mausoleet i Halikarnassos", "answer": true }, { "title": "Kolossen på Rhodos", "answer": true }, { "title": "Machu Picchu", "answer": false }, { "title": "Potalapalatset", "answer": false }, { "title": "Colosseum", "answer": false }, { "title": "Cheopspyramiden", "answer": true }, { "title": "Zeusstatyn", "answer": true }, { "title": "Fyrtornet på Faros", "answer": true }, { "title": "Taj Mahal", "answer": false }],
//     },
//     {
//         id: 2007,
//         question: "Vad uppfann denna svenska uppfinnare?",
//         answers: [{ "title": "Baltzar von Platen", "answer": "Kylskåpet" }, { "title": "Erik Wallenberg", "answer": "Tetra Pak" }, { "title": "Alfred Nobel", "answer": "Dynamiten" }, { "title": "Anders Celsius", "answer": "Temperaturskalan" }, { "title": "Amalia Eriksson", "answer": "Polkagrisen" }, { "title": "Gideon Sundbäck", "answer": "Blixtlåset" }, { "title": "Eva de la Gardie", "answer": "Brännvin på Potatis" }, { "title": "Gustaf de Laval", "answer": "Separatorn, Ångturbinen" }, { "title": "Johan Petter Johansson", "answer": "Skiftnyckeln" }, { "title": "John Ericsson", "answer": "Båtpropellern" }],
//     },
//     {
//         id: 2008,
//         question: "Länder i storleksordning efter yta (1=störst)",
//         answers: [{ "title": "Sudan", "answer": "10" }, { "title": "Brasilien", "answer": "5" }, { "title": "Ryssland", "answer": "1" }, { "title": "Australien", "answer": "6" }, { "title": "Kanada", "answer": "2" }, { "title": "USA", "answer": "3" }, { "title": "Indien", "answer": "7" }, { "title": "Kina", "answer": "4" }, { "title": "Argentina", "answer": "8" }, { "title": "Kazakstan", "answer": "9" }],
//     },
//     {
//         id: 2009,
//         question: "Vilket djur?",
//         answers: [{ "title": "Vulpes vulpes", "answer": "Räv" }, { "title": "Alces alces", "answer": "Älg" }, { "title": "Sciurus vulgaris", "answer": "Ekorre" }, { "title": "Canis lupus", "answer": "Varg" }, { "title": "Ursus arctos", "answer": "Brunbjörn" }, { "title": "Martes martes", "answer": "Mård" }, { "title": "Gulo gulo", "answer": "Järv" }, { "title": "Lutra lutra", "answer": "Utter" }, { "title": "Felis lynx", "answer": "lo" }, { "title": "Meles meles", "answer": "Grävling" }],
//     },
//     {
//         id: 2010,
//         question: "Vem är känd som skaparen av...",
//         answers: [{ "title": "Musse Pigg", "answer": "Walt Disney" }, { "title": "Mumin", "answer": "Tove Jansson" }, { "title": "Grodan Kermit", "answer": "Jim Henson" }, { "title": "Bart Simpson", "answer": "Matt Groening" }, { "title": "Snobben", "answer": "Charles Schulz" }, { "title": "Pippi Långstrump", "answer": "Astrid Lindgren" }, { "title": "Nalle Puh", "answer": "A.A. Milne" }, { "title": "Tintin", "answer": "Hergé" }, { "title": "Tarzan", "answer": "Edgar Rice Burroughs" }, { "title": "Björnen Paddington", "answer": "Michael Bond" }],
//     },
//     {
//         id: 2011,
//         question: "Ursprungslandet för...",
//         answers: [{ "title": "Thin Lizzy", "answer": "Irland" }, { "title": "Paramore", "answer": "USA" }, { "title": "Rammstein", "answer": "Tyskland" }, { "title": "Muse", "answer": "Storbrittanien" }, { "title": "Nightwish", "answer": "Finland" }, { "title": "Nickelback", "answer": "Canada" }, { "title": "Pussy Riot", "answer": "Ryssland" }, { "title": "D-A-D", "answer": "Danmark" }, { "title": "AC/DC", "answer": "Australien" }, { "title": "Daft Punk", "answer": "Frankrike" }],
//     },
//     {
//         id: 2012,
//         question: "Vad står förkortningen för?",
//         answers: [{ "title": "LOL", "answer": "Laughing Out Loud" }, { "title": "A.D", "answer": "Anno Domini" }, { "title": "CD", "answer": "Compact Disc" }, { "title": "m.a.o.", "answer": "med andra ord" }, { "title": "mvh", "answer": "Med vänlig hälsning" }, { "title": "OMG", "answer": "Oh My God" }, { "title": "USB", "answer": "Universal Serial Bus" }, { "title": "BBQ", "answer": "Barbecue" }, { "title": "irl", "answer": "In real life" }, { "title": "c:a", "answer": "cirka" }],
//     },
//     {
//         id: 2013,
//         question: "Blommans huvudsakliga färg",
//         answers: [{ "title": "Knölklocka", "answer": "Violett" }, { "title": "Brinnande kärlek", "answer": "Röd" }, { "title": "Rosling", "answer": "Rosa" }, { "title": "Femfingerört", "answer": "Gul" }, { "title": "Gemsrot", "answer": "Gul" }, { "title": "Fjällgentiana", "answer": "Blå" }, { "title": "Orientvallmo", "answer": "Röd/Orange" }, { "title": "Gullris", "answer": "Gul" }, { "title": "Smultron", "answer": "Vit" }, { "title": "Kantljung", "answer": "Vit" }],
//     },
//     {
//         id: 2014,
//         question: "Nyhetsorganisation i vilket land?",
//         answers: [{ "title": "AFP", "answer": "Frankrike" }, { "title": "Reuters", "answer": "Storbrittanien" }, { "title": "AP", "answer": "USA" }, { "title": "Interfax", "answer": "Ryssland" }, { "title": "Xinhua", "answer": "China" }, { "title": "ANSA", "answer": "Italien" }, { "title": "EFE", "answer": "Spanien" }, { "title": "AA (Anadolu Agency)", "answer": "Turkiet" }, { "title": "NINA", "answer": "Irak" }, { "title": "Kyodo News", "answer": "Japan" }],
//     },
//     {
//         id: 2015,
//         question: "Årtiondet för händelsen",
//         answers: [{ "title": "Orkanen Katrina", "answer": "2000-talet" }, { "title": "Glasnost infördes", "answer": "1980-talet" }, { "title": "Watergateskandalen", "answer": "1970-talet" }, { "title": "Himmelska fridens torgmassakern", "answer": "1980-talet" }, { "title": "Första hjärttransplantationen", "answer": "1960-talet" }, { "title": "Kanaltunneln öppnas", "answer": "1990-talet" }, { "title": "Palmemordet", "answer": "1980-talet" }, { "title": "Deepwater Horizon oljeutsläpp", "answer": "2010-talet" }, { "title": "Facebook lanseras", "answer": "2000-talet" }, { "title": "Pragvåren", "answer": "1960-talet" }],
//     },
//     {
//         id: 2016,
//         question: "Vilken sport är personen känd för?",
//         answers: [{ "title": "George Scott", "answer": "Boxning" }, { "title": "Håkan Calqvist", "answer": "Motocross" }, { "title": "Alexander Isak", "answer": "Fotboll" }, { "title": "Emil 'HeatoN' Christensen", "answer": "Counter Strike" }, { "title": "Stellan Bengtsson", "answer": "Pingis" }, { "title": "Peter Vanky", "answer": "Fäktning" }, { "title": "Ulf Sterner", "answer": "Ishockey" }, { "title": "Anders Gärderud", "answer": "Löpning" }, { "title": "Ljubomir Vranjes", "answer": "Handboll" }, { "title": "Patrik Sjöberg", "answer": "Höjdhopp" }],
//     },
//     {
//         id: 2017,
//         question: "Vad räknas ut med denna formel?",
//         answers: [{ "title": "v*t", "answer": "Sträcka" }, { "title": "m*a", "answer": "Kraft" }, { "title": "m*v", "answer": "Momentum" }, { "title": "(v-v0)/2", "answer": "medelhastighet" }, { "title": "F/A", "answer": "Tryck" }, { "title": "2πr", "answer": "cirkelns omkrets" }, { "title": "(4πr^3)/3", "answer": "klotets volym" }, { "title": "U/I", "answer": "motsstånd/resistans" }, { "title": "mc^3", "answer": "energin(i en kropp)" }, { "title": "πr^2", "answer": "cirkelns area" }],
//     },
//     {
//         id: 2018,
//         question: "Vilket datum flaggas det för...",
//         answers: [{ "title": "Kung Carl XVI Gustafs namnsdag", "answer": "28 jan" }, { "title": "Gustav Adolfsdagen", "answer": "6 nov" }, { "title": "Första maj", "answer": "1 maj" }, { "title": "Sveriges nationaldag", "answer": "6 juni" }, { "title": "Drottning Silvias namnsdag", "answer": "8 aug" }, { "title": "Kronprincessan Victorias födelsedag", "answer": "14 juli" }, { "title": "FN-dagen", "answer": "24 okt" }, { "title": "Nobeldagen", "answer": "10 dec" }, { "title": "Kronprincessan Victorias namnsdag", "answer": "12 mars" }, { "title": "Nyårsdagen", "answer": "1 jan" }],
//     },
//     {
//         id: 2019,
//         question: "Ursprungslandet för...",
//         answers: [{ "title": "Kiwi", "answer": "Kina" }, { "title": "Kaffe", "answer": "Etiopien" }, { "title": "Banan", "answer": "Papua Nya Guinea" }, { "title": "Tomat", "answer": "Peru/Chile" }, { "title": "Ris", "answer": "Thailand" }, { "title": "Eggplanta", "answer": "Indien/Kina" }, { "title": "Mandarin", "answer": "Kina" }, { "title": "Lychee", "answer": "Kina" }, { "title": "Passionsfrukt", "answer": "Brasilien" }, { "title": "Majs", "answer": "Mexiko" }],
//     },
//     {
//         id: 2020,
//         question: "Vilken språkgrupp tillhör...",
//         answers: [{ "title": "Finska", "answer": "Finsk-ugriska" }, { "title": "Gaeliska", "answer": "Keltiska" }, { "title": "Lettiska", "answer": "Baltiska" }, { "title": "Spanska", "answer": "Romanska" }, { "title": "Arabiska", "answer": "Semitiska" }, { "title": "Svenska", "answer": "Germanska" }, { "title": "Korsikanska", "answer": "Romanska" }, { "title": "Engelska", "answer": "Germanska" }, { "title": "Afrikaans", "answer": "Germanska" }, { "title": "Tamil", "answer": "Dravidiska" }],
//     },
// ];

export const questions = [
    {
        "id": 2020,
        "question": "Vilken språkgrupp tillhör...",
        "answers": [
            {
                "title": "Afrikaans",
                "answer": "Germanska"
            },
            {
                "title": "Tamil",
                "answer": "Dravidiska"
            },
            {
                "title": "Gaeliska",
                "answer": "Keltiska"
            },
            {
                "title": "Arabiska",
                "answer": "Semitiska"
            },
            {
                "title": "Lettiska",
                "answer": "Baltiska"
            },
            {
                "title": "Finska",
                "answer": "Finsk-ugriska"
            },
            {
                "title": "Spanska",
                "answer": "Romanska"
            },
            {
                "title": "Korsikanska",
                "answer": "Romanska"
            },
            {
                "title": "Svenska",
                "answer": "Germanska"
            },
            {
                "title": "Engelska",
                "answer": "Germanska"
            }
        ]
    },
    {
        "id": 1031,
        "question": "Vem är känd som uppfinnaren av (efternamn)...",
        "answers": [
            {
                "title": "World Wide Web",
                "answer": "Berners-Lee"
            },
            {
                "title": "Kardborrbandet",
                "answer": "de Mestral"
            },
            {
                "title": "Televisionen",
                "answer": "Baird"
            },
            {
                "title": "Telefonen",
                "answer": "Bell"
            },
            {
                "title": "Batteriet",
                "answer": "Volta"
            },
            {
                "title": "Dynamiten",
                "answer": "Nobel"
            },
            {
                "title": "Elektriska stolen",
                "answer": "Edison"
            },
            {
                "title": "Bilen",
                "answer": "Benz"
            },
            {
                "title": "Symaskinen",
                "answer": "Singer"
            },
            {
                "title": "Glödlampan",
                "answer": "Edison"
            }
        ]
    },
    {
        "id": 1011,
        "question": "Ordna dessa sociala medier efter utgivningsår (1=äldst)",
        "answers": [
            {
                "title": "ICQ",
                "answer": 1
            },
            {
                "title": "Whatsapp",
                "answer": 8
            },
            {
                "title": "Google+",
                "answer": 9
            },
            {
                "title": "Tumblr",
                "answer": 7
            },
            {
                "title": "Twitter",
                "answer": 6
            },
            {
                "title": "MySpace",
                "answer": 3
            },
            {
                "title": "Vine",
                "answer": 10
            },
            {
                "title": "Facebook",
                "answer": 4
            },
            {
                "title": "YouTube",
                "answer": 5
            },
            {
                "title": "Friendster",
                "answer": 2
            }
        ]
    },
    {
        "id": 2018,
        "question": "Vilket datum flaggas det för...",
        "answers": [
            {
                "title": "FN-dagen",
                "answer": "24 okt"
            },
            {
                "title": "Drottning Silvias namnsdag",
                "answer": "8 aug"
            },
            {
                "title": "Kronprincessan Victorias födelsedag",
                "answer": "14 juli"
            },
            {
                "title": "Nobeldagen",
                "answer": "10 dec"
            },
            {
                "title": "Gustav Adolfsdagen",
                "answer": "6 nov"
            },
            {
                "title": "Kung Carl XVI Gustafs namnsdag",
                "answer": "28 jan"
            },
            {
                "title": "Första maj",
                "answer": "1 maj"
            },
            {
                "title": "Sveriges nationaldag",
                "answer": "6 juni"
            },
            {
                "title": "Nyårsdagen",
                "answer": "1 jan"
            },
            {
                "title": "Kronprincessan Victorias namnsdag",
                "answer": "12 mars"
            }
        ]
    },
    {
        "id": 1028,
        "question": "Är ett dataspel som blivit film (läget 2019)",
        "answers": [
            {
                "title": "Battlefield",
                "answer": false
            },
            {
                "title": "Sim City",
                "answer": false
            },
            {
                "title": "Super Mario",
                "answer": true
            },
            {
                "title": "Warcraft",
                "answer": true
            },
            {
                "title": "Silent Hill",
                "answer": true
            },
            {
                "title": "Grand Theft Auto",
                "answer": false
            },
            {
                "title": "Tomb Raider",
                "answer": true
            },
            {
                "title": "Mortal Kombat",
                "answer": true
            },
            {
                "title": "Doom",
                "answer": true
            },
            {
                "title": "Monkey Island",
                "answer": false
            }
        ]
    },
    {
        "id": 8,
        "question": "Uppfinningar i kronologisk ordning (1=äldst)",
        "answers": [
            {
                "title": "Alfabetet",
                "answer": 3
            },
            {
                "title": "Fyrverkeriet",
                "answer": 4
            },
            {
                "title": "FM-Radion",
                "answer": 9
            },
            {
                "title": "Åran",
                "answer": 1
            },
            {
                "title": "Geväret",
                "answer": 5
            },
            {
                "title": "Dieselmotorn",
                "answer": 8
            },
            {
                "title": "Pianot",
                "answer": 6
            },
            {
                "title": "Hjulet",
                "answer": 2
            },
            {
                "title": "Miniräknaren",
                "answer": 10
            },
            {
                "title": "Säkerhetständstickan",
                "answer": 7
            }
        ]
    },
    {
        "id": 11,
        "question": "Är en serie producerad av Netflix",
        "answers": [
            {
                "title": "Mad men",
                "answer": false
            },
            {
                "title": "Grace and Frankie",
                "answer": true
            },
            {
                "title": "The Ranch",
                "answer": true
            },
            {
                "title": "Marco Polo",
                "answer": true
            },
            {
                "title": "Breaking Bad",
                "answer": false
            },
            {
                "title": "Dexter",
                "answer": false
            },
            {
                "title": "Orange is the new black",
                "answer": true
            },
            {
                "title": "Big Love",
                "answer": false
            },
            {
                "title": "House of Cards",
                "answer": true
            },
            {
                "title": "Narcos",
                "answer": true
            }
        ]
    },
    {
        "id": 1009,
        "question": "Var en av de 50 mest besökta webbsajterna (enligt Alexa 01/2019)",
        "answers": [
            {
                "title": "mail.ru",
                "answer": true
            },
            {
                "title": "baidu.com",
                "answer": true
            },
            {
                "title": "yahoo.com",
                "answer": true
            },
            {
                "title": "mail.us",
                "answer": false
            },
            {
                "title": "pornhub.com",
                "answer": true
            },
            {
                "title": "alipay.com",
                "answer": true
            },
            {
                "title": "xxx.com",
                "answer": false
            },
            {
                "title": "t.co",
                "answer": true
            },
            {
                "title": "vk.com",
                "answer": true
            },
            {
                "title": "paypal.com",
                "answer": false
            }
        ]
    },
    {
        "id": 1008,
        "question": "Är/var en mobiltelefon som hade färgdisplay (mer än 4 färger)",
        "answers": [
            {
                "title": "Nokia 1680",
                "answer": true
            },
            {
                "title": "Nokia 7110",
                "answer": false
            },
            {
                "title": "Nokia 9000 Communicator",
                "answer": false
            },
            {
                "title": "Nokia 8110",
                "answer": false
            },
            {
                "title": "LG Optimus 2X",
                "answer": true
            },
            {
                "title": "Nokia 7650",
                "answer": true
            },
            {
                "title": "Ericsson P800",
                "answer": true
            },
            {
                "title": "Siemens S10",
                "answer": false
            },
            {
                "title": "Sharp Aquos SH-12C",
                "answer": true
            },
            {
                "title": "Samsung SGH-Z105",
                "answer": true
            }
        ]
    },
    {
        "id": 2003,
        "question": "Vilken serie eller seriefigur är denna skapare mest känd för?",
        "answers": [
            {
                "title": "Cecilia Torudd",
                "answer": "Ensamma mamman"
            },
            {
                "title": "Rune Andréasson",
                "answer": "Bamse"
            },
            {
                "title": "Martin Kellerman",
                "answer": "Rocky"
            },
            {
                "title": "Lise Myhre",
                "answer": "Nemi"
            },
            {
                "title": "Ulf Lundkvist",
                "answer": "Assar"
            },
            {
                "title": "Rudolf Petersson",
                "answer": "91:an"
            },
            {
                "title": "Joakim Pirinen",
                "answer": "SockeConny"
            },
            {
                "title": "Tony Cronstam",
                "answer": "Elvis"
            },
            {
                "title": "Charlie Christensen",
                "answer": "Arne Anka"
            },
            {
                "title": "Birgitta Lilliehöök",
                "answer": "Spara och Slösa"
            }
        ]
    },
    {
        "id": 2000,
        "question": "Är en dinosaurie",
        "answers": [
            {
                "title": "Heksanosaurus",
                "answer": false
            },
            {
                "title": "Medinosaurus",
                "answer": false
            },
            {
                "title": "Triceratops",
                "answer": true
            },
            {
                "title": "Tyrannosaurus Rex",
                "answer": true
            },
            {
                "title": "Satyrus",
                "answer": false
            },
            {
                "title": "Spinosaurus",
                "answer": true
            },
            {
                "title": "Cryolophosaurus",
                "answer": true
            },
            {
                "title": "Giganotosaurus",
                "answer": true
            },
            {
                "title": "Kentrosaurus",
                "answer": true
            },
            {
                "title": "Pteranodon",
                "answer": true
            }
        ]
    },
    {
        "id": 2002,
        "question": "Vilken sport spelas i",
        "answers": [
            {
                "title": "The Four Hills Tournament",
                "answer": "Backhoppning"
            },
            {
                "title": "Super Bowl",
                "answer": "Amerikansk fotboll"
            },
            {
                "title": "Stanley Cup",
                "answer": "Ishockey"
            },
            {
                "title": "The Petersen Classic",
                "answer": "Bowling"
            },
            {
                "title": "The British Open",
                "answer": "Golf"
            },
            {
                "title": "The Ashes",
                "answer": "Cricket"
            },
            {
                "title": "Kentucky Derby",
                "answer": "Hästkapplöpning"
            },
            {
                "title": "Wimbledon",
                "answer": "Tennis"
            },
            {
                "title": "Tour de France",
                "answer": "Cykling"
            },
            {
                "title": "Monaco GP",
                "answer": "Formel 1"
            }
        ]
    },
    {
        "id": 2009,
        "question": "Vilket djur?",
        "answers": [
            {
                "title": "Sciurus vulgaris",
                "answer": "Ekorre"
            },
            {
                "title": "Meles meles",
                "answer": "Grävling"
            },
            {
                "title": "Martes martes",
                "answer": "Mård"
            },
            {
                "title": "Ursus arctos",
                "answer": "Brunbjörn"
            },
            {
                "title": "Alces alces",
                "answer": "Älg"
            },
            {
                "title": "Canis lupus",
                "answer": "Varg"
            },
            {
                "title": "Felis lynx",
                "answer": "lo"
            },
            {
                "title": "Vulpes vulpes",
                "answer": "Räv"
            },
            {
                "title": "Lutra lutra",
                "answer": "Utter"
            },
            {
                "title": "Gulo gulo",
                "answer": "Järv"
            }
        ]
    },
    {
        "id": 2001,
        "question": "En av världens största sjöar",
        "answers": [
            {
                "title": "Victoria",
                "answer": true
            },
            {
                "title": "Titicacasjön",
                "answer": false
            },
            {
                "title": "Svarta Havet",
                "answer": false
            },
            {
                "title": "Malawisjön",
                "answer": true
            },
            {
                "title": "Loch Ness",
                "answer": false
            },
            {
                "title": "Stora Björnsjön",
                "answer": true
            },
            {
                "title": "Aralsjön",
                "answer": false
            },
            {
                "title": "Kaspiska Havet",
                "answer": true
            },
            {
                "title": "Bajkalsjön",
                "answer": true
            },
            {
                "title": "Michigansjön",
                "answer": true
            }
        ]
    },
    {
        "id": 1020,
        "question": "Är/var ett socialt nätverk",
        "answers": [
            {
                "title": "Myface",
                "answer": false
            },
            {
                "title": "Yo",
                "answer": true
            },
            {
                "title": "Jodel",
                "answer": true
            },
            {
                "title": "Snap Inc.",
                "answer": true
            },
            {
                "title": "Pinterest",
                "answer": true
            },
            {
                "title": "Black Social",
                "answer": false
            },
            {
                "title": "Baboo",
                "answer": false
            },
            {
                "title": "StayFriends",
                "answer": true
            },
            {
                "title": "Quick",
                "answer": false
            },
            {
                "title": "Google+",
                "answer": true
            }
        ]
    },
    {
        "id": 1022,
        "question": "Är en mangaserie",
        "answers": [
            {
                "title": "One Piece",
                "answer": true
            },
            {
                "title": "Attack on Titan",
                "answer": true
            },
            {
                "title": "Naruto",
                "answer": true
            },
            {
                "title": "Takeshi's Castle",
                "answer": false
            },
            {
                "title": "Kinniku Banzuke",
                "answer": false
            },
            {
                "title": "Kasai Banzai",
                "answer": false
            },
            {
                "title": "Uzumaki",
                "answer": true
            },
            {
                "title": "Ghost in the Shell",
                "answer": true
            },
            {
                "title": "Death Note",
                "answer": true
            },
            {
                "title": "Dragon Ball",
                "answer": true
            }
        ]
    },
    {
        "id": 1030,
        "question": "Militära grader i ordning (1=högst)",
        "answers": [
            {
                "title": "Kopral",
                "answer": 9
            },
            {
                "title": "Överste",
                "answer": 3
            },
            {
                "title": "Fänrik",
                "answer": 7
            },
            {
                "title": "Kapten",
                "answer": 5
            },
            {
                "title": "Brigadgeneral",
                "answer": 2
            },
            {
                "title": "Löjtnant",
                "answer": 6
            },
            {
                "title": "Major",
                "answer": 4
            },
            {
                "title": "Menig",
                "answer": 10
            },
            {
                "title": "General",
                "answer": 1
            },
            {
                "title": "Sergeant",
                "answer": 8
            }
        ]
    },
    {
        "id": 2015,
        "question": "Årtiondet för händelsen",
        "answers": [
            {
                "title": "Första hjärttransplantationen",
                "answer": "1960-talet"
            },
            {
                "title": "Kanaltunneln öppnas",
                "answer": "1990-talet"
            },
            {
                "title": "Facebook lanseras",
                "answer": "2000-talet"
            },
            {
                "title": "Pragvåren",
                "answer": "1960-talet"
            },
            {
                "title": "Palmemordet",
                "answer": "1980-talet"
            },
            {
                "title": "Orkanen Katrina",
                "answer": "2000-talet"
            },
            {
                "title": "Glasnost infördes",
                "answer": "1980-talet"
            },
            {
                "title": "Deepwater Horizon oljeutsläpp",
                "answer": "2010-talet"
            },
            {
                "title": "Himmelska fridens torgmassakern",
                "answer": "1980-talet"
            },
            {
                "title": "Watergateskandalen",
                "answer": "1970-talet"
            }
        ]
    },
    {
        "id": 5,
        "question": "Filmer med Harrison Ford",
        "answers": [
            {
                "title": "The Expendables",
                "answer": false
            },
            {
                "title": "K-19 The Widowmaker",
                "answer": true
            },
            {
                "title": "Spy Game",
                "answer": false
            },
            {
                "title": "Firewall",
                "answer": true
            },
            {
                "title": "Snake Eyes",
                "answer": false
            },
            {
                "title": "Blade Runner",
                "answer": true
            },
            {
                "title": "The League",
                "answer": false
            },
            {
                "title": "Firman",
                "answer": false
            },
            {
                "title": "Frantic",
                "answer": true
            },
            {
                "title": "Jagad",
                "answer": true
            }
        ]
    },
    {
        "id": 3,
        "question": "Vilket instrument är artistens huvudinstrument?",
        "answers": [
            {
                "title": "Charles Mingus",
                "answer": "Bas"
            },
            {
                "title": "Jerry Lee Lewis",
                "answer": "Piano"
            },
            {
                "title": "Phil Collins",
                "answer": "Trummor"
            },
            {
                "title": "Miles Davis",
                "answer": "Trumpet"
            },
            {
                "title": "John Coltrane",
                "answer": "Saxofon"
            },
            {
                "title": "George Harrison",
                "answer": "Gitarr"
            },
            {
                "title": "Benny Goodman",
                "answer": "Klarinett"
            },
            {
                "title": "Alicia Keys",
                "answer": "Piano"
            },
            {
                "title": "Louis Armstrong",
                "answer": "Trumpet"
            },
            {
                "title": "Eddie Van Halen",
                "answer": "Gitarr"
            }
        ]
    },
    {
        "id": 10,
        "question": "Vem har skrivit romanen?",
        "answers": [
            {
                "title": "Hobbiten",
                "answer": "J.R.R. Tolkien"
            },
            {
                "title": "Räddaren i nöden",
                "answer": "J.D. Salinger"
            },
            {
                "title": "Da Vincikoden",
                "answer": "Dan Brown"
            },
            {
                "title": "Odysseus",
                "answer": "James Joyce"
            },
            {
                "title": "Bott och straff",
                "answer": "Fjodor Dostojevskij"
            },
            {
                "title": "Anna Karenina",
                "answer": "Leo Tolstoy"
            },
            {
                "title": "Lysande utsikter",
                "answer": "Charles Dickens"
            },
            {
                "title": "1984",
                "answer": "George Orwell"
            },
            {
                "title": "Svärdet och spiran",
                "answer": "Ken Follett"
            },
            {
                "title": "Anne på Grönkulla",
                "answer": "L.M. Montgomery"
            }
        ]
    },
    {
        "id": 14,
        "question": "Så gamla blev de (antal år)",
        "answers": [
            {
                "title": "Heath Ledger",
                "answer": 28
            },
            {
                "title": "James Dean",
                "answer": 24
            },
            {
                "title": "Janis Joplin",
                "answer": 27
            },
            {
                "title": "Amy Winehouse",
                "answer": 27
            },
            {
                "title": "John Lennon",
                "answer": 40
            },
            {
                "title": "Jimi Hendrix",
                "answer": 27
            },
            {
                "title": "Marilyn Monroe",
                "answer": 36
            },
            {
                "title": "Princess Diana",
                "answer": 36
            },
            {
                "title": "Kurt Cobain",
                "answer": 27
            },
            {
                "title": "Jim Morrison",
                "answer": 27
            }
        ]
    },
    {
        "id": 1025,
        "question": "Utgetts av Electronic Arts",
        "answers": [
            {
                "title": "Warp",
                "answer": true
            },
            {
                "title": "The Sims",
                "answer": true
            },
            {
                "title": "Rayman",
                "answer": false
            },
            {
                "title": "Populous",
                "answer": true
            },
            {
                "title": "FIFA 17",
                "answer": true
            },
            {
                "title": "Assassin's Creed",
                "answer": false
            },
            {
                "title": "Battlefield 1",
                "answer": true
            },
            {
                "title": "Need for Speed",
                "answer": true
            },
            {
                "title": "Titanfall",
                "answer": true
            },
            {
                "title": "Far Cry",
                "answer": false
            }
        ]
    },
    {
        "id": 13,
        "question": "Är ett namn på en rymdstation",
        "answers": [
            {
                "title": "Skylab",
                "answer": true
            },
            {
                "title": "Lunera",
                "answer": false
            },
            {
                "title": "Tiangong",
                "answer": true
            },
            {
                "title": "Almaz",
                "answer": true
            },
            {
                "title": "Mariner",
                "answer": false
            },
            {
                "title": "Mir",
                "answer": true
            },
            {
                "title": "Shenzhou",
                "answer": false
            },
            {
                "title": "Salyut",
                "answer": true
            },
            {
                "title": "Voyager",
                "answer": false
            },
            {
                "title": "Progress",
                "answer": false
            }
        ]
    },
    {
        "id": 22,
        "question": "Vem har gjort låten populär?",
        "answers": [
            {
                "title": "Losing my Religion",
                "answer": "R.E.M"
            },
            {
                "title": "Rolling in the Deep",
                "answer": "Adele"
            },
            {
                "title": "Creep",
                "answer": "Radiohead"
            },
            {
                "title": "Born in the U.S.A.",
                "answer": "Bruce Springsteen"
            },
            {
                "title": "Dancing Queen",
                "answer": "ABBA"
            },
            {
                "title": "Life on Mars?",
                "answer": "David Bowie"
            },
            {
                "title": "Let it be",
                "answer": "The Beatles"
            },
            {
                "title": "Hotel California",
                "answer": "Eagles"
            },
            {
                "title": "Smells like teen spirit",
                "answer": "Nirvana"
            },
            {
                "title": "Viva La Vida",
                "answer": "Coldplay"
            }
        ]
    },
    {
        "id": 1027,
        "question": "Ordna dessa Apple-produckter efter utgivningsårt (1=äldst)",
        "answers": [
            {
                "title": "iPod",
                "answer": 4
            },
            {
                "title": "Apple II",
                "answer": 1
            },
            {
                "title": "Magic Mouse",
                "answer": 8
            },
            {
                "title": "iMac G3",
                "answer": 3
            },
            {
                "title": "Mac mini",
                "answer": 5
            },
            {
                "title": "Macintosh",
                "answer": 2
            },
            {
                "title": "MacBook Pro",
                "answer": 6
            },
            {
                "title": "iPhone X",
                "answer": 10
            },
            {
                "title": "Apple TV",
                "answer": 7
            },
            {
                "title": "iPhone 6s",
                "answer": 9
            }
        ]
    },
    {
        "id": 7,
        "question": "Rangordna efter storlek på spelplanen (1=störst)",
        "answers": [
            {
                "title": "Fotboll",
                "answer": 2
            },
            {
                "title": "Tennis",
                "answer": 8
            },
            {
                "title": "Badminton",
                "answer": 10
            },
            {
                "title": "Baseball",
                "answer": 1
            },
            {
                "title": "Innebandy",
                "answer": 6
            },
            {
                "title": "Ishockey",
                "answer": 4
            },
            {
                "title": "Futsal",
                "answer": 5
            },
            {
                "title": "Volleyboll",
                "answer": 9
            },
            {
                "title": "Basket",
                "answer": 7
            },
            {
                "title": "Amerikansk Fotboll",
                "answer": 3
            }
        ]
    },
    {
        "id": 1012,
        "question": "Isländska öar, Pokémons eller ingendera?",
        "answers": [
            {
                "title": "Gengar",
                "answer": "Pokémon"
            },
            {
                "title": "Pidgey",
                "answer": "Pokémon"
            },
            {
                "title": "Engey",
                "answer": "Island"
            },
            {
                "title": "Vigur",
                "answer": "Island"
            },
            {
                "title": "Absol",
                "answer": "Pokémon"
            },
            {
                "title": "Súlnasker",
                "answer": "Island"
            },
            {
                "title": "Ryuk",
                "answer": "Ingendera"
            },
            {
                "title": "Brokey",
                "answer": "Island"
            },
            {
                "title": "Ekans",
                "answer": "Pokémon"
            },
            {
                "title": "Hvalbakur",
                "answer": "Island"
            }
        ]
    },
    {
        "id": 2013,
        "question": "Blommans huvudsakliga färg",
        "answers": [
            {
                "title": "Rosling",
                "answer": "Rosa"
            },
            {
                "title": "Brinnande kärlek",
                "answer": "Röd"
            },
            {
                "title": "Knölklocka",
                "answer": "Violett"
            },
            {
                "title": "Femfingerört",
                "answer": "Gul"
            },
            {
                "title": "Gullris",
                "answer": "Gul"
            },
            {
                "title": "Gemsrot",
                "answer": "Gul"
            },
            {
                "title": "Fjällgentiana",
                "answer": "Blå"
            },
            {
                "title": "Orientvallmo",
                "answer": "Röd/Orange"
            },
            {
                "title": "Kantljung",
                "answer": "Vit"
            },
            {
                "title": "Smultron",
                "answer": "Vit"
            }
        ]
    },
    {
        "id": 1024,
        "question": "Fakta om tv-serien Game of Thrones",
        "answers": [
            {
                "title": "2 inspelningsländer på M",
                "answer": "Malta, Marocko"
            },
            {
                "title": "Kallas för Kunga-mördaren",
                "answer": "Jamie Lannister"
            },
            {
                "title": "Skaparen Davids efternamn",
                "answer": "Benioff"
            },
            {
                "title": "Skaparen D.B.:s efternamn",
                "answer": "Weiss"
            },
            {
                "title": "Produktionsbolaget",
                "answer": "HBO"
            },
            {
                "title": "Eddards efternamn",
                "answer": "Stark"
            },
            {
                "title": "Regissör Nutters förnamn",
                "answer": "David"
            },
            {
                "title": "Viserys systers förnamn",
                "answer": "Daenerys"
            },
            {
                "title": "Året första säsongen sändes",
                "answer": "2011"
            },
            {
                "title": "Raman Djawadis",
                "answer": "Musiken"
            }
        ]
    },
    {
        "id": 15,
        "question": "Från vilken stad ort kommer bandet?",
        "answers": [
            {
                "title": "Takida",
                "answer": "Ånge"
            },
            {
                "title": "The Cardigans",
                "answer": "Huskvarna/Jönköping"
            },
            {
                "title": "The Hives",
                "answer": "Fagersta"
            },
            {
                "title": "Vikingarna",
                "answer": "Slottsbro/Grums"
            },
            {
                "title": "Kent",
                "answer": "Eskilstuna"
            },
            {
                "title": "Ace of Base",
                "answer": "Göteborg"
            },
            {
                "title": "Hellacopters",
                "answer": "Stockholm"
            },
            {
                "title": "Nationalteatern",
                "answer": "Göteborg"
            },
            {
                "title": "The Knife",
                "answer": "Göteborg"
            },
            {
                "title": "Ebba Grön",
                "answer": "Stockholm"
            }
        ]
    },
    {
        "id": 2011,
        "question": "Ursprungslandet för...",
        "answers": [
            {
                "title": "Muse",
                "answer": "Storbrittanien"
            },
            {
                "title": "D-A-D",
                "answer": "Danmark"
            },
            {
                "title": "Paramore",
                "answer": "USA"
            },
            {
                "title": "Thin Lizzy",
                "answer": "Irland"
            },
            {
                "title": "Pussy Riot",
                "answer": "Ryssland"
            },
            {
                "title": "Rammstein",
                "answer": "Tyskland"
            },
            {
                "title": "Nightwish",
                "answer": "Finland"
            },
            {
                "title": "Nickelback",
                "answer": "Canada"
            },
            {
                "title": "AC/DC",
                "answer": "Australien"
            },
            {
                "title": "Daft Punk",
                "answer": "Frankrike"
            }
        ]
    },
    {
        "id": 1004,
        "question": "Är ett spel till Commodore 64?",
        "answers": [
            {
                "title": "KillTheBoss",
                "answer": false
            },
            {
                "title": "Pirates!",
                "answer": true
            },
            {
                "title": "Turrican",
                "answer": true
            },
            {
                "title": "Commando",
                "answer": true
            },
            {
                "title": "Winter Games",
                "answer": true
            },
            {
                "title": "The Queens Men",
                "answer": false
            },
            {
                "title": "Malibu",
                "answer": false
            },
            {
                "title": "Forget Paris",
                "answer": false
            },
            {
                "title": "Lemmings",
                "answer": true
            },
            {
                "title": "Prince of Persia",
                "answer": true
            }
        ]
    },
    {
        "id": 0,
        "question": "Hav i storleksordning (1=störst)",
        "answers": [
            {
                "title": "Medelhavet",
                "answer": 9
            },
            {
                "title": "Indiska Oceanen",
                "answer": 3
            },
            {
                "title": "Stilla Havet",
                "answer": 1
            },
            {
                "title": "Atlanten",
                "answer": 2
            },
            {
                "title": "Arktiska Havet",
                "answer": 4
            },
            {
                "title": "Korallhavet",
                "answer": 6
            },
            {
                "title": "Karibiska Havet",
                "answer": 8
            },
            {
                "title": "Berings Hav",
                "answer": 10
            },
            {
                "title": "Tasmanhavet",
                "answer": 5
            },
            {
                "title": "Sydkinesiska Havet",
                "answer": 7
            }
        ]
    },
    {
        "id": 21,
        "question": "Är ett flygbolag",
        "answers": [
            {
                "title": "Sun d'Or",
                "answer": true
            },
            {
                "title": "LIAT",
                "answer": true
            },
            {
                "title": "Volare Airlines",
                "answer": true
            },
            {
                "title": "Mango",
                "answer": true
            },
            {
                "title": "Air Hamburg",
                "answer": true
            },
            {
                "title": "LC Busre",
                "answer": true
            },
            {
                "title": "Nigerian Eagle Airlines",
                "answer": true
            },
            {
                "title": "Air Moskwa",
                "answer": false
            },
            {
                "title": "NetJets",
                "answer": true
            },
            {
                "title": "Air Fulmar",
                "answer": false
            }
        ]
    },
    {
        "id": 6,
        "question": "Svenska statsministrar i ordning (1=först)",
        "answers": [
            {
                "title": "Stefan Löfven",
                "answer": 10
            },
            {
                "title": "Louis De Geer d.ä.",
                "answer": 1
            },
            {
                "title": "Carl Bildt",
                "answer": 8
            },
            {
                "title": "Hjalmar Branting",
                "answer": 4
            },
            {
                "title": "Erik Gustaf Boström",
                "answer": 3
            },
            {
                "title": "Per Albin Hansson",
                "answer": 5
            },
            {
                "title": "Thorbjörn Fälldin",
                "answer": 7
            },
            {
                "title": "Göran Persson",
                "answer": 9
            },
            {
                "title": "Gillis Bildt",
                "answer": 2
            },
            {
                "title": "Tage Erlander",
                "answer": 6
            }
        ]
    },
    {
        "id": 1006,
        "question": "Är ett av de 20 mest sålda dataspelen (alla plattformar)",
        "answers": [
            {
                "title": "Diablo III",
                "answer": true
            },
            {
                "title": "Pokémon",
                "answer": true
            },
            {
                "title": "Grand Theft Auto V",
                "answer": true
            },
            {
                "title": "Lemmings",
                "answer": false
            },
            {
                "title": "The Sims",
                "answer": false
            },
            {
                "title": "Mario Kart Wii",
                "answer": true
            },
            {
                "title": "Frogger",
                "answer": false
            },
            {
                "title": "Tetris",
                "answer": true
            },
            {
                "title": "Minecraft",
                "answer": true
            },
            {
                "title": "Mario Kart 8",
                "answer": false
            }
        ]
    },
    {
        "id": 4,
        "question": "Franska är ett officiellt språk i...",
        "answers": [
            {
                "title": "Bahamas",
                "answer": false
            },
            {
                "title": "Senegal",
                "answer": true
            },
            {
                "title": "Namibia",
                "answer": false
            },
            {
                "title": "Kanada",
                "answer": true
            },
            {
                "title": "Liechtenstein",
                "answer": false
            },
            {
                "title": "Mali",
                "answer": true
            },
            {
                "title": "Schweiz",
                "answer": true
            },
            {
                "title": "Haiti",
                "answer": true
            },
            {
                "title": "Sudan",
                "answer": false
            },
            {
                "title": "Luxemburg",
                "answer": true
            }
        ]
    },
    {
        "id": 25,
        "question": "Är en röd druvsort?",
        "answers": [
            {
                "title": "Colombard",
                "answer": false
            },
            {
                "title": "Muscadelle",
                "answer": false
            },
            {
                "title": "Fer",
                "answer": false
            },
            {
                "title": "Carignan",
                "answer": true
            },
            {
                "title": "Syrah",
                "answer": true
            },
            {
                "title": "Riesling",
                "answer": false
            },
            {
                "title": "Sémillon",
                "answer": false
            },
            {
                "title": "Malbec",
                "answer": true
            },
            {
                "title": "Vermentino",
                "answer": false
            },
            {
                "title": "Marsanne",
                "answer": false
            }
        ]
    },
    {
        "id": 2007,
        "question": "Vad uppfann denna svenska uppfinnare?",
        "answers": [
            {
                "title": "Gustaf de Laval",
                "answer": "Separatorn, Ångturbinen"
            },
            {
                "title": "Gideon Sundbäck",
                "answer": "Blixtlåset"
            },
            {
                "title": "Johan Petter Johansson",
                "answer": "Skiftnyckeln"
            },
            {
                "title": "Eva de la Gardie",
                "answer": "Brännvin på Potatis"
            },
            {
                "title": "John Ericsson",
                "answer": "Båtpropellern"
            },
            {
                "title": "Baltzar von Platen",
                "answer": "Kylskåpet"
            },
            {
                "title": "Amalia Eriksson",
                "answer": "Polkagrisen"
            },
            {
                "title": "Anders Celsius",
                "answer": "Temperaturskalan"
            },
            {
                "title": "Erik Wallenberg",
                "answer": "Tetra Pak"
            },
            {
                "title": "Alfred Nobel",
                "answer": "Dynamiten"
            }
        ]
    },
    {
        "id": 2010,
        "question": "Vem är känd som skaparen av...",
        "answers": [
            {
                "title": "Snobben",
                "answer": "Charles Schulz"
            },
            {
                "title": "Nalle Puh",
                "answer": "A.A. Milne"
            },
            {
                "title": "Bart Simpson",
                "answer": "Matt Groening"
            },
            {
                "title": "Mumin",
                "answer": "Tove Jansson"
            },
            {
                "title": "Musse Pigg",
                "answer": "Walt Disney"
            },
            {
                "title": "Tarzan",
                "answer": "Edgar Rice Burroughs"
            },
            {
                "title": "Tintin",
                "answer": "Hergé"
            },
            {
                "title": "Grodan Kermit",
                "answer": "Jim Henson"
            },
            {
                "title": "Björnen Paddington",
                "answer": "Michael Bond"
            },
            {
                "title": "Pippi Långstrump",
                "answer": "Astrid Lindgren"
            }
        ]
    },
    {
        "id": 2019,
        "question": "Ursprungslandet för...",
        "answers": [
            {
                "title": "Kaffe",
                "answer": "Etiopien"
            },
            {
                "title": "Banan",
                "answer": "Papua Nya Guinea"
            },
            {
                "title": "Tomat",
                "answer": "Peru/Chile"
            },
            {
                "title": "Ris",
                "answer": "Thailand"
            },
            {
                "title": "Kiwi",
                "answer": "Kina"
            },
            {
                "title": "Eggplanta",
                "answer": "Indien/Kina"
            },
            {
                "title": "Lychee",
                "answer": "Kina"
            },
            {
                "title": "Mandarin",
                "answer": "Kina"
            },
            {
                "title": "Majs",
                "answer": "Mexiko"
            },
            {
                "title": "Passionsfrukt",
                "answer": "Brasilien"
            }
        ]
    },
    {
        "id": 1017,
        "question": "Vem spelade James Bond i denna film?",
        "answers": [
            {
                "title": "Live and Let Die",
                "answer": "Roger Moore"
            },
            {
                "title": "Octopussy",
                "answer": "Roger Moore"
            },
            {
                "title": "Skyfall",
                "answer": "Daniel Craig"
            },
            {
                "title": "Man lever bara två gånger",
                "answer": "Sean Connery"
            },
            {
                "title": "I hennes majestäts hemliga tjänst",
                "answer": "George Lazenby"
            },
            {
                "title": "Tid för hämnd",
                "answer": "Timothy Dalton"
            },
            {
                "title": "Dr. No",
                "answer": "Sean Connery"
            },
            {
                "title": "Älskade Spion",
                "answer": "Roger Moore"
            },
            {
                "title": "Tomorrow Never Dies",
                "answer": "Pierce Brosnan"
            },
            {
                "title": "Goldfinger",
                "answer": "Sean Connery"
            }
        ]
    },
    {
        "id": 1000,
        "question": "Är ett dataspel i Call of Duty-serien",
        "answers": [
            {
                "title": "Heroes",
                "answer": false
            },
            {
                "title": "Modern Warfare",
                "answer": true
            },
            {
                "title": "Finest Hour",
                "answer": true
            },
            {
                "title": "Training Day",
                "answer": false
            },
            {
                "title": "Advanced Warfare",
                "answer": true
            },
            {
                "title": "Infinite Warfare",
                "answer": true
            },
            {
                "title": "Rouge",
                "answer": false
            },
            {
                "title": "Ghosts",
                "answer": true
            },
            {
                "title": "Black Ops",
                "answer": true
            },
            {
                "title": "Platoon",
                "answer": false
            }
        ]
    },
    {
        "id": 12,
        "question": "USA:s presidenter i ordning (1=senast)",
        "answers": [
            {
                "title": "Abraham Lincoln",
                "answer": 10
            },
            {
                "title": "Barack Obama",
                "answer": 1
            },
            {
                "title": "Ulysses S. Grant",
                "answer": 9
            },
            {
                "title": "Bill Clinton",
                "answer": 2
            },
            {
                "title": "Harry Truman",
                "answer": 6
            },
            {
                "title": "John F. Kennedy",
                "answer": 5
            },
            {
                "title": "Jimmy Carter",
                "answer": 3
            },
            {
                "title": "Gerald Ford",
                "answer": 4
            },
            {
                "title": "Herbert Hoover",
                "answer": 7
            },
            {
                "title": "Theorode Roosevelt",
                "answer": 8
            }
        ]
    },
    {
        "id": 1023,
        "question": "Är en version racingspelserien Need for Speed",
        "answers": [
            {
                "title": "Most Wanted",
                "answer": true
            },
            {
                "title": "Top Gear",
                "answer": false
            },
            {
                "title": "Underground",
                "answer": true
            },
            {
                "title": "Rivals",
                "answer": true
            },
            {
                "title": "Fast Five",
                "answer": false
            },
            {
                "title": "Undercover",
                "answer": false
            },
            {
                "title": "Shift",
                "answer": true
            },
            {
                "title": "No Limits",
                "answer": true
            },
            {
                "title": "Hot Pursuit",
                "answer": true
            },
            {
                "title": "Thriller",
                "answer": false
            }
        ]
    },
    {
        "id": 1014,
        "question": "Är en stad i Kanto-regionen i Pokémon",
        "answers": [
            {
                "title": "Celadon City",
                "answer": true
            },
            {
                "title": "Pallet Town",
                "answer": true
            },
            {
                "title": "Viridian City",
                "answer": true
            },
            {
                "title": "Stratos City",
                "answer": false
            },
            {
                "title": "Tempera City",
                "answer": false
            },
            {
                "title": "Xeneroville",
                "answer": false
            },
            {
                "title": "Fuchsia City",
                "answer": true
            },
            {
                "title": "Lavender Town",
                "answer": true
            },
            {
                "title": "Sonnewik",
                "answer": false
            },
            {
                "title": "Saffron City",
                "answer": true
            }
        ]
    },
    {
        "id": 2,
        "question": "Människor som har gått på månen",
        "answers": [
            {
                "title": "James Irwin",
                "answer": true
            },
            {
                "title": "Neil Armstrong",
                "answer": true
            },
            {
                "title": "John Glenn",
                "answer": false
            },
            {
                "title": "Andy Copeland",
                "answer": false
            },
            {
                "title": "Buzz Aldrin",
                "answer": true
            },
            {
                "title": "Edgar Mitchell",
                "answer": true
            },
            {
                "title": "Alan Shepard",
                "answer": true
            },
            {
                "title": "Juri Gagarin",
                "answer": false
            },
            {
                "title": "John Young",
                "answer": true
            },
            {
                "title": "Alan Bean",
                "answer": true
            }
        ]
    },
    {
        "id": 1029,
        "question": "Vilken rädsla?",
        "answers": [
            {
                "title": "Panfobi",
                "answer": "Allt"
            },
            {
                "title": "Apifobi",
                "answer": "Bin"
            },
            {
                "title": "Nyktrofobi",
                "answer": "Mörker"
            },
            {
                "title": "Trypanofobi",
                "answer": "Sprutor"
            },
            {
                "title": "Akrofobi",
                "answer": "Höjder"
            },
            {
                "title": "Araknofobi",
                "answer": "Spindlar"
            },
            {
                "title": "Hematofobi",
                "answer": "Blod"
            },
            {
                "title": "Xenofobi",
                "answer": "Främlinger"
            },
            {
                "title": "Klaustrofobi",
                "answer": "Slutna utrymmen"
            },
            {
                "title": "Brontofobi",
                "answer": "Åska"
            }
        ]
    },
    {
        "id": 1010,
        "question": "Vilket nummer saknas i filmens titel?",
        "answers": [
            {
                "title": "dagar senare",
                "answer": 28
            },
            {
                "title": "Dresses",
                "answer": 27
            },
            {
                "title": "Fahrenheit",
                "answer": 451
            },
            {
                "title": "gram",
                "answer": 21
            },
            {
                "title": "Sommaren '",
                "answer": 42
            },
            {
                "title": "Feet from Stardom",
                "answer": 20
            },
            {
                "title": "Ronin",
                "answer": 47
            },
            {
                "title": "snart 30",
                "answer": 13
            },
            {
                "title": "Jump Street",
                "answer": 21
            },
            {
                "title": "orsaker att hata dig",
                "answer": 10
            }
        ]
    },
    {
        "id": 2008,
        "question": "Länder i storleksordning efter yta (1=störst)",
        "answers": [
            {
                "title": "Australien",
                "answer": "6"
            },
            {
                "title": "Sudan",
                "answer": "10"
            },
            {
                "title": "Brasilien",
                "answer": "5"
            },
            {
                "title": "USA",
                "answer": "3"
            },
            {
                "title": "Ryssland",
                "answer": "1"
            },
            {
                "title": "Kina",
                "answer": "4"
            },
            {
                "title": "Indien",
                "answer": "7"
            },
            {
                "title": "Kanada",
                "answer": "2"
            },
            {
                "title": "Kazakstan",
                "answer": "9"
            },
            {
                "title": "Argentina",
                "answer": "8"
            }
        ]
    },
    {
        "id": 2006,
        "question": "Ett av antikens underverk",
        "answers": [
            {
                "title": "Cheopspyramiden",
                "answer": true
            },
            {
                "title": "Kolossen på Rhodos",
                "answer": true
            },
            {
                "title": "Potalapalatset",
                "answer": false
            },
            {
                "title": "Mausoleet i Halikarnassos",
                "answer": true
            },
            {
                "title": "Machu Picchu",
                "answer": false
            },
            {
                "title": "Taj Mahal",
                "answer": false
            },
            {
                "title": "Zeusstatyn",
                "answer": true
            },
            {
                "title": "Colosseum",
                "answer": false
            },
            {
                "title": "Artemis templet",
                "answer": true
            },
            {
                "title": "Fyrtornet på Faros",
                "answer": true
            }
        ]
    },
    {
        "id": 2017,
        "question": "Vad räknas ut med denna formel?",
        "answers": [
            {
                "title": "m*v",
                "answer": "Momentum"
            },
            {
                "title": "mc^3",
                "answer": "energin(i en kropp)"
            },
            {
                "title": "m*a",
                "answer": "Kraft"
            },
            {
                "title": "v*t",
                "answer": "Sträcka"
            },
            {
                "title": "(v-v0)/2",
                "answer": "medelhastighet"
            },
            {
                "title": "F/A",
                "answer": "Tryck"
            },
            {
                "title": "U/I",
                "answer": "motsstånd/resistans"
            },
            {
                "title": "(4πr^3)/3",
                "answer": "klotets volym"
            },
            {
                "title": "πr^2",
                "answer": "cirkelns area"
            },
            {
                "title": "2πr",
                "answer": "cirkelns omkrets"
            }
        ]
    },
    {
        "id": 2014,
        "question": "Nyhetsorganisation i vilket land?",
        "answers": [
            {
                "title": "Interfax",
                "answer": "Ryssland"
            },
            {
                "title": "AP",
                "answer": "USA"
            },
            {
                "title": "EFE",
                "answer": "Spanien"
            },
            {
                "title": "Reuters",
                "answer": "Storbrittanien"
            },
            {
                "title": "ANSA",
                "answer": "Italien"
            },
            {
                "title": "AFP",
                "answer": "Frankrike"
            },
            {
                "title": "AA (Anadolu Agency)",
                "answer": "Turkiet"
            },
            {
                "title": "Xinhua",
                "answer": "China"
            },
            {
                "title": "Kyodo News",
                "answer": "Japan"
            },
            {
                "title": "NINA",
                "answer": "Irak"
            }
        ]
    },
    {
        "id": 1,
        "question": "Vilket dataspelsföretag har gjort...",
        "answers": [
            {
                "title": "Assassin's Creed",
                "answer": "Ubisoft"
            },
            {
                "title": "Call of Duty",
                "answer": "Activision"
            },
            {
                "title": "Colin McRae Rally",
                "answer": "Codemasters"
            },
            {
                "title": "Minecraft",
                "answer": "Mojang"
            },
            {
                "title": "Hay Day",
                "answer": "Supercell"
            },
            {
                "title": "Angry Birds",
                "answer": "Rovio"
            },
            {
                "title": "Grand Theft Auto",
                "answer": "Rockstar Games"
            },
            {
                "title": "FIFA",
                "answer": "Electronic Arts"
            },
            {
                "title": "Candy Crush Saga",
                "answer": "King"
            },
            {
                "title": "Donkey Kong",
                "answer": "Nintendo"
            }
        ]
    },
    {
        "id": 1013,
        "question": "Term i amerikansk fribrottning, mat eller både och?",
        "answers": [
            {
                "title": "Gong Bao",
                "answer": "mat"
            },
            {
                "title": "Aguachile",
                "answer": "mat"
            },
            {
                "title": "Spanish Fly",
                "answer": "fribrottning"
            },
            {
                "title": "Chimichanga",
                "answer": "mat"
            },
            {
                "title": "Enzuigiri",
                "answer": "fribrottning"
            },
            {
                "title": "Hart Attack",
                "answer": "fribrottning"
            },
            {
                "title": "Flapjack",
                "answer": "både och"
            },
            {
                "title": "Chicken Wing",
                "answer": "både och"
            },
            {
                "title": "G9",
                "answer": "fribrottning"
            },
            {
                "title": "Tripas",
                "answer": "mat"
            }
        ]
    },
    {
        "id": 2005,
        "question": "Längdmått i ordning (1=längst)",
        "answers": [
            {
                "title": "Centimeter",
                "answer": "9"
            },
            {
                "title": "Meter",
                "answer": "4"
            },
            {
                "title": "fot",
                "answer": "7"
            },
            {
                "title": "Engelsk mil",
                "answer": "2"
            },
            {
                "title": "Nautisk mil",
                "answer": "1"
            },
            {
                "title": "Kilometer",
                "answer": "3"
            },
            {
                "title": "Millimeter",
                "answer": "10"
            },
            {
                "title": "Yard",
                "answer": "5"
            },
            {
                "title": "Tum",
                "answer": "8"
            },
            {
                "title": "Aln",
                "answer": "6"
            }
        ]
    },
    {
        "id": 1021,
        "question": "Är en figur i TV-serien Smurfarna",
        "answers": [
            {
                "title": "Glasögonsmurf",
                "answer": true
            },
            {
                "title": "Latsmurf",
                "answer": true
            },
            {
                "title": "Semestersmurf",
                "answer": false
            },
            {
                "title": "Starksmurf",
                "answer": true
            },
            {
                "title": "Rödsmurf",
                "answer": false
            },
            {
                "title": "Gammelsmurf",
                "answer": true
            },
            {
                "title": "Azrael",
                "answer": true
            },
            {
                "title": "Läckersmurf",
                "answer": true
            },
            {
                "title": "Calimero",
                "answer": false
            },
            {
                "title": "Lustigsmurf",
                "answer": true
            }
        ]
    },
    {
        "id": 2004,
        "question": "Dog i motorsportolycka",
        "answers": [
            {
                "title": "Gilles Villeneuve",
                "answer": true
            },
            {
                "title": "Giuseppe Farina",
                "answer": false
            },
            {
                "title": "Henri Toivonen",
                "answer": true
            },
            {
                "title": "Pierre Levegh",
                "answer": true
            },
            {
                "title": "Darrel Waltrip",
                "answer": false
            },
            {
                "title": "Wayne Rainey",
                "answer": false
            },
            {
                "title": "Ronnie Peterson",
                "answer": true
            },
            {
                "title": "Jim Clark",
                "answer": true
            },
            {
                "title": "Franz Wittman",
                "answer": false
            },
            {
                "title": "Ayrton Senna",
                "answer": true
            }
        ]
    },
    {
        "id": 1007,
        "question": "Är en film i regi av Steven Spielberg",
        "answers": [
            {
                "title": "Lincoln",
                "answer": true
            },
            {
                "title": "Flickan från ovan",
                "answer": false
            },
            {
                "title": "King Kong",
                "answer": false
            },
            {
                "title": "Apollo 13",
                "answer": false
            },
            {
                "title": "Purpurfärgen",
                "answer": true
            },
            {
                "title": "Hajen",
                "answer": true
            },
            {
                "title": "The Terminal",
                "answer": true
            },
            {
                "title": "Amistad",
                "answer": true
            },
            {
                "title": "Minority Report",
                "answer": true
            },
            {
                "title": "Apornas Planet",
                "answer": false
            }
        ]
    },
    {
        "id": 1005,
        "question": "Årtiondet när denna mobil gavs ut",
        "answers": [
            {
                "title": "Motorola StarTAC",
                "answer": "1990-talet"
            },
            {
                "title": "Apple iPhone 3G",
                "answer": "2000-talet"
            },
            {
                "title": "Nokia 9000",
                "answer": "1990-talet"
            },
            {
                "title": "Samsung Galaxy S",
                "answer": "2010-talet"
            },
            {
                "title": "Apple iPhone 4GS",
                "answer": "2010-talet"
            },
            {
                "title": "LG Chocolate",
                "answer": "2000-talet"
            },
            {
                "title": "Siemens S10",
                "answer": "1990-talet"
            },
            {
                "title": "Nokia 3210",
                "answer": "1990-talet"
            },
            {
                "title": "Nokia 808 Pureview",
                "answer": "2010-talet"
            },
            {
                "title": "Motorola DynaTAC 8000X",
                "answer": "1970-talet"
            }
        ]
    },
    {
        "id": 9,
        "question": "I vilket land finns...",
        "answers": [
            {
                "title": "Lutande tornet i Pisa",
                "answer": "Italien"
            },
            {
                "title": "Akropolis",
                "answer": "Grekland"
            },
            {
                "title": "Gizaplatån",
                "answer": "Egypten"
            },
            {
                "title": "Chichén Itzá",
                "answer": "Mexiko"
            },
            {
                "title": "Förbjudna Staden",
                "answer": "Kina"
            },
            {
                "title": "Uluru",
                "answer": "Australien"
            },
            {
                "title": "Montmartre",
                "answer": "Frankrike"
            },
            {
                "title": "Taj Mahal",
                "answer": "Indien"
            },
            {
                "title": "Stonehenge",
                "answer": "Storbritannien"
            },
            {
                "title": "Angkor Wat",
                "answer": "Kamnodja"
            }
        ]
    },
    {
        "id": 2016,
        "question": "Vilken sport är personen känd för?",
        "answers": [
            {
                "title": "Peter Vanky",
                "answer": "Fäktning"
            },
            {
                "title": "George Scott",
                "answer": "Boxning"
            },
            {
                "title": "Patrik Sjöberg",
                "answer": "Höjdhopp"
            },
            {
                "title": "Ljubomir Vranjes",
                "answer": "Handboll"
            },
            {
                "title": "Ulf Sterner",
                "answer": "Ishockey"
            },
            {
                "title": "Alexander Isak",
                "answer": "Fotboll"
            },
            {
                "title": "Emil 'HeatoN' Christensen",
                "answer": "Counter Strike"
            },
            {
                "title": "Håkan Calqvist",
                "answer": "Motocross"
            },
            {
                "title": "Anders Gärderud",
                "answer": "Löpning"
            },
            {
                "title": "Stellan Bengtsson",
                "answer": "Pingis"
            }
        ]
    },
    {
        "id": 2012,
        "question": "Vad står förkortningen för?",
        "answers": [
            {
                "title": "c:a",
                "answer": "cirka"
            },
            {
                "title": "irl",
                "answer": "In real life"
            },
            {
                "title": "m.a.o.",
                "answer": "med andra ord"
            },
            {
                "title": "CD",
                "answer": "Compact Disc"
            },
            {
                "title": "OMG",
                "answer": "Oh My God"
            },
            {
                "title": "mvh",
                "answer": "Med vänlig hälsning"
            },
            {
                "title": "LOL",
                "answer": "Laughing Out Loud"
            },
            {
                "title": "USB",
                "answer": "Universal Serial Bus"
            },
            {
                "title": "BBQ",
                "answer": "Barbecue"
            },
            {
                "title": "A.D",
                "answer": "Anno Domini"
            }
        ]
    },
    {
        "id": 1019,
        "question": "Vilket nummer har filmen i filmserien?",
        "answers": [
            {
                "title": "The Fast and the Furious: Tokyo Drift",
                "answer": 3
            },
            {
                "title": "Shrek: Nu och för alltid",
                "answer": 4
            },
            {
                "title": "Rambo: Last Blood",
                "answer": 5
            },
            {
                "title": "Terminator: Domedagen",
                "answer": 2
            },
            {
                "title": "Mission Impossible: Rouge Nation",
                "answer": 5
            },
            {
                "title": "Harry Potter och Fenixorden",
                "answer": 4
            },
            {
                "title": "Indiana Jones: De fördömdas tempel",
                "answer": 2
            },
            {
                "title": "Mad Max: Fury Road",
                "answer": 4
            },
            {
                "title": "Hungerspelen: Fatta Eld",
                "answer": 2
            },
            {
                "title": "Jurassic Park: Jurrasic World",
                "answer": 4
            }
        ]
    },
    {
        "id": 1015,
        "question": "Vad står spelspråksförkortningen för?",
        "answers": [
            {
                "title": "FTW",
                "answer": "For the Win"
            },
            {
                "title": "WP",
                "answer": "Well Played"
            },
            {
                "title": "GTG",
                "answer": "Good to Go"
            },
            {
                "title": "BRB",
                "answer": "Be Right Back"
            },
            {
                "title": "n00b",
                "answer": "newbie"
            },
            {
                "title": "GG",
                "answer": "Good Game"
            },
            {
                "title": "AFK",
                "answer": "Away from Keyboard"
            },
            {
                "title": "FPS",
                "answer": "First Person Shooter"
            },
            {
                "title": "OMW",
                "answer": "On My Way"
            },
            {
                "title": "XP",
                "answer": "Experience Points"
            }
        ]
    },
    {
        "id": 1001,
        "question": "För vilken konsol utgavs spelet med ensamrätt?",
        "answers": [
            {
                "title": "Fire Emblem Warriors",
                "answer": "Switch"
            },
            {
                "title": "Halo",
                "answer": "X-Box"
            },
            {
                "title": "God of War",
                "answer": "Playstation"
            },
            {
                "title": "Fast RMX",
                "answer": "Switch"
            },
            {
                "title": "The Last of Us",
                "answer": "Playstation"
            },
            {
                "title": "Uncharted",
                "answer": "Playstation"
            },
            {
                "title": "Fable",
                "answer": "X-Box"
            },
            {
                "title": "The Last Guardian",
                "answer": "Playstation"
            },
            {
                "title": "Grabbed by the Ghoulies",
                "answer": "X-Box"
            },
            {
                "title": "Xenoblade Chronicles",
                "answer": "Wii"
            }
        ]
    },
    {
        "id": 16,
        "question": "I vilket land ligger nationalparken?",
        "answers": [
            {
                "title": "Iguazù",
                "answer": "Argentina"
            },
            {
                "title": "Banff",
                "answer": "Kanada"
            },
            {
                "title": "Canaima",
                "answer": "Venezuela"
            },
            {
                "title": "Sagarmatha",
                "answer": "Nepal"
            },
            {
                "title": "Torres del Paine",
                "answer": "Chile"
            },
            {
                "title": "Galápagos",
                "answer": "Ecuador"
            },
            {
                "title": "Serengeti",
                "answer": "Tanzania"
            },
            {
                "title": "Yellowstone",
                "answer": "USA"
            },
            {
                "title": "Tikal",
                "answer": "Guatemala"
            },
            {
                "title": "Fiordland",
                "answer": "Nya Zeeland"
            }
        ]
    },
    {
        "id": 1003,
        "question": "En roll figur i vilket dataspel?",
        "answers": [
            {
                "title": "Master Chief",
                "answer": "Halo"
            },
            {
                "title": "Big Daddy",
                "answer": "Devilshock"
            },
            {
                "title": "Niko Bellic",
                "answer": "GTA IV"
            },
            {
                "title": "Kratos",
                "answer": "God of War"
            },
            {
                "title": "Nathan Drake",
                "answer": "Uncharted"
            },
            {
                "title": "Agent 47",
                "answer": "Hitman"
            },
            {
                "title": "Dante",
                "answer": "Devil May Cry"
            },
            {
                "title": "Lara Croft",
                "answer": "Tomb Raider"
            },
            {
                "title": "Sam Fisher",
                "answer": "Splinter Cell"
            },
            {
                "title": "Alyx Vance",
                "answer": "Half-Life 2"
            }
        ]
    },
    {
        "id": 1016,
        "question": "Är en dataspelserie som har funnits sedan 80-talet",
        "answers": [
            {
                "title": "Tomb Raider",
                "answer": false
            },
            {
                "title": "Pac-Man",
                "answer": true
            },
            {
                "title": "Driver",
                "answer": false
            },
            {
                "title": "Tekken",
                "answer": false
            },
            {
                "title": "Tetris",
                "answer": true
            },
            {
                "title": "Q*bert",
                "answer": true
            },
            {
                "title": "Super Mario Bros.",
                "answer": true
            },
            {
                "title": "Tony Hawks's Pro Skater",
                "answer": false
            },
            {
                "title": "Donkey Kong",
                "answer": true
            },
            {
                "title": "Frogger",
                "answer": true
            }
        ]
    },
    {
        "id": 19,
        "question": "Har tilldelats en Oscar för bästa film",
        "answers": [
            {
                "title": "Gudfadern del II",
                "answer": true
            },
            {
                "title": "Gudfadern",
                "answer": true
            },
            {
                "title": "Chinatown",
                "answer": false
            },
            {
                "title": "Hamlet",
                "answer": true
            },
            {
                "title": "Gladiator",
                "answer": true
            },
            {
                "title": "Lawrence of Arabia",
                "answer": true
            },
            {
                "title": "Ben-Hur",
                "answer": true
            },
            {
                "title": "Troja",
                "answer": false
            },
            {
                "title": "Braveheart",
                "answer": true
            },
            {
                "title": "Annie Hall",
                "answer": true
            }
        ]
    },
    {
        "id": 1026,
        "question": "Ordna spelkonsolerna enligt utgivningsdatum (i EU; 1=tidigast)",
        "answers": [
            {
                "title": "Playstation",
                "answer": 3
            },
            {
                "title": "NES",
                "answer": 1
            },
            {
                "title": "Playstation 4",
                "answer": 9
            },
            {
                "title": "Wii U",
                "answer": 8
            },
            {
                "title": "N64",
                "answer": 4
            },
            {
                "title": "SNES",
                "answer": 2
            },
            {
                "title": "Xbox One S",
                "answer": 10
            },
            {
                "title": "Xbox 360 (Orginal)",
                "answer": 6
            },
            {
                "title": "Wii",
                "answer": 7
            },
            {
                "title": "Playstation 2",
                "answer": 5
            }
        ]
    },
    {
        "id": 1018,
        "question": "En skurk i vilken Disney-film?",
        "answers": [
            {
                "title": "Pleakly",
                "answer": "Lilo & Stitch"
            },
            {
                "title": "Shan Yu",
                "answer": "Mulan"
            },
            {
                "title": "Cruella de Vil",
                "answer": "101 dalmatiner"
            },
            {
                "title": "Edgar",
                "answer": "Aristocats"
            },
            {
                "title": "Madame Medusa",
                "answer": "Bernard och Bianca"
            },
            {
                "title": "Shere Khan",
                "answer": "Djungelboken"
            },
            {
                "title": "Scar",
                "answer": "Lejonkungen"
            },
            {
                "title": "Claude Frollo",
                "answer": "Ringaren i Notre Dame"
            },
            {
                "title": "Jafar",
                "answer": "Aladdin"
            },
            {
                "title": "Madame Mim",
                "answer": "Svärdet i stenen"
            }
        ]
    },
    {
        "id": 1002,
        "question": "(Varit) Gifta med varandra, syskon eller förälder och barn?",
        "answers": [
            {
                "title": "Eric & Kitty Forman",
                "answer": "Förälder & Barn"
            },
            {
                "title": "Jake & Elwood Blues",
                "answer": "Syskon"
            },
            {
                "title": "Roger Rabbit & Jessica",
                "answer": "Gifta"
            },
            {
                "title": "Shirley MacLaine & Warren Beatty",
                "answer": "Syskon"
            },
            {
                "title": "Jake & Maggie Gyllenhaal",
                "answer": "Syskon"
            },
            {
                "title": "Johnny Depp & Vanessa Paradise",
                "answer": "Gifta"
            },
            {
                "title": "Jeff & Beau Bridges",
                "answer": "Syskon"
            },
            {
                "title": "Rooney & Kate Mara",
                "answer": "Syskon"
            },
            {
                "title": "Jaden & Willow Smith",
                "answer": "Syskon"
            },
            {
                "title": "Elvis & Priscilla Presley",
                "answer": "Gifta"
            }
        ]
    },
    {
        "id": 20,
        "question": "Mineraler i ordning efter hårdhet (1=mjukast)",
        "answers": [
            {
                "title": "Fältspat",
                "answer": 6
            },
            {
                "title": "Diamant",
                "answer": 10
            },
            {
                "title": "Fluorit",
                "answer": 4
            },
            {
                "title": "Korund",
                "answer": 9
            },
            {
                "title": "Kvarts",
                "answer": 7
            },
            {
                "title": "Kalcit",
                "answer": 3
            },
            {
                "title": "Talk",
                "answer": 1
            },
            {
                "title": "Topas",
                "answer": 8
            },
            {
                "title": "Apatit",
                "answer": 5
            },
            {
                "title": "Gips",
                "answer": 2
            }
        ]
    },
    {
        "id": 24,
        "question": "Från vilket land kommer bilmärket?",
        "answers": [
            {
                "title": "Kia",
                "answer": "Sydkorea"
            },
            {
                "title": "Tata",
                "answer": "Indien"
            },
            {
                "title": "Skoda",
                "answer": "Tjeckien"
            },
            {
                "title": "Dacia",
                "answer": "Rumänien"
            },
            {
                "title": "Smart",
                "answer": "Tyskland"
            },
            {
                "title": "SEAT",
                "answer": "Spanien"
            },
            {
                "title": "Nissan",
                "answer": "Japan"
            },
            {
                "title": "Lexus",
                "answer": "Japan"
            },
            {
                "title": "Alfa Romeo",
                "answer": "Italien"
            },
            {
                "title": "Tesla",
                "answer": "USA"
            }
        ]
    },
    {
        "id": 23,
        "question": "Sporter i ordning efter utövarens topphastighet (1=snabbast)",
        "answers": [
            {
                "title": "NASCAR",
                "answer": 2
            },
            {
                "title": "Backhoppning",
                "answer": 6
            },
            {
                "title": "Speed skating (skridskor)",
                "answer": 9
            },
            {
                "title": "Kappsegling",
                "answer": 7
            },
            {
                "title": "Landsvägscykling",
                "answer": 5
            },
            {
                "title": "Speedski",
                "answer": 3
            },
            {
                "title": "Rodel",
                "answer": 4
            },
            {
                "title": "Längdskidåkning",
                "answer": 8
            },
            {
                "title": "Sprintlöpning",
                "answer": 10
            },
            {
                "title": "Formel 1",
                "answer": 1
            }
        ]
    },
    {
        "id": 26,
        "question": "Vems konstverk?",
        "answers": [
            {
                "title": "Näckrosor",
                "answer": "Claude Monet"
            },
            {
                "title": "Skriet",
                "answer": "Edvard Munch"
            },
            {
                "title": "Räv i vinterlandskap",
                "answer": "Bruno Liljefors"
            },
            {
                "title": "Nattvarden",
                "answer": "Leonardo Da Vinci"
            },
            {
                "title": "Starry Night / Stjärnenatt",
                "answer": "Vincent van Gogh"
            },
            {
                "title": "En premiär",
                "answer": "Andern Zorn"
            },
            {
                "title": "The Night Watch / Nattvakten",
                "answer": "Rembrandt"
            },
            {
                "title": "Midvinterblot",
                "answer": "Carl Larsson"
            },
            {
                "title": "Guernica",
                "answer": "Pablo Picasso"
            },
            {
                "title": "Campbells soppburkar",
                "answer": "Andy Warhol"
            }
        ]
    },
    {
        "id": 17,
        "question": "Efternamnet på dessa berömda syskon",
        "answers": [
            {
                "title": "Venus & Serena",
                "answer": "Williams"
            },
            {
                "title": "Wilbur & Orville",
                "answer": "Wright"
            },
            {
                "title": "Mary-Kate & Ashley",
                "answer": "Olsen"
            },
            {
                "title": "Dakota & Elle",
                "answer": "Fanning"
            },
            {
                "title": "John F., Robert, Ted",
                "answer": "Kennedy"
            },
            {
                "title": "Alec, Daniel, William, Stephen",
                "answer": "Baldwin"
            },
            {
                "title": "Nick & Aaron",
                "answer": "Carter"
            },
            {
                "title": "Ben & Casey",
                "answer": "Affleck"
            },
            {
                "title": "Ralph & Joseph",
                "answer": "Fiennes"
            },
            {
                "title": "Jane & Peter",
                "answer": "Fonda"
            }
        ]
    },
    {
        "id": 27,
        "question": "En av världens tio största öar",
        "answers": [
            {
                "title": "Kuba",
                "answer": false
            },
            {
                "title": "Sachalin",
                "answer": false
            },
            {
                "title": "Honshu",
                "answer": true
            },
            {
                "title": "Australien",
                "answer": false
            },
            {
                "title": "Madagaskar",
                "answer": true
            },
            {
                "title": "Storbritannien",
                "answer": true
            },
            {
                "title": "Victoriaön",
                "answer": true
            },
            {
                "title": "Borneo",
                "answer": true
            },
            {
                "title": "Grönland",
                "answer": true
            },
            {
                "title": "Java",
                "answer": false
            }
        ]
    },
    {
        "id": 18,
        "question": "Vilken sport är klubben mest känd för?",
        "answers": [
            {
                "title": "Carlstad Crusaders",
                "answer": "Amerikansk Fotboll"
            },
            {
                "title": "Miami Heat",
                "answer": "Basket"
            },
            {
                "title": "West Ham United",
                "answer": "Fotboll"
            },
            {
                "title": "Edmonton Oilers",
                "answer": "Ishockey"
            },
            {
                "title": "Chicago Cubs",
                "answer": "Baseball"
            },
            {
                "title": "Jönköping Södra",
                "answer": "Fotboll"
            },
            {
                "title": "Leicester Tigers",
                "answer": "Rugby"
            },
            {
                "title": "Redbergslids IK",
                "answer": "Handboll"
            },
            {
                "title": "Schalke 04",
                "answer": "Fotboll"
            },
            {
                "title": "HV71",
                "answer": "Ishockey"
            }
        ]
    }
];