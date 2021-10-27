import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
//components
import Card from "./Card";

export default function VerticalList({ list, styles = {} }) {
  return (
    <Animatable.View animation="slideInUp">
      <ScrollView style={styles} style={style.container}>
        {list.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </ScrollView>
    </Animatable.View>
  );
}

const style = StyleSheet.create({
  container: { paddingTop: 5 },
});
