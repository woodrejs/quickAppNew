import React from "react";
import { StyleSheet, Text } from "react-native";
//utils
import { STYLES } from "../../../style/styles";

export default React.memo(function TitleSection({ variant }) {
  return (
    <>
      <Text style={style.title}>
        {variant === "offers" ? "Wydarzenia w Quick Week" : "Miejsca w Quick Week"}
      </Text>
      <Text style={style.text}>
        {variant === "offers"
          ? "Lista najciekawszych wydarzeń w mieście. Korzystaj z filtrów, żeby odnaleźć interesujące Cię kategorie."
          : "Lista najciekawszych miejsc w mieście. Korzystaj z filtrów, żeby odnaleźć interesujące Cię kategorie."}
      </Text>
    </>
  );
});

const style = StyleSheet.create({
  title: { ...STYLES.fonts.bold, fontSize: 28, paddingBottom: 15 },
  text: { ...STYLES.fonts.regular, fontSize: 12, opacity: 0.8, lineHeight: 16 },
});
