import React, { useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
//components
import LargeImageCard from "../../components/LargeImageCard";
import HorizontalImagesGallery from "../../components/HorizontalImagesGallery";
import LocalizationMapSection from "../../components/LocalizationMapSection";
import CTAButtonsSection from "../../components/CTAButtonsSection";
import InfoIconsSection from "../../components/InfoIconsSection";
import LoadingSection from "../../components/LoadingSection";
import RenderHtmlSection from "../../components/RenderHtmlSection";
//utils & styles
import { style } from "./index.style";
import { getSingleOfferData } from "../../utils/fetchFunctions";
import { setData, setIsLoaded } from "../../redux/single.slice";

const Single = () => {
  const variant = "offers";
  const { id, data, loaded } = useSelector(({ singleSlice }) => singleSlice[variant]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function init() {
      const data = await getSingleOfferData(id);
      dispatch(setData([variant, data]));
    }
    init();

    return () => dispatch(setIsLoaded([variant, false]));
  }, []);

  if (loaded) {
    const { mainImage, title, ticketing, startDate, venue } = data;
    const { longDescription, place, address, location } = data;
    const { images, name, longDescription: placeLongDescription } = place;
    const { large, standard } = mainImage;

    return (
      <>
        <ScrollView style={style.container}>
          <LargeImageCard img={large} title={title} price={ticketing} date={startDate} />
          <InfoIconsSection venue={venue} />
          <RenderHtmlSection source={longDescription} style={style.description} />
          <Text style={style.title} children={name} />
          <Text style={style.subTitle} children={address} />
          <HorizontalImagesGallery images={images} />
          <RenderHtmlSection source={placeLongDescription} style={style.description} />
          <LocalizationMapSection location={location} />
        </ScrollView>

        <CTAButtonsSection data={data} />
      </>
    );
  } else return <LoadingSection />;
};
export default Single;
