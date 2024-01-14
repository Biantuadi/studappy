import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import CardSuggestion from "./CardSugestion";
import { mainTheme } from "../../../theme/main.theme";

export default function Sugestions() {
  return (
    <SugestionsStyled>
      <ContainerTitle>
        <SugestionText>Suggestion</SugestionText>
        <Ionicons
          name="flash"
          size={22}
          color={mainTheme.colors.black}
        />
      </ContainerTitle>

      <CardSuggestion image="https://www.aproposdecriture.com/wp-content/uploads/2019/07/Vacances.jpg" title="Aide pour partir en vacance" subtitle="Délivrée par l'Etat" titleRequis="18 - 25 ans" price={250} />

      <CardSuggestion image="https://www.studycdn.space/sites/default/files/2022-10/arton105384.jpg" title="financement du permis B" subtitle="Délivrée par l'Etat" titleRequis="Alternants" price={500} />
      <CardSuggestion image="https://www.studycdn.space/sites/default/files/2022-10/arton105384.jpg" title="financement du permis B" subtitle="Délivrée par l'Etat" titleRequis="Alternants" price={500} />
      <CardSuggestion image="https://www.studycdn.space/sites/default/files/2022-10/arton105384.jpg" title="financement du permis B" subtitle="Délivrée par l'Etat" titleRequis="Alternants" price={500} />

      
    </SugestionsStyled>
  );
}

const SugestionsStyled = styled.View`
  margin-top: 30px;
  padding: 0 15px;
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



