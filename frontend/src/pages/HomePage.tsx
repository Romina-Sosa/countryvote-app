import NavbarContainer from "../components/Navbar/NavbarContainer";
import VotesFormComponent from "../components/MainContainer";
import { HomePageStyled } from "./styles/HomePageStyles";

function HomePage() {
  return (
    <HomePageStyled>
      <NavbarContainer />
      <VotesFormComponent />
    </HomePageStyled>
  );
}

export default HomePage;
