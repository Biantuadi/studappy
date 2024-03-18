import styled from "styled-components/native";
import Header from "../../components/layouts/Header";
import { StatusBar } from "expo-status-bar";
import MapClick from "./inactif_map/MapClick";
import Category from "./categories/Category";
import Sugestions from "./suggestion/Sugestions";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { mainTheme } from "../../theme/main.theme";
import { FontAwesome, Ionicons } from '@expo/vector-icons';

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
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
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
              icon={<Ionicons name="pricetags" size={22} color="#e1e1e166" />}
              onPress={() => navigation.navigate("BonsPlans")}
            />
            <Category 
            text="Logements" 
            icon={<FontAwesome name="building" size={22} color="#e1e1e166" />} 
            onPress={() => navigation.navigate("Map", { category: "Logements", openList: true})} 
            />
          </GroupeCategories>
          <GroupeCategories>
            <Category text="Aides d'État" 
            icon={<Ionicons name="cash" size={22} color="#e1e1e166" />}
             />
            <Category text="e-Shop" 
            onPress={() => navigation.navigate("Eshop")}
            icon={<FontAwesome name="shopping-bag" size={22} color="#e1e1e166" />}
             />
          </GroupeCategories>
        </ContainerCategories>

        {/* sugesstion sectio */}
        <Sugestions />
      </HomeContainer>
      <StatusBar style="light" backgroundColor={mainTheme.colors.primary} />
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
