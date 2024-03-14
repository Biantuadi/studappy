import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/home/HomeScreen";
import MapScreen from "./screens/map/MapScreen";
import BonsPlansScreen from "./screens/bons-plans/BonsPlansScreen";
import ProfileScreen from "./screens/profile/Profile";
import { TransitionPresets } from "@react-navigation/stack";
import EshopScreen from "./screens/e-shop/Eshop";

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1000 millisecondes = 1 seconde

    return () => clearTimeout(timer);
  }, []);

  // const optionTransitionNavitation:NativeStackNavigationOptions = {
  //   animation: 'slide_from_right',
  // };


  // const profileScreenOptions:any = {
  //   ...TransitionPresets.ModalFadeTransition,
  //   transitionSpec: {
  //     open: { animation: 'timing', config: { duration: 500 } }, // Durée de la transition d'ouverture
  //     close: { animation: 'timing', config: { duration: 500 } }, // Durée de la transition de fermeture
  //   },
  // };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        {isLoading ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : (
          <>
            <Stack.Screen name="Accueil" component={HomeScreen} />
            <Stack.Screen name="Map" component={MapScreen} />
            <Stack.Screen name="BonsPlans" component={BonsPlansScreen} />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              // options={{}}
            />
            <Stack.Screen name="Eshop" component={EshopScreen}  options={{}} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
