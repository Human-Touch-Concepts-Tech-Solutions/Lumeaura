import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background-color: #F7F7F5;
  border-right: 1px solid var(--border);
  width: 250px; /* Default width for logic */
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  white-space: nowrap;

  /* DESKTOP BEHAVIOR */
  @media (min-width: 769px) {
    width: 70px;
    &:hover {
      width: 250px;
      box-shadow: 4px 0 15px rgba(0, 0, 0, 0.05);
    }
  }

  /* MOBILE BEHAVIOR */
  @media (max-width: 768px) {
    /* Move it entirely off screen to the left */
    transform: ${props => props.$mobileOpen ? 'translateX(0)' : 'translateX(-100%)'};
    width: 280px; /* Slightly wider on mobile for easier tapping */
    box-shadow: ${props => props.$mobileOpen ? '10px 0 30px rgba(0,0,0,0.2)' : 'none'};
  }
`;
export const Hamburger = styled.div`
  display: none;
  position: fixed;
  top: 1.2rem;
  left: 1.2rem;
  z-index: 1100;
  font-size: 1.8rem;
  color: var(--charcoal);
  cursor: pointer;
  background: #F7F7F5;
  padding: 5px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const NavSection = styled.div`
  flex: 1;
  padding: 4rem 0 1rem 0; /* Extra top padding for the hamburger space */
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  color: var(--charcoal);
  cursor: pointer;
  transition: all 0.2s;

  svg {
    font-size: 1.5rem;
    min-width: 40px;
  }

  span {
    margin-left: 1rem;
    font-family: var(--body);
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.2s;
  }

  /* Show text if desktop sidebar is hovered OR mobile sidebar is open */
  ${SidebarContainer}:hover & span, 
  ${props => props.$mobileOpen} & span {
    opacity: 1;
  }

  @media (max-width: 768px) {
    span { opacity: 1; }
  }

  &:hover {
    background-color: var(--rose);
    color: white;
  }
`;

export const BottomSection = styled.div`
  border-top: 1px solid var(--border);
  padding: 1rem 0;
  margin-top: auto;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  
  .avatar {
    width: 35px; height: 35px;
    background: var(--gold);
    color: white;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-weight: bold; min-width: 35px;
  }

  .name {
    margin-left: 1rem;
    font-size: 0.9rem;
    font-weight: 600;
    opacity: 0;
    transition: opacity 0.2s;
  }

  ${SidebarContainer}:hover & .name { opacity: 1; }
  @media (max-width: 768px) { .name { opacity: 1; } }
`;

export const LogoutButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  background: transparent;
  border: none;
  color: #ff4d4d;
  cursor: pointer;

  svg {
    font-size: 1.5rem;
    min-width: 40px;
  }

  span {
    margin-left: 1rem;
    font-weight: 600;
    opacity: 0;
  }

  ${SidebarContainer}:hover & span { opacity: 1; }
  @media (max-width: 768px) { span { opacity: 1; } }

  &:hover { background: #fff5f5; }
`;

export const Overlay = styled.div`
  display: ${props => props.$show ? 'block' : 'none'};
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.3);
  z-index: 90;
`;