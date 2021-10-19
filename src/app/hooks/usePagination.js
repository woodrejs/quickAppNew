import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function usePagination(variant) {
  const [paginationCounter, setPaginationCounter] = useState(0);
  const filters = useSelector(({ listSlice }) => listSlice[variant].filters);

  useEffect(() => {
    setPaginationCounter(0);
  }, [filters, variant]);

  return [paginationCounter, setPaginationCounter];
}
