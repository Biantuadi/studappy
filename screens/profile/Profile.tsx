import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { mainTheme } from "../../theme/main.theme";

export default function ProfileScreen() {
  return (
    <ContanerProfile>
      {/* <StatusBar style="auto" backgroundColor={mainTheme.colors.white} /> */}
    </ContanerProfile>
  );
}

const ContanerProfile = styled.SafeAreaView`
  flex: 1;
  background-color: ${mainTheme.colors.white};
  padding-top: 50px;
  gap: 15px;
`;
