import { StyleSheet } from "react-native";
import { COLORS } from "../../../../style/colors";
import { STYLES } from "../../../../style/styles";

export const style = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: COLORS.dark,
    borderRadius: 20,
    padding: 10,
    display: "flex",
    justifyContent: "center",
  },
  image: { borderRadius: 20, opacity: 0.7 },
  text: {
    color: COLORS.lightnest,
    textTransform: "uppercase",
    fontFamily: STYLES.fonts.bold,
    fontSize: 18,
    lineHeight: 18,
    paddingBottom: 7,
  },
  number: { fontSize: 48, lineHeight: 48, paddingBottom: 20 },
});
