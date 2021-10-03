import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
//utils & styles
import { COLORS } from "../../../style/colors";

const FilterSectionButton = ({ data: { id, title, active }, handler }) => {
  const [isActive, setIsActive] = useState(active);
  const { white, black, lightExtra } = COLORS;

  const handlePress = () => {
    handler(id);
    setIsActive(!isActive);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[style.container, { backgroundColor: isActive ? lightExtra : white }]}
    >
      <Text style={[style.title, { color: isActive ? white : black }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FilterSectionButton;

const style = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    marginRight: 10,
    height: 26,
  },
  title: {
    fontSize: 10,
    fontFamily: "Montserrat700",
    fontWeight: "700",
    textTransform: "uppercase",
  },
});
