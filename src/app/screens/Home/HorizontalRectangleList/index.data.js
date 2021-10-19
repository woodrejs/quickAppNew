import { v4 as uuidv4 } from "uuid";

export default [
  {
    id: uuidv4(),
    url: require("./books.jpg"),
    title: "Literatura",
    tags: "Książki, Księgarnie, Spotkania autorskie",
  },
  {
    id: uuidv4(),
    url: require("./ball.jpg"),
    title: "Sport i rekreacja",
    tags: "Zawody, Kluby sportowe, Spotkania na świeżym powietrzu",
  },
  {
    id: uuidv4(),
    url: require("./restaurant.jpg"),
    title: "Jedzenie",
    tags: "Restauracje, Knajpy, Bary, Bistra",
  },
  {
    id: uuidv4(),
    url: require("./mural.jpg"),
    title: "Sztuka",
    tags: "Muzea, Galerie sztuki, Spotkania z artystami, Warsztaty",
  },
  {
    id: uuidv4(),
    url: require("./door.jpg"),
    title: "Noclegi",
    tags: "Hptele, Schroniska, Motele, Hostele ",
  },
];
