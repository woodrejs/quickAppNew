export function getTicketingTitle(name) {
  switch (name) {
    case "Free":
      return "bezpłatny";
    case "Ticketed":
      return "płatny";
    case "TicketedAndBooked":
      return "płatny i rezerwacja";
  }
}
