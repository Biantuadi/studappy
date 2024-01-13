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
        let currentLocation: any = await getLocationWithTimeout(3000);
        setLocation(currentLocation);

        // Autres tâches de chargement
        // ...
        
      } catch (error) {
        console.error('Erreur lors de l\'initialisation de l\'app :', error);
      } finally {
        setIsReady(true);
      }
    };

    const getLocationWithTimeout = async (timeout: number) => {
      return new Promise<any>(async (resolve) => {
        let timerId = setTimeout(() => {
          console.log("Timeout - Impossible d'obtenir la localisation après 3 secondes.");
          clearTimeout(timerId);
          resolve(null); // Résoudre avec une localisation nulle en cas de dépassement du délai.
        }, timeout);

        try {
          // Obtenez la localisation dans le délai spécifié.
          let currentLocation: any = await Location.getCurrentPositionAsync({});
          clearTimeout(timerId); // Effacez le délai si la localisation est obtenue avec succès.
          resolve(currentLocation);
        } catch (error) {
          console.error("Erreur lors de l'obtention de la localisation :", error);
          clearTimeout(timerId); // Effacez le délai en cas d'erreur.
          resolve(null);
        }
      });
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
