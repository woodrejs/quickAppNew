import React, { useEffect } from "react";
import { Formik } from "formik";
import { View, StyleSheet, Button, TouchableOpacity, Text, Linking } from "react-native";
import { useDispatch } from "react-redux";
import { SUPPORT_MAIL } from "@env";
//components
import InputText from "../../../components/InputText";
//utils
import useAuth from "../../../hooks/useAuth";
import { LoginSchema, findOneAvatar } from "../../../utils/strapi";
import { setAvatar, setFavorites, setSchedules } from "../../../redux/user.slice";
import { COLORS } from "../../../style/colors";
import { STYLES } from "../../../style/styles";

export default function Form() {
  const [user, logInUser] = useAuth();
  const dispatch = useDispatch();

  const onSubmit = ({ email, password }, { resetForm }) => {
    logInUser(email, password);
    resetForm({});
  };

  useEffect(() => {
    async function init() {
      const { avatar, favorites, schedules } = user.user;

      if ("id" in avatar) {
        const { data } = await findOneAvatar(avatar.id, user.jwt);
        const { public_id, url } = data;
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

      if (schedules.length) {
        const formatedSchedules = schedules.map(({ uid, date, title, _id }) => ({
          id: uid,
          date,
          title,
          _id,
        }));

        dispatch(setSchedules(formatedSchedules));
      }
    }
    user && init();
  }, [user]);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={onSubmit}
      validationSchema={LoginSchema}
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
          {/* Password Input */}
          <InputText
            name="password"
            handleChange={handleChange("password")}
            handleBlur={handleBlur("password")}
            value={values.password}
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

function RestoreButton() {
  const handler = () => Linking.openURL(`mailto:${SUPPORT_MAIL}`);

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
  restoreText: { ...STYLES.fonts.regular, opacity: 0.8, color: COLORS.extra },
});
