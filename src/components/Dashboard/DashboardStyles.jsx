import styled from 'styled-components';

export const DashboardContainer = styled.div`
  padding: 2rem;
  font-family: var(--body);
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
    padding-top: 4rem; /* Space for the hamburger */
  }
`;

export const Header = styled.header`
  margin-bottom: 2.5rem;

  h1 {
    font-family: var(--heading);
    font-size: 2.2rem;
    color: var(--charcoal);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--charcoal);
    font-size: 1rem;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

export const StatCard = styled.div`
  background: var(--ivory);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 1.2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  .icon-box {
    font-size: 2.2rem;
    color: white;
    background: var(--gold);
    padding: 0.8rem;
    border-radius: 10px;
    display: flex;
  }

  .details {
    p {
      font-size: 0.9rem;
      color: var(--text-muted);
      margin: 0;
    }
    h3 {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--charcoal);
      margin: 0;
    }
  }
`;

export const QuickActions = styled.section`
  background: #F7F7F5;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--border);

  h2 {
    font-family: var(--heading);
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    color: var(--charcoal);
  }

  .button-group {
    display: grid;
    /* This creates 3 equal columns on desktop */
    grid-template-columns: repeat(3, 1fr); 
    gap: 1.5rem;

    @media (max-width: 992px) {
      /* 2 columns for medium tablets */
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
      /* 1 full-width column for phones */
      grid-template-columns: 1fr;
    }
  }
`;
export const ActionButton = styled.div`
  width: 100%;

  a {
    display: flex; /* Changed to flex to fill the grid cell */
    align-items: center;
    justify-content: center; /* Center content for that premium look */
    gap: 0.8rem;
    background: ${props => props.$secondary ? 'var(--gold)' : 'var(--gold)' };
    color: white;
    padding: 1rem; /* Slightly taller for better touch targets */
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    font-size: 0.95rem;
    width: 100%; /* Ensure it fills the grid column */
    text-align: center;

    &:hover {
      background: ${props => props.$secondary ? 'black' : 'var(--charcoal)'};
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  }
`;