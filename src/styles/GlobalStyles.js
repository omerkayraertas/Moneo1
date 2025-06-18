import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow-x: hidden;
  }
  
  #root {
    height: 100vh;
    width: 100vw;
  }
  
  html {
    height: 100%;
  }
  
  * {
    box-sizing: border-box;
  }
  
  button {
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;
  }
  
  input {
    outline: none;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const MobileContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 480px;
  margin: 0 auto;
  background-color: #fff;
  position: relative;
  overflow-x: hidden;
  padding: 20px;
`;

export default GlobalStyles; 