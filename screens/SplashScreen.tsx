import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation:any = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Accueil'); // Remplacez 'Accueil' par le nom de votre écran d'accueil
    }, 2000); // 2000 millisecondes = 2 secondes

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
      <Text>Loading...</Text>
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

