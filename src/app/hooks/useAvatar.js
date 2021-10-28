import { useSelector, useDispatch } from "react-redux";
import { createAvatar } from "../utils/strapi";
import { setAvatar } from "../redux/user.slice";
import useModal from "./useModal";

//!!!important!!! lower down img size
export default function useAvatar() {
  const { setInfo, setStage } = useModal();
  const dispatch = useDispatch();
  const jwt = useSelector(({ userSlice }) => userSlice.jwt);

  return async (id) => {
    setStage("pending");
    try {
      const { data } = await createAvatar(id, jwt);
      dispatch(setAvatar(data));
      setInfo(true, "Zdjęcie profilowe zostało ustawione.");
    } catch (error) {
      setInfo(false, "Błąd podczas przesyłania zdjęcia.");
    }
  };
}
