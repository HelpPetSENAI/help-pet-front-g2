import styled from 'styled-components';

export const Container = styled.div`
    
`;

export const MainContent = styled.main`
    border-radius: 30px 30px 0 0;
    border: 2px solid var(--clr-green-1000, #061407);
    background: var(--crl-neutral-100, #FFF);
`;

export const FormTitle = styled.h1`
    color: var(--crl-green-1000, #061407);
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 40px */
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