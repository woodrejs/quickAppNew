import { StyleSheet } from "react-native";
import { STYLES } from "../../style/styles";
import { COLORS } from "../../style/colors";

export const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 15,
    height: 80,
    backgroundColor: COLORS.extra,
  },
  arrowBox: { paddingRight: 20, paddingVertical: 10 },
  iconBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: { height: 40, width: 40, borderRadius: 50 },
  iconTitle: {
    ...STYLES.fonts.bold,
    fontSize: 12,
    marginLeft: 10,
    textTransform: "capitalize",
    color: COLORS.lightnest,
  },
});
