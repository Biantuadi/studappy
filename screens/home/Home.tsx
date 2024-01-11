import styled from "styled-components/native";
import Header from "../../components/layouts/Header";
import { StatusBar } from "expo-status-bar";
import ImgMap from "../../assets/images/map_1.png";

export default function Home() {
  return (
    <HomeContainer>
      <SectionHeader>
        <Header />
        <AcrrocheTextContainer>
         <Text1>Studappy votre</Text1>
          <Text2>Compagnon Etudiant !</Text2>
         </AcrrocheTextContainer>
      </SectionHeader>







      <StatusBar style="light" backgroundColor="#1d1c1b" />


    

    </HomeContainer>
  )
}

const HomeContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;

const SectionHeader = styled.View`
  background-color: #1D1C1B;
  padding: 55px 15px 0 15px;
  height: 45%;
`;

const AcrrocheTextContainer = styled.View`
  margin-top: 30px;
`;

const Text1 = styled.Text`
  font-size: 25px;
  color: #fff;
  font-weight: bold;
`;

const Text2 = styled.Text`
  font-size: 25px;
  color: #fff;
  font-weight: bold;
`;