

export const KEYS = ['t.deposit', 't.make', 't.payment', 't.withdraw', 't.profile', 'error.', 'payment.error', 'payment.validation', 't.limits', 't.total', 't.apply',
                     't.identifier', 't.securityCode', 't.cashbox']


// /\w+(\.\w+){2,}/

export const AllRightData = {
    url: 'https://allrightcasino.com',

    lang: ['en', 'ru', 'de', 'es', 'pl', 'no', 'pt', 'fi', 'ja', 'sv', 'fr', 'tr'],

    providers: {
        EUR: ["1x2gaming", "2by2", "3oaksgaming", "agtsoftware", "alchemygaming", "all41studios", "aurumsignaturestudios", "aviatrix", "apparat", "b2t", "barbarabang", "belatra", "betgamestv", "betsoft", "bigtimegaming", "booming", "buckstakesentertainment", "caletagaming", "champion", "chilligames", "crazytoothstudio", "cyberslots", "eagames", "elcasino", "electricelephant", "enjoygaming", "evoplay", "eyecon", "fortunefactorystudios", "four7", "foxium", "fugaso", "gachastudios", "gameburgerstudios", "gamevy", "gamzix", "genesisgaming", "goldcoinstudios", "goldenrace", "goldenrockstudios", "gonggaming", "halfpixelstudios", "igrosoft", "infinitydragonstudios", "inogames", "jftw", "kagaming", "kalambagames", "lightningboxgames", "live5", "mancalagaming", "matrixgames", "mga", "microgaming", "naileditgames", "nekogames", "neonvalleystudios", "netgameentertainment", "northernlightsgaming", "oldskool", "orosgaming", "pearfiction", "pgsoft", "platipus", "playbro", "playson", "pulse8", "rabcat", "realdealerstudios", "realisticgames", "redtigergr", "rubyplay", "skillzzgaming", "slingshotstudios", "snowbornstudios", "spinmatic", "spinplaygames", "spribe", "stormcraftstudios", "stormgaming", "summus", "superspade", "switchstudios", "synot", "thunderspin", "tpg", "tripleedgestudios", "turbogames", "tvbet", "vibragaming", "wazdan", "yggdrasil", "aux", "bpg", "btl", "ds", "elk", "fng", "hab", "hak", "ids", "kir", "ll", "mav", "mnp", "mob", "omi", "ot", "pp", "rlg", "rtg", "shs", "sm", "spr", "amatic", "amigogaming", "betsolutions", "casinotechnology", "charismatic", "conceptgaming", "dlv", "endorphina", "elbet", "espressogames", "evolution", "lottoinstantwin", "macawgaming", "redrake", "revolvergaming", "skilrock", "smartsoft", "tomhorn", "triplecherry", "truelab", "aesexybaccarat", "apollo", "asiagaming", "amatic", "atmosfera", "amusnet", "authenticgaming", "bluehorn", "cq9", "edict", "evolution", "ezugi", "gamomatgames", "genii", "hogaming", "isoftbet", "medialive", "livegames", "luckystreak", "mascotgaming", "merkurgaming", "netentoss", "nolimitcity", "novomatic", "orientalgame", "pariplay", "patagonia", "playngo", "playtechcasinogames", "pragmaticplay", "pragmaticplaylive", "reevogames", "spadegaming", "Spinthon", "stakelogic", "vivogaming", "worldmatch", "xprogaming", "yggdrasil", "1spin4win", "alg", "Fazi", "gameart", "gamebeat", "highfive", "mplay", "mrslotty", "nucleus", "onlyplay", "Oryx", "popiplay", "pushgaming", "quickspin", "relax", "skywind", "softswiss", "spinza", "swintt", "thunderkick", "betixon", "bfgames", "leapgaming", "noble", "retrogames", "spinomenal"],
        EURf: ["genesisgaming", "redtigergr", "stormgaming", "yggdrasil", "fng", "mav", "authenticgaming", "bluehorn", "edict", "gamomatgames", "isoftbet", "netentoss", "playtechcasinogames", "stakelogic", "yggdrasil", "softswiss"],
        PLN: ["1x2gaming", "2by2", "3oaksgaming", "agtsoftware", "alchemygaming", "all41studios", "aurumsignaturestudios", "aviatrix", "apparat", "b2t", "barbarabang", "belatra", "betgamestv", "betsoft", "bigtimegaming", "booming", "buckstakesentertainment", "caletagaming", "champion", "crazytoothstudio", "cyberslots", "eagames", "elcasino", "electricelephant", "enjoygaming", "evoplay", "eyecon", "fortunefactorystudios", "foxium", "fugaso", "gachastudios", "gameburgerstudios", "gamevy", "gamzix", "genesisgaming", "goldcoinstudios", "goldenrace", "goldenrockstudios", "gonggaming", "halfpixelstudios", "igrosoft", "infinitydragonstudios", "inogames", "jftw", "kagaming", "kalambagames", "lightningboxgames", "live5", "mancalagaming", "matrixgames", "mga", "microgaming", "naileditgames", "nekogames", "neonvalleystudios", "netgameentertainment", "northernlightsgaming", "oldskool", "orosgaming", "pearfiction", "pgsoft", "platipus", "playbro", "playson", "pulse8", "realdealerstudios", "realisticgames", "redtigergr", "rubyplay", "skillzzgaming", "slingshotstudios", "snowbornstudios", "spinmatic", "spinplaygames", "spribe", "stormcraftstudios", "stormgaming", "summus", "superspade", "switchstudios", "synot", "thunderspin", "tpg", "tripleedgestudios", "turbogames", "tvbet", "vibragaming", "wazdan", "yggdrasil", "aux", "bpg", "btl", "ds", "elk", "fng", "hab", "hak", "ids", "kir", "mav", "mnp", "omi", "ot", "pp", "rtg", "shs", "sm", "amatic", "amigogaming", "casinotechnology", "charismatic", "conceptgaming", "dlv", "endorphina", "elbet", "espressogames", "evolution", "lottoinstantwin", "macawgaming", "redrake", "revolvergaming", "skilrock", "smartsoft", "tomhorn", "triplecherry", "truelab", "apollo", "amatic", "authenticgaming", "bluehorn", "cq9", "edict", "evolution", "ezugi", "gamomatgames", "genii", "hogaming", "isoftbet", "medialive", "livegames", "luckystreak", "mascotgaming", "merkurgaming", "netentoss", "nolimitcity", "novomatic", "pariplay", "patagonia", "playngo", "playtechcasinogames", "pragmaticplay", "pragmaticplaylive", "reevogames", "spadegaming", "Spinthon", "stakelogic", "vivogaming", "worldmatch", "xprogaming", "yggdrasil", "1spin4win", "alg", "Fazi", "gameart", "gamebeat", "highfive", "mplay", "mrslotty", "nucleus", "onlyplay", "Oryx", "popiplay", "quickspin", "relax", "skywind", "softswiss", "swintt", "thunderkick", "betixon", "bfgames", "leapgaming", "noble", "retrogames", "spinomenal"],
        PLNf: ["3oaksgaming", "barbarabang", "booming", "eyecon", "genesisgaming", "matrixgames", "redtigergr", "stormgaming", "superspade", "yggdrasil", "btl", "fng", "mav", "shs", "charismatic", "lottoinstantwin", "authenticgaming", "bluehorn", "edict:", "ezugi", "gamomatgames", "isoftbet", "livegames", "netentoss", "nolimitcity", "playtechcasinogames", "pragmaticplay", "pragmaticplaylive", "stakelogic", "xprogaming", "yggdrasil", "quickspin", "skywind", "softswiss"],
        UZS: ["1x2gaming", "2by2", "3oaksgaming", "agtsoftware", "alchemygaming", "all41studios", "aurumsignaturestudios", "aviatrix", "apparat", "b2t", "barbarabang", "belatra", "betgamestv", "betsoft", "bigtimegaming", "booming", "buckstakesentertainment", "caletagaming", "champion", "crazytoothstudio", "cyberslots", "eagames", "elcasino", "electricelephant", "enjoygaming", "evoplay", "fortunefactorystudios", "foxium", "fugaso", "gachastudios", "gameburgerstudios", "gamzix", "genesisgaming", "goldcoinstudios", "goldenrace", "goldenrockstudios", "gonggaming", "halfpixelstudios", "igrosoft", "infinitydragonstudios", "inogames", "jftw", "kagaming", "kalambagames", "lightningboxgames", "live5", "mancalagaming", "matrixgames", "mga", "microgaming", "naileditgames", "nekogames", "neonvalleystudios", "netgameentertainment", "northernlightsgaming", "oldskool", "orosgaming", "pearfiction", "pgsoft", "platipus", "playbro", "playson", "pulse8", "realdealerstudios", "realisticgames", "redtigergr", "rubyplay", "skillzzgaming", "slingshotstudios", "snowbornstudios", "spinmatic", "spinplaygames", "spribe", "stormcraftstudios", "stormgaming", "switchstudios", "synot", "thunderspin", "tpg", "tripleedgestudios", "turbogames", "tvbet", "vibragaming", "wazdan", "aux", "bpg", "btl", "ds", "fng", "hab", "hak", "ids", "kir", "mav", "mnp", "ot", "pp", "shs", "sm", "ygg", "amigogaming", "casinotechnology", "conceptgaming", "dlv", "elbet", "espressogames", "evolution", "macawgaming", "redrake", "revolvergaming", "skilrock", "smartsoft", "tomhorn", "triplecherry", "truelab", "apollo", "amatic", "atmosfera", "authenticgaming", "bluehorn", "edict", "evolution", "ezugi", "gamomatgames", "hogaming", "isoftbet", "medialive", "livegames", "luckystreak", "mascotgaming", "merkurgaming", "netentoss", "nolimitcity", "novomatic", "orientalgame", "pariplay", "patagonia", "playngo", "pragmaticplay", "pragmaticplaylive", "reevogames", "Spinthon", "stakelogic", "vivogaming", "worldmatch", "yggdrasil", "1spin4win", "alg", "Fazi", "gameart", "gamebeat", "mplay", "mrslotty", "onlyplay", "Oryx", "popiplay", "pushgaming", "quickspin", "relax", "softswiss", "swintt", "thunderkick", "betixon", "bfgames", "leapgaming", "noble", "retrogames", "spinomenal"],
        USD: ["1x2gaming", "2by2", "3oaksgaming", "agtsoftware", "alchemygaming", "all41studios", "aurumsignaturestudios", "aviatrix", "apparat", "b2t", "barbarabang", "belatra", "betgamestv", "betsoft", "bigtimegaming", "booming", "buckstakesentertainment", "caletagaming", "champion", "chilligames", "crazytoothstudio", "cyberslots", "eagames", "elcasino", "electricelephant", "enjoygaming", "evoplay", "eyecon", "fortunefactorystudios", "four7", "foxium", "fugaso", "gachastudios", "gameburgerstudios", "gamevy", "gamzix", "genesisgaming", "goldcoinstudios", "goldenrace", "goldenrockstudios", "gonggaming", "halfpixelstudios", "igrosoft", "infinitydragonstudios", "inogames", "jftw", "kagaming", "kalambagames", "lightningboxgames", "live5", "mancalagaming", "matrixgames", "mga", "microgaming", "naileditgames", "nekogames", "neonvalleystudios", "netgameentertainment", "northernlightsgaming", "oldskool", "orosgaming", "pearfiction", "pgsoft", "platipus", "playbro", "playson", "pulse8", "realdealerstudios", "realisticgames", "redtigergr", "rubyplay", "skillzzgaming", "slingshotstudios", "snowbornstudios", "spinmatic", "spinplaygames", "spribe", "stormcraftstudios", "stormgaming", "summus", "superspade", "switchstudios", "synot", "thunderspin", "tpg", "tripleedgestudios", "turbogames", "tvbet", "vibragaming", "wazdan", "yggdrasil", "aux", "bpg", "btl", "ds", "elk", "evo", "fng", "hab", "hak", "ids", "kir", "mav", "mnp", "omi", "ot", "pp", "rlg", "rtg", "shs", "sm", "amatic", "amigogaming", "betsolutions", "casinotechnology", "charismatic", "conceptgaming", "dlv", "endorphina", "elbet", "espressogames", "evolution", "lottoinstantwin", "macawgaming", "redrake", "revolvergaming", "skilrock", "smartsoft", "tomhorn", "triplecherry", "truelab", "aesexybaccarat", "apollo", "asiagaming", "amatic", "atmosfera", "authenticgaming", "bluehorn", "cq9", "edict", "evolution", "ezugi", "gamomatgames", "genii", "hogaming", "isoftbet", "medialive", "livegames", "luckystreak", "mascotgaming", "merkurgaming", "netentoss", "nolimitcity", "novomatic", "orientalgame", "pariplay", "patagonia", "playngo", "playtechcasinogames", "pragmaticplay", "pragmaticplaylive", "reevogames", "spadegaming", "Spinthon", "stakelogic", "vivogaming", "worldmatch", "xprogaming", "yggdrasil", "1spin4win", "alg", "Fazi", "gameart", "gamebeat", "highfive", "mplay", "mrslotty", "nucleus", "onlyplay", "Oryx", "popiplay", "pushgaming", "quickspin", "relax", "skywind", "softswiss", "spinza", "swintt", "thunderkick", "betixon", "bfgames", "leapgaming", "noble", "retrogames", "spinomenal"],
    },

    currency: 
    ['EUR', 'PLN', 'UAH', 
    'UZS', 'USD', 'RUB', 
    'ARS', 'MXN', 'PEN', 
    'CLP', 'ZAR', 'NOK', 
    'BRL', 'CAD', 'AUD', 
    'CHF', 'NZD', 'INR', 
    'JPY', 'AZN', 'KZT', 
    'GEL'
    ],

    login:
    [
        'cypress_test_eur@gmail.com', 'cypress_test_pln@gmail.com', 'cypress_test_uah@gmail.com',
        'cypress_test_uzs@gmail.com', 'cypress_test_uzd@gmail.com', 'cypress_test_rub@gmail.com',
        'cypress_test_ars@gmail.com', 'cypress_test_mxn@gmail.com', 'cypress_test_pen@gmail.com',
        'cypress_test_clp@gmail.com', 'cypress_test_zar@gmail.com', 'cypress_test_nok@gmail.com',
        'cypress_test_brl@gmail.com', 'cypress_test_cad@gmail.com', 'cypress_test_aud@gmail.com',
        'cypress_test_chf@gmail.com', 'cypress_test_nzd@gmail.com', 'cypress_test_inr@gmail.com',
        'cypress_test_jpy@gmail.com', 'cypress_test_azn@gmail.com', 'cypress_test_kzt@gmail.com',
        'cypress_test_gel@gmail.com'

    ],
    
    emails: 
    ['v.pupkin.eur@gmail.com', 'v.pupkin.pln@gmail.com', 'v.pupkin.uah@gmail.com', 
    'v.pupkin.uzs@gmail.com', 'v.pupkinn.usd@gmail.com', 'v.pupkin.rub@outlook.com', 
    'v.pupkin.ars@outlook.com', 'v.pupkin.mxn@outlook.com', 'v.pupkin.pen@outlook.com', 
    'v.pupkin.clp@outlook.com', 'v.pupkin.zar@outlook.com', 'v.pupkin.nok@outlook.com', 
    'v.pupkin.brl@outlook.com', 'v.pupkin.cad@outlook.com', 'v.pupkin.aud@outlook.com', 
    'v.pupkin.chf@outlook.com', 'v.pupkin.nzd@gmail.com', 'v.pupkin.inr@gmail.com', 
    'v.pupkin.jpy@gmail.com', 'v.pupkin.azn@gmail.com', 'v.pupkin.kzt@gmail.com', 
    'v.pupkin.gel@gmail.com'],

    passwords: 
    ['JTFN3W9JM4', 'ePXzdyIeZH', 'P6QMU1BdQF', 
    'MLlXgF3SN6', 'Vrp8VKMaiG', 'Ycr9HyqSgp', 
    'cCX4W6opNh', 'ktFTixdjC2', 'AUQjkseWfb', 
    'Xw7olloTWC', 'FEcG0t0TGJ', 'jdQ4ifwurz', 
    'MrQ14AGSJ5', 'gP9VPACbeM', 'xvMOxpzTgf', 
    'jr2mlttDhP', 'f9E99Jz9bP', 'pekZiFuf5N', 
    'GSFzx8Oxo5', 'FotPkD2grg', 'pekZiFuf5N', 
    '$ncUy@cwFuF3.yT']
}

