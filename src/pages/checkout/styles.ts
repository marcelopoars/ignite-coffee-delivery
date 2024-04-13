import styled from 'styled-components';

export const CheckoutContainer = styled.form`
  max-width: 76rem;
  margin: 0 auto;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 1.5rem;
  }
  
  @media screen and (min-width: 1024px) {
    padding: 2rem 3rem;
    gap: 2rem;
  }
`;
