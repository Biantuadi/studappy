import { Platform, Text, View } from "react-native";
import styled from "styled-components/native";
import Food from "../../assets/icons/icon_repas.png";

export default function BonsPlansScreen() {
  return (
    <BonsPlansScreenContainer>
      <View style={{alignItems: "flex-start",  justifyContent: "flex-start"}}>
        <TextAcroche>Choisissez une</TextAcroche>
        <TextAcroche>catégorie</TextAcroche>
      </View>

      <CardsContainer>
        <CardBonPlan>
          <ImageBonPlan source={Food as any} />
          <TextCard>Repas</TextCard>
        </CardBonPlan>
        <CardBonPlan>
          <ImageBonPlan source={Food as any} />
          <TextCard>Coupe Afro</TextCard>
        </CardBonPlan>
        <CardBonPlan>
          <ImageBonPlan source={Food as any} />
          <TextCard>Repas</TextCard>
        </CardBonPlan>

        {/* Ajoutez ici d'autres cartes selon le même modèle */}
      </CardsContainer>
    </BonsPlansScreenContainer>
  );
}

const BonsPlansScreenContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  padding: 50px 15px 0 15px;
  gap: 35px;
`;

const TextAcroche = styled.Text`
  font-size: 30px;
  font-weight: bold;
  /* margin: 20px 0; */
`;

const CardsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
`;

const CardBonPlan = styled.View`
  width: 30%; /* Utilisation de pourcentage pour l'adaptabilité */
  aspect-ratio: .8; /* Assure que la carte a un ratio hauteur/largeur de 1:1 */
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  ${Platform.OS === "android"
    ? `elevation: 3; background-color: #fff;`
    : `
       shadowColor: #000;
       shadowOffset: { width: 0, height: 0 };
       shadowOpacity: 0.2;
       shadowRadius: 10px;
    `}
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
