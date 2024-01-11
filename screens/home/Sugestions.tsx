import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export default function Sugestions() {
  return (
    <SugestionsStyled>
      <ContainerTitle>
        <SugestionText>Suggestion</SugestionText>
        <Ionicons
          name="flash"
          size={22}
          color="#000"
        />
      </ContainerTitle>
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