import styled from "styled-components/native";

const BannerPublicityStyled = styled.Image`
  width: 97%;
  height: 200px;
  border-radius: 20px;
  position: relative;
`;

const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 1%.3;
  width: 97%;
  height: 100%;
  background: rgba(0, 0, 0, 0.27);
  border-radius: 20px;
`;

const ContainerPub = styled.View`
  width: 100%;
  align-items: center;
`;

export default function BannerPublicity() {
  return (
    <ContainerPub>
      <BannerPublicityStyled
        source={{
          uri: "https://as1.ftcdn.net/v2/jpg/03/03/85/64/1000_F_303856460_ZW2DnQgZv2BrpIpFCwh80qgYXv284SmT.jpg",
        }}
      />
      <Overlay />
    </ContainerPub>
  );
}
