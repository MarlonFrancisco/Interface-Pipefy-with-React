import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, border-style, #root {
        height: 100vh;
    }

    body {
        font-family: 'Roboto', sans-serif;
        color: #333;
        background: #ecf1f8;
        -webkit-font-smoothing: antialiased !important;
    }

    li {
        list-style: none;
    }
`;