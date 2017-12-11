import styled from "styled-components";

export const Main = styled.main`
  background-color: #f5f5f6;
  height: 100vh;
`;

export const Form = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    align-items: center;
    justify-content: center;
`;

export const FormCenter = styled.div`
    align-items: center;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    position: absolute;
    width: 440px;
    z-index: 1;
`;

export const Logo = styled.img`
    width: 300px;
    height: 144px;
`;

export const LoginFormWrapper = styled.div`
    background-color: #fff;
    border-radius: 7px;
    padding: 9px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 11px 0;
    position: relative;
    border: 1px solid #c3c3c3;
`;