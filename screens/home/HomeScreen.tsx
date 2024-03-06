import styled from "styled-components/native";
import Header from "../../components/layouts/Header";
import { StatusBar } from "expo-status-bar";
import MapClick from "./inactif_map/MapClick";
import Category from "./categories/Category";
import Sugestions from "./suggestion/Sugestions";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { mainTheme } from "../../theme/main.theme";

export default function HomeScreen() {
  const navigation: any = useNavigation();

  const handleMapClick = () => {
    navigation.navigate("Map");
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: mainTheme.colors.primary }}
    >
      <HomeContainer
        showsVerticalScrollIndicator={false}
        refreshControl={null as any}
      >
        <SectionHeader>
          <Header />
          <AcrrocheTextContainer>
            <TextTitle>Studappy votre</TextTitle>
            <TextTitle>Compagnon Étudiant !</TextTitle>
          </AcrrocheTextContainer>
          <MapClick onPress={handleMapClick} />
        </SectionHeader>
        <ContainerCategories>
          <GroupeCategories>
            {/* onclick navigate to map */}
            <Category
              text="Bons Plans"
              iconName="pricetags"
              onPress={() => navigation.navigate("BonsPlans")}
            />
            {/* ou abonnements */}
            <Category text="WebOffers" iconName="globe" /> 
          </GroupeCategories>
          <GroupeCategories>
            <Category text="Aides d'État" iconName="cash" />
            {/* e-shop ou tech (outil => telephone, ordi, ...) */}
            <Category text="e-Shop" iconName="cart" />
          </GroupeCategories>
        </ContainerCategories>

        {/* sugesstion sectio */}
        <Sugestions />

        <StatusBar style="light" backgroundColor={mainTheme.colors.primary} />
      </HomeContainer>
    </SafeAreaView>
  );
}

const HomeContainer = styled.ScrollView`
  flex: 1;
  background-color: ${mainTheme.colors.secondary};
`;

const SectionHeader = styled.View`
  background-color: ${mainTheme.colors.primary};
  padding: 20px 15px 0 15px;
  height: 320px;
`;

const AcrrocheTextContainer = styled.View`
  margin-top: 30px;
`;

const TextTitle = styled.Text`
  font-size: 25px;
  color: ${mainTheme.colors.white};
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
