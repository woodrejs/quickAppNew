import React, { useState, useEffect } from "react";
import { View, Linking, Platform } from "react-native";
//components
import IconButton from "../IconButton";
//utils & styles
import { style } from "./index.style";
import { useSelector, useDispatch } from "react-redux";
import { deleteFavorite, createFavorite } from "../../utils/strapi";
import { setFavorites } from "../../redux/user.slice";
import { setInfo } from "../../redux/app.slice";

const CTAButtonsSection = ({ data }) => {
  const [inFavorites, setInFavorites] = useState(false);
  const isLogged = useSelector(({ userSlice }) => userSlice.logged);
  const favorites = useSelector(({ userSlice }) => userSlice.favorites);
  const jwt = useSelector(({ userSlice }) => userSlice.jwt);

  const dispatch = useDispatch();

  const { id, pageLink, location, venue, title, mainImage, type } = data;
  const { latitude, longitude } = location;
  const { email, telephone } = venue;
  2;

  useEffect(() => {
    setInFavorites(isActive(id, favorites));
  }, [id, favorites]);

  const handleWeb = () => Linking.openURL(pageLink);
  const handleMail = () => Linking.openURL(`mailto:${email}`);
  const handleFavorite = async () => {
    dispatch(setInfo(["pending"]));
    if (inFavorites) {
      try {
        await deleteFavorite(data.id, jwt);
        const filteredData = favorites.filter((item) => item.uid !== data.id);
        dispatch(setInfo(["success", `"${title}" został usunięty z ulubionych.`]));
        dispatch(setFavorites(filteredData));
      } catch (error) {
        dispatch(
          setInfo(["failed", `Błąd podczas usuwania "${title}". Spróbuj ponownie.`])
        );
      }
    } else {
      try {
        const resp = await createFavorite(
          { id, title, img: mainImage.standard, type },
          jwt
        );
        dispatch(setInfo(["success", `"${title}" został dodany do ulubionych.`]));
        dispatch(setFavorites([...favorites, resp]));
      } catch (error) {
        dispatch(
          setInfo(["failed", `Błąd podczas dodawania "${title}". Spróbuj ponownie.`])
        );
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
      {latitude && longitude && (
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
