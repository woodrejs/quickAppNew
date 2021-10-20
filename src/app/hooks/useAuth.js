import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin, userRegister } from "../utils/strapi";
import { setLoggedIn, setLoggedOut } from "../redux/user.slice";
import { stacksNames } from "../utils/stacksNames";
import useModal from "./useModal";

//!!!important!!! setLoggedIn & setLoggedOut in one function
export default function useAuth() {
  const [user, setUser] = useState(null);
  const [setInfo] = useModal();
  const dispatch = useDispatch();

  return [
    user,
    //login
    async (email, password, navigation) => {
      setInfo("pending");

      try {
        const resp = await userLogin(email, password);
        setUser(resp);

        dispatch(setLoggedIn(resp.jwt));
        setInfo("success", `${resp.user.username} witaj w quick week app.`);
        navigation.navigate(stacksNames.home);
      } catch (error) {
        setInfo("failed", `Błąd podczas logowania. Spróbuj ponownie.`);
      }
    },
    //logout
    (navigation) => {
      dispatch(setLoggedOut());
      navigation.navigate(stacksNames.home);
      setInfo("success", "Zostałeś poprawnie wylogowany.");
    },
    //register
    async (username, email, password, navigation) => {
      setInfo("pending");
      try {
        const { jwt, user } = await userRegister(username, email, password);

        dispatch(setLoggedIn(jwt));
        setInfo("success", `Witaj ${user.username}, Twoje konto zostało utworzone.`);
        navigation.navigate(stacksNames.home);
      } catch (error) {
        setInfo("failed", `Błąd podczas rejestracji. Spróbuj ponownie.`);
      }
    },
  ];
}
