import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';

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
            <Ionicons name={iconName as any} size={22} color="rgba(225, 225, 225, 0.4)" />
          <CategoryText>{text}</CategoryText>
          {/* icon flech droit > */}
          <Ionicons name="chevron-forward" size={22} color="#fff" />
        </ContainerCategory>
  )
}



const ContainerCategory = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 170px;
  gap: 10px;
  background-color: #262626;
  padding: 13px 15px;
  border-radius: 15px;
`;

const CategoryText = styled.Text`
  font-size: 13px;
  color: #fff;
  font-weight: bold;
`;