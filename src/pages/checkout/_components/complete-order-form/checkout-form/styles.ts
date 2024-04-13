import styled from 'styled-components';
import { BaseStyleWraper } from '../styles';

export const CheckoutFormContainer = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }
`;

export const CheckoutAddress = styled(BaseStyleWraper)`
  h2 {
    font-size: 1.125rem;
    font-weight: 400;
  }

  p {
    font-size: 0.875rem;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme['yellow-700']};
  }
`;

export const Form = styled.div`
  display: grid;
  gap: 1rem;

  input {
    width: 100%;

    background-color: ${({ theme }) => theme['gray-200']};
    padding: 0.75rem;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme['gray-300']};

    font-size: 0.875rem;
    &::placeholder {
      color: ${({ theme }) => theme['gray-600']};
    }
  }
`;

export const InputContainter = styled.div``;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    flex: 1;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const GridTwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`