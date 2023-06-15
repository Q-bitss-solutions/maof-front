<template>
  <header class="pb-7">
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbarMainCollapse"
            @click="showMenuBurger"
          >
            <span class="sr-only">Interruptor de Navegación</span
            ><span class="icon-bar"></span><span class="icon-bar"></span
            ><span class="icon-bar"></span></button
          ><a class="navbar-brand" href="https://www.gob.mx/"
            ><img
              src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg"
              width="128"
              height="48"
              alt="Página de inicio, Gobierno de México"
          /></a>
        </div>


        <div
          :class="!menu ? 'collapse navbar-collapse in' : ''"
          :style="menuBurger ? 'visibility: visible' : ''"
          id="navbarMainCollapse"
        >
          <ul class="nav navbar-nav navbar-right">
            <li><a href="https://www.gob.mx/tramites">Trámites</a></li>
            <li><a href="https://www.gob.mx/gobierno">Gobierno</a></li>
            <li>
                <a href="https://www.gob.mx/busqueda">
                    <span class="material-icons">search</span>
                </a>
            </li>
          </ul>
        </div>

       
      </div>
    </nav>
  </header>
</template>





<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const menu = ref(false);
const menuBurger = ref(false);

const showMenuBurger = () => (menuBurger.value = !menuBurger.value);

const handleResize = () => {
  menu.value = window.innerWidth >= 768; // Change the minimum width value as per your requirements
};

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>





<style scoped>
@import  "https://fonts.googleapis.com/icon?family=Material+Icons";

