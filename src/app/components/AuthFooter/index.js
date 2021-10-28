import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
//utils
import { useNavigation } from "@react-navigation/native";
import { screensNames } from "../../utils/screensNames";
import { STYLES } from "../../style/styles";
import { COLORS } from "../../style/colors";

export default function AuthFooter({ name, title, text }) {
  //hooks
  const navigation = useNavigation();

  //handlers
  const handler = () => navigation.navigate(screensNames[name]);

  return (
    <View style={style.container}>
      <Text style={style.text} children={text} />
      <TouchableOpacity style={style.box} onPress={handler}>
        <Text style={style.title} children={title} />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: { display: "flex", alignItems: "center" },
  box: {},
  title: { ...STYLES.fonts.bold, fontSize: 14, color: COLORS.extra },
  text: { ...STYLES.fonts.regular, fontSize: 14 },
});
