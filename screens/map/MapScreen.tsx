import React, { useState } from "react";
import styled from "styled-components/native";
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";
import { mapStyle } from "../../theme/map.style";
import customMarkerImage from "../../assets/images/my_position2.png";
import { Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import MenuMapCard from "../../components/MenuMapCard";
import Food from "../../assets/icons/icon_repas.png";
import SalonCoiffure from "../../assets/icons/salon_de_coiffure.png";
// il faut ajouter :
// repas
// Salon de coiffure
// salle de sport
// magasin de vetement
// bar
// librairie
// musée
// Café
// Salon de beauté
// Bar
// Musée
// théâtre
// cinéma

const menuCards = [
  {
    id: 1,
    image: Food,
    text: "Repas",
  },
  {
    id: 2,
    image: SalonCoiffure,
    text: "Coiffure",
  }

]

export default function MapScreen({ route }: any) {
  const { location } = route.params;
  const [activeCard, setActiveCard] = useState(1);

  const handleActiveCard = (id: number) => {
    setActiveCard(id);
  }




  return (
    <MapScreenContainer>
      <StatusBar 
      translucent
       backgroundColor="transparent" 
      style="dark"
        />
      
      <MenuMapContainer horizontal showsHorizontalScrollIndicator={false}>
        {menuCards.map((card) => (
          <MenuMapCard
            key={card.id}
            image={card.image}
            text={card.text}
            active={card.id === activeCard}
            onPress={() => handleActiveCard(card.id)}
          />
        ))}
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

const MenuMapContainer = styled.ScrollView`
  position: absolute;
  top: 45px;
  left: 20px;
  z-index: 9;
  width: 100%;
  
`;