export const testData = {
    currency: ['ars'],
   

    login: ['cypress_test_ars@gmail.com']
}

export const LuckyBirdData = {
    url: 'https://luckybirdcasino.com',

    lang: ['en', 'ru', 'de', 'es', 'pl', 'no', 'pt', 'fi', 'tr'],

    currency: 
    ['EUR', 'PLN', 'USD',
    'ARS', 'TRY', 'RUB', 
    'KZT', 'MXN', 'PEN',
    'CLP', 'ZAR', 'NOK', 
    'BRL', 'CAD', 'AUD', 
    'CHF', 'NZD', 'INR', 
    'JPY'
    ],

    login:
    [
        'cypress_test_eur@gmail.com', 'cypress_test_pln@gmail.com', 'cypress_test_usd@gmail.com',
        'cypress_test_ars@gmail.com', 'cypress_test_try@gmail.com', 'cypress_test_rub@gmail.com',
        'cypress_test_kzt@gmail.com', 'cypress_test_mxn@gmail.com', 'cypress_test_pen@gmail.com',
       'cypress_test_clp@gmail.com', 'cypress_test_zar@gmail.com', 'cypress_test_nok@gmail.com',
        'cypress_test_brl@gmail.com', 'cypress_test_cad@gmail.com', 'cypress_test_aud@gmail.com',
        'cypress_test_chf@gmail.com', 'cypress_test_nzd@gmail.com', 'cypress_test_inr@gmail.com',
        'cypress_test_jpy@gmail.com'

    ],
    


    emails: 
    ['v.pupkin.eur@gmail.com', 'v.pupkin.pln@gmail.com', 'v.pupkinn.usd@gmail.com',
    'v.pupkin.ars@outlook.com', 'v.pupkinn.usd@gmail.com', 'v.pupkin.rub@outlook.com', 
    'v.pupkin.kzt@gmail.com', 'v.pupkin.mxn@outlook.com', 'v.pupkin.pen@outlook.com',
    'v.pupkin.clp@outlook.com', 'v.pupkin.zar@outlook.com', 'v.pupkin.nok@outlook.com',
    'v.pupkin.brl@outlook.com', 'v.pupkin.cad@outlook.com', 'v.pupkin.aud@outlook.com', 
    'v.pupkin.chf@outlook.com', 'v.pupkin.nzd@gmail.com', 'v.pupkin.inr@gmail.com', 
    'v.pupkin.jpy@gmail.com'
    ],
    passwords:
    ['JTFN3W9JM4', 'ePXzdyIeZH', 'Vrp8VKMaiG',
    'cCX4W6opNh', 'Vrp8VKMaiG', 'Ycr9HyqSgp', 
    'pekZiFuf5N', 'ktFTixdjC2', 'AUQjkseWfb', 
    'Xw7olloTWC', 'FEcG0t0TGJ', 'jdQ4ifwurz', 
    'MrQ14AGSJ5', 'gP9VPACbeM', 'xvMOxpzTgf', 
    'jr2mlttDhP', 'f9E99Jz9bP', 'pekZiFuf5N', 
    'GSFzx8Oxo5'
    ]

}

