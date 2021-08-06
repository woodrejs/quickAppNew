import * as React from "react";
import { Formik } from "formik";
import { View } from "react-native";

import FormButton from "../FormButton";
import FormInput from "../FormInput";

import { style } from "./index.style";

const LoginForm = () => {
  return (
    <Formik>
      <View style={style.container}>
        <FormInput label="email" />
        <FormInput label="password" />
        <FormButton label="zaloguj" customStyle={style.button} />
      </View>
    </Formik>
  );
};
export default LoginForm;
