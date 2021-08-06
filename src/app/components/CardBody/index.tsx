import React from "react";
import { View, Text } from "react-native";

import CardIcon from "./CardIcon";
import { style } from "./index.style";
import { Props } from "./index.utils";

const CardBody: React.FC<Props> = ({
  title,
  hour = null,
  date = null,
  place = null,
  price = null,
}) => {
  return (
    <View style={style.container}>
      <Text style={style.price}>{price}</Text>
      <Text style={style.title}>{title}</Text>
      <View style={style.box}>
        {hour && <CardIcon type="hour" title={hour} />}
        {date && <CardIcon type="date" title={date} />}
        {place && <CardIcon type="place" title={place} />}
      </View>
    </View>
  );
};
export default CardBody;