export const SlotticaData = {
    url: 'https://slottica.com',

    lang: [
    'en', 'ru', 'de',  'es', 'pl', 'pt', 'fi', 'no', 
    'sv', 'ja', 'fr', 'kk', 'hi', 'tr', 'bn', 'az'],

    currency:
    ['EUR', 'PLN', 'UAH', 
    'UZS', 'USD', 'RUB', 
    'ARS', 'MXN', 'PEN', 
    'CLP', 'ZAR', 'NOK', 
    'BRL', 'CAD', 'AUD', 
    'CHF', 'NZD', 'INR', 
    'JPY', 'AZN', 'KZT',
    'TRY'
],


    login: [
        'cypress_test_eur@gmail.com', 'cypress_test_pln@gmail.com', 'cypress_test_uah@gmail.com',
        'cypress_test_uzs@gmail.com', 'cypress_test_usd@gmail.com', 'cypress_test_rub@gmail.com',
        'cypress_test_ars@gmail.com', 'cypress_test_mxn@gmail.com', 'cypress_test_pen@gmail.com',
        'cypress_test_clp@gmail.com', 'cypress_test_zar@gmail.com', 'cypress_test_nok@gmail.com',
        'cypress_test_brl@gmail.com', 'cypress_test_cad@gmail.com', 'cypress_test_aud@gmail.com',
        'cypress_test_chf@gmail.com', 'cypress_test_nzd@gmail.com', 'cypress_test_inr@gmail.com',
        'cypress_test_jpy@gmail.com', 'cypress_test_azn@gmail.com', 'cypress_test_kzt@gmail.com',
       'cypress_test_try@gmail.com'
    ],

    emails:
    ['v.pupkin.eur@gmail.com', 'v.pupkin.pln@gmail.com', 'v.pupkin.uah@gmail.com', 
    'v.pupkin.uzs@gmail.com', 'v.pupkinn.usd@gmail.com', 'v.pupkin.rub@outlook.com', 
    'v.pupkin.ars@outlook.com', 'v.pupkin.mxn@outlook.com', 'v.pupkin.pen@outlook.com', 
    'v.pupkin.clp@outlook.com', 'v.pupkin.zar@outlook.com', 'v.pupkin.nok@outlook.com', 
    'v.pupkin.brl@outlook.com', 'v.pupkin.cad@outlook.com', 'v.pupkin.aud@outlook.com', 
    'v.pupkin.chf@outlook.com',  'v.pupkin.nzd@gmail.com', 'v.pupkin.inr@gmail.com', 
    'v.pupkin.jpy@gmail.com', 'v.pupkin.azn@gmail.com', 'v.pupkin.kzt@gmail.com' ],

    passwords:
    ['JTFN3W9JM4', 'ePXzdyIeZH', 'P6QMU1BdQF', 
    'MLlXgF3SN6', 'Vrp8VKMaiG', 'Ycr9HyqSgp', 
    'cCX4W6opNh', 'ktFTixdjC2', 'AUQjkseWfb', 
    'Xw7olloTWC', 'FEcG0t0TGJ', 'jdQ4ifwurz', 
    'MrQ14AGSJ5', 'gP9VPACbeM', 'xvMOxpzTgf', 
    'jr2mlttDhP', 'f9E99Jz9bP', 'pekZiFuf5N', 
    'GSFzx8Oxo5', 'FotPkD2grg', 'pekZiFuf5N' ]

}

