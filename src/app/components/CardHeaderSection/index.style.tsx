import { StyleSheet } from "react-native";
import { COLORS } from "../../style/colors";

export const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 10,
    display: "flex",
    justifyContent: "flex-end",
  },
  box: { display: "flex", flexDirection: "row" },
  title: {
    color: COLORS.white,
    fontFamily: "Montserrat700",
    fontWeight: "700",
    fontSize: 30,
    lineHeight: 30,
    paddingBottom: 20,
    width: "90%",
  },
  price: {
    color: COLORS.white,
    fontSize: 18,
    lineHeight: 18,
    fontFamily: "Montserrat400",
    fontWeight: "400",
    paddingBottom: 10,
  },
});
