import React, { useMemo, useCallback } from "react";
import { View, Text, TouchableWithoutFeedback, Button } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Dimensions, StyleSheet } from "react-native";
//components
import MenuDrawerUserSection from "./MenuDrawerUserSection";
import Icon from "../Icon";
import CloseButton from "./CloseButton";
//utils & styles
import { stacksNames } from "../../utils/stacksNames";
import useAuth from "../../hooks/useAuth";
import { COLORS } from "../../style/colors";
import { STYLES } from "../../style/styles";
import { screensNames } from "../../utils/screensNames";

///!!!important!!! useAuth arr => obj
export default function MenuCustomDrawer(props) {
  //hooks
  const [__, ___, logoutUser] = useAuth();
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
    () => (logged ? logoutUser() : navigation.navigate(stacksNames.auth)),
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

const Tile = ({ name, icon, title, handler }) => {
  //hooks
  const navigation = useNavigation();

  if (!navigation.getCurrentRoute()) return null;

  //const
  const route = navigation.getCurrentRoute().name;
  const color = name === route ? COLORS.extra : COLORS.grey;

  //handlers
  const handlePress = () => handler(stacksNames[title]);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={style.tileContainer}>
        <Text style={[style.tileTitle, { color }]} children={stacksNames[title]} />
        <Icon name={icon} color={color} />
      </View>
    </TouchableWithoutFeedback>
  );
};

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
  //tile
  tileContainer: {
    ...STYLES.shadow,
    backgroundColor: COLORS.dark,
    width: Dimensions.get("window").width / 2 - 26,
    height: 100,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: 10,
  },
  tileTitle: {
    ...STYLES.fonts.bold,
    fontSize: 12,
    textTransform: "uppercase",
  },
  version: {
    position: "absolute",
    top: 5,
    left: 0,
    ...STYLES.fonts.bold,
    color: COLORS.grey,
  },
});
