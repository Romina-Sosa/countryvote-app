import { NAVBAR_CONTENT } from "../../utils/constans";
import logo from "../../assets/logo.svg";
import vector from "../../assets/vector.svg";
import {
  StyledNavbarContainer,
  StyledNavbarLogo,
  StyledNavbarLoopstudio,
  StyledNavbarChallenge,
} from "./styles/NavbarStyles";

const NavbarContainer = () => {
  return (
    <StyledNavbarContainer>
      <StyledNavbarLogo>
        <img src={logo} alt="Logo" />
      </StyledNavbarLogo>
      <StyledNavbarLoopstudio>
        {NAVBAR_CONTENT.COMPANY_NAME}
      </StyledNavbarLoopstudio>
      <img src={vector} alt="vector" />
      <StyledNavbarChallenge>
        {NAVBAR_CONTENT.CHALLENGE_NAME}
      </StyledNavbarChallenge>
    </StyledNavbarContainer>
  );
};

export default NavbarContainer;
