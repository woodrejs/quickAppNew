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
