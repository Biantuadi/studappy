import React from "react";
import styled from "styled-components/native";
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";
import { mapStyle } from "../../theme/map.style";
import { StatusBar } from "expo-status-bar";
import MyPositionAnim from "../home/inactif_map/MyPositionAnim";
import { mainTheme } from "../../theme/main.theme";
import ContainerSearch from "./widgets/ContainerSearch";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function MapScreen({ route }: any) {
  const { location } = route.params;
  const [isList, setIsList] = React.useState(false);

  const navigation = useNavigation();
  const onPressReturn = () => {
    navigation.goBack();
  };

  return (
    <MapScreenContainer>
      <StatusBar style="dark" backgroundColor={mainTheme.colors.white} />

      <MenuMapContainer
        style={
          isList
            ? { backgroundColor: "#fff" }
            : { backgroundColor: "transparent" }
        }
      >
        <ContainerReturnAndSearch>
          <ContainerReturn activeOpacity={0.8} onPress={onPressReturn}>
            <Ionicons
              name="arrow-back"
              size={24}
              color={mainTheme.colors.colorTest}
            />
          </ContainerReturn>

          <ContainerSearch />
        </ContainerReturnAndSearch>

        <ContainerCategories>
          <ContainerCategory
            style={{
              width: 113,
            }}
            activeOpacity={0.8}
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
            onPress={() => {
              setIsList(!isList);
            }}
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

      {!isList && (
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
      )}
    </MapScreenContainer>
  );
}

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
