import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';

const SplashScreen = ({ navigation }: any) => {
  const [isReady, setIsReady] = useState(false);
  const [location, setLocation] = useState(null);
  const [permissionMessage, setPermissionMessage] = useState("Chargement en cours...");

  useEffect(() => {
    const initializeApp = async () => {
      try {
        let { status } = await Location.getForegroundPermissionsAsync();

        if (status !== 'granted') {
          // Si la permission n'est pas déjà accordée, demandez-la.
          let { status: newStatus } = await Location.requestForegroundPermissionsAsync();
          
          if (newStatus !== 'granted') {
            console.error('Permission to access location was denied');
            setPermissionMessage("Veuillez autoriser l'accès à la localisation pour utiliser l'application.");
            return;
          }
        }

        // Obtenez la localisation une fois que la permission est accordée.
        let currentLocation: any = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);

        // Autres tâches de chargement
        // ...
        
      } catch (error) {
        console.error('Erreur lors de l\'initialisation de l\'app :', error);
      } finally {
        setIsReady(true);
      }
    };

    initializeApp();
  }, []);

  useEffect(() => {
    if (isReady && location) {
      navigation.replace('Accueil', { location });
    }
  }, [isReady, location, navigation]);

  return (
    <View style={styles.container}>
      {isReady ? (
        <Text>{permissionMessage}</Text>
      ) : (
        <>
          <Text>{permissionMessage}</Text>
          <ActivityIndicator size="large" />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
