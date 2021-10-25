import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { STYLES } from "../../style/styles";
import { COLORS } from "../../style/colors";
import { screensNames } from "../../utils/screensNames";

export default function AuthFooter({ name, title, text }) {
  const navigation = useNavigation();

  const handler = () => navigation.navigate(screensNames[name]);


  return (
    <View style={style.container}>
      <Text style={style.text} children={text} />
      <TouchableOpacity style={style.box} onPress={handler}>
        <Text style={style.title} children={title} />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: { display: "flex", alignItems: "center" },
  box: {},
  title: { ...STYLES.fonts.bold, fontSize: 14, color: COLORS.extra },
  text: { ...STYLES.fonts.regular, fontSize: 14 },
});
