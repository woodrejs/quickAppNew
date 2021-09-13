import axios from "axios";
import { API_KEY } from "@env";

//return id, img
export const getPlacesCardsData = async (pageSize) => {
  const URL = `http://go.wroclaw.pl/api/v1.0/places/?key=${API_KEY}&page-size=${pageSize}`;

  try {
    const resp = await axios.get(URL);

    const data = resp.data.items.map((item) => {
      const img = item.mainImage.standard;
      const id = item.id;
      const title = item.title;

      if (img && id && title) return { id, img, title };
    });

    return data;
  } catch (error) {
    console.log({ getPlacesCardsData: error });
  }
};
export const getOffersCardsData = async (pageSize, types) => {
  const URL = `http://go.wroclaw.pl/api/v1.0/offers/?key=${API_KEY}&page-size=${pageSize}&type-id=${types}`;

  try {
    const resp = await axios.get(URL);

    const data = resp.data.items.map((item) => {
      const img = item.mainImage.standard;
      const id = item.id;
      const title = item.title;

      if (img && id && title) return { id, img, title };
    });

    return data;
  } catch (error) {
    console.log({ getOffersCardsData: error });
  }
};
export const getMainCardData = async (pageSize, types) => {
  const URL = `http://go.wroclaw.pl/api/v1.0/offers/?key=${API_KEY}&page-size=${pageSize}&type-id=${types}`;

  try {
    const resp = await axios.get(URL);

    const data = resp.data.items.map((item) => {
      const img = item.mainImage.standard;
      const id = item.id;
      const title = item.title;
      const startDate = item.events[0].startDate;
      const ticketing = item.events[0].ticketing;

      if (img && id && title && startDate && ticketing)
        return {
          id,
          img,
          title,
          startDate,
          ticketing,
        };
    });

    return data;
  } catch (error) {
    console.log({ getMainCardData: error });
  }
};
//tmp
export const test = async (pageSize, types) => {
  const URL = `http://go.wroclaw.pl/api/v1.0/types/for-offers/?key=${API_KEY}`;

  const resp = await axios.get(URL);
  const tmpArr = [];
  resp.data.items.map((item) => {
    console.log({ alias: item.alias, id: item.id });
  });
  // const data = resp.data.items.map(({ alias, id }) => {
  //   tmpArr.push({
  //     alias,
  //     id,
  //   });
  // });
  // console.log(data);
};
