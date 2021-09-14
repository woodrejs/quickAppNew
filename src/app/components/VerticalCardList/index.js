import React from "react";
import { View, StyleSheet } from "react-native";

import VerticalListCard from "./VerticalListCard";

const VerticalCardList = ({ data, navigation, type }) => {
  return (
    <View style={style.container}>
      {data &&
        data.map(({ id, title, img }) => (
          <VerticalListCard
            img={img}
            title={title}
            key={id}
            id={id}
            navigation={navigation}
            type={type}
          />
        ))}
    </View>
  );
};

export default VerticalCardList;

const style = StyleSheet.create({
  container: {
    width: "100%",
    paddingBottom: 20,
  },
});
