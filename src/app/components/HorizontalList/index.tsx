import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Fontisto } from "@expo/vector-icons";

import ListItem from "./ListItem";
import { COLORS } from "../../style/colors";
import { style } from "./index.style";
import { Props } from "./index.utils";

const HorizontalList: React.FC<Props> = ({ name }) => {
  return (
    <View style={style.container}>
      <View style={style.box}>
        <Text style={style.title}>{name}</Text>
        <Fontisto name="eye" size={14} color={COLORS.lightExtra} />
      </View>
      <ScrollView style={style.list} horizontal>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ScrollView>
    </View>
  );
};
export default HorizontalList;
