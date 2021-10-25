import React, { useMemo, useCallback } from "react";
import {
  ImageBackground,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Text,
} from "react-native";
//components
import AddToFavoriteButton from "../../../../components/AddToFavoriteButton";
//utils
import useId from "../../../../hooks/useId";
import { COLORS } from "../../../../style/colors";
import { STYLES } from "../../../../style/styles";

export default React.memo(function VerticalListCard({ data, inFavorite = false }) {
  //hooks
  const setId = useId();

  //const
  const { id, type, title, img } = useMemo(() => data);

  //handlers
  const handlePress = useCallback(() => setId(id, type), [id, type]);

  return (
    <ImageBackground
      style={style.container}
      imageStyle={style.image}
      source={{ uri: img }}
    >
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={style.titleContainer}>
          <View style={style.titleBox}>
            <Text numberOfLines={1} style={style.title} children={title} />
          </View>
        </View>
      </TouchableWithoutFeedback>

      <AddToFavoriteButton data={data} active={inFavorite} />
    </ImageBackground>
  );
});

const style = StyleSheet.create({
  container: {
    height: 220,
    width: "100%",
    backgroundColor: COLORS.dark,
    borderRadius: 20,
    marginBottom: 10,
    position: "relative",
    ...STYLES.shadow,
  },
  titleContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  image: { opacity: 0.7, borderRadius: 20 },
  titleBox: {
    backgroundColor: COLORS.lightnest,
    height: "30%",
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopEndRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 18,
    lineHeight: 18,
    ...STYLES.fonts.bold,
    color: COLORS.black,
  },
});
