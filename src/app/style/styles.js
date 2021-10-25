import { COLORS } from "./colors";

export const STYLES = {
  fonts: {
    bold: { fontFamily: "PoppinsBold", fontWeight: "700", color: COLORS.dark },
    regular: { fontFamily: "PoppinsRegular", fontWeight: "400", color: COLORS.dark },
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
};
