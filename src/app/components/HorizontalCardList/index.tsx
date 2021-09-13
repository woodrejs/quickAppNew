import React from "react";
import { View, Text, ScrollView } from "react-native";
//components
import HorizontalListCard from "./HorizontalListCard";
import HorizontalListButton from "./HorizontalListButton";
//utils & styles
import { Fontisto } from "@expo/vector-icons";
import { COLORS } from "../../style/colors";
import { style } from "./index.style";
import { Props } from "./index.utils";

const HorizontalCardList: React.FC<Props> = ({ name, data }) => {
  return (
    <View style={style.container}>
      <View style={style.box}>
        <Text style={style.title}>{name}</Text>
        <Fontisto name="eye" size={14} color={COLORS.lightExtra} />
      </View>
      <ScrollView style={style.list} horizontal>
        {data.map(({ id, img }) => (
          <HorizontalListCard key={id} id={id} img={img} />
        ))}
        <HorizontalListButton />
      </ScrollView>
    </View>
  );
};
export default HorizontalCardList;
