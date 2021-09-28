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

//type, page, types, pageSize
export const fetchItemList = async (type, page = 1, types = null, pageSize = 10) => {
  const URL = `http://go.wroclaw.pl/api/v1.0/${type}/?key=${API_KEY}&type-id=${types}&page-size=${pageSize}&page=${page}`;

  try {
    const resp = await axios.get(URL);

    const filteredData = resp.data.items.filter((item) => {
      return "mainImage" in item && "id" in item && "title" in item;
    });

    return filteredData.map(({ id, title, mainImage }) => ({
      id,
      title,
      img: { standard: mainImage?.standard },
    }));
  } catch (error) {
    console.log({ fetchItemList: error });
  }
};
export const getMainCardData = async (types, pageSize) => {
  const URL = `http://go.wroclaw.pl/api/v1.0/offers/?key=${API_KEY}&page-size=${pageSize}&type-id=${types}`;

  try {
    const resp = await axios.get(URL);

    const filteredData = resp.data.items.filter((item) => {
      return "mainImage" in item && "id" in item && "title" in item && "events" in item;
    });

    return filteredData.map(({ id, mainImage, title, events }) => ({
      id,
      img: mainImage.standard,
      title,
      startDate: fomatDate(events[0].startDate),
      ticketing: events[0].ticketing,
    }));
  } catch (error) {
    console.log({ getMainCardData: error });
  }
};
export const getSingleOfferData = async (offerId) => {
  const URL = `http://go.wroclaw.pl/api/v1.0/offers/${offerId}/?key=${API_KEY}`;

  try {
    const resp = await axios.get(URL);

    const { id, title, longDescription, pageLink, events, mainImage } = resp.data;
    const { startDate, ticketing, place } = events[0];

    function getVenue(place) {
      if (!place || !place.venue)
        return {
          carParkAvailable: null,
          foodAndDrinkAvailable: null,
          disabledAccessAvailable: null,
        };

      const { carParkAvailable, foodAndDrinkAvailable, disabledAccessAvailable } =
        place.venue;

      return {
        carParkAvailable,
        foodAndDrinkAvailable,
        disabledAccessAvailable,
      };
    }
    function getLocation(events) {
      if (!events || !events[0] || !events[0].location)
        return {
          longitude: null,
          latitude: null,
        };
      const { longitude, lattiude } = resp.data.events[0].location;

      return {
        longitude,
        latitude: lattiude,
      };
    }
    function getPlace(place) {
      if (!place)
        return {
          name: null,
          longDescription: null,
          images: null,
        };

      return {
        name: place?.title,
        longDescription: place?.longDescription,
        images: place?.images.map(({ standard }) => ({
          standard,
          id: uuidv4(),
        })),
      };
    }
    function getAddress(place) {
      if (!place) return null;

      return place?.street && place?.zipCode && place?.city
        ? `ul. ${place?.street} ${place?.zipCode} ${place?.city}`
        : null;
    }

    return {
      id,
      title,
      longDescription,
      pageLink,
      ticketing,
      mainImage: { large: mainImage?.large },
      startDate: fomatDate(startDate),
      location: getLocation(events),
      place: getPlace(place),
      venue: getVenue(place),
      address: getAddress(place),
    };
  } catch (error) {
    console.log({ getSingleOfferData: error });
  }
};
export const getSinglePlaceData = async (placeId) => {
  const URL = `http://go.wroclaw.pl/api/v1.0/places/${placeId}/?key=${API_KEY}`;

  try {
    const resp = await axios.get(URL);

    const { id, title, longDescription, pageLink, venue } = resp.data;
    const { images, mainImage, address, location } = resp.data;

    function getVenue(venue) {
      if (!venue)
        return {
          email: null,
          telephone: null,
          carParkAvailable: null,
          foodAndDrinkAvailable: null,
          disabledAccessAvailable: null,
        };

      return {
        email: venue?.email,
        telephone: venue?.telephone,
        carParkAvailable: venue?.carParkAvailable,
        foodAndDrinkAvailable: venue?.foodAndDrinkAvailable,
        disabledAccessAvailable: venue?.disabledAccessAvailable,
      };
    }
    function getAddress(address) {
      if (!address) return null;
      const { street, zipCode, city } = address;

      return street && zipCode && city ? `ul. ${street} ${zipCode} ${city}` : null;
    }
    function getLocation(location) {
      if (!location)
        return {
          longitude: null,
          latitude: null,
        };

      return {
        longitude: location?.longitude,
        latitude: location?.lattiude,
      };
    }

    return {
      id,
      title,
      longDescription,
      pageLink,
      mainImage: { large: mainImage?.large },
      images: images.map(({ standard }) => ({ standard, id: uuidv4() })),
      venue: getVenue(venue),
      address: getAddress(address),
      location: getLocation(location),
    };
  } catch (error) {
    console.log({ getSinglePlaceData: error });
  }
};
// --------------------------------
//tmp
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
