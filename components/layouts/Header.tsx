import CircleAvatar from "../CircleAvatar";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from "styled-components/native";


export default function Header() {
  return (
    <HeaderContainer>
      <ProfilInfoCOntainer>
        <CircleAvatar image={{ uri: "https://picsum.photos/200" }} size={40} />
        <ContainerTexts>
          <TitleText>Welcome back!</TitleText>
          <Name>John Doe</Name>
        </ContainerTexts>
      </ProfilInfoCOntainer>

      <NotificationContainer>
          <Ionicons name="notifications" size={24} color="#A7ADB7DD" />
      </NotificationContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* padding: 20px 10px; */
  /* padding-top: 30px; */

  
  `;

const ProfilInfoCOntainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 18px;
  padding: 6px 8px;
  gap: 10px;
  background-color: #3C3F46;
  width: 175.474px;

`;

const ContainerTexts = styled.View`
  /* margin-left: 10px; */
`;

const TitleText = styled.Text`
  font-size: 13px;
  color: #A7ADB7;
`;

const Name = styled.Text`
  font-size: 13px;
  color: #fff;
`;

const NotificationContainer = styled.View`
  padding: 12px;
  background-color: #3C3F46;
  border-radius: 17px;
`;