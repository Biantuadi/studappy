import React, { useState, useCallback } from "react";
import styled from "styled-components/native";
import { FlatList, Dimensions, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { mainTheme } from "../../theme/main.theme";
import BannerPublicity from "./BannerPublicity";
import { marketPlace, marques, tech } from "../../data/fakeDatasE-shop";
import CompanyItem from "./CompanyCard";
import BackButton from "../../components/BackButton";
import { StatusBar } from "expo-status-bar";
import AlertCopyCode from "../../components/AlertCopyCode";
import FastImage from 'react-native-fast-image';

const screenWidth = Dimensions.get("window").width;
const numColumns = 5;
const itemWidth = screenWidth / numColumns - 19;

const types = [
  {
    name: "Marques",
    emoji: "👟",
    animatedEmoji:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Running%20Shoe.png",
  },
  {
    name: "MarketPlace",
    emoji: "🛒",
    animatedEmoji:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Shopping%20Cart.png",
  },
  {
    name: "Tech",
    emoji: "💻",
    animatedEmoji:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Laptop.png",
  },
];

export default function EshopScreen() {
  const [selectedType, setSelectedType] = useState(0);

  const handleSelect = useCallback((index: number) => {
    setSelectedType(index);
  }, []);

  const getCompanies = useCallback(() => {
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
  }, [selectedType]);

  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState({});
  

  const onPressCard = (item: any) => {
    setItem(item);
    setVisible(true);
  };

  const closeAlert = () => {
    setVisible(false);
  }

  const renderCompanyItem = useCallback(
    ({ item }: any) => (
      <>
        <CompanyItem
          imageUri={item.image}
          companyName={item.name}
          pourcent={item.promotionPourcent}
          isBorder={item.border && item.border}
          style={{
            width: itemWidth,
            margin: 18,
            marginLeft: 0,
            marginTop: 0,
          }}
          onPressCard={() => onPressCard(item)}
        />

      
      </>
    ),
    []
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: mainTheme.colors.white }}>
      <EshopContainer>
        <StatusBar style="auto" />
        <Header>
          <BackButton
            styleBackButton={{ marginTop: 0, marginLeft: 0, marginBottom: 10 }}
          />
          <Greeting>Votre</Greeting>
          <HeartContainer>
            <Greeting>Coup de cœur</Greeting>
            <HeartIcon
              source={{
                uri: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beating%20Heart.png",
              }}
            />
          </HeartContainer>
        </Header>

        <SearchContainer>
          <SearchInput placeholder="Trouver une marque" />
          <SearchIcon
            source={{
              uri: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Magnifying%20Glass%20Tilted%20Left.png",
            }}
          />
        </SearchContainer>

        <TypeContainer>
          {types.map((type, index) => (
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
        </TypeContainer>

        <FlatList
          ListHeaderComponent={
            <>
              <BannerPublicityContainer>
                <BannerPublicity />
              </BannerPublicityContainer>

              <PopularContainer>
                <PopularTitle>Les plus populaires</PopularTitle>
                <PopularIcon
                  source={{ uri: types[selectedType].animatedEmoji }}
                />
              </PopularContainer>
            </>
          }
          data={getCompanies()}
          renderItem={renderCompanyItem}
          keyExtractor={(item, index) => `${index}`}
          numColumns={numColumns}
          showsVerticalScrollIndicator={false}
          bounces={true}
          style={{
            marginTop: 25,
            paddingTop: 10,
          }}
        />
      </EshopContainer>
      <AlertCopyCode 
          visible={visible} 
          onRequestClose={closeAlert}
          item={item}

         />
    </SafeAreaView>
  );
}

const EshopContainer = styled.View`
  flex: 1;
  padding: 11px;
  padding-top: 15px;
  position: relative;
`;

const Header = styled.View`
  width: 100%;
`;

const Greeting = styled.Text`
  font-size: 27px;
  font-weight: bold;
`;

const HeartContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const HeartIcon = styled.Image`
  width: 35px;
  height: 35px;
`;

const SearchContainer = styled.View`
  width: 97%;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 23px;
  margin-bottom: 4px;
`;

const SearchInput = styled.TextInput`
  flex: 1;
  padding: 10px;
  border-radius: 7px;
  border: 0.5px solid rgb(209, 213, 219);
  font-size: 15px;
`;

const SearchIcon = styled.Image`
  width: 30px;
  height: 30px;
`;

const TypeContainer = styled.View`
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
  background-color: ${({ selected }) =>
    selected ? mainTheme.colors.primary : mainTheme.colors.white};
`;

const TypeText = styled.Text<{ selected: boolean }>`
  font-size: 13px;
  color: ${({ selected }) =>
    selected ? mainTheme.colors.white : mainTheme.colors.primary};
`;

const BannerPublicityContainer = styled.View`
  align-items: center;
  margin-top: 10px;
  margin-bottom: 50px;
`;

const PopularContainer = styled.View`
  margin-bottom: 30px;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  gap: 7px;
`;

const PopularTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const PopularIcon = styled.Image`
  width: 25px;
  height: 25px;
`;
