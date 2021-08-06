import * as React from "react";
import { Formik } from "formik";
import { View } from "react-native";

import FormButton from "../FormButton";
import FormInput from "../FormInput";

import { style } from "./index.style";

const RegisterForm = () => {
  return (
    <Formik>
      <View style={style.container}>
        <FormInput label="name" />
        <FormInput label="email" />
        <FormInput label="password" />
        <FormButton label="zarejestruj" customStyle={style.button} />
      </View>
    </Formik>
  );
};
export default RegisterForm;
