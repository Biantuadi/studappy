import styled from "styled-components/native";
import ImgMap from "../../../assets/images/map_1.png";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import Shape from "../../../assets/images/shape.png";
import { Image } from "react-native";
import MyPositionAnim from "./MyPositionAnim";

export default function MapClick() {
  return (
    <ContainerBgImage>
      <BgImage source={ImgMap as any} />
      <AllPositionContainer>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <PositionCard>
            {/* icon map */}
            <Ionicons
              name="location"
              size={24}
              color="#A7ADB7"
              style={{
                backgroundColor: "#fff",
                borderRadius: 30,
                width: 40,
                height: 40,
                textAlign: "center",
                textAlignVertical: "center",
              }}
            />
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
        </View>

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

const ContainerPosition = styled.View`
  justify-content: center;
  align-items: center;
  background: rgba(3, 34, 80, 0.2);
  border-radius: 50px;
  width: 50px;
  height: 50px;
`;

const Dot = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  border: 2px solid #fff;
  background-color: #1d1f24;
`;
