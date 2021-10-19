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
  children,
  data,
  navigation,
  variant = "offers",
  filters = [],
}) => {
  const displayCards = () =>
    data.map(({ id, img, title, type }) => (
      <HorizontalListCard
        key={id}
        id={id}
        img={img}
        title={title}
        navigation={navigation}
        type={type}
      />
    ));

  return (
    <View style={style.container}>
      <SubTitleHeader
        title={title}
        variant={variant}
        navigation={navigation}
        filters={filters}
        children={children}
      />

      <ScrollView style={style.list} horizontal>
        {displayCards()}
        <HorizontalListButton
          variant={variant}
          navigation={navigation}
          filters={filters}
        />
      </ScrollView>
    </View>
  );
};
export default HorizontalCardList;
