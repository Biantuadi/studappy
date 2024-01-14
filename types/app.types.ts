import * as Location from "expo-location";

export type RootStackParamList = {
    Splash: undefined;
    Accueil: undefined;
    Map: { location: Location.LocationObject };
    Login: undefined;
    Register: undefined;
    Profile: undefined;
    Settings: undefined;
    BonsPlans: undefined;
  };
  