import React from "react";
import { View } from "react-native";
//components
import CTASectionIconButton from "./CTASectionIconButton";
import CTASectionButton from "./CTASectionButton";
//utils & styles
import { style } from "./index.style";
import { useSelector, useDispatch } from "react-redux";

type Props = {
  title: string;
};

const CTAButtonsSection: React.FC<Props> = ({ title, data }) => {
  const favorites = useSelector(({ userSlice }) => userSlice.favorites);
  const isLogged = useSelector(({ userSlice }) => userSlice.logged);

  return (
    <View style={style.container}>
      {isLogged && (
        <CTASectionIconButton
          variant="heart"
          data={data}
          selected={isInArray(data.id, favorites)}
        />
      )}

      <CTASectionIconButton variant="phone" />
      <CTASectionButton title={title} />
    </View>
  );
};
export default CTAButtonsSection;

function isInArray(id, arr) {
  let result = false;

  arr.forEach((element) => {
    if (element.uid === id) result = true;
  });

  return result;
}
