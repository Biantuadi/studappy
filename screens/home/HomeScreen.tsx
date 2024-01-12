import styled from "styled-components/native";
import Header from "../../components/layouts/Header";
import { StatusBar } from "expo-status-bar";
import MapClick from "./components/MapClick";
import Category from "./components/Category";
import Sugestions from "./components/Sugestions";

export default function HomeScreen() {
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
          <Category text="Bons Plans" iconName="pricetags" />
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
