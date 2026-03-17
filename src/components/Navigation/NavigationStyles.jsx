import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background: var(--ivory);

  position: sticky;
  
  top: 0;
  z-index: 1000;
  font-family: var(--heading);

`;

export const Logo = styled.div`
  position: relative; /* Essential for Next.js Image 'fill' */
  width: 150px;       /* Set a width that fits your logo design */
  height: 40px;        /* Matches the height you want */
  cursor: pointer;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    /* On mobile, we might want it slightly smaller */
    width: 120px;
    height: 32px;
    display: ${props => (props.$hideOnMobile ? 'none' : 'flex')};
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  text-transform: uppercase;
  letter-spacing:0.2rem;
  font-weight: 600;

  @media (max-width: 768px) {
    display: none; /* Hidden on desktop view for mobile */
  }
`;

export const IconsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  svg {
    font-size: 1.4rem;
    cursor: pointer;
    transition: color 0.2s;
    
    &:hover {
      color: var(--primary);
    }
  }
`;

export const CartBadge = styled.div`
  position: relative;
  
  span {
    position: absolute;
    top: -8px;
    right: -10px;
    background: var(--primary);
    color: white;
    font-size: 0.7rem;
    padding: 2px 6px;
    border-radius: 50%;
  }
`;

export const Hamburger = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const SideMenu = styled.div`
  position: fixed;
  top: 0;
  left: ${props => (props.$isOpen ? '0' : '-100%')};
  width: 250px;
  height: 100vh;
  background: var(--background);
  box-shadow: 2px 0 10px rgba(0,0,0,0.1);
  transition: left 0.3s ease;
  z-index: 2000;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;