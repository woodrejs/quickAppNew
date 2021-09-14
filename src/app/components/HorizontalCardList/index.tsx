import React from "react";
import { View, ScrollView } from "react-native";
//components
import HorizontalListCard from "./HorizontalListCard";
import HorizontalListButton from "./HorizontalListButton";
import SubTitleHeader from "../SubTitleHeader";
//utils & styles
import { style } from "./index.style";
import { Props } from "./index.utils";

const HorizontalCardList: React.FC<Props> = ({
  title,
  data,
  navigation,
  type = "event",
}) => {
  return (
    <View style={style.container}>
      <SubTitleHeader title={title} type={type} navigation={navigation} />

      <ScrollView style={style.list} horizontal>
        {data.map(({ id, img }) => (
          <HorizontalListCard
            key={id}
            id={id}
            img={img}
            navigation={navigation}
            type={type}
          />
        ))}
        <HorizontalListButton type={type} navigation={navigation} />
      </ScrollView>
    </View>
  );
};
export default HorizontalCardList;
