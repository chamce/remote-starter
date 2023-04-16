import { createGlobalStyle } from "styled-components";

export const StyleSheet = createGlobalStyle`
/*! CSS Used from: Embedded */
.bi{vertical-align:-.125em;fill:currentColor;}
.btn-bd-primary{--bd-violet-bg:#712cf9;--bd-violet-rgb:112.520718, 44.062154, 249.437846;--bs-btn-font-weight:600;--bs-btn-color:var(--bs-white);--bs-btn-bg:var(--bd-violet-bg);--bs-btn-border-color:var(--bd-violet-bg);--bs-btn-hover-color:var(--bs-white);--bs-btn-hover-bg:#6528e0;--bs-btn-hover-border-color:#6528e0;--bs-btn-focus-shadow-rgb:var(--bd-violet-rgb);--bs-btn-active-color:var(--bs-btn-hover-color);--bs-btn-active-bg:#5a23c8;--bs-btn-active-border-color:#5a23c8;}
.bd-mode-toggle{z-index:1500;}
/*! CSS Used from: https://getbootstrap.com/docs/5.3/examples/dashboard/dashboard.css */
body{font-size:.875rem;}
.feather{width:16px;height:16px;}
.sidebar{position:fixed;top:0;bottom:0;left:0;z-index:100;padding:48px 0 0;box-shadow:inset -1px 0 0 rgba(0, 0, 0, .1);}
@media (max-width: 767.98px){
.sidebar{top:5rem;}
}
.sidebar-sticky{height:calc(100vh - 48px);overflow-x:hidden;overflow-y:auto;}
.sidebar .nav-link{font-weight:500;color:#333;}
.sidebar .nav-link .feather{margin-right:4px;color:#727272;}
.sidebar .nav-link.active{color:#2470dc;}
.sidebar .nav-link:hover .feather,.sidebar .nav-link.active .feather{color:inherit;}
.sidebar-heading{font-size:.75rem;}
.navbar-brand{padding-top:.75rem;padding-bottom:.75rem;background-color:rgba(0, 0, 0, .25);box-shadow:inset -1px 0 0 rgba(0, 0, 0, .25);}
.navbar .navbar-toggler{top:.25rem;right:1rem;}
.navbar .form-control{padding:.75rem 1rem;}
.form-control-dark{color:#fff;background-color:rgba(255, 255, 255, .1);border-color:rgba(255, 255, 255, .1);}
.form-control-dark:focus{border-color:transparent;box-shadow:0 0 0 3px rgba(255, 255, 255, .25);}
`;
