import CircleAvatar from "../CircleAvatar";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from "styled-components/native";
import Avatar from "../../assets/profile.jpg";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();

  const navigateToProfile = () => navigation.navigate('Profile' as never);
  return (
    <HeaderContainer>
      <ProfilInfoCOntainer activeOpacity={0.7} onPress={navigateToProfile}>
        <CircleAvatar image={Avatar as any} size={40} />
        <ContainerTexts>
          <TitleText>Welcome back!</TitleText>
          <Name>Kevin Biant.</Name>
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
`;

const ProfilInfoCOntainer = styled.TouchableOpacity`
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