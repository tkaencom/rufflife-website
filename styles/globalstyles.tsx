import { createGlobalStyle } from 'styled-components'

export const Colors = {
    PrimaryBackground : '#F5F5F5',
    PrimaryThemeColor: '#FF5E00',
}

export const  GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    background-color: ${Colors.PrimaryBackground};
    overflow-x: hidden;
}
`