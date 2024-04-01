import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus-visible {
  outline: 0;
  box-shadow: 0 0 0 2px ${({ theme }) => theme['gray-500']};
  border-radius: 2px;
}

body {
  background-color: ${({ theme }) => theme['gray-100']};
  color: ${({ theme }) => theme['gray-900']};
}

button {
  cursor: pointer;
}

ul {
  list-style: none;
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
