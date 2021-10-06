import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Stacks } from "../../routes/stacks";
import { View, StyleSheet, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { COLORS } from "../../style/colors";
import { stacksNames } from "../../utils/stacksNames";
import { setLoggedOut } from "../../redux/user.slice";
import { setInfo } from "../../redux/app.slice";

const MenuCustomDrawer = (props) => {
  const dispatch = useDispatch();
  const userIsLogged = useSelector(({ userSlice }) => userSlice.logged);

  const handlePress = (name) => props.navigation.navigate(name);
  const handleLogOut = () => {
    dispatch(setLoggedOut());
    props.navigation.navigate(stacksNames.auth);
    dispatch(setInfo(["success", "Zostałeś poprawnie wylogowany."]));
  };

  return (
    <DrawerContentScrollView {...props} style={style.container}>
      <View style={style.box}>
        <View style={style.icon}>
          <AntDesign name="user" size={30} color="#616161" />
        </View>
        <Text style={style.title}>Witaj {"\n"}username</Text>
      </View>
      {Stacks.map(({ name, icon, id }) => {
        if (name === stacksNames.auth && userIsLogged) return;

        return (
          <DrawerItem
            key={id}
            label={name}
            onPress={() => handlePress(name)}
            icon={icon}
          />
        );
      })}

      {userIsLogged && (
        <DrawerItem
          label="Wyloguj"
          onPress={handleLogOut}
          icon={() => <Entypo name="lock-open" size={24} color={COLORS.black} />}
        />
      )}
    </DrawerContentScrollView>
  );
};

export default MenuCustomDrawer;

const style = StyleSheet.create({
  container: { backgroundColor: COLORS.lightExtra },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 70,
    paddingBottom: 80,
  },
  icon: {
    backgroundColor: COLORS.darkGrey,
    borderRadius: 50,
    padding: 15,
    marginLeft: 10,
    marginRight: 25,
  },
  title: {
    color: COLORS.black,
    fontFamily: "Montserrat700",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 22,
    textTransform: "capitalize",
  },
});
