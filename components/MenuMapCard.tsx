import React from "react";
import styled from "styled-components/native";
import { mainTheme } from "../theme/main.theme";

type MenuMapCardProps = {
  image: any;
  text: string;
  onPress?: () => void;
  active?: boolean;
};

export default function MenuMapCard({
  image,
  text,
  onPress,
  active,
}: MenuMapCardProps) {
  return (
    <MenuMapCardStyled
      activeOpacity={0.9}
      onPress={onPress}
      style={{ backgroundColor: active ? "#1d1c1b" : "#fff" }}
    >
      <MenuMapCardImage source={image as any} />
      <MenuMapCardText
        style={{
          color: active ? "#fff" : "#000",
        }}
      >
        {text}
      </MenuMapCardText>
    </MenuMapCardStyled>
  );
}

const MenuMapCardStyled = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 15px;
  padding: 7px 15px;
  flex-direction: row;
  align-items: center;
  margin: 5px 20px 5px 5px;

  ${mainTheme.platformShadow}
`;

const MenuMapCardImage = styled.Image`
  width: 24px;
  height: 24px;
`;

const MenuMapCardText = styled.Text`
  font-size: 16px;
  margin-left: 8px;
`;
