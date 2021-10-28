import axios from "axios";
import { API_KEY } from "@env";
import { v4 as uuidv4 } from "uuid";

/*TODO:
    +move fomatDate
    +handle errors
*/

export const fetchItemList = async (
  type,
  page = 0,
  types = [],
  pageSize = 10,
  q = ""
) => {
  const URL = `http://go.wroclaw.pl/api/v1.0/${type}/?key=${API_KEY}&type-id=${types.toString()}&page-size=${pageSize}&page=${page}&q=${q}`;

  const resp = await axios.get(URL);

  const filteredData = resp.data.items.filter((item) => {
    return "mainImage" in item && "id" in item && "title" in item;
  });

  if (type === "places") {
    return filteredData.map(({ id, title, mainImage }) => ({
      id: `${id}`,
      title,
      img: mainImage?.standard,
      type,
    }));
  } else {
    return filteredData.map(({ id, title, mainImage, events }) => ({
      id: `${id}`,
      title,
      img: mainImage?.standard,
      type,
      ticketing: events[0]?.ticketing,
    }));
  }
};
export const getMainCardData = async (types, pageSize) => {
  const URL = `http://go.wroclaw.pl/api/v1.0/offers/?key=${API_KEY}&page-size=${pageSize}&type-id=${types}`;

  const resp = await axios.get(URL);

  const filteredData = resp.data.items.filter((item) => {
    return "mainImage" in item && "id" in item && "title" in item && "events" in item;
  });
  return filteredData.map(({ id, mainImage, title, events }) => ({
    id: `${id}`,
    img: mainImage.standard,
    title,
    startDate: fomatDate(events[0].startDate),
    ticketing: events[0].ticketing,
    address: `${events[0].placeName} ul. ${events[0].place.address.street}`,
  }));
};
export const getSingleOfferData = async (offerId) => {
  const URL = `http://go.wroclaw.pl/api/v1.0/offers/${offerId}/?key=${API_KEY}`;

  const resp = await axios.get(URL);

  const { id, title, longDescription, pageLink, events, mainImage } = resp.data;
  const { startDate, ticketing, place } = events[0];

  function getVenue(place) {
    if (!place || !place.venue)
      return {
        carParkAvailable: null,
        foodAndDrinkAvailable: null,
        disabledAccessAvailable: null,
        telephone: null,
        email: null,
      };

    const {
      carParkAvailable,
      foodAndDrinkAvailable,
      disabledAccessAvailable,
      telephone,
      email,
    } = place.venue;

    return {
      carParkAvailable,
      foodAndDrinkAvailable,
      disabledAccessAvailable,
      telephone,
      email,
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

    return place?.address.street && place?.address.zipCode && place?.address.city
      ? `ul. ${place?.address.street} ${place?.address.zipCode} ${place?.address.city}`
      : null;
  }

  return {
    id: `${id}`,
    title,
    longDescription,
    pageLink,
    ticketing,
    type: "offers",
    mainImage: { large: mainImage?.large, standard: mainImage?.standard },
    startDate: fomatDate(startDate),
    location: getLocation(events),
    place: getPlace(place),
    venue: getVenue(place),
    address: getAddress(place),
  };
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
      id: `${id}`,
      title,
      longDescription,
      pageLink,
      type: "places",
      mainImage: { large: mainImage?.large, standard: mainImage?.standard },
      images: images.map(({ standard }) => ({ standard, id: uuidv4() })),
      venue: getVenue(venue),
      address: getAddress(address),
      location: getLocation(location),
    };
  } catch (error) {
    console.log({ getSinglePlaceData: error });
  }
};

function fomatDate(date) {
  return date.slice(0, 10);
}
