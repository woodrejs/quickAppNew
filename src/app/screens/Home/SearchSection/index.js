import React from "react";
import { Formik } from "formik";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
//components
import Icon from "../../../components/Icon";
//utils
import { SearchSchema } from "../../../utils/strapi";
import { COLORS } from "../../../style/colors";
import { STYLES } from "../../../style/styles";

///!!!important!!! add mechanics
export default function SearchSection() {
  const handleSubmit = (val) => console.log("submit");
  const handleClear = () => console.log("clear");

  return (
    <Formik
      initialValues={{ search: "" }}
      onSubmit={({ search }) => handleSubmit(search)}
      validationSchema={SearchSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View style={style.container}>
          {/* Submit Button */}
          <SubmitButton handler={handleSubmit} />

          {/* Search Input */}
          <TextInput
            style={style.input}
            onChangeText={handleChange}
            onBlur={handleBlur}
            value={values}
            placeholder="Znajdź miejsce lub wydarzenie"
            placeholderTextColor={COLORS.grey}
          />
          {/* Clear Button */}
          <ClearButton handler={handleClear} />
        </View>
      )}
    </Formik>
  );
}
function ClearButton(handler) {
  return (
    <TouchableOpacity style={style.clear} onPress={handler}>
      <Icon name="cross" size={18} color={COLORS.grey} />
    </TouchableOpacity>
  );
}
function SubmitButton(handler) {
  return (
    <TouchableOpacity style={style.submit} onPress={handler}>
      <Icon name="search" size={30} color={COLORS.extra} />
    </TouchableOpacity>
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
    marginTop: 30,
  },
  submit: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    width: 50,
    paddingHorizontal: 10,
  },
  input: { flex: 1, ...STYLES.fonts.regular, fontSize: 14 },
  clear: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    width: 50,
    paddingHorizontal: 10,
  },
});
