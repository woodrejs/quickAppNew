const offersType = [
  {
    active: false,
    key: uuidv4(),
    title: "kino",
    id: 1,
  },
  {
    active: false,
    key: uuidv4(),
    title: "teatr",
    id: 2,
  },

  {
    active: false,
    key: uuidv4(),
    title: "sztuka",
    id: 3,
  },

  {
    active: false,
    key: uuidv4(),
    title: "sport-i-rekreacja",
    id: 4,
  },

  {
    active: false,
    key: uuidv4(),
    title: "muzyka",
    id: 5,
  },

  {
    active: false,
    key: uuidv4(),
    title: "rozrywka",
    id: 6,
  },

  {
    active: false,
    key: uuidv4(),
    title: "literatura",
    id: 7,
  },

  {
    active: false,
    key: uuidv4(),
    title: "edukacja-i-rozwoj",
    id: 8,
  },

  {
    active: false,
    key: uuidv4(),
    title: "inne",
    id: 12,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dla-dzieci",
    id: 79,
  },

  {
    active: false,
    key: uuidv4(),
    title: "esk",
    id: 80,
  },

  {
    active: false,
    key: uuidv4(),
    title: "w-plenerze",
    id: 84,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dla-seniorow",
    id: 85,
  },

  {
    active: false,
    key: uuidv4(),
    title: "tylko-dla-doroslych",
    id: 98,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dla-wszystkich",
    id: 101,
  },

  {
    active: false,
    key: uuidv4(),
    title: "ferie-zimowe",
    id: 102,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dla-rodzicow",
    id: 108,
  },

  {
    active: false,
    key: uuidv4(),
    title: "ze-zwierzakiem",
    id: 109,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wydarzenie-kinowe",
    id: 113,
  },

  {
    active: false,
    key: uuidv4(),
    title: "spektakl",
    id: 114,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wystawa",
    id: 115,
  },

  {
    active: false,
    key: uuidv4(),
    title: "performance",
    id: 116,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wernisaz",
    id: 117,
  },

  {
    active: false,
    key: uuidv4(),
    title: "zajecia-sportowe",
    id: 118,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wydarzenia-sportowe",
    id: 119,
  },

  {
    active: false,
    key: uuidv4(),
    title: "zawody",
    id: 120,
  },

  {
    active: false,
    key: uuidv4(),
    title: "koncert",
    id: 121,
  },

  {
    active: false,
    key: uuidv4(),
    title: "pop",
    id: 122,
  },

  {
    active: false,
    key: uuidv4(),
    title: "rock",
    id: 123,
  },

  {
    active: false,
    key: uuidv4(),
    title: "etniczna",
    id: 124,
  },

  {
    active: false,
    key: uuidv4(),
    title: "kabaret",
    id: 125,
  },

  {
    active: false,
    key: uuidv4(),
    title: "show",
    id: 126,
  },

  {
    active: false,
    key: uuidv4(),
    title: "jarmarki",
    id: 127,
  },

  {
    active: false,
    key: uuidv4(),
    title: "piknik",
    id: 128,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wybory",
    id: 129,
  },

  {
    active: false,
    key: uuidv4(),
    title: "widowisko",
    id: 130,
  },

  {
    active: false,
    key: uuidv4(),
    title: "eventy",
    id: 131,
  },

  {
    active: false,
    key: uuidv4(),
    title: "spotkania-z-autorami",
    id: 132,
  },

  {
    active: false,
    key: uuidv4(),
    title: "kluby-dyskusyjne",
    id: 133,
  },

  {
    active: false,
    key: uuidv4(),
    title: "kursy",
    id: 134,
  },

  {
    active: false,
    key: uuidv4(),
    title: "szkolenia",
    id: 135,
  },

  {
    active: false,
    key: uuidv4(),
    title: "konferencje",
    id: 136,
  },

  {
    active: false,
    key: uuidv4(),
    title: "warsztaty",
    id: 137,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wyklad",
    id: 138,
  },

  {
    active: false,
    key: uuidv4(),
    title: "targi",
    id: 139,
  },

  {
    active: false,
    key: uuidv4(),
    title: "akcje-spoleczne",
    id: 140,
  },

  {
    active: false,
    key: uuidv4(),
    title: "happeningi",
    id: 141,
  },

  {
    active: false,
    key: uuidv4(),
    title: "gieldy",
    id: 142,
  },

  {
    active: false,
    key: uuidv4(),
    title: "konkursy",
    id: 143,
  },

  {
    active: false,
    key: uuidv4(),
    title: "spotkania",
    id: 144,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dramat",
    id: 145,
  },

  {
    active: false,
    key: uuidv4(),
    title: "thriller",
    id: 146,
  },

  {
    active: false,
    key: uuidv4(),
    title: "komedia",
    id: 147,
  },

  {
    active: false,
    key: uuidv4(),
    title: "horror",
    id: 148,
  },

  {
    active: false,
    key: uuidv4(),
    title: "bajka",
    id: 149,
  },

  {
    active: false,
    key: uuidv4(),
    title: "obyczajowy",
    id: 150,
  },

  {
    active: false,
    key: uuidv4(),
    title: "animacja",
    id: 151,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dokument",
    id: 152,
  },

  {
    active: false,
    key: uuidv4(),
    title: "akcja",
    id: 153,
  },

  {
    active: false,
    key: uuidv4(),
    title: "musical",
    id: 154,
  },

  {
    active: false,
    key: uuidv4(),
    title: "familijny",
    id: 155,
  },

  {
    active: false,
    key: uuidv4(),
    title: "balet",
    id: 156,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dramat",
    id: 157,
  },

  {
    active: false,
    key: uuidv4(),
    title: "pantomima",
    id: 158,
  },

  {
    active: false,
    key: uuidv4(),
    title: "opera",
    id: 159,
  },

  {
    active: false,
    key: uuidv4(),
    title: "komedia",
    id: 160,
  },

  {
    active: false,
    key: uuidv4(),
    title: "kryminal",
    id: 161,
  },

  {
    active: false,
    key: uuidv4(),
    title: "tragikomedia",
    id: 162,
  },

  {
    active: false,
    key: uuidv4(),
    title: "opera-dla-dzieci",
    id: 163,
  },

  {
    active: false,
    key: uuidv4(),
    title: "sportowy",
    id: 164,
  },

  {
    active: false,
    key: uuidv4(),
    title: "western",
    id: 165,
  },

  {
    active: false,
    key: uuidv4(),
    title: "krotkometrazowy",
    id: 166,
  },

  {
    active: false,
    key: uuidv4(),
    title: "kryminal",
    id: 167,
  },

  {
    active: false,
    key: uuidv4(),
    title: "przygodowy",
    id: 168,
  },

  {
    active: false,
    key: uuidv4(),
    title: "sci-fi",
    id: 169,
  },

  {
    active: false,
    key: uuidv4(),
    title: "jazz",
    id: 170,
  },

  {
    active: false,
    key: uuidv4(),
    title: "sensacyjny",
    id: 171,
  },

  {
    active: false,
    key: uuidv4(),
    title: "teatr-muzyczny",
    id: 172,
  },

  {
    active: false,
    key: uuidv4(),
    title: "tragedia",
    id: 173,
  },

  {
    active: false,
    key: uuidv4(),
    title: "fantasy",
    id: 175,
  },

  {
    active: false,
    key: uuidv4(),
    title: "romans",
    id: 176,
  },

  {
    active: false,
    key: uuidv4(),
    title: "fabularny",
    id: 177,
  },

  {
    active: false,
    key: uuidv4(),
    title: "transmisja",
    id: 178,
  },

  {
    active: false,
    key: uuidv4(),
    title: "inny",
    id: 179,
  },

  {
    active: false,
    key: uuidv4(),
    title: "w-klubie",
    id: 180,
  },

  {
    active: false,
    key: uuidv4(),
    title: "historyczny",
    id: 181,
  },

  {
    active: false,
    key: uuidv4(),
    title: "rozne",
    id: 182,
  },

  {
    active: false,
    key: uuidv4(),
    title: "spektakl",
    id: 183,
  },

  {
    active: false,
    key: uuidv4(),
    title: "inne",
    id: 184,
  },

  {
    active: false,
    key: uuidv4(),
    title: "klasyczna",
    id: 185,
  },

  {
    active: false,
    key: uuidv4(),
    title: "twg-2017",
    id: 186,
  },

  {
    active: false,
    key: uuidv4(),
    title: "polityczny",
    id: 187,
  },

  {
    active: false,
    key: uuidv4(),
    title: "poetycki",
    id: 188,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dramat-wojenny-non-fiction",
    id: 189,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wojenny",
    id: 190,
  },

  {
    active: false,
    key: uuidv4(),
    title: "blues",
    id: 191,
  },

  {
    active: false,
    key: uuidv4(),
    title: "hip-hop",
    id: 192,
  },

  {
    active: false,
    key: uuidv4(),
    title: "reggae",
    id: 193,
  },

  {
    active: false,
    key: uuidv4(),
    title: "metal",
    id: 194,
  },

  {
    active: false,
    key: uuidv4(),
    title: "biegi-i-maratony",
    id: 195,
  },

  {
    active: false,
    key: uuidv4(),
    title: "tragikomedia",
    id: 196,
  },

  {
    active: false,
    key: uuidv4(),
    title: "inne",
    id: 197,
  },

  {
    active: false,
    key: uuidv4(),
    title: "teatr-tanca",
    id: 198,
  },

  {
    active: false,
    key: uuidv4(),
    title: "startupy",
    id: 199,
  },

  {
    active: false,
    key: uuidv4(),
    title: "zdrowie",
    id: 200,
  },

  {
    active: false,
    key: uuidv4(),
    title: "spacery-i-wycieczki",
    id: 201,
  },

  {
    active: false,
    key: uuidv4(),
    title: "teatr-lalek",
    id: 297,
  },

  {
    active: false,
    key: uuidv4(),
    title: "kryminalny",
    id: 299,
  },

  {
    active: false,
    key: uuidv4(),
    title: "sztuki-wizualne",
    id: 300,
  },

  {
    active: false,
    key: uuidv4(),
    title: "architektura",
    id: 301,
  },

  {
    active: false,
    key: uuidv4(),
    title: "film",
    id: 302,
  },

  {
    active: false,
    key: uuidv4(),
    title: "literatura",
    id: 303,
  },

  {
    active: false,
    key: uuidv4(),
    title: "muzyka",
    id: 304,
  },

  {
    active: false,
    key: uuidv4(),
    title: "opera",
    id: 305,
  },

  {
    active: false,
    key: uuidv4(),
    title: "performance",
    id: 306,
  },

  {
    active: false,
    key: uuidv4(),
    title: "teatr",
    id: 307,
  },

  {
    active: false,
    key: uuidv4(),
    title: "promowane-wydarzenia",
    id: 308,
  },

  {
    active: false,
    key: uuidv4(),
    title: "zajecia-dla-dzieci",
    id: 333,
  },

  {
    active: false,
    key: uuidv4(),
    title: "design",
    id: 334,
  },

  {
    active: false,
    key: uuidv4(),
    title: "nad-odra",
    id: 371,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dodatkowe-kategorie-wydarzen",
    id: 425,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wroclaw-eu",
    id: 439,
  },

  {
    active: false,
    key: uuidv4(),
    title: "promowane",
    id: 440,
  },

  {
    active: false,
    key: uuidv4(),
    title: "festiwale",
    id: 554,
  },

  {
    active: false,
    key: uuidv4(),
    title: "urzad",
    id: 873,
  },

  {
    active: false,
    key: uuidv4(),
    title: "bezplatne-wydarzenia-wroclaw",
    id: 875,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wroclaw-wspiera",
    id: 876,
  },

  {
    active: false,
    key: uuidv4(),
    title: "gra-gra-terenowa",
    id: 879,
  },

  {
    active: false,
    key: uuidv4(),
    title: "boze-narodzenie-we-wroclawiu",
    id: 880,
  },

  {
    active: false,
    key: uuidv4(),
    title: "zdrowie-1",
    id: 881,
  },

  {
    active: false,
    key: uuidv4(),
    title: "edukacja-i-rozwoj-1",
    id: 882,
  },

  {
    active: false,
    key: uuidv4(),
    title: "pomoc-spoleczna-1",
    id: 883,
  },

  {
    active: false,
    key: uuidv4(),
    title: "sport-i-rekreacja-1",
    id: 884,
  },

  {
    active: false,
    key: uuidv4(),
    title: "poradnictwo",
    id: 885,
  },

  {
    active: false,
    key: uuidv4(),
    title: "kultura-1",
    id: 886,
  },

  {
    active: false,
    key: uuidv4(),
    title: "profilaktyka",
    id: 887,
  },

  {
    active: false,
    key: uuidv4(),
    title: "uzaleznienia",
    id: 888,
  },

  {
    active: false,
    key: uuidv4(),
    title: "zdrowie-psychiczne",
    id: 889,
  },

  {
    active: false,
    key: uuidv4(),
    title: "cukrzyca",
    id: 890,
  },

  {
    active: false,
    key: uuidv4(),
    title: "nowotwory",
    id: 891,
  },

  {
    active: false,
    key: uuidv4(),
    title: "pomoc-medyczna-1",
    id: 892,
  },

  {
    active: false,
    key: uuidv4(),
    title: "grupa-docelowa",
    id: 893,
  },

  {
    active: false,
    key: uuidv4(),
    title: "seniorzy",
    id: 894,
  },

  {
    active: false,
    key: uuidv4(),
    title: "niepelnosprawni-1",
    id: 895,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dzieci-i-mlodziez",
    id: 896,
  },

  {
    active: false,
    key: uuidv4(),
    title: "rodzice",
    id: 898,
  },

  {
    active: false,
    key: uuidv4(),
    title: "obcokrajowcy",
    id: 899,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dzieci-0-3",
    id: 900,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dzieci-4-6",
    id: 901,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wolontariat",
    id: 902,
  },

  {
    active: false,
    key: uuidv4(),
    title: "czas-wolny",
    id: 903,
  },

  {
    active: false,
    key: uuidv4(),
    title: "opieka-1",
    id: 904,
  },

  {
    active: false,
    key: uuidv4(),
    title: "porady-prawne",
    id: 905,
  },

  {
    active: false,
    key: uuidv4(),
    title: "porady-psychologiczne",
    id: 906,
  },

  {
    active: false,
    key: uuidv4(),
    title: "porady-pedagogiczne",
    id: 907,
  },

  {
    active: false,
    key: uuidv4(),
    title: "sporty-walki",
    id: 908,
  },

  {
    active: false,
    key: uuidv4(),
    title: "koszykowka",
    id: 909,
  },

  {
    active: false,
    key: uuidv4(),
    title: "pilka-nozna",
    id: 910,
  },

  {
    active: false,
    key: uuidv4(),
    title: "siatkowka",
    id: 911,
  },

  {
    active: false,
    key: uuidv4(),
    title: "kardiologia",
    id: 912,
  },

  {
    active: false,
    key: uuidv4(),
    title: "stomatologia",
    id: 913,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wady-postawy",
    id: 914,
  },

  {
    active: false,
    key: uuidv4(),
    title: "zajecia-pozalekcyjne",
    id: 915,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wsparcie",
    id: 917,
  },

  {
    active: false,
    key: uuidv4(),
    title: "tlumacze",
    id: 918,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wypozyczalnie",
    id: 919,
  },

  {
    active: false,
    key: uuidv4(),
    title: "integracja",
    id: 920,
  },

  {
    active: false,
    key: uuidv4(),
    title: "opieka-nad-dziecmi",
    id: 921,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dzieci-7-10",
    id: 922,
  },

  {
    active: false,
    key: uuidv4(),
    title: "mlodziez-11-14",
    id: 923,
  },

  {
    active: false,
    key: uuidv4(),
    title: "mlodziez-15-18",
    id: 924,
  },

  {
    active: false,
    key: uuidv4(),
    title: "z-klubow-sportowych",
    id: 925,
  },

  {
    active: false,
    key: uuidv4(),
    title: "noworodki-i-wczesniaki",
    id: 926,
  },

  {
    active: false,
    key: uuidv4(),
    title: "kobiety-w-ciazy",
    id: 927,
  },

  {
    active: false,
    key: uuidv4(),
    title: "rodziny-wielodzietne",
    id: 928,
  },

  {
    active: false,
    key: uuidv4(),
    title: "pozostale",
    id: 929,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wolontariusze",
    id: 930,
  },

  {
    active: false,
    key: uuidv4(),
    title: "ngo",
    id: 931,
  },

  {
    active: false,
    key: uuidv4(),
    title: "rady-osiedli",
    id: 932,
  },

  {
    active: false,
    key: uuidv4(),
    title: "kibice-sportowi",
    id: 933,
  },

  {
    active: false,
    key: uuidv4(),
    title: "szkoly-i-nauczyciele",
    id: 934,
  },

  {
    active: false,
    key: uuidv4(),
    title: "elektroniczna",
    id: 937,
  },

  {
    active: false,
    key: uuidv4(),
    title: "folk",
    id: 938,
  },

  {
    active: false,
    key: uuidv4(),
    title: "oprowadzanie",
    id: 939,
  },

  {
    active: false,
    key: uuidv4(),
    title: "walentynki",
    id: 1364,
  },

  {
    active: false,
    key: uuidv4(),
    title: "oferty-pracy",
    id: 1367,
  },

  {
    active: false,
    key: uuidv4(),
    title: "zabawa",
    id: 1369,
  },

  {
    active: false,
    key: uuidv4(),
    title: "pokaz-doswiadczenie",
    id: 1371,
  },

  {
    active: false,
    key: uuidv4(),
    title: "instalacja",
    id: 1372,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wspiera-promowane",
    id: 1390,
  },

  {
    active: false,
    key: uuidv4(),
    title: "konsultacje-spoleczne-1",
    id: 1404,
  },

  {
    active: false,
    key: uuidv4(),
    title: "grow-green",
    id: 1406,
  },

  {
    active: false,
    key: uuidv4(),
    title: "100-lat-niepodleglosci",
    id: 1407,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dzien-zyczliwosci",
    id: 1466,
  },

  {
    active: false,
    key: uuidv4(),
    title: "kalendarz-prezydenta-wroclawia",
    id: 1471,
  },

  {
    active: false,
    key: uuidv4(),
    title: "www-wroclaw-pl",
    id: 1505,
  },

  {
    active: false,
    key: uuidv4(),
    title: "spotkania-zmien-piec",
    id: 1507,
  },

  {
    active: false,
    key: uuidv4(),
    title: "prezydent-wroclawia-poleca",
    id: 1621,
  },

  {
    active: false,
    key: uuidv4(),
    title: "kino",
    id: 1,
  },

  {
    active: false,
    key: uuidv4(),
    title: "teatr",
    id: 2,
  },

  {
    active: false,
    key: uuidv4(),
    title: "sztuka",
    id: 3,
  },

  {
    active: false,
    key: uuidv4(),
    title: "sport-i-rekreacja",
    id: 4,
  },

  {
    active: false,
    key: uuidv4(),
    title: "muzyka",
    id: 5,
  },

  {
    active: false,
    key: uuidv4(),
    title: "rozrywka",
    id: 6,
  },

  {
    active: false,
    key: uuidv4(),
    title: "literatura",
    id: 7,
  },

  {
    active: false,
    key: uuidv4(),
    title: "edukacja-i-rozwoj",
    id: 8,
  },

  {
    active: false,
    key: uuidv4(),
    title: "inne",
    id: 12,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dla-dzieci",
    id: 79,
  },

  {
    active: false,
    key: uuidv4(),
    title: "esk",
    id: 80,
  },

  {
    active: false,
    key: uuidv4(),
    title: "w-plenerze",
    id: 84,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dla-seniorow",
    id: 85,
  },

  {
    active: false,
    key: uuidv4(),
    title: "tylko-dla-doroslych",
    id: 98,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dla-wszystkich",
    id: 101,
  },

  {
    active: false,
    key: uuidv4(),
    title: "ferie-zimowe",
    id: 102,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dla-rodzicow",
    id: 108,
  },

  {
    active: false,
    key: uuidv4(),
    title: "ze-zwierzakiem",
    id: 109,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wydarzenie-kinowe",
    id: 113,
  },

  {
    active: false,
    key: uuidv4(),
    title: "spektakl",
    id: 114,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wystawa",
    id: 115,
  },

  {
    active: false,
    key: uuidv4(),
    title: "performance",
    id: 116,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wernisaz",
    id: 117,
  },

  {
    active: false,
    key: uuidv4(),
    title: "zajecia-sportowe",
    id: 118,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wydarzenia-sportowe",
    id: 119,
  },

  {
    active: false,
    key: uuidv4(),
    title: "zawody",
    id: 120,
  },

  {
    active: false,
    key: uuidv4(),
    title: "koncert",
    id: 121,
  },

  {
    active: false,
    key: uuidv4(),
    title: "pop",
    id: 122,
  },

  {
    active: false,
    key: uuidv4(),
    title: "rock",
    id: 123,
  },

  {
    active: false,
    key: uuidv4(),
    title: "etniczna",
    id: 124,
  },

  {
    active: false,
    key: uuidv4(),
    title: "kabaret",
    id: 125,
  },

  {
    active: false,
    key: uuidv4(),
    title: "show",
    id: 126,
  },

  {
    active: false,
    key: uuidv4(),
    title: "jarmarki",
    id: 127,
  },

  {
    active: false,
    key: uuidv4(),
    title: "piknik",
    id: 128,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wybory",
    id: 129,
  },

  {
    active: false,
    key: uuidv4(),
    title: "widowisko",
    id: 130,
  },

  {
    active: false,
    key: uuidv4(),
    title: "eventy",
    id: 131,
  },

  {
    active: false,
    key: uuidv4(),
    title: "spotkania-z-autorami",
    id: 132,
  },

  {
    active: false,
    key: uuidv4(),
    title: "kluby-dyskusyjne",
    id: 133,
  },

  {
    active: false,
    key: uuidv4(),
    title: "kursy",
    id: 134,
  },

  {
    active: false,
    key: uuidv4(),
    title: "szkolenia",
    id: 135,
  },

  {
    active: false,
    key: uuidv4(),
    title: "konferencje",
    id: 136,
  },

  {
    active: false,
    key: uuidv4(),
    title: "warsztaty",
    id: 137,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wyklad",
    id: 138,
  },

  {
    active: false,
    key: uuidv4(),
    title: "targi",
    id: 139,
  },

  {
    active: false,
    key: uuidv4(),
    title: "akcje-spoleczne",
    id: 140,
  },

  {
    active: false,
    key: uuidv4(),
    title: "happeningi",
    id: 141,
  },

  {
    active: false,
    key: uuidv4(),
    title: "gieldy",
    id: 142,
  },

  {
    active: false,
    key: uuidv4(),
    title: "konkursy",
    id: 143,
  },

  {
    active: false,
    key: uuidv4(),
    title: "spotkania",
    id: 144,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dramat",
    id: 145,
  },

  {
    active: false,
    key: uuidv4(),
    title: "thriller",
    id: 146,
  },

  {
    active: false,
    key: uuidv4(),
    title: "komedia",
    id: 147,
  },

  {
    active: false,
    key: uuidv4(),
    title: "horror",
    id: 148,
  },

  {
    active: false,
    key: uuidv4(),
    title: "bajka",
    id: 149,
  },

  {
    active: false,
    key: uuidv4(),
    title: "obyczajowy",
    id: 150,
  },

  {
    active: false,
    key: uuidv4(),
    title: "animacja",
    id: 151,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dokument",
    id: 152,
  },

  {
    active: false,
    key: uuidv4(),
    title: "akcja",
    id: 153,
  },

  {
    active: false,
    key: uuidv4(),
    title: "musical",
    id: 154,
  },

  {
    active: false,
    key: uuidv4(),
    title: "familijny",
    id: 155,
  },

  {
    active: false,
    key: uuidv4(),
    title: "balet",
    id: 156,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dramat",
    id: 157,
  },

  {
    active: false,
    key: uuidv4(),
    title: "pantomima",
    id: 158,
  },

  {
    active: false,
    key: uuidv4(),
    title: "opera",
    id: 159,
  },

  {
    active: false,
    key: uuidv4(),
    title: "komedia",
    id: 160,
  },

  {
    active: false,
    key: uuidv4(),
    title: "kryminal",
    id: 161,
  },

  {
    active: false,
    key: uuidv4(),
    title: "tragikomedia",
    id: 162,
  },

  {
    active: false,
    key: uuidv4(),
    title: "opera-dla-dzieci",
    id: 163,
  },

  {
    active: false,
    key: uuidv4(),
    title: "sportowy",
    id: 164,
  },

  {
    active: false,
    key: uuidv4(),
    title: "western",
    id: 165,
  },

  {
    active: false,
    key: uuidv4(),
    title: "krotkometrazowy",
    id: 166,
  },

  {
    active: false,
    key: uuidv4(),
    title: "kryminal",
    id: 167,
  },

  {
    active: false,
    key: uuidv4(),
    title: "przygodowy",
    id: 168,
  },

  {
    active: false,
    key: uuidv4(),
    title: "sci-fi",
    id: 169,
  },

  {
    active: false,
    key: uuidv4(),
    title: "jazz",
    id: 170,
  },

  {
    active: false,
    key: uuidv4(),
    title: "sensacyjny",
    id: 171,
  },

  {
    active: false,
    key: uuidv4(),
    title: "teatr-muzyczny",
    id: 172,
  },

  {
    active: false,
    key: uuidv4(),
    title: "tragedia",
    id: 173,
  },

  {
    active: false,
    key: uuidv4(),
    title: "fantasy",
    id: 175,
  },

  {
    active: false,
    key: uuidv4(),
    title: "romans",
    id: 176,
  },

  {
    active: false,
    key: uuidv4(),
    title: "fabularny",
    id: 177,
  },

  {
    active: false,
    key: uuidv4(),
    title: "transmisja",
    id: 178,
  },

  {
    active: false,
    key: uuidv4(),
    title: "inny",
    id: 179,
  },

  {
    active: false,
    key: uuidv4(),
    title: "w-klubie",
    id: 180,
  },

  {
    active: false,
    key: uuidv4(),
    title: "historyczny",
    id: 181,
  },

  {
    active: false,
    key: uuidv4(),
    title: "rozne",
    id: 182,
  },

  {
    active: false,
    key: uuidv4(),
    title: "spektakl",
    id: 183,
  },

  {
    active: false,
    key: uuidv4(),
    title: "inne",
    id: 184,
  },

  {
    active: false,
    key: uuidv4(),
    title: "klasyczna",
    id: 185,
  },

  {
    active: false,
    key: uuidv4(),
    title: "twg-2017",
    id: 186,
  },

  {
    active: false,
    key: uuidv4(),
    title: "polityczny",
    id: 187,
  },

  {
    active: false,
    key: uuidv4(),
    title: "poetycki",
    id: 188,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dramat-wojenny-non-fiction",
    id: 189,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wojenny",
    id: 190,
  },

  {
    active: false,
    key: uuidv4(),
    title: "blues",
    id: 191,
  },

  {
    active: false,
    key: uuidv4(),
    title: "hip-hop",
    id: 192,
  },

  {
    active: false,
    key: uuidv4(),
    title: "reggae",
    id: 193,
  },

  {
    active: false,
    key: uuidv4(),
    title: "metal",
    id: 194,
  },

  {
    active: false,
    key: uuidv4(),
    title: "biegi-i-maratony",
    id: 195,
  },

  {
    active: false,
    key: uuidv4(),
    title: "tragikomedia",
    id: 196,
  },

  {
    active: false,
    key: uuidv4(),
    title: "inne",
    id: 197,
  },

  {
    active: false,
    key: uuidv4(),
    title: "teatr-tanca",
    id: 198,
  },

  {
    active: false,
    key: uuidv4(),
    title: "startupy",
    id: 199,
  },

  {
    active: false,
    key: uuidv4(),
    title: "zdrowie",
    id: 200,
  },

  {
    active: false,
    key: uuidv4(),
    title: "spacery-i-wycieczki",
    id: 201,
  },

  {
    active: false,
    key: uuidv4(),
    title: "teatr-lalek",
    id: 297,
  },

  {
    active: false,
    key: uuidv4(),
    title: "kryminalny",
    id: 299,
  },

  {
    active: false,
    key: uuidv4(),
    title: "sztuki-wizualne",
    id: 300,
  },

  {
    active: false,
    key: uuidv4(),
    title: "architektura",
    id: 301,
  },

  {
    active: false,
    key: uuidv4(),
    title: "film",
    id: 302,
  },

  {
    active: false,
    key: uuidv4(),
    title: "literatura",
    id: 303,
  },

  {
    active: false,
    key: uuidv4(),
    title: "muzyka",
    id: 304,
  },

  {
    active: false,
    key: uuidv4(),
    title: "opera",
    id: 305,
  },

  {
    active: false,
    key: uuidv4(),
    title: "performance",
    id: 306,
  },

  {
    active: false,
    key: uuidv4(),
    title: "teatr",
    id: 307,
  },

  {
    active: false,
    key: uuidv4(),
    title: "promowane-wydarzenia",
    id: 308,
  },

  {
    active: false,
    key: uuidv4(),
    title: "zajecia-dla-dzieci",
    id: 333,
  },

  {
    active: false,
    key: uuidv4(),
    title: "design",
    id: 334,
  },

  {
    active: false,
    key: uuidv4(),
    title: "nad-odra",
    id: 371,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dodatkowe-kategorie-wydarzen",
    id: 425,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wroclaw-eu",
    id: 439,
  },

  {
    active: false,
    key: uuidv4(),
    title: "promowane",
    id: 440,
  },

  {
    active: false,
    key: uuidv4(),
    title: "festiwale",
    id: 554,
  },

  {
    active: false,
    key: uuidv4(),
    title: "urzad",
    id: 873,
  },

  {
    active: false,
    key: uuidv4(),
    title: "bezplatne-wydarzenia-wroclaw",
    id: 875,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wroclaw-wspiera",
    id: 876,
  },

  {
    active: false,
    key: uuidv4(),
    title: "gra-gra-terenowa",
    id: 879,
  },

  {
    active: false,
    key: uuidv4(),
    title: "boze-narodzenie-we-wroclawiu",
    id: 880,
  },

  {
    active: false,
    key: uuidv4(),
    title: "zdrowie-1",
    id: 881,
  },

  {
    active: false,
    key: uuidv4(),
    title: "edukacja-i-rozwoj-1",
    id: 882,
  },

  {
    active: false,
    key: uuidv4(),
    title: "pomoc-spoleczna-1",
    id: 883,
  },

  {
    active: false,
    key: uuidv4(),
    title: "sport-i-rekreacja-1",
    id: 884,
  },

  {
    active: false,
    key: uuidv4(),
    title: "poradnictwo",
    id: 885,
  },

  {
    active: false,
    key: uuidv4(),
    title: "kultura-1",
    id: 886,
  },

  {
    active: false,
    key: uuidv4(),
    title: "profilaktyka",
    id: 887,
  },

  {
    active: false,
    key: uuidv4(),
    title: "uzaleznienia",
    id: 888,
  },

  {
    active: false,
    key: uuidv4(),
    title: "zdrowie-psychiczne",
    id: 889,
  },

  {
    active: false,
    key: uuidv4(),
    title: "cukrzyca",
    id: 890,
  },

  {
    active: false,
    key: uuidv4(),
    title: "nowotwory",
    id: 891,
  },

  {
    active: false,
    key: uuidv4(),
    title: "pomoc-medyczna-1",
    id: 892,
  },

  {
    active: false,
    key: uuidv4(),
    title: "grupa-docelowa",
    id: 893,
  },

  {
    active: false,
    key: uuidv4(),
    title: "seniorzy",
    id: 894,
  },

  {
    active: false,
    key: uuidv4(),
    title: "niepelnosprawni-1",
    id: 895,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dzieci-i-mlodziez",
    id: 896,
  },

  {
    active: false,
    key: uuidv4(),
    title: "rodzice",
    id: 898,
  },

  {
    active: false,
    key: uuidv4(),
    title: "obcokrajowcy",
    id: 899,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dzieci-0-3",
    id: 900,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dzieci-4-6",
    id: 901,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wolontariat",
    id: 902,
  },

  {
    active: false,
    key: uuidv4(),
    title: "czas-wolny",
    id: 903,
  },

  {
    active: false,
    key: uuidv4(),
    title: "opieka-1",
    id: 904,
  },

  {
    active: false,
    key: uuidv4(),
    title: "porady-prawne",
    id: 905,
  },

  {
    active: false,
    key: uuidv4(),
    title: "porady-psychologiczne",
    id: 906,
  },

  {
    active: false,
    key: uuidv4(),
    title: "porady-pedagogiczne",
    id: 907,
  },

  {
    active: false,
    key: uuidv4(),
    title: "sporty-walki",
    id: 908,
  },

  {
    active: false,
    key: uuidv4(),
    title: "koszykowka",
    id: 909,
  },

  {
    active: false,
    key: uuidv4(),
    title: "pilka-nozna",
    id: 910,
  },

  {
    active: false,
    key: uuidv4(),
    title: "siatkowka",
    id: 911,
  },

  {
    active: false,
    key: uuidv4(),
    title: "kardiologia",
    id: 912,
  },

  {
    active: false,
    key: uuidv4(),
    title: "stomatologia",
    id: 913,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wady-postawy",
    id: 914,
  },

  {
    active: false,
    key: uuidv4(),
    title: "zajecia-pozalekcyjne",
    id: 915,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wsparcie",
    id: 917,
  },

  {
    active: false,
    key: uuidv4(),
    title: "tlumacze",
    id: 918,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wypozyczalnie",
    id: 919,
  },

  {
    active: false,
    key: uuidv4(),
    title: "integracja",
    id: 920,
  },

  {
    active: false,
    key: uuidv4(),
    title: "opieka-nad-dziecmi",
    id: 921,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dzieci-7-10",
    id: 922,
  },

  {
    active: false,
    key: uuidv4(),
    title: "mlodziez-11-14",
    id: 923,
  },

  {
    active: false,
    key: uuidv4(),
    title: "mlodziez-15-18",
    id: 924,
  },

  {
    active: false,
    key: uuidv4(),
    title: "z-klubow-sportowych",
    id: 925,
  },

  {
    active: false,
    key: uuidv4(),
    title: "noworodki-i-wczesniaki",
    id: 926,
  },

  {
    active: false,
    key: uuidv4(),
    title: "kobiety-w-ciazy",
    id: 927,
  },

  {
    active: false,
    key: uuidv4(),
    title: "rodziny-wielodzietne",
    id: 928,
  },

  {
    active: false,
    key: uuidv4(),
    title: "pozostale",
    id: 929,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wolontariusze",
    id: 930,
  },

  {
    active: false,
    key: uuidv4(),
    title: "ngo",
    id: 931,
  },

  {
    active: false,
    key: uuidv4(),
    title: "rady-osiedli",
    id: 932,
  },

  {
    active: false,
    key: uuidv4(),
    title: "kibice-sportowi",
    id: 933,
  },

  {
    active: false,
    key: uuidv4(),
    title: "szkoly-i-nauczyciele",
    id: 934,
  },

  {
    active: false,
    key: uuidv4(),
    title: "elektroniczna",
    id: 937,
  },

  {
    active: false,
    key: uuidv4(),
    title: "folk",
    id: 938,
  },

  {
    active: false,
    key: uuidv4(),
    title: "oprowadzanie",
    id: 939,
  },

  {
    active: false,
    key: uuidv4(),
    title: "walentynki",
    id: 1364,
  },

  {
    active: false,
    key: uuidv4(),
    title: "oferty-pracy",
    id: 1367,
  },

  {
    active: false,
    key: uuidv4(),
    title: "zabawa",
    id: 1369,
  },

  {
    active: false,
    key: uuidv4(),
    title: "pokaz-doswiadczenie",
    id: 1371,
  },

  {
    active: false,
    key: uuidv4(),
    title: "instalacja",
    id: 1372,
  },

  {
    active: false,
    key: uuidv4(),
    title: "wspiera-promowane",
    id: 1390,
  },

  {
    active: false,
    key: uuidv4(),
    title: "konsultacje-spoleczne-1",
    id: 1404,
  },

  {
    active: false,
    key: uuidv4(),
    title: "grow-green",
    id: 1406,
  },

  {
    active: false,
    key: uuidv4(),
    title: "100-lat-niepodleglosci",
    id: 1407,
  },

  {
    active: false,
    key: uuidv4(),
    title: "dzien-zyczliwosci",
    id: 1466,
  },

  {
    active: false,
    key: uuidv4(),
    title: "kalendarz-prezydenta-wroclawia",
    id: 1471,
  },

  {
    active: false,
    key: uuidv4(),
    title: "www-wroclaw-pl",
    id: 1505,
  },

  {
    active: false,
    key: uuidv4(),
    title: "spotkania-zmien-piec",
    id: 1507,
  },

  {
    active: false,
    key: uuidv4(),
    title: "prezydent-wroclawia-poleca",
    id: 1621,
  },
];

