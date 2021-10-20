import React from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import { COLORS } from "../../style/colors";
import { STYLES } from "../../style/styles";
import Icon from "../Icon";

export default function InputText({
  name,
  values,
  handleChange,
  handleBlur,
  placeholder = "",
  styles = {},
  error = null,
}) {
  return (
    <View>
      <View style={[style.container, styles]}>
        <Icon name={name} color={COLORS.grey} />
        <TextInput
          style={style.input}
          onChangeText={handleChange}
          onBlur={handleBlur}
          value={values}
          placeholder={placeholder}
          placeholderTextColor={COLORS.grey}
        />
      </View>
      {error && <Text style={style.error} children={error} />}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: 45,
    ...STYLES.shadow,
    backgroundColor: COLORS.lightnest,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    padding: 10,
    position: "relative",
  },
  input: { flex: 1, ...STYLES.fonts.regular, fontSize: 14, marginLeft: 20 },
  error: {
    ...STYLES.fonts.bold,
    fontSize: 11,
    color: COLORS.warning,
    position: "absolute",
    bottom: -12,
  },
});
