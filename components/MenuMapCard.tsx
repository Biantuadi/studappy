import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";

type MenuMapCardProps = {
  image: any;
  text: string;
};

export default function MenuMapCard({ image, text }: MenuMapCardProps) {
  return (
    <MenuMapCardStyled>
      <MenuMapCardImage source={image as any} />
      <MenuMapCardText>{text}</MenuMapCardText>
    </MenuMapCardStyled>
  );
}

const MenuMapCardStyled = styled.View`
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
  /* font-weight: bold; */
  margin-left: 8px;
`;
