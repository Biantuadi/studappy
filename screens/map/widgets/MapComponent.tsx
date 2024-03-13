// MapComponent.js
import React from "react";
import { StyleSheet, Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import styled from "styled-components/native";
import { mapStyle } from "../../../theme/map.style";
import MyPositionAnim from "../../home/inactif_map/MyPositionAnim";
import { mainTheme } from "../../../theme/main.theme";
import RestaurantIcon from "../../../assets/icons-map/restaurent.png";
import SupermarketIcon from "../../../assets/icons-map/courses.png";
import CinemaIcon from "../../../assets/icons-map/pop-corn-cinema.webp";
import GymIcon from "../../../assets/icons-map/gym.webp";
import BarbershopIcon from "../../../assets/icons-map/barber.png";
import FastFoodIcon from "../../../assets/icons-map/fastfood.webp";
import HouseIcon from "../../../assets/icons-map/house.png";



const MapComponent = ({ location, data }: any) => {
  return (
    <MapScreenContainer>
      <MapView
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle as any}
        style={styles.map}
        region={{
          latitude: 48.668,
          longitude: 6.1613506,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsCompass={false}
      >
        <Marker
          coordinate={{
            latitude: 48.668,
            longitude: 6.1613506,
          }}
        >
          <MyPositionAnim
            style={{
              width: 40,
              height: 40,
            }}
          />
        </Marker>

        {/* Markers for places */}
        {data.map((place: any) => (
          <Marker
            key={place.id}
            coordinate={place.coordinates}
            title={place.name}
            // description={place.cuisine ? `${place.cuisine} | Rating: ${place.rating}` : null}
          >
            {renderMarkerIcon(place.type)}
          </Marker>
        ))}

      </MapView>
    </MapScreenContainer>
  );
};


const renderMarkerIcon = (type: string) => {
  const typeLowerCase = type && type.toLowerCase();
  switch (typeLowerCase) {
    case "restaurant":
      return <Image source={RestaurantIcon as any} style={styles.markerIcon} />;
    case "supermarket":
      return <Image source={SupermarketIcon as any} style={styles.markerIcon} />;
    case "cinema":
      return <Image source={CinemaIcon as any} style={styles.markerIcon} />;
    case "gym":
      return <Image source={GymIcon as any} style={styles.markerIcon} />;
    case "barber":
      return <Image source={BarbershopIcon as any} style={styles.markerIcon} />;
    case "appartement":
      return <Image source={HouseIcon as any} style={styles.markerIcon} />;
    case "fastfood":
      return <Image source={FastFoodIcon as any} style={styles.markerIcon} />;
    
    default:
      return null;
  }
};

const MapScreenContainer = styled.View`
  flex: 1;
  background-color: ${mainTheme.colors.white};
`;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  markerIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});

export default MapComponent;
