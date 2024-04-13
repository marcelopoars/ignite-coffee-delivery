import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 1rem 1.5rem;

  font-size: 0.875rem;
  text-align: center;

  p + p {
    margin-top: 0.5rem;
  }

  a {
    display: inline-block;
    font-weight: 700;
    text-decoration: none;
    color: ${({ theme }) => theme['gray-900']};
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme['purple-500']};
    }
  }

  ul {
    padding-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    margin: 0 auto;
    padding: 3rem 3rem 1.5rem;
  }
`;
