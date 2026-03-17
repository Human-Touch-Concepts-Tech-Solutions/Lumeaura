import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #e9e2d8; 
  padding: 20px;
`;

export const LoginCard = styled.div`
  background: #F7F7F5;
  width: 100%;
  max-width: 400px;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15); /* Softened the shadow slightly for elegance */
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoContainer = styled.div`
  position: relative;
  width: 180px;
  height: 50px;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: black;
  font-family: var(--heading);
  margin-bottom: 0.5rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
`;

export const Subtitle = styled.p`
  color: #2b2b2b; /* Fixed the var syntax here */
  font-size: 0.875rem;
  margin-bottom: 2rem;
  font-family: var(--body);
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  font-family: var(--body);
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 0.875rem;
    font-weight: 500;
    color: black;
  }

  input {
    padding: 0.75rem 1rem;
    border-radius: 8px;
    border: 1.5px solid var(--charcoal);
    font-size: 1rem;
    transition: all 0.2s;
    font-family: var(--body);
    background: transparent;

    &:focus {
      outline: none;
      border-color: var(--gold);
      box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.1); /* Subtle gold glow */
    }
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    /* Keep your existing padding, but ensure padding-right is large */
    padding: 0.75rem 3rem 0.75rem 1rem !important; 
    border-radius: 8px;
    border: 1.5px solid var(--charcoal);
    font-size: 1rem;
    background: transparent;
    transition: all 0.2s;

    &:focus {
      outline: none;
      border-color: var(--gold);
    }
  }
`;

export const EyeIcon = styled.div`
  position: absolute;
  right: 1rem; /* This pins it 1rem from the right edge of the wrapper */
  top: 50%;
  transform: translateY(-50%); /* Perfectly centers it vertically */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--charcoal);
  font-size: 1.25rem;
  user-select: none;
  z-index: 2; /* Ensures it stays above the input field */

  &:hover {
    color: var(--rose);
  }
`;

export const LoginButton = styled.button`
  background-color: var(--gold);
  color: white;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 1rem;
  transition: all 0.3s ease;
  font-family: var(--body);
  letter-spacing: 0.2rem;
  text-transform: uppercase;

  &:hover {
    background-color: var(--charcoal);
    transform: translateY(-1px);
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    transform: none;
  }
`;