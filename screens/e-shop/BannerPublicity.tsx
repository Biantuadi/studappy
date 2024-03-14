import React from "react";
import Carousel from "react-native-snap-carousel";
import { Image } from "react-native"; // Importez View depuis react-native
import styled from "styled-components/native";
import { mainTheme } from "../../theme/main.theme";



const images = [
  "https://as1.ftcdn.net/v2/jpg/03/03/85/64/1000_F_303856460_ZW2DnQgZv2BrpIpFCwh80qgYXv284SmT.jpg",
  "https://www.thegoodgoods.fr/wp-content/uploads/2023/05/asos-logo.jpeg",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adidas-logo-design-template-416e301e26d296a75536e1f323a013e0_screen.jpg?ts=1686456385",
  // Ajoutez ici les URL des autres bannières publicitaires
];

export default function BannerPublicity() {
  const renderItem = ({ item }: any) => (
    <ContainerPub>
      <BannerPublicityStyled>
        <Image
          source={{ uri: item }}
          style={{ width: "100%", height: "100%", borderRadius: 20 }}
        />
        <Overlay />
      </BannerPublicityStyled>
    </ContainerPub>
  );

  return (
    <Carousel
      data={images}
      renderItem={renderItem}
      sliderWidth={300}
      itemWidth={300}
      loop={true}
      autoplay={true}
      autoplayInterval={4000}
      inactiveSlideOpacity={1}
      inactiveSlideScale={1}
      containerCustomStyle={{ 
        marginBottom: 15, 
        padding: 4,
      }}
      animationOptions={{
        friction: 0.4,
        tension: 40,
        useNativeDriver: true,
      } as any}
      enableSnap={true}
      enableMomentum={true}
      shouldOptimizeUpdates={true}
    />
  );
}

const BannerPublicityStyled = styled.View`
  width: 97%;
  height: 200px;
  border-radius: 20px;
  position: relative;
  ${mainTheme.platformShadow(3)}
  margin-bottom: 15px;
  margin-top: 15px;
`;

const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.2); */
  border-radius: 20px;
`;

const ContainerPub = styled.View`
  width: 100%;
  align-items: center;
`;