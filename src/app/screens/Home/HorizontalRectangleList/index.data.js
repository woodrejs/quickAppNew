import { v4 as uuidv4 } from "uuid";

export default [
  {
    id: uuidv4(),
    url: require("./books.jpg"),
    title: "Literatura",
    tags: "Książki, Księgarnie, Spotkania autorskie",
    variant: "offers",
    filters: [7, 132],
  },
  {
    id: uuidv4(),
    url: require("./ball.jpg"),
    title: "Sport i rekreacja",
    tags: "Zawody, Kluby sportowe, Spotkania na świeżym powietrzu",
    variant: "offers",
    filters: [4, 120, 119, 118],
  },
  {
    id: uuidv4(),
    url: require("./restaurant.jpg"),
    title: "Jedzenie",
    tags: "Restauracje, Knajpy, Bary, Bistra",
    variant: "places",
    filters: [14, 210, 208],
  },
  {
    id: uuidv4(),
    url: require("./mural.jpg"),
    title: "Sztuka",
    tags: "Muzea, Galerie sztuki, Spotkania z artystami, Warsztaty",
    variant: "offers",
    filters: [3, 117],
  },
  {
    id: uuidv4(),
    url: require("./door.jpg"),
    title: "Noclegi",
    tags: "Hptele, Schroniska, Motele, Hostele ",
    variant: "places",
    filters: [13, 293, 294],
  },
];
