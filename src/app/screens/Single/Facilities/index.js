import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ButtonIcon from "../ButtonIcon";
import { STYLES } from "../../../style/styles";

const Facilities = ({ venue }) => {
  const { carParkAvailable, foodAndDrinkAvailable, disabledAccessAvailable } = venue;

  return (
    <View style={style.container}>
      <FacilitieIcon
        name="cutlery"
        title={setFacilitiesTitle(foodAndDrinkAvailable, "dostępny", "brak")}
      />

      <FacilitieIcon
        name="wheelchair"
        title={setFacilitiesTitle(
          disabledAccessAvailable,
          "przystosowany",
          "nie przystosowany"
        )}
      />

      <FacilitieIcon
        name="parking"
        title={setFacilitiesTitle(carParkAvailable, "bezpłatny", "płatny")}
      />
    </View>
  );
};

export default Facilities;

function FacilitieIcon({ name, title }) {
  return (
    <View style={style.box}>
      <ButtonIcon name={name} size="md" />
      <Text style={style.title} children={title} />
    </View>
  );
}
function setFacilitiesTitle(title, available, unavailable) {
  if (title === null) return "nieokreślono";

  return title ? available : unavailable;
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 30,
    paddingBottom: 50,
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 40,
  },
  title: { ...STYLES.fonts.bold, fontSize: 11, textTransform: "uppercase" },
});