const placesType = [
  {
    id: 10,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/10?key=1319679107135189731165976618182301395321",
    name: "Kultura",
    longName: "Kultura we Wrocławiu",
    alias: "kultura",
    language: "Polish",
  },
  {
    id: 11,
    modified: "2018-10-26T12:52",
    url: "https://go.wroclaw.pl/api/v1.0/types/11?key=1319679107135189731165976618182301395321",
    name: "Kluby",
    alias: "kluby",
    language: "Polish",
  },
  {
    id: 13,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/13?key=1319679107135189731165976618182301395321",
    name: "Noclegi",
    longName: "Noclegi we Wrocławiu",
    alias: "noclegi",
    language: "Polish",
  },
  {
    id: 14,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/14?key=1319679107135189731165976618182301395321",
    name: "Jedzenie",
    longName: "Jedzenie we Wrocławiu",
    alias: "jedzenie",
    language: "Polish",
  },
  {
    id: 15,
    modified: "2021-10-05T14:33",
    url: "https://go.wroclaw.pl/api/v1.0/types/15?key=1319679107135189731165976618182301395321",
    name: "Zwiedzanie i atrakcje",
    longName: "Zwiedzanie Wrocławia",
    alias: "zwiedzanie-i-atrakcje",
    language: "Polish",
  },
  {
    id: 16,
    modified: "2021-09-15T14:25",
    url: "https://go.wroclaw.pl/api/v1.0/types/16?key=1319679107135189731165976618182301395321",
    name: "Sport i rekreacja",
    longName: "Sport i rekreacja we Wrocławiu",
    alias: "sport-i-rekreacja",
    language: "Polish",
  },
  {
    id: 17,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/17?key=1319679107135189731165976618182301395321",
    name: "Zdrowie i bezpieczeństwo",
    alias: "zdrowie-i-bezpieczenstwo",
    language: "Polish",
  },
  {
    id: 18,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/18?key=1319679107135189731165976618182301395321",
    name: "Komunikacja",
    longName: "Komunikacja we Wrocławiu",
    alias: "komunikacja",
    language: "Polish",
  },
  {
    id: 19,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/19?key=1319679107135189731165976618182301395321",
    name: "Edukacja i rozwój",
    alias: "edukacja-i-rozwoj",
    language: "Polish",
  },
  {
    id: 20,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/20?key=1319679107135189731165976618182301395321",
    name: "Biznes",
    alias: "biznes",
    language: "Polish",
  },
  {
    id: 21,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/21?key=1319679107135189731165976618182301395321",
    name: "Urzędy i instytucje",
    alias: "urzedy-i-instytucje",
    language: "Polish",
  },
  {
    id: 22,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/22?key=1319679107135189731165976618182301395321",
    name: "Handel i usługi",
    longName: "Handel i usługi we Wrocławiu",
    alias: "handel-i-uslugi",
    language: "Polish",
  },
  {
    id: 77,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/77?key=1319679107135189731165976618182301395321",
    name: "Autobusowy",
    alias: "parkingi",
    language: "Polish",
  },
  {
    id: 86,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/86?key=1319679107135189731165976618182301395321",
    name: "Atrakcja",
    alias: "atrakcja",
    language: "Polish",
  },
  {
    id: 87,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/87?key=1319679107135189731165976618182301395321",
    name: "Dla dzieci",
    alias: "dla-dzieci",
    language: "Polish",
  },
  {
    id: 88,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/88?key=1319679107135189731165976618182301395321",
    name: "W plenerze",
    alias: "w-plenerze",
    language: "Polish",
  },
  {
    id: 89,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/89?key=1319679107135189731165976618182301395321",
    name: "ESK",
    alias: "esk",
    language: "Polish",
  },
  {
    id: 90,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/90?key=1319679107135189731165976618182301395321",
    name: "Pets Welcome",
    alias: "pets-welcome",
    language: "Polish",
  },
  {
    id: 91,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/91?key=1319679107135189731165976618182301395321",
    name: "Całodobowe",
    alias: "calodobowe",
    language: "Polish",
  },
  {
    id: 92,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/92?key=1319679107135189731165976618182301395321",
    name: "Sezonowe",
    alias: "sezonowe",
    language: "Polish",
  },
  {
    id: 93,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/93?key=1319679107135189731165976618182301395321",
    name: "Dla seniorów",
    alias: "dla-seniorow",
    language: "Polish",
  },
  {
    id: 94,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/94?key=1319679107135189731165976618182301395321",
    name: "Polecane",
    alias: "polecane",
    language: "Polish",
  },
  {
    id: 95,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/95?key=1319679107135189731165976618182301395321",
    name: "Tereny zielone",
    longName: "Tereny zielone we Wrocławiu",
    alias: "tereny-zielone",
    language: "Polish",
  },
  {
    id: 96,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/96?key=1319679107135189731165976618182301395321",
    name: "Dla rodziców",
    alias: "dla-rodzicow",
    language: "Polish",
  },
  {
    id: 97,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/97?key=1319679107135189731165976618182301395321",
    name: "Niepełnosprawni",
    alias: "niepelnosprawni",
    language: "Polish",
  },
  {
    id: 111,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/111?key=1319679107135189731165976618182301395321",
    name: "Nadodrze",
    alias: "strefa-handlu-nadodrze",
    language: "Polish",
  },
  {
    id: 202,
    modified: "2021-04-09T12:55",
    url: "https://go.wroclaw.pl/api/v1.0/types/202?key=1319679107135189731165976618182301395321",
    name: "Apartament",
    alias: "apartament",
    language: "Polish",
  },
  {
    id: 205,
    modified: "2021-04-09T12:54",
    url: "https://go.wroclaw.pl/api/v1.0/types/205?key=1319679107135189731165976618182301395321",
    name: "Kemping",
    longName: "Kempingi we Wrocławiu",
    alias: "kemping",
    language: "Polish",
  },
  {
    id: 206,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/206?key=1319679107135189731165976618182301395321",
    name: "Kawiarnie",
    longName: "Kawiarnie we Wrocławiu",
    alias: "kawiarnie",
    language: "Polish",
  },
  {
    id: 207,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/207?key=1319679107135189731165976618182301395321",
    name: "Pizzerie",
    longName: "Pizzerie we Wrocławiu",
    alias: "pizzerie",
    language: "Polish",
  },
  {
    id: 208,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/208?key=1319679107135189731165976618182301395321",
    name: "Bary",
    longName: "Bary we Wrocławiu",
    alias: "bary",
    language: "Polish",
  },
  {
    id: 209,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/209?key=1319679107135189731165976618182301395321",
    name: "Puby",
    longName: "Puby we Wrocławiu",
    alias: "puby-wroclaw",
    language: "Polish",
  },
  {
    id: 210,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/210?key=1319679107135189731165976618182301395321",
    name: "Restauracje",
    longName: "Restauracje we Wrocławiu",
    alias: "restauracje",
    language: "Polish",
  },
  {
    id: 211,
    modified: "2021-04-27T14:29",
    url: "https://go.wroclaw.pl/api/v1.0/types/211?key=1319679107135189731165976618182301395321",
    name: "Krasnale",
    longName: "Krasnale wrocławskie",
    alias: "krasnale",
    language: "Polish",
  },
  {
    id: 212,
    modified: "2018-10-10T10:56",
    url: "https://go.wroclaw.pl/api/v1.0/types/212?key=1319679107135189731165976618182301395321",
    name: "Pomniki i rzeźby",
    longName: "Pomniki i rzeźby we Wrocławiu",
    alias: "pomniki-rzezby-wroclaw",
    language: "Polish",
  },
  {
    id: 213,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/213?key=1319679107135189731165976618182301395321",
    name: "Zabytki",
    longName: "Zabytki we Wrocławiu",
    alias: "zabytki",
    language: "Polish",
  },
  {
    id: 214,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/214?key=1319679107135189731165976618182301395321",
    name: "Informator turystyczny",
    longName: "Informator turystyczny we Wrocławiu",
    alias: "informator-turystyczny",
    language: "Polish",
  },
  {
    id: 215,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/215?key=1319679107135189731165976618182301395321",
    name: "Kościoły i świątynie",
    longName: "Kościoły i świątynie we Wrocławiu",
    alias: "swiatynie-koscioly-wroclaw",
    language: "Polish",
  },
  {
    id: 216,
    modified: "2021-10-05T14:35",
    url: "https://go.wroclaw.pl/api/v1.0/types/216?key=1319679107135189731165976618182301395321",
    name: "Punkty widokowe",
    longName: "Punkty widokowe we Wrocławiu",
    alias: "punkty-widokowe-wroclaw",
    language: "Polish",
  },
  {
    id: 217,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/217?key=1319679107135189731165976618182301395321",
    name: "Fontanny",
    longName: "Fontanny we Wrocławiu",
    alias: "fontanny-wroclaw",
    language: "Polish",
  },
  {
    id: 218,
    modified: "2020-08-03T23:31",
    url: "https://go.wroclaw.pl/api/v1.0/types/218?key=1319679107135189731165976618182301395321",
    name: "Wirydarze",
    longName: "Wirydarze we Wrocławiu",
    alias: "wirydarze",
    language: "Polish",
  },
  {
    id: 219,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/219?key=1319679107135189731165976618182301395321",
    name: "Biblioteka",
    alias: "biblioteka",
    language: "Polish",
  },
  {
    id: 221,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/221?key=1319679107135189731165976618182301395321",
    name: "Kino",
    longName: "Kina we Wrocławiu",
    alias: "kino",
    language: "Polish",
  },
  {
    id: 222,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/222?key=1319679107135189731165976618182301395321",
    name: "Księgarnia",
    alias: "ksiegarnia",
    language: "Polish",
  },
  {
    id: 223,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/223?key=1319679107135189731165976618182301395321",
    name: "Muzea",
    longName: "Muzeum we Wrocławiu",
    alias: "muzea-wroclaw",
    language: "Polish",
  },
  {
    id: 224,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/224?key=1319679107135189731165976618182301395321",
    name: "Ośrodki kultury",
    longName: "Ośrodki kultury we Wrocławiu",
    alias: "osrodki-kultury",
    language: "Polish",
  },
  {
    id: 225,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/225?key=1319679107135189731165976618182301395321",
    name: "Sala koncertowa",
    alias: "sala-koncertowa",
    language: "Polish",
  },
  {
    id: 226,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/226?key=1319679107135189731165976618182301395321",
    name: "Teatry",
    longName: "Teatr we Wrocławiu",
    alias: "teatry",
    language: "Polish",
  },
  {
    id: 227,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/227?key=1319679107135189731165976618182301395321",
    name: "Kluby muzyczne",
    longName: "Kluby muzyczne we Wrocławiu",
    alias: "kluby-muzyczne-wroclaw",
    language: "Polish",
  },
  {
    id: 228,
    modified: "2019-06-19T12:10",
    url: "https://go.wroclaw.pl/api/v1.0/types/228?key=1319679107135189731165976618182301395321",
    name: "Basen",
    alias: "basen",
    language: "Polish",
  },
  {
    id: 229,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/229?key=1319679107135189731165976618182301395321",
    name: "Siłownia",
    alias: "silownia",
    language: "Polish",
  },
  {
    id: 230,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/230?key=1319679107135189731165976618182301395321",
    name: "Fitness",
    alias: "klub-sportowy-fitness",
    language: "Polish",
  },
  {
    id: 231,
    modified: "2018-10-12T13:00",
    url: "https://go.wroclaw.pl/api/v1.0/types/231?key=1319679107135189731165976618182301395321",
    name: "Kręgielnie",
    longName: "Księgarnie we Wrocławiu",
    alias: "kregielnia",
    language: "Polish",
  },
  {
    id: 232,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/232?key=1319679107135189731165976618182301395321",
    name: "Lodowisko",
    alias: "lodowisko",
    language: "Polish",
  },
  {
    id: 233,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/233?key=1319679107135189731165976618182301395321",
    name: "Szkoła tańca",
    alias: "szkola-tanca",
    language: "Polish",
  },
  {
    id: 234,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/234?key=1319679107135189731165976618182301395321",
    name: "Stadion",
    alias: "stadion",
    language: "Polish",
  },
  {
    id: 235,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/235?key=1319679107135189731165976618182301395321",
    name: "Boisko",
    alias: "boisko",
    language: "Polish",
  },
  {
    id: 236,
    modified: "2019-06-19T11:50",
    url: "https://go.wroclaw.pl/api/v1.0/types/236?key=1319679107135189731165976618182301395321",
    name: "Kort",
    alias: "kort",
    language: "Polish",
  },
  {
    id: 237,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/237?key=1319679107135189731165976618182301395321",
    name: "Parki i ogrody",
    longName: "Parki i ogrody we Wrocławiu",
    alias: "parki-ogrody",
    language: "Polish",
  },
  {
    id: 238,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/238?key=1319679107135189731165976618182301395321",
    name: "Plac zabaw",
    alias: "plac-zabaw",
    language: "Polish",
  },
  {
    id: 239,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/239?key=1319679107135189731165976618182301395321",
    name: "Sala zabaw",
    alias: "sala-zabaw",
    language: "Polish",
  },
  {
    id: 240,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/240?key=1319679107135189731165976618182301395321",
    name: "Plaża miejska",
    alias: "plaza-miejska",
    language: "Polish",
  },
  {
    id: 241,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/241?key=1319679107135189731165976618182301395321",
    name: "Grill, miejsce ogniskowe",
    alias: "grill-miejsce-ogniskowe",
    language: "Polish",
  },
  {
    id: 242,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/242?key=1319679107135189731165976618182301395321",
    name: "Polana rekreacyjna",
    alias: "polana-rekreacyjna",
    language: "Polish",
  },
  {
    id: 243,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/243?key=1319679107135189731165976618182301395321",
    name: "Wyspa",
    alias: "wyspa",
    language: "Polish",
  },
  {
    id: 244,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/244?key=1319679107135189731165976618182301395321",
    name: "Apteka",
    alias: "apteka",
    language: "Polish",
  },
  {
    id: 245,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/245?key=1319679107135189731165976618182301395321",
    name: "Szpital",
    alias: "szpital",
    language: "Polish",
  },
  {
    id: 246,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/246?key=1319679107135189731165976618182301395321",
    name: "Komenda, komisariat policji",
    alias: "komenda-policji-straz-miejska",
    language: "Polish",
  },
  {
    id: 247,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/247?key=1319679107135189731165976618182301395321",
    name: "Poradnia",
    alias: "poradnia",
    language: "Polish",
  },
  {
    id: 248,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/248?key=1319679107135189731165976618182301395321",
    name: "Pomoc socjalna",
    alias: "pomoc-spoleczna",
    language: "Polish",
  },
  {
    id: 249,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/249?key=1319679107135189731165976618182301395321",
    name: "Hospicjum",
    alias: "hospicjum-zaklad-opiekunczo-leczniczy",
    language: "Polish",
  },
  {
    id: 250,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/250?key=1319679107135189731165976618182301395321",
    name: "Dworzec",
    alias: "dworzec-stacja-kolejowa",
    language: "Polish",
  },
  {
    id: 251,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/251?key=1319679107135189731165976618182301395321",
    name: "Wypożyczalnia samochodów",
    alias: "wypozyczalnia-samochodow",
    language: "Polish",
  },
  {
    id: 252,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/252?key=1319679107135189731165976618182301395321",
    name: "Lotnisko",
    longName: "Lotnisko we Wrocławiu",
    alias: "lotnisko",
    language: "Polish",
  },
  {
    id: 253,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/253?key=1319679107135189731165976618182301395321",
    name: "Stacja paliw",
    alias: "stacja-benzynowa",
    language: "Polish",
  },
  {
    id: 254,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/254?key=1319679107135189731165976618182301395321",
    name: "Parking",
    alias: "parking",
    language: "Polish",
  },
  {
    id: 255,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/255?key=1319679107135189731165976618182301395321",
    name: "Ośrodek szkolenia kierowców",
    alias: "osrodek-szkolenia-kierowcow",
    language: "Polish",
  },
  {
    id: 256,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/256?key=1319679107135189731165976618182301395321",
    name: "Rower miejski",
    longName: "Rowery miejskie we Wrocławiu",
    alias: "rower-miejski",
    language: "Polish",
  },
  {
    id: 257,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/257?key=1319679107135189731165976618182301395321",
    name: "Park&ride",
    alias: "park-ride",
    language: "Polish",
  },
  {
    id: 258,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/258?key=1319679107135189731165976618182301395321",
    name: "Szkoła",
    alias: "szkola",
    language: "Polish",
  },
  {
    id: 259,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/259?key=1319679107135189731165976618182301395321",
    name: "Przedszkole",
    alias: "przedszkole",
    language: "Polish",
  },
  {
    id: 260,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/260?key=1319679107135189731165976618182301395321",
    name: "Żłobek",
    alias: "zlobek",
    language: "Polish",
  },
  {
    id: 261,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/261?key=1319679107135189731165976618182301395321",
    name: "Opiekun dzienny",
    alias: "opiekun-dzienny",
    language: "Polish",
  },
  {
    id: 262,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/262?key=1319679107135189731165976618182301395321",
    name: "Uczelnia, szkoła wyższa",
    alias: "uczelnia-szkola-wyzsza",
    language: "Polish",
  },
  {
    id: 263,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/263?key=1319679107135189731165976618182301395321",
    name: "Szkoła językowa",
    alias: "szkola-jezykowa",
    language: "Polish",
  },
  {
    id: 264,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/264?key=1319679107135189731165976618182301395321",
    name: "Świetlica środowiskowa, klub młodzieży",
    alias: "swietlica-srodowiskowa-klub-mlodziezy",
    language: "Polish",
  },
  {
    id: 265,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/265?key=1319679107135189731165976618182301395321",
    name: "Klub seniora",
    alias: "klub-seniora",
    language: "Polish",
  },
  {
    id: 266,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/266?key=1319679107135189731165976618182301395321",
    name: "Inkubator",
    alias: "inkubator",
    language: "Polish",
  },
  {
    id: 267,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/267?key=1319679107135189731165976618182301395321",
    name: "Coworking",
    alias: "coworking",
    language: "Polish",
  },
  {
    id: 268,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/268?key=1319679107135189731165976618182301395321",
    name: "Park przemysłowy",
    alias: "park-przemyslowy",
    language: "Polish",
  },
  {
    id: 269,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/269?key=1319679107135189731165976618182301395321",
    name: "Park technologiczny",
    alias: "park-technologiczny",
    language: "Polish",
  },
  {
    id: 270,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/270?key=1319679107135189731165976618182301395321",
    name: "Centrum konferencyjne",
    alias: "centrum-konferencyjne",
    language: "Polish",
  },
  {
    id: 271,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/271?key=1319679107135189731165976618182301395321",
    name: "Urząd Miejski",
    alias: "urzad-miejski",
    language: "Polish",
  },
  {
    id: 272,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/272?key=1319679107135189731165976618182301395321",
    name: "Galerie handlowe",
    longName: "Galerie handlowe we Wrocławiu",
    alias: "galerie-handlowe",
    language: "Polish",
  },
  {
    id: 273,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/273?key=1319679107135189731165976618182301395321",
    name: "Targowisko",
    alias: "targowiska",
    language: "Polish",
  },
  {
    id: 274,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/274?key=1319679107135189731165976618182301395321",
    name: "Dostawca mediów",
    alias: "dostawca-mediow",
    language: "Polish",
  },
  {
    id: 275,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/275?key=1319679107135189731165976618182301395321",
    name: "Urząd Skarbowy",
    alias: "urzad-skarbowy",
    language: "Polish",
  },
  {
    id: 276,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/276?key=1319679107135189731165976618182301395321",
    name: "Zakład Ubezpieczeń Społecznych (ZUS)",
    alias: "zaklad-ubezpieczen-spolecznych-zus",
    language: "Polish",
  },
  {
    id: 277,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/277?key=1319679107135189731165976618182301395321",
    name: "MPK",
    alias: "mpk",
    language: "Polish",
  },
  {
    id: 278,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/278?key=1319679107135189731165976618182301395321",
    name: "Jednostka organizacyjna gminy",
    alias: "spolka-jednostka-miejska",
    language: "Polish",
  },
  {
    id: 279,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/279?key=1319679107135189731165976618182301395321",
    name: "Rada Osiedla",
    alias: "rada-osiedla",
    language: "Polish",
  },
  {
    id: 280,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/280?key=1319679107135189731165976618182301395321",
    name: "Urząd Pocztowy",
    alias: "urzad-pocztowy",
    language: "Polish",
  },
  {
    id: 281,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/281?key=1319679107135189731165976618182301395321",
    name: "Sądownictwo",
    alias: "sad-prokuratura",
    language: "Polish",
  },
  {
    id: 282,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/282?key=1319679107135189731165976618182301395321",
    name: "Urząd, instytucja (pozostałe)",
    alias: "urzad-instytucja-pozostale",
    language: "Polish",
  },
  {
    id: 283,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/283?key=1319679107135189731165976618182301395321",
    name: "Wirtualne biuro",
    alias: "wirtualne-biuro",
    language: "Polish",
  },
  {
    id: 284,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/284?key=1319679107135189731165976618182301395321",
    name: "Sztuki walki",
    alias: "sztuki-walki",
    language: "Polish",
  },
  {
    id: 285,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/285?key=1319679107135189731165976618182301395321",
    name: "Joga, gimnastyka, Tai Chi",
    alias: "joga-gimnastyka-tai-chi",
    language: "Polish",
  },
  {
    id: 286,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/286?key=1319679107135189731165976618182301395321",
    name: "Szermierka, kendo",
    alias: "szermierka-kendo",
    language: "Polish",
  },
  {
    id: 287,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/287?key=1319679107135189731165976618182301395321",
    name: "Centrum sportowe",
    longName: "Centa sportowe we Wrocławiu",
    alias: "centrum-sportowe",
    language: "Polish",
  },
  {
    id: 288,
    modified: "2019-06-19T12:10",
    url: "https://go.wroclaw.pl/api/v1.0/types/288?key=1319679107135189731165976618182301395321",
    name: "Ośrodek wodny",
    alias: "osrodek-wodny",
    language: "Polish",
  },
  {
    id: 289,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/289?key=1319679107135189731165976618182301395321",
    name: "Pole golfowe",
    alias: "pole-golfowe",
    language: "Polish",
  },
  {
    id: 290,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/290?key=1319679107135189731165976618182301395321",
    name: "Ścianka wspinaczkowa",
    alias: "scianka-wspinaczkowa",
    language: "Polish",
  },
  {
    id: 291,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/291?key=1319679107135189731165976618182301395321",
    name: "Lodziarnie",
    longName: "Lodziarnie we Wrocławiu",
    alias: "lodziarnie",
    language: "Polish",
  },
  {
    id: 292,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/292?key=1319679107135189731165976618182301395321",
    name: "Galerie sztuki",
    longName: "Galerie sztuki we Wrocławiu",
    alias: "galerie-sztuki",
    language: "Polish",
  },
  {
    id: 293,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/293?key=1319679107135189731165976618182301395321",
    name: "Hotele",
    longName: "Hotele we Wrocławiu",
    alias: "hotele",
    language: "Polish",
  },
  {
    id: 294,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/294?key=1319679107135189731165976618182301395321",
    name: "Hostele",
    longName: "Hostele Wrocław",
    alias: "hostele",
    language: "Polish",
  },
  {
    id: 298,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/298?key=1319679107135189731165976618182301395321",
    name: "Inne",
    alias: "inne",
    language: "Polish",
  },
  {
    id: 328,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/328?key=1319679107135189731165976618182301395321",
    name: "Do 15 minut",
    alias: "do-15-minut",
    language: "Polish",
  },
  {
    id: 329,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/329?key=1319679107135189731165976618182301395321",
    name: "Do 30 minut",
    alias: "do-30-minut",
    language: "Polish",
  },
  {
    id: 330,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/330?key=1319679107135189731165976618182301395321",
    name: "Bez ograniczeń czasowych",
    alias: "bez-ograniczen-czasowych",
    language: "Polish",
  },
  {
    id: 331,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/331?key=1319679107135189731165976618182301395321",
    name: "5.00-22.00",
    alias: "5-00-22-00",
    language: "Polish",
  },
  {
    id: 332,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/332?key=1319679107135189731165976618182301395321",
    name: "Płatne",
    alias: "platne",
    language: "Polish",
  },
  {
    id: 335,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/335?key=1319679107135189731165976618182301395321",
    name: "Hale kupieckie",
    longName: "Hale kupieckie we Wrocławiu",
    alias: "hale-kupieckie",
    language: "Polish",
  },
  {
    id: 336,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/336?key=1319679107135189731165976618182301395321",
    name: "Domy handlowe",
    longName: "Domy handlowe we Wrocławiu",
    alias: "domy-handlowe",
    language: "Polish",
  },
  {
    id: 337,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/337?key=1319679107135189731165976618182301395321",
    name: "Miejsca handlu okrężnego",
    alias: "sprzedaz-caloroczna-i-sezonowa",
    language: "Polish",
  },
  {
    id: 339,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/339?key=1319679107135189731165976618182301395321",
    name: "Hotel 2-gwiazdkowy",
    longName: "Hotele 2-gwiazdkowe we Wrocławiu",
    alias: "hotel-2-gwiazdkowy",
    language: "Polish",
  },
  {
    id: 340,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/340?key=1319679107135189731165976618182301395321",
    name: "Hotel 3-gwiazdkowy",
    longName: "Hotele 3-gwiazdkowe we Wrocławiu",
    alias: "hotel-3-gwiazdkowy",
    language: "Polish",
  },
  {
    id: 341,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/341?key=1319679107135189731165976618182301395321",
    name: "Hotel 4-gwiazdkowy",
    longName: "Hotele 4-gwiazdkowe we Wrocławiu",
    alias: "hotel-4-gwiazdkowy",
    language: "Polish",
  },
  {
    id: 342,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/342?key=1319679107135189731165976618182301395321",
    name: "Hotel 5-gwiazdkowy",
    longName: "Hotele 5-gwiazdkowe we Wrocławiu",
    alias: "hotel-5-gwiazdkowy",
    language: "Polish",
  },
  {
    id: 343,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/343?key=1319679107135189731165976618182301395321",
    name: "Wifi",
    alias: "wifi",
    language: "Polish",
  },
  {
    id: 344,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/344?key=1319679107135189731165976618182301395321",
    name: "Dom studencki",
    longName: "Domy studenckie we Wrocławiu",
    alias: "dom-studencki",
    language: "Polish",
  },
  {
    id: 345,
    modified: "2020-08-03T22:50",
    url: "https://go.wroclaw.pl/api/v1.0/types/345?key=1319679107135189731165976618182301395321",
    name: "Atrakcje",
    longName: "Atrakcje we Wrocławiu",
    alias: "atrakcje",
    language: "Polish",
  },
  {
    id: 346,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/346?key=1319679107135189731165976618182301395321",
    name: "Podwórko",
    alias: "podworko",
    language: "Polish",
  },
  {
    id: 351,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/351?key=1319679107135189731165976618182301395321",
    name: "Mosty",
    longName: "Mosty Wrocław",
    alias: "mosty-wroclaw",
    language: "Polish",
  },
  {
    id: 352,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/352?key=1319679107135189731165976618182301395321",
    name: "Polska kuchnia",
    alias: "polska-kuchnia",
    language: "Polish",
  },
  {
    id: 353,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/353?key=1319679107135189731165976618182301395321",
    name: "Fast food",
    longName: "Fast Foody we Wrocławiu",
    alias: "fast-food",
    language: "Polish",
  },
  {
    id: 354,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/354?key=1319679107135189731165976618182301395321",
    name: "Wegetariańska/wegańska",
    longName: "Restauracje wegetariańskie/wegańskie",
    alias: "wegetarianska-weganska",
    language: "Polish",
  },
  {
    id: 355,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/355?key=1319679107135189731165976618182301395321",
    name: "Orientalna",
    longName: "Restauracje orientalne we Wrocławiu",
    alias: "orientalna",
    language: "Polish",
  },
  {
    id: 356,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/356?key=1319679107135189731165976618182301395321",
    name: "Polska kuchnia",
    longName: "Polska kuchnia we Wrocławiu",
    alias: "polska-kuchnia",
    language: "Polish",
  },
  {
    id: 357,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/357?key=1319679107135189731165976618182301395321",
    name: "Food truck",
    longName: "Food Trucki we Wrocławiu",
    alias: "food-truck",
    language: "Polish",
  },
  {
    id: 358,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/358?key=1319679107135189731165976618182301395321",
    name: "Kawiarnie",
    longName: "Kawiarnie we Wrocławiu",
    alias: "kawa",
    language: "Polish",
  },
  {
    id: 359,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/359?key=1319679107135189731165976618182301395321",
    name: "Herbata",
    longName: "Herbata we Wrocławiu",
    alias: "herbata",
    language: "Polish",
  },
  {
    id: 360,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/360?key=1319679107135189731165976618182301395321",
    name: "Ogródek",
    longName: "Restauracje z ogródkiem we Wrocławiu",
    alias: "ogrodek",
    language: "Polish",
  },
  {
    id: 361,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/361?key=1319679107135189731165976618182301395321",
    name: "Kościoły i świątynie",
    longName: "Kościoły wrocławskie",
    alias: "koscioly-i-swiatynie",
    language: "Polish",
  },
  {
    id: 362,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/362?key=1319679107135189731165976618182301395321",
    name: "Synagoga",
    alias: "synagoga",
    language: "Polish",
  },
  {
    id: 363,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/363?key=1319679107135189731165976618182301395321",
    name: "Zbór",
    alias: "zbor",
    language: "Polish",
  },
  {
    id: 364,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/364?key=1319679107135189731165976618182301395321",
    name: "Cerkiew",
    alias: "cerkiew",
    language: "Polish",
  },
  {
    id: 365,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/365?key=1319679107135189731165976618182301395321",
    name: "Meczet",
    alias: "meczet",
    language: "Polish",
  },
  {
    id: 366,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/366?key=1319679107135189731165976618182301395321",
    name: "Nekropolie",
    longName: "Nekropolie we Wrocławiu",
    alias: "nekropolie",
    language: "Polish",
  },
  {
    id: 367,
    modified: "2019-06-19T11:50",
    url: "https://go.wroclaw.pl/api/v1.0/types/367?key=1319679107135189731165976618182301395321",
    name: "Sporty wodne",
    alias: "sporty-wodne",
    language: "Polish",
  },
  {
    id: 368,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/368?key=1319679107135189731165976618182301395321",
    name: "Obiekt sportowo-rekreacyjny",
    longName: "Obiekty sportowo-rekreacyjne",
    alias: "obiekt-sportowo-rekreacyjny",
    language: "Polish",
  },
  {
    id: 369,
    modified: "2019-06-19T11:50",
    url: "https://go.wroclaw.pl/api/v1.0/types/369?key=1319679107135189731165976618182301395321",
    name: "Sporty rakietowe",
    alias: "sporty-rakietowe",
    language: "Polish",
  },
  {
    id: 374,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/374?key=1319679107135189731165976618182301395321",
    name: "Odra - atrakcje, rozrywka i rekreacja",
    longName: "Odra - atrakcje, rozrywka i rekreacja",
    alias: "nad-odra",
    language: "Polish",
  },
  {
    id: 375,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/375?key=1319679107135189731165976618182301395321",
    name: "Taxi",
    longName: "Taxi we Wrocławiu",
    alias: "taxi",
    language: "Polish",
  },
  {
    id: 376,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/376?key=1319679107135189731165976618182301395321",
    name: "Państwowa",
    alias: "panstwowa",
    language: "Polish",
  },
  {
    id: 377,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/377?key=1319679107135189731165976618182301395321",
    name: "Prywatna",
    alias: "prywatna",
    language: "Polish",
  },
  {
    id: 378,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/378?key=1319679107135189731165976618182301395321",
    name: "Sezonowe",
    alias: "sezonowe",
    language: "Polish",
  },
  {
    id: 379,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/379?key=1319679107135189731165976618182301395321",
    name: "Całoroczne",
    alias: "caloroczne",
    language: "Polish",
  },
  {
    id: 380,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/380?key=1319679107135189731165976618182301395321",
    name: "Kantor",
    alias: "kantor",
    language: "Polish",
  },
  {
    id: 382,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/382?key=1319679107135189731165976618182301395321",
    name: "Pamiątki",
    longName: "Pamiątki o Wrocławiu",
    alias: "pamiatki",
    language: "Polish",
  },
  {
    id: 383,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/383?key=1319679107135189731165976618182301395321",
    name: "Rękodzieło",
    alias: "rekodzielo",
    language: "Polish",
  },
  {
    id: 384,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/384?key=1319679107135189731165976618182301395321",
    name: "Sąd",
    alias: "sad",
    language: "Polish",
  },
  {
    id: 385,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/385?key=1319679107135189731165976618182301395321",
    name: "Prokuratura",
    alias: "prokuratura",
    language: "Polish",
  },
  {
    id: 386,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/386?key=1319679107135189731165976618182301395321",
    name: "Jednostka budżetowa gminy",
    alias: "jednostka-budzetowa-gminy",
    language: "Polish",
  },
  {
    id: 387,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/387?key=1319679107135189731165976618182301395321",
    name: "Samorządowy zakład budżetowy",
    alias: "samorzadowy-zaklad-budzetowy",
    language: "Polish",
  },
  {
    id: 388,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/388?key=1319679107135189731165976618182301395321",
    name: "Spółka gminy",
    alias: "spolka-gminy",
    language: "Polish",
  },
  {
    id: 389,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/389?key=1319679107135189731165976618182301395321",
    name: "Woda",
    alias: "woda",
    language: "Polish",
  },
  {
    id: 390,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/390?key=1319679107135189731165976618182301395321",
    name: "Gaz",
    alias: "gaz",
    language: "Polish",
  },
  {
    id: 391,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/391?key=1319679107135189731165976618182301395321",
    name: "Prąd",
    alias: "prad",
    language: "Polish",
  },
  {
    id: 392,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/392?key=1319679107135189731165976618182301395321",
    name: "Urząd Miejski",
    alias: "urzad-miejski",
    language: "Polish",
  },
  {
    id: 393,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/393?key=1319679107135189731165976618182301395321",
    name: "COM",
    alias: "com",
    language: "Polish",
  },
  {
    id: 394,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/394?key=1319679107135189731165976618182301395321",
    name: "COP",
    alias: "cop",
    language: "Polish",
  },
  {
    id: 395,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/395?key=1319679107135189731165976618182301395321",
    name: "Urząd Wojewódzki",
    alias: "urzad-wojewodzki",
    language: "Polish",
  },
  {
    id: 396,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/396?key=1319679107135189731165976618182301395321",
    name: "Parki i centra biznesowe",
    alias: "parki-i-centra-biznesowe",
    language: "Polish",
  },
  {
    id: 397,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/397?key=1319679107135189731165976618182301395321",
    name: "Służby mundurowe",
    alias: "sluzby-mundurowe",
    language: "Polish",
  },
  {
    id: 399,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/399?key=1319679107135189731165976618182301395321",
    name: "Pomoc medyczna",
    alias: "pomoc-medyczna",
    language: "Polish",
  },
  {
    id: 400,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/400?key=1319679107135189731165976618182301395321",
    name: "Opieka",
    alias: "opieka",
    language: "Polish",
  },
  {
    id: 401,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/401?key=1319679107135189731165976618182301395321",
    name: "Rowerowy",
    alias: "rowerowy",
    language: "Polish",
  },
  {
    id: 402,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/402?key=1319679107135189731165976618182301395321",
    name: "Ciężarowy",
    alias: "ciezarowy",
    language: "Polish",
  },
  {
    id: 403,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/403?key=1319679107135189731165976618182301395321",
    name: "Pensjonaty",
    longName: "Pensjonaty we Wrocławiu",
    alias: "pensjonat",
    language: "Polish",
  },
  {
    id: 404,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/404?key=1319679107135189731165976618182301395321",
    name: "Kajaki i rowery wodne",
    alias: "kajaki-i-rowery-wodne",
    language: "Polish",
  },
  {
    id: 405,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/405?key=1319679107135189731165976618182301395321",
    name: "Bulwar",
    alias: "bulwar",
    language: "Polish",
  },
  {
    id: 406,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/406?key=1319679107135189731165976618182301395321",
    name: "Zakład opiekuńczo-leczniczy",
    alias: "zaklad-opiekunczo-leczniczy",
    language: "Polish",
  },
  {
    id: 407,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/407?key=1319679107135189731165976618182301395321",
    name: "Ostry dyżur",
    alias: "ostry-dyzur",
    language: "Polish",
  },
  {
    id: 408,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/408?key=1319679107135189731165976618182301395321",
    name: "Jadłodajnia",
    alias: "jadlodajnia",
    language: "Polish",
  },
  {
    id: 409,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/409?key=1319679107135189731165976618182301395321",
    name: "Instytucja pomocowa",
    alias: "instytucja-pomocowa",
    language: "Polish",
  },
  {
    id: 410,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/410?key=1319679107135189731165976618182301395321",
    name: "Łaźnia",
    alias: "laznia",
    language: "Polish",
  },
  {
    id: 411,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/411?key=1319679107135189731165976618182301395321",
    name: "Straż miejska",
    alias: "straz-miejska",
    language: "Polish",
  },
  {
    id: 412,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/412?key=1319679107135189731165976618182301395321",
    name: "Straż pożarna",
    alias: "straz-pozarna",
    language: "Polish",
  },
  {
    id: 413,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/413?key=1319679107135189731165976618182301395321",
    name: "Mediacje",
    alias: "mediacje",
    language: "Polish",
  },
  {
    id: 414,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/414?key=1319679107135189731165976618182301395321",
    name: "Psycholog",
    alias: "psycholog",
    language: "Polish",
  },
  {
    id: 415,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/415?key=1319679107135189731165976618182301395321",
    name: "Logopeda",
    alias: "logopeda",
    language: "Polish",
  },
  {
    id: 416,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/416?key=1319679107135189731165976618182301395321",
    name: "Kolej",
    longName: "Kolej we Wrocławiu",
    alias: "kolej",
    language: "Polish",
  },
  {
    id: 417,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/417?key=1319679107135189731165976618182301395321",
    name: "Stacja kolejowa",
    alias: "stacja-kolejowa",
    language: "Polish",
  },
  {
    id: 418,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/418?key=1319679107135189731165976618182301395321",
    name: "Szkoła podstawowa",
    alias: "szkoly-podstawowe-wroclaw",
    language: "Polish",
  },
  {
    id: 419,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/419?key=1319679107135189731165976618182301395321",
    name: "Gimnazjum",
    alias: "gimnazjum",
    language: "Polish",
  },
  {
    id: 420,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/420?key=1319679107135189731165976618182301395321",
    name: "Liceum Ogólnokształcące",
    alias: "liceum-ogolnoksztalcace",
    language: "Polish",
  },
  {
    id: 421,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/421?key=1319679107135189731165976618182301395321",
    name: "Technikum",
    alias: "technikum",
    language: "Polish",
  },
  {
    id: 422,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/422?key=1319679107135189731165976618182301395321",
    name: "Szkoła zawodowa",
    alias: "szkoly-zawodowe-wroclaw",
    language: "Polish",
  },
  {
    id: 423,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/423?key=1319679107135189731165976618182301395321",
    name: "Dodatkowe kategorie",
    alias: "dodatkowe-kategorie",
    language: "Polish",
  },
  {
    id: 424,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/424?key=1319679107135189731165976618182301395321",
    name: "Strefy handlu",
    alias: "strefy-handlu",
    language: "Polish",
  },
  {
    id: 426,
    modified: "2019-06-19T12:10",
    url: "https://go.wroclaw.pl/api/v1.0/types/426?key=1319679107135189731165976618182301395321",
    name: "Kąpielisko",
    alias: "kapielisko",
    language: "Polish",
  },
  {
    id: 427,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/427?key=1319679107135189731165976618182301395321",
    name: "Sauna",
    alias: "sauna",
    language: "Polish",
  },
  {
    id: 428,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/428?key=1319679107135189731165976618182301395321",
    name: "Wellness",
    alias: "wellness",
    language: "Polish",
  },
  {
    id: 429,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/429?key=1319679107135189731165976618182301395321",
    name: "TWG 2017",
    alias: "twg-2017",
    language: "Polish",
  },
  {
    id: 430,
    modified: "2019-06-19T11:50",
    url: "https://go.wroclaw.pl/api/v1.0/types/430?key=1319679107135189731165976618182301395321",
    name: "Tenis ziemny",
    alias: "tenis-ziemny",
    language: "Polish",
  },
  {
    id: 431,
    modified: "2019-06-19T11:50",
    url: "https://go.wroclaw.pl/api/v1.0/types/431?key=1319679107135189731165976618182301395321",
    name: "Tenis stołowy",
    alias: "tenis-stolowy",
    language: "Polish",
  },
  {
    id: 432,
    modified: "2019-06-19T11:50",
    url: "https://go.wroclaw.pl/api/v1.0/types/432?key=1319679107135189731165976618182301395321",
    name: "Squash",
    alias: "squash",
    language: "Polish",
  },
  {
    id: 433,
    modified: "2019-06-19T11:50",
    url: "https://go.wroclaw.pl/api/v1.0/types/433?key=1319679107135189731165976618182301395321",
    name: "Badminton",
    alias: "badminton",
    language: "Polish",
  },
  {
    id: 434,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/434?key=1319679107135189731165976618182301395321",
    name: "Piwo",
    longName: "Piwo we Wrocławiu",
    alias: "piwo",
    language: "Polish",
  },
  {
    id: 435,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/435?key=1319679107135189731165976618182301395321",
    name: "Wino",
    longName: "Wino we Wrocławiu",
    alias: "wino",
    language: "Polish",
  },
  {
    id: 436,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/436?key=1319679107135189731165976618182301395321",
    name: "Czeskie piwo",
    longName: "Czeskie piwo we Wrocławiu",
    alias: "czeskie-piwo",
    language: "Polish",
  },
  {
    id: 438,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/438?key=1319679107135189731165976618182301395321",
    name: "Inne",
    alias: "inne",
    language: "Polish",
  },
  {
    id: 441,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/441?key=1319679107135189731165976618182301395321",
    name: "Strona główna",
    longName: "Wrocław",
    alias: "wroclaw-eu",
    language: "Polish",
  },
  {
    id: 442,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/442?key=1319679107135189731165976618182301395321",
    name: "Promowane miejsca",
    alias: "promowane-miejsca",
    language: "Polish",
  },
  {
    id: 443,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/443?key=1319679107135189731165976618182301395321",
    name: "Konsulaty",
    alias: "konsulaty",
    language: "Polish",
  },
  {
    id: 444,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/444?key=1319679107135189731165976618182301395321",
    name: "Ogródek",
    alias: "ogrodek",
    language: "Polish",
  },
  {
    id: 863,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/863?key=1319679107135189731165976618182301395321",
    name: "Park trampolin",
    alias: "park-trampolin",
    language: "Polish",
  },
  {
    id: 864,
    modified: "2021-09-15T14:23",
    url: "https://go.wroclaw.pl/api/v1.0/types/864?key=1319679107135189731165976618182301395321",
    name: "Rozrywka",
    longName: "Rozrywka we Wrocławiu",
    alias: "rozrywka",
    language: "Polish",
  },
  {
    id: 865,
    modified: "2021-10-05T14:35",
    url: "https://go.wroclaw.pl/api/v1.0/types/865?key=1319679107135189731165976618182301395321",
    name: "TOP 10",
    longName: "Atrakcje Wrocławia – Top 10",
    alias: "atrakcje-wroclaw",
    language: "Polish",
  },
  {
    id: 874,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/874?key=1319679107135189731165976618182301395321",
    name: "Escape room",
    alias: "escape-room",
    language: "Polish",
  },
  {
    id: 1368,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/1368?key=1319679107135189731165976618182301395321",
    name: "Konie",
    alias: "konie",
    language: "Polish",
  },
  {
    id: 1373,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/1373?key=1319679107135189731165976618182301395321",
    name: "Wypożyczalnie samochodów",
    longName: "Wypożyczalnie samochodów we Wrocławiu",
    alias: "wypozyczalnie-samochodow",
    language: "Polish",
  },
  {
    id: 1375,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/1375?key=1319679107135189731165976618182301395321",
    name: "Karta turystyczna",
    alias: "karta-turystyczna",
    language: "Polish",
  },
  {
    id: 1376,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/1376?key=1319679107135189731165976618182301395321",
    name: "Punkty partnerskie",
    alias: "punkty-partnerskie",
    language: "Polish",
  },
  {
    id: 1377,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/1377?key=1319679107135189731165976618182301395321",
    name: "Top 5",
    alias: "top-5",
    language: "Polish",
  },
  {
    id: 1378,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/1378?key=1319679107135189731165976618182301395321",
    name: "Rozrywka",
    alias: "rozrywka-1",
    language: "Polish",
  },
  {
    id: 1379,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/1379?key=1319679107135189731165976618182301395321",
    name: "Muzea i galerie",
    alias: "muzea-i-galerie",
    language: "Polish",
  },
  {
    id: 1380,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/1380?key=1319679107135189731165976618182301395321",
    name: "Hotele i hostele",
    alias: "hotele-i-hostele",
    language: "Polish",
  },
  {
    id: 1381,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/1381?key=1319679107135189731165976618182301395321",
    name: "Gastronomia",
    alias: "gastronomia",
    language: "Polish",
  },
  {
    id: 1382,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/1382?key=1319679107135189731165976618182301395321",
    name: "Pamiątki i usługi",
    alias: "pamiatki-i-uslugi",
    language: "Polish",
  },
  {
    id: 1383,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/1383?key=1319679107135189731165976618182301395321",
    name: "Partnerzy punktowi",
    alias: "partnerzy-punktowi",
    language: "Polish",
  },
  {
    id: 1384,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/1384?key=1319679107135189731165976618182301395321",
    name: "Finansowanie",
    alias: "finansowanie",
    language: "Polish",
  },
  {
    id: 1385,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/1385?key=1319679107135189731165976618182301395321",
    name: "Aniołowie biznesu",
    alias: "aniolowie-biznesu",
    language: "Polish",
  },
  {
    id: 1386,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/1386?key=1319679107135189731165976618182301395321",
    name: "Fundusze Venture Capital",
    alias: "fundusze-venture-capital",
    language: "Polish",
  },
  {
    id: 1387,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/1387?key=1319679107135189731165976618182301395321",
    name: "Finansowanie publiczne",
    alias: "finansowanie-publiczne",
    language: "Polish",
  },
  {
    id: 1388,
    modified: "2018-10-10T15:50",
    url: "https://go.wroclaw.pl/api/v1.0/types/1388?key=1319679107135189731165976618182301395321",
    name: "Akceleratory",
    longName: "",
    alias: "akceleratory",
    language: "Polish",
  },
  {
    id: 1389,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/1389?key=1319679107135189731165976618182301395321",
    name: "Polecane wroclaw.pl",
    alias: "polecane-wroclaw-pl",
    language: "Polish",
  },
  {
    id: 1395,
    modified: "2021-09-09T11:04",
    url: "https://go.wroclaw.pl/api/v1.0/types/1395?key=1319679107135189731165976618182301395321",
    name: "Konsultacje społeczne",
    longName: "Konsultacje społeczne",
    alias: "konsultacje-spoleczne",
    language: "Polish",
  },
  {
    id: 1408,
    modified: "2018-09-20T10:15",
    url: "https://go.wroclaw.pl/api/v1.0/types/1408?key=1319679107135189731165976618182301395321",
    name: "Place zabaw",
    alias: "place-zabaw",
    language: "Polish",
  },
  {
    id: 1427,
    modified: "2021-03-19T11:21",
    url: "https://go.wroclaw.pl/api/v1.0/types/1427?key=1319679107135189731165976618182301395321",
    name: "Bankomat",
    alias: "bankomat",
    language: "Polish",
  },
  {
    id: 1467,
    modified: "2021-08-18T15:17",
    url: "https://go.wroclaw.pl/api/v1.0/types/1467?key=1319679107135189731165976618182301395321",
    name: "Miejsca dla dzieci na ferie zimowe",
    longName: "Miejsca dla dzieci na ferie zimowe",
    alias: "miejsca-dla-dzieci-na-ferie-zimowe",
    language: "Polish",
  },
  {
    id: 1485,
    modified: "2019-05-13T15:16",
    url: "https://go.wroclaw.pl/api/v1.0/types/1485?key=1319679107135189731165976618182301395321",
    name: "Partnerzy NW",
    alias: "partnerzy-nasz-wroclaw",
    language: "Polish",
  },
  {
    id: 1486,
    modified: "2019-05-21T15:14",
    url: "https://go.wroclaw.pl/api/v1.0/types/1486?key=1319679107135189731165976618182301395321",
    name: "Rozrywka",
    alias: "rozrywka-2",
    language: "Polish",
  },
  {
    id: 1487,
    modified: "2019-05-22T14:41",
    url: "https://go.wroclaw.pl/api/v1.0/types/1487?key=1319679107135189731165976618182301395321",
    name: "Kultura",
    alias: "kultura-2",
    language: "Polish",
  },
  {
    id: 1488,
    modified: "2019-05-22T14:41",
    url: "https://go.wroclaw.pl/api/v1.0/types/1488?key=1319679107135189731165976618182301395321",
    name: "Gastronomia",
    alias: "gastronomia-1",
    language: "Polish",
  },
  {
    id: 1489,
    modified: "2019-05-21T15:14",
    url: "https://go.wroclaw.pl/api/v1.0/types/1489?key=1319679107135189731165976618182301395321",
    name: "Kategorie partnerów",
    alias: "kategorie-partnerow",
    language: "Polish",
  },
  {
    id: 1490,
    modified: "2019-05-22T14:41",
    url: "https://go.wroclaw.pl/api/v1.0/types/1490?key=1319679107135189731165976618182301395321",
    name: "Sport",
    alias: "sport",
    language: "Polish",
  },
  {
    id: 1491,
    modified: "2019-05-22T14:42",
    url: "https://go.wroclaw.pl/api/v1.0/types/1491?key=1319679107135189731165976618182301395321",
    name: "Rekreacja",
    alias: "rekreacja",
    language: "Polish",
  },
  {
    id: 1492,
    modified: "2019-05-22T14:43",
    url: "https://go.wroclaw.pl/api/v1.0/types/1492?key=1319679107135189731165976618182301395321",
    name: "Usługi",
    alias: "uslugi",
    language: "Polish",
  },
  {
    id: 1493,
    modified: "2019-05-22T14:43",
    url: "https://go.wroclaw.pl/api/v1.0/types/1493?key=1319679107135189731165976618182301395321",
    name: "Kino",
    alias: "kino-1",
    language: "Polish",
  },
  {
    id: 1494,
    modified: "2019-05-22T14:44",
    url: "https://go.wroclaw.pl/api/v1.0/types/1494?key=1319679107135189731165976618182301395321",
    name: "Nowi Partnerzy",
    alias: "nowi-partnerzy",
    language: "Polish",
  },
  {
    id: 1495,
    modified: "2019-05-22T14:45",
    url: "https://go.wroclaw.pl/api/v1.0/types/1495?key=1319679107135189731165976618182301395321",
    name: "Edukacja",
    alias: "edukacja",
    language: "Polish",
  },
  {
    id: 1499,
    modified: "2019-06-19T11:11",
    url: "https://go.wroclaw.pl/api/v1.0/types/1499?key=1319679107135189731165976618182301395321",
    name: "Sporty drużynowe",
    alias: "sporty-druzynowe",
    language: "Polish",
  },
  {
    id: 1501,
    modified: "2019-06-19T11:25",
    url: "https://go.wroclaw.pl/api/v1.0/types/1501?key=1319679107135189731165976618182301395321",
    name: "Sporty indywidualne",
    alias: "sporty-indywidualne",
    language: "Polish",
  },
  {
    id: 1506,
    modified: "2020-12-06T09:10",
    url: "https://go.wroclaw.pl/api/v1.0/types/1506?key=1319679107135189731165976618182301395321",
    name: "Bezpłatne wejścia",
    alias: "bezplatne-wejscia",
    language: "Polish",
  },
  {
    id: 1510,
    modified: "2020-07-13T13:49",
    url: "https://go.wroclaw.pl/api/v1.0/types/1510?key=1319679107135189731165976618182301395321",
    name: "Centra Aktywności Lokalnej",
    alias: "centra-aktywnosci-lokalnej",
    language: "Polish",
  },
  {
    id: 1511,
    modified: "2020-08-12T23:05",
    url: "https://go.wroclaw.pl/api/v1.0/types/1511?key=1319679107135189731165976618182301395321",
    name: "Murale/Street art",
    longName: "Murale we Wrocławiu",
    alias: "murale-street-art",
    language: "Polish",
  },
  {
    id: 1512,
    modified: "2020-09-01T10:51",
    url: "https://go.wroclaw.pl/api/v1.0/types/1512?key=1319679107135189731165976618182301395321",
    name: "Bon turystyczny",
    longName: "Bon turystyczny",
    alias: "bon-turystyczny",
    language: "Polish",
  },
  {
    id: 1513,
    modified: "2020-11-06T15:17",
    url: "https://go.wroclaw.pl/api/v1.0/types/1513?key=1319679107135189731165976618182301395321",
    name: "Biuletyn wroclaw.pl",
    alias: "biuletyn-wroclaw-pl",
    language: "Polish",
  },
  {
    id: 1514,
    modified: "2020-11-09T12:33",
    url: "https://go.wroclaw.pl/api/v1.0/types/1514?key=1319679107135189731165976618182301395321",
    name: "Supermarket",
    alias: "supermarket",
    language: "Polish",
  },
  {
    id: 1612,
    modified: "2021-02-05T11:14",
    url: "https://go.wroclaw.pl/api/v1.0/types/1612?key=1319679107135189731165976618182301395321",
    name: "Gdzie na sanki?",
    longName: "Gdzie na sanki?",
    alias: "gdzie-na-sanki",
    language: "Polish",
  },
  {
    id: 1614,
    modified: "2021-02-18T10:33",
    url: "https://go.wroclaw.pl/api/v1.0/types/1614?key=1319679107135189731165976618182301395321",
    name: "Wrocławska Mapa Rzemieślników",
    longName: "Wrocławska Mapa Rzemieślników",
    alias: "wroclawska-mapa-rzemieslnikow",
    language: "Polish",
  },
  {
    id: 1615,
    modified: "2021-03-23T08:18",
    url: "https://go.wroclaw.pl/api/v1.0/types/1615?key=1319679107135189731165976618182301395321",
    name: "Remont podwórek",
    longName: "Remont podwórek",
    alias: "remont-podworek",
    language: "Polish",
  },
  {
    id: 1616,
    modified: "2021-03-26T11:10",
    url: "https://go.wroclaw.pl/api/v1.0/types/1616?key=1319679107135189731165976618182301395321",
    name: "Miejskie toalety",
    longName: "Miejskie toalety",
    alias: "miejskie-toalety",
    language: "Polish",
  },
  {
    id: 1617,
    modified: "2021-04-20T10:49",
    url: "https://go.wroclaw.pl/api/v1.0/types/1617?key=1319679107135189731165976618182301395321",
    name: "Serwisy rowerowe",
    alias: "serwisy-rowerowe",
    language: "Polish",
  },
  {
    id: 1622,
    modified: "2021-08-31T10:06",
    url: "https://go.wroclaw.pl/api/v1.0/types/1622?key=1319679107135189731165976618182301395321",
    name: "Visit promowane w menu",
    longName: "Visit promowane w menu",
    alias: "visit-promowane-w-menu",
    language: "Polish",
  },
  {
    id: 1623,
    modified: "2021-09-01T08:18",
    url: "https://go.wroclaw.pl/api/v1.0/types/1623?key=1319679107135189731165976618182301395321",
    name: "Krasnalowe bajki",
    longName: "Krasnalowe bajki",
    alias: "krasnalowe-bajki",
    language: "Polish",
  },
  {
    id: 1628,
    modified: "2021-10-08T09:56",
    url: "https://go.wroclaw.pl/api/v1.0/types/1628?key=1319679107135189731165976618182301395321",
    name: "Wrocław śladami Różewicza",
    alias: "wroclaw-sladami-rozewicza",
    language: "Polish",
  },
];
