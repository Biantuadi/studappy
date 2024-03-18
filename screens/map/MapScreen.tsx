import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Location from "expo-location";
import { ActivityIndicator, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { mainTheme } from "../../theme/main.theme";
import ContainerSearch from "./widgets/ContainerSearch";
import MapComponent from "./widgets/MapComponent";
import { Entypo, Ionicons } from "@expo/vector-icons";
import {
  repasData,
  coursesData,
  cinemasData,
  gymsData,
  barbersData,
  logementsData,
  vetementsData,
} from "../../data/fakeDataMap";
import ListComponent from "./widgets/ListComponent";

interface MapScreenProps {
  category: string;
  openList: boolean;

}

const MapScreen = () => {
  const route = useRoute();
  // Définir "Repas" comme catégorie par défaut si aucune catégorie n'est passée
  const { 
    category = "Repas",
   openList
   }: any = route.params || {};
  const [isList, setIsList] = useState(openList || false);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();


  useEffect(() => {
    setLoading(true);
    const getLocationPermission = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          navigation.navigate("Accueil" as never);
          return;
        }
        const currentLocation: any = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
      } catch (error) {
        console.error("Error requesting location permission:", error);
      } finally {
        setLoading(false);
      }
    };

    getLocationPermission();
  }, []); // si on rajoute [navigation] ça va permettre de recharger la page à chaque fois qu'on change de page

  const getDataForCategory = (category: any) => {
    switch (category) {
      case "Repas":
        return repasData;
      case "Courses":
        return coursesData;
      case "Cinémas":
        return cinemasData;
      case "Gyms":
        return gymsData;
      case "Coiffures":
        return barbersData;
      case "Logements":
        return logementsData;
      case "Magasins":
        return vetementsData;
      default:
        return [];
    }
  };

  return (
    <MapScreenContainer>
      <StatusBar style="dark" backgroundColor={mainTheme.colors.white} />
      <MenuMapContainer style={
        isList && { backgroundColor: "#fff" }

        
        }>
        <ContainerReturnAndSearch
          style={Platform.OS === "ios" && { marginTop: 15 }}
        >
          <ContainerReturn
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Accueil" as never)}
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color={mainTheme.colors.colorTest}
            />
          </ContainerReturn>

          <ContainerSearch category={category} />
        </ContainerReturnAndSearch>

        <ContainerCategories>
          <ContainerCategory
            style={{
              width: "35%",
            }}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("BonsPlans" as never)}
          >
            <Ionicons
              name="pricetags-outline"
              size={16}
              color={mainTheme.colors.colorTest}
            />
            <CategoryText>Prestations</CategoryText>
          </ContainerCategory>

          <ContainerCategory
            activeOpacity={0.8}
            onPress={() => setIsList(!isList)}
          >
            {isList ? (
              <>
                <Ionicons
                  name="map-outline"
                  size={16}
                  color={mainTheme.colors.colorTest}
                />
                <CategoryText>Carte</CategoryText>
              </>
            ) : (
              <>
                <Ionicons
                  name="list-outline"
                  size={16}
                  color={mainTheme.colors.colorTest}
                />
                <CategoryText>Liste</CategoryText>
              </>
            )}
          </ContainerCategory>

          <ContainerCategory activeOpacity={0.8}>
            <Entypo
              name="flow-parallel"
              size={16}
              color={mainTheme.colors.colorTest}
            />
            <CategoryText>Filtres</CategoryText>
          </ContainerCategory>
        </ContainerCategories>
      </MenuMapContainer>

      { (
  isList ? (
    <ListComponent category={category} data={getDataForCategory(category)}  />
  ) : loading ? (
    <LoaderContainer>
      <ActivityIndicator size="large" color={mainTheme.colors.primary} />
      <TextLoader>La carte se charge, veuillez patienter...</TextLoader>
    </LoaderContainer>
  ):(
    !isList &&
    location && (
      <MapComponent
        location={location}
        data={getDataForCategory(category)}
        category={category}
      />
    )
  )
)}


    </MapScreenContainer>
  );
};

const MapScreenContainer = styled.View`
  flex: 1;
  background-color: ${mainTheme.colors.white};
`;

const MenuMapContainer = styled.View`
  position: absolute;
  top: 0;
  flex-direction: column;
  align-self: flex-start;
  z-index: 9;
  width: 100%;
  padding: 50px 20px 25px 20px;
  background-color: transparent;
`;

const ContainerCategories = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;

const ContainerCategory = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background-color: ${mainTheme.colors.white};
  padding: 8.5px 9px;
  width: 95px;
  border-radius: 6px;
  ${mainTheme.platformShadow(0.7)}
`;

const CategoryText = styled.Text`
  font-size: 13px;
  color: ${mainTheme.colors.black};
  font-weight: 500;
`;

const ContainerReturnAndSearch = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ContainerReturn = styled.TouchableOpacity`
  padding: 8px;
  border-radius: 30px;
  ${mainTheme.platformShadow(0.6)}
  background-color: ${mainTheme.colors.white};
`;

const LoaderContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const TextLoader = styled.Text`
  margin-top: 20px;
  font-size: 14px;
  color: ${mainTheme.colors.colorTest};
  font-weight: 500;
`;

export default MapScreen;
