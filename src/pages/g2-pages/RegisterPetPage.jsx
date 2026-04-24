import Header from "./components/pet-header/Header.jsx";
import * as S from "./style.js";

function RegisterPetPage() {

    return (
        <S.Container>
            <Header />
            <S.MainContent>
                <S.TitleH1>Cadastrar uma nova doação</S.TitleH1>
                <S.Form>
                    <S.TitleH2>Como o bicho se chama</S.TitleH2>
                    <S.Input />
                    <S.TitleH2>O que ele é</S.TitleH2>
                </S.Form>
            </S.MainContent>
        </S.Container>
    );
}

export default RegisterPetPage;