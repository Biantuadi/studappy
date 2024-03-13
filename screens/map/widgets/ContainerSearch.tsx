import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { mainTheme } from "../../../theme/main.theme";

interface ContainerSearchProps {
  category: any;
}

export default function ContainerSearch( { category }: ContainerSearchProps) {

  const renderCategoryTextAndEmoji = (category: any) => {
    switch (category) {
      case "Repas":
        return "Repas 🍛";
      case "Courses":
        return "Courses 🛒";
      case "Cinémas":
        return "Cinémas 🎬";
      case "Gyms":
        return "Gyms 💪";
      case "Coiffures":
        return "Barbers 💈";
      case "Logements":
        return "Logements 🏠";
      case "Magasins":
        return "Vêtements 👕";
      default:
        return "Repas 🍛";
    }
  }
  
  return (
    <>
      <ContainerSearchStyled>
        {/* <IoIosSearch /> */}
        <Ionicons name="search" size={20} color={mainTheme.colors.colorTest} />
        <ContainerText>
          <ContainerSubTitle>
            {/* <Title>Repas</Title>
              <MedianCircle>•</MedianCircle> */}
            <Title>Autour de moi</Title>
          </ContainerSubTitle>

          {/* <TextTime>À tout moment</TextTime> */}
          <TextTime>
            {renderCategoryTextAndEmoji(category)}
          </TextTime>
        </ContainerText>

        {/* icon update field*/}
        <Ionicons name="create-outline" size={20} color={"#869098"} />
      </ContainerSearchStyled>
    </>
  );
}

const ContainerSearchStyled = styled.View`
  font-size: 1rem;
  font-weight: 400;
  cursor: text;
  background-color: rgb(255, 255, 255);
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 85%;
  border-radius: 8px;
  padding: 8px 35px;
  border: 0.3px solid rgb(209, 213, 219);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const ContainerSubTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ContainerText = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 0px 0px 15px;
  width: 100%;
`;

const Title = styled.Text`
  font-weight: 500;
  font-size: 16px;
`;

const MedianCircle = styled.Text`
  font-size: 20px;
  color: #869098;
  margin: 0px 3px;
`;

const TextTime = styled.Text`
  font-size: 14px;
  color: #869098;
`;
