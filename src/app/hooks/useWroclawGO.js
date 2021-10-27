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
  const { setInfo, setStage } = useModal();

  return {
    fetchList: async (pagination) => {
      setStage("pending");

      try {
        const data = await fetchItemList(variant, pagination, filters);

        if (pagination) {
          dispatch(setListData([variant, [...list, ...data]]));
        } else {
          dispatch(setListData([variant, data]));
        }
        setStage("waiting");
      } catch (error) {
        setStage("waiting");
        setInfo(false, "Błąd podczas ładowania aplikacji. Spróbuj ponownie.");
      }
    },
    fetchSingle: async (id) => {
      setStage("pending");

      try {
        const resp =
          variant === "offers"
            ? await getSingleOfferData(id)
            : await getSinglePlaceData(id);

        dispatch(setSingleData([variant, resp]));
        setStage("waiting");
      } catch (error) {
        setStage("waiting");
        setInfo(false, "Błąd podczas pobierania danych.");
      }
    },
  };
}
