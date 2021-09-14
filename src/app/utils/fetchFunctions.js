import axios from "axios";
import { API_KEY } from "@env";
import { v4 as uuidv4 } from "uuid";

/*TODO:
    +move fomatDate
    +handle errors
*/

const fomatDate = (date) => {
  return date.slice(0, 10);
};

export const getPlacesCardsData = async (pageSize) => {
  if (!pageSize || typeof pageSize !== "number") return;

  const URL = `http://go.wroclaw.pl/api/v1.0/places/?key=${API_KEY}&page-size=${pageSize}`;

  try {
    const resp = await axios.get(URL);

    const data = resp.data.items.map((item) => {
      const img = item.mainImage.standard;
      const id = item.id;
      const title = item.title;

      return { id, img, title };
    });

    return data;
  } catch (error) {
    console.log({ getPlacesCardsData: error });
  }
};
export const getOffersCardsData = async (pageSize, types) => {
  if (!types || typeof types !== "number") return;
  if (!pageSize || typeof pageSize !== "number") return;

  const URL = `http://go.wroclaw.pl/api/v1.0/offers/?key=${API_KEY}&page-size=${pageSize}&type-id=${types}`;

  try {
    const resp = await axios.get(URL);

    const data = resp.data.items.map((item) => {
      const img = item.mainImage.standard;
      const id = item.id;
      const title = item.title;

      return { id, img, title };
    });

    return data;
  } catch (error) {
    console.log({ getOffersCardsData: error });
  }
};
export const getMainCardData = async (pageSize, types) => {
  if (!types || typeof types !== "number") return;
  if (!pageSize || typeof pageSize !== "number") return;

  const URL = `http://go.wroclaw.pl/api/v1.0/offers/?key=${API_KEY}&page-size=${pageSize}&type-id=${types}`;

  try {
    const resp = await axios.get(URL);

    const data = resp.data.items.map((item) => {
      const img = item.mainImage.standard;
      const id = item.id;
      const title = item.title;
      const startDate = item.events[0].startDate;
      const ticketing = item.events[0].ticketing;

      return {
        id,
        img,
        title,
        startDate: fomatDate(startDate),
        ticketing,
      };
    });

    return data;
  } catch (error) {
    console.log({ getMainCardData: error });
  }
};
export const getSinglePlaceData = async (placeId) => {
  if (!placeId || typeof placeId !== "number") return;

  const URL = `http://go.wroclaw.pl/api/v1.0/places/${placeId}/?key=${API_KEY}`;

  try {
    const resp = await axios.get(URL);

    const { id, title, longDescription, pageLink, venue, images, mainImage } = resp.data;
    const { street, zipCode, city } = resp.data.address;
    const {
      email,
      telephone,
      carParkAvailable,
      foodAndDrinkAvailable,
      disabledAccessAvailable,
    } = venue;

    return {
      id,
      title,
      longDescription,
      pageLink,
      images: images.map(({ standard }) => ({ standard, id: uuidv4() })),
      venue: {
        email,
        telephone,
        carParkAvailable,
        foodAndDrinkAvailable,
        disabledAccessAvailable,
      },
      mainImage: { large: mainImage.large },
      address: `ul. ${street} ${zipCode} ${city}`,
    };
  } catch (error) {
    console.log({ getSinglePlaceData: error });
  }
};
export const getSingleOfferData = async (offerId) => {
  if (!offerId || typeof offerId !== "number") return;

  const URL = `http://go.wroclaw.pl/api/v1.0/offers/${offerId}/?key=${API_KEY}`;

  try {
    const resp = await axios.get(URL);

    const { id, title, longDescription, pageLink, events, mainImage } = resp.data;
    const { startDate, ticketing, place } = events[0];
    const { street, zipCode, city } = place.address;
    const { carParkAvailable, foodAndDrinkAvailable, disabledAccessAvailable } =
      place.venue;

    return {
      id,
      title,
      longDescription,
      pageLink,
      startDate: fomatDate(startDate),
      ticketing,
      place: {
        name: resp.data.events[0].place.title,
        longDescription: resp.data.events[0].place.longDescription,
        images: resp.data.events[0].place.images.map(({ standard }) => ({
          standard,
          id: uuidv4(),
        })),
      },
      venue: {
        carParkAvailable,
        foodAndDrinkAvailable,
        disabledAccessAvailable,
      },
      mainImage: { large: mainImage.large },
      address: `ul. ${street} ${zipCode} ${city}`,
    };
  } catch (error) {
    console.log({ getSingleOfferData: error });
  }
};

export const getOffersList = async (types = null, pageSize = 10, page = 1) => {
  const URL = `http://go.wroclaw.pl/api/v1.0/offers/?key=${API_KEY}&type-id=${types}&page-size=${pageSize}&page=${page}`;

  try {
    const resp = await axios.get(URL);
    const data = resp.data.items;

    return data.map(({ id, title, mainImage }) => ({
      id,
      title,
      img: { standard: mainImage?.standard },
    }));
  } catch (error) {
    console.log({ getOffersList: error });
  }
};
export const getPlacesList = async (types = null, pageSize = 10, page = 1) => {
  const URL = `http://go.wroclaw.pl/api/v1.0/places/?key=${API_KEY}&type-id=${types}&page-size=${pageSize}&page=${page}`;

  try {
    const resp = await axios.get(URL);
    const data = resp.data.items;

    return data.map(({ id, title, mainImage }) => ({
      id,
      title,
      img: { standard: mainImage?.standard },
    }));
  } catch (error) {
    console.log({ getPlacesList: error });
  }
};

// --------------------------------
//offer types list
export const offertypeslist = async (pageSize, types) => {
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
