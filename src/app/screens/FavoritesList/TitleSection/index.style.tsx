import { StyleSheet } from "react-native";
import { STYLES } from "../../../style/styles";

export const style = StyleSheet.create({
  container: { width: "90%" },
  title: {
    fontSize: 30,
    ...STYLES.fonts.bold,
    paddingTop: 5,
  },
  text: {
    paddingTop: 15,
    fontSize: 12,
    lineHeight: 18,
    ...STYLES.fonts.regular,
  },
});
