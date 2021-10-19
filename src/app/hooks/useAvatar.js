import { useSelector, useDispatch } from "react-redux";
import { createAvatar } from "../utils/strapi";
import { setAvatar } from "../redux/user.slice";
import useModal from "./useModal";

export default function useAvatar() {
  const [setInfo, setError] = useModal();
  const dispatch = useDispatch();
  const jwt = useSelector(({ userSlice }) => userSlice.jwt);

  return async (id) => {
    setInfo("pending");
    try {
      const data = await createAvatar(id, jwt);
      dispatch(setAvatar(data));
      setInfo("success", "Zdjęcie profilowe zostało ustawione.");
    } catch (error) {
      setError(true, "Błąd podczas przesyłania zdjęcia.");
    }
  };
}
