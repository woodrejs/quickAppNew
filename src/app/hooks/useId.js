import { useDispatch } from "react-redux";
import { setId } from "../redux/single.slice";
import { useNavigation } from "@react-navigation/native";
import { screensNames } from "../utils/screensNames";

export default function useId() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (id, variant) => {
    dispatch(setId([variant, id]));

    variant === "places"
      ? navigation.navigate(screensNames.placeSingle)
      : navigation.navigate(screensNames.eventSingle);
  };
}
