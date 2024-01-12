import React from 'react';
import styled from "styled-components/native";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { mapStyle } from '../../theme/map.style';
import { RouteProp } from '@react-navigation/native';




export default function MapScreen({ route }: any) {
  const { location } = route.params;

  return (
    <MapScreenContainer>
      <MapView
        // provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle as any}
        style={{ alignSelf: 'stretch', height: '100%' }}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      {/* Vous pouvez ajouter plus de fonctionnalités à MapView selon vos besoins */}
    </MapScreenContainer>
  )
}

// 
const MapScreenContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
