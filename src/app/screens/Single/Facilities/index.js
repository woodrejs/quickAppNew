import React from "react";
import { StyleSheet, View, Text } from "react-native";
//components
import ButtonIcon from "../../../components/ButtonIcon";
//utils
import { STYLES } from "../../../style/styles";

export default React.memo(function Facilities({ venue }) {
  //const
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
});
const FacilitieIcon = React.memo(({ name, title }) => {
  return (
    <View style={style.box}>
      <ButtonIcon name={name} size="md" />
      <Text style={style.title} children={title} />
    </View>
  );
});

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
