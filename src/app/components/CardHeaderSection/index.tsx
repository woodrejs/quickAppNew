import React from "react";
import { View, Text } from "react-native";
//utils &
import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import { style } from "./index.style";
import { Props } from "./index.utils";
import { COLORS } from "../../style/colors";

const CardHeaderSection: React.FC<Props> = ({ data }) => {
  const { white } = COLORS;
  const { title, date, address, price } = data;

  return (
    <View style={style.container}>
      <Text style={style.price} children={setTicketed(price)} />
      <Text style={style.title} children={title} />

      <View style={style.box}>
        {date && (
          <View style={style.iconBox}>
            <Fontisto name="date" size={20} color={white} />
            <Text style={style.subTitle} children={`od ${data.startDate}`} />
          </View>
        )}
        {address && (
          <View style={style.iconBox}>
            <MaterialIcons name="place" size={20} color={white} />
            <Text style={style.subTitle} children={address} />
          </View>
        )}
      </View>
    </View>
  );
};
export default CardHeaderSection;

function setTicketed(type) {
  switch (type) {
    case "TicketedAndBooked":
      return "rezerwacja";
    case "Ticketed":
      return "płatne";
    default:
      return "bezpłatne";
  }
}
