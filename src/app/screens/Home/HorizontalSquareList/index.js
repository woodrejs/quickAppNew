import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
//components
import Square from "./Square";

export default React.memo(function HorizontalSquareList({ list }) {
  return (
    <Animatable.View animation="slideInRight" useNativeDriver>
      <ScrollView horizontal style={style.container}>
        {list.map((square) => (
          <Square key={square.id} data={square} />
        ))}
      </ScrollView>
    </Animatable.View>
  );
});

const style = StyleSheet.create({ container: { paddingLeft: 5 } });
