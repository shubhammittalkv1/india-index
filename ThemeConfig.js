import { createGlobalStyle} from "styled-components"

export const lightTheme = {
  body: '#FFFFFF',
  text: '#344054',
  tabBackground: "#F9FAFB",
}

export const darkTheme = {
  body: '#161B26',
  text: '#FAFAFA',
  tabBackground: "#101828",
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Helvetica Now Var;
  }`