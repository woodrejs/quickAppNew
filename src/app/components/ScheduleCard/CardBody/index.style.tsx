import { StyleSheet } from "react-native";
import { COLORS } from "../../../style/colors";

export const style = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: COLORS.black,
    borderRadius: 20,
    padding: 10,
    display: "flex",
    justifyContent: "center",
  },
  image: { borderRadius: 20, opacity: 0.7 },
  text: {
    color: COLORS.white,
    textTransform: "uppercase",
    fontFamily: "Montserrat700",
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 18,
    paddingBottom: 7,
  },
  number: { fontSize: 48, lineHeight: 48, paddingBottom: 20 },
});
