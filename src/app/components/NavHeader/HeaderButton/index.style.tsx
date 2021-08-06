import { StyleSheet } from "react-native";
import { COLORS } from "../../../style/colors";

export const style = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    paddingHorizontal: 5,
  },
  sphere: {
    backgroundColor: COLORS.grey,
    height: 6,
    width: 6,
    borderRadius: 50,
    marginHorizontal: 1,
  },
});
