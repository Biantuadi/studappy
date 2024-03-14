import React, { useState } from "react";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { mainTheme } from "../../theme/main.theme";
import BannerPublicity from "./BannerPublicity";
import { marketPlace, marques, tech } from "../../data/fakeDatasE-shop";
import CompanyItem from "./CompanyCard";
import BackButton from "../../components/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, View } from "react-native";
// import Fire from "../../assets/Fire.png" 

interface Type {
  name: string;
  emoji: string;
  animatedEmoji: string;
}

export default function EshopScreen() {
  const [selectedType, setSelectedType] = useState<number>(0);

  const types: Type[] = [
    {
      name: "Marques",
      emoji: "👟",
      animatedEmoji:
        "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Running%20Shoe.png",
    },
    { name: "MarketPlace", emoji: "🛒", 
    animatedEmoji: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Shopping%20Cart.png"
 },
    { name: "Tech", emoji: "💻", animatedEmoji: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Laptop.png" },
  ];

  const handleSelect = (index: number) => {
    setSelectedType(index);
  };

  const getCompanies = () => {
    switch (selectedType) {
      case 0:
        return marques;
      case 1:
        return marketPlace;
      case 2:
        return tech;
      default:
        return [];
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: mainTheme.colors.white }}>
      <EshopContainer>
        <StatusBar style="auto" />
        <HeaderEshop>
          <BackButton
            styleBackButton={{ marginTop: 0, marginLeft: 0, marginBottom: 7 }}
          />
          <GreetingText>Votre</GreetingText>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <GreetingText>Coup de cœur</GreetingText>
            <Image
              source={{
                uri: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beating%20Heart.png",
              }}
              style={{ width: 30, height: 30 }}
            />
          </View>
        </HeaderEshop>

        {/* Section des types */}
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

        {/* Bannière publicitaire */}
        <BannerContainerCarousel>
          <BannerPublicity />
        </BannerContainerCarousel>

        {/* Section des entreprises */}
        <SectionCompanies>
          <View style={{ flexDirection: "row", alignItems: "center",  gap: 7 }}>
            <CompaniesTitle>
              Les populaires
            </CompaniesTitle>
            <Image
              source={{
                uri : types[selectedType].animatedEmoji
              }}
              style={{ width: 25, height: 25 }}
            />
          </View>

          <CompaniesContainer>
            {getCompanies().map((company, index) => (
              <CompanyItem
                key={index}
                imageUri={company.image}
                companyName={company.name}
                pourcent={company.promotionPourcent}
              />
            ))}
          </CompaniesContainer>
        </SectionCompanies>
      </EshopContainer>
    </SafeAreaView>
  );
}

const EshopContainer = styled.ScrollView`
  flex: 1;
  /* background-color: ${mainTheme.colors.white}; */
  padding: 11px;
  padding-top: 15px;
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
  margin-top: 25px;
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

const BannerContainerCarousel = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: 25px;
  gap: 10px;
`;

const SectionCompanies = styled.View`
  width: 100%;
  gap: 20px;
  margin-top: 40px;
  align-self: flex-end;
  
`;

const CompaniesTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const CompaniesContainer = styled.View`
  flex-direction: row;
  gap: 30px;
  margin-top: 20px;
  flex-wrap: wrap;
`;
