import * as React from "react";
import { Formik } from "formik";
import { View, TextInput, Button } from "react-native";

import FormButton from "../FormButton";
import FormInput from "../FormInput";
import { useSelector, useDispatch } from "react-redux";
import { style } from "./index.style";
import { userRegister, RegisterSchema, findFavorites } from "../../../utils/strapi";
import { setLoggedIn, setFavorites } from "../../../redux/user.slice";
import { stacksNames } from "../../../utils/stacksNames";
import { setInfo } from "../../../redux/app.slice";

const RegisterForm = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleOnSubmit = async ({ username, email, password }) => {
    dispatch(setInfo(["pending"]));
    try {
      const { jwt, user } = await userRegister(username, email, password);
      dispatch(setLoggedIn(jwt));
      dispatch(
        setInfo(["success", `Witaj ${user.username}, Twoje konto zostało utworzone.`])
      );
      navigation.navigate(stacksNames.home);
    } catch (error) {
      dispatch(setInfo(["failed", `Błąd podczas rejestracji. Spróbuj ponownie.`]));
    }
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      onSubmit={handleOnSubmit}
      validationSchema={RegisterSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View style={style.container}>
          <FormInput
            label="username"
            change={handleChange("username")}
            blur={handleBlur("username")}
            val={values.username}
            error={errors.username}
          />
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
          <FormButton
            label="zarejestruj"
            customStyle={style.button}
            press={handleSubmit}
          />
        </View>
      )}
    </Formik>
  );
};
export default RegisterForm;
