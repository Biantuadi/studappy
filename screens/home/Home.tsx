import styled from "styled-components/native";
import Header from "../../components/layouts/Header";
import { StatusBar } from "expo-status-bar";
import MapClick from "./MapClick";
import Category from "./Category";
import { View } from "react-native";
import Sugestions from "./Sugestions";

export default function Home() {
  return (
    <HomeContainer>
      <SectionHeader>
        <Header />
        <AcrrocheTextContainer>
          <TextTitle>Studappy votre</TextTitle>
          <TextTitle>Compagnon Etudiant !</TextTitle>
        </AcrrocheTextContainer>

        <MapClick />
      </SectionHeader>

      <ContainerCategories>
        <Section1>
          <Category text="Bons Plans" iconName="pricetags" />
          <Category text="WebOffers" iconName="globe" />
        </Section1>

        <Section2>
          <Category text="Aides d'État" iconName="cash" />
          <Category text="Evenements" iconName="calendar" />
        </Section2>
      </ContainerCategories>

      <Sugestions />

      <StatusBar style="light" backgroundColor="#1d1c1b" />
    </HomeContainer>
  );
}

const HomeContainer = styled.View`
  flex: 1;
  background-color: #f8fafb;
`;

const SectionHeader = styled.View`
  background-color: #1d1c1b;
  padding: 55px 15px 0 15px;
  height: 40%;
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

const Section1 = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Section2 = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;