/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_search_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/search_icon.svg */ "./src/images/search_icon.svg");
/* harmony import */ var _images_exit_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/exit.svg */ "./src/images/exit.svg");
/* harmony import */ var _images_overlook_hotel_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/overlook-hotel.jpg */ "./src/images/overlook-hotel.jpg");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_search_icon_svg__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_exit_svg__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_overlook_hotel_jpg__WEBPACK_IMPORTED_MODULE_5__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit; }\n\nhtml {\n  font-size: 62.5%; }\n  html::-webkit-scrollbar {\n    display: none; }\n\nbody {\n  box-sizing: border-box;\n  padding: 5rem;\n  height: fit-content;\n  min-height: 100vh; }\n\n.btn {\n  border: 0;\n  outline: 0; }\n  .btn:disabled {\n    display: none; }\n  .btn:hover {\n    transform: translateY(-0.3rem);\n    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n    cursor: pointer; }\n    .btn:hover:after {\n      transform: scaleX(1.4) scaleY(1.6);\n      opacity: 0; }\n  .btn:active, .btn:focus {\n    transform: translateY(-0.1rem);\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2); }\n\n::-webkit-scrollbar {\n  display: none; }\n\nbody {\n  font-family: 'Noto Sans TC', sans-serif;\n  font-weight: 400;\n  line-height: 1.7;\n  color: #000; }\n\n.header__title {\n  color: white;\n  text-transform: uppercase;\n  font-family: 'Shrikhand', cursive; }\n  .header__title--main {\n    display: block;\n    font-size: 8rem;\n    letter-spacing: 3.5rem; }\n  .header__title--sub {\n    display: block;\n    font-size: 4rem;\n    letter-spacing: 1rem; }\n\n.search-bar__input {\n  line-height: 1.7;\n  font-size: 1.1rem; }\n  .search-bar__input__header--sub {\n    font-weight: 200;\n    color: #707070; }\n\n.date {\n  font-size: 1.8rem; }\n\n.hotel-points__header {\n  font-size: 3rem; }\n\n.hotel-points__points-earned {\n  font-size: 1.7rem;\n  font-weight: 700;\n  line-height: 2; }\n\n.hotel-points__tag-line {\n  font-family: 'Shrikhand', cursive;\n  font-weight: 400;\n  font-size: 2.5rem;\n  letter-spacing: .2rem; }\n\n.booked-room__card {\n  font-size: 1.4rem; }\n\n.booked-room__header {\n  font-family: 'Shrikhand', cursive;\n  font-size: 3rem;\n  letter-spacing: .5rem; }\n\n.available-rooms__header {\n  font-family: 'Shrikhand', cursive;\n  font-size: 3rem;\n  letter-spacing: .5rem; }\n\n.available-rooms__card {\n  font-size: 1.3rem;\n  font-weight: 700; }\n\n.login-page__header {\n  font-family: 'Shrikhand', cursive;\n  font-size: 3rem;\n  letter-spacing: .5rem; }\n\n.login-page__form__btn {\n  font-size: 1.6rem;\n  font-weight: 700; }\n\n.user-msg__header {\n  font-size: 1.8rem; }\n\n@keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(-10rem); }\n  80% {\n    transform: translateX(1rem); }\n  100% {\n    opacity: 1;\n    transform: translate(0); } }\n\n@keyframes moveInRight {\n  0% {\n    opacity: 0;\n    transform: translateX(10rem); }\n  80% {\n    transform: translateX(-1rem); }\n  100% {\n    opacity: 1;\n    transform: translate(0); } }\n\n@keyframes dropDown {\n  0% {\n    transform: scaleY(0); }\n  80% {\n    transform: scaleY(1.1); }\n  100% {\n    transform: scaleY(1); } }\n\n.search-bar {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  align-items: center;\n  position: fixed;\n  border: 0.5px solid #a7a7a7;\n  top: 1rem;\n  left: 50%;\n  transform: translate(-50%);\n  height: 7rem;\n  width: 80%;\n  max-width: 95rem;\n  min-width: 75rem;\n  background-color: white;\n  border-radius: 5rem;\n  z-index: 10;\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2); }\n  .search-bar__input {\n    position: relative;\n    padding-left: 3rem;\n    width: 100%;\n    height: 100%;\n    border-radius: 100px;\n    border: none; }\n    .search-bar__input:hover {\n      background-color: rgba(194, 194, 194, 0.507); }\n    .search-bar__input:focus {\n      box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.36);\n      outline: none;\n      background-color: white; }\n    .search-bar__input__header {\n      position: absolute;\n      height: 100%;\n      top: 20%; }\n      .search-bar__input__header--main {\n        display: block; }\n      .search-bar__input__header--sub {\n        display: block; }\n  .search-bar__btn {\n    position: fixed;\n    right: 1%;\n    background-color: #FF395A;\n    border-radius: 100%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-position: center;\n    background-repeat: no-repeat;\n    height: 4.5rem;\n    width: 4.5rem; }\n    .search-bar__btn:hover, .search-bar__btn:focus {\n      background-color: #ec0027; }\n\n.drop-down-menu {\n  padding: 3rem;\n  margin-left: -3rem;\n  font-size: 1.4rem;\n  line-height: 3;\n  position: fixed;\n  top: 9rem;\n  background-color: white;\n  height: 25rem;\n  width: 24%;\n  border-radius: 2rem;\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n  animation: dropDown 400ms ease-out;\n  transform-origin: top; }\n\nlabel {\n  width: fit-content;\n  height: 50%; }\n\n.date {\n  width: 70rem; }\n\n.date-label {\n  font-size: 0; }\n\n.booked-room__container {\n  display: inline-block;\n  height: 100vh;\n  overflow: scroll;\n  width: 69%; }\n\n.booked-room__img__container {\n  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.568), rgba(168, 168, 168, 0.267));\n  display: inline-block;\n  height: 100vh;\n  width: 30%;\n  overflow: hidden;\n  border-radius: .6rem; }\n\n.booked-room__img {\n  height: 100%;\n  min-height: 70rem; }\n\n.booked-room__header {\n  margin: 3rem 0 3rem 18%; }\n\n.booked-room__card {\n  display: grid;\n  grid-template-columns: 30rem repeat(2, 1fr);\n  grid-template-rows: repeat(3, 3rem) auto;\n  height: fit-content;\n  position: relative;\n  padding: 2.2rem;\n  border-bottom: 2px solid #707070; }\n  .booked-room__card__img {\n    grid-row: 1/6;\n    width: 30rem;\n    border-radius: 1rem; }\n  .booked-room__card__room-number, .booked-room__card__date-booked, .booked-room__card__type {\n    grid-column: 2;\n    margin-left: 1.5rem; }\n  .booked-room__card__number-of-beds {\n    grid-column: 3;\n    grid-row: 2;\n    justify-self: right; }\n  .booked-room__card__bed-size {\n    grid-column: 3;\n    grid-row: 1;\n    justify-self: right; }\n  .booked-room__card__btn {\n    color: #fff;\n    background-color: #FF395A;\n    border-radius: .6rem;\n    width: 15rem;\n    height: 4rem;\n    grid-column: 3;\n    grid-row: 5;\n    justify-self: right; }\n    .booked-room__card__btn:hover, .booked-room__card__btn:focus {\n      background-color: #ec0027; }\n  .booked-room__card__cost {\n    grid-row: 5;\n    align-self: end;\n    margin-left: 1.5rem; }\n\n.login-page__img {\n  display: inline-block;\n  height: 85vh;\n  width: 36%;\n  max-width: 48rem;\n  overflow: hidden;\n  border: 1px solid #707070; }\n  .login-page__img__hero-img {\n    height: 100%;\n    min-height: 75rem; }\n\n.login-page__form-container {\n  float: right;\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 60%;\n  height: 85vh; }\n\n.login-form__input, .login-error-msg {\n  display: block;\n  height: 4.5rem;\n  width: 25rem;\n  margin-top: 2rem;\n  border-radius: .6rem; }\n\n.login-page__form__btn {\n  background-color: #4CAEA6;\n  color: #292929; }\n  .login-page__form__btn:hover, .login-page__form__btn:focus {\n    background-color: #357973; }\n\n.login-error-msg {\n  color: #fff;\n  height: fit-content;\n  padding: 1rem;\n  background-color: #ff0033; }\n\n.user-msg {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 10rem;\n  height: 25rem;\n  width: 40%;\n  background-color: #fff;\n  left: 50%;\n  transform: translate(-50%);\n  z-index: 20;\n  border-radius: 3rem;\n  border: 1px solid #707070; }\n\n.exit-btn {\n  position: absolute;\n  top: 2rem;\n  right: 2rem;\n  background-color: #FF395A;\n  border-radius: 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 4.5rem;\n  width: 4.5rem; }\n  .exit-btn:hover, .exit-btn:focus {\n    background-color: #ec0027; }\n\n.available-rooms {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));\n  grid-gap: 1rem;\n  padding-top: 10rem;\n  width: 100%;\n  justify-items: center; }\n  .available-rooms__info-container {\n    padding-top: 1rem;\n    display: flex;\n    flex-wrap: wrap;\n    height: 15rem;\n    justify-content: space-around; }\n  .available-rooms__header {\n    width: 100%;\n    grid-column: 1/-1;\n    text-align: center;\n    margin-bottom: 2rem; }\n  .available-rooms__card {\n    border: 1px solid #707070;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 28rem;\n    height: 40rem;\n    padding: 1rem;\n    border-radius: .6rem; }\n    .available-rooms__card__img {\n      height: 20rem; }\n    .available-rooms__card__book-btn {\n      color: #fff;\n      background-color: #FF395A;\n      border-radius: .6rem;\n      width: 15rem;\n      height: 4rem;\n      align-self: center;\n      width: 90%;\n      margin-bottom: 1rem; }\n      .available-rooms__card__book-btn:hover, .available-rooms__card__book-btn:focus {\n        background-color: #ec0027; }\n\n.info-left,\n.info-right {\n  width: 50%; }\n\n.info-right {\n  text-align: right; }\n\n.info-center {\n  width: 100%;\n  text-align: center; }\n\n.hotel-img-container {\n  width: 100%;\n  height: 18rem;\n  overflow: hidden;\n  border-radius: 1rem; }\n\n.header {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  min-height: 80rem;\n  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.568), rgba(168, 168, 168, 0.267)), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n  background-position: bottom;\n  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%); }\n  .header__title {\n    backface-visibility: hidden;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    text-align: center; }\n    .header__title--main {\n      animation: moveInRight 1s ease-out; }\n    .header__title--sub {\n      animation: moveInLeft 1s ease-out; }\n\n.hotel-points {\n  position: relative;\n  min-height: fit-content;\n  height: 80rem;\n  width: 100%;\n  text-align: right;\n  margin-top: 8rem; }\n  .hotel-points__name {\n    margin-bottom: 1rem; }\n  .hotel-points__header {\n    margin-bottom: 1.5rem; }\n  .hotel-points__img {\n    position: absolute;\n    top: 10%;\n    left: 15%;\n    transform: translate(-50%, -50%);\n    transform: translate(0, 0);\n    background-color: linear-gradient(0deg, rgba(0, 0, 0, 0.568), rgba(168, 168, 168, 0.267));\n    width: 70%;\n    border-radius: 6px; }\n  .hotel-points__tag-line {\n    position: absolute;\n    left: 0;\n    top: 15rem;\n    text-align: left;\n    z-index: 5; }\n\n.points-container {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 30rem;\n  height: 30rem;\n  right: 8%;\n  background-color: #60AF8A;\n  padding: 3rem;\n  z-index: 5;\n  border-radius: 50% 20% 50% 40%; }\n\n[aria-hidden=\"true\"] {\n  display: none; }\n\n@media screen and (max-width: 1200px) {\n  .booked-room__card__img {\n    width: 100%; }\n  .hotel-points {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: fit-content; }\n  .hotel-points__img {\n    display: none; }\n  .hotel-points__tag-line {\n    position: unset;\n    display: inline-block;\n    text-align: center; }\n  .points-container {\n    position: unset;\n    margin-bottom: 3rem; }\n  .booked-room__card {\n    grid-template-columns: 40% repeat(2, 1fr); }\n  .search-bar {\n    width: 90%;\n    min-width: 70rem; }\n  .login-page__img {\n    width: 45%; }\n  .login-page__form-container {\n    width: 55%; }\n  .error {\n    width: 60%; }\n  .header {\n    clip-path: unset; }\n  .header__title--main {\n    font-size: 6vw;\n    letter-spacing: 2rem; }\n  .header__title--sub {\n    font-size: 3.5vw; }\n  .booked-room__img__container {\n    display: none; }\n  .booked-room__container {\n    width: 100%;\n    height: fit-content; } }\n\n@media screen and (max-width: 750px) {\n  body {\n    padding: 0; }\n  .drop-down-menu {\n    width: 80%;\n    max-width: 30rem;\n    left: 18%; }\n  .booked-room__card {\n    grid-template-rows: repeat(3, 2rem) auto;\n    font-size: 1.3rem; }\n  .booked-room__header {\n    display: block;\n    margin: 3rem auto; }\n  .booked-room__card__btn {\n    font-size: 1.2rem;\n    width: 8rem; }\n  .search-bar {\n    width: 100%;\n    min-width: 70rem;\n    top: 0;\n    border-radius: unset;\n    min-width: unset; }\n  .search-bar__input__header--sub {\n    display: none; }\n  .search-bar__input {\n    padding: 1rem; }\n  .login-page__img {\n    display: none; }\n  .login-page__form-container {\n    width: 100%; }\n  .search-bar__btn {\n    height: 3rem;\n    width: 3rem; }\n  .user-msg {\n    width: 90%; }\n  .exit-btn {\n    height: 3rem;\n    width: 3rem; }\n  .date {\n    width: 60rem;\n    padding: 0; }\n  .available-rooms {\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: unset; }\n    .available-rooms__card {\n      width: 19rem;\n      padding: 3px;\n      height: 30rem;\n      font-size: 1.1rem; }\n    .available-rooms__img {\n      height: 15rem; }\n    .available-rooms__header {\n      font-size: 2rem; }\n  .hotel-img-container {\n    height: 13rem; } }\n", "",{"version":3,"sources":["webpack://./src/css/_reset.scss","webpack://./src/css/_typography.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_mixins.scss","webpack://./src/css/_animations.scss","webpack://./src/css/_search_bar.scss","webpack://./src/css/_booking_card.scss","webpack://./src/css/_login_page.scss","webpack://./src/css/_user-message.scss","webpack://./src/css/_available_rooms.scss","webpack://./src/css/_main_page.scss","webpack://./src/css/base.scss","webpack://./src/css/_media-queries.scss"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n}\n\nbody {\n  box-sizing: border-box;\n  padding: 5rem;\n  height: fit-content;\n  min-height: 100vh;\n  \n}\n\n.btn {\n  border: 0;\n  outline: 0;\n\n  &:disabled {\n    display: none;\n  }\n\n  &:hover {\n    transform: translateY(-.3rem);\n    box-shadow: 0 1rem 2rem rgba(0, 0, 0, .2);\n    cursor: pointer;\n\n    &:after {\n      transform: scaleX(1.4) scaleY(1.6);\n      opacity:0;\n    }\n  }\n\n  &:active,\n  &:focus {\n    transform: translateY(-.1rem);\n    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .2);\n  }\n}\n\n::-webkit-scrollbar {\n    display: none;\n  }","body {\n  font-family: 'Noto Sans TC', sans-serif;\n  font-weight: 400;\n  line-height: 1.7;\n  color:$text-primary;\n}\n\n.header__title {\n  color:$text-secondary;\n  text-transform: uppercase;\n  font-family: 'Shrikhand', cursive;\n\n  &--main{\n    display: block;\n    font-size: 8rem;\n    letter-spacing: 3.5rem;\n  }\n\n  &--sub {\n    display: block;\n    font-size: 4rem;\n    letter-spacing: 1rem;\n  }\n}\n\n// Search Bar \n\n.search-bar__input {\n  line-height: 1.7;\n  font-size: 1.1rem;\n\n  &__header--sub{\n    font-weight: 200;\n    color: $subtle-tones;\n  }\n}\n\n.date {\n    font-size: 1.8rem;\n}\n\n// Customer DashBoard\n\n.hotel-points {\n  \n  &__header {\n    font-size: 3rem;\n  }\n  &__points-earned {\n    font-size: 1.7rem;\n    font-weight: 700;\n    line-height: 2;\n  }\n\n  &__tag-line {\n    font-family: 'Shrikhand', cursive;\n    font-weight: 400;\n    font-size: 2.5rem;\n    letter-spacing: .2rem;\n  }\n}\n\n.booked-room__card {\n  font-size: 1.4rem;\n}\n\n.booked-room__header {\n  @include headerFont;\n}\n\n.available-rooms__header {\n  @include headerFont;\n}\n\n.available-rooms__card {\n  font-size: 1.3rem;\n  font-weight: 700;\n}\n\n// Login page\n\n.login-page__header {\n  @include headerFont;\n}\n\n.login-page__form__btn {\n  font-size: 1.6rem;\n  font-weight: 700;\n}\n\n//error message\n\n.user-msg__header {\n  font-size: 1.8rem;\n}\n\n//available rooms \n","$text-primary: #000;\n$text-secondary: rgb(255, 255, 255);\n$subtle-tones: rgb(112, 112, 112);\n$accent: #FF395A;\n\n$main-drop-shadow: 0 1rem 2rem rgba(black, .2);\n$primary-gradient:linear-gradient(0deg, rgba(0, 0, 0, 0.568), rgba(168, 168, 168, 0.267))\n","@mixin flex {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  align-items: center;\n}\n\n@mixin center ($top, $left) {\n  position: absolute;\n  top: $top;\n  left: $left;\n  transform: translate(-50%, -50%);\n}\n\n@mixin hoverColor ($baseColor) {\n    background-color: $baseColor;\n    &:hover,\n    &:focus {\n      background-color: darken($baseColor, 15%)\n    }\n}\n\n@mixin roundButton ($img) {\n  @include hoverColor($accent);\n  border-radius: 100%;\n    background-image: url($img);\n    background-position: center;\n    background-repeat: no-repeat;\n    height:4.5rem;\n    width: 4.5rem;\n}\n\n@mixin headerFont {\n  font-family: 'Shrikhand', cursive;\n  font-size: 3rem;\n  letter-spacing: .5rem;\n}\n\n@mixin rectangleBtn {\n  color: #fff;\n  @include hoverColor($accent);\n  border-radius: .6rem;\n  width: 15rem;\n  height: 4rem;\n}","@keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(-10rem);\n  }\n\n  80%{\n    transform: translateX(1rem);\n  }\n\n  100%{\n    opacity: 1;\n    transform: translate(0);\n  }\n}\n\n@keyframes moveInRight {\n  0% {\n    opacity: 0;\n    transform: translateX(10rem);\n  }\n\n  80%{\n    transform: translateX(-1rem);\n  }\n\n  100%{\n    opacity: 1;\n    transform: translate(0);\n  }\n}\n\n@keyframes dropDown {\n    0% {\n        transform: scaleY(0)\n    }\n    80% {\n        transform: scaleY(1.1)\n    }\n    100% {\n        transform: scaleY(1)\n    }\n}\n",".search-bar {\n  @include flex;\n  position: fixed;\n  border: .5px solid rgb(167, 167, 167);\n  top: 1rem;\n  left: 50%;\n  transform: translate(-50%);\n  height: 7rem;\n  width:80%;\n  max-width: 95rem;\n  min-width: 75rem;\n  background-color: $text-secondary;\n  border-radius: 5rem;\n  z-index:10;\n  box-shadow: $main-drop-shadow;\n\n  &__input{\n    position: relative;\n    padding-left: 3rem;\n    width: 100%;\n    height: 100%;\n    border-radius: 100px;\n    border: none;\n    \n    &:hover {\n      background-color: rgba(194, 194, 194, 0.507);\n    }\n    &:focus {\n      box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.36);\n      outline: none;\n      background-color: white;\n    }\n\n    &__header {\n      position: absolute;\n      height: 100%;\n      top: 20%;\n      &--main {\n        display: block;\n      }\n\n      &--sub{\n        display: block;\n      }\n    }\n  }\n\n  &__btn{\n    position:fixed;\n    right: 1%;\n    @include roundButton ('../images/search_icon.svg')\n  }\n   \n}\n\n.drop-down-menu {\n  padding: 3rem;\n  margin-left: -3rem;\n  font-size: 1.4rem;\n  line-height: 3;\n  position: fixed;\n  top: 9rem;\n  background-color: white;\n  height: 25rem;\n  width:24%;\n  border-radius: 2rem;\n  box-shadow: 0 1rem 2rem (rgba(0, 0, 0, 0.2));\n  animation: dropDown 400ms ease-out;\n  transform-origin: top;\n}\n\nlabel{\n  width:fit-content;\n  height: 50%;\n}\n\n.date {\n  width: 70rem;\n}\n\n.date-label {\n  font-size: 0;\n}",".booked-room__container {\n  display: inline-block;\n  height: 100vh;\n  overflow: scroll;\n  width:69%;\n}\n\n.booked-room__img__container {\n  background-image: $primary-gradient;\n  display: inline-block;\n  height: 100vh;\n  width:30%;\n  overflow: hidden;\n  border-radius: .6rem;\n}\n\n.booked-room__img{\n  height: 100%;\n  min-height: 70rem;\n}\n\n.booked-room__header {\n  margin:3rem 0 3rem 18%;\n}\n.booked-room__card {\n  display: grid;\n  grid-template-columns: 30rem repeat(2, 1fr);\n  grid-template-rows: repeat(3, 3rem) auto;\n  height: fit-content;\n  position: relative;\n  padding: 2.2rem;\n  border-bottom: 2px solid $subtle-tones;\n\n  &__img {\n    grid-row: 1/6;\n    width: 30rem;\n    border-radius: 1rem;\n  }\n\n  &__room-number{\n    grid-column: 2;\n    margin-left: 1.5rem;\n  }\n\n  &__date-booked {\n    @extend .booked-room__card__room-number;\n  }\n\n  &__type {\n    @extend .booked-room__card__room-number;\n  }\n\n  &__number-of-beds {\n    grid-column: 3;\n    grid-row: 2;\n    justify-self: right;\n  }\n  \n  &__bed-size{\n    grid-column: 3;\n    grid-row: 1;\n    justify-self: right;\n  }\n  &__btn {\n    @include rectangleBtn;\n    grid-column: 3;\n    grid-row: 5;\n    justify-self: right;\n  }\n\n  &__cost{\n    grid-row: 5;\n    align-self: end;\n    margin-left: 1.5rem;\n  }\n}",".login-page__img {\n  display: inline-block;\n  height:85vh;\n  width: 36%;\n  max-width: 48rem;\n  overflow: hidden;\n  border: 1px solid $subtle-tones;\n\n  &__hero-img {\n    height:100%;\n    min-height: 75rem;\n  }\n}\n\n.login-page__form-container {\n  float: right;\n  @include flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 60%;\n  height: 85vh;\n}\n\n.login-form__input {\n  display: block;\n  height: 4.5rem;\n  width: 25rem;\n  margin-top: 2rem;\n  border-radius: .6rem;\n}\n\n.login-page__form__btn {\n  @include hoverColor(#4CAEA6);\n  color: rgb(41, 41, 41);\n}\n\n.login-error-msg {\n  @extend .login-form__input;\n  color: #fff;\n  height: fit-content;\n  padding: 1rem;\n  background-color: #ff0033;\n}",".user-msg {\n  @include flex;\n  justify-content: center;\n  position: fixed;\n  top: 10rem;\n  height: 25rem;\n  width: 40%;\n  background-color: #fff;\n  left: 50%;\n  transform: translate(-50%);\n  z-index: 20;\n  border-radius: 3rem;\n  border: 1px solid $subtle-tones;\n}\n\n.exit-btn {\n  position: absolute;\n  top: 2rem;\n  right: 2rem;\n  @include roundButton('../images/exit.svg');\n}",".available-rooms {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));\n  grid-gap: 1rem;\n  padding-top: 10rem;\n  width:100%;\n  justify-items: center;\n\n  &__info-container {\n    padding-top: 1rem;\n    display: flex;\n    flex-wrap: wrap;\n    height: 15rem;\n    justify-content: space-around;\n  }\n\n  &__header {\n   width: 100%;\n   grid-column: 1/-1;\n   text-align: center;\n   margin-bottom: 2rem;\n  }\n\n  &__card {\n    border: 1px solid $subtle-tones;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 28rem;\n    height: 40rem;\n    padding:1rem;\n    border-radius: .6rem;\n\n    &__img {\n      height: 20rem;\n    } \n\n    &__book-btn {\n      @include rectangleBtn;\n      align-self: center;\n      width: 90%;\n      margin-bottom: 1rem;\n    }\n  }\n}\n\n.info-left,\n.info-right {\n  width:50%\n}\n\n.info-right {\n  text-align: right;\n}\n\n.info-center {\n  width: 100%;\n  text-align: center;\n}\n\n.hotel-img-container {\n  width: 100%;\n  height: 18rem;\n  overflow: hidden;\n  border-radius: 1rem;\n}\n\n",".header {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  min-height: 80rem;\n  background-image: $primary-gradient, url('../images/overlook-hotel.jpg');\n  background-size: cover;\n  background-position:bottom;\n  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);\n\n  &__title {\n    backface-visibility: hidden;\n    @include center(50%, 50%);\n    text-align:center;\n    \n    &--main {\n      animation: moveInRight 1s ease-out  \n    }\n\n    &--sub {\n      animation: moveInLeft 1s ease-out  \n    }\n  }\n}\n\n.hotel-points {\n  position: relative;\n  min-height: fit-content;\n  height: 80rem;\n  width: 100%;\n  text-align: right;\n  margin-top: 8rem;\n\n  &__name {\n     margin-bottom: 1rem;\n  }\n\n  &__header {\n    margin-bottom: 1.5rem;\n  }\n\n  &__img {\n    @include center(10%, 15%);\n    transform: translate(0,0);\n    background-color: linear-gradient(0deg, rgba(0, 0, 0, 0.568), rgba(168, 168, 168, 0.267));\n    width: 70%;\n    border-radius: 6px;\n  }\n\n  &__tag-line {\n    position: absolute;\n    left: 0;\n    top: 15rem;\n    text-align: left;\n    z-index: 5;\n  }\n}\n\n.points-container {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 30rem;\n  height: 30rem;\n  right: 8%;\n  background-color: #60AF8A;\n  padding:3rem;\n  z-index:5;\n  border-radius: 50% 20% 50% 40%\n}\n\n[aria-hidden=\"true\"] {\n  display: none;\n}","@import 'variables';\n@import 'reset';\n@import 'mixins';\n@import 'typography';\n@import 'animations';\n@import 'search_bar';\n@import 'booking_card';\n@import 'login_page';\n@import 'user-message';\n@import 'available_rooms';\n@import 'main_page';\n@import 'media-queries';","@media screen and (max-width: 1200px) {\n  .booked-room__card__img {\n    width: 100%;\n  }\n\n  .hotel-points {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: fit-content;\n  }\n\n  .hotel-points__img {\n    display: none\n  }\n\n  .hotel-points__tag-line {\n    position: unset;\n    display: inline-block;\n    text-align: center;\n  }\n\n  .points-container {\n    position: unset;\n    margin-bottom: 3rem;\n  }\n\n  .booked-room__card {\n    grid-template-columns: 40% repeat(2, 1fr);\n  }\n\n  .search-bar {\n    width:90%;\n    min-width: 70rem;\n  }\n\n  .login-page__img {\n    width:45%;\n  }\n\n  .login-page__form-container {\n    width: 55%;\n  }\n\n  .error {\n    width: 60%\n  }\n\n  .header {\n    clip-path: unset;\n  }\n\n  .header__title--main {\n    font-size: 6vw;\n    letter-spacing: 2rem;\n  }\n\n  .header__title--sub {\n    font-size: 3.5vw;\n  }\n\n  .booked-room__img__container {\n    display: none;\n  }\n\n  .booked-room__container {\n    width: 100%;\n    height: fit-content;\n  }\n}\n\n\n\n@media screen and (max-width: 750px) {\n  body {\n    padding: 0;\n  }\n\n  .drop-down-menu {\n    width: 80%;\n    max-width: 30rem;\n    left: 18%;\n  }\n\n  .booked-room__card {\n    grid-template-rows: repeat(3, 2rem) auto;\n    font-size: 1.3rem;\n  }\n\n  .booked-room__header {\n    display: block;\n    margin: 3rem auto;\n  }\n\n  .booked-room__card__btn {\n    font-size: 1.2rem;\n    width: 8rem\n  }\n\n  .search-bar {\n    width:100%;\n    min-width: 70rem;\n    top: 0;\n    border-radius: unset;\n    min-width: unset;\n  }\n\n  .search-bar__input__header--sub {\n    display: none;\n  }\n\n  .search-bar__input {\n    padding: 1rem;\n  }\n\n  .login-page__img {\n    display: none;\n  }\n\n  .login-page__form-container {\n    width: 100%;\n  }\n\n  .search-bar__btn {\n    height: 3rem;\n    width: 3rem;\n  }\n\n  .user-msg {\n    width: 90%\n  }\n\n  .exit-btn {\n    height: 3rem;\n    width: 3rem;\n  }\n\n  .date {\n    width: 60rem;\n    padding:0;\n  }\n\n  .available-rooms {\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: unset;\n\n    &__card {\n      width: 19rem;\n      padding: 3px;\n      height:30rem;\n      font-size: 1.1rem;\n    }\n\n    &__img {\n      height: 15rem\n    }\n\n    &__header {\n      font-size: 2rem;\n    }\n  }\n\n  .hotel-img-container {\n    height: 13rem;\n  }\n\n  \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Customer.js":
/*!*************************!*\
  !*** ./src/Customer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Human__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Human */ "./src/Human.js");


