import React, { useEffect } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  View,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
//components
import IconsCockpit from "./IconsCockpit";
import ButtonIcon from "./ButtonIcon";
import Facilities from "./Facilities";
import LocalizationMapSection from "../../components/LocalizationMapSection";
import LoadingSection from "../../components/LoadingSection";
import RenderHtmlSection from "../../components/RenderHtmlSection";
import Icon from "../../components/Icon";
//utils & styles
import useWroclawGO from "../../hooks/useWroclawGO";
import { COLORS } from "../../style/colors";
import { STYLES } from "../../style/styles";
import { getTicketingTitle } from "../../utils/functions";
import { setIsLoaded } from "../../redux/single.slice";

export default function Single({ variant }) {
  const { id, loaded, data } = useSelector(({ singleSlice }) => singleSlice[variant]);
  const [_, fetchSingleData] = useWroclawGO(variant);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => await fetchSingleData(id))();
    return () => dispatch(setIsLoaded([variant, false]));
  }, []);

  if (!loaded) return <LoadingSection />;

  const { mainImage, title, ticketing, venue } = data;
  const { longDescription, address, location } = data;
  const { latitude, longitude } = location;

  return (
    <ScrollView style={style.container}>
      {/* Image section*/}
      <ImageBackground
        style={style.imageBox}
        source={{ uri: mainImage?.large }}
        imageStyle={style.image}
        children={<IconsCockpit data={data} />}
      />

      {/* Title*/}
      <View style={style.titleBox}>
        {title && <Text style={style.title} children={title} />}

        {/* Info section*/}
        {address && <InfoItem name="place" title={address} />}
        {ticketing && <InfoItem name="ticket" title={getTicketingTitle(ticketing)} />}

        {/* Description*/}
        {longDescription && (
          <RenderHtmlSection text={longDescription} style={style.description} />
        )}

        {/* Button CTA */}
        <CTAButton />
      </View>

      {/* Map google */}
      {latitude && longitude && (
        <LocalizationMapSection latitude={latitude} longitude={longitude} />
      )}

      {/* Facilities section*/}
      <View style={style.facilitiesContainer}>
        <Text style={style.title}>Udogodnienia</Text>
        <Text style={style.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
        </Text>
        {/* Facilities  */}
        <Facilities venue={venue} />
      </View>
    </ScrollView>
  );
}
function InfoItem({ name, title }) {
  return (
    <View style={style.infoBox}>
      <Icon name={name} color={COLORS.grey} />
      <Text style={style.info} children={title} />
    </View>
  );
}
function CTAButton() {
  return (
    <TouchableOpacity style={style.buttonContainer}>
      <ButtonIcon name="rightArrow" size="md" active handler={() => {}} />
      <Text style={style.buttonTitle}>Czytaj dalej</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light,
    width: "100%",
    minHeight: Dimensions.get("window").height,
    marginTop: -50,
  },
  imageBox: {
    backgroundColor: COLORS.dark,
    height: 500,
    width: "100%",
    position: "relative",
    marginBottom: 30,
    ...STYLES.shadow,
  },
  image: { opacity: 0.7 },
  titleBox: { paddingHorizontal: 15 },
  title: {
    ...STYLES.fonts.bold,
    fontSize: 24,
    paddingBottom: 20,
    textTransform: "capitalize",
  },
  infoBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  info: { ...STYLES.fonts.regular, fontSize: 12, opacity: 0.6, marginLeft: 15 },
  description: {
    ...STYLES.fonts.regular,
    fontSize: 11,
    opacity: 0.8,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 150,
    paddingVertical: 40,
  },
  buttonBox: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.extra,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 80,
    ...STYLES.shadow,
  },
  buttonTitle: {
    ...STYLES.fonts.bold,
    fontSize: 11,
    marginLeft: 10,
    opacity: 0.8,
  },
  facilitiesContainer: {
    paddingHorizontal: 15,
    paddingVertical: 40,
    backgroundColor: COLORS.extra,
  },
});
