import styled from 'styled-components';

export const FormContainer = styled.form`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 5rem;
`;

export const Section = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--charcoal);
  box-shadow: 0 4px 6px rgba(0,0,0,0.02);

  h3 {
    margin-bottom: 1.5rem;
    font-family: var(--heading);
    font-size: 1.3rem;
    color: var(--charcoal);
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 0.8rem;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.6rem;
    font-weight: 600;
    color: var(--charcoal);
  }

  input, textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid var(--charcoal);
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.2s;

    &:focus {
      outline: none;
      border-color: var(--gold);
    }
  }

  textarea {
    min-height: 300px;
    line-height: 1.6;
  }
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

export const ImageBox = styled.label`
  height: 150px;
  border: 2px dashed var(--charcoal);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #fafafa;
  color: #888;
  
  input { display: none; }
  &:hover { border-color: var(--gold); color: var(--gold); }
`;

export const Preview = styled.div`
  position: relative;
  height: 150px;
  border-radius: 12px;
  overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; }
  
  button {
    position: absolute;
    top: 5px; right: 5px;
    background: white;
    border-radius: 50%;
    width: 25px; height: 25px;
    border: none; color: red;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }
`;

export const LinkRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: center;

  .label-input { flex: 1; }
  .url-input { flex: 2; }

  button {
    background: none;
    border: none;
    color: #ff4d4d;
    font-size: 1.2rem;
    cursor: pointer;
    padding-top: 1.5rem;
  }
`;

export const AddButton = styled.button`
  background: transparent;
  border: 1px dashed var(--gold);
  color: var(--gold);
  padding: 0.8rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  
  &:hover { background: #fffcf5; }
`;

export const SubmitButton = styled.button`
  background: var(--charcoal);
  color: white;
  padding: 1.2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;

  &:hover { background: var(--gold); }
`;