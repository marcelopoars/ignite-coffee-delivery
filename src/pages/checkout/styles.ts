import styled from 'styled-components';

export const CheckoutContainer = styled.form`
  max-width: 76rem;
  margin: 0 auto;
  padding: 1.5rem;

  display: grid;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    padding: 2rem 3rem;

    grid-template-columns: 2fr 448px;
  }
`;
