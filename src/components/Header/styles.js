import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  height: 123px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 64px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > div {
    min-width: 136px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    text-align: right;
    margin: 0 9px 0 64px;

    a {
      text-decoration: none;
      color: ${({theme}) => theme.COLORS.GRAY_200};
    }
  }

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 1px solid ${({theme}) => theme.COLORS.GRAY_200};
  }

  
`;