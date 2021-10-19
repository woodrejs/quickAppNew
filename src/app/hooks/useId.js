import { useDispatch } from "react-redux";
import { setId } from "../redux/single.slice";
import { screensNames } from "../utils/screensNames";

export default function useId() {
  const dispatch = useDispatch();

  return (id, variant, navigation) => {
    dispatch(setId([variant, id]));

    variant === "places"
      ? navigation.navigate(screensNames.placeSingle)
      : navigation.navigate(screensNames.eventSingle);
  };
}
