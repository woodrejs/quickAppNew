import React from "react";
import { View, Text } from "react-native";

import HeaderSectionIcon from "./HeaderSectionIcon";
import { style } from "./index.style";
import { Props } from "./index.utils";

const CardHeaderSection: React.FC<Props> = ({
  title,
  ticketing = null,
  date = null,
  place = null,
  price = null,
}) => {
  return (
    <View style={style.container}>
      <Text style={style.price}>{price}</Text>
      <Text style={style.title}>{title}</Text>
      <View style={style.box}>
        {ticketing && <HeaderSectionIcon type="ticketing" title={ticketing} />}
        {date && <HeaderSectionIcon type="date" title={date} />}
        {place && <HeaderSectionIcon type="place" title={place} />}
      </View>
    </View>
  );
};
export default CardHeaderSection;