/* cyrillic-ext */
@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Montserrat Medium'), local('Montserrat-Medium'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_ZpC3gTD_vx3rCubqg.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Montserrat Medium'), local('Montserrat-Medium'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_ZpC3g3D_vx3rCubqg.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Montserrat Medium'), local('Montserrat-Medium'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_ZpC3gbD_vx3rCubqg.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Montserrat Medium'), local('Montserrat-Medium'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_ZpC3gfD_vx3rCubqg.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Montserrat Medium'), local('Montserrat-Medium'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_ZpC3gnD_vx3rCs.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_bZF3gTD_vx3rCubqg.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_bZF3g3D_vx3rCubqg.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_bZF3gbD_vx3rCubqg.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_bZF3gfD_vx3rCubqg.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_bZF3gnD_vx3rCs.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

.glyphicon,
address {
    font-style: normal
}

@font-face {
    font-family: 'Glyphicons Halflings';
    src: url(../bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.eot);
    src: url(../bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.eot?#iefix) format("embedded-opentype"), url(../bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff2) format("woff2"), url(../bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff) format("woff"), url(../bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.ttf) format("truetype"), url(../bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.svg#glyphicons_halflingsregular) format("svg")
}

@font-face {
    font-family: icogobmx;
    src: url(fonts/icogobmx.eot?xc1rry);
    src: url(fonts/icogobmx.eot?#iefixxc1rry) format("embedded-opentype"), url(fonts/icogobmx.woff?xc1rry) format("woff"), url(fonts/icogobmx.ttf?xc1rry) format("truetype"), url(fonts/icogobmx.svg?xc1rry#icogobmx) format("svg");
    font-weight: 400;
    font-style: normal
}


@media print {
  blockquote,
  img,
  pre,
  tr {
    page-break-inside: avoid;
  }
  *,
  :after,
  :before {
    background: 0 0 !important;
    color: #000 !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
  a,
  a:visited {
    text-decoration: underline;
  }
  a[href]:after {
    content: " (" attr(href) ")";
  }
  abbr[title]:after {
    content: " (" attr(title) ")";
  }
  a[href^="#"]:after,
  a[href^="javascript:"]:after {
    content: "";
  }
  blockquote,
  pre {
    border: 1px solid #999;
  }
  thead {
    display: table-header-group;
  }
  img {
    max-width: 100% !important;
  }
  h2,
  h3,
  p {
    orphans: 3;
    widows: 3;
  }
  h2,
  h3 {
    page-break-after: avoid;
  }
  .navbar {
    font-family: 'Montserrat';
    display: none;
    font-size: 17.5px;
    font-weight: 300;
  }
  .btn > .caret,
  .dropup > .btn > .caret {
    border-top-color: #000 !important;
  }
  .label {
    border: 1px solid #000;
  }
  .table {
    border-collapse: collapse !important;
  }
  .table td,
  .table th {
    background-color: #fff !important;
  }
  .table-bordered td,
  .table-bordered th {
    border: 1px solid #ddd !important;
  }
}

.img-thumbnail,
body {
  background-color: #fff;
}
/* 
@font-face {
    font-family: 'Glyphicons Halflings';
    src: url(../bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.eot);
    src: url(../bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.eot?#iefix) format("embedded-opentype"), url(../bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff2) format("woff2"), url(../bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff) format("woff"), url(../bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.ttf) format("truetype"), url(../bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.svg#glyphicons_halflingsregular) format("svg")
} */

.glyphicon {
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: "Glyphicons Halflings";
  font-weight: 400;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container-fluid:after,
.container-fluid:before,
.container:after,
.container:before,
.row:after,
.row:before {
  display: table;
  content: " ";
}

.container,
.container-fluid {
  margin-right: auto;
  margin-left: auto;
}

.container,
.container-fluid {
  padding-left: 15px;
  padding-right: 15px;
}

.pre-scrollable {
  overflow-y: scroll;
}

@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}

@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}

@media (min-width: 768px) {
  .navbar-right .dropdown-menu {
    right: 0;
    left: auto;
  }
  .navbar-right .dropdown-menu-left {
    left: 0;
    right: auto;
  }
}

.nav {
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}

.nav:after,
.nav:before {
  content: " ";
  display: table;
}

.nav > li,
.nav > li > a {
  display: block;
  position: relative;
}

.nav > li > a {
  padding: 10px 15px;
}

.nav > li > a:focus,
.nav > li > a:hover {
  text-decoration: none;
  background-color: #dddddd;
}

.nav > li.disabled > a {
  color: #777;
}

.nav > li.disabled > a:focus,
.nav > li.disabled > a:hover {
  color: #777;
  text-decoration: none;
  background-color: transparent;
  cursor: not-allowed;
}

.nav .open > a,
.nav .open > a:focus,
.nav .open > a:hover {
  background-color: #eee;
  border-color: #12c;
}

.nav .nav-divider {
  height: 1px;
  margin: 11.5px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}

.nav > li > a > img {
  max-width: none;
}
@media (min-width: 768px) {
  .nav-justified > li,
  .nav-tabs.nav-justified > li {
    display: table-cell;
    width: 1%;
  }
  .nav-justified > li > a,
  .nav-tabs.nav-justified > li > a {
    margin-bottom: 0;
  }
  .nav-tabs-justified > li > a,
  .nav-tabs.nav-justified > li > a {
    border-bottom: 1px solid #ddd;
    border-radius: 4px 4px 0 0;
  }
  .nav-tabs-justified > .active > a,
  .nav-tabs-justified > .active > a:focus,
  .nav-tabs-justified > .active > a:hover,
  .nav-tabs.nav-justified > .active > a,
  .nav-tabs.nav-justified > .active > a:focus,
  .nav-tabs.nav-justified > .active > a:hover {
    border-bottom-color: #fff;
  }
  .navbar {
    border-radius: 0;
  }
}

.tab-content > .tab-pane {
  display: none;
}

.tab-content > .active {
  display: block;
}

.navbar-collapse:after,
.navbar-collapse:before,
.navbar-header:after,
.navbar-header:before,
.navbar:after,
.navbar:before,
.pager:after,
.pager:before {
  display: table;
  content: " ";
}

.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}

.navbar {
  position: relative;
  min-height: 46px;
}

.navbar-collapse {
  overflow-x: visible;
  padding-right: 15px;
  padding-left: 15px;
  border-top: 1px solid transparent;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  -webkit-overflow-scrolling: touch;
}

.navbar-collapse.in {
  overflow-y: auto;
}

@media (min-width: 768px) {
  .navbar-header {
    float: left;
  }
  .navbar-collapse {
    width: auto;
    border-top: 0;
    box-shadow: none;
  }
  .navbar-collapse.collapse {
    display: block !important;
    height: auto !important;
    padding-bottom: 0;
    overflow: visible !important;
  }
  .navbar-collapse.in {
    overflow-y: visible;
  }
  .navbar-fixed-bottom .navbar-collapse,
  .navbar-fixed-top .navbar-collapse,
  .navbar-static-top .navbar-collapse {
    padding-left: 0;
    padding-right: 0;
  }
}

.embed-responsive,
.modal,
.modal-open,
.progress {
  overflow: hidden;
}

@media (max-device-width: 480px) and (orientation: landscape) {
  .navbar-fixed-bottom .navbar-collapse,
  .navbar-fixed-top .navbar-collapse {
    max-height: 200px;
  }
}

.container-fluid > .navbar-collapse,
.container-fluid > .navbar-header,
.container > .navbar-collapse,
.container > .navbar-header {
  margin-right: -15px;
  margin-left: -15px;
}

.navbar-static-top {
  z-index: 1000;
  border-width: 0 0 1px;
}

.navbar-fixed-bottom,
.navbar-fixed-top {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
}

.navbar-fixed-top {
  top: 0;
  border-width: 0 0 1px;
}

.navbar-fixed-bottom {
  bottom: 0;
  margin-bottom: 0;
  border-width: 1px 0 0;
}

.navbar-brand {
  float: left;
  line-height: 25px;
  height: 60px;
}

.navbar-brand:focus,
.navbar-brand:hover {
  text-decoration: none;
}

.navbar-brand > img {
  display: block;
}

@media (min-width: 768px) {
  .container-fluid > .navbar-collapse,
  .container-fluid > .navbar-header,
  .container > .navbar-collapse,
  .container > .navbar-header {
    margin-right: 0;
    margin-left: 0;
  }
  .navbar-fixed-bottom,
  .navbar-fixed-top,
  .navbar-static-top {
    border-radius: 0;
  }
  .navbar > .container .navbar-brand,
  .navbar > .container-fluid .navbar-brand {
    margin-left: -15px;
  }
}

.navbar-toggle {
  position: relative;
  float: right;
  margin-right: 15px;
  padding: 9px 10px;
  margin-top: 6px;
  margin-bottom: 6px;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
}

.navbar-toggle:focus {
  outline: 0;
}

.navbar-toggle .icon-bar {
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
}

.navbar-toggle .icon-bar + .icon-bar {
  margin-top: 4px;
}

.navbar-nav {
  margin: 5.25px -15px;
}

.navbar-nav > li > a {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 25px;
}

@media (max-width: 767px) {
  .navbar-nav .open .dropdown-menu {
    position: static;
    float: none;
    width: auto;
    margin-top: 0;
    background-color: transparent;
    border: 0;
    box-shadow: none;
  }
  .navbar-nav .open .dropdown-menu .dropdown-header,
  .navbar-nav .open .dropdown-menu > li > a {
    padding: 5px 15px 5px 25px;
  }
  .navbar-nav .open .dropdown-menu > li > a {
    line-height: 25px;
  }
  .navbar-nav .open .dropdown-menu > li > a:focus,
  .navbar-nav .open .dropdown-menu > li > a:hover {
    background-image: none;
  }
}

@media (min-width: 768px) {
  .navbar-toggle {
    display: none;
  }
  .navbar-nav {
    float: left;
    margin: 0;
  }
  .navbar-nav > li {
    float: left;
  }
  .navbar-nav > li > a {
    padding-top: 20px;
    /* padding-bottom: 10.5px */
  }
}

.navbar-form {
  padding: 10px 15px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 1px 0 rgba(255, 255, 255, 0.1);
  margin: 3.5px -15px;
}

@media (min-width: 768px) {
  .navbar-form .form-control-static,
  .navbar-form .form-group {
    display: inline-block;
  }
  .navbar-form .control-label,
  .navbar-form .form-group {
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }
  .navbar-form .input-group {
    display: inline-table;
    vertical-align: middle;
  }
  .navbar-form .input-group .form-control,
  .navbar-form .input-group .input-group-addon,
  .navbar-form .input-group .input-group-btn {
    width: auto;
  }
  .navbar-form .input-group > .form-control {
    width: 100%;
  }
  .navbar-form .checkbox,
  .navbar-form .radio {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .checkbox label,
  .navbar-form .radio label {
    padding-left: 0;
  }
  .navbar-form .checkbox .nat[type="checkbox"],
  .navbar-form .radio input[type="radio"] {
    position: relative;
    margin-left: 0;
  }
  .datepicker-group .navbar-form .has-feedback .glyphicon,
  .navbar-form .datepicker-group .form-control-feedback,
  .navbar-form .datepicker-group .glyphicon,
  .navbar-form .has-feedback .form-control-feedback {
    top: 0;
  }
  .navbar-form {
    width: auto;
    border: 0;
    margin-left: 0;
    margin-right: 0;
    padding-top: 0;
    padding-bottom: 0;
    box-shadow: none;
  }
}

@media (max-width: 767px) {
  .navbar-form .form-group {
    margin-bottom: 5px;
  }
  .navbar-form .form-group:last-child {
    margin-bottom: 0;
  }
}

.navbar-nav > li > .dropdown-menu {
  margin-top: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}

.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {
  margin-bottom: 0;
  border-radius: 0;
}

.navbar-btn {
  margin-top: 3.5px;
  margin-bottom: 3.5px;
}

.btn-group-sm > .navbar-btn.btn,
.navbar-btn.btn-sm {
  margin-top: 6.5px;
  margin-bottom: 6.5px;
}

.btn-group-xs > .navbar-btn.btn,
.navbar-btn.btn-xs {
  margin-top: 12px;
  margin-bottom: 12px;
}

.navbar-text {
  margin-top: 10.5px;
  margin-bottom: 10.5px;
}

@media (min-width: 768px) {
  .navbar-text {
    float: left;
    margin-left: 15px;
    margin-right: 15px;
  }
  .navbar-left {
    float: left !important;
  }
  .navbar-right {
    float: right !important;
    margin-right: -15px;
  }
  .navbar-right ~ .navbar-right {
    margin-right: 0;
  }
}

.navbar-default {
  background-color: #f8f8f8;
  border-color: #e7e7e7;
}

.navbar-default .navbar-brand {
  color: #777;
}

.navbar-default .navbar-brand:focus,
.navbar-default .navbar-brand:hover {
  color: #5e5e5e;
  background-color: transparent;
}

.navbar-default .navbar-nav > li > a,
.navbar-default .navbar-text {
  color: #777;
}

.navbar-default .navbar-nav > li > a:focus,
.navbar-default .navbar-nav > li > a:hover {
  color: #333;
  background-color: transparent;
}

.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:focus,
.navbar-default .navbar-nav > .active > a:hover {
  color: #555;
  background-color: #e7e7e7;
}

.navbar-default .navbar-nav > .disabled > a,
.navbar-default .navbar-nav > .disabled > a:focus,
.navbar-default .navbar-nav > .disabled > a:hover {
  color: #ccc;
  background-color: transparent;
}

.navbar-default .navbar-toggle {
  border-color: #ddd;
}

.navbar-default .navbar-toggle:focus,
.navbar-default .navbar-toggle:hover {
  background-color: #ddd;
}

.navbar-default .navbar-toggle .icon-bar {
  background-color: #888;
}

.navbar-default .navbar-collapse,
.navbar-default .navbar-form {
  border-color: #e7e7e7;
}

.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:focus,
.navbar-default .navbar-nav > .open > a:hover {
  background-color: #e7e7e7;
  color: #555;
}

@media (max-width: 767px) {
  .navbar-default .navbar-nav .open .dropdown-menu > li > a {
    color: #777;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus,
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover {
    color: #333;
    background-color: transparent;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover {
    color: #555;
    background-color: #e7e7e7;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover {
    color: #ccc;
    background-color: transparent;
  }
}

.navbar-default .navbar-link {
  color: #777;
}

.navbar-default .navbar-link:hover {
  color: #333;
}

.navbar-default .btn-link {
  color: #777;
}

.navbar-default .btn-link:focus,
.navbar-default .btn-link:hover {
  color: #333;
}

.navbar-default .btn-link[disabled]:focus,
.navbar-default .btn-link[disabled]:hover,
fieldset[disabled] .navbar-default .btn-link:focus,
fieldset[disabled] .navbar-default .btn-link:hover {
  color: #ccc;
}

.navbar-inverse .navbar-brand,
.navbar-inverse .navbar-nav > li > a,
.navbar-inverse .navbar-text {
  color: #fff;
}

.navbar-inverse {
  background-color: #0c231e;
  border-color: transparent;
}

.navbar-inverse .navbar-brand:focus,
.navbar-inverse .navbar-brand:hover {
  color: #fff;
  background-color: transparent;
}

.navbar-inverse .navbar-nav > .active > a,
.navbar-inverse .navbar-nav > .active > a:focus,
.navbar-inverse .navbar-nav > .active > a:hover {
  color: #9d9d9d;
  background-color: #212223;
}

.navbar-inverse .navbar-nav > .disabled > a,
.navbar-inverse .navbar-nav > .disabled > a:focus,
.navbar-inverse .navbar-nav > .disabled > a:hover {
  color: #444;
  background-color: transparent;
}

.navbar-inverse .navbar-toggle .icon-bar {
  background-color: #fff;
}

.navbar-inverse .navbar-collapse,
.navbar-inverse .navbar-form {
  border-color: #282a2b;
  background-color: #0c231e;
}

.navbar-inverse .navbar-nav > .open > a,
.navbar-inverse .navbar-nav > .open > a:focus,
.navbar-inverse .navbar-nav > .open > a:hover {
  background-color: #212223;
  color: #9d9d9d;
}

@media (max-width: 767px) {
  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {
    border-color: transparent;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {
    background-color: transparent;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {
    color: #fff;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus,
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover {
    color: #9d9d9d;
    background-color: transparent;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover {
    color: #9d9d9d;
    background-color: #212223;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover {
    color: #444;
    background-color: transparent;
  }
}

.navbar-inverse .navbar-link {
  color: #fff;
}

.navbar-inverse .navbar-link:hover {
  color: #9d9d9d;
}

.navbar-inverse .btn-link {
  color: #fff;
}

.navbar-inverse .btn-link:focus,
.navbar-inverse .btn-link:hover {
  color: #9d9d9d;
}

.navbar-inverse .btn-link[disabled]:focus,
.navbar-inverse .btn-link[disabled]:hover,
fieldset[disabled] .navbar-inverse .btn-link:focus,
fieldset[disabled] .navbar-inverse .btn-link:hover {
  color: #444;
}


.fade.in {
    opacity: 1
}


.navbar {
  font-family: 'Montserrat';
  margin-bottom: 0;
  font-size: 16px;
  font-weight: 300;
  height: 60px;
}


.navbar-inverse .navbar-nav > li > a:focus,
.navbar-inverse .navbar-nav > li > a:hover {
  background-color: rgba(255, 255, 255, 0.15);
  color: #d4c19c;
  text-decoration: none;
}

.navbar-inverse .navbar-toggle:focus,
.navbar-inverse .navbar-toggle:hover {
  background-color: transparent;
}

.navbar-inverse .navbar-toggle:focus .icon-bar,
.navbar-inverse .navbar-toggle:hover .icon-bar {
  background-color: #777;
}

.navbar-brand {
  padding: 15px 15px;
  font-size: 20px;
}

.navbar-brand > img {
  height: 29px;
  width: auto;
}
</style>
