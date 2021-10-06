import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { Entypo, FontAwesome, AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { Formik } from "formik";
import { EmailSchema, DeleteSchema, UsernameSchema } from "../../utils/strapi";

import { COLORS } from "../../style/colors";
import MobileCamera from "../MobileCamera";

const SettingsButton = ({ variant, text, handler = null, submit }) => {
  const [isOpen, setIsOpen] = useState(false);

  const displayIcon = (variant) => {
    const { extra } = COLORS;
    const { buttonIcon } = styles;

    switch (variant) {
      case "email":
        return <Entypo name="mail" size={28} style={buttonIcon} color={extra} />;
      case "avatar":
        return <Entypo name="image" size={28} style={buttonIcon} color={extra} />;
      case "support":
        return <FontAwesome name="support" size={28} style={buttonIcon} color={extra} />;
      case "delete":
        return <AntDesign name="deleteuser" size={28} style={buttonIcon} color={extra} />;
      case "username":
        return <AntDesign name="user" size={24} style={buttonIcon} color={extra} />;
    }
  };
  const validationSchema = (variant) => {
    switch (variant) {
      case "email":
        return EmailSchema;
      case "username":
        return UsernameSchema;
      case "delete":
        return DeleteSchema;
    }
  };
  const handlePress = () => {
    handler && handler();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonBox} onPress={handlePress}>
          {displayIcon(variant)}
          <Text style={styles.buttonText}>{text.title}</Text>
        </TouchableOpacity>

        {/* forms */}
        {(variant === "email" || variant === "delete" || variant === "username") &&
          isOpen && (
            <Formik
              initialValues={{ [variant]: "" }}
              onSubmit={submit}
              validationSchema={validationSchema(variant)}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <View style={styles.formBox}>
                  <TextInput
                    onChangeText={handleChange(variant)}
                    onBlur={handleBlur(variant)}
                    value={values[variant]}
                    style={styles.formInput}
                  />
                  {errors && <Text style={styles.inputErrors}>{errors[variant]}</Text>}
                  <Button
                    title={text.buttonTitle}
                    onPress={handleSubmit}
                    color={COLORS.extra}
                  />
                </View>
              )}
            </Formik>
          )}
      </View>
      {/* camera */}
      {variant === "avatar" && <MobileCamera isOpen={isOpen} handler={setIsOpen} />}
    </>
  );
};

export default SettingsButton;

const styles = StyleSheet.create({
  container: { marginTop: 30 },
  buttonBox: { display: "flex", flexDirection: "row", alignItems: "center" },
  buttonText: {
    fontFamily: "Montserrat400",
    fontWeight: "400",
    fontSize: 14,
    color: COLORS.black,
  },
  buttonIcon: { marginRight: 20 },
  formBox: {},
  formInput: {
    fontFamily: "Montserrat400",
    fontWeight: "400",
    fontSize: 14,
    borderColor: COLORS.grey,
    borderWidth: 1,
    marginTop: 10,
    padding: 5,
  },
  inputErrors: { color: "red" },
});