export const SlottyWayData = {
    url: 'https://slottyway.com',

    lang: ['en', 'ru', 'de', 'es', 'pl', 'pt', 'fi', 'no', 'sv', 'tr'],

    currency: 
    ['EUR', 'PLN', 'USD',
    'ARS', 'TRY', 'RUB', 
    'KZT', 'MXN', 'PEN',
    'CLP', 'ZAR', 'NOK', 
    'BRL', 'CAD', 'AUD', 
    'CHF', 'NZD', 'INR', 
    'JPY'
    ],

    login: 
    [
        'cypress_test_eur@gmail.com', 'cypress_test_pln@gmail.com', 'cypress_test_usd@gmail.com',
        'cypress_test_ars@gmail.com', 'cypress_test_try@gmail.com', 'cypress_test_rub2@gmail.com',
        'cypress_test_kzt@gmail.com', 'cypress_test_mxn@gmail.com', 'cypress_test_pen@gmail.com',
        'cypress_test_clp@gmail.com', 'cypress_test_zar@gmail.com', 'cypress_test_nok@gmail.com',
        'cypress_test_brl@gmail.com', 'cypress_test_cad@gmail.com', 'cypress_test_aud@gmail.com',
        'cypress_test_chf@gmail.com', 'cypress_test_nzd@gmail.com', 'cypress_test_inr@gmail.com',
        'cypress_test_jpy@gmail.com'
    ],

    emails:
    ['v.pupkin.eur@gmail.com', 'v.pupkin.pln@gmail.com', 'v.pupkinn.usd@gmail.com',
    'v.pupkin.ars@outlook.com', 'v.pupkinn.usd@gmail.com', 'v.pupkin.rub@outlook.com', 
    'v.pupkin.kzt@gmail.com', 'v.pupkin.mxn@outlook.com', 'v.pupkin.pen@outlook.com',
    'v.pupkin.clp@outlook.com', 'v.pupkin.zar@outlook.com', 'v.pupkin.nok@outlook.com',
    'v.pupkin.brl@outlook.com', 'v.pupkin.cad@outlook.com', 'v.pupkin.aud@outlook.com', 
    'v.pupkin.chf@outlook.com', 'v.pupkin.nzd@gmail.com', 'v.pupkin.inr@gmail.com', 
    'v.pupkin.jpy@gmail.com'
    ],
    passwords:
    ['JTFN3W9JM4', 'ePXzdyIeZH', 'Vrp8VKMaiG',
    'cCX4W6opNh', 'Vrp8VKMaiG', 'Ycr9HyqSgp', 
    'pekZiFuf5N', 'ktFTixdjC2', 'AUQjkseWfb', 
    'Xw7olloTWC', 'FEcG0t0TGJ', 'jdQ4ifwurz', 
    'MrQ14AGSJ5', 'gP9VPACbeM', 'xvMOxpzTgf', 
    'jr2mlttDhP', 'f9E99Jz9bP', 'pekZiFuf5N', 
    'GSFzx8Oxo5'
    ]

}

