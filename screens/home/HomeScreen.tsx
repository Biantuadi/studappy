import styled from "styled-components/native";
import Header from "../../components/layouts/Header";
import { StatusBar } from "expo-status-bar";
import MapClick from "./components/MapClick";
import Category from "./components/Category";
import Sugestions from "./components/Sugestions";
import { useNavigation } from "@react-navigation/native";
import * as Location from 'expo-location';
import { useEffect } from "react";
import { RootStackParamList } from "../../types/app.types";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';





export default function HomeScreen() {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Accueil'>;
const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      // Vous pouvez maintenant passer cette localisation à MapScreen
    })();
  }, []);
  

  const handleMapClick = async () => {
    const location = await Location.getCurrentPositionAsync({});
    navigation.navigate('Map', { location });
  };
  

  return (
    <HomeContainer showsVerticalScrollIndicator={false}>
      <SectionHeader>
        <Header />
        <AcrrocheTextContainer>
          <TextTitle>Studappy votre</TextTitle>
          <TextTitle>Compagnon Etudiant !</TextTitle>
        </AcrrocheTextContainer>

        <MapClick />
      </SectionHeader>

      <ContainerCategories>
        <GroupeCategories>
          {/* onclick navigate to map */}
          <Category text="Bons Plans" iconName="pricetags" onClick={handleMapClick} />

          <Category text="WebOffers" iconName="globe" />
        </GroupeCategories>

        <GroupeCategories>
          <Category text="Aides d'État" iconName="cash" />
          <Category text="Evenements" iconName="calendar" />
        </GroupeCategories>
      </ContainerCategories>

      <Sugestions />

      <StatusBar style="light" backgroundColor="#1d1c1b" />
    </HomeContainer>
  );
}

const HomeContainer = styled.ScrollView`
  flex: 1;
  background-color: #f8fafb;
`;

const SectionHeader = styled.View`
  background-color: #1d1c1b;
  padding: 55px 15px 0 15px;
  height: 350px;
`;

const AcrrocheTextContainer = styled.View`
  margin-top: 30px;
`;

const TextTitle = styled.Text`
  font-size: 25px;
  color: #fff;
  font-weight: bold;
`;

const ContainerCategories = styled.View`
  flex-direction: column;
  margin-top: 90px;
  padding: 6px 8px;
  gap: 13px;
  `;

const GroupeCategories = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
