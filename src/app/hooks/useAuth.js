import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { userLogin, userRegister } from "../utils/strapi";
import { setLoggedIn, setLoggedOut } from "../redux/user.slice";
import { stacksNames } from "../utils/stacksNames";
import useModal from "./useModal";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const { setInfo, setStage } = useModal();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return [
    user,
    //login
    async (email, password) => {
      setStage("pending");

      try {
        const { data } = await userLogin(email, password);
        setUser(data);

        dispatch(setLoggedIn(data.jwt));
        setInfo(true, `${data.user.username} witaj w quick week app.`);
        navigation.navigate(stacksNames.home);
      } catch (error) {
        setInfo(false, `Błąd podczas logowania. Spróbuj ponownie.`);
      }
    },
    //logout
    () => {
      dispatch(setLoggedOut());
      navigation.navigate(stacksNames.home);
      setInfo(true, "Zostałeś poprawnie wylogowany.");
    },
    //register
    async (username, email, password) => {
      setStage("pending");
      try {
        const { data } = await userRegister(username, email, password);
        const { jwt, user } = data;

        dispatch(setLoggedIn(jwt));
        setInfo(true, `Witaj ${user.username}, Twoje konto zostało utworzone.`);
        navigation.navigate(stacksNames.home);
      } catch (error) {
        setInfo(false, `Błąd podczas rejestracji. Spróbuj ponownie.`);
      }
    },
  ];
}
