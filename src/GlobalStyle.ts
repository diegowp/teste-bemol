import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    background: rgb(198, 237, 255);
    background: radial-gradient(
      circle,
      rgba(198, 237, 255, 1) 0%,
      rgba(0, 144, 212, 1) 60%
    );
  }

  &&& {
    .form-control:focus {
      outline: none;
      box-shadow: none;
    }
  }

  &&& {
    .btn.btn-link {
      text-decoration: none;
    }
  }
`
