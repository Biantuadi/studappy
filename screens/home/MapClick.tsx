import styled from "styled-components/native";
import ImgMap from "../../assets/images/map_1.png";

export default function MapClick() {
  return (
    <ContainerBgImage>
      <BgImage source={ImgMap as any} />
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
