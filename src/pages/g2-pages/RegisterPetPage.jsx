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
                    <S.TextInput />

                    <S.TitleH2>O que ele é</S.TitleH2>
                    <S.ButtonWrapper>
                        <S.PetCheckInput/>
                        <S.PetLabel>Cachorro</S.PetLabel>
                        <S.PetCheckInput/>
                        <S.PetLabel>Gato</S.PetLabel>
                        <S.PetCheckInput/>
                        <S.PetLabel>Passaro</S.PetLabel>
                        <S.PetCheckInput/>
                        <S.PetLabel>Peixe</S.PetLabel>
                        <S.PetCheckInput/>
                        <S.PetLabel>Roedor</S.PetLabel>
                        <S.PetCheckInput/>
                        <S.PetLabel>Réptil</S.PetLabel>
                        <S.PetCheckInput/>
                        <S.PetLabel>Anfíbio</S.PetLabel>
                        <S.PetCheckInput/>
                        <S.PetLabel>Aracnídeo</S.PetLabel>
                        <S.PetCheckInput/>
                        <S.PetLabel>Cnidário</S.PetLabel>
                    </S.ButtonWrapper>

                    <S.TitleH2>Qual a raça? (se souber)</S.TitleH2>
                    <S.TextInput />

                    <S.AgeWrapper>
                        <S.TitleH2>Qual a idade?</S.TitleH2>
                        <p>Anos:</p> <S.NumberInput/>
                        <p>Meses:</p> <S.NumberInput/>
                    </S.AgeWrapper>

                    <S.TitleH2>Adicione fotos do pet</S.TitleH2>

                    <S.TitleH2>Tamanho:</S.TitleH2>
                    <S.WeightWrapper>
                        <S.PetLabel>Pequeno</S.PetLabel>
                        <S.PetCheckInput/>
                        <S.PetLabel>Médio</S.PetLabel>
                        <S.PetCheckInput/>
                        <S.PetLabel>Grande</S.PetLabel>
                    </S.WeightWrapper>

                    <S.TitleH2>Qual o peso?</S.TitleH2>
                    <S.NumberInput /> <p>(em kg)</p>

                    <S.TitleH2>Qual o sexo?</S.TitleH2>
                    <S.GenderWrapper>
                        <S.PetCheckInput/>
                        <S.PetLabel>Macho</S.PetLabel>
                        <S.PetCheckInput/>
                        <S.PetLabel>Fêmea</S.PetLabel>
                    </S.GenderWrapper>

                    <S.TitleH2>Descrição do Pet:</S.TitleH2>
                    <S.TextInput />

                    <S.TitleH2>Digite o CEP:</S.TitleH2>
                    <S.AddressWrapper>
                        <S.TextInput/>
                        <button>Verificar</button>
                    </S.AddressWrapper>

                </S.Form>
            </S.MainContent>
        </S.Container>
    );
}

export default RegisterPetPage;