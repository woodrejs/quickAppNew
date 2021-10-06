import * as React from "react";
import { Formik } from "formik";
import { View } from "react-native";

import FormButton from "../FormButton";
import FormInput from "../FormInput";
import { useSelector, useDispatch } from "react-redux";
import { style } from "./index.style";
import { userLogin, LoginSchema, findFavorites } from "../../../utils/strapi";
import { setLoggedIn, setFavorites } from "../../../redux/user.slice";
import { stacksNames } from "../../../utils/stacksNames";
import { setInfo } from "../../../redux/app.slice";

const LoginForm = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleOnSubmit = async ({ email, password }) => {
    dispatch(setInfo(["pending"]));
    try {
      const { jwt, user } = await userLogin(email, password);
      dispatch(setLoggedIn(jwt));
      dispatch(setInfo(["success", `${user.username} witaj w quick week app.`]));
      navigation.navigate(stacksNames.home);
    } catch (error) {
      dispatch(setInfo(["failed", `Błąd podczas logowania. Spróbuj ponownie.`]));
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleOnSubmit}
      validationSchema={LoginSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View style={style.container}>
          <FormInput
            label="email"
            change={handleChange("email")}
            blur={handleBlur("email")}
            val={values.email}
            error={errors.email}
          />
          <FormInput
            label="password"
            change={handleChange("password")}
            blur={handleBlur("password")}
            val={values.password}
            error={errors.password}
          />
          <FormButton label="zaloguj" customStyle={style.button} press={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};
export default LoginForm;
