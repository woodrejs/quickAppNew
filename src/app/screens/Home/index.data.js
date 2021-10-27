import { v4 as uuidv4 } from "uuid";

export const placesData = [
  {
    id: uuidv4(),
    url: require("./stairs.jpg"),
    title: "Atrakcje",
    variant: "places",
    filters: [15],
  },
  {
    id: uuidv4(),
    url: require("./armchair.jpg"),
    title: "Hotele",
    variant: "places",
    filters: [13],
  },
  {
    id: uuidv4(),
    url: require("./metro.jpg"),
    title: "Kluby",
    variant: "places",
    filters: [11],
  },
  {
    id: uuidv4(),
    url: require("./theater.jpg"),
    title: "Kultura",
    variant: "places",
    filters: [10],
  },
  {
    id: uuidv4(),
    url: require("./spoons.jpg"),
    title: "Restauracje",
    variant: "places",
    filters: [14],
  },
];
export const offersData = [
  {
    id: uuidv4(),
    url: require("./photographic_film.jpg"),
    title: "Kino",
    variant: "offers",
    filters: [1],
  },
  {
    id: uuidv4(),
    url: require("./microphone.jpg"),
    title: "Muzyka",
    variant: "offers",
    filters: [5],
  },
  {
    id: uuidv4(),
    url: require("./cinema.jpg"),
    title: "Teatry i opery",
    variant: "offers",
    filters: [2],
  },
  {
    id: uuidv4(),
    url: require("./art.jpg"),
    title: "Sztuka",
    variant: "offers",
    filters: [3],
  },
  {
    id: uuidv4(),
    url: require("./tape.jpg"),
    title: "Rozrywka",
    variant: "offers",
    filters: [6],
  },
];
export const mainData = [
  {
    id: uuidv4(),
    url: require("./books.jpg"),
    title: "Literatura",
    tags: "Książki, Księgarnie, Spotkania autorskie",
    variant: "offers",
    filters: [7],
  },
  {
    id: uuidv4(),
    url: require("./ball.jpg"),
    title: "Sport i rekreacja",
    tags: "Zawody, Kluby sportowe, Spotkania na świeżym powietrzu",
    variant: "offers",
    filters: [4],
  },
  {
    id: uuidv4(),
    url: require("./restaurant.jpg"),
    title: "Jedzenie",
    tags: "Restauracje, Knajpy, Bary, Bistra",
    variant: "places",
    filters: [14],
  },
  {
    id: uuidv4(),
    url: require("./mural.jpg"),
    title: "Sztuka",
    tags: "Muzea, Galerie sztuki, Spotkania z artystami, Warsztaty",
    variant: "offers",
    filters: [3],
  },
  {
    id: uuidv4(),
    url: require("./door.jpg"),
    title: "Noclegi",
    tags: "Hptele, Schroniska, Motele, Hostele ",
    variant: "places",
    filters: [13],
  },
];
