import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
//components
import SearchSection from "./SearchSection";
import HorizontalRectangleList from "./HorizontalRectangleList";
import HorizontalSquareList from "./HorizontalSquareList";
import VerticalList from "./VerticalList";
import Icon from "../../components/Icon";
//styles
import { placesData, offersData } from "./index.data";
import { STYLES } from "../../style/styles";
import { COLORS } from "../../style/colors";

export default function Home({ navigation }) {
  return (
    <ScrollView style={style.container}>
      {/* Search Section */}
      <SearchSection />

      {/* Featured Categories Section*/}
      <TitleSection title="Popularne kategorie" />
      <HorizontalRectangleList navigation={navigation} />

      {/* Places Categories Section*/}
      <TitleSection title="Wybrane Miejsca" />
      <HorizontalSquareList data={placesData} navigation={navigation} />

      {/* Offers Categories Section*/}
      <TitleSection title="Wybrane Wydarzenia" />
      <HorizontalSquareList data={offersData} navigation={navigation} />

      {/* Offers Categories Section*/}
      <TitleSection title="polecane w tym tygodniu" />
      <VerticalList styles={style.verticalList} navigation={navigation} />
    </ScrollView>
  );
}
function TitleSection({ title }) {
  return (
    <View style={style.titleContainer}>
      <Text style={style.titleText} children={title} />
      <Icon name="rightArrow" size={15} color={COLORS.extra} styles={style.titleIcon} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    padding: 10,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  titleIcon: { marginBottom: 10 },
  titleText: {
    ...STYLES.fonts.bold,
    fontSize: 18,
    textTransform: "capitalize",
    marginBottom: 10,
    marginTop: 30,
  },
  verticalList: { marginBottom: 50 },
});
