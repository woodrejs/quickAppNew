import * as React from "react";
import { Formik } from "formik";
import { View, StyleSheet, Button } from "react-native";
//components
import InputText from "../../../components/InputText";
//utils
import useAuth from "../../../hooks/useAuth";
import { RegisterSchema } from "../../../utils/strapi";
import { COLORS } from "../../../style/colors";

export default function Form() {
  const [_, __, ___, registerUser] = useAuth();

  const onSubmit = ({ email, password, username }, { resetForm }) => {
    registerUser(username, email, password);
    resetForm({});
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      onSubmit={onSubmit}
      validationSchema={RegisterSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View style={style.container}>
          {/* Email Input */}
          <InputText
            name="email"
            handleChange={handleChange("email")}
            handleBlur={handleBlur("email")}
            value={values.email}
            error={errors.email}
            placeholder="Email"
          />
          {/* Username Input */}
          <InputText
            name="username"
            handleChange={handleChange("username")}
            handleBlur={handleBlur("username")}
            value={values.username}
            error={errors.username}
            placeholder="Nazwa"
          />
          {/* Password Input */}
          <InputText
            name="password"
            handleChange={handleChange("password")}
            handleBlur={handleBlur("password")}
            value={values.password}
            error={errors.password}
            placeholder="Hasło"
          />

          {/* Submit Button */}
          <View style={style.buttonBox}>
            <Button title="ZALOGUJ" color={COLORS.extra} onPress={handleSubmit} />
          </View>
        </View>
      )}
    </Formik>
  );
}

const style = StyleSheet.create({
  container: { width: "100%", marginBottom: 50 },
  button: { paddingTop: 25 },
  buttonBox: { marginTop: 60 },
});
