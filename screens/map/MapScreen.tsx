import React from "react";
import styled from "styled-components/native";
import MapView, { Marker } from "react-native-maps";
import { mapStyle } from "../../theme/map.style";
import customMarkerImage from '../../assets/images/my_position2.png';
import { Image } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function MapScreen({ route }: any) {
  const { location } = route.params;

  return (
    <MapScreenContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <MapView
        customMapStyle={mapStyle as any}
        style={{ alignSelf: "stretch", height: "100%" }}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
        >
          <Image source={customMarkerImage as any} style={{ height: 50, width: 50 }} resizeMode="contain" />
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
