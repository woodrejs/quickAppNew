import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
//components
import Rectangle from "./Rectangle";

export default React.memo(function HorizontalRectangleList({ list }) {
  return (
    <Animatable.View animation="slideInRight" useNativeDriver style={style.container}>
      <ScrollView horizontal>
        {list.map((data) => (
          <Rectangle key={data.id} data={data} />
        ))}
      </ScrollView>
    </Animatable.View>
  );
});

const style = StyleSheet.create({ container: { paddingLeft: 0 } });
