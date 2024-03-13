import { Image, View } from "react-native";
import styled from "styled-components/native";
import { mainTheme } from "../../theme/main.theme";
import Food from "../../assets/icons/icon_repas.png";
import CoupeClassique from "../../assets/icons/barbershop.png";
import Gym from "../../assets/icons/gym.png";
import Courses from "../../assets/icons/les_courses.png";
import Magazin from "../../assets/icons/magazin.png";
import Cinema from "../../assets/icons/cinema.png";
import { useNavigation } from "@react-navigation/native";
import CardCategory from "../../components/CardCategory";
import { StatusBar } from "expo-status-bar";
import Apart from "../../assets/icons/apart.png";

export default function BonsPlansScreen() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleCategorySelect = (category: string) => {
    navigation.navigate("Map", { category } as any);
  };
  
  return (
    <BonsPlansScreenContainer>
      <AbsoluteBackButton onPress={handleGoBack}>
        <Image
          source={{
            uri: "https://img.icons8.com/ios-glyphs/90/000000/circled-left-2.png",
          }}
          style={{ width: 32, height: 32 }}
        />
      </AbsoluteBackButton>
      
      <View>
        <TextAcroche>Choisissez une</TextAcroche>
        <TextAcroche>catégorie</TextAcroche>
      </View>

      <CardsContainer>
        <CardCategory title="Repas" image={Food} onPress={() => handleCategorySelect("Repas")} />
        <CardCategory title="Courses" image={Courses} onPress={() => handleCategorySelect("Courses")} />
        <CardCategory title="Coiffures" image={CoupeClassique} onPress={() => handleCategorySelect("Coiffures")} />
        <CardCategory title="Gym" image={Gym} onPress={() => handleCategorySelect("Gyms")} />
        <CardCategory title="Cinema" image={Cinema} onPress={() => handleCategorySelect("Cinémas")} />
        <CardCategory title="Magasins" image={Magazin} onPress={() => handleCategorySelect("Magasins")} />
        <CardCategory title="Logements" image={Apart} onPress={() => handleCategorySelect("Logements")} />
      </CardsContainer>
      <StatusBar style="auto" backgroundColor={mainTheme.colors.white}  />
    </BonsPlansScreenContainer>
  );
}

const BonsPlansScreenContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${mainTheme.colors.white};
  padding-top: 50px;
  gap: 15px;
`;

const TextAcroche = styled.Text`
  font-size: 30px;
  font-weight: bold;
  padding: 0 20px;
`;

const CardsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;
  margin-top: 20px;
  padding: 0 20px;
  background-color: ${mainTheme.colors.white};
`;

const AbsoluteBackButton = styled.TouchableOpacity`
  z-index: 10;
  padding: 0 0 0 15px;
`;