export const SpinambaData = {
    url: 'https://spinamba.com',

    lang: ['en', 'ru', 'de', 'es', 'pl', 'pt', 'fi', 'no', 'sv', 'tr'],

    currency: 
    ['EUR', 'PLN', 'USD',
   'ARS', 'TRY', 'RUB', 
    'KZT', 'MXN', 'PEN',
    'CLP', 'ZAR', 'NOK', 
    'BRL', 'CAD', 'AUD', 
   'CHF', 'NZD', 'INR', 
    'JPY'
    ],


    login: [
        'cypress_test_eur@gmail.com', 'cypress_test_pln@gmail.com', 'cypress_test_usd@gmail.com',
        'cypress_test_ars@gmail.com', 'cypress_test_try@gmail.com', 'cypress_test_rub@gmail.com',
        'cypress_test_kzt@gmail.com', 'cypress_test_mxn@gmail.com', 'cypress_test_pen@gmail.com',
        'cypress_test_clp@gmail.com', 'cypress_test_zar@gmail.com', 'cypress_test_nok2@gmail.com',
        'cypress_test_brl@gmail.com', 'cypress_test_cad@gmail.com', 'cypress_test_aud@gmail.com',
        'cypress_test_chf@gmail.com', 'cypress_test_nzd@gmail.com', 'cypress_test_inr@gmail.com',
        'cypress_test_jpy@gmail.com'
    ],

    emails:
    ['v.pupkin.eur@gmail.com', 'v.pupkin.pln@gmail.com', 'v.pupkinn.usd@gmail.com',
    'v.pupkin.ars@outlook.com', 'v.pupkinn.usd@gmail.com', 'v.pupkin.rub@outlook.com', 
    'v.pupkin.kzt@gmail.com', 'v.pupkin.mxn@outlook.com', 'v.pupkin.pen@outlook.com',
    'v.pupkin.clp@outlook.com', 'v.pupkin.zar@outlook.com', 'v.pupkin.nok@outlook.com',
    'v.pupkin.brl@outlook.com', 'v.pupkin.cad@outlook.com', 'v.pupkin.aud@outlook.com', 
    'v.pupkin.chf@outlook.com', 'v.pupkin.nzd@gmail.com', 'v.pupkin.inr@gmail.com', 
    'v.pupkin.jpy@gmail.com'
    ],
    passwords:
    ['JTFN3W9JM4', 'ePXzdyIeZH', 'Vrp8VKMaiG',
    'cCX4W6opNh', 'Vrp8VKMaiG', 'Ycr9HyqSgp', 
    'pekZiFuf5N', 'ktFTixdjC2', 'AUQjkseWfb', 
    'Xw7olloTWC', 'FEcG0t0TGJ', 'jdQ4ifwurz', 
    'MrQ14AGSJ5', 'gP9VPACbeM', 'xvMOxpzTgf', 
    'jr2mlttDhP',  'f9E99Jz9bP', 'pekZiFuf5N', 
    'GSFzx8Oxo5'
    ]

}

