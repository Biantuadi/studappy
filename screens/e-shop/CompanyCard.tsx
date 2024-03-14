// CompanyItem.tsx
import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { mainTheme } from "../../theme/main.theme";

interface CompanyItemProps {
  imageUri: string;
  companyName: string;
  onPress?: () => void;
  pourcent: number;
}

const CompanyItem: React.FC<CompanyItemProps> = ({
  imageUri,
  companyName,
  pourcent,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} >
      <CompanyCard>
        <CompanyImage source={{ uri: imageUri }} />
      <AbsolutePourcent>
        <TextPourcent>-{pourcent}%</TextPourcent>
      </AbsolutePourcent>
        <CompanyTitle>{companyName}</CompanyTitle>
      </CompanyCard>
    </TouchableOpacity>
  );
};

const CompanyCard = styled.View`
  border-radius: 10px;
  align-items: center;
`;

const CompanyImage = styled.Image`
  width: 53px;
  height: 53px;
  border-radius: 10px;
  position: relative;
`;

const CompanyTitle = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-top: 5px;
`;

const AbsolutePourcent = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${mainTheme.colors.promotionReduction};
  border-radius: 0 10px 0 10px;
  padding: 2px 5px;
  justify-content: center;
  align-items: center;
`;

const TextPourcent = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 9px;
`;

export default CompanyItem;
