import useModal from "./useModal";
import { createSchedule, deleteSchelude } from "../utils/strapi";
import { useSelector, useDispatch } from "react-redux";
import { setSchedules } from "../redux/user.slice";

export default function useSchedules() {
  const { setInfo, setStage } = useModal();
  const { jwt, schedules } = useSelector(({ userSlice }) => userSlice);
  const dispatch = useDispatch();

  return [
    schedules,
    // create
    async (obj) => {
      setStage("pending");
      try {
        const { data } = await createSchedule(obj, jwt);
        dispatch(setSchedules([...schedules, data]));

        setInfo(true, "Poprawnie dodano termin.");
      } catch (error) {
        setInfo(false, "Błąd podczas dodawania terminu.");
      }
    },
    // delete
    async (id, date) => {
      setStage("pending");
      try {
        const { data } = await deleteSchelude(id, date, jwt);
        const updatedList = schedules.filter((item) => item._id !== data._id); //!!!
        dispatch(setSchedules(updatedList));

        setInfo(true, "Poprawnie usunięto termin.");
      } catch (error) {
        setInfo(false, "Błąd podczas usuwania terminu.");
      }
    },
  ];
}
