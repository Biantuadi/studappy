import React from 'react'
import styled from 'styled-components/native';
import { mainTheme } from '../../../theme/main.theme';

type CardSuggestionProps = {
    image: string;
    title: string;
    subtitle: string;
    titleRequis: string;
    price: number;
    onPress?: () => void;

    
}

export default function CardSuggestion( {image, title, subtitle, titleRequis, price, onPress}: CardSuggestionProps) {
  return (
    <CardSuggestionStyled activeOpacity={0.8} onPress={onPress}>
        <CardImage
          source={{
            uri: image,
          }}
        />

        <CardText>
          <CardTextTitle>
            {title}
          </CardTextTitle>
          <CardTextSubTitle>
            {subtitle}
          </CardTextSubTitle>
          <CardTextSubTitle3>
            {titleRequis}
          </CardTextSubTitle3>
        </CardText>

          <CardPriceText>
            {price}€
          </CardPriceText>
      </CardSuggestionStyled>
  )
}


const CardSuggestionStyled = styled.TouchableOpacity`
  /* background-color: ${mainTheme.colors.white}; */
  border-radius: 10px;
  margin-top: 20px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  border: 1px solid rgb(238, 240, 243);
`;

const CardImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 10px;
`;

const CardText = styled.View`
  margin-left: 10px;
`;

const CardTextTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

const CardTextSubTitle = styled.Text`
  font-size: 14px;
  color: ${mainTheme.colors.gray};
`;

const CardTextSubTitle3 = styled.Text`
  font-size: 14px;
  color: ${mainTheme.colors.black};
  margin-top: 5px;
  font-weight: bold;
`;

const CardPriceText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-left: auto;
`;