class Costumer extends _Human__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(customer) {
    super()
    this.id = customer.id;
    this.name = customer.name;
  }    
}

/* harmony default export */ __webpack_exports__["default"] = (Costumer);

/***/ }),

/***/ "./src/Hotel.js":
/*!**********************!*\
  !*** ./src/Hotel.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Hotel {
  constructor(name, rooms, bookings, customers) {
    this.name = name;
    this.rooms = rooms;
    this.bookings = bookings;
    this.customers = customers;
  }
  checkAvailableRooms(checkIn) {
    const today = new Date();
    today.setHours(0,0,0,0);
    if (!checkIn || new Date(checkIn) < today) {
      return false
    }
    const unavailable = this.bookings.filter(room => room.date === checkIn)
      .map(room => room.roomNumber);
    return this.rooms.filter(room => !unavailable.includes(room.number));
  }

  filterRoomsBySearchCriteria(availableRooms, searchInput, type) {
    if (searchInput.length === 0) {
      return availableRooms;
    }
    const results = searchInput.reduce((foundRooms, keyword) => {
      availableRooms.forEach(room => {
        if (room[type].toString() === keyword && !foundRooms.includes(room)) {
          foundRooms.push(room);
        }
      });
      return foundRooms;
    }, []);
    return results;
  }

  returnAllFilteredResults(date, typeOfRoom, sizeOfBed, numberOfBeds) {
    const availableRooms = this.checkAvailableRooms(date)
    if (availableRooms === false) {
      return false
    }
    const byType = this.filterRoomsBySearchCriteria(availableRooms, typeOfRoom, 'roomType');
    const byBedSize = this.filterRoomsBySearchCriteria(byType, sizeOfBed, 'bedSize');
    const byNumberOfBeds = this.filterRoomsBySearchCriteria(byBedSize, numberOfBeds, 'numBeds');
    const finalResult = byNumberOfBeds;
    return finalResult;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Hotel);

/***/ }),

/***/ "./src/Human.js":
/*!**********************!*\
  !*** ./src/Human.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Human {
  returnBookingHistory(hotel, id = this.id) {
    if (!hotel.bookings.some(roomBooked => roomBooked.userID === id)) {
      return [];
    }
    return hotel.bookings.filter(room => room.userID === id);
  }
  
  findSpecificRooms(hotel, id = this.id) {
    const roomsBooked = this.returnBookingHistory(hotel, id);
    const specificRooms = roomsBooked.map(room => {
      const hotelRoom = hotel.rooms.find(hotelRoom => hotelRoom.number === room.roomNumber)
      return {...hotelRoom, dateBooked:room.date, bookingID: room.id}
    })
    return specificRooms;
  }

  organizeBookingsByDate(hotel, id = this.id) {
    const bookedRooms = this.findSpecificRooms(hotel, id);
    const sorted = bookedRooms.sort((a, b) => {
      return new Date(b.dateBooked) - new Date(a.dateBooked);
    })
    return sorted;
  }

  returnTotalBookingCost(hotel, id = this.id) {
    const roomsBooked = this.findSpecificRooms(hotel, id);
    const amountPaid = roomsBooked.reduce((totalCost, room) => {
      totalCost += room.costPerNight;
      return totalCost;
    }, 0);
    return parseFloat(amountPaid.toFixed(2));
  }

  returnPointsEarned(hotel, id = this.id) {
    const amountPaid = this.returnTotalBookingCost(hotel, id);
    return Math.floor(amountPaid / 10);
  }  
}

/* harmony default export */ __webpack_exports__["default"] = (Human);

