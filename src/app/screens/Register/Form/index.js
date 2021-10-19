import * as React from "react";
import { Formik } from "formik";
import { View, StyleSheet, Button } from "react-native";
//components
import InputText from "../../../components/InputText";
//utils & styles
import { RegisterSchema } from "../../../utils/strapi";
import useAuth from "../../../hooks/useAuth";
import { COLORS } from "../../../style/colors";

export default function Form({ navigation }) {
  const [_, __, ___, registerUser] = useAuth();

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      onSubmit={({ email, password, username }) =>
        registerUser(username, email, password, navigation)
      }
      validationSchema={RegisterSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View style={style.container}>
          {/* Email Input */}
          <InputText
            name="email"
            handleChange={handleChange("email")}
            handleBlur={handleBlur("email")}
            values={values}
            error={errors.email}
            placeholder="Email"
          />
          {/* Username Input */}
          <InputText
            name="username"
            handleChange={handleChange("username")}
            handleBlur={handleBlur("username")}
            values={values}
            error={errors.username}
            placeholder="Nazwa"
          />
          {/* Password Input */}
          <InputText
            name="password"
            handleChange={handleChange("password")}
            handleBlur={handleBlur("password")}
            values={values}
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
