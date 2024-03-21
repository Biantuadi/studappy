import { mainTheme } from "../../../../theme/main.theme";
import styled from "styled-components/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-swiper";
import { Ionicons } from "@expo/vector-icons";
import capitalizeFirstLetter, { cutText } from "../../../../utils/main.utils";

export default function Logements({ item }: any) {
    const handleLike = (id: any) => {
        console.log("Like", id);
        
    
    };
  return (
    <>
      <ContainerCaroussel>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          loop={true}
        //   autoplay 
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
          paginationStyle={styles.pagination}
        >
          {item.images.map((bgImage: any, index: any) => (
            <ContainerImageAndHeart key={index}>
              <ImageStyled
                // Ajout de la clé unique
                source={{ uri: bgImage }}
              />
              <TouchableOpacity
                onPress={() => handleLike(item.id)}
                style={{ position: "absolute", top: 10, right: 10 }}
                activeOpacity={0.8}
              >
                <Ionicons
                  name="heart"
                  size={30}
                  color={
                    item.Liked
                      ? mainTheme.colors.primary
                      : mainTheme.colors.white
                  }
                />
              </TouchableOpacity>
            </ContainerImageAndHeart>
          ))}
        </Swiper>
      </ContainerCaroussel>
      <ContainerTexts onPress={() => console.log("Go to details")} activeOpacity={0.3}>
        <ContainerRowTextTitle>
          <TextTitle>
            {capitalizeFirstLetter(item.city + ", " + item.country)
              }
          </TextTitle>
          <Rating>
            <Ionicons name="star" size={15} color={mainTheme.colors.primary} />
            <Text>5,0</Text>
          </Rating>
        </ContainerRowTextTitle>
        <Text>{item.description && cutText(item.description, 42)}</Text>
        <TextPrice>{item.price && "€" + item.price}</TextPrice>
      </ContainerTexts>
    </>
  );
}

const ContainerCard = styled.View`
  background-color: ${mainTheme.colors.white};
  border-radius: 10px;
  margin: 20px;
  width: 90%;
  ${mainTheme.platformShadow(2)};
  margin-bottom: 40px;
  margin-top: 0;
`;

const ContainerCaroussel = styled.View`
  height: 220px;
  border-radius: 10px 10px 0 0;
`;

const ImageStyled = styled.Image`
  width: 100%;
  height: 90%;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`;

const ContainerTexts = styled.TouchableOpacity`
  padding: 20px;
  padding-top: 0;
`;

const ContainerImageAndHeart = styled.View`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ContainerRowTextTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const TextTitle = styled.Text`
  font-size: 17px;
  color: black;
  font-weight: bold;
  text-transform: capitalize;
`;

const Rating = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 3px;
`;

const TextPrice = styled.Text`
  font-size: 15px;
  color: ${mainTheme.colors.primary};
  font-weight: bold;
  margin-top: 10px;
`;

const styles = StyleSheet.create({
  wrapper: {
    height: 220,
    borderRadius: 10,
  },
  dot: {
    backgroundColor: "rgba(255, 255, 255, 0.337)", // Couleur du point inactif
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  activeDot: {
    backgroundColor: "#fff", // Couleur du point actif
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  pagination: {
    bottom: 35, // Ajuster la position verticale des points si nécessaire
  },
});