/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const data = {
  getData(type) {
    return fetch(`https://overlook-hotel.herokuapp.com/api/v1/${type}`)
      .then(data.handleErrors)
      .then(data => data[type])
      .catch(err => alert(err));
  },
  getAllHotelData() {
    const dataTypes = ['rooms', 'bookings', 'customers'];
    return dataTypes.map(this.getData);
  },
  getUserData(customerID, callback) {
    return fetch(`https://overlook-hotel.herokuapp.com/api/v1/customers/${customerID}`)
      .then(data.handleErrors)
      .then(data => data)
      .catch(callback)
  },
  bookRoom(room) {
    return fetch('https://overlook-hotel.herokuapp.com/api/v1/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(room),
    })
  },
  cancelBooking(id) {
    return fetch('https://overlook-hotel.herokuapp.com/api/v1/bookings/' + id, {
      method: 'DELETE',
    })
  },
  handleErrors(response) {
    if (!response.ok) {
      throw Error('Oops! Something went wrong please try again.');
    }
    return response.json()
  }
}

/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./src/images/exit.svg":
/*!*****************************!*\
  !*** ./src/images/exit.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/exit.svg");

/***/ }),

/***/ "./src/images/joshua-tree.jpg":
/*!************************************!*\
  !*** ./src/images/joshua-tree.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/joshua-tree.jpg");

/***/ }),

/***/ "./src/images/login-hotel.jpg":
/*!************************************!*\
  !*** ./src/images/login-hotel.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/login-hotel.jpg");

/***/ }),

/***/ "./src/images/overlook-hotel.jpg":
/*!***************************************!*\
  !*** ./src/images/overlook-hotel.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/overlook-hotel.jpg");

/***/ }),

/***/ "./src/images/room-1.jpg":
/*!*******************************!*\
  !*** ./src/images/room-1.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/room-1.jpg");

/***/ }),

/***/ "./src/images/room-10.jpg":
/*!********************************!*\
  !*** ./src/images/room-10.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/room-10.jpg");

/***/ }),

/***/ "./src/images/room-11.jpg":
/*!********************************!*\
  !*** ./src/images/room-11.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/room-11.jpg");

/***/ }),

/***/ "./src/images/room-12.jpg":
/*!********************************!*\
  !*** ./src/images/room-12.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/room-12.jpg");

/***/ }),

/***/ "./src/images/room-13.jpg":
/*!********************************!*\
  !*** ./src/images/room-13.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/room-13.jpg");

/***/ }),

/***/ "./src/images/room-14.jpg":
/*!********************************!*\
  !*** ./src/images/room-14.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/room-14.jpg");

/***/ }),

/***/ "./src/images/room-15.jpg":
/*!********************************!*\
  !*** ./src/images/room-15.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/room-15.jpg");

/***/ }),

/***/ "./src/images/room-16.jpg":
/*!********************************!*\
  !*** ./src/images/room-16.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/room-16.jpg");

/***/ }),

/***/ "./src/images/room-17.jpg":
/*!********************************!*\
  !*** ./src/images/room-17.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/room-17.jpg");

/***/ }),

/***/ "./src/images/room-18.jpg":
/*!********************************!*\
  !*** ./src/images/room-18.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/room-18.jpg");

/***/ }),

/***/ "./src/images/room-19.jpg":
/*!********************************!*\
  !*** ./src/images/room-19.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/room-19.jpg");

/***/ }),

/***/ "./src/images/room-2.jpg":
/*!*******************************!*\
  !*** ./src/images/room-2.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/room-2.jpg");

/***/ }),

/***/ "./src/images/room-20.jpg":
/*!********************************!*\
  !*** ./src/images/room-20.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/room-20.jpg");

/***/ }),

/***/ "./src/images/room-21.jpg":
/*!********************************!*\
  !*** ./src/images/room-21.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/room-21.jpg");

/***/ }),

/***/ "./src/images/room-22.jpg":
/*!********************************!*\
  !*** ./src/images/room-22.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/room-22.jpg");

/***/ }),

/***/ "./src/images/room-23.jpg":
/*!********************************!*\
  !*** ./src/images/room-23.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/room-23.jpg");

/***/ }),

/***/ "./src/images/room-24.jpg":
/*!********************************!*\
  !*** ./src/images/room-24.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/room-24.jpg");

/***/ }),

/***/ "./src/images/room-25.jpg":
/*!********************************!*\
  !*** ./src/images/room-25.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/room-25.jpg");

/***/ }),

/***/ "./src/images/room-3.jpg":
/*!*******************************!*\
  !*** ./src/images/room-3.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/room-3.jpg");

/***/ }),

/***/ "./src/images/room-4.jpg":
/*!*******************************!*\
  !*** ./src/images/room-4.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/room-4.jpg");

/***/ }),

/***/ "./src/images/room-5.jpg":
/*!*******************************!*\
  !*** ./src/images/room-5.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/room-5.jpg");

/***/ }),

/***/ "./src/images/room-6.jpg":
/*!*******************************!*\
  !*** ./src/images/room-6.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/room-6.jpg");

/***/ }),

/***/ "./src/images/room-7.jpg":
/*!*******************************!*\
  !*** ./src/images/room-7.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/room-7.jpg");

/***/ }),

/***/ "./src/images/room-8.jpg":
/*!*******************************!*\
  !*** ./src/images/room-8.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/room-8.jpg");

/***/ }),

/***/ "./src/images/room-9.jpg":
/*!*******************************!*\
  !*** ./src/images/room-9.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/room-9.jpg");

/***/ }),

/***/ "./src/images/search_icon.svg":
/*!************************************!*\
  !*** ./src/images/search_icon.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/search_icon.svg");

/***/ }),

/***/ "./src/images/sunset.jpg":
/*!*******************************!*\
  !*** ./src/images/sunset.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/sunset.jpg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _Hotel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hotel */ "./src/Hotel.js");
/* harmony import */ var _Customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Customer */ "./src/Customer.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _images_overlook_hotel_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/overlook-hotel.jpg */ "./src/images/overlook-hotel.jpg");
/* harmony import */ var _images_search_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/search_icon.svg */ "./src/images/search_icon.svg");
/* harmony import */ var _images_exit_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/exit.svg */ "./src/images/exit.svg");
/* harmony import */ var _images_joshua_tree_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/joshua-tree.jpg */ "./src/images/joshua-tree.jpg");
/* harmony import */ var _images_login_hotel_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/login-hotel.jpg */ "./src/images/login-hotel.jpg");
/* harmony import */ var _images_sunset_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/sunset.jpg */ "./src/images/sunset.jpg");
/* harmony import */ var _images_room_1_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/room-1.jpg */ "./src/images/room-1.jpg");
/* harmony import */ var _images_room_2_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/room-2.jpg */ "./src/images/room-2.jpg");
/* harmony import */ var _images_room_3_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/room-3.jpg */ "./src/images/room-3.jpg");
/* harmony import */ var _images_room_4_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/room-4.jpg */ "./src/images/room-4.jpg");
/* harmony import */ var _images_room_5_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/room-5.jpg */ "./src/images/room-5.jpg");
/* harmony import */ var _images_room_6_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/room-6.jpg */ "./src/images/room-6.jpg");
/* harmony import */ var _images_room_7_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/room-7.jpg */ "./src/images/room-7.jpg");
/* harmony import */ var _images_room_8_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/room-8.jpg */ "./src/images/room-8.jpg");
/* harmony import */ var _images_room_9_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/room-9.jpg */ "./src/images/room-9.jpg");
/* harmony import */ var _images_room_10_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./images/room-10.jpg */ "./src/images/room-10.jpg");
/* harmony import */ var _images_room_11_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./images/room-11.jpg */ "./src/images/room-11.jpg");
/* harmony import */ var _images_room_12_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./images/room-12.jpg */ "./src/images/room-12.jpg");
/* harmony import */ var _images_room_13_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./images/room-13.jpg */ "./src/images/room-13.jpg");
/* harmony import */ var _images_room_14_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./images/room-14.jpg */ "./src/images/room-14.jpg");
/* harmony import */ var _images_room_15_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./images/room-15.jpg */ "./src/images/room-15.jpg");
/* harmony import */ var _images_room_16_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./images/room-16.jpg */ "./src/images/room-16.jpg");
/* harmony import */ var _images_room_17_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./images/room-17.jpg */ "./src/images/room-17.jpg");
/* harmony import */ var _images_room_18_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./images/room-18.jpg */ "./src/images/room-18.jpg");
/* harmony import */ var _images_room_19_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./images/room-19.jpg */ "./src/images/room-19.jpg");
/* harmony import */ var _images_room_20_jpg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./images/room-20.jpg */ "./src/images/room-20.jpg");
/* harmony import */ var _images_room_21_jpg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./images/room-21.jpg */ "./src/images/room-21.jpg");
/* harmony import */ var _images_room_22_jpg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./images/room-22.jpg */ "./src/images/room-22.jpg");
/* harmony import */ var _images_room_23_jpg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./images/room-23.jpg */ "./src/images/room-23.jpg");
/* harmony import */ var _images_room_24_jpg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./images/room-24.jpg */ "./src/images/room-24.jpg");
/* harmony import */ var _images_room_25_jpg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./images/room-25.jpg */ "./src/images/room-25.jpg");






































const searchButton = document.getElementById('searchBtn');
const availableRoomsSection = document.getElementById('availableRooms');
const bookedRooms = document.getElementById('bookedRooms');
const searchForm = document.getElementById('searchForm');
const userMessage = document.getElementById('userMessage');
const loginButton = document.getElementById('loginBtn');

let hotel;
let customer;

const createHotel = () => {
  Promise.all(_data__WEBPACK_IMPORTED_MODULE_3__["default"].getAllHotelData())
    .then(values => hotel = new _Hotel__WEBPACK_IMPORTED_MODULE_1__["default"]("overLook", values[0], values[1], values[2]));
};

const toggleHidden = (element, hidden = 'true') => element.setAttribute('aria-hidden', hidden);

const createUser = (e) => {
  e.preventDefault();
  const userName = document.getElementById('userNameInput').value;
  Promise.resolve(_data__WEBPACK_IMPORTED_MODULE_3__["default"].getUserData(parseInt(findUserID(userName)), () => showLoginError()))
    .then(value => {
      customer = new _Customer__WEBPACK_IMPORTED_MODULE_2__["default"](value);
      login();
      displayRooms();
      displayPointsEarned();
    })
};

const login = () => {
  const password = document.getElementById('passwordInput').value;
  if (password !== 'overlook2021') {
    showLoginError();
    return;
  }
  showMain();
}

const disableButton = (date) => {
  if (new Date(date) < new Date()) {
    return 'disabled';
  }
  return;
}

const displayRooms = () => {
  const bookedRooms = document.getElementById('bookedRooms');
  bookedRooms.innerHTML = '';
  customer.organizeBookingsByDate(hotel).forEach(room => {
    const section = document.createElement('section');
    section.className = 'booked-room__card';
    section.tabIndex = "0"
    section.dataset.bookingID = room.bookingID;
    section.innerHTML = 
      `<img src="./images/room-${room.number}.jpg" alt="Hotel room with a bed and desk" class="booked-room__card__img">
      <p class="booked-room__card__room-number">Room ${room.number}</p>
      <p class="booked-room__card__date-booked">${fixDate(room.dateBooked)}</p>
      <p class="booked-room__card__type"> ${capitalizeWords(room.roomType)}</p>
      <p class="booked-room__card__bed-size">Bed Size ${capitalizeWords(room.bedSize)}</p>
      <p class="booked-room__card__number-of-beds">Beds: ${room.numBeds}</p>
      <p class="booked-room__card__cost">${room.costPerNight} / Night</p>
      <button class="booked-room__card__btn btn" ${disableButton(room.dateBooked)}>Cancel Reservation</button>`; 
    bookedRooms.append(section);
  });
};

const displayPointsEarned = () => {
  const pointsEarned = document.getElementById('pointsEarned');
  const customerName = document.getElementById('customerName')
  pointsEarned.innerText = 
    `You've earned ${customer.returnPointsEarned(hotel)} points
    Total spent ${customer.returnTotalBookingCost(hotel)}`;
  customerName.innerText = `Welcome back ${customer.name.split(' ')[0]}!`
}

const compileFormData = (elements) => {
  const data = {
    date: elements[0].value.replace(/-/g, "/"),
    roomType: [],
    bedSize: [],
    numBeds: []
  };
  elements.forEach(element => {
    if (element.className.includes('room-type') && element.checked) {
      data.roomType.push(element.value);
    }
    if (element.className.includes('bed-size') && element.checked) {
      data.bedSize.push(element.value);
    }
    if (element.className.includes('number-of-beds') && element.checked) {
      data.numBeds.push(element.value);
    }
  });
  return data;
}

const retrieveFormValues = () => {
  const values = document.getElementById('searchForm');
  const data = compileFormData(Array.from(values.elements));
  return data;
}

const displaySearchResults = (e) => {
  e.preventDefault();
  const data = retrieveFormValues();
  const results = hotel.returnAllFilteredResults(data.date, 
    data.roomType, data.bedSize, data.numBeds);
  const header = results.length === 0 ? 
    `Sorry no rooms match your search criteria for ${fixDate(data.date)}. Please try again.` 
    : `Rooms available on ${fixDate(data.date)}`
  if (results) {
    const availableRooms = document.getElementById('availableRooms');
    availableRooms.innerHTML = "";
    availableRooms.innerHTML =
    `<h2 class="available-rooms__header"> ${header} </h2>`;
    results.forEach(result => {
      availableRooms.innerHTML += 
      `<section class="available-rooms__card">
        <div class="hotel-img-container">
          <img src="./images/room-${result.number}.jpg" alt="Your next hotel room" class="available-rooms__card__img">
        </div>
        <div class="available-rooms__info-container">
          <p class="info-left available-rooms__card__room-number">Room ${result.number}</p>
          <p class="info-right available-rooms__card__bed-size">Bed Size - ${capitalizeWords(result.bedSize)}</p>
          <p class="info-left available-rooms__card__room-type">${capitalizeWords(result.roomType)}</p>
          <p class="info-right available-rooms__card__number-of-beds">Total Beds - ${result.numBeds}</p>
          <p class="info-center available-rooms__card__has-bidet">${result.bidet ? "Complimentary Bidet!" : ""}</p>
          <p class="info-center available-rooms__card__cost-per-night">$${result.costPerNight} / Per Night</p>
        </div>
        <button class="available-rooms__card__book-btn book-now btn" data-booking-data=${storeBookingData(data.date, result)}>Book Now</button>
      </section>`
    });
    document.location.href = '#availableRooms';
    searchForm.reset();
    return; 
  }
  displayUserMessage('Please enter a valid date.');
}

const displayUserMessage = (content) => {
  const message = document.getElementById('message');
  message.innerText = content;
  toggleHidden(userMessage, 'false');
}


let fixDate = (date) => {
  const splitDate = date.split('/');
  splitDate.push(splitDate.shift());
  const joined = splitDate.join('/');
  return joined;
}

const capitalizeWords = (string) => {
  let words = string.split(' ');
  let capitalized = words.map( word => word.charAt(0).toUpperCase() + word.slice(1, word.length))
  return capitalized.join(' ');
}

const storeBookingData = (date, data) => {
  const bookingData = {
    userID: customer.id,
    date: date,
    roomNumber: data.number
  };
  return JSON.stringify(bookingData);
}

const makeReservation = (e) => {
  if (e.target.className.includes('btn')) {
    _data__WEBPACK_IMPORTED_MODULE_3__["default"].bookRoom(JSON.parse(e.target.dataset.bookingData))
      .then(_data__WEBPACK_IMPORTED_MODULE_3__["default"].handleErrors)
      .then(data => {
        hotel.bookings.push(data.newBooking)
        displayRooms();
        displayPointsEarned();
        displayUserMessage(`Booking for ${fixDate(data.newBooking.date)} complete.
        Confirmation number - ${data.newBooking.id}`)
      })
      .catch(err => alert(err));
    e.target.parentElement.remove();
  }
}

const updateBookings = () => {
  Promise.resolve(_data__WEBPACK_IMPORTED_MODULE_3__["default"].getData('bookings')) 
    .then(values => {
      hotel.bookings = values;
      displayRooms();
      displayPointsEarned();
    });
}


const cancelReservation = (e) => {
  if (e.target.className.includes('btn')) {
    const id = e.target.parentElement.dataset.bookingID;
    _data__WEBPACK_IMPORTED_MODULE_3__["default"].cancelBooking(id)
      .then(_data__WEBPACK_IMPORTED_MODULE_3__["default"].handleErrors)
      .then(() => {
        updateBookings();
        displayUserMessage(`Your reservation has been canceled.`);
      })
      .catch(err => alert(err));
  }
}

