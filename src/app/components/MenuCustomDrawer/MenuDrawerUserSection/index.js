import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { COLORS } from "../../../style/colors";
import { STYLES } from "../../../style/styles";
import { useSelector } from "react-redux";
import Icon from "../../Icon";

const MenuDrawerUserSection = () => {
  const { url } = useSelector(({ userSlice }) => userSlice.avatar);
  return (
    <View style={style.container}>
      <View style={style.box}>
        <View style={style.imageBox}>
          {url && <Image style={style.image} source={{ uri: url }} />}
          {!url && <Icon name="user" />}
        </View>
        <Text style={style.title}>Witaj {"\n"}username</Text>
      </View>
    </View>
  );
};

export default MenuDrawerUserSection;

const style = StyleSheet.create({
  container: {
    height: 120,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  box: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: { height: "100%", width: "100%" },
  imageBox: {
    borderRadius: 100,
    overflow: "hidden",
    backgroundColor: COLORS.grey,
    height: 80,
    width: 80,
    ...STYLES.shadow,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flex: 1,
    paddingLeft: 20,
    textAlign: "left",
    ...STYLES.fonts.bold,
    color: COLORS.grey,
    fontSize: 24,
    textTransform: "capitalize",
  },
});
// import React from "react";
// import { View, StyleSheet, Text, ImageBackground } from "react-native";
// import { AntDesign } from "@expo/vector-icons";
// import { COLORS } from "../../../style/colors";
// import { useSelector } from "react-redux";

// const MenuDrawerUserSection = () => {
//   const { url } = useSelector(({ userSlice }) => userSlice.avatar);
//   return (
//     <View style={style.container}>
//       <ImageBackground style={style.box} source={{ uri: url }} imageStyle={style.icon}>
//         {!url && <AntDesign name="user" size={30} color="#616161" />}
//       </ImageBackground>
//       <Text style={style.title}>Witaj {"\n"}username</Text>
//     </View>
//   );
// };

// export default MenuDrawerUserSection;

// const style = StyleSheet.create({
//   container: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     paddingTop: 70,
//     paddingBottom: 80,
//   },
//   box: {
//     backgroundColor: COLORS.darkGrey,
//     borderRadius: 50,
//     height: 75,
//     width: 75,
//     marginLeft: 10,
//     marginRight: 25,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   icon: { borderRadius: 50 },
//   title: {
//     color: COLORS.black,
//     fontFamily: "Montserrat700",
//     fontWeight: "700",
//     fontSize: 24,
//     lineHeight: 22,
//     textTransform: "capitalize",
//   },
// });
