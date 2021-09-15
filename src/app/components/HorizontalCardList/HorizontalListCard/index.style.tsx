import { StyleSheet } from "react-native";
import { COLORS } from "../../../style/colors";

export const style = StyleSheet.create({
  container: {
    width: 150,
    height: "100%",
    marginRight: 10,
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: COLORS.black,
    borderRadius: 20,
  },
  image: { borderRadius: 20, opacity: 0.5 },
  title: {
    color: COLORS.white,
    fontFamily: "Montserrat700",
    fontWeight: "700",
    fontSize: 14,
    padding: 10,
  },
});
