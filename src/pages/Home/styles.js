import styled from "styled-components";

export const Container = styled.div`
padding: 0 80px;
> section{
    .title {
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        margin-bottom: 40px;
        
        button {
            display: flex;
            align-items: center;
            background-color: ${({theme}) => theme.COLORS.PINK};;
            color: ${({theme}) => theme.COLORS.BLACK};
            padding: 10px;
            border: none;
            border-radius: 8px;
        }
    }

}
`;

export const Content = styled.div`

`;