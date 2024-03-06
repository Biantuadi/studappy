// MapComponent.js
import React from "react";
import { StyleSheet, Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import styled from "styled-components/native";
import { mapStyle } from "../../../theme/map.style";
import MyPositionAnim from "../../home/inactif_map/MyPositionAnim";
import { mainTheme } from "../../../theme/main.theme";
import Restaurent from "../../../assets/icons-map/restaurent.png";
import { platsData } from "../../../data/fakeData";

// import Courses from "../../../assets/icons-map/courses.png";
// import Cinemas from "../../../assets/icons-map/pop-corn-cinema.webp";

const MapComponent = ({ location }: any) => {
  return (
    <MapScreenContainer>
      <MapView
        provider={ PROVIDER_GOOGLE }

        customMapStyle={mapStyle as any}
        style={styles.map}
        region={{
          // latitude: location.coords.latitude,
          // longitude: location.coords.longitude,
          latitude: 48.668,
          longitude: 6.1613506,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsCompass={false}
      >
        <Marker
          coordinate={{
            // latitude: location.coords.latitude,
            // longitude: location.coords.longitude,
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
        {/* Render a Marker for each place */}
        {platsData.map((place: any) => (
          <Marker
            key={place.id}
            coordinate={place.coordinates}
            title={place.name}
            description={`${place.cuisine} | Rating: ${place.rating}`}
          >
            {/* Conditionally render different icons based on the type of place */}
            {place.type === "restaurant" ? (
              <Image
                source={Restaurent as any}
                style={{ width: 30, height: 30, objectFit: "contain" }}
              />
            ) : (
              <Image
                source={{
                  uri: "https://cdn3d.iconscout.com/3d/premium/thumb/french-fries-4693314-3895628.png?f=webp",
                }}
                style={{ width: 30, height: 30 }}
              />
            )}
            
          </Marker>
        ))}
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
    alignSelf: "stretch",
    height: "100%",
  },
});

export default MapComponent;
