import React from "react";
import { StyleSheet, ScrollView, View, Dimensions, Text } from "react-native";
//components
import ListItem from "./ListItem";
import Icon from "../../../components/Icon";
//utils
import { STYLES } from "../../../style/styles";
import { COLORS } from "../../../style/colors";

export default React.memo(function List({ title, list }) {
  return (
    <View style={style.container}>
      <View style={style.titleBox}>
        <Text style={style.title}>{title}</Text>
        <Icon name="downArrow" size={15} color={COLORS.extra} styles={style.titleIcon} />
      </View>

      <ScrollView style={style.box}>
        {list.length ? (
          list.map((item) => <ListItem key={item._id} data={item} />)
        ) : (
          <View style={style.textBox}>
            <Text style={style.text}>Brak terminów.</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
});

const { height } = Dimensions.get("window");
const style = StyleSheet.create({
  container: { marginBottom: 20 },
  titleBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  titleIcon: { marginBottom: 10 },
  box: {
    height: (height / 9 + 5) * 2,
    backgroundColor: COLORS.lightGrey,
    borderRadius: 10,
  },
  textBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: (height / 9 + 5) * 2,
  },
  title: { ...STYLES.fonts.bold, fontSize: 16, paddingBottom: 15 },
  text: { ...STYLES.fonts.bold, fontSize: 14, color: COLORS.grey },
});
