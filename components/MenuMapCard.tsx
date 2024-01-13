import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";

type MenuMapCardProps = {
  image: any;
  text: string;
  onTap?: () => void;
};

export default function MenuMapCard({ image, text, onTap }: MenuMapCardProps) {
  return (
    <MenuMapCardStyled onPress={onTap} activeOpacity={.9} style={onTap ? { backgroundColor: "#1d1c1b" } : {}}>
      <MenuMapCardImage source={image as any} />
      <MenuMapCardText style={onTap ? { color: "#fff" } : {}}
      >{text}</MenuMapCardText>
    </MenuMapCardStyled>
  );
}

const MenuMapCardStyled = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 15px;
  padding: 7px 15px;
  flex-direction: row;
  align-items: center;
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
