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
import { setData, setIsLoaded } from "../../redux/singleOffer.slice";

const EventSingle = () => {
  const dispatch = useDispatch();

  const offerId = useSelector((state) => state.singleOfferSlice.id);
  const offerData = useSelector((state) => state.singleOfferSlice.data);
  const offerDataLoaded = useSelector((state) => state.singleOfferSlice.loaded);

  useEffect(() => {
    async function init() {
      const data = await getSingleOfferData(offerId);
      dispatch(setData(data));
    }
    init();

    return () => dispatch(setIsLoaded(false));
  }, []);

  console.log(offerData);

  return (
    <>
      {offerDataLoaded ? (
        <>
          <ScrollView style={style.container}>
            <LargeImageCard
              img={offerData?.mainImage.large}
              title={offerData?.title}
              price={offerData?.ticketing}
              date={offerData?.startDate}
            />
            <InfoIconsSection venue={offerData?.venue} />

            <RenderHtmlSection
              source={offerData?.longDescription}
              style={style.description}
            />

            <Text style={style.title}>{offerData?.place.name}</Text>
            <Text style={style.subTitle}>{offerData?.address}</Text>
            <HorizontalImagesGallery images={offerData?.place.images} />

            <RenderHtmlSection
              source={offerData?.place.longDescription}
              style={style.description}
            />

            <LocalizationMapSection />
          </ScrollView>
          <CTAButtonsSection title="dodaj do planu" />
        </>
      ) : (
        <LoadingSection />
      )}
    </>
  );
};
export default EventSingle;
