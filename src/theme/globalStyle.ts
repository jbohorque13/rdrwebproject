import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { theme } from 'theme';

// Grid Configuration
import 'theme/gridConfiguration';

// Fonts
import 'assets/fonts/index.css';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    height: -webkit-fill-available;
    font-size: 16px; // For REM
  }

  body {
    margin: 0;
    font-family: ${theme.fontNames.qanelas};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    height: 100vh;
    height: -webkit-fill-available;
    display: flex;
    background: ${theme.colors.white};

    // https://stackoverflow.com/questions/24497034/external-mouse-plugin-causing-browser-re-render-of-page-in-mac-os-x
    // https://css-tricks.com/designing-show-scroll-bars/
    overflow-x: hidden;

    // https://css-tricks.com/almanac/properties/o/overscroll-behavior/
    overscroll-behavior: none;
  }

  #root {
    flex: 1;
    max-width: 100vw;

    > div {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0;
  }

  p {
    margin: 0;
  }

  .w-ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .w-line-clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .line-clamp-1 {
    -webkit-line-clamp: 1;
  }

  .line-clamp-2 {
    -webkit-line-clamp: 2;
  }

  .line-clamp-3 {
    -webkit-line-clamp: 3;
  }

  .line-clamp-4 {
    -webkit-line-clamp: 4;
  }

  .no-tap-light {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .hide-scrollbar {
    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
    height: 4px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.grey2};
    min-height: 35px;
    border-radius: 8px;
  }  

  .ReactModal__Overlay {
    background-color: ${theme.colors.alpha.white380}!important;
    z-index: 999;
  }
`;
