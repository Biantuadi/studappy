import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Disney from '../../../assets/banner_publicity/disney.jpeg';
import Spotify from '../../../assets/banner_publicity/spotify.jpg';
import Amazon from '../../../assets/banner_publicity/amazon_student.webp';

// const images = [
//   "https://images.unidays.world/i/self-serve/customer/DwkD_Bx9tE2_Yq_AKzudsKt6wmOPiLxIsGt2wvqyFeE=/header/251f9a98-fdda-4e2c-99d6-f05e1370a608",
//   "https://macstores.vn/tin-tuc/wp-content/uploads/2022/01/20220105_61d5d4ec89931.jpg",
//   "https://www.cosedamamme.it/wp-content/uploads/2023/08/amazon-student-meta-prezzo-gratis-studenti.png",
// ];

const BannerPublicityData = [
  {
    id: 1,
    name: "Disney+",
    image: Disney,
  },
  {
    id: 2,
    name: "Spotify",
    image: Spotify,
  },
  {
    id: 3,
    name: "Amazon Prime",
    image: Amazon,
  },
];

export default function BannerPublicity() {
  return (
    <>
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
        {BannerPublicityData.map((publicity, index) => (
          <TouchableOpacity activeOpacity={0.8} key={index} style={styles.slide}>
            <>
              <Image
                source={publicity.image as any}
                style={styles.image}
              />
            </>
          </TouchableOpacity>
        ))}
      </Swiper>
    </>
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