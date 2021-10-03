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
  variant = "offers",
  filters = [],
}) => {
  return (
    <View style={style.container}>
      <SubTitleHeader
        title={title}
        variant={variant}
        navigation={navigation}
        filters={filters}
      />

      <ScrollView style={style.list} horizontal>
        {data.map(({ id, img, title, type }) => {
          if (id && title)
            return (
              <HorizontalListCard
                key={id}
                id={id}
                img={img}
                title={title}
                navigation={navigation}
                type={type}
              />
            );
        })}
        <HorizontalListButton variant={variant} navigation={navigation} />
      </ScrollView>
    </View>
  );
};
export default HorizontalCardList;
