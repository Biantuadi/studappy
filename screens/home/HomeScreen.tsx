import styled from "styled-components/native";
import Header from "../../components/layouts/Header";
import { StatusBar } from "expo-status-bar";
import MapClick from "./components/MapClick";
import Category from "./components/Category";
import Sugestions from "./components/Sugestions";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/app.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ route }: any) {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Accueil">;
  const navigation = useNavigation<NavigationProp>();
  const location = route.params?.location;

  const handleMapClick = () => {
    if (location) {
      navigation.navigate("Map", { location });
    } else {
      console.error("Location is not available");
    }
  };

  return (
    <HomeContainer
      showsVerticalScrollIndicator={false}
    >
      <SafeAreaView
        style={{ flex: 0, backgroundColor: "#1d1c1b" }}
      />
      <SectionHeader>
        <Header />
        <AcrrocheTextContainer>
          <TextTitle>Studappy votre</TextTitle>
          <TextTitle>Compagnon Etudiant !</TextTitle>
        </AcrrocheTextContainer>
        <MapClick onPress={handleMapClick} />
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
  padding: 20px 15px 0 15px;
  height: 320px;
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
