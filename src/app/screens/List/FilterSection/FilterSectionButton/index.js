import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
//utils
import { COLORS } from "../../../../style/colors";
import { STYLES } from "../../../../style/styles";

export default function FilterSectionButton({ data: { id, title, active }, handler }) {
  const [isActive, setIsActive] = useState(active);
  const { lightnest, extra, dark } = COLORS;

  const handlePress = () => {
    handler(id);
    setIsActive(!isActive);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[style.container, { backgroundColor: isActive ? dark : extra }]}
    >
      <Text style={[style.title, { color: isActive ? lightnest : dark }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 50,
    marginRight: 10,
    height: 45,
    ...STYLES.shadow,
  },
  title: {
    fontSize: 11,
    ...STYLES.fonts.bold,
    textTransform: "uppercase",
  },
});
