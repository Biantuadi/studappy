import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';
import { mainTheme } from "../../../theme/main.theme";

type CategoryProps = {
  iconName: string;
  text: string;
  onPress?: () => void;
}

export default function Category({iconName, text, onPress} : CategoryProps) {
  return (
        <ContainerCategory 
        // retirer l'opacité d'onpress 
        activeOpacity={.8}
        onPress={onPress}
        >
            <Ionicons name={iconName as any} size={22} color="#e1e1e166" />
          <CategoryText>{text}</CategoryText>
          {/* icon flech droit > */}
          <Ionicons name="chevron-forward" size={22} color={mainTheme.colors.white} />
        </ContainerCategory>
  )
}



const ContainerCategory = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 170px;
  gap: 10px;
  background-color: ${mainTheme.colors.primaryLighten};
  padding: 13px 15px;
  border-radius: 15px;
`;

const CategoryText = styled.Text`
  font-size: 13px;
  color: ${mainTheme.colors.white};
  font-weight: bold;
`;