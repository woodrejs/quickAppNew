import React from "react";
import { Text, ImageBackground } from "react-native";

import { style } from "./index.style";

const days = [
  "Niedziela",
  "Poniedziałek",
  "Wtorek",
  "Środa",
  "Czwartek",
  "Piątek",
  "Sobota",
];
const months = [
  "Styczeń",
  "Luty",
  "Marzec",
  "Kwiecień",
  "Maj",
  "Czerwiec",
  "Lipiec",
  "Sierpień",
  "Wrzesień",
  "Pażdziernik",
  "Listopad",
  "Grudzień",
];
const DATE = new Date();
const day = DATE.getDay();
const date = DATE.getDate();
const month = DATE.getMonth();
const year = DATE.getFullYear();

const ScheduleCardContent = () => {
  return (
    <ImageBackground
      style={style.container}
      imageStyle={style.image}
      source={require("../../../../../assets/index_3.jpg")}
    >
      <Text style={[style.text, style.number]} children={date < 10 ? `0${date}` : date} />
      <Text style={style.text} children={months[month]} />
      <Text style={style.text} children={days[day]} />
      <Text style={style.text} children={year} />
    </ImageBackground>
  );
};
export default ScheduleCardContent;
