import { useSelector, useDispatch } from "react-redux";
import {
  fetchItemList,
  getSingleOfferData,
  getSinglePlaceData,
} from "../utils/fetchFunctions";
import { setData as setListData, setStage } from "../redux/list.slice";
import { setData as setSingleData, setIsLoaded } from "../redux/single.slice";
import useModal from "./useModal";

//!!! important!!! getSingleOfferData & getSinglePlaceData in one function
export default function useWroclawGO(variant) {
  const dispatch = useDispatch();
  const { filters, list } = useSelector(({ listSlice }) => listSlice[variant]);
  const [_, setError] = useModal();

  return [
    //fetch list
    async (pagination) => {
      dispatch(setStage([variant, "pending"]));

      try {
        const data = await fetchItemList(variant, pagination, filters);
        if (pagination) {
          dispatch(setListData([variant, [...list, ...data]]));
        } else {
          dispatch(setListData([variant, data]));
        }
      } catch (error) {
        setError(true, "Błąd podczas ładowania aplikacji. Spróbuj ponownie.");
      }
    },
    //fetch single
    async (id) => {
      dispatch(setIsLoaded([variant, false]));

      try {
        const resp =
          variant === "offers"
            ? await getSingleOfferData(id)
            : await getSinglePlaceData(id);

        dispatch(setSingleData([variant, resp]));
      } catch (error) {
        setError(true, "Błąd podczas pobierania danych.");
      }
    },
  ];
}
