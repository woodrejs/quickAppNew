import React from "react";
import { Text, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
//components
import LargeEventCard from "../../components/LargeEventCard";
import ScheduleEventCard from "../../components/ScheduleEventCard";
import HorizontalCardList from "../../components/HorizontalCardList";
import ScreenTitleSection from "../../components/ScreenTitleSection";
//styles
import { style } from "./index.style";



const Home = ({ navigation }) => {
 
  const moviesData = useSelector((state) => state.homeSlice.movies.list);
  const playsData = useSelector((state) => state.homeSlice.plays.list);
  const placesData = useSelector((state) => state.homeSlice.places.list);
  const booksData = useSelector((state) => state.homeSlice.books.list);
  const sportData = useSelector((state) => state.homeSlice.sport.list);
  const mainData = useSelector((state) => state.homeSlice.main.list);

  return (
    <ScrollView style={style.container}>
      <ScreenTitleSection
        title="Witaj w Quick Week App"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <LargeEventCard data={mainData} navigation={navigation} />
      <ScheduleEventCard />
      <Text style={style.subTitle}>Odkryj teraz</Text>
      <HorizontalCardList title="Filmy" data={moviesData} navigation={navigation} />
      <HorizontalCardList title="Sztuki" data={playsData} navigation={navigation} />
      <HorizontalCardList title="Książki" data={booksData} navigation={navigation} />
      <HorizontalCardList title="Sport" data={sportData} navigation={navigation} />
      <Text style={style.subTitle}>Wrocław</Text>
      <Text style={style.label}>Miasto Spotkań</Text>
      <Text style={style.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
        Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
        simply dummy text of the printing and typesetting industry.
      </Text>
      <HorizontalCardList
        title="Miejsca"
        data={placesData}
        navigation={navigation}
        type="place"
      />
      <View style={style.footer} />
    </ScrollView>
  );
};
export default Home;
