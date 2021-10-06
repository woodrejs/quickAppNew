import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Linking } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { userUpdate, userDelete } from "../../utils/strapi";
import axios from "axios";

import { SUPPORT_MAIL } from "@env";
import { setInfo } from "../../redux/app.slice";
//components
import SettingsButton from "../../components/SettingsButton";

const Settings = () => {
  const jwt = useSelector(({ userSlice }) => userSlice.jwt);
  const dispatch = useDispatch();
  const handleAvatarChange = () => {};
  const handleSupportContact = () => Linking.openURL(`mailto:${SUPPORT_MAIL}`);
  const handleEmailChange = async (val) => {
    dispatch(setInfo(["pending"]));
    try {
      const resp = await userUpdate(val, jwt);
      dispatch(setInfo(["success", `Mail został poprawnie zmieniony.`]));
    } catch (error) {
      console.log(error);
      dispatch(setInfo(["failed", `Błąd podczas zmiany adresu mail. Spróbuj ponownie.`]));
    }
  };
  const handleUsernameChange = async (val) => {
    console.log(val);
    dispatch(setInfo(["pending"]));
    try {
      const resp = await userUpdate(val, jwt);
      dispatch(setInfo(["success", `Nazwa użytkownika została poprawnie zmieniona.`]));
    } catch (error) {
      dispatch(
        setInfo(["failed", `Błąd podczas zmiany nazwy użytkownika. Spróbuj ponownie.`])
      );
    }
  };
  const handleDeleteAccount = async () => {
    dispatch(setInfo(["pending"]));
    try {
      const resp = await userDelete(jwt);
      dispatch(setInfo(["success", `Konto zostało poprawnie usunięte.`]));
    } catch (error) {
      dispatch(
        setInfo([
          "failed",
          `Błąd podczas usuwania konta. Spróbuj ponownie lub skontaktuj się z administratorem strony.`,
        ])
      );
    }
  };

  return (
    <View style={styles.container}>
      <SettingsButton
        variant="avatar"
        handler={handleAvatarChange}
        text={{ title: "Ustaw/zmień swoje zdjecie profilowe.", buttonTitle: "Zmień" }}
      />

      <SettingsButton
        variant="support"
        handler={handleSupportContact}
        text={{
          title: "Skontaktuj się z administratorem strony.",
          buttonTitle: "Napisz",
        }}
      />

      <SettingsButton
        variant="email"
        submit={handleEmailChange}
        text={{
          title: "Zmień swój adres mailowy.",
          buttonTitle: "Zamień",
        }}
      />

      <SettingsButton
        variant="username"
        submit={handleUsernameChange}
        text={{
          title: "Zmień swoją nazwę urzytkownika.",
          buttonTitle: "Zamień",
        }}
      />
      <SettingsButton
        variant="delete"
        submit={handleDeleteAccount}
        text={{
          title: "Usun konto.",
          buttonTitle: "Usuń",
        }}
      />
    </View>
  );
};
export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
