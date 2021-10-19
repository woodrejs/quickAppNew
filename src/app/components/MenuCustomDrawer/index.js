import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
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

export default function MenuCustomDrawer(props) {
  const [__, ___, logoutUser] = useAuth();
  const isUserLogged = useSelector(({ userSlice }) => userSlice.logged);

  const handlePress = (name) => props.navigation.navigate(name);
  const handleCloseDrawer = () => props.navigation.closeDrawer();
  const handleLogOut = () =>
    isUserLogged
      ? logoutUser(props.navigation)
      : props.navigation.navigate(stacksNames.auth);

  return (
    <DrawerContentScrollView {...props}>
      <Text style={style.version}>v1.0.0</Text>
      <CloseButton handler={handleCloseDrawer} />
      {/* User Info */}
      <MenuDrawerUserSection />

      {/* Tile Buttons */}
      <View style={style.box}>
        <View style={style.row}>
          <Tile name="home" title="home" handler={handlePress} />
          <Tile name="heart" title="favorites" handler={handlePress} />
        </View>
        <View style={style.row}>
          <Tile name="place" title="places" handler={handlePress} />
          <Tile name="users" title="offers" handler={handlePress} />
        </View>
        <View style={style.row}>
          <Tile name="calendar" title="schedule" handler={handlePress} />
          <Tile name="gear" title="settings" handler={handlePress} />
        </View>
      </View>

      {/* Auth Button */}
      <Button
        title={isUserLogged ? "wyloguj" : "zaloguj"}
        color={COLORS.extra}
        onPress={handleLogOut}
      />
    </DrawerContentScrollView>
  );
}

function Tile({ name, title, handler }) {
  const handlePress = () => handler(stacksNames[title]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={style.tileContainer}>
        <Text style={style.tileTitle} children={stacksNames[title]} />
        <Icon name={name} color={COLORS.grey} />
      </View>
    </TouchableOpacity>
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
    color: COLORS.grey,
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
// import React from "react";
// import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
// import { StyleSheet } from "react-native";
// //components
// import MenuDrawerUserSection from "./MenuDrawerUserSection";
// //utils & styles
// import { Stacks } from "../../routes/stacks";
// import { Entypo } from "@expo/vector-icons";
// import { COLORS } from "../../style/colors";
// import { stacksNames } from "../../utils/stacksNames";


// import useUserLogOut from "../../hooks/useUserLogOut";

// const MenuCustomDrawer = (props) => {
//   const [userIsLogged, setUserIsLogged] = useUserLogOut();

//   const handlePress = (name) => props.navigation.navigate(name);
//   const handleLogOut = () => setUserIsLogged(props.navigation);

//   return (
//     <DrawerContentScrollView {...props} style={style.container}>
//       <MenuDrawerUserSection />

//       {Stacks.map(({ name, icon, id }) => {
//         if (name === stacksNames.auth && userIsLogged) {
//           return (
//             <DrawerItem
//               key={id}
//               label="Wyloguj"
//               onPress={handleLogOut}
//               icon={() => <Entypo name="lock-open" size={24} color={COLORS.black} />}
//             />
//           );
//         }

//         return (
//           <DrawerItem
//             key={id}
//             label={name}
//             onPress={() => handlePress(name)}
//             icon={icon}
//           />
//         );
//       })}
//     </DrawerContentScrollView>
//   );
// };

// export default MenuCustomDrawer;

// const style = StyleSheet.create({
//   container: { backgroundColor: COLORS.lightExtra },
// });
