import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const Splash = ({ navigation }: any) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Effectuez ici les tâches de chargement nécessaires
        // Exemple: Chargement de données, initialisation de services, etc.
        
        // Simuler un chargement
        await new Promise(resolve => setTimeout(resolve, 2000)); // Supprimez cette ligne dans la version finale
      } catch (error) {
        console.error('Erreur lors de l\'initialisation de l\'app :', error);
      } finally {
        setIsReady(true);
      }
    };

    initializeApp();
  }, []);

  useEffect(() => {
    if (isReady) {
      navigation.replace('Accueil');
    }
  }, [isReady, navigation]);

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

export default Splash;
