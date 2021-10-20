import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { StyleSheet, View, Linking, Platform, Button, Text } from "react-native";
import { useSelector } from "react-redux";
import { SUPPORT_MAIL } from "@env";
//components
import useUser from "../../hooks/useUser";
import SettingsButton from "./SettingsButton";
import SettingsInputButton from "./SettingsInputButton";
//utils
import useAvatar from "../../hooks/useAvatar";
import { COLORS } from "../../style/colors";
import { STYLES } from "../../style/styles";

export default function Settings() {
  const { avatar, logged } = useSelector(({ userSlice }) => userSlice);
  const [updateUser, deleteUser] = useUser();
  const setAvatar = useAvatar();

  const handleSupportContact = () => Linking.openURL(`mailto:${SUPPORT_MAIL}`);
  const handleAvatarChange = () => setAvatar(avatar.public_id);
  const handleEmailChange = (val) => updateUser(val);
  const handleUsernameChange = (val) => updateUser(val);
  const handleDeleteAccount = () => deleteUser();
  const handleLogOut = () => console.log("logOut");

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  //!!!important!!! same in FavoritesList
  if (!logged)
    return (
      <View style={style.box}>
        <Text style={style.text}>
          Żeby skorzystać z tej funkcji, musisz być zalogowany.
        </Text>
      </View>
    );

  return (
    <View style={style.container}>
      <View>
        {/* Title */}
        <Text style={style.title}>Ustawienia</Text>
        {/* Avatar Change  */}
        <SettingsButton
          name="image"
          title="Ustaw/zmień swoje zdjecie profilowe."
          handler={handleAvatarChange}
        />
        {/* Contact Support */}
        <SettingsButton
          name="support"
          title="Skontaktuj się z administratorem strony."
          handler={handleSupportContact}
        />
        {/* Email Change */}
        <SettingsInputButton
          name="email"
          title="Zmień swój adres mailowy."
          handler={handleEmailChange}
        />
        {/* Username Change */}
        <SettingsInputButton
          name="username"
          title="Zmień swoją nazwę urzytkownika."
          handler={handleUsernameChange}
        />
        {/* Delete Account */}
        <SettingsInputButton
          name="delete"
          title="Usun konto. "
          subTitle='Żeby usunać konto, wpisz "delete" i naciśnij "ok".'
          handler={handleDeleteAccount}
        />
      </View>

      {/* Logout Button */}
      <Button title="wyloguj" color={COLORS.extra} onPress={handleLogOut} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 30,
    display: "flex",
    justifyContent: "space-between",
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  text: {
    ...STYLES.fonts.bold,
    fontSize: 16,
    color: COLORS.grey,
    textAlign: "center",
    maxWidth: 300,
  },
  title: { ...STYLES.fonts.bold, fontSize: 28, paddingVertical: 40 },
});
