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
  iconBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 30,
  },
  title: {
    color: COLORS.white,
    fontFamily: "Montserrat700",
    fontWeight: "700",
    fontSize: 30,
    lineHeight: 30,
    paddingBottom: 20,
    width: "90%",
  },
  subTitle: {
    color: COLORS.white,
    fontFamily: "Montserrat700",
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 12,
    paddingLeft: 20,
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
