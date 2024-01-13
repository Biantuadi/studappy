import React from "react";
import styled from "styled-components/native";
import MapView, { Marker } from "react-native-maps";
import { mapStyle } from "../../theme/map.style";
import customMarkerImage from "../../assets/images/my_position2.png";
import { Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import Food from "../../assets/icons/icon_repas.png";
import SalonCoiffure from "../../assets/icons/salon_de_coiffure.png";
import MenuMapCard from "../../components/MenuMapCard";

export default function MapScreen({ route }: any) {
  const { location } = route.params;

  return (
    <MapScreenContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <MenuMapContainer>
        <MenuMapCard image={Food} text="Repas" onTap={() => {}} />
        <MenuMapCard image={SalonCoiffure} text="Coiffure" />
      </MenuMapContainer>
      <MapView
        customMapStyle={mapStyle as any}
        style={{ 
          width: "100%",
          height: "100%",
          alignSelf: "stretch",
        }}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsCompass={false}
        // compassOffset={{ x: -10, y: 500 }}
      >
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
        >
          <Image
            source={customMarkerImage as any}
            style={{ height: 50, width: 50 }}
            resizeMode="contain"
          />
        </Marker>
      </MapView>
    </MapScreenContainer>
  );
}

const MapScreenContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const MenuMapContainer = styled.View`
  position: absolute;
  top: 45px;
  left: 20px;
  z-index: 9;
  flex-direction: row;
  gap: 20px;
`;
