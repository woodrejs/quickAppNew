import React from "react";
import { StyleSheet, Text } from "react-native";
//utils
import { STYLES } from "../../../style/styles";

export default function TitleSection({ variant }) {
  return (
    <>
      <Text style={style.title}>
        {variant === "offers" ? "Tytuł listy wydarzeń" : "Tytuł listy miejsc"}
      </Text>
      <Text style={style.text}>
        {variant === "offers"
          ? "wydarzenia Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          : "miejsca Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
      </Text>
    </>
  );
}

const style = StyleSheet.create({
  title: { ...STYLES.fonts.bold, fontSize: 28, paddingBottom: 15 },
  text: { ...STYLES.fonts.regular, fontSize: 12, opacity: 0.8, lineHeight: 16 },
});
