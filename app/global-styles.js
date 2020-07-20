import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background: radial-gradient(closest-corner, #9231f3 0%, #1105fd 90%);
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  body {
    text-align: center;
  }
  hr {
    width: 200px;
    text-align:center !important;
    margin: 0 auto !important;
  }

  .ant-modal-content {
    background: radial-gradient(closest-corner, #9231f3 0%, #1105fd 90%);
  }

  .ant-modal-content > .ant-modal-header {
    background: transparent;
  }

  .ant-modal-content > .ant-modal-header > .ant-modal-title {
    color: white;
  }

  .ant-select-selection {
    background: transparent!important;
  }

  .ant-btn-background-ghost:hover, .ant-btn-background-ghost:focus {
    border-color: white!important;
    color: white!important;
    opacity: 0.85;
    transition: 0.5s ease opacity;
  }

`;
