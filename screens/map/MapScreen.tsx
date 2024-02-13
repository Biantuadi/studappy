import React from "react";
import styled from "styled-components/native";
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";
import { mapStyle } from "../../theme/map.style";
import { StatusBar } from "expo-status-bar";
import MyPositionAnim from "../home/inactif_map/MyPositionAnim";
import { mainTheme } from "../../theme/main.theme";
import { Text } from "react-native";

export default function MapScreen({ route }: any) {
  const { location } = route.params;

  return (
    <MapScreenContainer>
      {/* <StatusBar 
      translucent
       backgroundColor="transparent" 
      style="dark"
        /> */}
        <StatusBar style="dark" backgroundColor={mainTheme.colors.white} />

      
      <MenuMapContainer>
        <Text>Menu</Text>

      </MenuMapContainer>
      <MapView
        provider={PROVIDER_DEFAULT}
        customMapStyle={mapStyle as any}
        style={{ 
          flex: 1,
          alignSelf: "stretch",
          height: "100%",
        }}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsCompass={false}
      >
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
        >
          
          <MyPositionAnim 
          style={{ 
            width: 40,
            height: 40,
          }}
          />
        </Marker>
      </MapView>
    </MapScreenContainer>
  );
}

const MapScreenContainer = styled.View`
  flex: 1;
`;

const MenuMapContainer = styled.View`
  position: absolute;
  top: 0;
  /* left: 20px; */
  align-self: flex-start;
  z-index: 9;
  width: 100%;
  /* height: 100px; */
  padding: 20px;
  padding-top: 40px;
  /* background-color: ${mainTheme.colors.white}; */
  background-color: red;
  
`;


