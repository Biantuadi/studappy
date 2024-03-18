import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { mainTheme } from "../theme/main.theme";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

interface BackButtonProps {
  styleBackButton?: any;
}

export default function BackButton( {styleBackButton}: BackButtonProps) {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <AbsoluteBackButton onPress={handleGoBack} style={styleBackButton}>
      <Ionicons name="arrow-back" size={24} color={mainTheme.colors.primary} />
    </AbsoluteBackButton>
  );
}

const AbsoluteBackButton = styled.TouchableOpacity`
  border-radius: 30px;
  border: 1px solid ${mainTheme.colors.primary};
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
    margin-top: 15px;
`;
