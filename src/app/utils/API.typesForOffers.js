const offersType = [
  {
    alias: "kino",
    id: 1,
  },
  {
    alias: "teatr",
    id: 2,
  },

  {
    alias: "sztuka",
    id: 3,
  },

  {
    alias: "sport-i-rekreacja",
    id: 4,
  },

  {
    alias: "muzyka",
    id: 5,
  },

  {
    alias: "rozrywka",
    id: 6,
  },

  {
    alias: "literatura",
    id: 7,
  },

  {
    alias: "edukacja-i-rozwoj",
    id: 8,
  },

  {
    alias: "inne",
    id: 12,
  },

  {
    alias: "dla-dzieci",
    id: 79,
  },

  {
    alias: "esk",
    id: 80,
  },

  {
    alias: "w-plenerze",
    id: 84,
  },

  {
    alias: "dla-seniorow",
    id: 85,
  },

  {
    alias: "tylko-dla-doroslych",
    id: 98,
  },

  {
    alias: "dla-wszystkich",
    id: 101,
  },

  {
    alias: "ferie-zimowe",
    id: 102,
  },

  {
    alias: "dla-rodzicow",
    id: 108,
  },

  {
    alias: "ze-zwierzakiem",
    id: 109,
  },

  {
    alias: "wydarzenie-kinowe",
    id: 113,
  },

  {
    alias: "spektakl",
    id: 114,
  },

  {
    alias: "wystawa",
    id: 115,
  },

  {
    alias: "performance",
    id: 116,
  },

  {
    alias: "wernisaz",
    id: 117,
  },

  {
    alias: "zajecia-sportowe",
    id: 118,
  },

  {
    alias: "wydarzenia-sportowe",
    id: 119,
  },

  {
    alias: "zawody",
    id: 120,
  },

  {
    alias: "koncert",
    id: 121,
  },

  {
    alias: "pop",
    id: 122,
  },

  {
    alias: "rock",
    id: 123,
  },

  {
    alias: "etniczna",
    id: 124,
  },

  {
    alias: "kabaret",
    id: 125,
  },

  {
    alias: "show",
    id: 126,
  },

  {
    alias: "jarmarki",
    id: 127,
  },

  {
    alias: "piknik",
    id: 128,
  },

  {
    alias: "wybory",
    id: 129,
  },

  {
    alias: "widowisko",
    id: 130,
  },

  {
    alias: "eventy",
    id: 131,
  },

  {
    alias: "spotkania-z-autorami",
    id: 132,
  },

  {
    alias: "kluby-dyskusyjne",
    id: 133,
  },

  {
    alias: "kursy",
    id: 134,
  },

  {
    alias: "szkolenia",
    id: 135,
  },

  {
    alias: "konferencje",
    id: 136,
  },

  {
    alias: "warsztaty",
    id: 137,
  },

  {
    alias: "wyklad",
    id: 138,
  },

  {
    alias: "targi",
    id: 139,
  },

  {
    alias: "akcje-spoleczne",
    id: 140,
  },

  {
    alias: "happeningi",
    id: 141,
  },

  {
    alias: "gieldy",
    id: 142,
  },

  {
    alias: "konkursy",
    id: 143,
  },

  {
    alias: "spotkania",
    id: 144,
  },

  {
    alias: "dramat",
    id: 145,
  },

  {
    alias: "thriller",
    id: 146,
  },

  {
    alias: "komedia",
    id: 147,
  },

  {
    alias: "horror",
    id: 148,
  },

  {
    alias: "bajka",
    id: 149,
  },

  {
    alias: "obyczajowy",
    id: 150,
  },

  {
    alias: "animacja",
    id: 151,
  },

  {
    alias: "dokument",
    id: 152,
  },

  {
    alias: "akcja",
    id: 153,
  },

  {
    alias: "musical",
    id: 154,
  },

  {
    alias: "familijny",
    id: 155,
  },

  {
    alias: "balet",
    id: 156,
  },

  {
    alias: "dramat",
    id: 157,
  },

  {
    alias: "pantomima",
    id: 158,
  },

  {
    alias: "opera",
    id: 159,
  },

  {
    alias: "komedia",
    id: 160,
  },

  {
    alias: "kryminal",
    id: 161,
  },

  {
    alias: "tragikomedia",
    id: 162,
  },

  {
    alias: "opera-dla-dzieci",
    id: 163,
  },

  {
    alias: "sportowy",
    id: 164,
  },

  {
    alias: "western",
    id: 165,
  },

  {
    alias: "krotkometrazowy",
    id: 166,
  },

  {
    alias: "kryminal",
    id: 167,
  },

  {
    alias: "przygodowy",
    id: 168,
  },

  {
    alias: "sci-fi",
    id: 169,
  },

  {
    alias: "jazz",
    id: 170,
  },

  {
    alias: "sensacyjny",
    id: 171,
  },

  {
    alias: "teatr-muzyczny",
    id: 172,
  },

  {
    alias: "tragedia",
    id: 173,
  },

  {
    alias: "fantasy",
    id: 175,
  },

  {
    alias: "romans",
    id: 176,
  },

  {
    alias: "fabularny",
    id: 177,
  },

  {
    alias: "transmisja",
    id: 178,
  },

  {
    alias: "inny",
    id: 179,
  },

  {
    alias: "w-klubie",
    id: 180,
  },

  {
    alias: "historyczny",
    id: 181,
  },

  {
    alias: "rozne",
    id: 182,
  },

  {
    alias: "spektakl",
    id: 183,
  },

  {
    alias: "inne",
    id: 184,
  },

  {
    alias: "klasyczna",
    id: 185,
  },

  {
    alias: "twg-2017",
    id: 186,
  },

  {
    alias: "polityczny",
    id: 187,
  },

  {
    alias: "poetycki",
    id: 188,
  },

  {
    alias: "dramat-wojenny-non-fiction",
    id: 189,
  },

  {
    alias: "wojenny",
    id: 190,
  },

  {
    alias: "blues",
    id: 191,
  },

  {
    alias: "hip-hop",
    id: 192,
  },

  {
    alias: "reggae",
    id: 193,
  },

  {
    alias: "metal",
    id: 194,
  },

  {
    alias: "biegi-i-maratony",
    id: 195,
  },

  {
    alias: "tragikomedia",
    id: 196,
  },

  {
    alias: "inne",
    id: 197,
  },

  {
    alias: "teatr-tanca",
    id: 198,
  },

  {
    alias: "startupy",
    id: 199,
  },

  {
    alias: "zdrowie",
    id: 200,
  },

  {
    alias: "spacery-i-wycieczki",
    id: 201,
  },

  {
    alias: "teatr-lalek",
    id: 297,
  },

  {
    alias: "kryminalny",
    id: 299,
  },

  {
    alias: "sztuki-wizualne",
    id: 300,
  },

  {
    alias: "architektura",
    id: 301,
  },

  {
    alias: "film",
    id: 302,
  },

  {
    alias: "literatura",
    id: 303,
  },

  {
    alias: "muzyka",
    id: 304,
  },

  {
    alias: "opera",
    id: 305,
  },

  {
    alias: "performance",
    id: 306,
  },

  {
    alias: "teatr",
    id: 307,
  },

  {
    alias: "promowane-wydarzenia",
    id: 308,
  },

  {
    alias: "zajecia-dla-dzieci",
    id: 333,
  },

  {
    alias: "design",
    id: 334,
  },

  {
    alias: "nad-odra",
    id: 371,
  },

  {
    alias: "dodatkowe-kategorie-wydarzen",
    id: 425,
  },

  {
    alias: "wroclaw-eu",
    id: 439,
  },

  {
    alias: "promowane",
    id: 440,
  },

  {
    alias: "festiwale",
    id: 554,
  },

  {
    alias: "urzad",
    id: 873,
  },

  {
    alias: "bezplatne-wydarzenia-wroclaw",
    id: 875,
  },

  {
    alias: "wroclaw-wspiera",
    id: 876,
  },

  {
    alias: "gra-gra-terenowa",
    id: 879,
  },

  {
    alias: "boze-narodzenie-we-wroclawiu",
    id: 880,
  },

  {
    alias: "zdrowie-1",
    id: 881,
  },

  {
    alias: "edukacja-i-rozwoj-1",
    id: 882,
  },

  {
    alias: "pomoc-spoleczna-1",
    id: 883,
  },

  {
    alias: "sport-i-rekreacja-1",
    id: 884,
  },

  {
    alias: "poradnictwo",
    id: 885,
  },

  {
    alias: "kultura-1",
    id: 886,
  },

  {
    alias: "profilaktyka",
    id: 887,
  },

  {
    alias: "uzaleznienia",
    id: 888,
  },

  {
    alias: "zdrowie-psychiczne",
    id: 889,
  },

  {
    alias: "cukrzyca",
    id: 890,
  },

  {
    alias: "nowotwory",
    id: 891,
  },

  {
    alias: "pomoc-medyczna-1",
    id: 892,
  },

  {
    alias: "grupa-docelowa",
    id: 893,
  },

  {
    alias: "seniorzy",
    id: 894,
  },

  {
    alias: "niepelnosprawni-1",
    id: 895,
  },

  {
    alias: "dzieci-i-mlodziez",
    id: 896,
  },

  {
    alias: "rodzice",
    id: 898,
  },

  {
    alias: "obcokrajowcy",
    id: 899,
  },

  {
    alias: "dzieci-0-3",
    id: 900,
  },

  {
    alias: "dzieci-4-6",
    id: 901,
  },

  {
    alias: "wolontariat",
    id: 902,
  },

  {
    alias: "czas-wolny",
    id: 903,
  },

  {
    alias: "opieka-1",
    id: 904,
  },

  {
    alias: "porady-prawne",
    id: 905,
  },

  {
    alias: "porady-psychologiczne",
    id: 906,
  },

  {
    alias: "porady-pedagogiczne",
    id: 907,
  },

  {
    alias: "sporty-walki",
    id: 908,
  },

  {
    alias: "koszykowka",
    id: 909,
  },

  {
    alias: "pilka-nozna",
    id: 910,
  },

  {
    alias: "siatkowka",
    id: 911,
  },

  {
    alias: "kardiologia",
    id: 912,
  },

  {
    alias: "stomatologia",
    id: 913,
  },

  {
    alias: "wady-postawy",
    id: 914,
  },

  {
    alias: "zajecia-pozalekcyjne",
    id: 915,
  },

  {
    alias: "wsparcie",
    id: 917,
  },

  {
    alias: "tlumacze",
    id: 918,
  },

  {
    alias: "wypozyczalnie",
    id: 919,
  },

  {
    alias: "integracja",
    id: 920,
  },

  {
    alias: "opieka-nad-dziecmi",
    id: 921,
  },

  {
    alias: "dzieci-7-10",
    id: 922,
  },

  {
    alias: "mlodziez-11-14",
    id: 923,
  },

  {
    alias: "mlodziez-15-18",
    id: 924,
  },

  {
    alias: "z-klubow-sportowych",
    id: 925,
  },

  {
    alias: "noworodki-i-wczesniaki",
    id: 926,
  },

  {
    alias: "kobiety-w-ciazy",
    id: 927,
  },

  {
    alias: "rodziny-wielodzietne",
    id: 928,
  },

  {
    alias: "pozostale",
    id: 929,
  },

  {
    alias: "wolontariusze",
    id: 930,
  },

  {
    alias: "ngo",
    id: 931,
  },

  {
    alias: "rady-osiedli",
    id: 932,
  },

  {
    alias: "kibice-sportowi",
    id: 933,
  },

  {
    alias: "szkoly-i-nauczyciele",
    id: 934,
  },

  {
    alias: "elektroniczna",
    id: 937,
  },

  {
    alias: "folk",
    id: 938,
  },

  {
    alias: "oprowadzanie",
    id: 939,
  },

  {
    alias: "walentynki",
    id: 1364,
  },

  {
    alias: "oferty-pracy",
    id: 1367,
  },

  {
    alias: "zabawa",
    id: 1369,
  },

  {
    alias: "pokaz-doswiadczenie",
    id: 1371,
  },

  {
    alias: "instalacja",
    id: 1372,
  },

  {
    alias: "wspiera-promowane",
    id: 1390,
  },

  {
    alias: "konsultacje-spoleczne-1",
    id: 1404,
  },

  {
    alias: "grow-green",
    id: 1406,
  },

  {
    alias: "100-lat-niepodleglosci",
    id: 1407,
  },

  {
    alias: "dzien-zyczliwosci",
    id: 1466,
  },

  {
    alias: "kalendarz-prezydenta-wroclawia",
    id: 1471,
  },

  {
    alias: "www-wroclaw-pl",
    id: 1505,
  },

  {
    alias: "spotkania-zmien-piec",
    id: 1507,
  },

  {
    alias: "prezydent-wroclawia-poleca",
    id: 1621,
  },

  {
    alias: "kino",
    id: 1,
  },

  {
    alias: "teatr",
    id: 2,
  },

  {
    alias: "sztuka",
    id: 3,
  },

  {
    alias: "sport-i-rekreacja",
    id: 4,
  },

  {
    alias: "muzyka",
    id: 5,
  },

  {
    alias: "rozrywka",
    id: 6,
  },

  {
    alias: "literatura",
    id: 7,
  },

  {
    alias: "edukacja-i-rozwoj",
    id: 8,
  },

  {
    alias: "inne",
    id: 12,
  },

  {
    alias: "dla-dzieci",
    id: 79,
  },

  {
    alias: "esk",
    id: 80,
  },

  {
    alias: "w-plenerze",
    id: 84,
  },

  {
    alias: "dla-seniorow",
    id: 85,
  },

  {
    alias: "tylko-dla-doroslych",
    id: 98,
  },

  {
    alias: "dla-wszystkich",
    id: 101,
  },

  {
    alias: "ferie-zimowe",
    id: 102,
  },

  {
    alias: "dla-rodzicow",
    id: 108,
  },

  {
    alias: "ze-zwierzakiem",
    id: 109,
  },

  {
    alias: "wydarzenie-kinowe",
    id: 113,
  },

  {
    alias: "spektakl",
    id: 114,
  },

  {
    alias: "wystawa",
    id: 115,
  },

  {
    alias: "performance",
    id: 116,
  },

  {
    alias: "wernisaz",
    id: 117,
  },

  {
    alias: "zajecia-sportowe",
    id: 118,
  },

  {
    alias: "wydarzenia-sportowe",
    id: 119,
  },

  {
    alias: "zawody",
    id: 120,
  },

  {
    alias: "koncert",
    id: 121,
  },

  {
    alias: "pop",
    id: 122,
  },

  {
    alias: "rock",
    id: 123,
  },

  {
    alias: "etniczna",
    id: 124,
  },

  {
    alias: "kabaret",
    id: 125,
  },

  {
    alias: "show",
    id: 126,
  },

  {
    alias: "jarmarki",
    id: 127,
  },

  {
    alias: "piknik",
    id: 128,
  },

  {
    alias: "wybory",
    id: 129,
  },

  {
    alias: "widowisko",
    id: 130,
  },

  {
    alias: "eventy",
    id: 131,
  },

  {
    alias: "spotkania-z-autorami",
    id: 132,
  },

  {
    alias: "kluby-dyskusyjne",
    id: 133,
  },

  {
    alias: "kursy",
    id: 134,
  },

  {
    alias: "szkolenia",
    id: 135,
  },

  {
    alias: "konferencje",
    id: 136,
  },

  {
    alias: "warsztaty",
    id: 137,
  },

  {
    alias: "wyklad",
    id: 138,
  },

  {
    alias: "targi",
    id: 139,
  },

  {
    alias: "akcje-spoleczne",
    id: 140,
  },

  {
    alias: "happeningi",
    id: 141,
  },

  {
    alias: "gieldy",
    id: 142,
  },

  {
    alias: "konkursy",
    id: 143,
  },

  {
    alias: "spotkania",
    id: 144,
  },

  {
    alias: "dramat",
    id: 145,
  },

  {
    alias: "thriller",
    id: 146,
  },

  {
    alias: "komedia",
    id: 147,
  },

  {
    alias: "horror",
    id: 148,
  },

  {
    alias: "bajka",
    id: 149,
  },

  {
    alias: "obyczajowy",
    id: 150,
  },

  {
    alias: "animacja",
    id: 151,
  },

  {
    alias: "dokument",
    id: 152,
  },

  {
    alias: "akcja",
    id: 153,
  },

  {
    alias: "musical",
    id: 154,
  },

  {
    alias: "familijny",
    id: 155,
  },

  {
    alias: "balet",
    id: 156,
  },

  {
    alias: "dramat",
    id: 157,
  },

  {
    alias: "pantomima",
    id: 158,
  },

  {
    alias: "opera",
    id: 159,
  },

  {
    alias: "komedia",
    id: 160,
  },

  {
    alias: "kryminal",
    id: 161,
  },

  {
    alias: "tragikomedia",
    id: 162,
  },

  {
    alias: "opera-dla-dzieci",
    id: 163,
  },

  {
    alias: "sportowy",
    id: 164,
  },

  {
    alias: "western",
    id: 165,
  },

  {
    alias: "krotkometrazowy",
    id: 166,
  },

  {
    alias: "kryminal",
    id: 167,
  },

  {
    alias: "przygodowy",
    id: 168,
  },

  {
    alias: "sci-fi",
    id: 169,
  },

  {
    alias: "jazz",
    id: 170,
  },

  {
    alias: "sensacyjny",
    id: 171,
  },

  {
    alias: "teatr-muzyczny",
    id: 172,
  },

  {
    alias: "tragedia",
    id: 173,
  },

  {
    alias: "fantasy",
    id: 175,
  },

  {
    alias: "romans",
    id: 176,
  },

  {
    alias: "fabularny",
    id: 177,
  },

  {
    alias: "transmisja",
    id: 178,
  },

  {
    alias: "inny",
    id: 179,
  },

  {
    alias: "w-klubie",
    id: 180,
  },

  {
    alias: "historyczny",
    id: 181,
  },

  {
    alias: "rozne",
    id: 182,
  },

  {
    alias: "spektakl",
    id: 183,
  },

  {
    alias: "inne",
    id: 184,
  },

  {
    alias: "klasyczna",
    id: 185,
  },

  {
    alias: "twg-2017",
    id: 186,
  },

  {
    alias: "polityczny",
    id: 187,
  },

  {
    alias: "poetycki",
    id: 188,
  },

  {
    alias: "dramat-wojenny-non-fiction",
    id: 189,
  },

  {
    alias: "wojenny",
    id: 190,
  },

  {
    alias: "blues",
    id: 191,
  },

  {
    alias: "hip-hop",
    id: 192,
  },

  {
    alias: "reggae",
    id: 193,
  },

  {
    alias: "metal",
    id: 194,
  },

  {
    alias: "biegi-i-maratony",
    id: 195,
  },

  {
    alias: "tragikomedia",
    id: 196,
  },

  {
    alias: "inne",
    id: 197,
  },

  {
    alias: "teatr-tanca",
    id: 198,
  },

  {
    alias: "startupy",
    id: 199,
  },

  {
    alias: "zdrowie",
    id: 200,
  },

  {
    alias: "spacery-i-wycieczki",
    id: 201,
  },

  {
    alias: "teatr-lalek",
    id: 297,
  },

  {
    alias: "kryminalny",
    id: 299,
  },

  {
    alias: "sztuki-wizualne",
    id: 300,
  },

  {
    alias: "architektura",
    id: 301,
  },

  {
    alias: "film",
    id: 302,
  },

  {
    alias: "literatura",
    id: 303,
  },

  {
    alias: "muzyka",
    id: 304,
  },

  {
    alias: "opera",
    id: 305,
  },

  {
    alias: "performance",
    id: 306,
  },

  {
    alias: "teatr",
    id: 307,
  },

  {
    alias: "promowane-wydarzenia",
    id: 308,
  },

  {
    alias: "zajecia-dla-dzieci",
    id: 333,
  },

  {
    alias: "design",
    id: 334,
  },

  {
    alias: "nad-odra",
    id: 371,
  },

  {
    alias: "dodatkowe-kategorie-wydarzen",
    id: 425,
  },

  {
    alias: "wroclaw-eu",
    id: 439,
  },

  {
    alias: "promowane",
    id: 440,
  },

  {
    alias: "festiwale",
    id: 554,
  },

  {
    alias: "urzad",
    id: 873,
  },

  {
    alias: "bezplatne-wydarzenia-wroclaw",
    id: 875,
  },

  {
    alias: "wroclaw-wspiera",
    id: 876,
  },

  {
    alias: "gra-gra-terenowa",
    id: 879,
  },

  {
    alias: "boze-narodzenie-we-wroclawiu",
    id: 880,
  },

  {
    alias: "zdrowie-1",
    id: 881,
  },

  {
    alias: "edukacja-i-rozwoj-1",
    id: 882,
  },

  {
    alias: "pomoc-spoleczna-1",
    id: 883,
  },

  {
    alias: "sport-i-rekreacja-1",
    id: 884,
  },

  {
    alias: "poradnictwo",
    id: 885,
  },

  {
    alias: "kultura-1",
    id: 886,
  },

  {
    alias: "profilaktyka",
    id: 887,
  },

  {
    alias: "uzaleznienia",
    id: 888,
  },

  {
    alias: "zdrowie-psychiczne",
    id: 889,
  },

  {
    alias: "cukrzyca",
    id: 890,
  },

  {
    alias: "nowotwory",
    id: 891,
  },

  {
    alias: "pomoc-medyczna-1",
    id: 892,
  },

  {
    alias: "grupa-docelowa",
    id: 893,
  },

  {
    alias: "seniorzy",
    id: 894,
  },

  {
    alias: "niepelnosprawni-1",
    id: 895,
  },

  {
    alias: "dzieci-i-mlodziez",
    id: 896,
  },

  {
    alias: "rodzice",
    id: 898,
  },

  {
    alias: "obcokrajowcy",
    id: 899,
  },

  {
    alias: "dzieci-0-3",
    id: 900,
  },

  {
    alias: "dzieci-4-6",
    id: 901,
  },

  {
    alias: "wolontariat",
    id: 902,
  },

  {
    alias: "czas-wolny",
    id: 903,
  },

  {
    alias: "opieka-1",
    id: 904,
  },

  {
    alias: "porady-prawne",
    id: 905,
  },

  {
    alias: "porady-psychologiczne",
    id: 906,
  },

  {
    alias: "porady-pedagogiczne",
    id: 907,
  },

  {
    alias: "sporty-walki",
    id: 908,
  },

  {
    alias: "koszykowka",
    id: 909,
  },

  {
    alias: "pilka-nozna",
    id: 910,
  },

  {
    alias: "siatkowka",
    id: 911,
  },

  {
    alias: "kardiologia",
    id: 912,
  },

  {
    alias: "stomatologia",
    id: 913,
  },

  {
    alias: "wady-postawy",
    id: 914,
  },

  {
    alias: "zajecia-pozalekcyjne",
    id: 915,
  },

  {
    alias: "wsparcie",
    id: 917,
  },

  {
    alias: "tlumacze",
    id: 918,
  },

  {
    alias: "wypozyczalnie",
    id: 919,
  },

  {
    alias: "integracja",
    id: 920,
  },

  {
    alias: "opieka-nad-dziecmi",
    id: 921,
  },

  {
    alias: "dzieci-7-10",
    id: 922,
  },

  {
    alias: "mlodziez-11-14",
    id: 923,
  },

  {
    alias: "mlodziez-15-18",
    id: 924,
  },

  {
    alias: "z-klubow-sportowych",
    id: 925,
  },

  {
    alias: "noworodki-i-wczesniaki",
    id: 926,
  },

  {
    alias: "kobiety-w-ciazy",
    id: 927,
  },

  {
    alias: "rodziny-wielodzietne",
    id: 928,
  },

  {
    alias: "pozostale",
    id: 929,
  },

  {
    alias: "wolontariusze",
    id: 930,
  },

  {
    alias: "ngo",
    id: 931,
  },

  {
    alias: "rady-osiedli",
    id: 932,
  },

  {
    alias: "kibice-sportowi",
    id: 933,
  },

  {
    alias: "szkoly-i-nauczyciele",
    id: 934,
  },

  {
    alias: "elektroniczna",
    id: 937,
  },

  {
    alias: "folk",
    id: 938,
  },

  {
    alias: "oprowadzanie",
    id: 939,
  },

  {
    alias: "walentynki",
    id: 1364,
  },

  {
    alias: "oferty-pracy",
    id: 1367,
  },

  {
    alias: "zabawa",
    id: 1369,
  },

  {
    alias: "pokaz-doswiadczenie",
    id: 1371,
  },

  {
    alias: "instalacja",
    id: 1372,
  },

  {
    alias: "wspiera-promowane",
    id: 1390,
  },

  {
    alias: "konsultacje-spoleczne-1",
    id: 1404,
  },

  {
    alias: "grow-green",
    id: 1406,
  },

  {
    alias: "100-lat-niepodleglosci",
    id: 1407,
  },

  {
    alias: "dzien-zyczliwosci",
    id: 1466,
  },

  {
    alias: "kalendarz-prezydenta-wroclawia",
    id: 1471,
  },

  {
    alias: "www-wroclaw-pl",
    id: 1505,
  },

  {
    alias: "spotkania-zmien-piec",
    id: 1507,
  },

  {
    alias: "prezydent-wroclawia-poleca",
    id: 1621,
  },
];
