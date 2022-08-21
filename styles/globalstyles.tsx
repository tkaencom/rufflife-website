import { createGlobalStyle } from 'styled-components'

export const Colors = {
    PrimaryBackground : '#F5F5F5',
    PrimaryThemeColor: '#FF5E00',
    OrangePeel: 'rgba(247, 158, 28, 0.06)'
}
export const RootContainerMargin = {
   desktop: '0 10vw 0 10vw;',
   tablet: '0 5vw 0 5vw;',
   mobile: '0 1vw 0 1vw;'
}

export const  GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Poppins';
    src: url('/static/fonts/Poppins-Regular.ttf') format('ttf');
}
body {
    margin: 0;
    padding: 0;
    background-color: ${Colors.PrimaryBackground};
    overflow-x: hidden;
}
`