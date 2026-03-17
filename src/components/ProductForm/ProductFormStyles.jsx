import styled from 'styled-components';

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  padding-bottom: 5rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const Section = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--charcoal);
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);

  h3 {
    margin-bottom: 1.5rem;
    font-family: var(--heading);
    color: var(--charcoal);
    border-bottom: 1px solid #eee;
    padding-bottom: 0.5rem;
    font-size: 1.2rem;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--charcoal);
  }

  input, textarea, select {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid var(--charcoal);
    border-radius: 8px;
    font-family: var(--body);
    font-size: 0.95rem;
    transition: all 0.2s;

    &:focus {
      outline: none;
      border-color: var(--gold);
      box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.1);
    }
  }

  textarea {
    height: 120px;
    resize: vertical;
  }
`;

export const UploadGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

export const UploadBox = styled.label`
  border: 2px dashed var(--charcoal);
  border-radius: 12px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  color: #888;
  background: #fafafa;

  &:hover {
    border-color: var(--gold);
    background: #fdfaf3;
    color: var(--gold);
  }

  input { display: none; }
  svg { font-size: 2rem; margin-bottom: 0.5rem; }
  span { font-size: 0.8rem; font-weight: 600; }
`;

export const PreviewCard = styled.div`
  position: relative;
  height: 140px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--charcoal);
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    position: absolute;
    top: 8px;
    right: 8px;
    background: white;
    border: none;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #ff4d4d;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    
    &:hover { background: #fff5f5; transform: scale(1.1); }
  }
`;

export const TagInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.6rem;
  border: 1px solid var(--charcoal);
  border-radius: 8px;
  background: #fff;

  .tag {
    background: var(--charcoal);
    color: white;
    padding: 4px 12px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;

    button {
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      font-weight: bold;
      display: flex;
      align-items: center;
      padding: 0;
      &:hover { color: var(--gold); }
    }
  }

  input {
    border: none !important;
    flex: 1;
    min-width: 80px;
    padding: 0 !important;
    box-shadow: none !important;
  }
`;

export const SubmitButton = styled.button`
  background: var(--gold);
  color: white;
  border: none;
  padding: 1.2rem;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;

  &:hover {
    background: var(--charcoal);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
`;