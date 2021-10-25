import React from "react";
import { useSelector } from "react-redux";
import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";
//components
import SearchSection from "../../components/SearchSection";
import VerticalList from "../../components/VerticalList";
//utils
import { COLORS } from "../../style/colors";
import { STYLES } from "../../style/styles";

export default React.memo(function Search() {
  //hooks
  const list = useSelector(({ listSlice }) => listSlice.search.list);

  return (
    <ScrollView style={style.container}>
      <SearchSection />
      <View style={style.box}>
        {list.length ? (
          <VerticalList list={list} styles={style.list} />
        ) : (
          <Text style={style.text}>Brak wyników.</Text>
        )}
      </View>
    </ScrollView>
  );
});

const { height } = Dimensions.get("window");
const style = StyleSheet.create({
  container: {
    height: height - 80,
    width: "100%",
    padding: 10,
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: height - 165,
  },
  list: {
    marginTop: 20,
  },
  text: { ...STYLES.fonts.bold, fontSize: 14, color: COLORS.grey },
});
