import CircleAvatar from "../CircleAvatar";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from "styled-components/native";


export default function Header() {
  return (
    <HeaderContainer>
      <ProfilInfoCOntainer>
        <CircleAvatar image={{ uri: "https://picsum.photos/200" }} size={50} />
        <ContainerTexts>
          <TitleText>Welcome back!</TitleText>
          <Name>John Doe</Name>
        </ContainerTexts>
      </ProfilInfoCOntainer>

      <NotificationContainer>
          <Ionicons name="notifications" size={24} color="black" />
      </NotificationContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
`;

const ProfilInfoCOntainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ContainerTexts = styled.View`
  margin-left: 10px;
`;

const TitleText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const Name = styled.Text`
  font-size: 16px;
  color: #666666;
`;

const NotificationContainer = styled.View`
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 10px;
`;