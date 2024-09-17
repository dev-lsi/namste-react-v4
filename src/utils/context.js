import { createContext } from "react";

export const locationContext = createContext({
  city: "N/A",
  coords: null,
  isValid: null,
});

export const restaurantsContext = createContext(null);
