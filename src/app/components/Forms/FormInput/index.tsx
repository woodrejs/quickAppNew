import React from "react";
import { View, TextInput, Text } from "react-native";

import { Props } from "./index.utils";
import { style } from "./index.style";

const FormInput: React.FC<Props> = ({ label }) => {
  return (
    <View style={style.container}>
      <Text style={style.label}>{label}</Text>
      <TextInput
        onChangeText={() => console.log("onChangeText")}
        onBlur={() => console.log("onBlur")}
        value={""}
        style={style.input}
      />
    </View>
  );
};
export default FormInput;
