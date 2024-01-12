import * as Location from "expo-location";

export type RootStackParamList = {
    Splash: undefined;
    Accueil: undefined;
    Map: { location: Location.LocationObject };
  };
  