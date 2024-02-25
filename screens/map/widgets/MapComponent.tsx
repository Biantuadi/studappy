// MapComponent.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';
import styled from 'styled-components/native';
import { mapStyle } from '../../../theme/map.style';
import MyPositionAnim from '../../home/inactif_map/MyPositionAnim';
import { mainTheme } from '../../../theme/main.theme';

const MapComponent = ({ location }: any) => {
  return (
    <MapScreenContainer>
      <MapView
        provider={PROVIDER_DEFAULT}
        customMapStyle={mapStyle as any}
        style={styles.map}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsCompass={false}>
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}>
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
};

const MapScreenContainer = styled.View`
  flex: 1;
  background-color: ${mainTheme.colors.white};
`;

const styles = StyleSheet.create({
  map: {
    flex: 1,
    alignSelf: 'stretch',
    height: '100%',
  },
});

export default MapComponent;
