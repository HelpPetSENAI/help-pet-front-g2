import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--clr-green-500);
`;

export const MainContent = styled.main`
    border-radius: 30px 30px 0 0;
    border: 2px solid var(--clr-green-1000, #061407);
    background: var(--crl-neutral-100, #FFF);
`;

export const TitleH1 = styled.h1`
    color: var(--crl-green-1000, #061407);
    font-family: var(--primary-font);
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 40px */
`;

export const TitleH2 = styled.h2`
    color: #000;
    font-family: var(--main-font);
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const Form = styled.form`
    display: flex;
    max-width: 1080px;
    padding: 0 20px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    align-self: stretch;
`;

export const TextInput = styled.input`
    display: flex;
    height: 80px;
    padding: 12px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;

    border: 2px solid var(--crl-neutral-1000, #000);
    background: var(--crl-neutral-100, #FFF);
    box-shadow: 2px 2px 0 0 var(--crl-neutral-1000, #000);
`;

export const NumberInput = styled.input.attrs( {type: 'number'} )`
    
`;

export const ButtonWrapper = styled.div`

`;

export const PetCheckInput = styled.input `
    display: none;
`;

export const PetLabel = styled.label`
    display: inline-block;
    padding: 10px 20px;
    background-color: #f0f0f0;
    border: 2px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
    
`;

export const AgeWrapper = styled.div``;

export const WeightWrapper = styled.div``;

export const GenderWrapper = styled.div``;

export const AddressWrapper = styled.div``;

