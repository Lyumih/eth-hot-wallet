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

  .ant-dropdown-menu {
    background: white!important;
  }

  .ant-dropdown-menu-item {
    background: transparent!important;
  }

  .ant-btn-background-ghost:hover, .ant-btn-background-ghost:focus {
    border-color: white!important;
    color: white!important;
    opacity: 0.85;
    transition: 0.5s ease opacity;
  }

  .anticon-filter {
    color: white!important;
  }

  .spin-white > .ant-spin-text {
    color: white;
  }

  .spin-white > .ant-spin-dot > .ant-spin-dot-item {
    background: white!important;
  }


 #preloader {
  width: 100%;
  height: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  background: radial-gradient(closest-corner, #9231f3 0%, #1105fd 90%);
}
 #preloader .krg_logo {
  width: 70px;
  height: 150px;
  position: relative;
  display: block;
}
 @keyframes logo_appear {
  0% {
    opacity: 0;
    transform: translateY(-10px);
}
  100% {
    opacity: 1;
    transform: translateY(0px);
}
}
 @keyframes logo_flicker {
  0% {
    opacity: 1;
}
  50% {
    opacity: 0.6;
}
  100% {
    opacity: 1;
}
}
 #preloader .krg_logo svg {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
}
 #preloader .krg_logo svg path {
  fill: #fff;
}
 #preloader .krg_logo svg#krg_logo_1 {
  opacity: 0;
  animation: logo_appear 1s ease forwards;
  animation-display: 0.5s;
}
 #preloader .krg_logo svg#krg_logo_1 {
  opacity: 0;
  animation: logo_appear 0.7s ease forwards, logo_flicker 2s ease forwards infinite;
  animation-delay: 0.6s, 1.2s;
}
 #preloader .krg_logo svg#krg_logo_2 {
  opacity: 0;
  animation: logo_appear 0.7s ease forwards, logo_flicker 2s ease forwards infinite;
  animation-delay: 0.7s, 1.4s;
}
 #preloader .krg_logo svg#krg_logo_3 {
  opacity: 0;
  animation: logo_appear 0.7s ease forwards, logo_flicker 2s ease forwards infinite;
  animation-delay: 0.8s, 1.6s;
}
 #preloader .krg_logo svg#krg_logo_4 {
  opacity: 0;
  animation: logo_appear 0.7s ease forwards, logo_flicker 2s ease forwards infinite;
  animation-delay: 0.9s, 1.8s;
}
 #preloader .krg_logo svg#krg_logo_5 {
  opacity: 0;
  animation: logo_appear 0.7s ease forwards, logo_flicker 2s ease forwards infinite;
  animation-delay: 1s, 2s;
  
}


`;
