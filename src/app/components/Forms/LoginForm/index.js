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

const LoginForm = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleOnSubmit = async ({ email, password }) => {
    const jwt = await userLogin(email, password);
    dispatch(setLoggedIn(jwt));
    const data = await findFavorites(jwt);
    dispatch(setFavorites(data));
    navigation.navigate(stacksNames.home);
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
