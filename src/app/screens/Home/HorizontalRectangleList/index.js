import React from "react";
import { ScrollView, StyleSheet } from "react-native";
//components
import Rectangle from "./Rectangle";

export default React.memo(function HorizontalRectangleList({ list }) {
  return (
    <ScrollView horizontal>
      {list.map((data) => (
        <Rectangle key={data.id} data={data} />
      ))}
    </ScrollView>
  );
});

const style = StyleSheet.create({});