const findUserID = (userName) => userName.replace("overlook", "");

const showMain = () => {
  const mainElements = document.querySelectorAll('.main-page');
  const loginPage = document.getElementById('loginPage');
  toggleHidden(loginPage);
  mainElements.forEach(element => toggleHidden(element, 'false'));
}

const showLoginError = () => {
  const errorMessage = document.getElementById('errorMessage');
  toggleHidden(errorMessage, 'false');
}

const handleSearchEvents = (e) => {
  hideSearchDropDowns();
  if (e.target.closest('.clickable')) {
    const target = e.target.closest('.clickable').childNodes[3];
    toggleHidden(target, 'false');
  }
}

const closeSearchBar = (e) => { 
  if (e.target.className.includes('exit-btn')) {
    toggleHidden(userMessage);
  }
  if (!e.target.closest('.search-bar')) {
    hideSearchDropDowns();
  }
}

const hideSearchDropDowns = () => {
  const menus = document.querySelectorAll('.drop-down-menu');
  menus.forEach(element => toggleHidden(element));
}

const hideOnScroll = () => {
  toggleHidden(userMessage);
  hideSearchDropDowns();
}

const tabThroughSearch = (e) => {
  if (e.keyCode === 13) {
    hideSearchDropDowns();
    const target = e.target.closest('.clickable').childNodes[3];
    toggleHidden(target, 'false');
  }
}

