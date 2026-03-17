import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background-color: var(--ivory);
  /* border-right: 2px solid var(--charcoal); */
  width: ${props => props.$mobileOpen ? '280px' : '70px'};
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
  z-index: 1000;

  @media (min-width: 769px) {
    &:hover {
      width: 250px;
    }
  }

  @media (max-width: 768px) {
    transform: ${props => props.$mobileOpen ? 'translateX(0)' : 'translateX(-100%)'};
    width: 280px;
  }
`;

export const NavSection = styled.div`
  flex: 1;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
`;

export const NavItemWrapper = styled.div`
  position: relative;
  width: 100%;

  /* Desktop Flyout Trigger */
  @media (min-width: 769px) {
    &:hover > div:last-child {
      display: block;
    }
  }
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  color: black;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s;

  svg { font-size: 1.5rem; min-width: 40px; }
  
  span {
    margin-left: 1rem;
    font-weight: 500;
    font-family: var(--heading);
    opacity: 0;
    letter-spacing: 0.1rem;
    ${SidebarContainer}:hover & { opacity: 1; }
    @media (max-width: 768px) { opacity: 1; }
  }

  &:hover {
    background-color: var(--gold);
    color: white;
  }
`;

export const SubMenuContainer = styled.div`
  display: none; 
  position: absolute;
  left: 100%; /* Pops out to the right */
  top: 0;
  background-color: var(--ivory);
  min-width: 160px;
  border: 1px solid var(--border);
  box-shadow: 5px 5px 15px rgba(0,0,0,0.1);
  z-index: 2000;

  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'block' : 'none'};
    position: static;
    background-color: #eeeeec;
    box-shadow: none;
    border: none;
  }
`;

export const SubNavItem = styled.div`
  padding: 0.8rem 1.5rem;
  color: var(--charcoal);
  font-size: 1.0rem;
  font-family: var(--heading);
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.1rem;
  &:hover {
    background-color: var(--gold);
    color: white;
  }
`;

export const ExpandIcon = styled.div`
  margin-left: auto;
  font-size: 1rem;
  opacity: 0;
  transition: transform 0.3s;
  ${SidebarContainer}:hover & { opacity: 1; }
  
  @media (max-width: 768px) {
    opacity: 1;
    transform: ${props => props.$isOpen ? 'rotate(90deg)' : 'rotate(0deg)'};
  }
`;

export const BottomSection = styled.div`
  border-top: 1px solid var(--border);
  padding: 1rem 0;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1.5rem;
  .avatar {
    width: 35px; height: 35px; background: var(--gold); color: white;
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    font-weight: bold; min-width: 35px;
   
  }
  .name {
     font-family: var(--heading);
    font-size: 1.0rem; letter-spacing: 0.1rem;
    margin-left: 1rem; font-size: 0.9rem; font-weight: 600; opacity: 0;
    ${SidebarContainer}:hover & { opacity: 1; }
    @media (max-width: 768px) { opacity: 1; }
  }
`;

export const LogoutButton = styled.button`
  width: 100%; display: flex; align-items: center; padding: 0.8rem 1.5rem; font-family: var(--heading);
  background: transparent; border: none; color: #ff0000; cursor: pointer; font-size: 1.0rem; letter-spacing: 0.1rem;
  svg { font-size: 1.5rem; min-width: 40px; }
  span {
    margin-left: 1rem; font-weight: 600; opacity: 0;
    ${SidebarContainer}:hover & { opacity: 1; }
    @media (max-width: 768px) { opacity: 1; }
  }
`;

export const Hamburger = styled.div`
  display: none;
  position: fixed;
  top: 1.2rem; left: 1.2rem;
  z-index: 1100; font-size: 1.8rem;
  @media (max-width: 768px) { display: flex; }
`;

export const Overlay = styled.div`
  display: ${props => props.$show ? 'block' : 'none'};
  position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.3); z-index: 90;
`;