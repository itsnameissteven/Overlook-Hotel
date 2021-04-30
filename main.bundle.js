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
___CSS_LOADER_EXPORT___.push([module.i, "*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit; }\n\nhtml {\n  font-size: 62.5%; }\n  html::-webkit-scrollbar {\n    display: none; }\n\nbody {\n  box-sizing: border-box;\n  padding: 5rem;\n  height: fit-content;\n  min-height: 100vh; }\n\n.btn {\n  border: 0;\n  outline: 0; }\n  .btn:disabled {\n    display: none; }\n  .btn:hover {\n    transform: translateY(-0.3rem);\n    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n    cursor: pointer; }\n    .btn:hover:after {\n      transform: scaleX(1.4) scaleY(1.6);\n      opacity: 0; }\n  .btn:active, .btn:focus {\n    transform: translateY(-0.1rem);\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2); }\n\n::-webkit-scrollbar {\n  display: none; }\n\nbody {\n  font-family: 'Noto Sans TC', sans-serif;\n  font-weight: 400;\n  line-height: 1.7;\n  color: #000; }\n\n.header__title {\n  color: white;\n  text-transform: uppercase;\n  font-family: 'Shrikhand', cursive; }\n  .header__title--main {\n    display: block;\n    font-size: 8rem;\n    letter-spacing: 3.5rem; }\n  .header__title--sub {\n    display: block;\n    font-size: 4rem;\n    letter-spacing: 1rem; }\n\n.search-bar__input {\n  line-height: 1.7;\n  font-size: 1.1rem; }\n  .search-bar__input__header--sub {\n    font-weight: 200;\n    color: #707070; }\n\n.date {\n  font-size: 1.8rem; }\n\n.hotel-points__header {\n  font-size: 3rem; }\n\n.hotel-points__points-earned {\n  font-size: 1.7rem;\n  font-weight: 700;\n  line-height: 2; }\n\n.hotel-points__tag-line {\n  font-family: 'Shrikhand', cursive;\n  font-weight: 400;\n  font-size: 2.5rem;\n  letter-spacing: .2rem; }\n\n.booked-room__card {\n  font-size: 1.4rem; }\n\n.booked-room__header {\n  font-family: 'Shrikhand', cursive;\n  font-size: 3rem;\n  letter-spacing: .5rem; }\n\n.available-rooms__header {\n  font-family: 'Shrikhand', cursive;\n  font-size: 3rem;\n  letter-spacing: .5rem; }\n\n.available-rooms__card {\n  font-size: 1.3rem;\n  font-weight: 700; }\n\n.login-page__header {\n  font-family: 'Shrikhand', cursive;\n  font-size: 3rem;\n  letter-spacing: .5rem; }\n\n.login-page__form__btn {\n  font-size: 1.6rem;\n  font-weight: 700; }\n\n.user-msg__header {\n  font-size: 1.8rem; }\n\n@keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(-10rem); }\n  80% {\n    transform: translateX(1rem); }\n  100% {\n    opacity: 1;\n    transform: translate(0); } }\n\n@keyframes moveInRight {\n  0% {\n    opacity: 0;\n    transform: translateX(10rem); }\n  80% {\n    transform: translateX(-1rem); }\n  100% {\n    opacity: 1;\n    transform: translate(0); } }\n\n@keyframes dropDown {\n  0% {\n    transform: scaleY(0); }\n  80% {\n    transform: scaleY(1.1); }\n  100% {\n    transform: scaleY(1); } }\n\n.search-bar {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  align-items: center;\n  position: fixed;\n  border: 0.5px solid #a7a7a7;\n  top: 1rem;\n  left: 50%;\n  transform: translate(-50%);\n  height: 7rem;\n  width: 80%;\n  max-width: 95rem;\n  min-width: 75rem;\n  background-color: white;\n  border-radius: 5rem;\n  z-index: 10;\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2); }\n  .search-bar__input {\n    position: relative;\n    padding-left: 3rem;\n    width: 100%;\n    height: 100%;\n    border-radius: 100px;\n    border: none; }\n    .search-bar__input:hover {\n      background-color: rgba(194, 194, 194, 0.507); }\n    .search-bar__input:focus {\n      box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.36);\n      outline: none;\n      background-color: white; }\n    .search-bar__input__header {\n      position: absolute;\n      height: 100%;\n      top: 20%; }\n      .search-bar__input__header--main {\n        display: block; }\n      .search-bar__input__header--sub {\n        display: block; }\n  .search-bar__btn {\n    position: fixed;\n    right: 1%;\n    background-color: #FF395A;\n    border-radius: 100%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-position: center;\n    background-repeat: no-repeat;\n    height: 4.5rem;\n    width: 4.5rem; }\n    .search-bar__btn:hover, .search-bar__btn:focus {\n      background-color: #ec0027; }\n\n.drop-down-menu {\n  padding: 3rem;\n  margin-left: -3rem;\n  font-size: 1.4rem;\n  line-height: 3;\n  position: fixed;\n  top: 9rem;\n  background-color: white;\n  height: 25rem;\n  width: 24%;\n  border-radius: 2rem;\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n  animation: dropDown 400ms ease-out;\n  transform-origin: top; }\n\nlabel {\n  width: fit-content;\n  height: 50%; }\n\n.date {\n  width: 70rem; }\n\n.date-label {\n  font-size: 0; }\n\n.booked-room__container {\n  display: inline-block;\n  height: 100vh;\n  overflow: scroll;\n  width: 69%; }\n\n.booked-room__img__container {\n  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.568), rgba(168, 168, 168, 0.267));\n  display: inline-block;\n  height: 100vh;\n  width: 30%;\n  overflow: hidden;\n  border-radius: .6rem; }\n\n.booked-room__img {\n  height: 100%;\n  min-height: 70rem; }\n\n.booked-room__header {\n  margin: 3rem 0 3rem 18%; }\n\n.booked-room__card {\n  display: grid;\n  grid-template-columns: 30rem repeat(2, 1fr);\n  grid-template-rows: repeat(3, 3rem) auto;\n  height: fit-content;\n  position: relative;\n  padding: 2.2rem;\n  border-bottom: 2px solid #707070; }\n  .booked-room__card__img {\n    grid-row: 1/6;\n    width: 30rem;\n    border-radius: 1rem; }\n  .booked-room__card__room-number, .booked-room__card__date-booked, .booked-room__card__type {\n    grid-column: 2;\n    margin-left: 1.5rem; }\n  .booked-room__card__number-of-beds {\n    grid-column: 3;\n    grid-row: 2;\n    justify-self: right; }\n  .booked-room__card__bed-size {\n    grid-column: 3;\n    grid-row: 1;\n    justify-self: right; }\n  .booked-room__card__btn {\n    color: #fff;\n    background-color: #FF395A;\n    border-radius: .6rem;\n    width: 15rem;\n    height: 4rem;\n    grid-column: 3;\n    grid-row: 5;\n    justify-self: right; }\n    .booked-room__card__btn:hover, .booked-room__card__btn:focus {\n      background-color: #ec0027; }\n  .booked-room__card__cost {\n    grid-row: 5;\n    align-self: end;\n    margin-left: 1.5rem; }\n\n.login-page__img {\n  display: inline-block;\n  height: 85vh;\n  width: 36%;\n  max-width: 48rem;\n  overflow: hidden;\n  border: 1px solid #707070; }\n  .login-page__img__hero-img {\n    height: 100%;\n    min-height: 75rem; }\n\n.login-page__form-container {\n  float: right;\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 60%;\n  height: 85vh; }\n\n.login-page__form-container p {\n  font-weight: bold; }\n\n.login-form__input, .login-error-msg {\n  display: block;\n  height: 4.5rem;\n  width: 25rem;\n  margin-top: 2rem;\n  border-radius: 0.6rem; }\n\n.login-page__form__btn {\n  background-color: #4caea6;\n  color: #292929; }\n  .login-page__form__btn:hover, .login-page__form__btn:focus {\n    background-color: #357973; }\n\n.login-error-msg {\n  color: #fff;\n  height: fit-content;\n  padding: 1rem;\n  background-color: #ff0033; }\n\n.user-msg {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 10rem;\n  height: 25rem;\n  width: 40%;\n  background-color: #fff;\n  left: 50%;\n  transform: translate(-50%);\n  z-index: 20;\n  border-radius: 3rem;\n  border: 1px solid #707070; }\n\n.exit-btn {\n  position: absolute;\n  top: 2rem;\n  right: 2rem;\n  background-color: #FF395A;\n  border-radius: 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 4.5rem;\n  width: 4.5rem; }\n  .exit-btn:hover, .exit-btn:focus {\n    background-color: #ec0027; }\n\n.available-rooms {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));\n  grid-gap: 1rem;\n  padding-top: 10rem;\n  width: 100%;\n  justify-items: center; }\n  .available-rooms__info-container {\n    padding-top: 1rem;\n    display: flex;\n    flex-wrap: wrap;\n    height: 15rem;\n    justify-content: space-around; }\n  .available-rooms__header {\n    width: 100%;\n    grid-column: 1/-1;\n    text-align: center;\n    margin-bottom: 2rem; }\n  .available-rooms__card {\n    border: 1px solid #707070;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 28rem;\n    height: 40rem;\n    padding: 1rem;\n    border-radius: .6rem; }\n    .available-rooms__card__img {\n      height: 20rem; }\n    .available-rooms__card__book-btn {\n      color: #fff;\n      background-color: #FF395A;\n      border-radius: .6rem;\n      width: 15rem;\n      height: 4rem;\n      align-self: center;\n      width: 90%;\n      margin-bottom: 1rem; }\n      .available-rooms__card__book-btn:hover, .available-rooms__card__book-btn:focus {\n        background-color: #ec0027; }\n\n.info-left,\n.info-right {\n  width: 50%; }\n\n.info-right {\n  text-align: right; }\n\n.info-center {\n  width: 100%;\n  text-align: center; }\n\n.hotel-img-container {\n  width: 100%;\n  height: 18rem;\n  overflow: hidden;\n  border-radius: 1rem; }\n\n.header {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  min-height: 80rem;\n  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.568), rgba(168, 168, 168, 0.267)), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n  background-position: bottom;\n  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%); }\n  .header__title {\n    backface-visibility: hidden;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    text-align: center; }\n    .header__title--main {\n      animation: moveInRight 1s ease-out; }\n    .header__title--sub {\n      animation: moveInLeft 1s ease-out; }\n\n.hotel-points {\n  position: relative;\n  min-height: fit-content;\n  height: 80rem;\n  width: 100%;\n  text-align: right;\n  margin-top: 8rem; }\n  .hotel-points__name {\n    margin-bottom: 1rem; }\n  .hotel-points__header {\n    margin-bottom: 1.5rem; }\n  .hotel-points__img {\n    position: absolute;\n    top: 10%;\n    left: 15%;\n    transform: translate(-50%, -50%);\n    transform: translate(0, 0);\n    background-color: linear-gradient(0deg, rgba(0, 0, 0, 0.568), rgba(168, 168, 168, 0.267));\n    width: 70%;\n    border-radius: 6px; }\n  .hotel-points__tag-line {\n    position: absolute;\n    left: 0;\n    top: 15rem;\n    text-align: left;\n    z-index: 5; }\n\n.points-container {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 30rem;\n  height: 30rem;\n  right: 8%;\n  background-color: #60AF8A;\n  padding: 3rem;\n  z-index: 5;\n  border-radius: 50% 20% 50% 40%; }\n\n[aria-hidden=\"true\"] {\n  display: none; }\n\n@media screen and (max-width: 1200px) {\n  .booked-room__card__img {\n    width: 100%; }\n  .hotel-points {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: fit-content; }\n  .hotel-points__img {\n    display: none; }\n  .hotel-points__tag-line {\n    position: unset;\n    display: inline-block;\n    text-align: center; }\n  .points-container {\n    position: unset;\n    margin-bottom: 3rem; }\n  .booked-room__card {\n    grid-template-columns: 40% repeat(2, 1fr); }\n  .search-bar {\n    width: 90%;\n    min-width: 70rem; }\n  .login-page__img {\n    width: 45%; }\n  .login-page__form-container {\n    width: 55%; }\n  .error {\n    width: 60%; }\n  .header {\n    clip-path: unset; }\n  .header__title--main {\n    font-size: 6vw;\n    letter-spacing: 2rem; }\n  .header__title--sub {\n    font-size: 3.5vw; }\n  .booked-room__img__container {\n    display: none; }\n  .booked-room__container {\n    width: 100%;\n    height: fit-content; } }\n\n@media screen and (max-width: 750px) {\n  body {\n    padding: 0; }\n  .drop-down-menu {\n    width: 80%;\n    max-width: 30rem;\n    left: 18%; }\n  .booked-room__card {\n    grid-template-rows: repeat(3, 2rem) auto;\n    font-size: 1.3rem; }\n  .booked-room__header {\n    display: block;\n    margin: 3rem auto; }\n  .booked-room__card__btn {\n    font-size: 1.2rem;\n    width: 8rem; }\n  .search-bar {\n    width: 100%;\n    min-width: 70rem;\n    top: 0;\n    border-radius: unset;\n    min-width: unset; }\n  .search-bar__input__header--sub {\n    display: none; }\n  .search-bar__input {\n    padding: 1rem; }\n  .login-page__img {\n    display: none; }\n  .login-page__form-container {\n    width: 100%; }\n  .search-bar__btn {\n    height: 3rem;\n    width: 3rem; }\n  .user-msg {\n    width: 90%; }\n  .exit-btn {\n    height: 3rem;\n    width: 3rem; }\n  .date {\n    width: 60rem;\n    padding: 0; }\n  .available-rooms {\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: unset; }\n    .available-rooms__card {\n      width: 19rem;\n      padding: 3px;\n      height: 30rem;\n      font-size: 1.1rem; }\n    .available-rooms__img {\n      height: 15rem; }\n    .available-rooms__header {\n      font-size: 2rem; }\n  .hotel-img-container {\n    height: 13rem; } }\n", "",{"version":3,"sources":["webpack://./src/css/_reset.scss","webpack://./src/css/_typography.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_mixins.scss","webpack://./src/css/_animations.scss","webpack://./src/css/_search_bar.scss","webpack://./src/css/_booking_card.scss","webpack://./src/css/_login_page.scss","webpack://./src/css/_user-message.scss","webpack://./src/css/_available_rooms.scss","webpack://./src/css/_main_page.scss","webpack://./src/css/base.scss","webpack://./src/css/_media-queries.scss"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n}\n\nbody {\n  box-sizing: border-box;\n  padding: 5rem;\n  height: fit-content;\n  min-height: 100vh;\n  \n}\n\n.btn {\n  border: 0;\n  outline: 0;\n\n  &:disabled {\n    display: none;\n  }\n\n  &:hover {\n    transform: translateY(-.3rem);\n    box-shadow: 0 1rem 2rem rgba(0, 0, 0, .2);\n    cursor: pointer;\n\n    &:after {\n      transform: scaleX(1.4) scaleY(1.6);\n      opacity:0;\n    }\n  }\n\n  &:active,\n  &:focus {\n    transform: translateY(-.1rem);\n    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .2);\n  }\n}\n\n::-webkit-scrollbar {\n    display: none;\n  }","body {\n  font-family: 'Noto Sans TC', sans-serif;\n  font-weight: 400;\n  line-height: 1.7;\n  color:$text-primary;\n}\n\n.header__title {\n  color:$text-secondary;\n  text-transform: uppercase;\n  font-family: 'Shrikhand', cursive;\n\n  &--main{\n    display: block;\n    font-size: 8rem;\n    letter-spacing: 3.5rem;\n  }\n\n  &--sub {\n    display: block;\n    font-size: 4rem;\n    letter-spacing: 1rem;\n  }\n}\n\n// Search Bar \n\n.search-bar__input {\n  line-height: 1.7;\n  font-size: 1.1rem;\n\n  &__header--sub{\n    font-weight: 200;\n    color: $subtle-tones;\n  }\n}\n\n.date {\n    font-size: 1.8rem;\n}\n\n// Customer DashBoard\n\n.hotel-points {\n  \n  &__header {\n    font-size: 3rem;\n  }\n  &__points-earned {\n    font-size: 1.7rem;\n    font-weight: 700;\n    line-height: 2;\n  }\n\n  &__tag-line {\n    font-family: 'Shrikhand', cursive;\n    font-weight: 400;\n    font-size: 2.5rem;\n    letter-spacing: .2rem;\n  }\n}\n\n.booked-room__card {\n  font-size: 1.4rem;\n}\n\n.booked-room__header {\n  @include headerFont;\n}\n\n.available-rooms__header {\n  @include headerFont;\n}\n\n.available-rooms__card {\n  font-size: 1.3rem;\n  font-weight: 700;\n}\n\n// Login page\n\n.login-page__header {\n  @include headerFont;\n}\n\n.login-page__form__btn {\n  font-size: 1.6rem;\n  font-weight: 700;\n}\n\n//error message\n\n.user-msg__header {\n  font-size: 1.8rem;\n}\n\n//available rooms \n","$text-primary: #000;\n$text-secondary: rgb(255, 255, 255);\n$subtle-tones: rgb(112, 112, 112);\n$accent: #FF395A;\n\n$main-drop-shadow: 0 1rem 2rem rgba(black, .2);\n$primary-gradient:linear-gradient(0deg, rgba(0, 0, 0, 0.568), rgba(168, 168, 168, 0.267))\n","@mixin flex {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  align-items: center;\n}\n\n@mixin center ($top, $left) {\n  position: absolute;\n  top: $top;\n  left: $left;\n  transform: translate(-50%, -50%);\n}\n\n@mixin hoverColor ($baseColor) {\n    background-color: $baseColor;\n    &:hover,\n    &:focus {\n      background-color: darken($baseColor, 15%)\n    }\n}\n\n@mixin roundButton ($img) {\n  @include hoverColor($accent);\n  border-radius: 100%;\n    background-image: url($img);\n    background-position: center;\n    background-repeat: no-repeat;\n    height:4.5rem;\n    width: 4.5rem;\n}\n\n@mixin headerFont {\n  font-family: 'Shrikhand', cursive;\n  font-size: 3rem;\n  letter-spacing: .5rem;\n}\n\n@mixin rectangleBtn {\n  color: #fff;\n  @include hoverColor($accent);\n  border-radius: .6rem;\n  width: 15rem;\n  height: 4rem;\n}","@keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(-10rem);\n  }\n\n  80%{\n    transform: translateX(1rem);\n  }\n\n  100%{\n    opacity: 1;\n    transform: translate(0);\n  }\n}\n\n@keyframes moveInRight {\n  0% {\n    opacity: 0;\n    transform: translateX(10rem);\n  }\n\n  80%{\n    transform: translateX(-1rem);\n  }\n\n  100%{\n    opacity: 1;\n    transform: translate(0);\n  }\n}\n\n@keyframes dropDown {\n    0% {\n        transform: scaleY(0)\n    }\n    80% {\n        transform: scaleY(1.1)\n    }\n    100% {\n        transform: scaleY(1)\n    }\n}\n",".search-bar {\n  @include flex;\n  position: fixed;\n  border: .5px solid rgb(167, 167, 167);\n  top: 1rem;\n  left: 50%;\n  transform: translate(-50%);\n  height: 7rem;\n  width:80%;\n  max-width: 95rem;\n  min-width: 75rem;\n  background-color: $text-secondary;\n  border-radius: 5rem;\n  z-index:10;\n  box-shadow: $main-drop-shadow;\n\n  &__input{\n    position: relative;\n    padding-left: 3rem;\n    width: 100%;\n    height: 100%;\n    border-radius: 100px;\n    border: none;\n    \n    &:hover {\n      background-color: rgba(194, 194, 194, 0.507);\n    }\n    &:focus {\n      box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.36);\n      outline: none;\n      background-color: white;\n    }\n\n    &__header {\n      position: absolute;\n      height: 100%;\n      top: 20%;\n      &--main {\n        display: block;\n      }\n\n      &--sub{\n        display: block;\n      }\n    }\n  }\n\n  &__btn{\n    position:fixed;\n    right: 1%;\n    @include roundButton ('../images/search_icon.svg')\n  }\n   \n}\n\n.drop-down-menu {\n  padding: 3rem;\n  margin-left: -3rem;\n  font-size: 1.4rem;\n  line-height: 3;\n  position: fixed;\n  top: 9rem;\n  background-color: white;\n  height: 25rem;\n  width:24%;\n  border-radius: 2rem;\n  box-shadow: 0 1rem 2rem (rgba(0, 0, 0, 0.2));\n  animation: dropDown 400ms ease-out;\n  transform-origin: top;\n}\n\nlabel{\n  width:fit-content;\n  height: 50%;\n}\n\n.date {\n  width: 70rem;\n}\n\n.date-label {\n  font-size: 0;\n}",".booked-room__container {\n  display: inline-block;\n  height: 100vh;\n  overflow: scroll;\n  width:69%;\n}\n\n.booked-room__img__container {\n  background-image: $primary-gradient;\n  display: inline-block;\n  height: 100vh;\n  width:30%;\n  overflow: hidden;\n  border-radius: .6rem;\n}\n\n.booked-room__img{\n  height: 100%;\n  min-height: 70rem;\n}\n\n.booked-room__header {\n  margin:3rem 0 3rem 18%;\n}\n.booked-room__card {\n  display: grid;\n  grid-template-columns: 30rem repeat(2, 1fr);\n  grid-template-rows: repeat(3, 3rem) auto;\n  height: fit-content;\n  position: relative;\n  padding: 2.2rem;\n  border-bottom: 2px solid $subtle-tones;\n\n  &__img {\n    grid-row: 1/6;\n    width: 30rem;\n    border-radius: 1rem;\n  }\n\n  &__room-number{\n    grid-column: 2;\n    margin-left: 1.5rem;\n  }\n\n  &__date-booked {\n    @extend .booked-room__card__room-number;\n  }\n\n  &__type {\n    @extend .booked-room__card__room-number;\n  }\n\n  &__number-of-beds {\n    grid-column: 3;\n    grid-row: 2;\n    justify-self: right;\n  }\n  \n  &__bed-size{\n    grid-column: 3;\n    grid-row: 1;\n    justify-self: right;\n  }\n  &__btn {\n    @include rectangleBtn;\n    grid-column: 3;\n    grid-row: 5;\n    justify-self: right;\n  }\n\n  &__cost{\n    grid-row: 5;\n    align-self: end;\n    margin-left: 1.5rem;\n  }\n}",".login-page__img {\n  display: inline-block;\n  height: 85vh;\n  width: 36%;\n  max-width: 48rem;\n  overflow: hidden;\n  border: 1px solid $subtle-tones;\n\n  &__hero-img {\n    height: 100%;\n    min-height: 75rem;\n  }\n}\n\n.login-page__form-container {\n  float: right;\n  @include flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 60%;\n  height: 85vh;\n}\n\n.login-page__form-container p {\n  font-weight: bold;\n}\n\n.login-form__input {\n  display: block;\n  height: 4.5rem;\n  width: 25rem;\n  margin-top: 2rem;\n  border-radius: 0.6rem;\n}\n\n.login-page__form__btn {\n  @include hoverColor(#4caea6);\n  color: rgb(41, 41, 41);\n}\n\n.login-error-msg {\n  @extend .login-form__input;\n  color: #fff;\n  height: fit-content;\n  padding: 1rem;\n  background-color: #ff0033;\n}\n",".user-msg {\n  @include flex;\n  justify-content: center;\n  position: fixed;\n  top: 10rem;\n  height: 25rem;\n  width: 40%;\n  background-color: #fff;\n  left: 50%;\n  transform: translate(-50%);\n  z-index: 20;\n  border-radius: 3rem;\n  border: 1px solid $subtle-tones;\n}\n\n.exit-btn {\n  position: absolute;\n  top: 2rem;\n  right: 2rem;\n  @include roundButton('../images/exit.svg');\n}",".available-rooms {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));\n  grid-gap: 1rem;\n  padding-top: 10rem;\n  width:100%;\n  justify-items: center;\n\n  &__info-container {\n    padding-top: 1rem;\n    display: flex;\n    flex-wrap: wrap;\n    height: 15rem;\n    justify-content: space-around;\n  }\n\n  &__header {\n   width: 100%;\n   grid-column: 1/-1;\n   text-align: center;\n   margin-bottom: 2rem;\n  }\n\n  &__card {\n    border: 1px solid $subtle-tones;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 28rem;\n    height: 40rem;\n    padding:1rem;\n    border-radius: .6rem;\n\n    &__img {\n      height: 20rem;\n    } \n\n    &__book-btn {\n      @include rectangleBtn;\n      align-self: center;\n      width: 90%;\n      margin-bottom: 1rem;\n    }\n  }\n}\n\n.info-left,\n.info-right {\n  width:50%\n}\n\n.info-right {\n  text-align: right;\n}\n\n.info-center {\n  width: 100%;\n  text-align: center;\n}\n\n.hotel-img-container {\n  width: 100%;\n  height: 18rem;\n  overflow: hidden;\n  border-radius: 1rem;\n}\n\n",".header {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  min-height: 80rem;\n  background-image: $primary-gradient, url('../images/overlook-hotel.jpg');\n  background-size: cover;\n  background-position:bottom;\n  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);\n\n  &__title {\n    backface-visibility: hidden;\n    @include center(50%, 50%);\n    text-align:center;\n    \n    &--main {\n      animation: moveInRight 1s ease-out  \n    }\n\n    &--sub {\n      animation: moveInLeft 1s ease-out  \n    }\n  }\n}\n\n.hotel-points {\n  position: relative;\n  min-height: fit-content;\n  height: 80rem;\n  width: 100%;\n  text-align: right;\n  margin-top: 8rem;\n\n  &__name {\n     margin-bottom: 1rem;\n  }\n\n  &__header {\n    margin-bottom: 1.5rem;\n  }\n\n  &__img {\n    @include center(10%, 15%);\n    transform: translate(0,0);\n    background-color: linear-gradient(0deg, rgba(0, 0, 0, 0.568), rgba(168, 168, 168, 0.267));\n    width: 70%;\n    border-radius: 6px;\n  }\n\n  &__tag-line {\n    position: absolute;\n    left: 0;\n    top: 15rem;\n    text-align: left;\n    z-index: 5;\n  }\n}\n\n.points-container {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 30rem;\n  height: 30rem;\n  right: 8%;\n  background-color: #60AF8A;\n  padding:3rem;\n  z-index:5;\n  border-radius: 50% 20% 50% 40%\n}\n\n[aria-hidden=\"true\"] {\n  display: none;\n}","@import 'variables';\n@import 'reset';\n@import 'mixins';\n@import 'typography';\n@import 'animations';\n@import 'search_bar';\n@import 'booking_card';\n@import 'login_page';\n@import 'user-message';\n@import 'available_rooms';\n@import 'main_page';\n@import 'media-queries';","@media screen and (max-width: 1200px) {\n  .booked-room__card__img {\n    width: 100%;\n  }\n\n  .hotel-points {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: fit-content;\n  }\n\n  .hotel-points__img {\n    display: none\n  }\n\n  .hotel-points__tag-line {\n    position: unset;\n    display: inline-block;\n    text-align: center;\n  }\n\n  .points-container {\n    position: unset;\n    margin-bottom: 3rem;\n  }\n\n  .booked-room__card {\n    grid-template-columns: 40% repeat(2, 1fr);\n  }\n\n  .search-bar {\n    width:90%;\n    min-width: 70rem;\n  }\n\n  .login-page__img {\n    width:45%;\n  }\n\n  .login-page__form-container {\n    width: 55%;\n  }\n\n  .error {\n    width: 60%\n  }\n\n  .header {\n    clip-path: unset;\n  }\n\n  .header__title--main {\n    font-size: 6vw;\n    letter-spacing: 2rem;\n  }\n\n  .header__title--sub {\n    font-size: 3.5vw;\n  }\n\n  .booked-room__img__container {\n    display: none;\n  }\n\n  .booked-room__container {\n    width: 100%;\n    height: fit-content;\n  }\n}\n\n\n\n@media screen and (max-width: 750px) {\n  body {\n    padding: 0;\n  }\n\n  .drop-down-menu {\n    width: 80%;\n    max-width: 30rem;\n    left: 18%;\n  }\n\n  .booked-room__card {\n    grid-template-rows: repeat(3, 2rem) auto;\n    font-size: 1.3rem;\n  }\n\n  .booked-room__header {\n    display: block;\n    margin: 3rem auto;\n  }\n\n  .booked-room__card__btn {\n    font-size: 1.2rem;\n    width: 8rem\n  }\n\n  .search-bar {\n    width:100%;\n    min-width: 70rem;\n    top: 0;\n    border-radius: unset;\n    min-width: unset;\n  }\n\n  .search-bar__input__header--sub {\n    display: none;\n  }\n\n  .search-bar__input {\n    padding: 1rem;\n  }\n\n  .login-page__img {\n    display: none;\n  }\n\n  .login-page__form-container {\n    width: 100%;\n  }\n\n  .search-bar__btn {\n    height: 3rem;\n    width: 3rem;\n  }\n\n  .user-msg {\n    width: 90%\n  }\n\n  .exit-btn {\n    height: 3rem;\n    width: 3rem;\n  }\n\n  .date {\n    width: 60rem;\n    padding:0;\n  }\n\n  .available-rooms {\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: unset;\n\n    &__card {\n      width: 19rem;\n      padding: 3px;\n      height:30rem;\n      font-size: 1.1rem;\n    }\n\n    &__img {\n      height: 15rem\n    }\n\n    &__header {\n      font-size: 2rem;\n    }\n  }\n\n  .hotel-img-container {\n    height: 13rem;\n  }\n\n  \n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ3VzdG9tZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hvdGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9IdW1hbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz8xMTA3Iiwid2VicGFjazovLy8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvZXhpdC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9qb3NodWEtdHJlZS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9sb2dpbi1ob3RlbC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9vdmVybG9vay1ob3RlbC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tLTEuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS0xMC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tLTExLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20tMTIuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS0xMy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tLTE0LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20tMTUuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS0xNi5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tLTE3LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20tMTguanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS0xOS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tLTIuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS0yMC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tLTIxLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20tMjIuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS0yMy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tLTI0LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20tMjUuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS0zLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20tNC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tLTUuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS02LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20tNy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tLTguanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS05LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3NlYXJjaF9pY29uLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3N1bnNldC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7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dUIsTUFBTSxLQUFLLFVBQVUsaUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sVUFBVSx1QkFBdUIsTUFBTSxLQUFLLGlCQUFpQixNQUFNLGlCQUFpQixNQUFNLHVCQUF1QixPQUFPLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsaUJBQWlCLE9BQU8sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGdCQUFnQixLQUFLLGlCQUFpQixNQUFNLFlBQVksV0FBVyxpQkFBaUIsTUFBTSxZQUFZLFdBQVcsZUFBZSxLQUFLLGVBQWUsTUFBTSxlQUFlLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLGVBQWUsS0FBSyxrQkFBa0IsT0FBTyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxZQUFZLGlCQUFpQixNQUFNLGlCQUFpQixLQUFLLGdCQUFnQixNQUFNLFlBQVksV0FBVyxZQUFZLGlCQUFpQixLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxVQUFVLGtCQUFrQixPQUFPLG1CQUFtQixPQUFPLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLGtCQUFrQixPQUFPLFVBQVUsVUFBVSxpQkFBaUIsTUFBTSxVQUFVLGlCQUFpQixNQUFNLFVBQVUsVUFBVSxpQkFBaUIsTUFBTSxVQUFVLFVBQVUsaUJBQWlCLE1BQU0sV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFdBQVcsVUFBVSxpQkFBaUIsT0FBTyxpQkFBaUIsT0FBTyxVQUFVLFVBQVUsa0JBQWtCLE9BQU8sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGtCQUFrQixNQUFNLFVBQVUsa0JBQWtCLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLGdCQUFnQixLQUFLLGtCQUFrQixNQUFNLFVBQVUs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Ozs7Ozs7OztBQ0FsQztBQUFlLG1GQUFvQixFOzs7Ozs7Ozs7Ozs7QUNBbkM7QUFBZSxtRkFBb0IsRTs7Ozs7Ozs7Ozs7O0FDQW5DO0FBQWUsbUZBQW9CLEU7Ozs7Ozs7Ozs7OztBQ0FuQztBQUFlLG1GQUFvQixFOzs7Ozs7Ozs7Ozs7QUNBbkM7QUFBZSxtRkFBb0IsRTs7Ozs7Ozs7Ozs7O0FDQW5DO0FBQWUsbUZBQW9CLEU7Ozs7Ozs7Ozs7OztBQ0FuQztBQUFlLG1GQUFvQixFOzs7Ozs7Ozs7Ozs7QUNBbkM7QUFBZSxtRkFBb0IsRTs7Ozs7Ozs7Ozs7O0FDQW5DO0FBQWUsbUZBQW9CLEU7Ozs7Ozs7Ozs7OztBQ0FuQztBQUFlLG1GQUFvQixFOzs7Ozs7Ozs7Ozs7QUNBbkM7QUFBZSxrRkFBbUIsRTs7Ozs7Ozs7Ozs7O0FDQWxDO0FBQWUsbUZBQW9CLEU7Ozs7Ozs7Ozs7OztBQ0FuQztBQUFlLG1GQUFvQixFOzs7Ozs7Ozs7Ozs7QUNBbkM7QUFBZSxtRkFBb0IsRTs7Ozs7Ozs7Ozs7O0FDQW5DO0FBQWUsbUZBQW9CLEU7Ozs7Ozs7Ozs7OztBQ0FuQztBQUFlLG1GQUFvQixFOzs7Ozs7Ozs7Ozs7QUNBbkM7QUFBZSxtRkFBb0IsRTs7Ozs7Ozs7Ozs7O0FDQW5DO0FBQWUsa0ZBQW1CLEU7Ozs7Ozs7Ozs7OztBQ0FsQztBQUFlLGtGQUFtQixFOzs7Ozs7Ozs7Ozs7QUNBbEM7QUFBZSxrRkFBbUIsRTs7Ozs7Ozs7Ozs7O0FDQWxDO0FBQWUsa0ZBQW1CLEU7Ozs7Ozs7Ozs7OztBQ0FsQztBQUFlLGtGQUFtQixFOzs7Ozs7Ozs7Ozs7QUNBbEM7QUFBZSxrRkFBbUIsRTs7Ozs7Ozs7Ozs7O0FDQWxDO0FBQWUsa0ZBQW1CLEU7Ozs7Ozs7Ozs7OztBQ0FsQztBQUFlLHVGQUF3QixFOzs7Ozs7Ozs7Ozs7QUNBdkM7QUFBZSxrRkFBbUIsRTs7Ozs7Ozs7Ozs7O0FDQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL2ltYWdlcy9zZWFyY2hfaWNvbi5zdmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi4vaW1hZ2VzL2V4aXQuc3ZnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gZnJvbSBcIi4uL2ltYWdlcy9vdmVybG9vay1ob3RlbC5qcGdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0OyB9XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlOyB9XFxuICBodG1sOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG5ib2R5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiA1cmVtO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoOyB9XFxuXFxuLmJ0biB7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiAwOyB9XFxuICAuYnRuOmRpc2FibGVkIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLmJ0bjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4zcmVtKTtcXG4gICAgYm94LXNoYWRvdzogMCAxcmVtIDJyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLmJ0bjpob3ZlcjphZnRlciB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMS40KSBzY2FsZVkoMS42KTtcXG4gICAgICBvcGFjaXR5OiAwOyB9XFxuICAuYnRuOmFjdGl2ZSwgLmJ0bjpmb2N1cyB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4xcmVtKTtcXG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7IH1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIFRDJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMS43O1xcbiAgY29sb3I6ICMwMDA7IH1cXG5cXG4uaGVhZGVyX190aXRsZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1mYW1pbHk6ICdTaHJpa2hhbmQnLCBjdXJzaXZlOyB9XFxuICAuaGVhZGVyX190aXRsZS0tbWFpbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDhyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAzLjVyZW07IH1cXG4gIC5oZWFkZXJfX3RpdGxlLS1zdWIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXJlbTsgfVxcblxcbi5zZWFyY2gtYmFyX19pbnB1dCB7XFxuICBsaW5lLWhlaWdodDogMS43O1xcbiAgZm9udC1zaXplOiAxLjFyZW07IH1cXG4gIC5zZWFyY2gtYmFyX19pbnB1dF9faGVhZGVyLS1zdWIge1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBjb2xvcjogIzcwNzA3MDsgfVxcblxcbi5kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtOyB9XFxuXFxuLmhvdGVsLXBvaW50c19faGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTsgfVxcblxcbi5ob3RlbC1wb2ludHNfX3BvaW50cy1lYXJuZWQge1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDI7IH1cXG5cXG4uaG90ZWwtcG9pbnRzX190YWctbGluZSB7XFxuICBmb250LWZhbWlseTogJ1NocmlraGFuZCcsIGN1cnNpdmU7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBsZXR0ZXItc3BhY2luZzogLjJyZW07IH1cXG5cXG4uYm9va2VkLXJvb21fX2NhcmQge1xcbiAgZm9udC1zaXplOiAxLjRyZW07IH1cXG5cXG4uYm9va2VkLXJvb21fX2hlYWRlciB7XFxuICBmb250LWZhbWlseTogJ1NocmlraGFuZCcsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBsZXR0ZXItc3BhY2luZzogLjVyZW07IH1cXG5cXG4uYXZhaWxhYmxlLXJvb21zX19oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6ICdTaHJpa2hhbmQnLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC41cmVtOyB9XFxuXFxuLmF2YWlsYWJsZS1yb29tc19fY2FyZCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXG5cXG4ubG9naW4tcGFnZV9faGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiAnU2hyaWtoYW5kJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAuNXJlbTsgfVxcblxcbi5sb2dpbi1wYWdlX19mb3JtX19idG4ge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LXdlaWdodDogNzAwOyB9XFxuXFxuLnVzZXItbXNnX19oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxLjhyZW07IH1cXG5cXG5Aa2V5ZnJhbWVzIG1vdmVJbkxlZnQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcmVtKTsgfVxcbiAgODAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFyZW0pOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgbW92ZUluUmlnaHQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTByZW0pOyB9XFxuICA4MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFyZW0pOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgZHJvcERvd24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTsgfVxcbiAgODAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMS4xKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpOyB9IH1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXg6IDE7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjYTdhN2E3O1xcbiAgdG9wOiAxcmVtO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XFxuICBoZWlnaHQ6IDdyZW07XFxuICB3aWR0aDogODAlO1xcbiAgbWF4LXdpZHRoOiA5NXJlbTtcXG4gIG1pbi13aWR0aDogNzVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XFxuICB6LWluZGV4OiAxMDtcXG4gIGJveC1zaGFkb3c6IDAgMXJlbSAycmVtIHJnYmEoMCwgMCwgMCwgMC4yKTsgfVxcbiAgLnNlYXJjaC1iYXJfX2lucHV0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7IH1cXG4gICAgLnNlYXJjaC1iYXJfX2lucHV0OmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NCwgMTk0LCAxOTQsIDAuNTA3KTsgfVxcbiAgICAuc2VhcmNoLWJhcl9faW5wdXQ6Zm9jdXMge1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMzYpO1xcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cXG4gICAgLnNlYXJjaC1iYXJfX2lucHV0X19oZWFkZXIge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgdG9wOiAyMCU7IH1cXG4gICAgICAuc2VhcmNoLWJhcl9faW5wdXRfX2hlYWRlci0tbWFpbiB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgICAgIC5zZWFyY2gtYmFyX19pbnB1dF9faGVhZGVyLS1zdWIge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IH1cXG4gIC5zZWFyY2gtYmFyX19idG4ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiAxJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMzk1QTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBoZWlnaHQ6IDQuNXJlbTtcXG4gICAgd2lkdGg6IDQuNXJlbTsgfVxcbiAgICAuc2VhcmNoLWJhcl9fYnRuOmhvdmVyLCAuc2VhcmNoLWJhcl9fYnRuOmZvY3VzIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWMwMDI3OyB9XFxuXFxuLmRyb3AtZG93bi1tZW51IHtcXG4gIHBhZGRpbmc6IDNyZW07XFxuICBtYXJnaW4tbGVmdDogLTNyZW07XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA5cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDI1cmVtO1xcbiAgd2lkdGg6IDI0JTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBib3gtc2hhZG93OiAwIDFyZW0gMnJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBhbmltYXRpb246IGRyb3BEb3duIDQwMG1zIGVhc2Utb3V0O1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wOyB9XFxuXFxubGFiZWwge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiA1MCU7IH1cXG5cXG4uZGF0ZSB7XFxuICB3aWR0aDogNzByZW07IH1cXG5cXG4uZGF0ZS1sYWJlbCB7XFxuICBmb250LXNpemU6IDA7IH1cXG5cXG4uYm9va2VkLXJvb21fX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIHdpZHRoOiA2OSU7IH1cXG5cXG4uYm9va2VkLXJvb21fX2ltZ19fY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuNTY4KSwgcmdiYSgxNjgsIDE2OCwgMTY4LCAwLjI2NykpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAzMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogLjZyZW07IH1cXG5cXG4uYm9va2VkLXJvb21fX2ltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA3MHJlbTsgfVxcblxcbi5ib29rZWQtcm9vbV9faGVhZGVyIHtcXG4gIG1hcmdpbjogM3JlbSAwIDNyZW0gMTglOyB9XFxuXFxuLmJvb2tlZC1yb29tX19jYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcmVtIHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgM3JlbSkgYXV0bztcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAyLjJyZW07XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzcwNzA3MDsgfVxcbiAgLmJvb2tlZC1yb29tX19jYXJkX19pbWcge1xcbiAgICBncmlkLXJvdzogMS82O1xcbiAgICB3aWR0aDogMzByZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07IH1cXG4gIC5ib29rZWQtcm9vbV9fY2FyZF9fcm9vbS1udW1iZXIsIC5ib29rZWQtcm9vbV9fY2FyZF9fZGF0ZS1ib29rZWQsIC5ib29rZWQtcm9vbV9fY2FyZF9fdHlwZSB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtOyB9XFxuICAuYm9va2VkLXJvb21fX2NhcmRfX251bWJlci1vZi1iZWRzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDM7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0OyB9XFxuICAuYm9va2VkLXJvb21fX2NhcmRfX2JlZC1zaXplIHtcXG4gICAgZ3JpZC1jb2x1bW46IDM7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0OyB9XFxuICAuYm9va2VkLXJvb21fX2NhcmRfX2J0biB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYzOTVBO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNnJlbTtcXG4gICAgd2lkdGg6IDE1cmVtO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGdyaWQtY29sdW1uOiAzO1xcbiAgICBncmlkLXJvdzogNTtcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDsgfVxcbiAgICAuYm9va2VkLXJvb21fX2NhcmRfX2J0bjpob3ZlciwgLmJvb2tlZC1yb29tX19jYXJkX19idG46Zm9jdXMge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYzAwMjc7IH1cXG4gIC5ib29rZWQtcm9vbV9fY2FyZF9fY29zdCB7XFxuICAgIGdyaWQtcm93OiA1O1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07IH1cXG5cXG4ubG9naW4tcGFnZV9faW1nIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogODV2aDtcXG4gIHdpZHRoOiAzNiU7XFxuICBtYXgtd2lkdGg6IDQ4cmVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7IH1cXG4gIC5sb2dpbi1wYWdlX19pbWdfX2hlcm8taW1nIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiA3NXJlbTsgfVxcblxcbi5sb2dpbi1wYWdlX19mb3JtLWNvbnRhaW5lciB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXg6IDE7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogODV2aDsgfVxcblxcbi5sb2dpbi1wYWdlX19mb3JtLWNvbnRhaW5lciBwIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmxvZ2luLWZvcm1fX2lucHV0LCAubG9naW4tZXJyb3ItbXNnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiA0LjVyZW07XFxuICB3aWR0aDogMjVyZW07XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC42cmVtOyB9XFxuXFxuLmxvZ2luLXBhZ2VfX2Zvcm1fX2J0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZWE2O1xcbiAgY29sb3I6ICMyOTI5Mjk7IH1cXG4gIC5sb2dpbi1wYWdlX19mb3JtX19idG46aG92ZXIsIC5sb2dpbi1wYWdlX19mb3JtX19idG46Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU3OTczOyB9XFxuXFxuLmxvZ2luLWVycm9yLW1zZyB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAzMzsgfVxcblxcbi51c2VyLW1zZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXg6IDE7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDEwcmVtO1xcbiAgaGVpZ2h0OiAyNXJlbTtcXG4gIHdpZHRoOiA0MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XFxuICB6LWluZGV4OiAyMDtcXG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwOyB9XFxuXFxuLmV4aXQtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMnJlbTtcXG4gIHJpZ2h0OiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMzk1QTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGhlaWdodDogNC41cmVtO1xcbiAgd2lkdGg6IDQuNXJlbTsgfVxcbiAgLmV4aXQtYnRuOmhvdmVyLCAuZXhpdC1idG46Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWMwMDI3OyB9XFxuXFxuLmF2YWlsYWJsZS1yb29tcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjhyZW0sIDFmcikpO1xcbiAgZ3JpZC1nYXA6IDFyZW07XFxuICBwYWRkaW5nLXRvcDogMTByZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjsgfVxcbiAgLmF2YWlsYWJsZS1yb29tc19faW5mby1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBoZWlnaHQ6IDE1cmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgfVxcbiAgLmF2YWlsYWJsZS1yb29tc19faGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07IH1cXG4gIC5hdmFpbGFibGUtcm9vbXNfX2NhcmQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAyOHJlbTtcXG4gICAgaGVpZ2h0OiA0MHJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjZyZW07IH1cXG4gICAgLmF2YWlsYWJsZS1yb29tc19fY2FyZF9faW1nIHtcXG4gICAgICBoZWlnaHQ6IDIwcmVtOyB9XFxuICAgIC5hdmFpbGFibGUtcm9vbXNfX2NhcmRfX2Jvb2stYnRuIHtcXG4gICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYzOTVBO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IC42cmVtO1xcbiAgICAgIHdpZHRoOiAxNXJlbTtcXG4gICAgICBoZWlnaHQ6IDRyZW07XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxcbiAgICAgIC5hdmFpbGFibGUtcm9vbXNfX2NhcmRfX2Jvb2stYnRuOmhvdmVyLCAuYXZhaWxhYmxlLXJvb21zX19jYXJkX19ib29rLWJ0bjpmb2N1cyB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWMwMDI3OyB9XFxuXFxuLmluZm8tbGVmdCxcXG4uaW5mby1yaWdodCB7XFxuICB3aWR0aDogNTAlOyB9XFxuXFxuLmluZm8tcmlnaHQge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG5cXG4uaW5mby1jZW50ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uaG90ZWwtaW1nLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMThyZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTsgfVxcblxcbi5oZWFkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWluLWhlaWdodDogODByZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAwLjU2OCksIHJnYmEoMTY4LCAxNjgsIDE2OCwgMC4yNjcpKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgODAlLCAwIDEwMCUpOyB9XFxuICAuaGVhZGVyX190aXRsZSB7XFxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgIC5oZWFkZXJfX3RpdGxlLS1tYWluIHtcXG4gICAgICBhbmltYXRpb246IG1vdmVJblJpZ2h0IDFzIGVhc2Utb3V0OyB9XFxuICAgIC5oZWFkZXJfX3RpdGxlLS1zdWIge1xcbiAgICAgIGFuaW1hdGlvbjogbW92ZUluTGVmdCAxcyBlYXNlLW91dDsgfVxcblxcbi5ob3RlbC1wb2ludHMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IDgwcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIG1hcmdpbi10b3A6IDhyZW07IH1cXG4gIC5ob3RlbC1wb2ludHNfX25hbWUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XFxuICAuaG90ZWwtcG9pbnRzX19oZWFkZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07IH1cXG4gIC5ob3RlbC1wb2ludHNfX2ltZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMCU7XFxuICAgIGxlZnQ6IDE1JTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAwLjU2OCksIHJnYmEoMTY4LCAxNjgsIDE2OCwgMC4yNjcpKTtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4OyB9XFxuICAuaG90ZWwtcG9pbnRzX190YWctbGluZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAxNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgei1pbmRleDogNTsgfVxcblxcbi5wb2ludHMtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMzByZW07XFxuICBoZWlnaHQ6IDMwcmVtO1xcbiAgcmlnaHQ6IDglO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwQUY4QTtcXG4gIHBhZGRpbmc6IDNyZW07XFxuICB6LWluZGV4OiA1O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlIDIwJSA1MCUgNDAlOyB9XFxuXFxuW2FyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIl0ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgLmJvb2tlZC1yb29tX19jYXJkX19pbWcge1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgLmhvdGVsLXBvaW50cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50OyB9XFxuICAuaG90ZWwtcG9pbnRzX19pbWcge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAuaG90ZWwtcG9pbnRzX190YWctbGluZSB7XFxuICAgIHBvc2l0aW9uOiB1bnNldDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5wb2ludHMtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHVuc2V0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtOyB9XFxuICAuYm9va2VkLXJvb21fX2NhcmQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSByZXBlYXQoMiwgMWZyKTsgfVxcbiAgLnNlYXJjaC1iYXIge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtaW4td2lkdGg6IDcwcmVtOyB9XFxuICAubG9naW4tcGFnZV9faW1nIHtcXG4gICAgd2lkdGg6IDQ1JTsgfVxcbiAgLmxvZ2luLXBhZ2VfX2Zvcm0tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDU1JTsgfVxcbiAgLmVycm9yIHtcXG4gICAgd2lkdGg6IDYwJTsgfVxcbiAgLmhlYWRlciB7XFxuICAgIGNsaXAtcGF0aDogdW5zZXQ7IH1cXG4gIC5oZWFkZXJfX3RpdGxlLS1tYWluIHtcXG4gICAgZm9udC1zaXplOiA2dnc7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycmVtOyB9XFxuICAuaGVhZGVyX190aXRsZS0tc3ViIHtcXG4gICAgZm9udC1zaXplOiAzLjV2dzsgfVxcbiAgLmJvb2tlZC1yb29tX19pbWdfX2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5ib29rZWQtcm9vbV9fY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICBib2R5IHtcXG4gICAgcGFkZGluZzogMDsgfVxcbiAgLmRyb3AtZG93bi1tZW51IHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcXG4gICAgbGVmdDogMTglOyB9XFxuICAuYm9va2VkLXJvb21fX2NhcmQge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAycmVtKSBhdXRvO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTsgfVxcbiAgLmJvb2tlZC1yb29tX19oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAzcmVtIGF1dG87IH1cXG4gIC5ib29rZWQtcm9vbV9fY2FyZF9fYnRuIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHdpZHRoOiA4cmVtOyB9XFxuICAuc2VhcmNoLWJhciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4td2lkdGg6IDcwcmVtO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xcbiAgICBtaW4td2lkdGg6IHVuc2V0OyB9XFxuICAuc2VhcmNoLWJhcl9faW5wdXRfX2hlYWRlci0tc3ViIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLnNlYXJjaC1iYXJfX2lucHV0IHtcXG4gICAgcGFkZGluZzogMXJlbTsgfVxcbiAgLmxvZ2luLXBhZ2VfX2ltZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5sb2dpbi1wYWdlX19mb3JtLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAuc2VhcmNoLWJhcl9fYnRuIHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogM3JlbTsgfVxcbiAgLnVzZXItbXNnIHtcXG4gICAgd2lkdGg6IDkwJTsgfVxcbiAgLmV4aXQtYnRuIHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogM3JlbTsgfVxcbiAgLmRhdGUge1xcbiAgICB3aWR0aDogNjByZW07XFxuICAgIHBhZGRpbmc6IDA7IH1cXG4gIC5hdmFpbGFibGUtcm9vbXMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLWdhcDogdW5zZXQ7IH1cXG4gICAgLmF2YWlsYWJsZS1yb29tc19fY2FyZCB7XFxuICAgICAgd2lkdGg6IDE5cmVtO1xcbiAgICAgIHBhZGRpbmc6IDNweDtcXG4gICAgICBoZWlnaHQ6IDMwcmVtO1xcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtOyB9XFxuICAgIC5hdmFpbGFibGUtcm9vbXNfX2ltZyB7XFxuICAgICAgaGVpZ2h0OiAxNXJlbTsgfVxcbiAgICAuYXZhaWxhYmxlLXJvb21zX19oZWFkZXIge1xcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTsgfVxcbiAgLmhvdGVsLWltZy1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEzcmVtOyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL190eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fYW5pbWF0aW9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19zZWFyY2hfYmFyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2Jvb2tpbmdfY2FyZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19sb2dpbl9wYWdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3VzZXItbWVzc2FnZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19hdmFpbGFibGVfcm9vbXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fbWFpbl9wYWdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19tZWRpYS1xdWVyaWVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZ0JBQWdCLEVBQUE7RUFEbEI7SUFHSSxhQUFhLEVBQUE7O0FBSWpCO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUE7O0FBSW5CO0VBQ0UsU0FBUztFQUNULFVBQVUsRUFBQTtFQUZaO0lBS0ksYUFBYSxFQUFBO0VBTGpCO0lBU0ksOEJBQTZCO0lBQzdCLDBDQUF5QztJQUN6QyxlQUFlLEVBQUE7SUFYbkI7TUFjTSxrQ0FBa0M7TUFDbEMsVUFBUyxFQUFBO0VBZmY7SUFxQkksOEJBQTZCO0lBQzdCLDRDQUEwQyxFQUFBOztBQUk5QztFQUNJLGFBQWEsRUFBQTs7QUFuQ2pCO0VDZEUsdUNBQXVDO0VBQ3ZDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0NKaUIsRUFBQTs7QURPbkI7RUFDRSxZQ1BpQztFRFFqQyx5QkFBeUI7RUFDekIsaUNBQWlDLEVBQUE7RUFFakM7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLHNCQUFzQixFQUFBO0VBR3hCO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixvQkFBb0IsRUFBQTs7QUFNeEI7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7RUFFakI7SUFDRSxnQkFBZ0I7SUFDaEIsY0MvQjZCLEVBQUE7O0FEbUNqQztFQUNJLGlCQUFpQixFQUFBOztBQU9uQjtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUIsRUFBQTs7QUFJekI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUVqQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixxQkFBcUIsRUFBQTs7QUZtQ3ZCO0VFckNFLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YscUJBQXFCLEVBQUE7O0FGdUN2QjtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFLbEI7RUVoREUsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixxQkFBcUIsRUFBQTs7QUZrRHZCO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUtsQjtFQUNFLGlCQUFpQixFQUFBOztBRzdGbkI7RUFDRTtJQUNFLFVBQVU7SUFDViw2QkFBNkIsRUFBQTtFQUcvQjtJQUNFLDJCQUEyQixFQUFBO0VBRzdCO0lBQ0UsVUFBVTtJQUNWLHVCQUF1QixFQUFBLEVBQUE7O0FBSTNCO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsNEJBQTRCLEVBQUE7RUFHOUI7SUFDRSw0QkFBNEIsRUFBQTtFQUc5QjtJQUNFLFVBQVU7SUFDVix1QkFBdUIsRUFBQSxFQUFBOztBQUkzQjtFQUNJO0lBQ0ksb0JBQW9CLEVBQUE7RUFFeEI7SUFDSSxzQkFBc0IsRUFBQTtFQUUxQjtJQUNJLG9CQUFvQixFQUFBLEVBQUE7O0FDeEM1QjtFRkNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsT0FBTztFQUNQLG1CQUFtQjtFRUZuQixlQUFlO0VBQ2YsMkJBQXFDO0VBQ3JDLFNBQVM7RUFDVCxTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixVQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkhWaUM7RUdXakMsbUJBQW1CO0VBQ25CLFdBQVU7RUFDViwwQ0hUdUMsRUFBQTtFRHNCekM7SUlWSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLFlBQVksRUFBQTtJQU5iO01BU0csNENBQTRDLEVBQUE7SUFUL0M7TUFZRyw0Q0FBNEM7TUFDNUMsYUFBYTtNQUNiLHVCQUF1QixFQUFBO0lBR3pCO01BQ0Usa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixRQUFRLEVBQUE7TUFDUjtRQUNFLGNBQWMsRUFBQTtNSlBwQjtRSVdNLGNBQWMsRUFBQTtFQUtwQjtJQUNFLGVBQWM7SUFDZCxTQUFTO0lGbENULHlCRFpZO0lDcUJkLG1CQUFtQjtJQUNqQix5REFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixjQUFhO0lBQ2IsYUFBYSxFQUFBO0lBYmI7TUFFRSx5QkFBeUMsRUFBQTs7QUVxQy9DO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7RUFDZixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixVQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLDBDQUE0QztFQUM1QyxrQ0FBa0M7RUFDbEMscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0Usa0JBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUpwQ2I7RUl3Q0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWSxFQUFBOztBQ2pGZDtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFVBQVMsRUFBQTs7QUFHWDtFQUNFLHlGSkZ1RjtFSUd2RixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLFVBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBTGdEbkI7RUs1Q0UsdUJBQXNCLEVBQUE7O0FMd0N4QjtFS3JDRSxhQUFhO0VBQ2IsMkNBQTJDO0VBQzNDLHdDQUF3QztFQUN4QyxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQ0o3QitCLEVBQUE7RUkrQi9CO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUIsRUFBQTtFQUdyQjtJQUNFLGNBQWM7SUFDZCxtQkFBbUIsRUFBQTtFQVdyQjtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CLEVBQUE7RUFHckI7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLG1CQUFtQixFQUFBO0VBRXJCO0lIeEJBLFdBQVc7SUF4QlQseUJEWlk7SUNzQ2Qsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixZQUFZO0lHc0JWLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CLEVBQUE7SUhuRG5CO01BRUUseUJBQXlDLEVBQUE7RUdvRDdDO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUIsRUFBQTs7QUN6RXZCO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix5QkxKK0IsRUFBQTtFS00vQjtJQUNFLFlBQVk7SUFDWixpQkFBaUIsRUFBQTs7QUFJckI7RUFDRSxZQUFZO0VKZFosYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsbUJBQW1CO0VJYW5CLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHZDtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixxQkFBcUIsRUFBQTs7QU5xRHZCO0VFdEVJLHlCSXFCeUI7RUFDM0IsY0FBc0IsRUFBQTtFSnJCcEI7SUFFRSx5QkFBeUMsRUFBQTs7QUlzQi9DO0VBRUUsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IseUJBQXlCLEVBQUE7O0FDN0MzQjtFTENFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsT0FBTztFQUNQLG1CQUFtQjtFS0ZuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFVBQVU7RUFDVixhQUFhO0VBQ2IsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIseUJOVitCLEVBQUE7O0FNYWpDO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VMSFQseUJEWlk7RUNxQmQsbUJBQW1CO0VBQ2pCLHlEQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLGNBQWE7RUFDYixhQUFhLEVBQUE7RUFiYjtJQUVFLHlCQUF5QyxFQUFBOztBTWxCL0M7RUFDRSxhQUFhO0VBQ2IsNERBQTREO0VBQzVELGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVTtFQUNWLHFCQUFxQixFQUFBO0VBRXJCO0lBQ0UsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixlQUFlO0lBQ2YsYUFBYTtJQUNiLDZCQUE2QixFQUFBO0VSeURqQztJUXJERyxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUIsRUFBQTtFUnNEdEI7SVFsREkseUJQdEI2QjtJT3VCN0IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFZO0lBQ1osb0JBQW9CLEVBQUE7SUFFcEI7TUFDRSxhQUFhLEVBQUE7SUFHZjtNTkVGLFdBQVc7TUF4QlQseUJEWlk7TUNzQ2Qsb0JBQW9CO01BQ3BCLFlBQVk7TUFDWixZQUFZO01NSlIsa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixtQkFBbUIsRUFBQTtNTnpCckI7UUFFRSx5QkFBeUMsRUFBQTs7QU00Qi9DOztFQUVFLFVBQ0YsRUFBQTs7QUFFQTtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUNoRXJCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtJQUF3RTtFQUN4RSxzQkFBc0I7RUFDdEIsMkJBQTBCO0VBQzFCLGlEQUFpRCxFQUFBO0VURG5EO0lTSUksMkJBQTJCO0lQSDdCLGtCQUFrQjtJQUNsQixRT0dxQjtJUEZyQixTT0UwQjtJUEQxQixnQ0FBZ0M7SU9FOUIsa0JBQWlCLEVBQUE7SVREbkI7TVNJSSxrQ0FDRixFQUFBO0lUQ0Y7TVNFSSxpQ0FDRixFQUFBOztBQUlKO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTtFQUVoQjtJQUNHLG1CQUFtQixFQUFBO0VUV3RCO0lTUEUscUJBQXFCLEVBQUE7RUFHdkI7SVBqQ0Esa0JBQWtCO0lBQ2xCLFFPaUNxQjtJUGhDckIsU09nQzBCO0lQL0IxQixnQ0FBZ0M7SU9nQzlCLDBCQUF5QjtJQUN6Qix5RkFBeUY7SUFDekYsVUFBVTtJQUNWLGtCQUFrQixFQUFBO0VUUXBCO0lTSkUsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFVBQVUsRUFBQTs7QUFJZDtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsYUFBWTtFQUNaLFVBQVM7RUFDVCw4QkFDRixFQUFBOztBQzhZQTtFRDNZRSxhQUFhLEVBQUE7O0FFekVmO0VOaUNFO0lNL0JFLFdBQVcsRUFBQTtFRnVCZjtJRW5CSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQW1CLEVBQUE7RUYrQnJCO0lFM0JFLGFBQ0YsRUFBQTtFWHVDQTtJV3BDRSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGtCQUFrQixFQUFBO0VGc0N0QjtJRWxDSSxlQUFlO0lBQ2YsbUJBQW1CLEVBQUE7RVhxQ3ZCO0lXakNJLHlDQUF5QyxFQUFBO0VQN0I3QztJT2lDSSxVQUFTO0lBQ1QsZ0JBQWdCLEVBQUE7RUxsQ3BCO0lLc0NJLFVBQVMsRUFBQTtFTHhCYjtJSzRCSSxVQUFVLEVBQUE7RUFHWjtJQUNFLFVBQ0YsRUFBQTtFRi9DRjtJRWtESSxnQkFBZ0IsRUFBQTtFWHRDbEI7SVcwQ0UsY0FBYztJQUNkLG9CQUFvQixFQUFBO0VYckN0QjtJV3lDRSxnQkFBZ0IsRUFBQTtFTnBEcEI7SU13REksYUFBYSxFQUFBO0VOL0RqQjtJTW1FSSxXQUFXO0lBQ1gsbUJBQW1CLEVBQUEsRUFDcEI7O0FBS0g7RVozREE7SVk2REksVUFBVSxFQUFBO0VQckJkO0lPeUJJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsU0FBUyxFQUFBO0VYcEJiO0lXd0JJLHdDQUF3QztJQUN4QyxpQkFBaUIsRUFBQTtFWHJCckI7SVd5QkksY0FBYztJQUNkLGlCQUFpQixFQUFBO0VON0JuQjtJTWlDRSxpQkFBaUI7SUFDakIsV0FDRixFQUFBO0VQbEdGO0lPcUdJLFdBQVU7SUFDVixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLG9CQUFvQjtJQUNwQixnQkFBZ0IsRUFBQTtFWDFFbEI7SVc4RUUsYUFBYSxFQUFBO0VYbEZqQjtJV3NGSSxhQUFhLEVBQUE7RUxqSGpCO0lLcUhJLGFBQWEsRUFBQTtFTHZHakI7SUsyR0ksV0FBVyxFQUFBO0VQMUViO0lPOEVFLFlBQVk7SUFDWixXQUFXLEVBQUE7RUo5SGY7SUlrSUksVUFDRixFQUFBO0VKcEhGO0lJdUhJLFlBQVk7SUFDWixXQUFXLEVBQUE7RVhsR2Y7SVdzR0ksWUFBWTtJQUNaLFVBQVMsRUFBQTtFSDVJYjtJR2dKSSxxQ0FBcUM7SUFDckMsZUFBZSxFQUFBO0lYdkVuQjtNVzBFTSxZQUFZO01BQ1osWUFBWTtNQUNaLGFBQVk7TUFDWixpQkFBaUIsRUFBQTtJQUduQjtNQUNFLGFBQ0YsRUFBQTtJWHRGSjtNV3lGTSxlQUFlLEVBQUE7RUhuR3JCO0lHd0dJLGFBQWEsRUFBQSxFQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbmJvZHkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDVyZW07XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBcXG59XFxuXFxuLmJ0biB7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiAwO1xcblxcbiAgJjpkaXNhYmxlZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0uM3JlbSk7XFxuICAgIGJveC1zaGFkb3c6IDAgMXJlbSAycmVtIHJnYmEoMCwgMCwgMCwgLjIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICY6YWZ0ZXIge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuNCkgc2NhbGVZKDEuNik7XFxuICAgICAgb3BhY2l0eTowO1xcbiAgICB9XFxuICB9XFxuXFxuICAmOmFjdGl2ZSxcXG4gICY6Zm9jdXMge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLS4xcmVtKTtcXG4gICAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgLjIpO1xcbiAgfVxcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cIixcImJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgVEMnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XFxuICBjb2xvcjokdGV4dC1wcmltYXJ5O1xcbn1cXG5cXG4uaGVhZGVyX190aXRsZSB7XFxuICBjb2xvcjokdGV4dC1zZWNvbmRhcnk7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1mYW1pbHk6ICdTaHJpa2hhbmQnLCBjdXJzaXZlO1xcblxcbiAgJi0tbWFpbntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogOHJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDMuNXJlbTtcXG4gIH1cXG5cXG4gICYtLXN1YiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcmVtO1xcbiAgfVxcbn1cXG5cXG4vLyBTZWFyY2ggQmFyIFxcblxcbi5zZWFyY2gtYmFyX19pbnB1dCB7XFxuICBsaW5lLWhlaWdodDogMS43O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuXFxuICAmX19oZWFkZXItLXN1YntcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgY29sb3I6ICRzdWJ0bGUtdG9uZXM7XFxuICB9XFxufVxcblxcbi5kYXRlIHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbi8vIEN1c3RvbWVyIERhc2hCb2FyZFxcblxcbi5ob3RlbC1wb2ludHMge1xcbiAgXFxuICAmX19oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxuICAmX19wb2ludHMtZWFybmVkIHtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAyO1xcbiAgfVxcblxcbiAgJl9fdGFnLWxpbmUge1xcbiAgICBmb250LWZhbWlseTogJ1NocmlraGFuZCcsIGN1cnNpdmU7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLjJyZW07XFxuICB9XFxufVxcblxcbi5ib29rZWQtcm9vbV9fY2FyZCB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLmJvb2tlZC1yb29tX19oZWFkZXIge1xcbiAgQGluY2x1ZGUgaGVhZGVyRm9udDtcXG59XFxuXFxuLmF2YWlsYWJsZS1yb29tc19faGVhZGVyIHtcXG4gIEBpbmNsdWRlIGhlYWRlckZvbnQ7XFxufVxcblxcbi5hdmFpbGFibGUtcm9vbXNfX2NhcmQge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4vLyBMb2dpbiBwYWdlXFxuXFxuLmxvZ2luLXBhZ2VfX2hlYWRlciB7XFxuICBAaW5jbHVkZSBoZWFkZXJGb250O1xcbn1cXG5cXG4ubG9naW4tcGFnZV9fZm9ybV9fYnRuIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLy9lcnJvciBtZXNzYWdlXFxuXFxuLnVzZXItbXNnX19oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbi8vYXZhaWxhYmxlIHJvb21zIFxcblwiLFwiJHRleHQtcHJpbWFyeTogIzAwMDtcXG4kdGV4dC1zZWNvbmRhcnk6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4kc3VidGxlLXRvbmVzOiByZ2IoMTEyLCAxMTIsIDExMik7XFxuJGFjY2VudDogI0ZGMzk1QTtcXG5cXG4kbWFpbi1kcm9wLXNoYWRvdzogMCAxcmVtIDJyZW0gcmdiYShibGFjaywgLjIpO1xcbiRwcmltYXJ5LWdyYWRpZW50OmxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuNTY4KSwgcmdiYSgxNjgsIDE2OCwgMTY4LCAwLjI2NykpXFxuXCIsXCJAbWl4aW4gZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXg6IDE7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5AbWl4aW4gY2VudGVyICgkdG9wLCAkbGVmdCkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAkdG9wO1xcbiAgbGVmdDogJGxlZnQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuQG1peGluIGhvdmVyQ29sb3IgKCRiYXNlQ29sb3IpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2VDb2xvcjtcXG4gICAgJjpob3ZlcixcXG4gICAgJjpmb2N1cyB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRiYXNlQ29sb3IsIDE1JSlcXG4gICAgfVxcbn1cXG5cXG5AbWl4aW4gcm91bmRCdXR0b24gKCRpbWcpIHtcXG4gIEBpbmNsdWRlIGhvdmVyQ29sb3IoJGFjY2VudCk7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGltZyk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgaGVpZ2h0OjQuNXJlbTtcXG4gICAgd2lkdGg6IDQuNXJlbTtcXG59XFxuXFxuQG1peGluIGhlYWRlckZvbnQge1xcbiAgZm9udC1mYW1pbHk6ICdTaHJpa2hhbmQnLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC41cmVtO1xcbn1cXG5cXG5AbWl4aW4gcmVjdGFuZ2xlQnRuIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgQGluY2x1ZGUgaG92ZXJDb2xvcigkYWNjZW50KTtcXG4gIGJvcmRlci1yYWRpdXM6IC42cmVtO1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cIixcIkBrZXlmcmFtZXMgbW92ZUluTGVmdCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTByZW0pO1xcbiAgfVxcblxcbiAgODAle1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXJlbSk7XFxuICB9XFxuXFxuICAxMDAle1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBtb3ZlSW5SaWdodCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHJlbSk7XFxuICB9XFxuXFxuICA4MCV7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXJlbSk7XFxuICB9XFxuXFxuICAxMDAle1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBkcm9wRG93biB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApXFxuICAgIH1cXG4gICAgODAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEuMSlcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpXFxuICAgIH1cXG59XFxuXCIsXCIuc2VhcmNoLWJhciB7XFxuICBAaW5jbHVkZSBmbGV4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm9yZGVyOiAuNXB4IHNvbGlkIHJnYigxNjcsIDE2NywgMTY3KTtcXG4gIHRvcDogMXJlbTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xcbiAgaGVpZ2h0OiA3cmVtO1xcbiAgd2lkdGg6ODAlO1xcbiAgbWF4LXdpZHRoOiA5NXJlbTtcXG4gIG1pbi13aWR0aDogNzVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dC1zZWNvbmRhcnk7XFxuICBib3JkZXItcmFkaXVzOiA1cmVtO1xcbiAgei1pbmRleDoxMDtcXG4gIGJveC1zaGFkb3c6ICRtYWluLWRyb3Atc2hhZG93O1xcblxcbiAgJl9faW5wdXR7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBcXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTQsIDE5NCwgMTk0LCAwLjUwNyk7XFxuICAgIH1cXG4gICAgJjpmb2N1cyB7XFxuICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zNik7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcblxcbiAgICAmX19oZWFkZXIge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgdG9wOiAyMCU7XFxuICAgICAgJi0tbWFpbiB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICB9XFxuXFxuICAgICAgJi0tc3Vie1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAmX19idG57XFxuICAgIHBvc2l0aW9uOmZpeGVkO1xcbiAgICByaWdodDogMSU7XFxuICAgIEBpbmNsdWRlIHJvdW5kQnV0dG9uICgnLi4vaW1hZ2VzL3NlYXJjaF9pY29uLnN2ZycpXFxuICB9XFxuICAgXFxufVxcblxcbi5kcm9wLWRvd24tbWVudSB7XFxuICBwYWRkaW5nOiAzcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IC0zcmVtO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBsaW5lLWhlaWdodDogMztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogOXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAyNXJlbTtcXG4gIHdpZHRoOjI0JTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBib3gtc2hhZG93OiAwIDFyZW0gMnJlbSAocmdiYSgwLCAwLCAwLCAwLjIpKTtcXG4gIGFuaW1hdGlvbjogZHJvcERvd24gNDAwbXMgZWFzZS1vdXQ7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxufVxcblxcbmxhYmVse1xcbiAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IDUwJTtcXG59XFxuXFxuLmRhdGUge1xcbiAgd2lkdGg6IDcwcmVtO1xcbn1cXG5cXG4uZGF0ZS1sYWJlbCB7XFxuICBmb250LXNpemU6IDA7XFxufVwiLFwiLmJvb2tlZC1yb29tX19jb250YWluZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICB3aWR0aDo2OSU7XFxufVxcblxcbi5ib29rZWQtcm9vbV9faW1nX19jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogJHByaW1hcnktZ3JhZGllbnQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6MzAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IC42cmVtO1xcbn1cXG5cXG4uYm9va2VkLXJvb21fX2ltZ3tcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDcwcmVtO1xcbn1cXG5cXG4uYm9va2VkLXJvb21fX2hlYWRlciB7XFxuICBtYXJnaW46M3JlbSAwIDNyZW0gMTglO1xcbn1cXG4uYm9va2VkLXJvb21fX2NhcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzByZW0gcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAzcmVtKSBhdXRvO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDIuMnJlbTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkc3VidGxlLXRvbmVzO1xcblxcbiAgJl9faW1nIHtcXG4gICAgZ3JpZC1yb3c6IDEvNjtcXG4gICAgd2lkdGg6IDMwcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgfVxcblxcbiAgJl9fcm9vbS1udW1iZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xcbiAgfVxcblxcbiAgJl9fZGF0ZS1ib29rZWQge1xcbiAgICBAZXh0ZW5kIC5ib29rZWQtcm9vbV9fY2FyZF9fcm9vbS1udW1iZXI7XFxuICB9XFxuXFxuICAmX190eXBlIHtcXG4gICAgQGV4dGVuZCAuYm9va2VkLXJvb21fX2NhcmRfX3Jvb20tbnVtYmVyO1xcbiAgfVxcblxcbiAgJl9fbnVtYmVyLW9mLWJlZHMge1xcbiAgICBncmlkLWNvbHVtbjogMztcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICB9XFxuICBcXG4gICZfX2JlZC1zaXple1xcbiAgICBncmlkLWNvbHVtbjogMztcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICB9XFxuICAmX19idG4ge1xcbiAgICBAaW5jbHVkZSByZWN0YW5nbGVCdG47XFxuICAgIGdyaWQtY29sdW1uOiAzO1xcbiAgICBncmlkLXJvdzogNTtcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gIH1cXG5cXG4gICZfX2Nvc3R7XFxuICAgIGdyaWQtcm93OiA1O1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxuICB9XFxufVwiLFwiLmxvZ2luLXBhZ2VfX2ltZyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDg1dmg7XFxuICB3aWR0aDogMzYlO1xcbiAgbWF4LXdpZHRoOiA0OHJlbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXI6IDFweCBzb2xpZCAkc3VidGxlLXRvbmVzO1xcblxcbiAgJl9faGVyby1pbWcge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDc1cmVtO1xcbiAgfVxcbn1cXG5cXG4ubG9naW4tcGFnZV9fZm9ybS1jb250YWluZXIge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgQGluY2x1ZGUgZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDg1dmg7XFxufVxcblxcbi5sb2dpbi1wYWdlX19mb3JtLWNvbnRhaW5lciBwIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubG9naW4tZm9ybV9faW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDQuNXJlbTtcXG4gIHdpZHRoOiAyNXJlbTtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjZyZW07XFxufVxcblxcbi5sb2dpbi1wYWdlX19mb3JtX19idG4ge1xcbiAgQGluY2x1ZGUgaG92ZXJDb2xvcigjNGNhZWE2KTtcXG4gIGNvbG9yOiByZ2IoNDEsIDQxLCA0MSk7XFxufVxcblxcbi5sb2dpbi1lcnJvci1tc2cge1xcbiAgQGV4dGVuZCAubG9naW4tZm9ybV9faW5wdXQ7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAzMztcXG59XFxuXCIsXCIudXNlci1tc2cge1xcbiAgQGluY2x1ZGUgZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAxMHJlbTtcXG4gIGhlaWdodDogMjVyZW07XFxuICB3aWR0aDogNDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xcbiAgei1pbmRleDogMjA7XFxuICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgJHN1YnRsZS10b25lcztcXG59XFxuXFxuLmV4aXQtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMnJlbTtcXG4gIHJpZ2h0OiAycmVtO1xcbiAgQGluY2x1ZGUgcm91bmRCdXR0b24oJy4uL2ltYWdlcy9leGl0LnN2ZycpO1xcbn1cIixcIi5hdmFpbGFibGUtcm9vbXMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI4cmVtLCAxZnIpKTtcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcbiAgcGFkZGluZy10b3A6IDEwcmVtO1xcbiAgd2lkdGg6MTAwJTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXG4gICZfX2luZm8tY29udGFpbmVyIHtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB9XFxuXFxuICAmX19oZWFkZXIge1xcbiAgIHdpZHRoOiAxMDAlO1xcbiAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgfVxcblxcbiAgJl9fY2FyZCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzdWJ0bGUtdG9uZXM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDI4cmVtO1xcbiAgICBoZWlnaHQ6IDQwcmVtO1xcbiAgICBwYWRkaW5nOjFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC42cmVtO1xcblxcbiAgICAmX19pbWcge1xcbiAgICAgIGhlaWdodDogMjByZW07XFxuICAgIH0gXFxuXFxuICAgICZfX2Jvb2stYnRuIHtcXG4gICAgICBAaW5jbHVkZSByZWN0YW5nbGVCdG47XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uaW5mby1sZWZ0LFxcbi5pbmZvLXJpZ2h0IHtcXG4gIHdpZHRoOjUwJVxcbn1cXG5cXG4uaW5mby1yaWdodCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmluZm8tY2VudGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaG90ZWwtaW1nLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMThyZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuXCIsXCIuaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1pbi1oZWlnaHQ6IDgwcmVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogJHByaW1hcnktZ3JhZGllbnQsIHVybCgnLi4vaW1hZ2VzL292ZXJsb29rLWhvdGVsLmpwZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246Ym90dG9tO1xcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDgwJSwgMCAxMDAlKTtcXG5cXG4gICZfX3RpdGxlIHtcXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBAaW5jbHVkZSBjZW50ZXIoNTAlLCA1MCUpO1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG4gICAgXFxuICAgICYtLW1haW4ge1xcbiAgICAgIGFuaW1hdGlvbjogbW92ZUluUmlnaHQgMXMgZWFzZS1vdXQgIFxcbiAgICB9XFxuXFxuICAgICYtLXN1YiB7XFxuICAgICAgYW5pbWF0aW9uOiBtb3ZlSW5MZWZ0IDFzIGVhc2Utb3V0ICBcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uaG90ZWwtcG9pbnRzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiA4MHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBtYXJnaW4tdG9wOiA4cmVtO1xcblxcbiAgJl9fbmFtZSB7XFxuICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgfVxcblxcbiAgJl9faGVhZGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgfVxcblxcbiAgJl9faW1nIHtcXG4gICAgQGluY2x1ZGUgY2VudGVyKDEwJSwgMTUlKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMC41NjgpLCByZ2JhKDE2OCwgMTY4LCAxNjgsIDAuMjY3KSk7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIH1cXG5cXG4gICZfX3RhZy1saW5lIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDE1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB6LWluZGV4OiA1O1xcbiAgfVxcbn1cXG5cXG4ucG9pbnRzLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDMwcmVtO1xcbiAgaGVpZ2h0OiAzMHJlbTtcXG4gIHJpZ2h0OiA4JTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MEFGOEE7XFxuICBwYWRkaW5nOjNyZW07XFxuICB6LWluZGV4OjU7XFxuICBib3JkZXItcmFkaXVzOiA1MCUgMjAlIDUwJSA0MCVcXG59XFxuXFxuW2FyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XCIsXCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xcbkBpbXBvcnQgJ3Jlc2V0JztcXG5AaW1wb3J0ICdtaXhpbnMnO1xcbkBpbXBvcnQgJ3R5cG9ncmFwaHknO1xcbkBpbXBvcnQgJ2FuaW1hdGlvbnMnO1xcbkBpbXBvcnQgJ3NlYXJjaF9iYXInO1xcbkBpbXBvcnQgJ2Jvb2tpbmdfY2FyZCc7XFxuQGltcG9ydCAnbG9naW5fcGFnZSc7XFxuQGltcG9ydCAndXNlci1tZXNzYWdlJztcXG5AaW1wb3J0ICdhdmFpbGFibGVfcm9vbXMnO1xcbkBpbXBvcnQgJ21haW5fcGFnZSc7XFxuQGltcG9ydCAnbWVkaWEtcXVlcmllcyc7XCIsXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5ib29rZWQtcm9vbV9fY2FyZF9faW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuaG90ZWwtcG9pbnRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB9XFxuXFxuICAuaG90ZWwtcG9pbnRzX19pbWcge1xcbiAgICBkaXNwbGF5OiBub25lXFxuICB9XFxuXFxuICAuaG90ZWwtcG9pbnRzX190YWctbGluZSB7XFxuICAgIHBvc2l0aW9uOiB1bnNldDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAucG9pbnRzLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiB1bnNldDtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gIH1cXG5cXG4gIC5ib29rZWQtcm9vbV9fY2FyZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIHJlcGVhdCgyLCAxZnIpO1xcbiAgfVxcblxcbiAgLnNlYXJjaC1iYXIge1xcbiAgICB3aWR0aDo5MCU7XFxuICAgIG1pbi13aWR0aDogNzByZW07XFxuICB9XFxuXFxuICAubG9naW4tcGFnZV9faW1nIHtcXG4gICAgd2lkdGg6NDUlO1xcbiAgfVxcblxcbiAgLmxvZ2luLXBhZ2VfX2Zvcm0tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDU1JTtcXG4gIH1cXG5cXG4gIC5lcnJvciB7XFxuICAgIHdpZHRoOiA2MCVcXG4gIH1cXG5cXG4gIC5oZWFkZXIge1xcbiAgICBjbGlwLXBhdGg6IHVuc2V0O1xcbiAgfVxcblxcbiAgLmhlYWRlcl9fdGl0bGUtLW1haW4ge1xcbiAgICBmb250LXNpemU6IDZ2dztcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJyZW07XFxuICB9XFxuXFxuICAuaGVhZGVyX190aXRsZS0tc3ViIHtcXG4gICAgZm9udC1zaXplOiAzLjV2dztcXG4gIH1cXG5cXG4gIC5ib29rZWQtcm9vbV9faW1nX19jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmJvb2tlZC1yb29tX19jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIH1cXG59XFxuXFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbiAgLmRyb3AtZG93bi1tZW51IHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcXG4gICAgbGVmdDogMTglO1xcbiAgfVxcblxcbiAgLmJvb2tlZC1yb29tX19jYXJkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMnJlbSkgYXV0bztcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICB9XFxuXFxuICAuYm9va2VkLXJvb21fX2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDNyZW0gYXV0bztcXG4gIH1cXG5cXG4gIC5ib29rZWQtcm9vbV9fY2FyZF9fYnRuIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHdpZHRoOiA4cmVtXFxuICB9XFxuXFxuICAuc2VhcmNoLWJhciB7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIG1pbi13aWR0aDogNzByZW07XFxuICAgIHRvcDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogdW5zZXQ7XFxuICAgIG1pbi13aWR0aDogdW5zZXQ7XFxuICB9XFxuXFxuICAuc2VhcmNoLWJhcl9faW5wdXRfX2hlYWRlci0tc3ViIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5zZWFyY2gtYmFyX19pbnB1dCB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxuXFxuICAubG9naW4tcGFnZV9faW1nIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5sb2dpbi1wYWdlX19mb3JtLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLnNlYXJjaC1iYXJfX2J0biB7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDNyZW07XFxuICB9XFxuXFxuICAudXNlci1tc2cge1xcbiAgICB3aWR0aDogOTAlXFxuICB9XFxuXFxuICAuZXhpdC1idG4ge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgfVxcblxcbiAgLmRhdGUge1xcbiAgICB3aWR0aDogNjByZW07XFxuICAgIHBhZGRpbmc6MDtcXG4gIH1cXG5cXG4gIC5hdmFpbGFibGUtcm9vbXMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLWdhcDogdW5zZXQ7XFxuXFxuICAgICZfX2NhcmQge1xcbiAgICAgIHdpZHRoOiAxOXJlbTtcXG4gICAgICBwYWRkaW5nOiAzcHg7XFxuICAgICAgaGVpZ2h0OjMwcmVtO1xcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICB9XFxuXFxuICAgICZfX2ltZyB7XFxuICAgICAgaGVpZ2h0OiAxNXJlbVxcbiAgICB9XFxuXFxuICAgICZfX2hlYWRlciB7XFxuICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICAuaG90ZWwtaW1nLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTNyZW07XFxuICB9XFxuXFxuICBcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBIdW1hbiBmcm9tICcuL0h1bWFuJ1xuXG5jbGFzcyBDb3N0dW1lciBleHRlbmRzIEh1bWFuIHtcbiAgY29uc3RydWN0b3IoY3VzdG9tZXIpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5pZCA9IGN1c3RvbWVyLmlkO1xuICAgIHRoaXMubmFtZSA9IGN1c3RvbWVyLm5hbWU7XG4gIH0gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvc3R1bWVyOyIsImNsYXNzIEhvdGVsIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcm9vbXMsIGJvb2tpbmdzLCBjdXN0b21lcnMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucm9vbXMgPSByb29tcztcbiAgICB0aGlzLmJvb2tpbmdzID0gYm9va2luZ3M7XG4gICAgdGhpcy5jdXN0b21lcnMgPSBjdXN0b21lcnM7XG4gIH1cbiAgY2hlY2tBdmFpbGFibGVSb29tcyhjaGVja0luKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHRvZGF5LnNldEhvdXJzKDAsMCwwLDApO1xuICAgIGlmICghY2hlY2tJbiB8fCBuZXcgRGF0ZShjaGVja0luKSA8IHRvZGF5KSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgY29uc3QgdW5hdmFpbGFibGUgPSB0aGlzLmJvb2tpbmdzLmZpbHRlcihyb29tID0+IHJvb20uZGF0ZSA9PT0gY2hlY2tJbilcbiAgICAgIC5tYXAocm9vbSA9PiByb29tLnJvb21OdW1iZXIpO1xuICAgIHJldHVybiB0aGlzLnJvb21zLmZpbHRlcihyb29tID0+ICF1bmF2YWlsYWJsZS5pbmNsdWRlcyhyb29tLm51bWJlcikpO1xuICB9XG5cbiAgZmlsdGVyUm9vbXNCeVNlYXJjaENyaXRlcmlhKGF2YWlsYWJsZVJvb21zLCBzZWFyY2hJbnB1dCwgdHlwZSkge1xuICAgIGlmIChzZWFyY2hJbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBhdmFpbGFibGVSb29tcztcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0cyA9IHNlYXJjaElucHV0LnJlZHVjZSgoZm91bmRSb29tcywga2V5d29yZCkgPT4ge1xuICAgICAgYXZhaWxhYmxlUm9vbXMuZm9yRWFjaChyb29tID0+IHtcbiAgICAgICAgaWYgKHJvb21bdHlwZV0udG9TdHJpbmcoKSA9PT0ga2V5d29yZCAmJiAhZm91bmRSb29tcy5pbmNsdWRlcyhyb29tKSkge1xuICAgICAgICAgIGZvdW5kUm9vbXMucHVzaChyb29tKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZm91bmRSb29tcztcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICByZXR1cm5BbGxGaWx0ZXJlZFJlc3VsdHMoZGF0ZSwgdHlwZU9mUm9vbSwgc2l6ZU9mQmVkLCBudW1iZXJPZkJlZHMpIHtcbiAgICBjb25zdCBhdmFpbGFibGVSb29tcyA9IHRoaXMuY2hlY2tBdmFpbGFibGVSb29tcyhkYXRlKVxuICAgIGlmIChhdmFpbGFibGVSb29tcyA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBjb25zdCBieVR5cGUgPSB0aGlzLmZpbHRlclJvb21zQnlTZWFyY2hDcml0ZXJpYShhdmFpbGFibGVSb29tcywgdHlwZU9mUm9vbSwgJ3Jvb21UeXBlJyk7XG4gICAgY29uc3QgYnlCZWRTaXplID0gdGhpcy5maWx0ZXJSb29tc0J5U2VhcmNoQ3JpdGVyaWEoYnlUeXBlLCBzaXplT2ZCZWQsICdiZWRTaXplJyk7XG4gICAgY29uc3QgYnlOdW1iZXJPZkJlZHMgPSB0aGlzLmZpbHRlclJvb21zQnlTZWFyY2hDcml0ZXJpYShieUJlZFNpemUsIG51bWJlck9mQmVkcywgJ251bUJlZHMnKTtcbiAgICBjb25zdCBmaW5hbFJlc3VsdCA9IGJ5TnVtYmVyT2ZCZWRzO1xuICAgIHJldHVybiBmaW5hbFJlc3VsdDtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvdGVsOyIsImNsYXNzIEh1bWFuIHtcbiAgcmV0dXJuQm9va2luZ0hpc3RvcnkoaG90ZWwsIGlkID0gdGhpcy5pZCkge1xuICAgIGlmICghaG90ZWwuYm9va2luZ3Muc29tZShyb29tQm9va2VkID0+IHJvb21Cb29rZWQudXNlcklEID09PSBpZCkpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIGhvdGVsLmJvb2tpbmdzLmZpbHRlcihyb29tID0+IHJvb20udXNlcklEID09PSBpZCk7XG4gIH1cbiAgXG4gIGZpbmRTcGVjaWZpY1Jvb21zKGhvdGVsLCBpZCA9IHRoaXMuaWQpIHtcbiAgICBjb25zdCByb29tc0Jvb2tlZCA9IHRoaXMucmV0dXJuQm9va2luZ0hpc3RvcnkoaG90ZWwsIGlkKTtcbiAgICBjb25zdCBzcGVjaWZpY1Jvb21zID0gcm9vbXNCb29rZWQubWFwKHJvb20gPT4ge1xuICAgICAgY29uc3QgaG90ZWxSb29tID0gaG90ZWwucm9vbXMuZmluZChob3RlbFJvb20gPT4gaG90ZWxSb29tLm51bWJlciA9PT0gcm9vbS5yb29tTnVtYmVyKVxuICAgICAgcmV0dXJuIHsuLi5ob3RlbFJvb20sIGRhdGVCb29rZWQ6cm9vbS5kYXRlLCBib29raW5nSUQ6IHJvb20uaWR9XG4gICAgfSlcbiAgICByZXR1cm4gc3BlY2lmaWNSb29tcztcbiAgfVxuXG4gIG9yZ2FuaXplQm9va2luZ3NCeURhdGUoaG90ZWwsIGlkID0gdGhpcy5pZCkge1xuICAgIGNvbnN0IGJvb2tlZFJvb21zID0gdGhpcy5maW5kU3BlY2lmaWNSb29tcyhob3RlbCwgaWQpO1xuICAgIGNvbnN0IHNvcnRlZCA9IGJvb2tlZFJvb21zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShiLmRhdGVCb29rZWQpIC0gbmV3IERhdGUoYS5kYXRlQm9va2VkKTtcbiAgICB9KVxuICAgIHJldHVybiBzb3J0ZWQ7XG4gIH1cblxuICByZXR1cm5Ub3RhbEJvb2tpbmdDb3N0KGhvdGVsLCBpZCA9IHRoaXMuaWQpIHtcbiAgICBjb25zdCByb29tc0Jvb2tlZCA9IHRoaXMuZmluZFNwZWNpZmljUm9vbXMoaG90ZWwsIGlkKTtcbiAgICBjb25zdCBhbW91bnRQYWlkID0gcm9vbXNCb29rZWQucmVkdWNlKCh0b3RhbENvc3QsIHJvb20pID0+IHtcbiAgICAgIHRvdGFsQ29zdCArPSByb29tLmNvc3RQZXJOaWdodDtcbiAgICAgIHJldHVybiB0b3RhbENvc3Q7XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoYW1vdW50UGFpZC50b0ZpeGVkKDIpKTtcbiAgfVxuXG4gIHJldHVyblBvaW50c0Vhcm5lZChob3RlbCwgaWQgPSB0aGlzLmlkKSB7XG4gICAgY29uc3QgYW1vdW50UGFpZCA9IHRoaXMucmV0dXJuVG90YWxCb29raW5nQ29zdChob3RlbCwgaWQpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKGFtb3VudFBhaWQgLyAxMCk7XG4gIH0gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBIdW1hbjsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJjb25zdCBkYXRhID0ge1xuICBnZXREYXRhKHR5cGUpIHtcbiAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vb3Zlcmxvb2staG90ZWwuaGVyb2t1YXBwLmNvbS9hcGkvdjEvJHt0eXBlfWApXG4gICAgICAudGhlbihkYXRhLmhhbmRsZUVycm9ycylcbiAgICAgIC50aGVuKGRhdGEgPT4gZGF0YVt0eXBlXSlcbiAgICAgIC5jYXRjaChlcnIgPT4gYWxlcnQoZXJyKSk7XG4gIH0sXG4gIGdldEFsbEhvdGVsRGF0YSgpIHtcbiAgICBjb25zdCBkYXRhVHlwZXMgPSBbJ3Jvb21zJywgJ2Jvb2tpbmdzJywgJ2N1c3RvbWVycyddO1xuICAgIHJldHVybiBkYXRhVHlwZXMubWFwKHRoaXMuZ2V0RGF0YSk7XG4gIH0sXG4gIGdldFVzZXJEYXRhKGN1c3RvbWVySUQsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGZldGNoKGBodHRwczovL292ZXJsb29rLWhvdGVsLmhlcm9rdWFwcC5jb20vYXBpL3YxL2N1c3RvbWVycy8ke2N1c3RvbWVySUR9YClcbiAgICAgIC50aGVuKGRhdGEuaGFuZGxlRXJyb3JzKVxuICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhKVxuICAgICAgLmNhdGNoKGNhbGxiYWNrKVxuICB9LFxuICBib29rUm9vbShyb29tKSB7XG4gICAgcmV0dXJuIGZldGNoKCdodHRwczovL292ZXJsb29rLWhvdGVsLmhlcm9rdWFwcC5jb20vYXBpL3YxL2Jvb2tpbmdzJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyb29tKSxcbiAgICB9KVxuICB9LFxuICBjYW5jZWxCb29raW5nKGlkKSB7XG4gICAgcmV0dXJuIGZldGNoKCdodHRwczovL292ZXJsb29rLWhvdGVsLmhlcm9rdWFwcC5jb20vYXBpL3YxL2Jvb2tpbmdzLycgKyBpZCwge1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICB9KVxuICB9LFxuICBoYW5kbGVFcnJvcnMocmVzcG9uc2UpIHtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBFcnJvcignT29wcyEgU29tZXRoaW5nIHdlbnQgd3JvbmcgcGxlYXNlIHRyeSBhZ2Fpbi4nKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGE7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvZXhpdC5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9qb3NodWEtdHJlZS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9sb2dpbi1ob3RlbC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9vdmVybG9vay1ob3RlbC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9yb29tLTEuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcm9vbS0xMC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9yb29tLTExLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3Jvb20tMTIuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcm9vbS0xMy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9yb29tLTE0LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3Jvb20tMTUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcm9vbS0xNi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9yb29tLTE3LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3Jvb20tMTguanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcm9vbS0xOS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9yb29tLTIuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcm9vbS0yMC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9yb29tLTIxLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3Jvb20tMjIuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcm9vbS0yMy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9yb29tLTI0LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3Jvb20tMjUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcm9vbS0zLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3Jvb20tNC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9yb29tLTUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcm9vbS02LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3Jvb20tNy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9yb29tLTguanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcm9vbS05LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NlYXJjaF9pY29uLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3N1bnNldC5qcGdcIjsiLCJpbXBvcnQgJy4vY3NzL2Jhc2Uuc2Nzcyc7XG5pbXBvcnQgSG90ZWwgZnJvbSAnLi9Ib3RlbCc7XG5pbXBvcnQgQ3VzdG9tZXIgZnJvbSAnLi9DdXN0b21lcic7XG5pbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEnO1xuXG5pbXBvcnQgJy4vaW1hZ2VzL292ZXJsb29rLWhvdGVsLmpwZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3NlYXJjaF9pY29uLnN2Zyc7XG5pbXBvcnQgJy4vaW1hZ2VzL2V4aXQuc3ZnJztcbmltcG9ydCAnLi9pbWFnZXMvam9zaHVhLXRyZWUuanBnJztcbmltcG9ydCAnLi9pbWFnZXMvbG9naW4taG90ZWwuanBnJztcbmltcG9ydCAnLi9pbWFnZXMvc3Vuc2V0LmpwZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20tMS5qcGcnO1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tLTIuanBnJztcbmltcG9ydCAnLi9pbWFnZXMvcm9vbS0zLmpwZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20tNC5qcGcnO1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tLTUuanBnJztcbmltcG9ydCAnLi9pbWFnZXMvcm9vbS02LmpwZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20tNy5qcGcnO1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tLTguanBnJztcbmltcG9ydCAnLi9pbWFnZXMvcm9vbS05LmpwZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20tMTAuanBnJztcbmltcG9ydCAnLi9pbWFnZXMvcm9vbS0xMS5qcGcnO1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tLTEyLmpwZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20tMTMuanBnJztcbmltcG9ydCAnLi9pbWFnZXMvcm9vbS0xNC5qcGcnO1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tLTE1LmpwZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20tMTYuanBnJztcbmltcG9ydCAnLi9pbWFnZXMvcm9vbS0xNy5qcGcnO1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tLTE4LmpwZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20tMTkuanBnJztcbmltcG9ydCAnLi9pbWFnZXMvcm9vbS0yMC5qcGcnO1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tLTIxLmpwZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20tMjIuanBnJztcbmltcG9ydCAnLi9pbWFnZXMvcm9vbS0yMy5qcGcnO1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tLTI0LmpwZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20tMjUuanBnJztcblxuXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoQnRuJyk7XG5jb25zdCBhdmFpbGFibGVSb29tc1NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZhaWxhYmxlUm9vbXMnKTtcbmNvbnN0IGJvb2tlZFJvb21zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tlZFJvb21zJyk7XG5jb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEZvcm0nKTtcbmNvbnN0IHVzZXJNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJNZXNzYWdlJyk7XG5jb25zdCBsb2dpbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbkJ0bicpO1xuXG5sZXQgaG90ZWw7XG5sZXQgY3VzdG9tZXI7XG5cbmNvbnN0IGNyZWF0ZUhvdGVsID0gKCkgPT4ge1xuICBQcm9taXNlLmFsbChkYXRhLmdldEFsbEhvdGVsRGF0YSgpKVxuICAgIC50aGVuKHZhbHVlcyA9PiBob3RlbCA9IG5ldyBIb3RlbChcIm92ZXJMb29rXCIsIHZhbHVlc1swXSwgdmFsdWVzWzFdLCB2YWx1ZXNbMl0pKTtcbn07XG5cbmNvbnN0IHRvZ2dsZUhpZGRlbiA9IChlbGVtZW50LCBoaWRkZW4gPSAndHJ1ZScpID0+IGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGhpZGRlbik7XG5cbmNvbnN0IGNyZWF0ZVVzZXIgPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJOYW1lSW5wdXQnKS52YWx1ZTtcbiAgUHJvbWlzZS5yZXNvbHZlKGRhdGEuZ2V0VXNlckRhdGEocGFyc2VJbnQoZmluZFVzZXJJRCh1c2VyTmFtZSkpLCAoKSA9PiBzaG93TG9naW5FcnJvcigpKSlcbiAgICAudGhlbih2YWx1ZSA9PiB7XG4gICAgICBjdXN0b21lciA9IG5ldyBDdXN0b21lcih2YWx1ZSk7XG4gICAgICBsb2dpbigpO1xuICAgICAgZGlzcGxheVJvb21zKCk7XG4gICAgICBkaXNwbGF5UG9pbnRzRWFybmVkKCk7XG4gICAgfSlcbn07XG5cbmNvbnN0IGxvZ2luID0gKCkgPT4ge1xuICBjb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZElucHV0JykudmFsdWU7XG4gIGlmIChwYXNzd29yZCAhPT0gJ292ZXJsb29rMjAyMScpIHtcbiAgICBzaG93TG9naW5FcnJvcigpO1xuICAgIHJldHVybjtcbiAgfVxuICBzaG93TWFpbigpO1xufVxuXG5jb25zdCBkaXNhYmxlQnV0dG9uID0gKGRhdGUpID0+IHtcbiAgaWYgKG5ldyBEYXRlKGRhdGUpIDwgbmV3IERhdGUoKSkge1xuICAgIHJldHVybiAnZGlzYWJsZWQnO1xuICB9XG4gIHJldHVybjtcbn1cblxuY29uc3QgZGlzcGxheVJvb21zID0gKCkgPT4ge1xuICBjb25zdCBib29rZWRSb29tcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29rZWRSb29tcycpO1xuICBib29rZWRSb29tcy5pbm5lckhUTUwgPSAnJztcbiAgY3VzdG9tZXIub3JnYW5pemVCb29raW5nc0J5RGF0ZShob3RlbCkuZm9yRWFjaChyb29tID0+IHtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHNlY3Rpb24uY2xhc3NOYW1lID0gJ2Jvb2tlZC1yb29tX19jYXJkJztcbiAgICBzZWN0aW9uLnRhYkluZGV4ID0gXCIwXCJcbiAgICBzZWN0aW9uLmRhdGFzZXQuYm9va2luZ0lEID0gcm9vbS5ib29raW5nSUQ7XG4gICAgc2VjdGlvbi5pbm5lckhUTUwgPSBcbiAgICAgIGA8aW1nIHNyYz1cIi4vaW1hZ2VzL3Jvb20tJHtyb29tLm51bWJlcn0uanBnXCIgYWx0PVwiSG90ZWwgcm9vbSB3aXRoIGEgYmVkIGFuZCBkZXNrXCIgY2xhc3M9XCJib29rZWQtcm9vbV9fY2FyZF9faW1nXCI+XG4gICAgICA8cCBjbGFzcz1cImJvb2tlZC1yb29tX19jYXJkX19yb29tLW51bWJlclwiPlJvb20gJHtyb29tLm51bWJlcn08L3A+XG4gICAgICA8cCBjbGFzcz1cImJvb2tlZC1yb29tX19jYXJkX19kYXRlLWJvb2tlZFwiPiR7Zml4RGF0ZShyb29tLmRhdGVCb29rZWQpfTwvcD5cbiAgICAgIDxwIGNsYXNzPVwiYm9va2VkLXJvb21fX2NhcmRfX3R5cGVcIj4gJHtjYXBpdGFsaXplV29yZHMocm9vbS5yb29tVHlwZSl9PC9wPlxuICAgICAgPHAgY2xhc3M9XCJib29rZWQtcm9vbV9fY2FyZF9fYmVkLXNpemVcIj5CZWQgU2l6ZSAke2NhcGl0YWxpemVXb3Jkcyhyb29tLmJlZFNpemUpfTwvcD5cbiAgICAgIDxwIGNsYXNzPVwiYm9va2VkLXJvb21fX2NhcmRfX251bWJlci1vZi1iZWRzXCI+QmVkczogJHtyb29tLm51bUJlZHN9PC9wPlxuICAgICAgPHAgY2xhc3M9XCJib29rZWQtcm9vbV9fY2FyZF9fY29zdFwiPiR7cm9vbS5jb3N0UGVyTmlnaHR9IC8gTmlnaHQ8L3A+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYm9va2VkLXJvb21fX2NhcmRfX2J0biBidG5cIiAke2Rpc2FibGVCdXR0b24ocm9vbS5kYXRlQm9va2VkKX0+Q2FuY2VsIFJlc2VydmF0aW9uPC9idXR0b24+YDsgXG4gICAgYm9va2VkUm9vbXMuYXBwZW5kKHNlY3Rpb24pO1xuICB9KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlQb2ludHNFYXJuZWQgPSAoKSA9PiB7XG4gIGNvbnN0IHBvaW50c0Vhcm5lZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2ludHNFYXJuZWQnKTtcbiAgY29uc3QgY3VzdG9tZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbWVyTmFtZScpXG4gIHBvaW50c0Vhcm5lZC5pbm5lclRleHQgPSBcbiAgICBgWW91J3ZlIGVhcm5lZCAke2N1c3RvbWVyLnJldHVyblBvaW50c0Vhcm5lZChob3RlbCl9IHBvaW50c1xuICAgIFRvdGFsIHNwZW50ICR7Y3VzdG9tZXIucmV0dXJuVG90YWxCb29raW5nQ29zdChob3RlbCl9YDtcbiAgY3VzdG9tZXJOYW1lLmlubmVyVGV4dCA9IGBXZWxjb21lIGJhY2sgJHtjdXN0b21lci5uYW1lLnNwbGl0KCcgJylbMF19IWBcbn1cblxuY29uc3QgY29tcGlsZUZvcm1EYXRhID0gKGVsZW1lbnRzKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgZGF0ZTogZWxlbWVudHNbMF0udmFsdWUucmVwbGFjZSgvLS9nLCBcIi9cIiksXG4gICAgcm9vbVR5cGU6IFtdLFxuICAgIGJlZFNpemU6IFtdLFxuICAgIG51bUJlZHM6IFtdXG4gIH07XG4gIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NOYW1lLmluY2x1ZGVzKCdyb29tLXR5cGUnKSAmJiBlbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgIGRhdGEucm9vbVR5cGUucHVzaChlbGVtZW50LnZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NOYW1lLmluY2x1ZGVzKCdiZWQtc2l6ZScpICYmIGVsZW1lbnQuY2hlY2tlZCkge1xuICAgICAgZGF0YS5iZWRTaXplLnB1c2goZWxlbWVudC52YWx1ZSk7XG4gICAgfVxuICAgIGlmIChlbGVtZW50LmNsYXNzTmFtZS5pbmNsdWRlcygnbnVtYmVyLW9mLWJlZHMnKSAmJiBlbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgIGRhdGEubnVtQmVkcy5wdXNoKGVsZW1lbnQudmFsdWUpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5jb25zdCByZXRyaWV2ZUZvcm1WYWx1ZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHZhbHVlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hGb3JtJyk7XG4gIGNvbnN0IGRhdGEgPSBjb21waWxlRm9ybURhdGEoQXJyYXkuZnJvbSh2YWx1ZXMuZWxlbWVudHMpKTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbmNvbnN0IGRpc3BsYXlTZWFyY2hSZXN1bHRzID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBkYXRhID0gcmV0cmlldmVGb3JtVmFsdWVzKCk7XG4gIGNvbnN0IHJlc3VsdHMgPSBob3RlbC5yZXR1cm5BbGxGaWx0ZXJlZFJlc3VsdHMoZGF0YS5kYXRlLCBcbiAgICBkYXRhLnJvb21UeXBlLCBkYXRhLmJlZFNpemUsIGRhdGEubnVtQmVkcyk7XG4gIGNvbnN0IGhlYWRlciA9IHJlc3VsdHMubGVuZ3RoID09PSAwID8gXG4gICAgYFNvcnJ5IG5vIHJvb21zIG1hdGNoIHlvdXIgc2VhcmNoIGNyaXRlcmlhIGZvciAke2ZpeERhdGUoZGF0YS5kYXRlKX0uIFBsZWFzZSB0cnkgYWdhaW4uYCBcbiAgICA6IGBSb29tcyBhdmFpbGFibGUgb24gJHtmaXhEYXRlKGRhdGEuZGF0ZSl9YFxuICBpZiAocmVzdWx0cykge1xuICAgIGNvbnN0IGF2YWlsYWJsZVJvb21zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2YWlsYWJsZVJvb21zJyk7XG4gICAgYXZhaWxhYmxlUm9vbXMuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBhdmFpbGFibGVSb29tcy5pbm5lckhUTUwgPVxuICAgIGA8aDIgY2xhc3M9XCJhdmFpbGFibGUtcm9vbXNfX2hlYWRlclwiPiAke2hlYWRlcn0gPC9oMj5gO1xuICAgIHJlc3VsdHMuZm9yRWFjaChyZXN1bHQgPT4ge1xuICAgICAgYXZhaWxhYmxlUm9vbXMuaW5uZXJIVE1MICs9IFxuICAgICAgYDxzZWN0aW9uIGNsYXNzPVwiYXZhaWxhYmxlLXJvb21zX19jYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJob3RlbC1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9yb29tLSR7cmVzdWx0Lm51bWJlcn0uanBnXCIgYWx0PVwiWW91ciBuZXh0IGhvdGVsIHJvb21cIiBjbGFzcz1cImF2YWlsYWJsZS1yb29tc19fY2FyZF9faW1nXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXZhaWxhYmxlLXJvb21zX19pbmZvLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiaW5mby1sZWZ0IGF2YWlsYWJsZS1yb29tc19fY2FyZF9fcm9vbS1udW1iZXJcIj5Sb29tICR7cmVzdWx0Lm51bWJlcn08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJpbmZvLXJpZ2h0IGF2YWlsYWJsZS1yb29tc19fY2FyZF9fYmVkLXNpemVcIj5CZWQgU2l6ZSAtICR7Y2FwaXRhbGl6ZVdvcmRzKHJlc3VsdC5iZWRTaXplKX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJpbmZvLWxlZnQgYXZhaWxhYmxlLXJvb21zX19jYXJkX19yb29tLXR5cGVcIj4ke2NhcGl0YWxpemVXb3JkcyhyZXN1bHQucm9vbVR5cGUpfTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImluZm8tcmlnaHQgYXZhaWxhYmxlLXJvb21zX19jYXJkX19udW1iZXItb2YtYmVkc1wiPlRvdGFsIEJlZHMgLSAke3Jlc3VsdC5udW1CZWRzfTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImluZm8tY2VudGVyIGF2YWlsYWJsZS1yb29tc19fY2FyZF9faGFzLWJpZGV0XCI+JHtyZXN1bHQuYmlkZXQgPyBcIkNvbXBsaW1lbnRhcnkgQmlkZXQhXCIgOiBcIlwifTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImluZm8tY2VudGVyIGF2YWlsYWJsZS1yb29tc19fY2FyZF9fY29zdC1wZXItbmlnaHRcIj4kJHtyZXN1bHQuY29zdFBlck5pZ2h0fSAvIFBlciBOaWdodDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJhdmFpbGFibGUtcm9vbXNfX2NhcmRfX2Jvb2stYnRuIGJvb2stbm93IGJ0blwiIGRhdGEtYm9va2luZy1kYXRhPSR7c3RvcmVCb29raW5nRGF0YShkYXRhLmRhdGUsIHJlc3VsdCl9PkJvb2sgTm93PC9idXR0b24+XG4gICAgICA8L3NlY3Rpb24+YFxuICAgIH0pO1xuICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAnI2F2YWlsYWJsZVJvb21zJztcbiAgICBzZWFyY2hGb3JtLnJlc2V0KCk7XG4gICAgcmV0dXJuOyBcbiAgfVxuICBkaXNwbGF5VXNlck1lc3NhZ2UoJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGRhdGUuJyk7XG59XG5cbmNvbnN0IGRpc3BsYXlVc2VyTWVzc2FnZSA9IChjb250ZW50KSA9PiB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZScpO1xuICBtZXNzYWdlLmlubmVyVGV4dCA9IGNvbnRlbnQ7XG4gIHRvZ2dsZUhpZGRlbih1c2VyTWVzc2FnZSwgJ2ZhbHNlJyk7XG59XG5cblxubGV0IGZpeERhdGUgPSAoZGF0ZSkgPT4ge1xuICBjb25zdCBzcGxpdERhdGUgPSBkYXRlLnNwbGl0KCcvJyk7XG4gIHNwbGl0RGF0ZS5wdXNoKHNwbGl0RGF0ZS5zaGlmdCgpKTtcbiAgY29uc3Qgam9pbmVkID0gc3BsaXREYXRlLmpvaW4oJy8nKTtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuY29uc3QgY2FwaXRhbGl6ZVdvcmRzID0gKHN0cmluZykgPT4ge1xuICBsZXQgd29yZHMgPSBzdHJpbmcuc3BsaXQoJyAnKTtcbiAgbGV0IGNhcGl0YWxpemVkID0gd29yZHMubWFwKCB3b3JkID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEsIHdvcmQubGVuZ3RoKSlcbiAgcmV0dXJuIGNhcGl0YWxpemVkLmpvaW4oJyAnKTtcbn1cblxuY29uc3Qgc3RvcmVCb29raW5nRGF0YSA9IChkYXRlLCBkYXRhKSA9PiB7XG4gIGNvbnN0IGJvb2tpbmdEYXRhID0ge1xuICAgIHVzZXJJRDogY3VzdG9tZXIuaWQsXG4gICAgZGF0ZTogZGF0ZSxcbiAgICByb29tTnVtYmVyOiBkYXRhLm51bWJlclxuICB9O1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYm9va2luZ0RhdGEpO1xufVxuXG5jb25zdCBtYWtlUmVzZXJ2YXRpb24gPSAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lLmluY2x1ZGVzKCdidG4nKSkge1xuICAgIGRhdGEuYm9va1Jvb20oSlNPTi5wYXJzZShlLnRhcmdldC5kYXRhc2V0LmJvb2tpbmdEYXRhKSlcbiAgICAgIC50aGVuKGRhdGEuaGFuZGxlRXJyb3JzKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGhvdGVsLmJvb2tpbmdzLnB1c2goZGF0YS5uZXdCb29raW5nKVxuICAgICAgICBkaXNwbGF5Um9vbXMoKTtcbiAgICAgICAgZGlzcGxheVBvaW50c0Vhcm5lZCgpO1xuICAgICAgICBkaXNwbGF5VXNlck1lc3NhZ2UoYEJvb2tpbmcgZm9yICR7Zml4RGF0ZShkYXRhLm5ld0Jvb2tpbmcuZGF0ZSl9IGNvbXBsZXRlLlxuICAgICAgICBDb25maXJtYXRpb24gbnVtYmVyIC0gJHtkYXRhLm5ld0Jvb2tpbmcuaWR9YClcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGFsZXJ0KGVycikpO1xuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cbn1cblxuY29uc3QgdXBkYXRlQm9va2luZ3MgPSAoKSA9PiB7XG4gIFByb21pc2UucmVzb2x2ZShkYXRhLmdldERhdGEoJ2Jvb2tpbmdzJykpIFxuICAgIC50aGVuKHZhbHVlcyA9PiB7XG4gICAgICBob3RlbC5ib29raW5ncyA9IHZhbHVlcztcbiAgICAgIGRpc3BsYXlSb29tcygpO1xuICAgICAgZGlzcGxheVBvaW50c0Vhcm5lZCgpO1xuICAgIH0pO1xufVxuXG5cbmNvbnN0IGNhbmNlbFJlc2VydmF0aW9uID0gKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcygnYnRuJykpIHtcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5ib29raW5nSUQ7XG4gICAgZGF0YS5jYW5jZWxCb29raW5nKGlkKVxuICAgICAgLnRoZW4oZGF0YS5oYW5kbGVFcnJvcnMpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHVwZGF0ZUJvb2tpbmdzKCk7XG4gICAgICAgIGRpc3BsYXlVc2VyTWVzc2FnZShgWW91ciByZXNlcnZhdGlvbiBoYXMgYmVlbiBjYW5jZWxlZC5gKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGFsZXJ0KGVycikpO1xuICB9XG59XG5cbmNvbnN0IGZpbmRVc2VySUQgPSAodXNlck5hbWUpID0+IHVzZXJOYW1lLnJlcGxhY2UoXCJvdmVybG9va1wiLCBcIlwiKTtcblxuY29uc3Qgc2hvd01haW4gPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLXBhZ2UnKTtcbiAgY29uc3QgbG9naW5QYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luUGFnZScpO1xuICB0b2dnbGVIaWRkZW4obG9naW5QYWdlKTtcbiAgbWFpbkVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB0b2dnbGVIaWRkZW4oZWxlbWVudCwgJ2ZhbHNlJykpO1xufVxuXG5jb25zdCBzaG93TG9naW5FcnJvciA9ICgpID0+IHtcbiAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yTWVzc2FnZScpO1xuICB0b2dnbGVIaWRkZW4oZXJyb3JNZXNzYWdlLCAnZmFsc2UnKTtcbn1cblxuY29uc3QgaGFuZGxlU2VhcmNoRXZlbnRzID0gKGUpID0+IHtcbiAgaGlkZVNlYXJjaERyb3BEb3ducygpO1xuICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLmNsaWNrYWJsZScpKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQuY2xvc2VzdCgnLmNsaWNrYWJsZScpLmNoaWxkTm9kZXNbM107XG4gICAgdG9nZ2xlSGlkZGVuKHRhcmdldCwgJ2ZhbHNlJyk7XG4gIH1cbn1cblxuY29uc3QgY2xvc2VTZWFyY2hCYXIgPSAoZSkgPT4geyBcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcygnZXhpdC1idG4nKSkge1xuICAgIHRvZ2dsZUhpZGRlbih1c2VyTWVzc2FnZSk7XG4gIH1cbiAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KCcuc2VhcmNoLWJhcicpKSB7XG4gICAgaGlkZVNlYXJjaERyb3BEb3ducygpO1xuICB9XG59XG5cbmNvbnN0IGhpZGVTZWFyY2hEcm9wRG93bnMgPSAoKSA9PiB7XG4gIGNvbnN0IG1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3AtZG93bi1tZW51Jyk7XG4gIG1lbnVzLmZvckVhY2goZWxlbWVudCA9PiB0b2dnbGVIaWRkZW4oZWxlbWVudCkpO1xufVxuXG5jb25zdCBoaWRlT25TY3JvbGwgPSAoKSA9PiB7XG4gIHRvZ2dsZUhpZGRlbih1c2VyTWVzc2FnZSk7XG4gIGhpZGVTZWFyY2hEcm9wRG93bnMoKTtcbn1cblxuY29uc3QgdGFiVGhyb3VnaFNlYXJjaCA9IChlKSA9PiB7XG4gIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgaGlkZVNlYXJjaERyb3BEb3ducygpO1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5jbGlja2FibGUnKS5jaGlsZE5vZGVzWzNdO1xuICAgIHRvZ2dsZUhpZGRlbih0YXJnZXQsICdmYWxzZScpO1xuICB9XG59XG5cbndpbmRvdy5vbmxvYWQgPSBjcmVhdGVIb3RlbCgpO1xubG9naW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVVc2VyKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlU2VhcmNoQmFyKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoaWRlT25TY3JvbGwpO1xuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVNlYXJjaFJlc3VsdHMpO1xuYXZhaWxhYmxlUm9vbXNTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZVJlc2VydmF0aW9uKTtcbmJvb2tlZFJvb21zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsUmVzZXJ2YXRpb24pO1xuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVNlYXJjaEV2ZW50cyk7XG5zZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0YWJUaHJvdWdoU2VhcmNoKTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==