import Header from "./components/pet-header/Header.jsx";
import * as S from "./style.js";
import DonationCard from "./components/donation-card/DonationCard.jsx";
import axios from "axios";
import {useEffect} from "react";

function ShowPetPage() {

    const token = "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ0ZXN0ZUBleGVtcGxvLmNvbSIsInVzZXJJZCI6MiwiaWF0IjoxNzc5MDU2NjYxLCJleHAiOjE3NzkwNjAyNjF9.0SduykTfyQqTFnG9jXGv_BiaPYhZ52bO3bgZiws696Er6Y9e7GMIKtaMIon0KnuE";

    useEffect(() => {
        axios.get("http://localhost:8080/donations/viewAll", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response);
            });
    }, []);

    return (
        <S.Container>
            <Header/>
            <S.MainContent>
                <DonationCard
                    specie="DOG"
                    name="Caliça"
                    breed="Pastora"
                    size="Grandi"
                    url="https://waggys.pet/cdn/shop/articles/pastor_aleman.webp?v=1770167508"
                />
            </S.MainContent>
        </S.Container>
    );
}

export default ShowPetPage