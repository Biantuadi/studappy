import React from 'react';
import { Image, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { mainTheme } from '../../../theme/main.theme';
import Swiper from 'react-native-swiper';
import { StyleSheet } from 'react-native';
import capitalizeFirstLetter from '../../../utils/main.utils';

export default function ListComponent({category, data }: any) {
  return (
    <ListComponentStyled
      showsVerticalScrollIndicator={false}
    >
      {data.map((item: any, key: any) => (
        <ContainerCard key={key}>
          <ContainerCaroussel>
            <Swiper
              style={styles.wrapper}
              showsButtons={false}
              loop={true}
              dot={<View style={styles.dot} />}
              activeDot={<View style={styles.activeDot} />}
              paginationStyle={styles.pagination}
            >
              {item.images.map((bgImage: any, index: any) => (
                <ImageStyled
                  key={index} // Ajout de la clé unique
                  source={{ uri: bgImage }}
                />
              ))}
            </Swiper>
          </ContainerCaroussel>
          <ContainerTexts>
            <TextTitle>
              {category === "Logements" ? capitalizeFirstLetter(item.city + ", " + item.country) : item.name}

            </TextTitle>
            <Text>
              Lorem ipsum dolor sit amet, consectetur.
            </Text>
          </ContainerTexts>
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
`;

const ContainerCard = styled.View`
  background-color: ${mainTheme.colors.white};
  border-radius: 10px;
  margin: 20px;
  width: 90%;
  ${mainTheme.platformShadow(2)};
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

const ContainerTexts = styled.View`
  padding: 20px;
  padding-top: 0;
`;

const TextTitle = styled.Text`
  font-size: 17px;
  color: black;
  font-weight: bold;
  text-transform: capitalize;
`;

const styles = StyleSheet.create({
  wrapper: {
    height: 220,
    borderRadius: 10,
  },
  dot: {
    backgroundColor: 'rgba(255, 255, 255, 0.337)', // Couleur du point inactif
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  activeDot: {
    backgroundColor: '#fff', // Couleur du point actif
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
