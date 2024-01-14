import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";

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
  margin-right: 20px;
  ${Platform.OS === "android"
    ? `elevation: 3; background-color: #fff;`
    : `
       shadowColor: #000;
       shadowOffset: { width: 0, height: 0 };
       shadowOpacity: 0.2;
       shadowRadius: 10px;
    `}
`;

const MenuMapCardImage = styled.Image`
  width: 24px;
  height: 24px;
`;

const MenuMapCardText = styled.Text`
  font-size: 16px;
  margin-left: 8px;
`;
