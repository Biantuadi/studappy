import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import styled from "styled-components/native";
import { mapStyle } from "../../../theme/map.style";
import MyPositionAnim from "../../home/inactif_map/MyPositionAnim";
import { mainTheme } from "../../../theme/main.theme";
import RestaurantIcon from "../../../assets/icons-map/restaurant.png";
import SupermarketIcon from "../../../assets/icons-map/courses.png";
import CinemaIcon from "../../../assets/icons-map/emoji_popcorn.png";
import GymIcon from "../../../assets/icons-map/gym.webp";
import BarbershopIcon from "../../../assets/icons-map/emoji_barber.png";
import FastFoodIcon from "../../../assets/icons-map/emoji_fries.png";
import HouseIcon from "../../../assets/icons-map/emoji_building2.png";


const MapComponent = ({ location, data }: any) => {
  const fakeLat = 48.668 + 0.0215;
  const fakeLong = 6.1613506 ;

  const newRegion = {
    latitude: fakeLat,
    longitude: fakeLong,
    latitudeDelta: 0.15975520010125166,
    longitudeDelta: 0.10892383754253387,
  };

  const [mapRegion, setMapRegion] = React.useState(newRegion);

  return (
    <MapScreenContainer>
      <MapView
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle as any}
        style={styles.map}
        region={mapRegion}
        showsCompass={false}
        // onRegionChangeComplete={handleRegionChangeComplete}
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
            // title={"10€"}
            // description={place.cuisine ? `${place.cuisine} | Rating: ${place.rating}` : null}
          >
           <View style={{alignItems: 'center'}}>
             {renderMarkerIcon(place.type)}
             <Callout tooltip={true}>
                 <ViewCallaoutTextContainer>
                  <CalloutText>10€</CalloutText>
                 </ViewCallaoutTextContainer>
             </Callout>
           </View>
          </Marker>
        ))}
      </MapView>
    </MapScreenContainer>
  );
};

const CalloutContainer = styled.View`
  padding: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ViewCallaoutTextContainer = styled.View`
  background-color: #ffffff;
  border-radius: 5px;
  width: 50px;
  align-items: center;
  justify-content: center;
  ${mainTheme.platformShadow(3)}
`;

const CalloutText = styled.Text`
  font-size: 16px;
  text-align: center;
`;

const renderMarkerIcon = (type: string) => {
  const typeLowerCase = type && type.toLowerCase();
  switch (typeLowerCase) {
    case "restaurant":
      return <Image source={RestaurantIcon as any} style={styles.markerIcon} />;
    case "supermarket":
      return (
        <Image source={SupermarketIcon as any} style={styles.markerIcon} />
      );
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
