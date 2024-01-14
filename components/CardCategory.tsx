import styled from "styled-components/native";
import { mainTheme } from "../theme/main.theme";

type CardBonPlanProps = {
    onPress?: () => void;
    title: string;
    image: any;
}

export default function CardCategory({ onPress, title, image }: CardBonPlanProps) {
  return (
    <CardBonPlan>
          <ImageBonPlan source={image as any} />
          <TextCard>{title}</TextCard>
        </CardBonPlan>
  )
}

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

const TextCard = styled.Text`
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;

const ImageBonPlan = styled.Image`
  width: 75%;
  height: 70%; /* Utilisation de pourcentage pour l'adaptabilité */
  border-radius: 10px;
  object-fit: contain;
`;
