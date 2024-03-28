import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 80px;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 64px 0;
  }
`;

export const Content = styled.div`
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    gap: 2.5px;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    button {
      color: ${({ theme }) => theme.COLORS.PINK};
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


