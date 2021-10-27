import React, { useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

//utils
import { COLORS } from "../../../../style/colors";
import { STYLES } from "../../../../style/styles";

export default React.memo(function FilterSectionButton({ data, handler, active }) {
  //const
  const { lightnest, extra, dark } = useMemo(() => COLORS);

  //handlers
  const handlePress = () => handler(data.id, !active);

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[style.container, { backgroundColor: active ? dark : extra }]}
    >
      <Text style={[style.title, { color: active ? lightnest : dark }]}>
        {data.title}
      </Text>
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
