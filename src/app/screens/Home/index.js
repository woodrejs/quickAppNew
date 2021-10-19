import React from "react";
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
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
      <HorizontalRectangleList />

      {/* Places Categories Section*/}
      <TitleSection title="Wybrane Miejsca" />
      <HorizontalSquareList data={placesData} />

      {/* Offers Categories Section*/}
      <TitleSection title="Wybrane Wydarzenia" />
      <HorizontalSquareList data={offersData} />

      {/* Offers Categories Section*/}
      <TitleSection title="polecane w tym tygodniu" />
      <VerticalList styles={style.verticalList} />
    </ScrollView>
  );
}
function TitleSection({ title, navigation }) {
  const handler = () => console.log("handler");
  return (
    <View style={style.titleContainer}>
      <TouchableOpacity>
        <Text style={style.titleText} children={title} />
      </TouchableOpacity>
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

// import React from "react";
// import { Text, ScrollView, View } from "react-native";
// import { useSelector } from "react-redux";
// //components
// import LargeEventCard from "../../components/LargeEventCard";
// import ScheduleEventCard from "../../components/ScheduleEventCard";
// import HorizontalCardList from "../../components/HorizontalCardList";
// import ScreenTitleSection from "../../components/ScreenTitleSection";
// //styles
// import { style } from "./index.style";

// const Home = ({ navigation }) => {
//   const lists = useSelector((state) => state.homeSlice.lists);
//   const { places, main } = lists;

//   return (
//     <ScrollView style={style.container}>
//       <ScreenTitleSection title="Witaj w Quick Week App">
//         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//       </ScreenTitleSection>

//       <LargeEventCard list={main.list} navigation={navigation} />

//       {/* !!!important!!! */}
//       <ScheduleEventCard />

//       <Text style={style.subTitle}>Odkryj teraz</Text>
//       <Text style={style.text}>
//         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//       </Text>

//       {displayCardsLists(lists, navigation)}

//       <Text style={style.subTitle}>Wrocław</Text>
//       <Text style={style.label}>Miasto Spotkań</Text>
//       <Text style={style.text}>
//         Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
//         Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
//         simply dummy text of the printing and typesetting industry.
//       </Text>

//       <HorizontalCardList
//         title="Miejsca"
//         data={places.list}
//         navigation={navigation}
//         variant="places"
//       >
//         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//       </HorizontalCardList>

//       <View style={style.footer} />
//     </ScrollView>
//   );
// };
// export default Home;

// function displayCardsLists(obj, navigation) {
//   const result = [];

//   for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//       const { id, filters, text, variant, list, title } = obj[key];

//       if (variant === "offers" && key !== "main") {
//         result.push(
//           <HorizontalCardList
//             key={id}
//             title={title}
//             data={list}
//             navigation={navigation}
//             filters={filters}
//             children={text}
//           />
//         );
//       }
//     }
//   }
//   return result;
// }
