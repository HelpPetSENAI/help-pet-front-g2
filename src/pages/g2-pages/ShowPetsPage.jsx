import Header from "./components/pet-header/Header.jsx";
import * as S from "./style.js";
import DonationCard from "./components/donation-card/DonationCard.jsx";

function RegisterPetPage() {

    return (
        <S.Container>
            <Header/>

            <S.MainContent>
                <DonationCard name="Caliça" breed="Pastora" size="Grandi" url="https://waggys.pet/cdn/shop/articles/pastor_aleman.webp?v=1770167508"/>
            </S.MainContent>
        </S.Container>
    );
}

export default RegisterPetPage