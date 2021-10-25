import React, { useState, useCallback, useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
//utils
import { COLORS } from "../../../../style/colors";
import { STYLES } from "../../../../style/styles";

export default React.memo(function FilterSectionButton({ data, handler }) {
  //hooks
  const [isActive, setIsActive] = useState(active);

  //const
  const { lightnest, extra, dark } = useMemo(() => COLORS);
  const { id, title, active } = useMemo(() => data);

  //handlers
  const handlePress = useCallback(() => {
    handler(id);
    setIsActive(!isActive);
  }, [isActive, id]);

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[style.container, { backgroundColor: isActive ? dark : extra }]}
    >
      <Text style={[style.title, { color: isActive ? lightnest : dark }]}>{title}</Text>
    </TouchableOpacity>
  );
});

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
