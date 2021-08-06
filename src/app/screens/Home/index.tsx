import React from "react";
import { Text, ScrollView, View } from "react-native";

import PremiereCard from "../../components/PremiereCard";
import ScheduleCard from "../../components/ScheduleCard";
import HorizontalList from "../../components/HorizontalList";
import TitleSection from "../../components/TitleSection";
import { style } from "./index.style";

const Home = () => {
  return (
    <ScrollView style={style.container}>
      <TitleSection
        title="Witaj w Quick Week App"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <PremiereCard />
      <ScheduleCard />
      <Text style={style.subTitle}>Odkryj teraz</Text>
      <HorizontalList name="Wydarzenia" />
      <HorizontalList name="Miejsca" />
      <Text style={style.subTitle}>Wrocław</Text>
      <Text style={style.label}>Miasto Spotkań</Text>
      <Text style={style.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
        Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
        simply dummy text of the printing and typesetting industry.
      </Text>
      <HorizontalList name="Największe atrakcje" />
      <View style={style.footer} />
    </ScrollView>
  );
};
export default Home;
