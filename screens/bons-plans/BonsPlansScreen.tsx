import {View } from "react-native";
import styled from "styled-components/native";
import { mainTheme } from "../../theme/main.theme";
import Food from "../../assets/icons/icon_repas.png";
import CoupeClassique from "../../assets/icons/classique_coupe.png";
import CoupeAfro from "../../assets/icons/afro_coupe.png";

export default function BonsPlansScreen() {
  return (
    <BonsPlansScreenContainer>
      <View>
        <TextAcroche>Choisissez une</TextAcroche>
        <TextAcroche>catégorie</TextAcroche>
      </View>

      <CardsContainer>
        <CardBonPlan>
          <ImageBonPlan source={Food as any} />
          <TextCard>Repas</TextCard>
        </CardBonPlan>
        <CardBonPlan>
          <ImageBonPlan source={CoupeClassique as any} />
          <TextCard>Barbershop</TextCard>
        </CardBonPlan>
        <CardBonPlan>
          <ImageBonPlan source={CoupeAfro as any} />
          <TextCard>
            Coupe Afro</TextCard>
        </CardBonPlan>

      </CardsContainer>
    </BonsPlansScreenContainer>
  );
}

const BonsPlansScreenContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${mainTheme.colors.white};
  padding: 50px 15px 0 15px;
  gap: 35px;
`;

const TextAcroche = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

const CardsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
`;

const CardBonPlan = styled.TouchableOpacity`
  width: 30%; /* Utilisation de pourcentage pour l'adaptabilité */
  aspect-ratio: .8; /* Assure que la carte a un ratio hauteur/largeur de 1:1 */
  background-color: ${mainTheme.colors.white};
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  ${mainTheme.platformShadow}
`;

const ImageBonPlan = styled.Image`
  width: 75%;
  height: 70%; /* Utilisation de pourcentage pour l'adaptabilité */
  border-radius: 10px;
  object-fit: contain;
`;

const TextCard = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