window.onload = createHotel();
loginButton.addEventListener('click', createUser);
window.addEventListener('click', closeSearchBar);
window.addEventListener('scroll', hideOnScroll);
searchButton.addEventListener('click', displaySearchResults);
availableRoomsSection.addEventListener('click', makeReservation);
bookedRooms.addEventListener('click', cancelReservation);
searchForm.addEventListener('click', handleSearchEvents);
searchForm.addEventListener('keydown', tabThroughSearch);



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ3VzdG9tZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hvdGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9IdW1hbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz8xMTA3Iiwid2VicGFjazovLy8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvZXhpdC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9qb3NodWEtdHJlZS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9sb2dpbi1ob3RlbC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9vdmVybG9vay1ob3RlbC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tLTEuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS0xMC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tLTExLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20tMTIuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS0xMy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tLTE0LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20tMTUuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS0xNi5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tLTE3LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20tMTguanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS0xOS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tLTIuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS0yMC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tLTIxLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20tMjIuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS0yMy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tLTI0LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20tMjUuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS0zLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20tNC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tLTUuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS02LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20tNy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tLTguanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS05LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3NlYXJjaF9pY29uLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3N1bnNldC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7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QkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxVQUFVLHVCQUF1QixNQUFNLEtBQUssaUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sdUJBQXVCLE9BQU8sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxpQkFBaUIsT0FBTyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksZ0JBQWdCLEtBQUssaUJBQWlCLE1BQU0sWUFBWSxXQUFXLGlCQUFpQixNQUFNLFlBQVksV0FBVyxlQUFlLEtBQUssZUFBZSxNQUFNLGVBQWUsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsZUFBZSxLQUFLLGtCQUFrQixPQUFPLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLG1CQUFtQixNQUFNLFlBQVksaUJBQWlCLE1BQU0saUJBQWlCLEtBQUssZ0JBQWdCLE1BQU0sWUFBWSxXQUFXLFlBQVksaUJBQWlCLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLG1CQUFtQixNQUFNLFVBQVUsa0JBQWtCLE9BQU8sbUJBQW1CLE9BQU8sV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsa0JBQWtCLE9BQU8sVUFBVSxVQUFVLGlCQUFpQixNQUFNLFVBQVUsaUJBQWlCLE1BQU0sVUFBVSxVQUFVLGlCQUFpQixNQUFNLFVBQVUsVUFBVSxpQkFBaUIsTUFBTSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsV0FBVyxVQUFVLGlCQUFpQixPQUFPLGlCQUFpQixPQUFPLFVBQVUsVUFBVSxrQkFBa0IsT0FBTyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsa0JBQWtCLE1BQU0sVUFBVSxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsZ0JBQWdCLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxtQkFBbUIsT0FBTyxjQUFj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QUFvQixFOzs7Ozs7Ozs7Ozs7QUNBbkM7QUFBZSxtRkFBb0IsRTs7Ozs7Ozs7Ozs7O0FDQW5DO0FBQWUsbUZBQW9CLEU7Ozs7Ozs7Ozs7OztBQ0FuQztBQUFlLG1GQUFvQixFOzs7Ozs7Ozs7Ozs7QUNBbkM7QUFBZSxtRkFBb0IsRTs7Ozs7Ozs7Ozs7O0FDQW5DO0FBQWUsbUZBQW9CLEU7Ozs7Ozs7Ozs7OztBQ0FuQztBQUFlLG1GQUFvQixFOzs7Ozs7Ozs7Ozs7QUNBbkM7QUFBZSxtRkFBb0IsRTs7Ozs7Ozs7Ozs7O0FDQW5DO0FBQWUsbUZBQW9CLEU7Ozs7Ozs7Ozs7OztBQ0FuQztBQUFlLGtGQUFtQixFOzs7Ozs7Ozs7Ozs7QUNBbEM7QUFBZSxtRkFBb0IsRTs7Ozs7Ozs7Ozs7O0FDQW5DO0FBQWUsbUZBQW9CLEU7Ozs7Ozs7Ozs7OztBQ0FuQztBQUFlLG1GQUFvQixFOzs7Ozs7Ozs7Ozs7QUNBbkM7QUFBZSxtRkFBb0IsRTs7Ozs7Ozs7Ozs7O0FDQW5DO0FBQWUsbUZBQW9CLEU7Ozs7Ozs7Ozs7OztBQ0FuQztBQUFlLG1GQUFvQixFOzs7Ozs7Ozs7Ozs7QUNBbkM7QUFBZSxrRkFBbUIsRTs7Ozs7Ozs7Ozs7O0FDQWxDO0FBQWUsa0ZBQW1CLEU7Ozs7Ozs7Ozs7OztBQ0FsQztBQUFlLGtGQUFtQixFOzs7Ozs7Ozs7Ozs7QUNBbEM7QUFBZSxrRkFBbUIsRTs7Ozs7Ozs7Ozs7O0FDQWxDO0FBQWUsa0ZBQW1CLEU7Ozs7Ozs7Ozs7OztBQ0FsQztBQUFlLGtGQUFtQixFOzs7Ozs7Ozs7Ozs7QUNBbEM7QUFBZSxrRkFBbUIsRTs7Ozs7Ozs7Ozs7O0FDQWxDO0FBQWUsdUZBQXdCLEU7Ozs7Ozs7Ozs7OztBQ0F2QztBQUFlLGtGQUFtQixFOzs7Ozs7Ozs7Ozs7QUNBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vaW1hZ2VzL3NlYXJjaF9pY29uLnN2Z1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fIGZyb20gXCIuLi9pbWFnZXMvZXhpdC5zdmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyBmcm9tIFwiLi4vaW1hZ2VzL292ZXJsb29rLWhvdGVsLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7IH1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7IH1cXG4gIGh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcblxcbmJvZHkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDVyZW07XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgbWluLWhlaWdodDogMTAwdmg7IH1cXG5cXG4uYnRuIHtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IDA7IH1cXG4gIC5idG46ZGlzYWJsZWQge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAuYnRuOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjNyZW0pO1xcbiAgICBib3gtc2hhZG93OiAwIDFyZW0gMnJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAuYnRuOmhvdmVyOmFmdGVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjQpIHNjYWxlWSgxLjYpO1xcbiAgICAgIG9wYWNpdHk6IDA7IH1cXG4gIC5idG46YWN0aXZlLCAuYnRuOmZvY3VzIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjFyZW0pO1xcbiAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTsgfVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgVEMnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XFxuICBjb2xvcjogIzAwMDsgfVxcblxcbi5oZWFkZXJfX3RpdGxlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LWZhbWlseTogJ1NocmlraGFuZCcsIGN1cnNpdmU7IH1cXG4gIC5oZWFkZXJfX3RpdGxlLS1tYWluIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogOHJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDMuNXJlbTsgfVxcbiAgLmhlYWRlcl9fdGl0bGUtLXN1YiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcmVtOyB9XFxuXFxuLnNlYXJjaC1iYXJfX2lucHV0IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XFxuICBmb250LXNpemU6IDEuMXJlbTsgfVxcbiAgLnNlYXJjaC1iYXJfX2lucHV0X19oZWFkZXItLXN1YiB7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGNvbG9yOiAjNzA3MDcwOyB9XFxuXFxuLmRhdGUge1xcbiAgZm9udC1zaXplOiAxLjhyZW07IH1cXG5cXG4uaG90ZWwtcG9pbnRzX19oZWFkZXIge1xcbiAgZm9udC1zaXplOiAzcmVtOyB9XFxuXFxuLmhvdGVsLXBvaW50c19fcG9pbnRzLWVhcm5lZCB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMjsgfVxcblxcbi5ob3RlbC1wb2ludHNfX3RhZy1saW5lIHtcXG4gIGZvbnQtZmFtaWx5OiAnU2hyaWtoYW5kJywgY3Vyc2l2ZTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAuMnJlbTsgfVxcblxcbi5ib29rZWQtcm9vbV9fY2FyZCB7XFxuICBmb250LXNpemU6IDEuNHJlbTsgfVxcblxcbi5ib29rZWQtcm9vbV9faGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiAnU2hyaWtoYW5kJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAuNXJlbTsgfVxcblxcbi5hdmFpbGFibGUtcm9vbXNfX2hlYWRlciB7XFxuICBmb250LWZhbWlseTogJ1NocmlraGFuZCcsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBsZXR0ZXItc3BhY2luZzogLjVyZW07IH1cXG5cXG4uYXZhaWxhYmxlLXJvb21zX19jYXJkIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDsgfVxcblxcbi5sb2dpbi1wYWdlX19oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6ICdTaHJpa2hhbmQnLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC41cmVtOyB9XFxuXFxuLmxvZ2luLXBhZ2VfX2Zvcm1fX2J0biB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXG5cXG4udXNlci1tc2dfX2hlYWRlciB7XFxuICBmb250LXNpemU6IDEuOHJlbTsgfVxcblxcbkBrZXlmcmFtZXMgbW92ZUluTGVmdCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTByZW0pOyB9XFxuICA4MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXJlbSk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBtb3ZlSW5SaWdodCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHJlbSk7IH1cXG4gIDgwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXJlbSk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBkcm9wRG93biB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApOyB9XFxuICA4MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxLjEpOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7IH0gfVxcblxcbi5zZWFyY2gtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleDogMTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICNhN2E3YTc7XFxuICB0b3A6IDFyZW07XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcXG4gIGhlaWdodDogN3JlbTtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXgtd2lkdGg6IDk1cmVtO1xcbiAgbWluLXdpZHRoOiA3NXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgYm94LXNoYWRvdzogMCAxcmVtIDJyZW0gcmdiYSgwLCAwLCAwLCAwLjIpOyB9XFxuICAuc2VhcmNoLWJhcl9faW5wdXQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIGJvcmRlcjogbm9uZTsgfVxcbiAgICAuc2VhcmNoLWJhcl9faW5wdXQ6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk0LCAxOTQsIDE5NCwgMC41MDcpOyB9XFxuICAgIC5zZWFyY2gtYmFyX19pbnB1dDpmb2N1cyB7XFxuICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zNik7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxcbiAgICAuc2VhcmNoLWJhcl9faW5wdXRfX2hlYWRlciB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICB0b3A6IDIwJTsgfVxcbiAgICAgIC5zZWFyY2gtYmFyX19pbnB1dF9faGVhZGVyLS1tYWluIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAgICAgLnNlYXJjaC1iYXJfX2lucHV0X19oZWFkZXItLXN1YiB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgLnNlYXJjaC1iYXJfX2J0biB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcmlnaHQ6IDElO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYzOTVBO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGhlaWdodDogNC41cmVtO1xcbiAgICB3aWR0aDogNC41cmVtOyB9XFxuICAgIC5zZWFyY2gtYmFyX19idG46aG92ZXIsIC5zZWFyY2gtYmFyX19idG46Zm9jdXMge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYzAwMjc7IH1cXG5cXG4uZHJvcC1kb3duLW1lbnUge1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIG1hcmdpbi1sZWZ0OiAtM3JlbTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDM7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDlyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMjVyZW07XFxuICB3aWR0aDogMjQlO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGJveC1zaGFkb3c6IDAgMXJlbSAycmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGFuaW1hdGlvbjogZHJvcERvd24gNDAwbXMgZWFzZS1vdXQ7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7IH1cXG5cXG5sYWJlbCB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IDUwJTsgfVxcblxcbi5kYXRlIHtcXG4gIHdpZHRoOiA3MHJlbTsgfVxcblxcbi5kYXRlLWxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMDsgfVxcblxcbi5ib29rZWQtcm9vbV9fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgd2lkdGg6IDY5JTsgfVxcblxcbi5ib29rZWQtcm9vbV9faW1nX19jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMC41NjgpLCByZ2JhKDE2OCwgMTY4LCAxNjgsIDAuMjY3KSk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDMwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItcmFkaXVzOiAuNnJlbTsgfVxcblxcbi5ib29rZWQtcm9vbV9faW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDcwcmVtOyB9XFxuXFxuLmJvb2tlZC1yb29tX19oZWFkZXIge1xcbiAgbWFyZ2luOiAzcmVtIDAgM3JlbSAxOCU7IH1cXG5cXG4uYm9va2VkLXJvb21fX2NhcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzByZW0gcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAzcmVtKSBhdXRvO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDIuMnJlbTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNzA3MDcwOyB9XFxuICAuYm9va2VkLXJvb21fX2NhcmRfX2ltZyB7XFxuICAgIGdyaWQtcm93OiAxLzY7XFxuICAgIHdpZHRoOiAzMHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTsgfVxcbiAgLmJvb2tlZC1yb29tX19jYXJkX19yb29tLW51bWJlciwgLmJvb2tlZC1yb29tX19jYXJkX19kYXRlLWJvb2tlZCwgLmJvb2tlZC1yb29tX19jYXJkX190eXBlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07IH1cXG4gIC5ib29rZWQtcm9vbV9fY2FyZF9fbnVtYmVyLW9mLWJlZHMge1xcbiAgICBncmlkLWNvbHVtbjogMztcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7IH1cXG4gIC5ib29rZWQtcm9vbV9fY2FyZF9fYmVkLXNpemUge1xcbiAgICBncmlkLWNvbHVtbjogMztcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7IH1cXG4gIC5ib29rZWQtcm9vbV9fY2FyZF9fYnRuIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjM5NUE7XFxuICAgIGJvcmRlci1yYWRpdXM6IC42cmVtO1xcbiAgICB3aWR0aDogMTVyZW07XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDM7XFxuICAgIGdyaWQtcm93OiA1O1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0OyB9XFxuICAgIC5ib29rZWQtcm9vbV9fY2FyZF9fYnRuOmhvdmVyLCAuYm9va2VkLXJvb21fX2NhcmRfX2J0bjpmb2N1cyB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjMDAyNzsgfVxcbiAgLmJvb2tlZC1yb29tX19jYXJkX19jb3N0IHtcXG4gICAgZ3JpZC1yb3c6IDU7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTsgfVxcblxcbi5sb2dpbi1wYWdlX19pbWcge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiA4NXZoO1xcbiAgd2lkdGg6IDM2JTtcXG4gIG1heC13aWR0aDogNDhyZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDsgfVxcbiAgLmxvZ2luLXBhZ2VfX2ltZ19faGVyby1pbWcge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDc1cmVtOyB9XFxuXFxuLmxvZ2luLXBhZ2VfX2Zvcm0tY29udGFpbmVyIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleDogMTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiA4NXZoOyB9XFxuXFxuLmxvZ2luLWZvcm1fX2lucHV0LCAubG9naW4tZXJyb3ItbXNnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiA0LjVyZW07XFxuICB3aWR0aDogMjVyZW07XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogLjZyZW07IH1cXG5cXG4ubG9naW4tcGFnZV9fZm9ybV9fYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FFQTY7XFxuICBjb2xvcjogIzI5MjkyOTsgfVxcbiAgLmxvZ2luLXBhZ2VfX2Zvcm1fX2J0bjpob3ZlciwgLmxvZ2luLXBhZ2VfX2Zvcm1fX2J0bjpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTc5NzM7IH1cXG5cXG4ubG9naW4tZXJyb3ItbXNnIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDMzOyB9XFxuXFxuLnVzZXItbXNnIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleDogMTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMTByZW07XFxuICBoZWlnaHQ6IDI1cmVtO1xcbiAgd2lkdGg6IDQwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcXG4gIHotaW5kZXg6IDIwO1xcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7IH1cXG5cXG4uZXhpdC1idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAycmVtO1xcbiAgcmlnaHQ6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYzOTVBO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgaGVpZ2h0OiA0LjVyZW07XFxuICB3aWR0aDogNC41cmVtOyB9XFxuICAuZXhpdC1idG46aG92ZXIsIC5leGl0LWJ0bjpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYzAwMjc7IH1cXG5cXG4uYXZhaWxhYmxlLXJvb21zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyOHJlbSwgMWZyKSk7XFxuICBncmlkLWdhcDogMXJlbTtcXG4gIHBhZGRpbmctdG9wOiAxMHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyOyB9XFxuICAuYXZhaWxhYmxlLXJvb21zX19pbmZvLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGhlaWdodDogMTVyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB9XFxuICAuYXZhaWxhYmxlLXJvb21zX19oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTsgfVxcbiAgLmF2YWlsYWJsZS1yb29tc19fY2FyZCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDI4cmVtO1xcbiAgICBoZWlnaHQ6IDQwcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNnJlbTsgfVxcbiAgICAuYXZhaWxhYmxlLXJvb21zX19jYXJkX19pbWcge1xcbiAgICAgIGhlaWdodDogMjByZW07IH1cXG4gICAgLmF2YWlsYWJsZS1yb29tc19fY2FyZF9fYm9vay1idG4ge1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjM5NUE7XFxuICAgICAgYm9yZGVyLXJhZGl1czogLjZyZW07XFxuICAgICAgd2lkdGg6IDE1cmVtO1xcbiAgICAgIGhlaWdodDogNHJlbTtcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XFxuICAgICAgLmF2YWlsYWJsZS1yb29tc19fY2FyZF9fYm9vay1idG46aG92ZXIsIC5hdmFpbGFibGUtcm9vbXNfX2NhcmRfX2Jvb2stYnRuOmZvY3VzIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYzAwMjc7IH1cXG5cXG4uaW5mby1sZWZ0LFxcbi5pbmZvLXJpZ2h0IHtcXG4gIHdpZHRoOiA1MCU7IH1cXG5cXG4uaW5mby1yaWdodCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDsgfVxcblxcbi5pbmZvLWNlbnRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5ob3RlbC1pbWctY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxOHJlbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItcmFkaXVzOiAxcmVtOyB9XFxuXFxuLmhlYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtaW4taGVpZ2h0OiA4MHJlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuNTY4KSwgcmdiYSgxNjgsIDE2OCwgMTY4LCAwLjI2NykpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSA4MCUsIDAgMTAwJSk7IH1cXG4gIC5oZWFkZXJfX3RpdGxlIHtcXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgLmhlYWRlcl9fdGl0bGUtLW1haW4ge1xcbiAgICAgIGFuaW1hdGlvbjogbW92ZUluUmlnaHQgMXMgZWFzZS1vdXQ7IH1cXG4gICAgLmhlYWRlcl9fdGl0bGUtLXN1YiB7XFxuICAgICAgYW5pbWF0aW9uOiBtb3ZlSW5MZWZ0IDFzIGVhc2Utb3V0OyB9XFxuXFxuLmhvdGVsLXBvaW50cyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGhlaWdodDogODByZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgbWFyZ2luLXRvcDogOHJlbTsgfVxcbiAgLmhvdGVsLXBvaW50c19fbmFtZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07IH1cXG4gIC5ob3RlbC1wb2ludHNfX2hlYWRlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTsgfVxcbiAgLmhvdGVsLXBvaW50c19faW1nIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwJTtcXG4gICAgbGVmdDogMTUlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuNTY4KSwgcmdiYSgxNjgsIDE2OCwgMTY4LCAwLjI2NykpO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7IH1cXG4gIC5ob3RlbC1wb2ludHNfX3RhZy1saW5lIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDE1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB6LWluZGV4OiA1OyB9XFxuXFxuLnBvaW50cy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMHJlbTtcXG4gIGhlaWdodDogMzByZW07XFxuICByaWdodDogOCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBBRjhBO1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIHotaW5kZXg6IDU7XFxuICBib3JkZXItcmFkaXVzOiA1MCUgMjAlIDUwJSA0MCU7IH1cXG5cXG5bYXJpYS1oaWRkZW49XFxcInRydWVcXFwiXSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAuYm9va2VkLXJvb21fX2NhcmRfX2ltZyB7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAuaG90ZWwtcG9pbnRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7IH1cXG4gIC5ob3RlbC1wb2ludHNfX2ltZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5ob3RlbC1wb2ludHNfX3RhZy1saW5lIHtcXG4gICAgcG9zaXRpb246IHVuc2V0O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLnBvaW50cy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogdW5zZXQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07IH1cXG4gIC5ib29rZWQtcm9vbV9fY2FyZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIHJlcGVhdCgyLCAxZnIpOyB9XFxuICAuc2VhcmNoLWJhciB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1pbi13aWR0aDogNzByZW07IH1cXG4gIC5sb2dpbi1wYWdlX19pbWcge1xcbiAgICB3aWR0aDogNDUlOyB9XFxuICAubG9naW4tcGFnZV9fZm9ybS1jb250YWluZXIge1xcbiAgICB3aWR0aDogNTUlOyB9XFxuICAuZXJyb3Ige1xcbiAgICB3aWR0aDogNjAlOyB9XFxuICAuaGVhZGVyIHtcXG4gICAgY2xpcC1wYXRoOiB1bnNldDsgfVxcbiAgLmhlYWRlcl9fdGl0bGUtLW1haW4ge1xcbiAgICBmb250LXNpemU6IDZ2dztcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJyZW07IH1cXG4gIC5oZWFkZXJfX3RpdGxlLS1zdWIge1xcbiAgICBmb250LXNpemU6IDMuNXZ3OyB9XFxuICAuYm9va2VkLXJvb21fX2ltZ19fY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLmJvb2tlZC1yb29tX19jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBwYWRkaW5nOiAwOyB9XFxuICAuZHJvcC1kb3duLW1lbnUge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xcbiAgICBsZWZ0OiAxOCU7IH1cXG4gIC5ib29rZWQtcm9vbV9fY2FyZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDJyZW0pIGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtOyB9XFxuICAuYm9va2VkLXJvb21fX2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDNyZW0gYXV0bzsgfVxcbiAgLmJvb2tlZC1yb29tX19jYXJkX19idG4ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgd2lkdGg6IDhyZW07IH1cXG4gIC5zZWFyY2gtYmFyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogNzByZW07XFxuICAgIHRvcDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogdW5zZXQ7XFxuICAgIG1pbi13aWR0aDogdW5zZXQ7IH1cXG4gIC5zZWFyY2gtYmFyX19pbnB1dF9faGVhZGVyLS1zdWIge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAuc2VhcmNoLWJhcl9faW5wdXQge1xcbiAgICBwYWRkaW5nOiAxcmVtOyB9XFxuICAubG9naW4tcGFnZV9faW1nIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLmxvZ2luLXBhZ2VfX2Zvcm0tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC5zZWFyY2gtYmFyX19idG4ge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiAzcmVtOyB9XFxuICAudXNlci1tc2cge1xcbiAgICB3aWR0aDogOTAlOyB9XFxuICAuZXhpdC1idG4ge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiAzcmVtOyB9XFxuICAuZGF0ZSB7XFxuICAgIHdpZHRoOiA2MHJlbTtcXG4gICAgcGFkZGluZzogMDsgfVxcbiAgLmF2YWlsYWJsZS1yb29tcyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtZ2FwOiB1bnNldDsgfVxcbiAgICAuYXZhaWxhYmxlLXJvb21zX19jYXJkIHtcXG4gICAgICB3aWR0aDogMTlyZW07XFxuICAgICAgcGFkZGluZzogM3B4O1xcbiAgICAgIGhlaWdodDogMzByZW07XFxuICAgICAgZm9udC1zaXplOiAxLjFyZW07IH1cXG4gICAgLmF2YWlsYWJsZS1yb29tc19faW1nIHtcXG4gICAgICBoZWlnaHQ6IDE1cmVtOyB9XFxuICAgIC5hdmFpbGFibGUtcm9vbXNfX2hlYWRlciB7XFxuICAgICAgZm9udC1zaXplOiAycmVtOyB9XFxuICAuaG90ZWwtaW1nLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTNyZW07IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19hbmltYXRpb25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3NlYXJjaF9iYXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fYm9va2luZ19jYXJkLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2xvZ2luX3BhZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fdXNlci1tZXNzYWdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2F2YWlsYWJsZV9yb29tcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19tYWluX3BhZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX21lZGlhLXF1ZXJpZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0UsU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxnQkFBZ0IsRUFBQTtFQURsQjtJQUdJLGFBQWEsRUFBQTs7QUFJakI7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTs7QUFJbkI7RUFDRSxTQUFTO0VBQ1QsVUFBVSxFQUFBO0VBRlo7SUFLSSxhQUFhLEVBQUE7RUFMakI7SUFTSSw4QkFBNkI7SUFDN0IsMENBQXlDO0lBQ3pDLGVBQWUsRUFBQTtJQVhuQjtNQWNNLGtDQUFrQztNQUNsQyxVQUFTLEVBQUE7RUFmZjtJQXFCSSw4QkFBNkI7SUFDN0IsNENBQTBDLEVBQUE7O0FBSTlDO0VBQ0ksYUFBYSxFQUFBOztBQW5DakI7RUNkRSx1Q0FBdUM7RUFDdkMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQ0ppQixFQUFBOztBRE9u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RW5CO01XMEVNLFlBQVk7TUFDWixZQUFZO01BQ1osYUFBWTtNQUNaLGlCQUFpQixFQUFBO0lBR25CO01BQ0UsYUFDRixFQUFBO0lYdEZKO01XeUZNLGVBQWUsRUFBQTtFSG5HckI7SUd3R0ksYUFBYSxFQUFBLEVBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogNXJlbTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIFxcbn1cXG5cXG4uYnRuIHtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IDA7XFxuXFxuICAmOmRpc2FibGVkIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gICY6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLS4zcmVtKTtcXG4gICAgYm94LXNoYWRvdzogMCAxcmVtIDJyZW0gcmdiYSgwLCAwLCAwLCAuMik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgJjphZnRlciB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMS40KSBzY2FsZVkoMS42KTtcXG4gICAgICBvcGFjaXR5OjA7XFxuICAgIH1cXG4gIH1cXG5cXG4gICY6YWN0aXZlLFxcbiAgJjpmb2N1cyB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtLjFyZW0pO1xcbiAgICBib3gtc2hhZG93OiAwIC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAuMik7XFxuICB9XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVwiLFwiYm9keSB7XFxuICBmb250LWZhbWlseTogJ05vdG8gU2FucyBUQycsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNztcXG4gIGNvbG9yOiR0ZXh0LXByaW1hcnk7XFxufVxcblxcbi5oZWFkZXJfX3RpdGxlIHtcXG4gIGNvbG9yOiR0ZXh0LXNlY29uZGFyeTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LWZhbWlseTogJ1NocmlraGFuZCcsIGN1cnNpdmU7XFxuXFxuICAmLS1tYWlue1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiA4cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMy41cmVtO1xcbiAgfVxcblxcbiAgJi0tc3ViIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFyZW07XFxuICB9XFxufVxcblxcbi8vIFNlYXJjaCBCYXIgXFxuXFxuLnNlYXJjaC1iYXJfX2lucHV0IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG5cXG4gICZfX2hlYWRlci0tc3Vie1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBjb2xvcjogJHN1YnRsZS10b25lcztcXG4gIH1cXG59XFxuXFxuLmRhdGUge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLy8gQ3VzdG9tZXIgRGFzaEJvYXJkXFxuXFxuLmhvdGVsLXBvaW50cyB7XFxuICBcXG4gICZfX2hlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG4gICZfX3BvaW50cy1lYXJuZWQge1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDI7XFxuICB9XFxuXFxuICAmX190YWctbGluZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2hyaWtoYW5kJywgY3Vyc2l2ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAuMnJlbTtcXG4gIH1cXG59XFxuXFxuLmJvb2tlZC1yb29tX19jYXJkIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4uYm9va2VkLXJvb21fX2hlYWRlciB7XFxuICBAaW5jbHVkZSBoZWFkZXJGb250O1xcbn1cXG5cXG4uYXZhaWxhYmxlLXJvb21zX19oZWFkZXIge1xcbiAgQGluY2x1ZGUgaGVhZGVyRm9udDtcXG59XFxuXFxuLmF2YWlsYWJsZS1yb29tc19fY2FyZCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi8vIExvZ2luIHBhZ2VcXG5cXG4ubG9naW4tcGFnZV9faGVhZGVyIHtcXG4gIEBpbmNsdWRlIGhlYWRlckZvbnQ7XFxufVxcblxcbi5sb2dpbi1wYWdlX19mb3JtX19idG4ge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4vL2Vycm9yIG1lc3NhZ2VcXG5cXG4udXNlci1tc2dfX2hlYWRlciB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLy9hdmFpbGFibGUgcm9vbXMgXFxuXCIsXCIkdGV4dC1wcmltYXJ5OiAjMDAwO1xcbiR0ZXh0LXNlY29uZGFyeTogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiRzdWJ0bGUtdG9uZXM6IHJnYigxMTIsIDExMiwgMTEyKTtcXG4kYWNjZW50OiAjRkYzOTVBO1xcblxcbiRtYWluLWRyb3Atc2hhZG93OiAwIDFyZW0gMnJlbSByZ2JhKGJsYWNrLCAuMik7XFxuJHByaW1hcnktZ3JhZGllbnQ6bGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMC41NjgpLCByZ2JhKDE2OCwgMTY4LCAxNjgsIDAuMjY3KSlcXG5cIixcIkBtaXhpbiBmbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleDogMTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBtaXhpbiBjZW50ZXIgKCR0b3AsICRsZWZ0KSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6ICR0b3A7XFxuICBsZWZ0OiAkbGVmdDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG5AbWl4aW4gaG92ZXJDb2xvciAoJGJhc2VDb2xvcikge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZUNvbG9yO1xcbiAgICAmOmhvdmVyLFxcbiAgICAmOmZvY3VzIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJhc2VDb2xvciwgMTUlKVxcbiAgICB9XFxufVxcblxcbkBtaXhpbiByb3VuZEJ1dHRvbiAoJGltZykge1xcbiAgQGluY2x1ZGUgaG92ZXJDb2xvcigkYWNjZW50KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkaW1nKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBoZWlnaHQ6NC41cmVtO1xcbiAgICB3aWR0aDogNC41cmVtO1xcbn1cXG5cXG5AbWl4aW4gaGVhZGVyRm9udCB7XFxuICBmb250LWZhbWlseTogJ1NocmlraGFuZCcsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBsZXR0ZXItc3BhY2luZzogLjVyZW07XFxufVxcblxcbkBtaXhpbiByZWN0YW5nbGVCdG4ge1xcbiAgY29sb3I6ICNmZmY7XFxuICBAaW5jbHVkZSBob3ZlckNvbG9yKCRhY2NlbnQpO1xcbiAgYm9yZGVyLXJhZGl1czogLjZyZW07XFxuICB3aWR0aDogMTVyZW07XFxuICBoZWlnaHQ6IDRyZW07XFxufVwiLFwiQGtleWZyYW1lcyBtb3ZlSW5MZWZ0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHJlbSk7XFxuICB9XFxuXFxuICA4MCV7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcmVtKTtcXG4gIH1cXG5cXG4gIDEwMCV7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1vdmVJblJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcmVtKTtcXG4gIH1cXG5cXG4gIDgwJXtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcmVtKTtcXG4gIH1cXG5cXG4gIDEwMCV7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGRyb3BEb3duIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMClcXG4gICAgfVxcbiAgICA4MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMS4xKVxcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSlcXG4gICAgfVxcbn1cXG5cIixcIi5zZWFyY2gtYmFyIHtcXG4gIEBpbmNsdWRlIGZsZXg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3JkZXI6IC41cHggc29saWQgcmdiKDE2NywgMTY3LCAxNjcpO1xcbiAgdG9wOiAxcmVtO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XFxuICBoZWlnaHQ6IDdyZW07XFxuICB3aWR0aDo4MCU7XFxuICBtYXgtd2lkdGg6IDk1cmVtO1xcbiAgbWluLXdpZHRoOiA3NXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0LXNlY29uZGFyeTtcXG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XFxuICB6LWluZGV4OjEwO1xcbiAgYm94LXNoYWRvdzogJG1haW4tZHJvcC1zaGFkb3c7XFxuXFxuICAmX19pbnB1dHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIFxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NCwgMTk0LCAxOTQsIDAuNTA3KTtcXG4gICAgfVxcbiAgICAmOmZvY3VzIHtcXG4gICAgICBib3gtc2hhZG93OiAwIDAgMTVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjM2KTtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB9XFxuXFxuICAgICZfX2hlYWRlciB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICB0b3A6IDIwJTtcXG4gICAgICAmLS1tYWluIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIH1cXG5cXG4gICAgICAmLS1zdWJ7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gICZfX2J0bntcXG4gICAgcG9zaXRpb246Zml4ZWQ7XFxuICAgIHJpZ2h0OiAxJTtcXG4gICAgQGluY2x1ZGUgcm91bmRCdXR0b24gKCcuLi9pbWFnZXMvc2VhcmNoX2ljb24uc3ZnJylcXG4gIH1cXG4gICBcXG59XFxuXFxuLmRyb3AtZG93bi1tZW51IHtcXG4gIHBhZGRpbmc6IDNyZW07XFxuICBtYXJnaW4tbGVmdDogLTNyZW07XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA5cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDI1cmVtO1xcbiAgd2lkdGg6MjQlO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGJveC1zaGFkb3c6IDAgMXJlbSAycmVtIChyZ2JhKDAsIDAsIDAsIDAuMikpO1xcbiAgYW5pbWF0aW9uOiBkcm9wRG93biA0MDBtcyBlYXNlLW91dDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXG59XFxuXFxubGFiZWx7XFxuICB3aWR0aDpmaXQtY29udGVudDtcXG4gIGhlaWdodDogNTAlO1xcbn1cXG5cXG4uZGF0ZSB7XFxuICB3aWR0aDogNzByZW07XFxufVxcblxcbi5kYXRlLWxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMDtcXG59XCIsXCIuYm9va2VkLXJvb21fX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIHdpZHRoOjY5JTtcXG59XFxuXFxuLmJvb2tlZC1yb29tX19pbWdfX2NvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiAkcHJpbWFyeS1ncmFkaWVudDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDozMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogLjZyZW07XFxufVxcblxcbi5ib29rZWQtcm9vbV9faW1ne1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLWhlaWdodDogNzByZW07XFxufVxcblxcbi5ib29rZWQtcm9vbV9faGVhZGVyIHtcXG4gIG1hcmdpbjozcmVtIDAgM3JlbSAxOCU7XFxufVxcbi5ib29rZWQtcm9vbV9fY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHJlbSByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDNyZW0pIGF1dG87XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMi4ycmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRzdWJ0bGUtdG9uZXM7XFxuXFxuICAmX19pbWcge1xcbiAgICBncmlkLXJvdzogMS82O1xcbiAgICB3aWR0aDogMzByZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICB9XFxuXFxuICAmX19yb29tLW51bWJlcntcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxuICB9XFxuXFxuICAmX19kYXRlLWJvb2tlZCB7XFxuICAgIEBleHRlbmQgLmJvb2tlZC1yb29tX19jYXJkX19yb29tLW51bWJlcjtcXG4gIH1cXG5cXG4gICZfX3R5cGUge1xcbiAgICBAZXh0ZW5kIC5ib29rZWQtcm9vbV9fY2FyZF9fcm9vbS1udW1iZXI7XFxuICB9XFxuXFxuICAmX19udW1iZXItb2YtYmVkcyB7XFxuICAgIGdyaWQtY29sdW1uOiAzO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gIH1cXG4gIFxcbiAgJl9fYmVkLXNpemV7XFxuICAgIGdyaWQtY29sdW1uOiAzO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gIH1cXG4gICZfX2J0biB7XFxuICAgIEBpbmNsdWRlIHJlY3RhbmdsZUJ0bjtcXG4gICAgZ3JpZC1jb2x1bW46IDM7XFxuICAgIGdyaWQtcm93OiA1O1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgfVxcblxcbiAgJl9fY29zdHtcXG4gICAgZ3JpZC1yb3c6IDU7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG4gIH1cXG59XCIsXCIubG9naW4tcGFnZV9faW1nIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDo4NXZoO1xcbiAgd2lkdGg6IDM2JTtcXG4gIG1heC13aWR0aDogNDhyZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyOiAxcHggc29saWQgJHN1YnRsZS10b25lcztcXG5cXG4gICZfX2hlcm8taW1nIHtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDc1cmVtO1xcbiAgfVxcbn1cXG5cXG4ubG9naW4tcGFnZV9fZm9ybS1jb250YWluZXIge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgQGluY2x1ZGUgZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDg1dmg7XFxufVxcblxcbi5sb2dpbi1mb3JtX19pbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogNC41cmVtO1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IC42cmVtO1xcbn1cXG5cXG4ubG9naW4tcGFnZV9fZm9ybV9fYnRuIHtcXG4gIEBpbmNsdWRlIGhvdmVyQ29sb3IoIzRDQUVBNik7XFxuICBjb2xvcjogcmdiKDQxLCA0MSwgNDEpO1xcbn1cXG5cXG4ubG9naW4tZXJyb3ItbXNnIHtcXG4gIEBleHRlbmQgLmxvZ2luLWZvcm1fX2lucHV0O1xcbiAgY29sb3I6ICNmZmY7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMzM7XFxufVwiLFwiLnVzZXItbXNnIHtcXG4gIEBpbmNsdWRlIGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMTByZW07XFxuICBoZWlnaHQ6IDI1cmVtO1xcbiAgd2lkdGg6IDQwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcXG4gIHotaW5kZXg6IDIwO1xcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRzdWJ0bGUtdG9uZXM7XFxufVxcblxcbi5leGl0LWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDJyZW07XFxuICByaWdodDogMnJlbTtcXG4gIEBpbmNsdWRlIHJvdW5kQnV0dG9uKCcuLi9pbWFnZXMvZXhpdC5zdmcnKTtcXG59XCIsXCIuYXZhaWxhYmxlLXJvb21zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyOHJlbSwgMWZyKSk7XFxuICBncmlkLWdhcDogMXJlbTtcXG4gIHBhZGRpbmctdG9wOiAxMHJlbTtcXG4gIHdpZHRoOjEwMCU7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAmX19pbmZvLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGhlaWdodDogMTVyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgfVxcblxcbiAgJl9faGVhZGVyIHtcXG4gICB3aWR0aDogMTAwJTtcXG4gICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIH1cXG5cXG4gICZfX2NhcmQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc3VidGxlLXRvbmVzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAyOHJlbTtcXG4gICAgaGVpZ2h0OiA0MHJlbTtcXG4gICAgcGFkZGluZzoxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNnJlbTtcXG5cXG4gICAgJl9faW1nIHtcXG4gICAgICBoZWlnaHQ6IDIwcmVtO1xcbiAgICB9IFxcblxcbiAgICAmX19ib29rLWJ0biB7XFxuICAgICAgQGluY2x1ZGUgcmVjdGFuZ2xlQnRuO1xcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICB3aWR0aDogOTAlO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmluZm8tbGVmdCxcXG4uaW5mby1yaWdodCB7XFxuICB3aWR0aDo1MCVcXG59XFxuXFxuLmluZm8tcmlnaHQge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5pbmZvLWNlbnRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhvdGVsLWltZy1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE4cmVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcblwiLFwiLmhlYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtaW4taGVpZ2h0OiA4MHJlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6ICRwcmltYXJ5LWdyYWRpZW50LCB1cmwoJy4uL2ltYWdlcy9vdmVybG9vay1ob3RlbC5qcGcnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmJvdHRvbTtcXG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSA4MCUsIDAgMTAwJSk7XFxuXFxuICAmX190aXRsZSB7XFxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgQGluY2x1ZGUgY2VudGVyKDUwJSwgNTAlKTtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIFxcbiAgICAmLS1tYWluIHtcXG4gICAgICBhbmltYXRpb246IG1vdmVJblJpZ2h0IDFzIGVhc2Utb3V0ICBcXG4gICAgfVxcblxcbiAgICAmLS1zdWIge1xcbiAgICAgIGFuaW1hdGlvbjogbW92ZUluTGVmdCAxcyBlYXNlLW91dCAgXFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmhvdGVsLXBvaW50cyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGhlaWdodDogODByZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgbWFyZ2luLXRvcDogOHJlbTtcXG5cXG4gICZfX25hbWUge1xcbiAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIH1cXG5cXG4gICZfX2hlYWRlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gIH1cXG5cXG4gICZfX2ltZyB7XFxuICAgIEBpbmNsdWRlIGNlbnRlcigxMCUsIDE1JSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuNTY4KSwgcmdiYSgxNjgsIDE2OCwgMTY4LCAwLjI2NykpO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICB9XFxuXFxuICAmX190YWctbGluZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAxNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgei1pbmRleDogNTtcXG4gIH1cXG59XFxuXFxuLnBvaW50cy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMHJlbTtcXG4gIGhlaWdodDogMzByZW07XFxuICByaWdodDogOCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBBRjhBO1xcbiAgcGFkZGluZzozcmVtO1xcbiAgei1pbmRleDo1O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlIDIwJSA1MCUgNDAlXFxufVxcblxcblthcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCJdIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiLFwiQGltcG9ydCAndmFyaWFibGVzJztcXG5AaW1wb3J0ICdyZXNldCc7XFxuQGltcG9ydCAnbWl4aW5zJztcXG5AaW1wb3J0ICd0eXBvZ3JhcGh5JztcXG5AaW1wb3J0ICdhbmltYXRpb25zJztcXG5AaW1wb3J0ICdzZWFyY2hfYmFyJztcXG5AaW1wb3J0ICdib29raW5nX2NhcmQnO1xcbkBpbXBvcnQgJ2xvZ2luX3BhZ2UnO1xcbkBpbXBvcnQgJ3VzZXItbWVzc2FnZSc7XFxuQGltcG9ydCAnYXZhaWxhYmxlX3Jvb21zJztcXG5AaW1wb3J0ICdtYWluX3BhZ2UnO1xcbkBpbXBvcnQgJ21lZGlhLXF1ZXJpZXMnO1wiLFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAuYm9va2VkLXJvb21fX2NhcmRfX2ltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmhvdGVsLXBvaW50cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgfVxcblxcbiAgLmhvdGVsLXBvaW50c19faW1nIHtcXG4gICAgZGlzcGxheTogbm9uZVxcbiAgfVxcblxcbiAgLmhvdGVsLXBvaW50c19fdGFnLWxpbmUge1xcbiAgICBwb3NpdGlvbjogdW5zZXQ7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLnBvaW50cy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogdW5zZXQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxuICB9XFxuXFxuICAuYm9va2VkLXJvb21fX2NhcmQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG5cXG4gIC5zZWFyY2gtYmFyIHtcXG4gICAgd2lkdGg6OTAlO1xcbiAgICBtaW4td2lkdGg6IDcwcmVtO1xcbiAgfVxcblxcbiAgLmxvZ2luLXBhZ2VfX2ltZyB7XFxuICAgIHdpZHRoOjQ1JTtcXG4gIH1cXG5cXG4gIC5sb2dpbi1wYWdlX19mb3JtLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA1NSU7XFxuICB9XFxuXFxuICAuZXJyb3Ige1xcbiAgICB3aWR0aDogNjAlXFxuICB9XFxuXFxuICAuaGVhZGVyIHtcXG4gICAgY2xpcC1wYXRoOiB1bnNldDtcXG4gIH1cXG5cXG4gIC5oZWFkZXJfX3RpdGxlLS1tYWluIHtcXG4gICAgZm9udC1zaXplOiA2dnc7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycmVtO1xcbiAgfVxcblxcbiAgLmhlYWRlcl9fdGl0bGUtLXN1YiB7XFxuICAgIGZvbnQtc2l6ZTogMy41dnc7XFxuICB9XFxuXFxuICAuYm9va2VkLXJvb21fX2ltZ19fY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5ib29rZWQtcm9vbV9fY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB9XFxufVxcblxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICBib2R5IHtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG5cXG4gIC5kcm9wLWRvd24tbWVudSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1heC13aWR0aDogMzByZW07XFxuICAgIGxlZnQ6IDE4JTtcXG4gIH1cXG5cXG4gIC5ib29rZWQtcm9vbV9fY2FyZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDJyZW0pIGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgfVxcblxcbiAgLmJvb2tlZC1yb29tX19oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAzcmVtIGF1dG87XFxuICB9XFxuXFxuICAuYm9va2VkLXJvb21fX2NhcmRfX2J0biB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICB3aWR0aDogOHJlbVxcbiAgfVxcblxcbiAgLnNlYXJjaC1iYXIge1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBtaW4td2lkdGg6IDcwcmVtO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xcbiAgICBtaW4td2lkdGg6IHVuc2V0O1xcbiAgfVxcblxcbiAgLnNlYXJjaC1iYXJfX2lucHV0X19oZWFkZXItLXN1YiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuc2VhcmNoLWJhcl9faW5wdXQge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgfVxcblxcbiAgLmxvZ2luLXBhZ2VfX2ltZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubG9naW4tcGFnZV9fZm9ybS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5zZWFyY2gtYmFyX19idG4ge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgfVxcblxcbiAgLnVzZXItbXNnIHtcXG4gICAgd2lkdGg6IDkwJVxcbiAgfVxcblxcbiAgLmV4aXQtYnRuIHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogM3JlbTtcXG4gIH1cXG5cXG4gIC5kYXRlIHtcXG4gICAgd2lkdGg6IDYwcmVtO1xcbiAgICBwYWRkaW5nOjA7XFxuICB9XFxuXFxuICAuYXZhaWxhYmxlLXJvb21zIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC1nYXA6IHVuc2V0O1xcblxcbiAgICAmX19jYXJkIHtcXG4gICAgICB3aWR0aDogMTlyZW07XFxuICAgICAgcGFkZGluZzogM3B4O1xcbiAgICAgIGhlaWdodDozMHJlbTtcXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgfVxcblxcbiAgICAmX19pbWcge1xcbiAgICAgIGhlaWdodDogMTVyZW1cXG4gICAgfVxcblxcbiAgICAmX19oZWFkZXIge1xcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmhvdGVsLWltZy1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEzcmVtO1xcbiAgfVxcblxcbiAgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgSHVtYW4gZnJvbSAnLi9IdW1hbidcblxuY2xhc3MgQ29zdHVtZXIgZXh0ZW5kcyBIdW1hbiB7XG4gIGNvbnN0cnVjdG9yKGN1c3RvbWVyKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuaWQgPSBjdXN0b21lci5pZDtcbiAgICB0aGlzLm5hbWUgPSBjdXN0b21lci5uYW1lO1xuICB9ICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3N0dW1lcjsiLCJjbGFzcyBIb3RlbCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHJvb21zLCBib29raW5ncywgY3VzdG9tZXJzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnJvb21zID0gcm9vbXM7XG4gICAgdGhpcy5ib29raW5ncyA9IGJvb2tpbmdzO1xuICAgIHRoaXMuY3VzdG9tZXJzID0gY3VzdG9tZXJzO1xuICB9XG4gIGNoZWNrQXZhaWxhYmxlUm9vbXMoY2hlY2tJbikge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICB0b2RheS5zZXRIb3VycygwLDAsMCwwKTtcbiAgICBpZiAoIWNoZWNrSW4gfHwgbmV3IERhdGUoY2hlY2tJbikgPCB0b2RheSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGNvbnN0IHVuYXZhaWxhYmxlID0gdGhpcy5ib29raW5ncy5maWx0ZXIocm9vbSA9PiByb29tLmRhdGUgPT09IGNoZWNrSW4pXG4gICAgICAubWFwKHJvb20gPT4gcm9vbS5yb29tTnVtYmVyKTtcbiAgICByZXR1cm4gdGhpcy5yb29tcy5maWx0ZXIocm9vbSA9PiAhdW5hdmFpbGFibGUuaW5jbHVkZXMocm9vbS5udW1iZXIpKTtcbiAgfVxuXG4gIGZpbHRlclJvb21zQnlTZWFyY2hDcml0ZXJpYShhdmFpbGFibGVSb29tcywgc2VhcmNoSW5wdXQsIHR5cGUpIHtcbiAgICBpZiAoc2VhcmNoSW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gYXZhaWxhYmxlUm9vbXM7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdHMgPSBzZWFyY2hJbnB1dC5yZWR1Y2UoKGZvdW5kUm9vbXMsIGtleXdvcmQpID0+IHtcbiAgICAgIGF2YWlsYWJsZVJvb21zLmZvckVhY2gocm9vbSA9PiB7XG4gICAgICAgIGlmIChyb29tW3R5cGVdLnRvU3RyaW5nKCkgPT09IGtleXdvcmQgJiYgIWZvdW5kUm9vbXMuaW5jbHVkZXMocm9vbSkpIHtcbiAgICAgICAgICBmb3VuZFJvb21zLnB1c2gocm9vbSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZvdW5kUm9vbXM7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgcmV0dXJuQWxsRmlsdGVyZWRSZXN1bHRzKGRhdGUsIHR5cGVPZlJvb20sIHNpemVPZkJlZCwgbnVtYmVyT2ZCZWRzKSB7XG4gICAgY29uc3QgYXZhaWxhYmxlUm9vbXMgPSB0aGlzLmNoZWNrQXZhaWxhYmxlUm9vbXMoZGF0ZSlcbiAgICBpZiAoYXZhaWxhYmxlUm9vbXMgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgY29uc3QgYnlUeXBlID0gdGhpcy5maWx0ZXJSb29tc0J5U2VhcmNoQ3JpdGVyaWEoYXZhaWxhYmxlUm9vbXMsIHR5cGVPZlJvb20sICdyb29tVHlwZScpO1xuICAgIGNvbnN0IGJ5QmVkU2l6ZSA9IHRoaXMuZmlsdGVyUm9vbXNCeVNlYXJjaENyaXRlcmlhKGJ5VHlwZSwgc2l6ZU9mQmVkLCAnYmVkU2l6ZScpO1xuICAgIGNvbnN0IGJ5TnVtYmVyT2ZCZWRzID0gdGhpcy5maWx0ZXJSb29tc0J5U2VhcmNoQ3JpdGVyaWEoYnlCZWRTaXplLCBudW1iZXJPZkJlZHMsICdudW1CZWRzJyk7XG4gICAgY29uc3QgZmluYWxSZXN1bHQgPSBieU51bWJlck9mQmVkcztcbiAgICByZXR1cm4gZmluYWxSZXN1bHQ7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBIb3RlbDsiLCJjbGFzcyBIdW1hbiB7XG4gIHJldHVybkJvb2tpbmdIaXN0b3J5KGhvdGVsLCBpZCA9IHRoaXMuaWQpIHtcbiAgICBpZiAoIWhvdGVsLmJvb2tpbmdzLnNvbWUocm9vbUJvb2tlZCA9PiByb29tQm9va2VkLnVzZXJJRCA9PT0gaWQpKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBob3RlbC5ib29raW5ncy5maWx0ZXIocm9vbSA9PiByb29tLnVzZXJJRCA9PT0gaWQpO1xuICB9XG4gIFxuICBmaW5kU3BlY2lmaWNSb29tcyhob3RlbCwgaWQgPSB0aGlzLmlkKSB7XG4gICAgY29uc3Qgcm9vbXNCb29rZWQgPSB0aGlzLnJldHVybkJvb2tpbmdIaXN0b3J5KGhvdGVsLCBpZCk7XG4gICAgY29uc3Qgc3BlY2lmaWNSb29tcyA9IHJvb21zQm9va2VkLm1hcChyb29tID0+IHtcbiAgICAgIGNvbnN0IGhvdGVsUm9vbSA9IGhvdGVsLnJvb21zLmZpbmQoaG90ZWxSb29tID0+IGhvdGVsUm9vbS5udW1iZXIgPT09IHJvb20ucm9vbU51bWJlcilcbiAgICAgIHJldHVybiB7Li4uaG90ZWxSb29tLCBkYXRlQm9va2VkOnJvb20uZGF0ZSwgYm9va2luZ0lEOiByb29tLmlkfVxuICAgIH0pXG4gICAgcmV0dXJuIHNwZWNpZmljUm9vbXM7XG4gIH1cblxuICBvcmdhbml6ZUJvb2tpbmdzQnlEYXRlKGhvdGVsLCBpZCA9IHRoaXMuaWQpIHtcbiAgICBjb25zdCBib29rZWRSb29tcyA9IHRoaXMuZmluZFNwZWNpZmljUm9vbXMoaG90ZWwsIGlkKTtcbiAgICBjb25zdCBzb3J0ZWQgPSBib29rZWRSb29tcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoYi5kYXRlQm9va2VkKSAtIG5ldyBEYXRlKGEuZGF0ZUJvb2tlZCk7XG4gICAgfSlcbiAgICByZXR1cm4gc29ydGVkO1xuICB9XG5cbiAgcmV0dXJuVG90YWxCb29raW5nQ29zdChob3RlbCwgaWQgPSB0aGlzLmlkKSB7XG4gICAgY29uc3Qgcm9vbXNCb29rZWQgPSB0aGlzLmZpbmRTcGVjaWZpY1Jvb21zKGhvdGVsLCBpZCk7XG4gICAgY29uc3QgYW1vdW50UGFpZCA9IHJvb21zQm9va2VkLnJlZHVjZSgodG90YWxDb3N0LCByb29tKSA9PiB7XG4gICAgICB0b3RhbENvc3QgKz0gcm9vbS5jb3N0UGVyTmlnaHQ7XG4gICAgICByZXR1cm4gdG90YWxDb3N0O1xuICAgIH0sIDApO1xuICAgIHJldHVybiBwYXJzZUZsb2F0KGFtb3VudFBhaWQudG9GaXhlZCgyKSk7XG4gIH1cblxuICByZXR1cm5Qb2ludHNFYXJuZWQoaG90ZWwsIGlkID0gdGhpcy5pZCkge1xuICAgIGNvbnN0IGFtb3VudFBhaWQgPSB0aGlzLnJldHVyblRvdGFsQm9va2luZ0Nvc3QoaG90ZWwsIGlkKTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihhbW91bnRQYWlkIC8gMTApO1xuICB9ICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgSHVtYW47IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFzZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiY29uc3QgZGF0YSA9IHtcbiAgZ2V0RGF0YSh0eXBlKSB7XG4gICAgcmV0dXJuIGZldGNoKGBodHRwczovL292ZXJsb29rLWhvdGVsLmhlcm9rdWFwcC5jb20vYXBpL3YxLyR7dHlwZX1gKVxuICAgICAgLnRoZW4oZGF0YS5oYW5kbGVFcnJvcnMpXG4gICAgICAudGhlbihkYXRhID0+IGRhdGFbdHlwZV0pXG4gICAgICAuY2F0Y2goZXJyID0+IGFsZXJ0KGVycikpO1xuICB9LFxuICBnZXRBbGxIb3RlbERhdGEoKSB7XG4gICAgY29uc3QgZGF0YVR5cGVzID0gWydyb29tcycsICdib29raW5ncycsICdjdXN0b21lcnMnXTtcbiAgICByZXR1cm4gZGF0YVR5cGVzLm1hcCh0aGlzLmdldERhdGEpO1xuICB9LFxuICBnZXRVc2VyRGF0YShjdXN0b21lcklELCBjYWxsYmFjaykge1xuICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9vdmVybG9vay1ob3RlbC5oZXJva3VhcHAuY29tL2FwaS92MS9jdXN0b21lcnMvJHtjdXN0b21lcklEfWApXG4gICAgICAudGhlbihkYXRhLmhhbmRsZUVycm9ycylcbiAgICAgIC50aGVuKGRhdGEgPT4gZGF0YSlcbiAgICAgIC5jYXRjaChjYWxsYmFjaylcbiAgfSxcbiAgYm9va1Jvb20ocm9vbSkge1xuICAgIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9vdmVybG9vay1ob3RlbC5oZXJva3VhcHAuY29tL2FwaS92MS9ib29raW5ncycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocm9vbSksXG4gICAgfSlcbiAgfSxcbiAgY2FuY2VsQm9va2luZyhpZCkge1xuICAgIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9vdmVybG9vay1ob3RlbC5oZXJva3VhcHAuY29tL2FwaS92MS9ib29raW5ncy8nICsgaWQsIHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgfSlcbiAgfSxcbiAgaGFuZGxlRXJyb3JzKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgRXJyb3IoJ09vcHMhIFNvbWV0aGluZyB3ZW50IHdyb25nIHBsZWFzZSB0cnkgYWdhaW4uJyk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkYXRhOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2V4aXQuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvam9zaHVhLXRyZWUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvbG9naW4taG90ZWwuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvb3Zlcmxvb2staG90ZWwuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcm9vbS0xLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3Jvb20tMTAuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcm9vbS0xMS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9yb29tLTEyLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3Jvb20tMTMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcm9vbS0xNC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9yb29tLTE1LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3Jvb20tMTYuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcm9vbS0xNy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9yb29tLTE4LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3Jvb20tMTkuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcm9vbS0yLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3Jvb20tMjAuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcm9vbS0yMS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9yb29tLTIyLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3Jvb20tMjMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcm9vbS0yNC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9yb29tLTI1LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3Jvb20tMy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9yb29tLTQuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcm9vbS01LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3Jvb20tNi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9yb29tLTcuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcm9vbS04LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3Jvb20tOS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zZWFyY2hfaWNvbi5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zdW5zZXQuanBnXCI7IiwiaW1wb3J0ICcuL2Nzcy9iYXNlLnNjc3MnO1xuaW1wb3J0IEhvdGVsIGZyb20gJy4vSG90ZWwnO1xuaW1wb3J0IEN1c3RvbWVyIGZyb20gJy4vQ3VzdG9tZXInO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9kYXRhJztcblxuaW1wb3J0ICcuL2ltYWdlcy9vdmVybG9vay1ob3RlbC5qcGcnO1xuaW1wb3J0ICcuL2ltYWdlcy9zZWFyY2hfaWNvbi5zdmcnO1xuaW1wb3J0ICcuL2ltYWdlcy9leGl0LnN2Zyc7XG5pbXBvcnQgJy4vaW1hZ2VzL2pvc2h1YS10cmVlLmpwZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL2xvZ2luLWhvdGVsLmpwZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3N1bnNldC5qcGcnO1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tLTEuanBnJztcbmltcG9ydCAnLi9pbWFnZXMvcm9vbS0yLmpwZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20tMy5qcGcnO1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tLTQuanBnJztcbmltcG9ydCAnLi9pbWFnZXMvcm9vbS01LmpwZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20tNi5qcGcnO1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tLTcuanBnJztcbmltcG9ydCAnLi9pbWFnZXMvcm9vbS04LmpwZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20tOS5qcGcnO1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tLTEwLmpwZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20tMTEuanBnJztcbmltcG9ydCAnLi9pbWFnZXMvcm9vbS0xMi5qcGcnO1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tLTEzLmpwZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20tMTQuanBnJztcbmltcG9ydCAnLi9pbWFnZXMvcm9vbS0xNS5qcGcnO1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tLTE2LmpwZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20tMTcuanBnJztcbmltcG9ydCAnLi9pbWFnZXMvcm9vbS0xOC5qcGcnO1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tLTE5LmpwZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20tMjAuanBnJztcbmltcG9ydCAnLi9pbWFnZXMvcm9vbS0yMS5qcGcnO1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tLTIyLmpwZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20tMjMuanBnJztcbmltcG9ydCAnLi9pbWFnZXMvcm9vbS0yNC5qcGcnO1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tLTI1LmpwZyc7XG5cblxuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEJ0bicpO1xuY29uc3QgYXZhaWxhYmxlUm9vbXNTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2YWlsYWJsZVJvb21zJyk7XG5jb25zdCBib29rZWRSb29tcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29rZWRSb29tcycpO1xuY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hGb3JtJyk7XG5jb25zdCB1c2VyTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyTWVzc2FnZScpO1xuY29uc3QgbG9naW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW5CdG4nKTtcblxubGV0IGhvdGVsO1xubGV0IGN1c3RvbWVyO1xuXG5jb25zdCBjcmVhdGVIb3RlbCA9ICgpID0+IHtcbiAgUHJvbWlzZS5hbGwoZGF0YS5nZXRBbGxIb3RlbERhdGEoKSlcbiAgICAudGhlbih2YWx1ZXMgPT4gaG90ZWwgPSBuZXcgSG90ZWwoXCJvdmVyTG9va1wiLCB2YWx1ZXNbMF0sIHZhbHVlc1sxXSwgdmFsdWVzWzJdKSk7XG59O1xuXG5jb25zdCB0b2dnbGVIaWRkZW4gPSAoZWxlbWVudCwgaGlkZGVuID0gJ3RydWUnKSA9PiBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBoaWRkZW4pO1xuXG5jb25zdCBjcmVhdGVVc2VyID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyTmFtZUlucHV0JykudmFsdWU7XG4gIFByb21pc2UucmVzb2x2ZShkYXRhLmdldFVzZXJEYXRhKHBhcnNlSW50KGZpbmRVc2VySUQodXNlck5hbWUpKSwgKCkgPT4gc2hvd0xvZ2luRXJyb3IoKSkpXG4gICAgLnRoZW4odmFsdWUgPT4ge1xuICAgICAgY3VzdG9tZXIgPSBuZXcgQ3VzdG9tZXIodmFsdWUpO1xuICAgICAgbG9naW4oKTtcbiAgICAgIGRpc3BsYXlSb29tcygpO1xuICAgICAgZGlzcGxheVBvaW50c0Vhcm5lZCgpO1xuICAgIH0pXG59O1xuXG5jb25zdCBsb2dpbiA9ICgpID0+IHtcbiAgY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmRJbnB1dCcpLnZhbHVlO1xuICBpZiAocGFzc3dvcmQgIT09ICdvdmVybG9vazIwMjEnKSB7XG4gICAgc2hvd0xvZ2luRXJyb3IoKTtcbiAgICByZXR1cm47XG4gIH1cbiAgc2hvd01haW4oKTtcbn1cblxuY29uc3QgZGlzYWJsZUJ1dHRvbiA9IChkYXRlKSA9PiB7XG4gIGlmIChuZXcgRGF0ZShkYXRlKSA8IG5ldyBEYXRlKCkpIHtcbiAgICByZXR1cm4gJ2Rpc2FibGVkJztcbiAgfVxuICByZXR1cm47XG59XG5cbmNvbnN0IGRpc3BsYXlSb29tcyA9ICgpID0+IHtcbiAgY29uc3QgYm9va2VkUm9vbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9va2VkUm9vbXMnKTtcbiAgYm9va2VkUm9vbXMuaW5uZXJIVE1MID0gJyc7XG4gIGN1c3RvbWVyLm9yZ2FuaXplQm9va2luZ3NCeURhdGUoaG90ZWwpLmZvckVhY2gocm9vbSA9PiB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBzZWN0aW9uLmNsYXNzTmFtZSA9ICdib29rZWQtcm9vbV9fY2FyZCc7XG4gICAgc2VjdGlvbi50YWJJbmRleCA9IFwiMFwiXG4gICAgc2VjdGlvbi5kYXRhc2V0LmJvb2tpbmdJRCA9IHJvb20uYm9va2luZ0lEO1xuICAgIHNlY3Rpb24uaW5uZXJIVE1MID0gXG4gICAgICBgPGltZyBzcmM9XCIuL2ltYWdlcy9yb29tLSR7cm9vbS5udW1iZXJ9LmpwZ1wiIGFsdD1cIkhvdGVsIHJvb20gd2l0aCBhIGJlZCBhbmQgZGVza1wiIGNsYXNzPVwiYm9va2VkLXJvb21fX2NhcmRfX2ltZ1wiPlxuICAgICAgPHAgY2xhc3M9XCJib29rZWQtcm9vbV9fY2FyZF9fcm9vbS1udW1iZXJcIj5Sb29tICR7cm9vbS5udW1iZXJ9PC9wPlxuICAgICAgPHAgY2xhc3M9XCJib29rZWQtcm9vbV9fY2FyZF9fZGF0ZS1ib29rZWRcIj4ke2ZpeERhdGUocm9vbS5kYXRlQm9va2VkKX08L3A+XG4gICAgICA8cCBjbGFzcz1cImJvb2tlZC1yb29tX19jYXJkX190eXBlXCI+ICR7Y2FwaXRhbGl6ZVdvcmRzKHJvb20ucm9vbVR5cGUpfTwvcD5cbiAgICAgIDxwIGNsYXNzPVwiYm9va2VkLXJvb21fX2NhcmRfX2JlZC1zaXplXCI+QmVkIFNpemUgJHtjYXBpdGFsaXplV29yZHMocm9vbS5iZWRTaXplKX08L3A+XG4gICAgICA8cCBjbGFzcz1cImJvb2tlZC1yb29tX19jYXJkX19udW1iZXItb2YtYmVkc1wiPkJlZHM6ICR7cm9vbS5udW1CZWRzfTwvcD5cbiAgICAgIDxwIGNsYXNzPVwiYm9va2VkLXJvb21fX2NhcmRfX2Nvc3RcIj4ke3Jvb20uY29zdFBlck5pZ2h0fSAvIE5pZ2h0PC9wPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJvb2tlZC1yb29tX19jYXJkX19idG4gYnRuXCIgJHtkaXNhYmxlQnV0dG9uKHJvb20uZGF0ZUJvb2tlZCl9PkNhbmNlbCBSZXNlcnZhdGlvbjwvYnV0dG9uPmA7IFxuICAgIGJvb2tlZFJvb21zLmFwcGVuZChzZWN0aW9uKTtcbiAgfSk7XG59O1xuXG5jb25zdCBkaXNwbGF5UG9pbnRzRWFybmVkID0gKCkgPT4ge1xuICBjb25zdCBwb2ludHNFYXJuZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9pbnRzRWFybmVkJyk7XG4gIGNvbnN0IGN1c3RvbWVyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b21lck5hbWUnKVxuICBwb2ludHNFYXJuZWQuaW5uZXJUZXh0ID0gXG4gICAgYFlvdSd2ZSBlYXJuZWQgJHtjdXN0b21lci5yZXR1cm5Qb2ludHNFYXJuZWQoaG90ZWwpfSBwb2ludHNcbiAgICBUb3RhbCBzcGVudCAke2N1c3RvbWVyLnJldHVyblRvdGFsQm9va2luZ0Nvc3QoaG90ZWwpfWA7XG4gIGN1c3RvbWVyTmFtZS5pbm5lclRleHQgPSBgV2VsY29tZSBiYWNrICR7Y3VzdG9tZXIubmFtZS5zcGxpdCgnICcpWzBdfSFgXG59XG5cbmNvbnN0IGNvbXBpbGVGb3JtRGF0YSA9IChlbGVtZW50cykgPT4ge1xuICBjb25zdCBkYXRhID0ge1xuICAgIGRhdGU6IGVsZW1lbnRzWzBdLnZhbHVlLnJlcGxhY2UoLy0vZywgXCIvXCIpLFxuICAgIHJvb21UeXBlOiBbXSxcbiAgICBiZWRTaXplOiBbXSxcbiAgICBudW1CZWRzOiBbXVxuICB9O1xuICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGlmIChlbGVtZW50LmNsYXNzTmFtZS5pbmNsdWRlcygncm9vbS10eXBlJykgJiYgZWxlbWVudC5jaGVja2VkKSB7XG4gICAgICBkYXRhLnJvb21UeXBlLnB1c2goZWxlbWVudC52YWx1ZSk7XG4gICAgfVxuICAgIGlmIChlbGVtZW50LmNsYXNzTmFtZS5pbmNsdWRlcygnYmVkLXNpemUnKSAmJiBlbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgIGRhdGEuYmVkU2l6ZS5wdXNoKGVsZW1lbnQudmFsdWUpO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5jbGFzc05hbWUuaW5jbHVkZXMoJ251bWJlci1vZi1iZWRzJykgJiYgZWxlbWVudC5jaGVja2VkKSB7XG4gICAgICBkYXRhLm51bUJlZHMucHVzaChlbGVtZW50LnZhbHVlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZGF0YTtcbn1cblxuY29uc3QgcmV0cmlldmVGb3JtVmFsdWVzID0gKCkgPT4ge1xuICBjb25zdCB2YWx1ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoRm9ybScpO1xuICBjb25zdCBkYXRhID0gY29tcGlsZUZvcm1EYXRhKEFycmF5LmZyb20odmFsdWVzLmVsZW1lbnRzKSk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5jb25zdCBkaXNwbGF5U2VhcmNoUmVzdWx0cyA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgZGF0YSA9IHJldHJpZXZlRm9ybVZhbHVlcygpO1xuICBjb25zdCByZXN1bHRzID0gaG90ZWwucmV0dXJuQWxsRmlsdGVyZWRSZXN1bHRzKGRhdGEuZGF0ZSwgXG4gICAgZGF0YS5yb29tVHlwZSwgZGF0YS5iZWRTaXplLCBkYXRhLm51bUJlZHMpO1xuICBjb25zdCBoZWFkZXIgPSByZXN1bHRzLmxlbmd0aCA9PT0gMCA/IFxuICAgIGBTb3JyeSBubyByb29tcyBtYXRjaCB5b3VyIHNlYXJjaCBjcml0ZXJpYSBmb3IgJHtmaXhEYXRlKGRhdGEuZGF0ZSl9LiBQbGVhc2UgdHJ5IGFnYWluLmAgXG4gICAgOiBgUm9vbXMgYXZhaWxhYmxlIG9uICR7Zml4RGF0ZShkYXRhLmRhdGUpfWBcbiAgaWYgKHJlc3VsdHMpIHtcbiAgICBjb25zdCBhdmFpbGFibGVSb29tcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdmFpbGFibGVSb29tcycpO1xuICAgIGF2YWlsYWJsZVJvb21zLmlubmVySFRNTCA9IFwiXCI7XG4gICAgYXZhaWxhYmxlUm9vbXMuaW5uZXJIVE1MID1cbiAgICBgPGgyIGNsYXNzPVwiYXZhaWxhYmxlLXJvb21zX19oZWFkZXJcIj4gJHtoZWFkZXJ9IDwvaDI+YDtcbiAgICByZXN1bHRzLmZvckVhY2gocmVzdWx0ID0+IHtcbiAgICAgIGF2YWlsYWJsZVJvb21zLmlubmVySFRNTCArPSBcbiAgICAgIGA8c2VjdGlvbiBjbGFzcz1cImF2YWlsYWJsZS1yb29tc19fY2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaG90ZWwtaW1nLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvcm9vbS0ke3Jlc3VsdC5udW1iZXJ9LmpwZ1wiIGFsdD1cIllvdXIgbmV4dCBob3RlbCByb29tXCIgY2xhc3M9XCJhdmFpbGFibGUtcm9vbXNfX2NhcmRfX2ltZ1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImF2YWlsYWJsZS1yb29tc19faW5mby1jb250YWluZXJcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImluZm8tbGVmdCBhdmFpbGFibGUtcm9vbXNfX2NhcmRfX3Jvb20tbnVtYmVyXCI+Um9vbSAke3Jlc3VsdC5udW1iZXJ9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiaW5mby1yaWdodCBhdmFpbGFibGUtcm9vbXNfX2NhcmRfX2JlZC1zaXplXCI+QmVkIFNpemUgLSAke2NhcGl0YWxpemVXb3JkcyhyZXN1bHQuYmVkU2l6ZSl9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiaW5mby1sZWZ0IGF2YWlsYWJsZS1yb29tc19fY2FyZF9fcm9vbS10eXBlXCI+JHtjYXBpdGFsaXplV29yZHMocmVzdWx0LnJvb21UeXBlKX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJpbmZvLXJpZ2h0IGF2YWlsYWJsZS1yb29tc19fY2FyZF9fbnVtYmVyLW9mLWJlZHNcIj5Ub3RhbCBCZWRzIC0gJHtyZXN1bHQubnVtQmVkc308L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJpbmZvLWNlbnRlciBhdmFpbGFibGUtcm9vbXNfX2NhcmRfX2hhcy1iaWRldFwiPiR7cmVzdWx0LmJpZGV0ID8gXCJDb21wbGltZW50YXJ5IEJpZGV0IVwiIDogXCJcIn08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJpbmZvLWNlbnRlciBhdmFpbGFibGUtcm9vbXNfX2NhcmRfX2Nvc3QtcGVyLW5pZ2h0XCI+JCR7cmVzdWx0LmNvc3RQZXJOaWdodH0gLyBQZXIgTmlnaHQ8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYXZhaWxhYmxlLXJvb21zX19jYXJkX19ib29rLWJ0biBib29rLW5vdyBidG5cIiBkYXRhLWJvb2tpbmctZGF0YT0ke3N0b3JlQm9va2luZ0RhdGEoZGF0YS5kYXRlLCByZXN1bHQpfT5Cb29rIE5vdzwvYnV0dG9uPlxuICAgICAgPC9zZWN0aW9uPmBcbiAgICB9KTtcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gJyNhdmFpbGFibGVSb29tcyc7XG4gICAgc2VhcmNoRm9ybS5yZXNldCgpO1xuICAgIHJldHVybjsgXG4gIH1cbiAgZGlzcGxheVVzZXJNZXNzYWdlKCdQbGVhc2UgZW50ZXIgYSB2YWxpZCBkYXRlLicpO1xufVxuXG5jb25zdCBkaXNwbGF5VXNlck1lc3NhZ2UgPSAoY29udGVudCkgPT4ge1xuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2UnKTtcbiAgbWVzc2FnZS5pbm5lclRleHQgPSBjb250ZW50O1xuICB0b2dnbGVIaWRkZW4odXNlck1lc3NhZ2UsICdmYWxzZScpO1xufVxuXG5cbmxldCBmaXhEYXRlID0gKGRhdGUpID0+IHtcbiAgY29uc3Qgc3BsaXREYXRlID0gZGF0ZS5zcGxpdCgnLycpO1xuICBzcGxpdERhdGUucHVzaChzcGxpdERhdGUuc2hpZnQoKSk7XG4gIGNvbnN0IGpvaW5lZCA9IHNwbGl0RGF0ZS5qb2luKCcvJyk7XG4gIHJldHVybiBqb2luZWQ7XG59XG5cbmNvbnN0IGNhcGl0YWxpemVXb3JkcyA9IChzdHJpbmcpID0+IHtcbiAgbGV0IHdvcmRzID0gc3RyaW5nLnNwbGl0KCcgJyk7XG4gIGxldCBjYXBpdGFsaXplZCA9IHdvcmRzLm1hcCggd29yZCA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxLCB3b3JkLmxlbmd0aCkpXG4gIHJldHVybiBjYXBpdGFsaXplZC5qb2luKCcgJyk7XG59XG5cbmNvbnN0IHN0b3JlQm9va2luZ0RhdGEgPSAoZGF0ZSwgZGF0YSkgPT4ge1xuICBjb25zdCBib29raW5nRGF0YSA9IHtcbiAgICB1c2VySUQ6IGN1c3RvbWVyLmlkLFxuICAgIGRhdGU6IGRhdGUsXG4gICAgcm9vbU51bWJlcjogZGF0YS5udW1iZXJcbiAgfTtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGJvb2tpbmdEYXRhKTtcbn1cblxuY29uc3QgbWFrZVJlc2VydmF0aW9uID0gKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcygnYnRuJykpIHtcbiAgICBkYXRhLmJvb2tSb29tKEpTT04ucGFyc2UoZS50YXJnZXQuZGF0YXNldC5ib29raW5nRGF0YSkpXG4gICAgICAudGhlbihkYXRhLmhhbmRsZUVycm9ycylcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBob3RlbC5ib29raW5ncy5wdXNoKGRhdGEubmV3Qm9va2luZylcbiAgICAgICAgZGlzcGxheVJvb21zKCk7XG4gICAgICAgIGRpc3BsYXlQb2ludHNFYXJuZWQoKTtcbiAgICAgICAgZGlzcGxheVVzZXJNZXNzYWdlKGBCb29raW5nIGZvciAke2ZpeERhdGUoZGF0YS5uZXdCb29raW5nLmRhdGUpfSBjb21wbGV0ZS5cbiAgICAgICAgQ29uZmlybWF0aW9uIG51bWJlciAtICR7ZGF0YS5uZXdCb29raW5nLmlkfWApXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBhbGVydChlcnIpKTtcbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICB9XG59XG5cbmNvbnN0IHVwZGF0ZUJvb2tpbmdzID0gKCkgPT4ge1xuICBQcm9taXNlLnJlc29sdmUoZGF0YS5nZXREYXRhKCdib29raW5ncycpKSBcbiAgICAudGhlbih2YWx1ZXMgPT4ge1xuICAgICAgaG90ZWwuYm9va2luZ3MgPSB2YWx1ZXM7XG4gICAgICBkaXNwbGF5Um9vbXMoKTtcbiAgICAgIGRpc3BsYXlQb2ludHNFYXJuZWQoKTtcbiAgICB9KTtcbn1cblxuXG5jb25zdCBjYW5jZWxSZXNlcnZhdGlvbiA9IChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5jbGFzc05hbWUuaW5jbHVkZXMoJ2J0bicpKSB7XG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuYm9va2luZ0lEO1xuICAgIGRhdGEuY2FuY2VsQm9va2luZyhpZClcbiAgICAgIC50aGVuKGRhdGEuaGFuZGxlRXJyb3JzKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB1cGRhdGVCb29raW5ncygpO1xuICAgICAgICBkaXNwbGF5VXNlck1lc3NhZ2UoYFlvdXIgcmVzZXJ2YXRpb24gaGFzIGJlZW4gY2FuY2VsZWQuYCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBhbGVydChlcnIpKTtcbiAgfVxufVxuXG5jb25zdCBmaW5kVXNlcklEID0gKHVzZXJOYW1lKSA9PiB1c2VyTmFtZS5yZXBsYWNlKFwib3Zlcmxvb2tcIiwgXCJcIik7XG5cbmNvbnN0IHNob3dNYWluID0gKCkgPT4ge1xuICBjb25zdCBtYWluRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1wYWdlJyk7XG4gIGNvbnN0IGxvZ2luUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpblBhZ2UnKTtcbiAgdG9nZ2xlSGlkZGVuKGxvZ2luUGFnZSk7XG4gIG1haW5FbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gdG9nZ2xlSGlkZGVuKGVsZW1lbnQsICdmYWxzZScpKTtcbn1cblxuY29uc3Qgc2hvd0xvZ2luRXJyb3IgPSAoKSA9PiB7XG4gIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvck1lc3NhZ2UnKTtcbiAgdG9nZ2xlSGlkZGVuKGVycm9yTWVzc2FnZSwgJ2ZhbHNlJyk7XG59XG5cbmNvbnN0IGhhbmRsZVNlYXJjaEV2ZW50cyA9IChlKSA9PiB7XG4gIGhpZGVTZWFyY2hEcm9wRG93bnMoKTtcbiAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5jbGlja2FibGUnKSkge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5jbGlja2FibGUnKS5jaGlsZE5vZGVzWzNdO1xuICAgIHRvZ2dsZUhpZGRlbih0YXJnZXQsICdmYWxzZScpO1xuICB9XG59XG5cbmNvbnN0IGNsb3NlU2VhcmNoQmFyID0gKGUpID0+IHsgXG4gIGlmIChlLnRhcmdldC5jbGFzc05hbWUuaW5jbHVkZXMoJ2V4aXQtYnRuJykpIHtcbiAgICB0b2dnbGVIaWRkZW4odXNlck1lc3NhZ2UpO1xuICB9XG4gIGlmICghZS50YXJnZXQuY2xvc2VzdCgnLnNlYXJjaC1iYXInKSkge1xuICAgIGhpZGVTZWFyY2hEcm9wRG93bnMoKTtcbiAgfVxufVxuXG5jb25zdCBoaWRlU2VhcmNoRHJvcERvd25zID0gKCkgPT4ge1xuICBjb25zdCBtZW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wLWRvd24tbWVudScpO1xuICBtZW51cy5mb3JFYWNoKGVsZW1lbnQgPT4gdG9nZ2xlSGlkZGVuKGVsZW1lbnQpKTtcbn1cblxuY29uc3QgaGlkZU9uU2Nyb2xsID0gKCkgPT4ge1xuICB0b2dnbGVIaWRkZW4odXNlck1lc3NhZ2UpO1xuICBoaWRlU2VhcmNoRHJvcERvd25zKCk7XG59XG5cbmNvbnN0IHRhYlRocm91Z2hTZWFyY2ggPSAoZSkgPT4ge1xuICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgIGhpZGVTZWFyY2hEcm9wRG93bnMoKTtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5jbG9zZXN0KCcuY2xpY2thYmxlJykuY2hpbGROb2Rlc1szXTtcbiAgICB0b2dnbGVIaWRkZW4odGFyZ2V0LCAnZmFsc2UnKTtcbiAgfVxufVxuXG53aW5kb3cub25sb2FkID0gY3JlYXRlSG90ZWwoKTtcbmxvZ2luQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlVXNlcik7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVNlYXJjaEJhcik7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGlkZU9uU2Nyb2xsKTtcbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlTZWFyY2hSZXN1bHRzKTtcbmF2YWlsYWJsZVJvb21zU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VSZXNlcnZhdGlvbik7XG5ib29rZWRSb29tcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbFJlc2VydmF0aW9uKTtcbnNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVTZWFyY2hFdmVudHMpO1xuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGFiVGhyb3VnaFNlYXJjaCk7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=