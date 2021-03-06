import React, { useState } from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import { View, Button, TouchableWithoutFeedback } from "react-native";
import { Formik } from "formik";
//components
import Icon from "../../../components/Icon";
//utils
import { DeleteSchema, EmailSchema, UsernameSchema } from "../../../utils/strapi";
import { STYLES } from "../../../style/styles";
import { COLORS } from "../../../style/colors";

export default React.memo(function SettingsInputButton({
  name,
  title,
  handler,
  subTitle = null,
}) {
  //hooks
  const [isOpen, setIsOpen] = useState(false);

  //handlers
  const handlePress = () => setIsOpen(!isOpen);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={style.container}>
        {/* Title Section */}
        <View style={style.titleBox}>
          <Icon styles={style.titleIcon} name={name} size={18} color={COLORS.grey} />
          <Text style={style.titleText}>
            {title}
            {isOpen && subTitle}
          </Text>
        </View>

        {/* Form */}
        {isOpen && (
          <Formik
            initialValues={{ [name]: "" }}
            onSubmit={handler}
            validationSchema={getValidationSchema(name)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
              return (
                <View style={style.formBox}>
                  {/* Input */}
                  <TextInput
                    onChangeText={handleChange(name)}
                    onBlur={handleBlur(name)}
                    value={values[name]}
                    style={style.input}
                  />

                  {/* Error */}
                  {errors[name] && <Text style={style.error} children={errors[name]} />}

                  {/* Button */}
                  <Button title="ok" color={COLORS.extra} onPress={handleSubmit} />
                </View>
              );
            }}
          </Formik>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
});
function getValidationSchema(name) {
  switch (name) {
    case "email":
      return EmailSchema;
    case "username":
      return UsernameSchema;
    case "delete":
      return DeleteSchema;
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightnest,
    ...STYLES.shadow,
    borderRadius: 10,
    minHeight: 50,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    marginBottom: 10,
  },
  titleBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  titleIcon: { marginRight: 20 },
  titleText: { ...STYLES.fonts.bold, opacity: 0.8, fontSize: 14, width: "100%" },
  //form
  formBox: { paddingTop: 20 },
  input: {
    backgroundColor: COLORS.light,
    marginBottom: 10,
    borderRadius: 10,
    height: 40,
    padding: 10,
    ...STYLES.fonts.regular,
    fontSize: 14,
    ...STYLES.shadow,
  },
  error: { ...STYLES.fonts.bold, fontSize: 11, color: COLORS.warning, paddingBottom: 10 },
});
