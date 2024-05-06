import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
 
  > main {
    max-width: 1366px;
    margin: 0 auto;
    overflow-y: auto;
    padding: 40px 0;

    button {
      display: flex;
      background: none;
      border: none;
      align-items: center;
      gap: 8px;
      color: ${({ theme }) => theme.COLORS.PINK};
      
      svg {
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.PINK};
      }
      
    }

     .black {
      max-width: 520px;
      display: flex;
      justify-content: center;
      background-color: ${({theme}) => theme.COLORS.BLACK};
      color: ${({theme}) => theme.COLORS.PINK}
    } 
  }
`;



export const Section = styled.section`
  padding-top: 24px;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    h1 {
      font-size: 36px;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    svg:hover {
      color: black;
    }
  }

  > button {
    color: red;
  }
  
  > .text {
    padding-right: 24px;
    margin-top: 40px;
    color: ${({theme}) => theme.COLORS.WHITE};
    display: flex;
    flex-direction: column;
    
    p {

      text-align: justify;
      font-size: 16px;
    }

  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin: 25px 0;

  > img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }
  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;


