import React, { useState, useEffect } from "react";
import { StyleSheet, View, Linking, Platform } from "react-native";
import { useSelector } from "react-redux";
//components
import ButtonIcon from "../ButtonIcon";
//utils
import useFavorites from "../../../hooks/useFavorites";

export default function IconsCockpit({ data }) {
  const [inFavorites, setInFavorites] = useState(false);
  const { id, pageLink, location, venue, title, mainImage, type } = data;
  const { latitude, longitude } = location;
  const { email, telephone } = venue;
  const { logged, favorites } = useSelector(({ userSlice }) => userSlice);
  const [__, createFavorite, deleteFavorite] = useFavorites();

  const handleWeb = () => Linking.openURL(pageLink);
  const handleMail = () => Linking.openURL(`mailto:${email}`);
  const handleFavorite = async () => {
    if (inFavorites) {
      deleteFavorite(id);
    } else {
      createFavorite({ id, title, img: mainImage.standard, type });
    }
  };
  const handlePlace = () => {
    Platform.OS === "ios"
      ? Linking.openURL(`http://maps.apple.com/?daddr=<${latitude}>,<${longitude}>`)
      : Linking.openURL(`http://maps.google.com/maps?daddr=<${latitude}>,<${longitude}>`);
  };
  const handleTelephone = () => {
    Platform.OS === "ios"
      ? Linking.openURL(`telprompt:${telephone}`)
      : Linking.openURL(`tel:${telephone}`);
  };
  const handleSchedule = () => console.log("handleSchedule");

  useEffect(() => {
    setInFavorites(isActive(id, favorites));
  }, [id, favorites]);

  return (
    <View style={style.container}>
      {pageLink && <ButtonIcon name="web" handler={handleWeb} styles={style.box} />}
      {email && <ButtonIcon name="mail" handler={handleMail} styles={style.box} />}
      {telephone && (
        <ButtonIcon name="telephone" handler={handleTelephone} styles={style.box} />
      )}
      {latitude && longitude && (
        <ButtonIcon name="place" handler={handlePlace} styles={style.box} />
      )}
      {logged && (
        <>
          <ButtonIcon name="plus" handler={handleSchedule} styles={style.box} />
          <ButtonIcon
            name="heart"
            handler={handleFavorite}
            styles={style.box}
            active={inFavorites}
          />
        </>
      )}
    </View>
  );
}

function isActive(id, arr) {
  let result = false;

  arr.forEach((element) => {
    if (element.id === id) result = true;
  });

  return result;
}

const style = StyleSheet.create({
  container: { display: "flex", position: "absolute", bottom: -20, right: 20 },
  box: { marginBottom: 10 },
});