export const SpinBountyData = {
    url: 'https://spinbounty.com',

    lang: ['en', 'ru', 'pl', 'de', 'fr'],

    currency:
    [
    'EUR', 'PLN', 'UAH', 
    'UZS', 'USD', 'RUB', 
    'ARS', 'MXN', 'PEN', 
    'CLP', 'ZAR', 'NOK', 
    'BRL', 'CAD', 'AUD', 
    'CHF', 'NZD',  'INR', 
    'JPY', 'AZN', 'KZT',
    'TRY'
    ],

    login:
    [
        'cypress_test_eur@gmail.com', 'cypress_test_pln@gmail.com', 'cypress_test_pln@gmail.com',
        'cypress_test_uzs@gmail.com', 'cypress_test_usd@gmail.com', 'cypress_test_rub@gmail.com',
       'cypress_test_ars@gmail.com', 'cypress_test_mxn@gmail.com', 'cypress_test_pen@gmail.com',
        'cypress_test_clp@gmail.com', 'cypress_test_zar@gmail.com', 'cypress_test_nok@gmail.com',
        'cypress_test_brl@gmail.com', 'cypress_test_cad@gmail.com', 'cypress_test_aud@gmail.com',
       'cypress_test_chf@gmail.com', 'cypress_test_nzd@gmail.com', 'cypress_test_inr@gmail.com',
        'cypress_test_jpy@gmail.com', 'cypress_test_azn@gmail.com', 'cypress_test_kzt@gmail.com',
        'cypress_test_try@gmail.com'
    ],

    emails:
    ['v.pupkin.eur@gmail.com', 'v.pupkin.pln@gmail.com', 'v.pupkin.uah@gmail.com', 
    'v.pupkin.uzs@gmail.com', 'v.pupkinn.usd@gmail.com', 'v.pupkin.rub@outlook.com', 
    'v.pupkin.ars@outlook.com', 'v.pupkin.mxn@outlook.com', 'v.pupkin.pen@outlook.com', 
    'v.pupkin.clp@outlook.com', 'v.pupkin.zar@outlook.com', 'v.pupkin.nok@outlook.com', 
    'v.pupkin.brl@outlook.com', 'v.pupkin.cad@outlook.com', 'v.pupkin.aud@outlook.com', 
    'v.pupkin.chf@outlook.com',  'v.pupkin.nzd@gmail.com', 'v.pupkin.inr@gmail.com', 
    'v.pupkin.jpy@gmail.com', 'v.pupkin.azn@gmail.com', 'v.pupkin.kzt@gmail.com'],

    passwords:
    ['JTFN3W9JM4', 'ePXzdyIeZH', 'P6QMU1BdQF', 
    'MLlXgF3SN6', 'Vrp8VKMaiG', 'Ycr9HyqSgp', 
    'cCX4W6opNh', 'ktFTixdjC2', 'AUQjkseWfb', 
    'Xw7olloTWC', 'FEcG0t0TGJ', 'jdQ4ifwurz', 
    'MrQ14AGSJ5', 'gP9VPACbeM', 'xvMOxpzTgf', 
    'jr2mlttDhP',  'f9E99Jz9bP', 'pekZiFuf5N', 
    'GSFzx8Oxo5', 'FotPkD2grg', 'pekZiFuf5N']


}

