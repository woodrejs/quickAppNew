import React, { useMemo, useCallback } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";
import { DrawerContentScrollView } from "@react-navigation/drawer";
//components
import Tile from "./Tile";
import MenuDrawerUserSection from "./MenuDrawerUserSection";
import CloseButton from "./CloseButton";
//utils & styles
import useAuth from "../../hooks/useAuth";
import { stacksNames } from "../../utils/stacksNames";
import { screensNames } from "../../utils/screensNames";
import { COLORS } from "../../style/colors";
import { STYLES } from "../../style/styles";

export default function MenuCustomDrawer(props) {
  //hooks
  const { logout } = useAuth();
  const { logged } = useSelector(({ userSlice }) => userSlice);

  //const
  const { navigation } = props;
  const { eventList, favoritesList, home, placeList, schedule, settings } = useMemo(
    () => screensNames
  );

  //handlers
  const handlePress = useCallback((name) => navigation.navigate(name), []);
  const handleCloseDrawer = useCallback(() => navigation.closeDrawer(), []);
  const handleLogOut = useCallback(
    () => (logged ? logout() : navigation.navigate(stacksNames.auth)),
    [logged]
  );

  return (
    <DrawerContentScrollView {...props}>
      <Text style={style.version}>v1.0.0</Text>
      <CloseButton handler={handleCloseDrawer} />
      {/* User Info */}
      <MenuDrawerUserSection />

      {/* Tile Buttons */}
      <View style={style.box}>
        <View style={style.row}>
          <Tile name={home} icon="home" title="home" handler={handlePress} />
          <Tile
            name={favoritesList}
            icon="heart"
            title="favorites"
            handler={handlePress}
          />
        </View>
        <View style={style.row}>
          <Tile name={placeList} icon="place" title="places" handler={handlePress} />
          <Tile name={eventList} icon="users" title="offers" handler={handlePress} />
        </View>
        <View style={style.row}>
          <Tile name={schedule} icon="calendar" title="schedule" handler={handlePress} />
          <Tile name={settings} icon="gear" title="settings" handler={handlePress} />
        </View>
      </View>

      {/* Auth Button */}
      <Button
        title={logged ? "wyloguj" : "zaloguj"}
        color={COLORS.extra}
        onPress={handleLogOut}
      />
    </DrawerContentScrollView>
  );
}

const style = StyleSheet.create({
  box: {
    marginBottom: 120,
    padding: 4,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  version: {
    position: "absolute",
    top: 5,
    left: 0,
    ...STYLES.fonts.bold,
    color: COLORS.grey,
  },
});
