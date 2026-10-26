export type DestinationOption = "kashmir" | "ladakh" | "sikkim" | "custom";
export type ActivityOption = "trekking" | "skiing-snowboarding" | "winter-hiking" | "expeditions" | "custom";

export interface ItineraryContextData {
  title: string;
  destination: DestinationOption;
  activity: ActivityOption;
  suggestedDuration: string;
}

export interface ItineraryModalDetail {
  destination?: DestinationOption;
  activity?: ActivityOption;
  title?: string;
  packageSlug?: string;
}

export function openItineraryModal(detail?: ItineraryModalDetail) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("open-itinerary-modal", { detail })
    );
  }
}

export const DESTINATIONS = [
  { value: "kashmir", label: "Kashmir" },
  { value: "ladakh", label: "Ladakh" },
  { value: "sikkim", label: "Sikkim" },
  { value: "custom", label: "Custom Itinerary" },
] as const;

export const ACTIVITIES = [
  { value: "trekking", label: "Trekking" },
  { value: "skiing-snowboarding", label: "Skiing & Snowboarding" },
  { value: "winter-hiking", label: "Winter Hiking" },
  { value: "expeditions", label: "Expeditions" },
  { value: "custom", label: "Custom Itinerary" },
] as const;

export function getItineraryContextByPath(pathname: string): ItineraryContextData {
  const path = (pathname || "").toLowerCase().replace(/\/$/, "");

  // 1. Destinations
  if (path.includes("/destinations/kashmir")) {
    return {
      title: "Plan Your Kashmir Itinerary",
      destination: "kashmir",
      activity: "trekking",
      suggestedDuration: "6-7-days",
    };
  }
  if (path.includes("/destinations/ladakh")) {
    return {
      title: "Plan Your Ladakh Itinerary",
      destination: "ladakh",
      activity: "expeditions",
      suggestedDuration: "8-10-days",
    };
  }
  if (path.includes("/destinations/sikkim")) {
    return {
      title: "Plan Your Sikkim Itinerary",
      destination: "sikkim",
      activity: "trekking",
      suggestedDuration: "7-9-days",
    };
  }

  // 2. Core Activities
  if (path.includes("/activities/trekking") || path.includes("/activities/hiking")) {
    return {
      title: "Plan Your Trekking Itinerary",
      destination: "kashmir",
      activity: "trekking",
      suggestedDuration: "7-9-days",
    };
  }
  if (path.includes("/activities/winter-hiking")) {
    return {
      title: "Plan Your Winter Hiking Itinerary",
      destination: "kashmir",
      activity: "winter-hiking",
      suggestedDuration: "4-5-days",
    };
  }
  if (path.includes("/activities/expeditions")) {
    return {
      title: "Plan Your Expeditions Itinerary",
      destination: "ladakh",
      activity: "expeditions",
      suggestedDuration: "8-10-days",
    };
  }
  if (path.includes("/gulmarg-ski-resort") || path.includes("/ski-guides")) {
    return {
      title: "Plan Your Skiing & Snowboarding Itinerary",
      destination: "kashmir",
      activity: "skiing-snowboarding",
      suggestedDuration: "5-6-days",
    };
  }

  // 3. Deals & Packages
  if (path.includes("/packages")) {
    if (path.includes("ski")) {
      return {
        title: "Book Gulmarg Ski Package",
        destination: "kashmir",
        activity: "skiing-snowboarding",
        suggestedDuration: "7-10-days",
      };
    }
    if (
      path.includes("ladakh") ||
      path.includes("zanskar") ||
      path.includes("chadar") ||
      path.includes("rumtse") ||
      path.includes("markha")
    ) {
      return {
        title: "Book Ladakh Summer Package",
        destination: "ladakh",
        activity: "expeditions",
        suggestedDuration: "8-10-days",
      };
    }
    if (
      path.includes("sikkim") ||
      path.includes("goecha") ||
      path.includes("dzongri")
    ) {
      return {
        title: "Book Sikkim Trekking Package",
        destination: "sikkim",
        activity: "trekking",
        suggestedDuration: "7-9-days",
      };
    }
    return {
      title: "Plan Your Himalayan Package",
      destination: "kashmir",
      activity: "trekking",
      suggestedDuration: "7-9-days",
    };
  }

  // Default Custom Itinerary
  return {
    title: "Plan Your Custom Itinerary",
    destination: "custom",
    activity: "custom",
    suggestedDuration: "6-7-days",
  };
}
