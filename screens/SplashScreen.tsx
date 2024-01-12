import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';

const SplashScreen = ({ navigation }: any) => {
  const [isReady, setIsReady] = useState(false);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.error('Permission to access location was denied');
          return;
        }
        
        let currentLocation:any = await Location.getCurrentPositionAsync({});
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
        <Text>Chargement terminé</Text>
      ) : (
        <>
          <Text>Chargement en cours...</Text>
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
