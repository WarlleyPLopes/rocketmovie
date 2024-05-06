import styled from "styled-components";

export const Container = styled.div`
> section{
    max-width: 1366px;
    margin: 50px auto 0;

    
    .title {
        display: flex;
        justify-content: space-between;
        margin-top: 48px;
        margin-bottom: 45px; 

        h1 {
            font-size: 32px;
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
        
        button {
            display: flex;
            align-items: center;
            border-radius: 8px;
            border: none;
            padding: 16px 32px;
            gap: 8px;

            background-color: ${({theme}) => theme.COLORS.PINK};;
            color: ${({theme}) => theme.COLORS.BLACK};
        }
    }

}
`;

export const Content = styled.div`
`;

export const Line = styled.div`
width: 100%;
height: 1px;
background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
`