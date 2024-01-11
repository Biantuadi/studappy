import styled from "styled-components/native";
import Header from "../../components/layouts/Header";

export default function Home() {
  return (
    <HomeContainer>
      <SectionHeader>
        <Header />
      </SectionHeader>

      
    </HomeContainer>
  )
}

const HomeContainer = styled.View`
  flex: 1;
  background-color: #fff;
  gap: 20px;
`;

const SectionHeader = styled.View`
  background-color: #1D1C1B;
  padding: 10px 20px;
`;

