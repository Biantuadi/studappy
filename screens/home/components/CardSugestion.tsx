import React from 'react'
import styled from 'styled-components/native';

type CardSuggestionProps = {
    image: string;
    title: string;
    subtitle: string;
    titleRequis: string;
    price: number;

    
}

export default function CardSuggestion( {image, title, subtitle, titleRequis, price}: CardSuggestionProps) {
  return (
    <CardSuggestionStyled>
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
          <CardTextTitle>
            {titleRequis}
          </CardTextTitle>
        </CardText>

          <CardPriceText>
            {price}€
          </CardPriceText>
      </CardSuggestionStyled>
  )
}


const CardSuggestionStyled = styled.View`
  background-color: #fff;
  border-radius: 10px;
  margin-top: 20px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
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
  color: #a4a4a4;
`;

const CardPriceText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-left: auto;
`;