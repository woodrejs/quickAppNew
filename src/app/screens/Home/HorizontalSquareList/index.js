import React from "react";
import { StyleSheet, ScrollView,  } from "react-native";
//components
import Square from "./Square";

export default React.memo(function HorizontalSquareList({ list }) {
  return (

      <ScrollView horizontal style={style.container}>
        {list.map((square) => (
          <Square key={square.id} data={square} />
        ))}
      </ScrollView>

  );
});

const style = StyleSheet.create({ container: { paddingLeft: 5 } });
