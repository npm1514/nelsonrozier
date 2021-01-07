import styled from 'styled-components';

export const Nav = styled.div`
  width: 100%;

`;
export const DesktopNav = styled.div`
  display: none;
  width: max-content;
  margin: 32px auto;
  align-items: center;
  justify-content: center;
  @media(min-width: 900px){
    display: flex;
  }
`;
export const MobileNav = styled.div`
  width: 100%;
  display: block;
  position: relative;
  @media(min-width: 900px){
    display: none;
  }
`;

export const NavButton = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;
  width: max-content;
  color: #fff;
  padding: 3px 13px;
  border-right: ${props => props.index != props.size - 1 ? "1px solid #fff" : "none"};
  &.mobileNav {
    text-transform: capitalize;
    padding: 10px 37.5px;
    background-color: #763432;
    border-right: none;
    width: 100%;
    box-sizing: border-box;
    text-align: left;
  }
  &:hover {
    background-color: #763432;
    &.mobileNav {
      background-color: #321413;
    }
  }
`;
export const MenuBar = styled.div`
  background-color: #763432;
  padding: 24px;
  margin: 12px 0;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;
export const MenuPopup = styled.div`
  width: calc(100% - 24px);
  display: none;
  margin: auto;
  padding: 24px auto;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  position: absolute;
  top: 68px;
  left: 12px;
  z-index: 12;
  &.menuOpen {
    display: block;
  }
  &:hover {
    cursor: pointer;
  }
`;