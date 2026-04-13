import * as S from "./style.js";
import HelpPetLogo from "../../assets/images/HelpPetLogo.jsx";
import LeftArrowIcon from "../../assets/icons/left-arrow-vector.svg"

function Header() {

    return (
        <S.PetHeader>
            <S.LogoContainer>
                <HelpPetLogo />
                <S.LogoText>HelpPet</S.LogoText>
            </S.LogoContainer>
            <img src={LeftArrowIcon} alt="arrow-left"/>
        </S.PetHeader>
    );
}

export default Header;