import React, { useEffect } from "react";
import { Formik } from "formik";
import { View, StyleSheet, Button, TouchableOpacity, Text } from "react-native";
import { useDispatch } from "react-redux";
//components
import InputText from "../../../components/InputText";
//utils
import useAuth from "../../../hooks/useAuth";
import { LoginSchema, findOneAvatar } from "../../../utils/strapi";
import { setAvatar, setFavorites } from "../../../redux/user.slice";
import { COLORS } from "../../../style/colors";
import { STYLES } from "../../../style/styles";

export default function Form({ navigation }) {
  const [user, logInUser] = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    async function init() {
      const { avatar, favorites } = user.user;

      if ("id" in avatar) {
        const { public_id, url } = await findOneAvatar(avatar.id, user.jwt);
        dispatch(setAvatar({ public_id, url }));
      }

      if (favorites.length) {
        const formatedFavorites = favorites.map(({ uid, type, img, title }) => ({
          id: uid,
          type,
          img,
          title,
        }));

        dispatch(setFavorites(formatedFavorites));
      }
    }
    user && init();
  }, [user]);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={({ email, password }) => logInUser(email, password, navigation)}
      validationSchema={LoginSchema}
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
          {/* Password Input */}
          <InputText
            name="password"
            handleChange={handleChange("password")}
            handleBlur={handleBlur("password")}
            values={values}
            error={errors.password}
            placeholder="Hasło"
          />

          {/* Password Restore Button */}
          <RestoreButton />

          {/* Submit Button */}
          <Button title="ZALOGUJ" color={COLORS.extra} onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
}
//!!!important!!! add mechanics
function RestoreButton() {
  const handler = () => console.log("handler");

  return (
    <View style={style.restoreContainer}>
      <TouchableOpacity style={style.restoreBox} onPress={handler}>
        <Text style={style.restoreText}>Nie pamiętasz hasła?</Text>
      </TouchableOpacity>
    </View>
  );
}
const style = StyleSheet.create({
  container: { width: "100%", marginBottom: 50 },
  button: { paddingTop: 25 },
  restoreContainer: { display: "flex", alignItems: "flex-end", marginBottom: 60 },
  restoreBox: { padding: 10 },
  restoreText: { ...STYLES.fonts.regular, opacity: 0.8 },
});