export const ViksData = {
url: 'https://viks.com',

lang: ['en', 'ru', 'uz'], 

currency : ['UZS'],

login: [ 'cypress_test_uzs@gmail.com' ],

emails : ['v.pupkin.uzs@gmail.com'],

passwords : ['MLlXgF3SN6']

}

export const SuperCatData = {
    url: 'https://supercatcasino67.com',

    lang: ['en', 'ru', 'de', 'pt', 'fi', 'no', 'pl', 'tr', 'es'],

    currency:
    ['EUR', 'PLN', 'USD',
    'ARS', 'TRY', 'RUB', 
   'KZT', 'MXN', 'PEN',
    'CLP', 'ZAR', 'NOK', 
    'BRL', 'CAD', 'AUD', 
    'CHF'
    ],
    
    login:
    [
        'cypress_test_eur@gmail.com', 'cypress_test_pln@gmail.com', 'cypress_test_usd@gmail.com',
       'cypress_test_ars@gmail.com', 'cypress_test_try@gmail.com', 'cypress_test_rub@gmail.com',
       'cypress_test_kzt@gmail.com', 'cypress_test_mxn@gmail.com', 'cypress_test_pen@gmail.com',
       'cypress_test_clp@gmail.com', 'cypress_test_zar@gmail.com', 'cypress_test_nok@gmail.com',
        'cypress_test_brl@gmail.com', 'cypress_test_cad@gmail.com', 'cypress_test_aud@gmail.com',
        'cypress_test_chf@gmail.com'
    ],
    
    emails:
    ['v.pupkin.eur@gmail.com', 'v.pupkin.pln@gmail.com', 'v.pupkinn.usd@gmail.com',
    'v.pupkin.ars@outlook.com', 'v.pupkinn.usd@gmail.com', 'v.pupkin.rub@outlook.com', 
    'v.pupkin.kzt@gmail.com', 'v.pupkin.mxn@outlook.com', 'v.pupkin.pen@outlook.com',
    'v.pupkin.clp@outlook.com', 'v.pupkin.zar@outlook.com', 'v.pupkin.nok@outlook.com',
    'v.pupkin.brl@outlook.com', 'v.pupkin.cad@outlook.com', 'v.pupkin.aud@outlook.com', 
    'v.pupkin.chf@outlook.com'
    ],

    passwords:
    ['JTFN3W9JM4', 'ePXzdyIeZH', 'Vrp8VKMaiG',
    'cCX4W6opNh', 'Vrp8VKMaiG', 'Ycr9HyqSgp', 
    'pekZiFuf5N', 'ktFTixdjC2', 'AUQjkseWfb', 
    'Xw7olloTWC', 'FEcG0t0TGJ', 'jdQ4ifwurz', 
    'MrQ14AGSJ5', 'gP9VPACbeM', 'xvMOxpzTgf', 
    'jr2mlttDhP'
    ]

}

