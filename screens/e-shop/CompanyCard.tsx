// CompanyItem.tsx
import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { mainTheme } from "../../theme/main.theme";
import { cutText } from "../../utils/main.utils";

interface CompanyItemProps {
  imageUri: string;
  companyName: string;
  onPressCard?: () => void;
  pourcent: number;
  style?: any;
  isBorder?: boolean;
}

const CompanyItem: React.FC<CompanyItemProps> = ({
  imageUri,
  companyName,
  pourcent,
  onPressCard,
  style,
  isBorder,
}) => {
  return (
    <ButtonTouchableOpacity onPress={onPressCard} activeOpacity={0.8} style={style}>
      <CompanyCard>
        <CompanyImage 
        source={{ uri: imageUri }}
        style={
          isBorder ? {borderWidth: 1, borderColor: "rgb(242, 244, 247)"} : {borderWidth: 0}
        }
         />
      <AbsolutePourcent>
        <TextPourcent>-{pourcent}%</TextPourcent>
      </AbsolutePourcent>
        <CompanyTitle>
          {cutText(companyName, 7, true)}
          </CompanyTitle>
      </CompanyCard>
    </ButtonTouchableOpacity>
  );
};

const ButtonTouchableOpacity = styled(TouchableOpacity)`
 gap: 10px;
`;

const CompanyCard = styled.View`
  border-radius: 10px;
  align-items: center;
`;

const CompanyImage = styled.Image`
  width: 58px;
  height: 58px; 
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
