import { useDispatch } from "react-redux";
import { setError, closeError, setInfo, closeInfo, setStage } from "../redux/app.slice";

export default function useModal() {
  const dispatch = useDispatch();

  return {
    setError: (message) => dispatch(setError(message)),
    closeError: () => dispatch(closeError()),
    setInfo: (success, message) => dispatch(setInfo([success, message])),
    closeInfo: () => dispatch(closeInfo()),
    setStage: (stage) => dispatch(setStage(stage)),
  };
}
