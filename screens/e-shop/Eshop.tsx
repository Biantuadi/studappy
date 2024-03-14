import React, { useState } from "react";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { mainTheme } from "../../theme/main.theme";

interface Type {
  name: string;
  emoji: string;
}

export default function EshopScreen() {
  const [selectedType, setSelectedType] = useState<number>(0);

  const types: Type[] = [
    { name: "Marques", emoji: "👟" },
    { name: "MarketPlace", emoji: "🛒" },
    { name: "Tech", emoji: "💻" },
  ];

  const handleSelect = (index: number) => {
    setSelectedType(index);
  };

  return (
    <EshopContainer>
      <StatusBar style="auto" />
      <HeaderEshop>
        <GreetingText>Votre</GreetingText>
        <GreetingText>coup de cœur</GreetingText>
      </HeaderEshop>

      <ContainerPub>
        <BannerPublicity>
        
          </BannerPublicity>
      </ContainerPub>

      <ContainerRowTypes>
        {types.map((type: Type, index: number) => (
          <TypeCard
            key={index}
            onPress={() => handleSelect(index)}
            selected={selectedType === index}
            activeOpacity={0.8}
          >
            <TypeText selected={selectedType === index}>
              {type.emoji} {type.name}
            </TypeText>
          </TypeCard>
        ))}
      </ContainerRowTypes>
    </EshopContainer>
  );
}

const EshopContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${mainTheme.colors.white};
  padding: 10px;
  padding-top: 50px;
`;

const HeaderEshop = styled.View`
  width: 100%;
`;

const GreetingText = styled.Text`
  font-size: 27px;
  font-weight: bold;
`;

const ContainerRowTypes = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
`;

const TypeCard = styled.TouchableOpacity<{ selected: boolean }>`
  justify-content: center;
  align-items: center;
  border: 0.5px solid rgb(209, 213, 219);
  border-radius: 7px;
  padding: 8px 12px;
  background-color: ${(props) =>
    props.selected ? mainTheme.colors.primary : mainTheme.colors.white};
`;

const TypeText = styled.Text<{ selected: boolean }>`
  font-size: 13px;
  color: ${(props) =>
    props.selected ? mainTheme.colors.white : mainTheme.colors.primary};
`;

const BannerPublicity = styled.View`
  width: 95%;
  height: 170px;
  background-color: ${mainTheme.colors.primaryLighten};
  border-radius: 20px;
  `;

const ContainerPub = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 35px;
`;