export const Magic365Data = {

    url: 'https://magic365.com',

    lang: ['en', 
    'ru', 'pl'],
  
    currency: [
      'PLN', 'AUD', 'AZN',
      'BRL', 'CAD', 'CHF',
      'CLP', 'EUR', 'INR',
      'JPY', 'KZT', 'MXN',
      'NOK', 'NZD', 'PEN',
      'ARS', 'RUB', 'TRY',
      'USD', 'USZ', 'ZAR'
    ],
  
    login: [
      'cypress_test_pln@gmail.com', 'cypress_test_aud@gmail.com', 'cypress_test_azn@gmail.com',
      'cypress_test_brl@gmail.com', 'cypress_test_cad@gmail.com', 'cypress_test_chf@gmail.com',
      'cypress_test_clp@gmail.com', 'cypress_test_eur@gmail.com', 'cypress_test_inr@gmail.com',
      'cypress_test_jpy@gmail.com', 'cypress_test_kzt@gmail.com', 'cypress_test_mxn@gmail.com1',
      'cypress_test_nok@gmail.com', 'cypress_test_nzd@gmail.com', 'cypress_test_pen@gmail.com',
      'cypress_test_ars@gmail.com', 'cypress_test_rub@gmail.com', 'cypress_test_try@gmail.com',
      'cypress_test_usd@gmail.com', 'cypress_test_uzs@gmail.com', 'cypress_test_zar@gmail.com'
  
    ]
  }

export const SpinadoData = {
    url: 'https://spinado1.com',

    lang: ['en', 'ru', 'pt', 'pl', 'kk', 'es'],
    
    currency: ['BRL'],

    login: ['cypress_test_brl@gmail.com'],

    passwords: ['111111']
}