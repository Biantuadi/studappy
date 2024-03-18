import styled from "styled-components/native";
import CardSuggestion from "./CardSugestion";
import { Image } from "react-native";
import Fire from "../../../assets/animated_icons/Fire.png";
// import BannerPublicity from "../../e-shop/BannerPublicity";

export default function Sugestions() {
  return (
    <SugestionsStyled>
      <ContainerTitle>
        <SugestionText>Suggestion</SugestionText>
        <Image source={Fire as any} style={{ width: 25, height: 25 }} />
      </ContainerTitle>

      {/* <BannerPublicityContainer>
                <BannerPublicity />
              </BannerPublicityContainer> */}

      <ContainerCards
        showsVerticalScrollIndicator={false}
        refreshControl={null as any}
      >
        <CardSuggestion
          image="https://www.aproposdecriture.com/wp-content/uploads/2019/07/Vacances.jpg"
          title="Partir en vacance" // le nombre de caractère dans ce texte est 17
          subtitle="Délivrée par l'Etat" // le nombre de caractère dans ce texte est 25
          titleRequis="18 - 25 ans"
          price={250}
        />

        <CardSuggestion
          image="https://www.studycdn.space/sites/default/files/2022-10/arton105384.jpg"
          title="Financement permis B" // le nombre de caractère dans ce texte est 19
          subtitle="Délivrée par l'Etat"
          titleRequis="Alternants"
          price={500}
        />
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

const BannerPublicityContainer = styled.View`
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;
