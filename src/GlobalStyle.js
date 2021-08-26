import { createGlobalStyle } from 'styled-components';
// const means it wont change 
export const GlobalStyle = createGlobalStyle`
:root {
    --maxWidth:1280 px;
    --white: #fff;
    --lightGrey: #eee;
    --medGrey:#353535;
    --darkGrey:#1c1c1c;
    --fontSuperBid: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
}

*{
    box-sizing: border-box;
    font-family: 'Abel',sans-serif;
}

body{
    margin :0;
    padding:0;

    h1{
        font-size: 2rem;
        font-weight :600;
        color:var(--white);
    }
    h3{
        font-size: 1.1rem;
        font-weight: 600;
    }
    p{
        font-size: 1rem;
        color: var(--white);
    }
}
`;
