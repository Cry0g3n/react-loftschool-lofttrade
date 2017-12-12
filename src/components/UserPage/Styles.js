import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2b2c2e;
  height: 80px;
  color: #fff;
`;

export const HeaderWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 180px;
`;

export const CurrencyWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CurrencyLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 80px;
  justify-content: center;
  margin: 0 8px;
  text-decoration: none;
  cursor: pointer;
  color: #aaa;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100% - 80px);
  margin-bottom: -100px;
  &:after {
    content: "";
    display: block;
    height: 100px;
  }
`;

export const ContentWrapper = styled.div`
  width: 1200px;
  padding-top: 10px;
`;

export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export const MainRight = styled.div`
  width: 750px;
`;

export const Offsets = styled.div`
  margin-bottom: 12px;
`;

export const ButtonOffset = styled.button`
  border: 1px solid #1565c0;
  margin: 0 4px;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  background-color: ${props => (props.selected ? "white" : "#1565C0")};
  color: ${props => (props.selected ? "#1565C0" : "white")};
  padding: 2px 16px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1f2022;
  height: 100px;
`;
