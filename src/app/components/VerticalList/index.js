import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
//components
import Card from "./Card";

export default function VerticalList({ list, styles = {} }) {
  return (
    <View style={styles}>
      <ScrollView style={style.container}>
        {list.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: { paddingTop: 5 },
});
