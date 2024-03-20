import React from "react";
import styled from "styled-components/native";
import { mainTheme } from "../../../theme/main.theme";
import Logements from "./cards_categoies/Logements";
import { Text } from "react-native";

export default function ListComponent({ category, data }: any) {
  return (
    <ListComponentStyled showsVerticalScrollIndicator={false}>
      <Acroche>
        <Title>Retrouver les {category}</Title>
        <Title>disponibles dans votre région 📍</Title>
      </Acroche>
      {data.map((item: any, key: any) => (
        <ContainerCard key={key} activeOpacity={0.7}>
          {category === "Logements" && (
            <Logements item={item} category={category} />
          )}
        </ContainerCard>
      ))}
    </ListComponentStyled>
  );
}

const ListComponentStyled = styled.ScrollView`
  flex: 1;
  background-color: ${mainTheme.colors.white};
  margin-top: 45%;
  gap: 40px;
  padding-top: 20px;
  width: 100%;
`;

const Acroche = styled.View`
  margin-bottom: 30px;
  margin-left: 20px;
  gap: 2px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${mainTheme.colors.primary};
`;

const ContainerCard = styled.TouchableOpacity`
  background-color: ${mainTheme.colors.white};
  border-radius: 10px;
  margin: 20px;
  width: 90%;
  ${mainTheme.platformShadow(2)};
  margin-bottom: 40px;
  margin-top: 0;
`;
