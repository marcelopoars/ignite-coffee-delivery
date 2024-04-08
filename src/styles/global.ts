import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus-visible {
  outline: 0;
  box-shadow: 0 0 0 2px ${({ theme }) => theme['purple-500']};
  border-radius: 2px;
}

body {
  background-color: ${({ theme }) => theme['gray-50']};
  color: ${({ theme }) => theme['gray-900']};
}

button {
  appearance: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

body, input, textarea, button {
  font-family: 'Roboto', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  line-height: 1.3;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} 
`;
