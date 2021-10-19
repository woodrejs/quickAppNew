import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../redux/list.slice";

export default function useFilters(variant, list) {
  const [filtersList, setFiltersList] = useState(list);
  const dispatch = useDispatch();

  return [
    //set filters
    () => dispatch(setFilters([variant, filtersList])),
    //update filters
    (id) => {
      if (!filtersList.length) return setFiltersList([id]);

      const filtersObj = filtersList.reduce((a, v) => ({ ...a, [v]: true }), {});

      if (filtersObj[id]) {
        delete filtersObj[id];
      } else {
        filtersObj[id] = id;
      }

      setFiltersList(Object.keys(filtersObj));
    },
  ];
}
