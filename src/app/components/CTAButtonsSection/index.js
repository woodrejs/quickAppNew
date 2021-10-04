import React, { useState, useEffect } from "react";
import { View, Linking, Platform } from "react-native";
//components
import IconButton from "../IconButton";
//utils & styles
import { style } from "./index.style";
import { useSelector, useDispatch } from "react-redux";
import { deleteFavorite, createFavorite } from "../../utils/strapi";
import { setFavorites } from "../../redux/user.slice";

const CTAButtonsSection = ({ data }) => {
  const [inFavorites, setInFavorites] = useState(false);
  const isLogged = useSelector(({ userSlice }) => userSlice.logged);
  const favorites = useSelector(({ userSlice }) => userSlice.favorites);
  const jwt = useSelector(({ userSlice }) => userSlice.jwt);

  const dispatch = useDispatch();

  const { id, pageLink, location, venue, title, mainImage, type } = data;
  const { email, telephone, facebook } = venue;
  2;

  useEffect(() => {
    setInFavorites(isActive(id, favorites));
  }, [id, favorites]);

  const handleWeb = () => Linking.openURL(pageLink);
  const handleMail = () => Linking.openURL(`mailto:${email}`);
  const handleFavorite = async () => {
    if (inFavorites) {
      try {
        await deleteFavorite(data.id, jwt);
        const filteredData = favorites.filter((item) => item.uid !== data.id);
        dispatch(setFavorites(filteredData));
      } catch (error) {
        console.log({ message: error });
      }
    } else {
      try {
        const resp = await createFavorite(
          { id, title, img: mainImage.standard, type },
          jwt
        );
        dispatch(setFavorites([...favorites, resp]));
      } catch (error) {
        console.log({ message: error });
      }
    }
  };
  const handleLocation = () => {
    const { latitude, longitude } = location;

    if (Platform.OS === "ios") {
      Linking.openURL(`http://maps.apple.com/?daddr=<${latitude}>,<${longitude}>`);
    } else {
      Linking.openURL(`http://maps.google.com/maps?daddr=<${latitude}>,<${longitude}>`);
    }
  };
  const handlePhone = () => {
    if (Platform.OS === "ios") {
      Linking.openURL(`telprompt:${telephone}`);
    } else {
      Linking.openURL(`tel:${telephone}`);
    }
  };
  const handleSchedule = () => console.log("handleSchedule");

  return (
    <View style={style.container}>
      {isLogged && (
        <IconButton variant="heart" active={inFavorites} handler={handleFavorite} />
      )}
      {isLogged && (
        <IconButton variant="schedule" active={false} handler={handleSchedule} />
      )}
      {location && (
        <IconButton variant="location" active={false} handler={handleLocation} />
      )}
      {pageLink && <IconButton variant="web" active={false} handler={handleWeb} />}
      {telephone && <IconButton variant="phone" active={false} handler={handlePhone} />}
      {email && <IconButton variant="mail" active={false} handler={handleMail} />}
    </View>
  );
};
export default CTAButtonsSection;

function isActive(id, arr) {
  let result = false;

  arr.forEach((element) => {
    if (element.uid === id) result = true;
  });

  return result;
}
