export function setTicketed(type) {
  switch (type) {
    case "TicketedAndBooked":
      return "rezerwacja";
    case "Ticketed":
      return "płatne";
    default:
      return "bezpłatne";
  }
}
