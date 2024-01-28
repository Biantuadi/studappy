import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/home/HomeScreen';
import MapScreen from './screens/map/MapScreen';
import BonsPlansScreen from './screens/bons-plans/BonsPlansScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Accueil" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="BonsPlans" component={BonsPlansScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
