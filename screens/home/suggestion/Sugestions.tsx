import styled from "styled-components/native";
import CardSuggestion from "./CardSugestion";
import { Image } from "react-native";
import Fire from "../../../assets/Fire.png"

export default function Sugestions() {
  return (
    <SugestionsStyled>
      <ContainerTitle>
        <SugestionText>Suggestion</SugestionText>
        <Image
                  source={Fire as any}
                  style={{ width: 25, height: 25 }}
                  />
      </ContainerTitle>

    <ContainerCards  showsVerticalScrollIndicator={false}
        refreshControl={null as any}>
      <CardSuggestion image="https://www.aproposdecriture.com/wp-content/uploads/2019/07/Vacances.jpg" title="Aide pour partir en vacance" subtitle="Délivrée par l'Etat" titleRequis="18 - 25 ans" price={250} />

      <CardSuggestion image="https://www.studycdn.space/sites/default/files/2022-10/arton105384.jpg" title="financement du permis B" subtitle="Délivrée par l'Etat" titleRequis="Alternants" price={500} />

      

      </ContainerCards>

      
    </SugestionsStyled>
  );
}

const SugestionsStyled = styled.View`
  margin-top: 30px;
  padding: 0 15px 30px 15px;
  flex: 1;
`;

const SugestionText = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const ContainerCards = styled.ScrollView`
  margin-top: 10px;
  flex: 1;
`;



