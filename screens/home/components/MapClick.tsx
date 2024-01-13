import styled from "styled-components/native";
import ImgMap from "../../../assets/images/map_1.png";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import Shape from "../../../assets/images/shape.png";
import { Image } from "react-native";
import MyPositionAnim from "./MyPositionAnim";

export default function MapClick({onPress}: {onPress?: () => void }) {
  return (
    <ContainerBgImage>
      <BgImage source={ImgMap as any} />
      <AllPositionContainer>
        <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }} onPress={onPress} activeOpacity={.8}>
          <PositionCard>
            <ContainerIcon>
            <Ionicons
              name="location"
              size={24}
              color="#A7ADB7"
            />
            </ContainerIcon>
            <PositionContainerText>
              <PositionText style={{ color: "#A7ADB7" }}>
                Appuyer pour
              </PositionText>
              <PositionText>Voir sur la carte</PositionText>
            </PositionContainerText>
          </PositionCard>
          {/* icon chevron bas solid noir */}
          {/* <Ionicons name="chevron-down" size={24} color="#000" /> */}
          <Image source={Shape as any} width={84} height={84} />
        </TouchableOpacity>

        <MyPositionAnim />
      </AllPositionContainer>
    </ContainerBgImage>
  );
}

const ContainerBgImage = styled.View`
  position: relative;
  align-self: center;
  margin-top: 30px;
`;

const BgImage = styled.Image`
  object-fit: contain;
  width: 360px;
  height: 181px;
`;

const AllPositionContainer = styled.View`
  position: absolute;
  top: 40px;
  right: -30px;
  width: 100%;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const PositionCard = styled.View`
  background-color: #1d1f24;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  width: 165px;
  height: 56px;
  padding: 0 0 0 10px;
`;

const PositionContainerText = styled.View`
  margin-left: 10px;
`;

const PositionText = styled.Text`
  font-size: 13px;
  color: #fff;
`;

const ContainerIcon = styled.View`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;
