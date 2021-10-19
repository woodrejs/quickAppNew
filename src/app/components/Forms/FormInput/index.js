import React from "react";
import { View, TextInput, Text } from "react-native";
import { style } from "./index.style";

const FormInput = ({ label = "", change, blur, val, error }) => {
  return (
    <View style={style.container}>
      <Text style={style.label}>{label}</Text>
      <TextInput onChangeText={change} onBlur={blur} value={val} style={style.input} />
      {error && <Text style={style.error}>{error.error}</Text>}
    </View>
  );
};
export default FormInput;
