import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const images = [
  "https://as1.ftcdn.net/v2/jpg/03/03/85/64/1000_F_303856460_ZW2DnQgZv2BrpIpFCwh80qgYXv284SmT.jpg",
  "https://www.thegoodgoods.fr/wp-content/uploads/2023/05/asos-logo.jpeg",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adidas-logo-design-template-416e301e26d296a75536e1f323a013e0_screen.jpg?ts=1686456385",
];

export default function BannerPublicity() {
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      autoplay
      autoplayTimeout={4}
      loop={true}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
      paginationStyle={styles.pagination}
    >
      {images.map((image, index) => (
        <View key={index} style={styles.slide}>
          <Image
            source={{ uri: image }}
            style={styles.image}
          />
        </View>
      ))}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  image: {
    width: '97%',
    height: '97%',
    borderRadius: 20,
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)', // Couleur des points non actifs
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  activeDot: {
    backgroundColor: '#000', // Couleur du point actif
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  pagination: {
    bottom: -15, // Ajuster la position verticale des points si nécessaire
  },
});
