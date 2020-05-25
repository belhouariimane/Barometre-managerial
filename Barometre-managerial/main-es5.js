function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/alert/alert.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alert/alert.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAlertAlertComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"message\" [ngClass]=\"message.cssClass\">{{message.text}}</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!-- Nav -->\n<nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n    <div class=\"navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2\">\n        <a class=\"navbar-brand nav-item nav-link \"  routerLink='#'>Baromètre Managérial</a>\n    </div>\n    <div class=\"navbar-collapse collapse w-100 order-3 dual-collapse2\">\n        <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item\" *ngIf=\"currentUser\">\n                <a class=\"nav-link \" (click)=\"myAccount()\">Mon compte</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"currentUser\">\n                <a class=\"nav-link \" (click)=\"logout()\">Se déconnecter</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"!currentUser\">\n                <a class=\"nav-link \" routerLink=\"/login\">Connexion</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"!currentUser\">\n                <a class=\"nav-link \" routerLink=\"/register\">Inscription</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n\n<!-- Application principale -->\n<div class=\"jumbotron min-vh-100\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-10 offset-sm-1 \">\n                <app-alert></app-alert>\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Bonjour {{currentUser.prenom}} !</h3>\n<!--<h3>Liste des utilisateurs inscrits :</h3>-->\n<!--<ul class=\"list-group\">-->\n<!--    <li *ngFor=\"let user of users\" class=\"list-group-item m-3 rounded border border-primary\">-->\n<!--        {{user.email}} ({{user.prenom}} {{user.nom}})-->\n<!--        <button class=\"btn btn-danger float-right \" (click)=\"deleteUser(user.id)\" >Supprimer</button>-->\n<!--    </li>-->\n<!--</ul>-->\n<h4>Liste des questionnaires</h4>\n<ul class=\"list-group\">\n    <div *ngFor=\"let questionnaire of questionnaires\" class=\"list-group-item m-3 rounded border border-info\">\n        <div class=\"zero-border\" [routerLink]=\"['/edit-questionnaire', questionnaire.id]\">\n        <h4>{{questionnaire.titre}}</h4>\n        <h5>{{questionnaire.description}} </h5>\n            <div>Lien : <a [routerLink]=\"['/answer', questionnaire.id]\">{{apiUrl}}/answer/{{questionnaire.id}}</a></div>\n        <div>Anonyme : {{ questionnaire.anonymous ? \"oui\" : \"non\" }} </div>\n        <div>Nombre de questions : {{questionnaire.nbQuestions}}</div>\n        <div>Nombre de participations : 32</div>\n        </div>\n        <button class=\"float-right mx-2\" mat-button mat-raised-button color=\"warn\" (click)=\"deleteQuestionnaire(questionnaire.id)\"><mat-icon>delete</mat-icon> </button>\n        <button class=\"float-right mx-2\" mat-button mat-raised-button color=\"accent\" [routerLink]=\"['/edit-questionnaire', questionnaire.id]\"><mat-icon>update</mat-icon> </button>\n        <button class=\"float-right mx-2\" mat-button mat-raised-button color=\"primary\" [routerLink]=\"['/show-questionnaire', questionnaire.id]\"><mat-icon>slideshow</mat-icon> </button>\n        <button class=\"float-right mx-2\" mat-button mat-raised-button color=\"primary\" [routerLink]=\"['/statistiques', questionnaire.id]\"><mat-icon>equalizer</mat-icon> </button>\n    </div>\n</ul>\n<div class=\"text-center mt-3\">\n    <button class=\"btn btn-primary mx-3\" routerLink=\"/edit-questionnaire\">\n        Nouveau questionnaire\n    </button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"text-center\">Connexion</h2>\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"email\">Nom d'utilisateur</label>\n        <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.email.errors.required\">Veuillez renseigner le nom d'utilisateur</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Mot de passe</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Veuillez renseigner le mot de passe</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">\n            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n            Se connecter\n        </button>\n        <a routerLink=\"/register\" class=\"btn btn-link\">S'inscrire</a>\n    </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/myaccount/myaccount.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myaccount/myaccount.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyaccountMyaccountComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container border rounded border-info mb-4 p-3\">\n    <h3>Informations personnelles</h3>\n    <p>Vous pouvez modifier vos informations personnelles ci-dessous.</p>\n    <form [formGroup]=\"updateUserForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n            <label>Prénom</label>\n            <input type=\"text\" formControlName=\"prenom\" class=\"form-control\" placeholder=\"{{currentUser.prenom}}\" />\n        </div>\n        <div class=\"form-group\">\n            <label>Nom</label>\n            <input type=\"text\" formControlName=\"nom\" class=\"form-control\" placeholder=\"{{currentUser.nom}}\" />\n        </div>\n        <div class=\"form-group\">\n            <label>Nom d'utilisateur</label>\n            <input type=\"text\" formControlName=\"email\" class=\"form-control\" placeholder=\"{{currentUser.email}}\" />\n        </div>\n        <div class=\"form-group\">\n            <label>Mot de passe</label>\n            <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && (f.password.errors || updateUserForm.errors?.notSame)}\" />\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.password.errors.minlength\">Le mot de passe doit contenir au moins 6 caractères</div>\n            </div>\n            <div *ngIf=\"submitted && updateUserForm.errors?.notSame\" class=\"invalid-feedback\">\n                <div *ngIf=\"updateUserForm.errors?.notSame\">Les mots de passe ne sont pas identiques</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label>Confirmation du mot de passe</label>\n            <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && (f.confirmPassword.errors || updateUserForm.errors?.notSame)}\" />\n            <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.confirmPassword.errors.minlength\">Le mot de passe doit contenir au moins 6 caractères</div>\n            </div>\n            <div *ngIf=\"submitted && updateUserForm.errors?.notSame\" class=\"invalid-feedback\">\n                <div *ngIf=\"updateUserForm.errors?.notSame\">Les mots de passe ne sont pas identiques</div>\n            </div>\n        </div>\n        <br/>\n        <div class=\"form-group text-center\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">\n                <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                Valider les modifications\n            </button>\n        </div>\n    </form>\n</div>\n<div class=\"container border rounded border-info mb-4 p-3\">\n    <h3>Statistiques</h3>\n    <p>Vous pouvez consulter ici vos statisques depuis la création de votre compte (18/06/20)</p>\n    <p>Nombre de questionnaires créés : {{nbQuestionnairesCrees}}</p>\n    <p>Nombre de questions créées : {{nbQuestionsCreees}}</p>\n    <p>Nombre de réponses aux questionnaires : 824</p>\n    <br/>\n    <div class=\"text-center\">\n        <button class=\"btn btn-danger mx-3\" (click)=\"logout()\">Déconnexion</button>\n        <button class=\"btn btn-dark mx-3\" (click)=\"deleteAccount()\">Suppression définitive du compte</button>\n    </div>\n</div>\n<button class=\"btn btn-secondary float-right mx-3\" routerLink=\"'/'\">Retour à l'accueil</button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/question/question-edit/question-edit.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question/question-edit/question-edit.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuestionQuestionEditQuestionEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container border rounded border-info mb-4 p-3\">\n    <h3>Informations de la question</h3>\n    <form class=\"m-3\" [formGroup]=\"questionForm\" >\n        <div class=\"form-group \">\n            <label>Question</label>\n            <input type=\"text\" formControlName=\"valeur\" class=\"form-control\"\n                   [ngClass]=\"{ 'is-invalid': submitted && f.valeur.errors } \" placeholder=\"{{question?.valeur}}\"/>\n            <div *ngIf=\"submitted && f.valeur.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.valeur.errors.required\">Veuillez renseigner la question</div>\n            </div>\n        </div>\n<!--        <div class=\"form-group\">-->\n<!--            <label>Thème</label>-->\n<!--            <select formControlName=\"idTheme\" class=\"form-control browser-default custom-select\"-->\n<!--                [ngClass]=\" { 'is-invalid': submitted && f.idTheme.errors }\">-->\n<!--                <option [ngValue]=\"null\" disabled>Choisissez le thème associé à cette question</option>-->\n<!--                <option *ngFor=\"let theme of themes; let i = index\" [ngValue]=i+1>-->\n<!--                    {{ theme }}-->\n<!--                </option>-->\n<!--            </select>-->\n<!--            <div *ngIf=\"submitted && f.idTheme.errors\" class=\"invalid-feedback\">-->\n<!--                <div *ngIf=\"f.idTheme.errors.required\">Veuillez sélectionner un thème</div>-->\n<!--            </div>-->\n<!--        </div>-->\n        <div class=\"form-group\">\n            <mat-slide-toggle\n                    class=\"example-margin\"\n                    formControlName=\"isRequired\"\n                    checked=\"{{question?.isRequired}}\">\n                Cette question est-elle obligatoire ?\n            </mat-slide-toggle>\n        </div>\n        <div class=\"form-group\">\n            <mat-slide-toggle\n                    class=\"example-margin\"\n                    formControlName=\"isFilter\"\n                    checked=\"{{question?.isFilter}}\">\n                Cette question doit-elle être utilisée comme filtre dans la synthèse ?\n            </mat-slide-toggle>\n        </div>\n        <div class=\"form-group\">\n            <mat-slide-toggle\n                    class=\"example-margin\"\n                    formControlName=\"hasGraph\"\n                    checked=\"{{question?.hasGraph}}\">\n                Cette question doit-elle être représentée par un graphe dans la synthèse ?\n            </mat-slide-toggle>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'is-invalid': submitted && typeQuestion===undefined }\">\n            <label>Type</label><br/>\n            <button class=\"mx-3\" [ngClass]=\"(typeQuestion==='CHECKBOX')?'button-custom' : ''\" mat-raised-button  mat-mini-fab color=\"accent\" (click)=\"addCheckBox()\">\n                <mat-icon>check_box</mat-icon>\n            </button>\n            <button class=\"mx-3\" [ngClass]=\"(typeQuestion==='RADIO')?'button-custom' : ''\" mat-raised-button  mat-mini-fab color=\"accent\" (click)=\"addRadioBtn()\">\n                <mat-icon>radio_button_checked</mat-icon>\n            </button>\n            <button class=\"mx-3\" [ngClass]=\"(typeQuestion==='COMBOBOX')?'button-custom' : ''\" mat-raised-button  mat-mini-fab color=\"accent\" (click)=\"addSelect()\">\n                <mat-icon>list</mat-icon>\n            </button>\n            <button class=\"mx-3\" [ngClass]=\"(typeQuestion==='OUVERT')?'button-custom' : ''\" mat-raised-button  mat-mini-fab color=\"accent\" (click)=\"addInput()\">\n                <mat-icon>notes</mat-icon>\n            </button>\n            <button  class=\"mx-3\" [ngClass]=\"(typeQuestion==='DATE')?'button-custom' : ''\" mat-raised-button  mat-mini-fab color=\"accent\" (click)=\"addDatePicker()\">\n                <mat-icon>date_range</mat-icon>\n            </button>\n        </div>\n        <div *ngIf=\"submitted && typeQuestion===undefined\" class=\"invalid-feedback float-right\">\n            <div *ngIf=\"typeQuestion===undefined\">Veuillez sélectionner un typeQuestion</div><br/>\n        </div>\n        <div *ngIf=\"typeQuestion==='CHECKBOX' || typeQuestion==='RADIO' || typeQuestion==='COMBOBOX'\">\n            <div formArrayName=\"propositions\">\n                <div *ngFor=\"let proposition of propositions.controls; let i = index;\">\n                    <div class=\"container border rounded border-info mb-2 pt-2 px-4\" [formGroupName]=\"i\">\n                        <label>Proposition {{i+1}} : </label>\n                        <div class=\"input-group\">\n                            <input type=\"text\" class='form-control mx-2 ' formControlName=\"valeur\" placeholder=\"{{proposition?.value.valeur}}\" />\n                            <div class=\"input-group-prepend\">\n                            <button class=\"float-right\" (click)=\"removeProposition(i)\" mat-raised-button  mat-mini-fab color=\"warn\">\n                                <mat-icon>remove_circle</mat-icon>\n                            </button>\n                            </div>\n                        </div>\n                            <br/>\n                    </div>\n                </div>\n            </div>\n            <button class=\"float-right\" (click)=\"addPropositions('')\" mat-raised-button  mat-mini-fab color=\"primary\">\n                <mat-icon>add_circle</mat-icon>\n            </button>\n        </div>\n\n        <div *ngIf=\"typeQuestion==='OUVERT'\">\n            <div class=\"container border rounded border-info mb-4 pb-4 pt-2 px-4\">\n                <mat-form-field class=\"w-100\" >\n                    <mat-label>Veuillez saisir votre réponse</mat-label>\n                    <textarea matInput></textarea>\n                </mat-form-field>\n            </div>\n        </div>\n\n        <div *ngIf=\"typeQuestion==='DATE'\">\n            <div class=\"container border rounded border-info mb-4 pb-4 pt-2 px-4\">\n                <mat-form-field>\n                    <mat-label>Choisissez une date</mat-label>\n                    <input matInput [matDatepicker]=\"picker\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker></mat-datepicker>\n                </mat-form-field>\n            </div>\n        </div>\n        <br/>\n        <div class=\"form-group text-center\">\n            <button type=button (click)=\"onNewQuestion()\" [disabled]=\"loading\" class=\"btn btn-primary\">\n                <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                Valider les informations\n            </button>\n        </div>\n    </form>\n    <br/>\n</div>\n<button class=\"btn btn-secondary float-right\" (click)=\"backClicked()\">Retour au questionnaire</button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/question/question-show/question-show.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question/question-show/question-show.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuestionQuestionShowQuestionShowComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container [ngSwitch]=\"question?.typeQuestion\" >\n    <h3>{{question?.valeur}}</h3><br/>\n    <div *ngSwitchCase=\"'CHECKBOX'\" class=\"container border rounded border-info px-4 py-2\">\n        <div *ngFor=\"let proposition of propositions\">\n            <br/>\n            <mat-checkbox>{{proposition.valeur}}</mat-checkbox>\n        </div>\n    </div>\n    <div *ngSwitchCase=\"'RADIO'\" class=\"container border rounded border-info px-4 py-2\">\n        <mat-radio-group\n                aria-labelledby=\"example-radio-group-label\"\n                class=\"example-radio-group\"\n                [(ngModel)]=\"chosenResponse\">\n            <div *ngFor=\"let proposition of propositions\">\n                <mat-radio-button class=\"example-radio-button\">{{proposition.valeur}}</mat-radio-button><br/>\n            </div>\n            <br/>\n        </mat-radio-group>\n    </div>\n    <div *ngSwitchCase=\"'COMBOBOX'\" class=\"container border rounded border-info px-4 py-2\">\n        <mat-form-field class=\"w-50\">\n            <mat-label>Choisissez une valeur</mat-label>\n            <mat-select class=\"text-center\" matNativeControl required>\n                <div *ngFor=\"let proposition of propositions\">\n                    <mat-option value=\"{{proposition.valeur}}\">{{proposition.valeur}}</mat-option>\n                </div>\n            </mat-select>\n        </mat-form-field>\n    </div>\n    <div *ngSwitchCase=\"'DATE'\" class=\"container border rounded border-info px-4 py-2\">\n        <mat-form-field>\n            <mat-label>Choisissez une date</mat-label>\n            <input matInput [matDatepicker]=\"picker\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n    </div>\n    <div *ngSwitchCase=\"'OUVERT'\" class=\"container border rounded border-info px-4 py-2\">\n        <mat-form-field class=\"w-100\" >\n            <mat-label>Veuillez saisir votre réponse</mat-label>\n            <textarea matInput></textarea>\n        </mat-form-field>\n    </div>\n\n</ng-container>\n<br/>\n<button [hidden]=\"!apercuQuestion\" class=\"btn btn-secondary float-right\" [routerLink]=\"['/edit-questionnaire', idQuestionnaire]\">Retour au questionnaire</button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/questionnaire/questionnaire-answer/questionnaire-answer.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/questionnaire/questionnaire-answer/questionnaire-answer.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuestionnaireQuestionnaireAnswerQuestionnaireAnswerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card m-3\">\n    <h1 class=\"card-header text-center\">{{questionnaire?.titre}}</h1>\n    <div *ngIf=\"!done\" class=\"card-body\">\n        <p>Bonjour, merci de prendre quelques minutes afin de répondre à ce questionnaire.</p>\n        <form [formGroup]=\"answerForm\" (ngSubmit)=\"onSubmit(answerForm)\">\n            <div class=\"form\">\n                <div *ngIf=\"questionnaire?.anonymous\">Ce questionnaire est anonyme.</div>\n                <div *ngIf=\"!questionnaire?.anonymous\">Veuillez saisir votre nom et prénom, répondre aux questions\n                ci-dessous puis valider votre participation en cliquant sur le bouton en bas de page.</div><br/>\n                <div class=\"input-group\">\n                <div class=\"form-group px-2 w-50\">\n                    <label>Prénom</label>\n                    <input type=\"text\" formControlName=\"firstName\" class=\"form-control mx-2\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n                    <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.firstName.errors.required\">Veuillez renseigner votre prénom</div>\n                    </div>\n                </div>\n                <div class=\"form-group px-2 w-50 float-right\">\n                    <label>Nom</label>\n                    <input type=\"text\" formControlName=\"lastName\" class=\"form-control input-group-prepend mx-2\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n                    <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.lastName.errors.required\">Veuillez renseigner votre nom</div>\n                    </div>\n                </div>\n                </div>\n                <div formArrayName=\"questions\">\n                    <div class=\"form-group\" [formGroupName]=\"i\" *ngFor=\"let question of getQuestions(answerForm); let i = index\">\n                        <div class=\"w-100\">\n                            <h5>{{question.value.valeurQuestion}}</h5>\n                            <ng-container [ngSwitch]=\"question?.value.typeQuestion\" >\n                                <div *ngSwitchCase=\"'CHECKBOX'\" class=\"container border rounded border-info p-4\">\n                                    <div formArrayName=\"propositions\">\n                                        <div [formGroupName]=\"j\" *ngFor=\"let proposition of getPropositions(question); let j = index\">\n                                            <mat-checkbox>{{proposition?.value.valeurProp}}</mat-checkbox>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngSwitchCase=\"'RADIO'\" class=\"container border rounded border-info p-4\">\n                                    <mat-radio-group\n                                            aria-labelledby=\"example-radio-group-label\"\n                                            class=\"example-radio-group\">\n                                        <div formArrayName=\"propositions\">\n                                            <div [formGroupName]=\"j\" *ngFor=\"let proposition of getPropositions(question); let j = index\">\n                                                <mat-radio-button class=\"example-radio-button\">{{proposition?.value.valeurProp}}</mat-radio-button><br/>\n                                            </div>\n                                        </div>\n                                        <br/>\n                                    </mat-radio-group>\n                                </div>\n                                <div *ngSwitchCase=\"'COMBOBOX'\" class=\"container border rounded border-info p-4\">\n                                    <mat-form-field class=\"w-50\">\n                                        <mat-label>Choisissez une valeur</mat-label>\n                                        <mat-select class=\"text-center\" matNativeControl required>\n                                            <div formArrayName=\"propositions\">\n                                                <div [formGroupName]=\"j\" *ngFor=\"let proposition of getPropositions(question); let j = index\">\n                                                    <mat-option value=\"{{proposition?.value.idProp}}\">{{proposition?.value.valeurProp}}</mat-option>\n                                                </div>\n                                            </div>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                                <div *ngSwitchCase=\"'DATE'\" class=\"container border rounded border-info p-4\">\n                                    <mat-form-field>\n                                        <mat-label>Choisissez une date</mat-label>\n                                        <input matInput [matDatepicker]=\"picker\">\n                                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                        <mat-datepicker #picker></mat-datepicker>\n                                    </mat-form-field>\n                                </div>\n                                <div *ngSwitchCase=\"'OUVERT'\" class=\"container border rounded border-info p-4\">\n                                    <mat-form-field class=\"w-100\" >\n                                        <mat-label>Veuillez saisir votre réponse</mat-label>\n                                        <textarea required=\"{{question?.value.isRequired}}\" matInput></textarea>\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                    </div>\n                </div>\n            <div class=\"form-group text-center\">\n                <button [disabled]=\"loading\" class=\"btn btn-success \">\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                    Valider\n                </button>\n            </div>\n            </div>\n        </form >\n            {{this.answerForm.value | json}}\n    </div>\n    <div *ngIf=\"done\" class=\"card-body\">\n        <p>{{questionnaire.merci}}</p>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/questionnaire/questionnaire-edit/questionnaire-edit.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/questionnaire/questionnaire-edit/questionnaire-edit.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuestionnaireQuestionnaireEditQuestionnaireEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container border rounded border-info mb-4 p-3\">\n    <h3>Informations du questionnaire</h3>\n    <form class=\"m-3\" [formGroup]=\"questionnaireForm\" >\n        <div class=\"form-group \">\n            <label>Titre</label>\n            <input type=\"text\" formControlName=\"titre\" class=\"form-control\"\n                   [ngClass]=\"{ 'is-invalid': submitted && f.titre.errors } \" placeholder=\"{{questionnaire?.titre}}\"/>\n            <div *ngIf=\"submitted && f.titre.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.titre.errors.required\">Veuillez renseigner un titre</div>\n            </div>\n        </div>\n        <div class=\"form-group \">\n            <label>Description</label>\n            <input type=\"text\" formControlName=\"description\" class=\"form-control\"\n                   [ngClass]=\"{ 'is-invalid': submitted && f.description.errors } \" placeholder=\"{{questionnaire?.description}}\"/>\n            <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.description.errors.required\">Veuillez renseigner une description</div>\n            </div>\n        </div>\n        <div class=\"form-group \">\n            <label>Message de remerciement</label>\n            <input type=\"text\" formControlName=\"merci\" class=\"form-control\"\n                   [ngClass]=\"{ 'is-invalid': submitted && f.merci.errors } \" placeholder=\"{{questionnaire?.merci}}\"/>\n            <div *ngIf=\"submitted && f.merci.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.merci.errors.required\">Veuillez renseigner un message de remerciement</div>\n            </div>\n        </div>\n<!--        <div formArrayName=\"themes\">-->\n<!--            <label>Thèmes</label>-->\n<!--            <br/>-->\n<!--            <div *ngFor=\"let theme of themes.controls; let i = index;\" [formGroupName]=\"i\">-->\n<!--                <div class=\"input-group\">-->\n<!--                    <label>Thème {{i+1}} : </label>-->\n<!--                    <input type=\"text\" class='form-control mx-2' formControlName=\"theme\" placeholder=\"{{theme?.value.theme}}\" />-->\n<!--                    <button class=\"float-right\" (click)=\"removeTheme(i)\" mat-raised-button  mat-mini-fab color=\"warn\">-->\n<!--                        <mat-icon>remove_circle</mat-icon>-->\n<!--                    </button>-->\n<!--                </div>-->\n<!--                <br/>-->\n<!--            </div>-->\n<!--        </div>-->\n<!--        {{this.questionnaireForm.value | json}}-->\n\n<!--        <button class=\"float-right\" (click)=\"addTheme('')\" mat-raised-button  mat-mini-fab color=\"primary\">-->\n<!--            <mat-icon>add_circle</mat-icon>-->\n<!--        </button>-->\n        <br/>\n        <br/>\n        <div class=\"form-group\">\n            <mat-slide-toggle\n                    class=\"example-margin\"\n                    formControlName=\"anonymous\"\n                    checked=\"{{questionnaire?.anonymous}}\">\n                Questionnaire anonyme\n            </mat-slide-toggle>\n        </div>\n        <div class=\"form-group text-center\">\n            <button (click)=\"onNewQuestionnaire()\" [disabled]=\"loading\" class=\"btn btn-primary\">\n                <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                Valider les informations\n            </button>\n        </div>\n    </form>\n</div>\n<div class=\"container border rounded border-info mb-4 p-3\">\n    <h3>Liste des questions</h3>\n    <ul class=\"list-group\">\n        <div *ngFor=\"let question of questions\" class=\"list-group-item m-3 rounded border\">\n            <div class=\"zero-border\" [routerLink]=\"['/edit-question',idQuestionnaire, question.id]\">\n                <div>Question n°{{question.id}} : {{question.valeur}}</div>\n                <div>Type : {{question.typeQuestion}}</div>\n                <div *ngIf=\"question.isFilter\">Filtre : {{question.isFilter}}</div>\n                <div *ngIf=\"question.hasGraph\">Graphe : {{question.hasGraph}}</div>\n                <div *ngIf=\"question.isRequired\">Obligatoire : {{question.isRequired}}</div>\n            </div>\n            <div class=\"float-right \">\n                <button class=\"mx-2\" mat-button mat-raised-button color=\"primary\"  [routerLink]=\"['/show-question',idQuestionnaire, question.id]\"><mat-icon>slideshow</mat-icon> </button>\n                <button class=\"mx-2\" mat-button mat-raised-button color=\"accent\" [routerLink]=\"['/edit-question',idQuestionnaire, question.id]\"><mat-icon>update</mat-icon> </button>\n                <button class=\"mx-2\" mat-button mat-raised-button color=\"warn\" [routerLink]=\"['/edit-questionnaire', idQuestionnaire]\" (click)=\"deleteQuestion(question.id)\"><mat-icon>delete</mat-icon> </button>\n            </div>\n        </div>\n    </ul>\n    <div class=\"text-center mt-3\">\n         <button class=\"btn btn-primary mx-3\" [routerLink]=\"['/edit-question', idQuestionnaire]\">\n             Nouvelle question\n         </button>\n    </div>\n</div>\n<button class=\"btn btn-secondary float-right mx-3\" routerLink=\"'/'\">Retour à l'accueil</button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/questionnaire/questionnaire-show/questionnaire-show.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/questionnaire/questionnaire-show/questionnaire-show.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuestionnaireQuestionnaireShowQuestionnaireShowComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card m-3\">\n    <h5 class=\"card-header\">{{questionnaire?.titre}}</h5>\n        <div class=\"card-body\">\n            <form>\n                <div class=\"form\">\n                    <div *ngFor=\"let question of questions\">\n                        <div class=\"w-100\">\n                                <app-question-show [idQuestion]=\"question.id\"></app-question-show>\n                        </div>\n                    </div>\n                    <button class=\"btn btn-secondary float-right\" [routerLink]=\"['/']\">Retour à l'accueil</button>\n                </div>\n            </form >\n        </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"text-center\">Inscription</h2>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label>Prénom</label>\n        <input type=\"text\" formControlName=\"prenom\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.prenom.errors }\" />\n        <div *ngIf=\"submitted && f.prenom.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.prenom.errors.required\">Veuillez renseigner votre prénom</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label>Nom</label>\n        <input type=\"text\" formControlName=\"nom\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.nom.errors }\" />\n        <div *ngIf=\"submitted && f.nom.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.nom.errors.required\">Veuillez renseigner votre nom</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label>Nom d'utilisateur</label>\n        <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.email.errors.required\">Veuillez renseigner votre nom d'utilisateur</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label>Mot de passe</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && (f.password.errors || registerForm.errors?.notSame)}\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Veuillez renseigner votre mot de passe</div>\n            <div *ngIf=\"f.password.errors.minlength\">Le mot de passe doit contenir au moins 6 caractères</div>\n        </div>\n        <div *ngIf=\"submitted && registerForm.errors?.notSame\" class=\"invalid-feedback\">\n            <div *ngIf=\"registerForm.errors?.notSame\">Les mots de passe ne sont pas identiques</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label>Confirmation du mot de passe</label>\n        <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && (f.confirmPassword.errors || registerForm.errors?.notSame)}\" />\n        <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.confirmPassword.errors.required\">Veuillez confirmer votre nouveau mot de passe</div>\n            <div *ngIf=\"f.confirmPassword.errors.minlength\">Le mot de passe doit contenir au moins 6 caractères</div>\n        </div>\n        <div *ngIf=\"submitted && registerForm.errors?.notSame\" class=\"invalid-feedback\">\n            <div *ngIf=\"registerForm.errors?.notSame\">Les mots de passe ne sont pas identiques</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">\n            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n            S'inscrire\n        </button>\n        <a routerLink=\"/login\" class=\"btn btn-link\">Annuler</a>\n    </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/resultat/bar-chart/bar-chart.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resultat/bar-chart/bar-chart.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppResultatBarChartBarChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <div style=\"display: block\">\n        <canvas baseChart\n                [datasets]=\"barChartData\"\n                [labels]=\"barChartLabels\"\n                [options]=\"barChartOptions\"\n                [legend]=\"barChartLegend\"\n                [chartType]=\"barChartType\">\n        </canvas>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/resultat/doughnut-chart/doughnut-chart.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resultat/doughnut-chart/doughnut-chart.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppResultatDoughnutChartDoughnutChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"display: block\">\n    <canvas baseChart\n            [data]=\"doughnutChartData\"\n            [labels]=\"doughnutChartLabels\"\n            [chartType]=\"doughnutChartType\"></canvas>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/resultat/pie-chart/pie-chart.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resultat/pie-chart/pie-chart.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppResultatPieChartPieChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"display: block\">\n    <canvas baseChart\n            [data]=\"pieChartData\"\n            [labels]=\"pieChartLabels\"\n            [chartType]=\"pieChartType\"></canvas>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/resultat/resultat.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resultat/resultat.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppResultatResultatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-pie-chart></app-pie-chart>\n<app-doughnut-chart></app-doughnut-chart>\n<app-bar-chart></app-bar-chart>\n<button class=\"btn btn-secondary float-right\" >export</button>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/alert/alert.component.scss":
  /*!********************************************!*\
    !*** ./src/app/alert/alert.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAlertAlertComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/alert/alert.component.ts":
  /*!******************************************!*\
    !*** ./src/app/alert/alert.component.ts ***!
    \******************************************/

  /*! exports provided: AlertComponent */

  /***/
  function srcAppAlertAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
      return AlertComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/alert.service */
    "./src/app/services/alert.service.ts");

    var AlertComponent =
    /*#__PURE__*/

    /* Le composant d'alerte transmet les messages d'alerte au modèle chaque fois qu'un message
     * est reçu du service d'alerte. Pour ce faire, il s'abonne à la méthode getMessage() du service d'alerte,
     * qui renvoie un Observable.
     */
    function () {
      function AlertComponent(alertService) {
        _classCallCheck(this, AlertComponent);

        this.alertService = alertService;
      }

      _createClass(AlertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.subscription = this.alertService.getAlert().subscribe(function (message) {
            switch (message && message.type) {
              case 'success':
                message.cssClass = 'alert alert-success';
                break;

              case 'error':
                message.cssClass = 'alert alert-danger';
                break;
            }

            _this.message = message;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);

      return AlertComponent;
    }();

    AlertComponent.ctorParameters = function () {
      return [{
        type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]
      }];
    };

    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alert',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./alert.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/alert/alert.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./alert.component.scss */
      "./src/app/alert/alert.component.scss"))["default"]]
    })
    /* Le composant d'alerte transmet les messages d'alerte au modèle chaque fois qu'un message
     * est reçu du service d'alerte. Pour ce faire, il s'abonne à la méthode getMessage() du service d'alerte,
     * qui renvoie un Observable.
     */
    ], AlertComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: appRoutingModule, AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appRoutingModule", function () {
      return appRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./helpers/auth.guard */
    "./src/app/helpers/auth.guard.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./myaccount/myaccount.component */
    "./src/app/myaccount/myaccount.component.ts");
    /* harmony import */


    var _questionnaire_questionnaire_edit_questionnaire_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./questionnaire/questionnaire-edit/questionnaire-edit.component */
    "./src/app/questionnaire/questionnaire-edit/questionnaire-edit.component.ts");
    /* harmony import */


    var _questionnaire_questionnaire_show_questionnaire_show_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./questionnaire/questionnaire-show/questionnaire-show.component */
    "./src/app/questionnaire/questionnaire-show/questionnaire-show.component.ts");
    /* harmony import */


    var _question_question_edit_question_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./question/question-edit/question-edit.component */
    "./src/app/question/question-edit/question-edit.component.ts");
    /* harmony import */


    var _question_question_show_question_show_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./question/question-show/question-show.component */
    "./src/app/question/question-show/question-show.component.ts");
    /* harmony import */


    var _questionnaire_questionnaire_answer_questionnaire_answer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./questionnaire/questionnaire-answer/questionnaire-answer.component */
    "./src/app/questionnaire/questionnaire-answer/questionnaire-answer.component.ts");
    /* harmony import */


    var _resultat_resultat_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./resultat/resultat.component */
    "./src/app/resultat/resultat.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
    }, {
      path: 'myaccount',
      component: _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_7__["MyaccountComponent"],
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, {
      path: 'edit-questionnaire/:id',
      component: _questionnaire_questionnaire_edit_questionnaire_edit_component__WEBPACK_IMPORTED_MODULE_8__["QuestionnaireEditComponent"],
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, {
      path: 'edit-questionnaire',
      component: _questionnaire_questionnaire_edit_questionnaire_edit_component__WEBPACK_IMPORTED_MODULE_8__["QuestionnaireEditComponent"],
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, {
      path: 'show-questionnaire/:id',
      component: _questionnaire_questionnaire_show_questionnaire_show_component__WEBPACK_IMPORTED_MODULE_9__["QuestionnaireShowComponent"],
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, {
      path: 'answer/:id',
      component: _questionnaire_questionnaire_answer_questionnaire_answer_component__WEBPACK_IMPORTED_MODULE_12__["QuestionnaireAnswerComponent"]
    }, {
      path: 'edit-question/:idQuestionnaire/:idQuestion',
      component: _question_question_edit_question_edit_component__WEBPACK_IMPORTED_MODULE_10__["QuestionEditComponent"],
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, {
      path: 'edit-question/:idQuestionnaire',
      component: _question_question_edit_question_edit_component__WEBPACK_IMPORTED_MODULE_10__["QuestionEditComponent"],
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, {
      path: 'show-question/:idQuestionnaire/:idQuestion',
      component: _question_question_show_question_show_component__WEBPACK_IMPORTED_MODULE_11__["QuestionShowComponent"],
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, {
      path: 'statistiques/:id',
      component: _resultat_resultat_component__WEBPACK_IMPORTED_MODULE_13__["ResultatComponent"],
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, // sinon, redirige vers la page d'accueil
    {
      path: '**',
      redirectTo: ''
    }];

    var appRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes);

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/

    /* Le composant app est le composant racine de l'application, il définit la balise racine avec la propriété du selector de @Component
     * Il s'abonne à la variable currentUser observable dans le service d'authentification afin de pouvoir afficher / masquer de manière
     * réactive la barre de navigation principale lorsque l'utilisateur se connecte / déconnecte de l'application.
     *
     */
    function () {
      function AppComponent(router, authService) {
        var _this2 = this;

        _classCallCheck(this, AppComponent);

        this.router = router;
        this.authService = authService;
        this.authService.currentUser.subscribe(function (x) {
          return _this2.currentUser = x;
        });
      }

      _createClass(AppComponent, [{
        key: "logout",
        value: function logout() {
          this.authService.logout();
          this.router.navigate(['/login']);
        }
      }, {
        key: "myAccount",
        value: function myAccount() {
          this.router.navigate(['/myaccount']);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })
    /* Le composant app est le composant racine de l'application, il définit la balise racine avec la propriété du selector de @Component
     * Il s'abonne à la variable currentUser observable dans le service d'authentification afin de pouvoir afficher / masquer de manière
     * réactive la barre de navigation principale lorsque l'utilisateur se connecte / déconnecte de l'application.
     *
     */
    ], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _questionnaire_questionnaire_edit_questionnaire_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./questionnaire/questionnaire-edit/questionnaire-edit.component */
    "./src/app/questionnaire/questionnaire-edit/questionnaire-edit.component.ts");
    /* harmony import */


    var _questionnaire_questionnaire_show_questionnaire_show_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./questionnaire/questionnaire-show/questionnaire-show.component */
    "./src/app/questionnaire/questionnaire-show/questionnaire-show.component.ts");
    /* harmony import */


    var _alert_alert_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./alert/alert.component */
    "./src/app/alert/alert.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./helpers/jwt.interceptor */
    "./src/app/helpers/jwt.interceptor.ts");
    /* harmony import */


    var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./helpers/error.interceptor */
    "./src/app/helpers/error.interceptor.ts");
    /* harmony import */


    var _helpers_fake_backend__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./helpers/fake-backend */
    "./src/app/helpers/fake-backend.ts");
    /* harmony import */


    var _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./myaccount/myaccount.component */
    "./src/app/myaccount/myaccount.component.ts");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
    /* harmony import */


    var _resultat_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./resultat/bar-chart/bar-chart.component */
    "./src/app/resultat/bar-chart/bar-chart.component.ts");
    /* harmony import */


    var _resultat_doughnut_chart_doughnut_chart_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./resultat/doughnut-chart/doughnut-chart.component */
    "./src/app/resultat/doughnut-chart/doughnut-chart.component.ts");
    /* harmony import */


    var _resultat_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./resultat/pie-chart/pie-chart.component */
    "./src/app/resultat/pie-chart/pie-chart.component.ts");
    /* harmony import */


    var _resultat_resultat_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./resultat/resultat.component */
    "./src/app/resultat/resultat.component.ts");
    /* harmony import */


    var _question_question_edit_question_edit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./question/question-edit/question-edit.component */
    "./src/app/question/question-edit/question-edit.component.ts");
    /* harmony import */


    var _question_question_show_question_show_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./question/question-show/question-show.component */
    "./src/app/question/question-show/question-show.component.ts");
    /* harmony import */


    var _questionnaire_questionnaire_answer_questionnaire_answer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./questionnaire/questionnaire-answer/questionnaire-answer.component */
    "./src/app/questionnaire/questionnaire-answer/questionnaire-answer.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _questionnaire_questionnaire_edit_questionnaire_edit_component__WEBPACK_IMPORTED_MODULE_9__["QuestionnaireEditComponent"], _questionnaire_questionnaire_show_questionnaire_show_component__WEBPACK_IMPORTED_MODULE_10__["QuestionnaireShowComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_11__["AlertComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"], _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_19__["MyaccountComponent"], _questionnaire_questionnaire_show_questionnaire_show_component__WEBPACK_IMPORTED_MODULE_10__["QuestionnaireShowComponent"], _resultat_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_23__["BarChartComponent"], _resultat_doughnut_chart_doughnut_chart_component__WEBPACK_IMPORTED_MODULE_24__["DoughnutChartComponent"], _resultat_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_25__["PieChartComponent"], _resultat_resultat_component__WEBPACK_IMPORTED_MODULE_26__["ResultatComponent"], _question_question_edit_question_edit_component__WEBPACK_IMPORTED_MODULE_27__["QuestionEditComponent"], _question_question_show_question_show_component__WEBPACK_IMPORTED_MODULE_28__["QuestionShowComponent"], _questionnaire_questionnaire_answer_questionnaire_answer_component__WEBPACK_IMPORTED_MODULE_29__["QuestionnaireAnswerComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_22__["ChartsModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"],
        useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_16__["JwtInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"],
        useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_17__["ErrorInterceptor"],
        multi: true
      }, // création de fausses données en attendant le back ...
      _helpers_fake_backend__WEBPACK_IMPORTED_MODULE_18__["fakeBackendProvider"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/helpers/auth.guard.ts":
  /*!***************************************!*\
    !*** ./src/app/helpers/auth.guard.ts ***!
    \***************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppHelpersAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    // La garde d'authentification est utilisée pour empêcher les utilisateurs non authentifiés
    // d'accéder aux pages réservées aux utilisateurs connectés.
    function () {
      function AuthGuard(router, authService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.authService = authService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var currentUser = this.authService.currentUserValue;

          if (currentUser) {
            // Autorisé donc retourne vrai
            return true;
          } // Non connecté donc redirection vers la page de connexion avec l'url retourné


          this.router.navigate(['/login'], {
            queryParams: {
              returnUrl: state.url
            }
          });
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }) // La garde d'authentification est utilisée pour empêcher les utilisateurs non authentifiés
    // d'accéder aux pages réservées aux utilisateurs connectés.
    ], AuthGuard);
    /***/
  },

  /***/
  "./src/app/helpers/error.interceptor.ts":
  /*!**********************************************!*\
    !*** ./src/app/helpers/error.interceptor.ts ***!
    \**********************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcAppHelpersErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var ErrorInterceptor =
    /*#__PURE__*/

    /* L'intercepteur d'erreur intercepte les réponses http de l'API pour vérifier s'il y a eu des erreurs.
     * S'il y a une réponse 401 non autorisée, l'utilisateur est automatiquement déconnecté de l'application,
     * toutes les autres erreurs sont renvoyées au service appelant afin qu'une alerte puisse être affichée à l'utilisateur
     */
    function () {
      function ErrorInterceptor(authService) {
        _classCallCheck(this, ErrorInterceptor);

        this.authService = authService;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this3 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
              // Déconnexion automatique si la réponse de l'API est 401
              _this3.authService.logout();

              location.reload(true);
            }

            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    /* L'intercepteur d'erreur intercepte les réponses http de l'API pour vérifier s'il y a eu des erreurs.
     * S'il y a une réponse 401 non autorisée, l'utilisateur est automatiquement déconnecté de l'application,
     * toutes les autres erreurs sont renvoyées au service appelant afin qu'une alerte puisse être affichée à l'utilisateur
     */
    ], ErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/helpers/fake-backend.ts":
  /*!*****************************************!*\
    !*** ./src/app/helpers/fake-backend.ts ***!
    \*****************************************/

  /*! exports provided: FakeBackendInterceptor, fakeBackendProvider */

  /***/
  function srcAppHelpersFakeBackendTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () {
      return FakeBackendInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () {
      return fakeBackendProvider;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var users = JSON.parse(localStorage.getItem('users')) || [];
    var questionnaires = JSON.parse(localStorage.getItem('questionnaires')) || [];
    var questions = JSON.parse(localStorage.getItem('questions')) || [];
    var propositions = JSON.parse(localStorage.getItem('propositions')) || [];
    var themes = JSON.parse(localStorage.getItem('themes')) || [];

    var FakeBackendInterceptor = /*#__PURE__*/function () {
      function FakeBackendInterceptor() {
        _classCallCheck(this, FakeBackendInterceptor);
      }

      _createClass(FakeBackendInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var url = request.url,
              method = request.method,
              headers = request.headers,
              body = request.body; // wrap in delayed observable to simulate server api call

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(handleRoute)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());

          function handleRoute() {
            console.log(method + ' : ' + url);

            switch (true) {
              // // USERS
              // case url.endsWith('/users/authenticate') && method === 'POST':
              //     return authenticate();
              // case url.endsWith('/users/register') && method === 'POST':
              //     return registerUser();
              // case url.match(/\/users\/update\/\d+$/) && method === 'POST':
              //     return updateUser();
              // case url.endsWith('/users') && method === 'GET':
              //     return getUsers();
              // case url.match(/\/users\/\d+$/) && method === 'DELETE':
              //     return deleteUser();
              //
              // // QUESTIONNAIRES
              // case url.match(/\/questionnaires\/update\/\d+$/) && method === 'POST':
              //     return updateQuestionnaire();
              // case url.endsWith('/questionnaires/register') && method === 'POST':
              //     return registerQuestionnaire();
              // case url.match(/\/questionnaires\/all\/\d+$/) && method === 'GET':
              //     return getQuestionnairesByIdUser();
              // case url.match(/\/questionnaires\/\d+$/) && method === 'GET':
              //     return getQuestionnaireById();
              // case url.match(/\/questionnaires\/\d+$/) && method === 'DELETE':
              //     return deleteQuestionnaire();
              //
              // // QUESTIONS
              // case url.match(/\/questions\/update\/\d+$/) && method === 'POST':
              //     return updateQuestion();
              // case url.endsWith('/questions/create') && method === 'POST':
              //     return createQuestion();
              // case url.match(/\/questions\/all\/\d+$/) && method === 'GET':
              //     return getQuestionsByIdQuestionnaire();
              // case url.match(/\/questions\/read\/\d+$/) && method === 'GET':
              //     return getQuestionById();
              // case url.match(/\/questions\/\d+$/) && method === 'DELETE':
              //     return deleteQuestion();
              //
              // // PROPOSITIONS
              // case url.endsWith('/propositions/') && method === 'POST':
              //     return createProposition();
              // case url.match(/\/propositions\/\d+$/) && method === 'GET':
              //     return getPropositions();
              // case url.match(/\/propositions\/\d+$/) && method === 'DELETE':
              //     return deletePropositions();
              //
              // // THEMES
              // case url.endsWith('/themes/') && method === 'POST':
              //     return createTheme();
              // case url.match(/\/themes\/\d+$/) && method === 'GET':
              //     return getThemes();
              // case url.match(/\/themes\/\d+$/) && method === 'DELETE':
              //     return deleteThemes();
              //
              default:
                return next.handle(request);
            }
          } //
          //     // fonctions de routage
          //
          //     // ----------------------------
          //     // FONCTIONS USER
          //     // ----------------------------
          //
          //     // Valide ou non l'authentification
          //     function authenticate() {
          //         const { email, password } = body;
          //         const user = users.find( x => x.email === email && x.password === password);
          //         if (!user) {
          //             return error('Le nom d\'utilisateur ou le mot de passe est incorrect.');
          //         }
          //         return ok({
          //             id: user.id,
          //             email: user.email,
          //             prenom: user.prenom,
          //             nom: user.nom,
          //             token: 'fake-jwt-token'
          //         });
          //     }
          //
          //     // Enregistre l'utilisateur
          //     function registerUser() {
          //         const user = body;
          //         if (users.find(x => x.email === user.email)) {
          //             return error('Le nom d\'utilisateur "' + user.email + '" est déjà pris. Veuillez en choisir un autre.');
          //         }
          //         user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
          //         users.push(user);
          //         localStorage.setItem('users', JSON.stringify(users));
          //         return ok();
          //     }
          //
          //     // Met à jour l'utilisateur
          //     function updateUser() {
          //         const user = body;
          //
          //         // dans un 1er temps, retire l'utilisateur de la liste via son id
          //         const updatedUser = users.find(x => x.id === idFromUrl());
          //         users = users.filter(x => x.id !== idFromUrl());
          //
          //         // pour chacun de ses champs (sauf id) on met à jour seulement si une valeur est renseignée dans le formulaire
          //         user.id = idFromUrl();
          //         user.prenom = user.prenom.length ? user.prenom : updatedUser.prenom;
          //         user.nom = user.nom.length ? user.nom : updatedUser.nom;
          //         user.email = user.email.length ? user.email : updatedUser.email;
          //         user.password = user.email.password ? user.password : updatedUser.password;
          //
          //         // puis on ajoute ce même utilisateur modifié en gardant le même id
          //         users.push(user);
          //         localStorage.setItem('users', JSON.stringify(users));
          //         localStorage.setItem('currentUser', JSON.stringify(user));
          //
          //         return ok();
          //     }
          //
          //     // Récupère l'ensemble des utilisateurs
          //     function getUsers() {
          //         checkLog();
          //         return ok(users);
          //     }
          //
          //     // Supprime un utilisateur
          //     function deleteUser() {
          //         checkLog();
          //         users = users.filter(x => x.id !== idFromUrl());
          //         localStorage.setItem('users', JSON.stringify(users));
          //         return ok();
          //     }
          //
          //     // ----------------------------
          //     // FONCTIONS QUESTIONNAIRE
          //     // ----------------------------
          //
          //     // Récupère tous les questionnaires créés par l'utilisateur en cours
          //     function getQuestionnairesByIdUser() {
          //         checkLog();
          //         return ok(questionnaires.filter(x => x.administrateur.id == idFromUrl()));
          //     }
          //
          //     // Récupère le questionnaire à partir de son id
          //     function getQuestionnaireById() {
          //         return ok(questionnaires.find(x => x.id === idFromUrl()));
          //     }
          //
          //     // Enregistre un questionnaire
          //     function registerQuestionnaire() {
          //         checkLog();
          //         const questionnaire = body;
          //         questionnaire.id = questionnaires.length ? Math.max(...questionnaires.map(x => x.id)) + 1 : 1;
          //         questionnaires.push(questionnaire);
          //         console.log('Questionnaire créé');
          //         console.log('id : ' + questionnaire.id);
          //         console.log('idUser : ' + questionnaire.administrateur.id);
          //         console.log('titre : ' + questionnaire.titre);
          //         console.log('description : ' + questionnaire.description);
          //         console.log('merci : ' + questionnaire.msgMerci);
          //         console.log('anonymous : ' + questionnaire.anonymous);
          //         console.log('dateCreation : ' + questionnaire.dateCreation);
          //         console.log('datePeremption : ' + questionnaire.datePeremption);
          //
          //         localStorage.setItem('questionnaires', JSON.stringify(questionnaires));
          //         return ok();
          //     }
          //
          //     // Met à jour le questionnaire
          //     function updateQuestionnaire() {
          //         checkLog();
          //         const questionnaire = body;
          //         // dans un 1er temps, retire le questionnaire de la liste via son id
          //         const updatedQuestionnaire = questionnaires.find(x => x.id === idFromUrl());
          //         questionnaires = questionnaires.filter(x => x.id !== idFromUrl());
          //
          //         // pour chacun de ses champs non booléen (sauf id) on met à jour seulement si une valeur est renseignée dans le formulaire
          //         // pour les booléens, on laisse tel quel
          //         questionnaire.id = idFromUrl();
          //         questionnaire.titre = questionnaire.titre.length ? questionnaire.titre : updatedQuestionnaire.titre;
          //         questionnaire.description = questionnaire.description.length ? questionnaire.description : updatedQuestionnaire.description;
          //         console.log('1 : ' + questionnaire.merci);
          //         questionnaire.merci = questionnaire.merci.length ? questionnaire.merci : updatedQuestionnaire.merci;
          //         console.log('1 : ' + questionnaire.merci);
          //         questionnaire.administrateur.id = questionnaire.administrateur.id !== undefined ? questionnaire.administrateur.id : updatedQuestionnaire.administrateur.id;
          //         questionnaire.anonymous = questionnaire.anonymous;
          //
          //         console.log('Questionnaire mis à jour');
          //         console.log('id : ' + questionnaire.id);
          //         console.log('idUser : ' + questionnaire.idUser);
          //         console.log('titre : ' + questionnaire.titre);
          //         console.log('description : ' + questionnaire.description);
          //         console.log('merci : ' + questionnaire.merci);
          //         console.log('anonymous : ' + questionnaire.anonymous);
          //         console.log('dateCreation : ' + questionnaire.dateCreation);
          //         console.log('datePeremption : ' + questionnaire.datePeremption);
          //
          //         // puis on ajoute ce même questionnaire modifié en gardant le même id
          //         questionnaires.push(questionnaire);
          //         localStorage.setItem('questionnaires', JSON.stringify(questionnaires));
          //         return ok();
          //     }
          //
          //     // Supprime un questionnaire
          //     function deleteQuestionnaire() {
          //         checkLog();
          //         // supprime le questionnaire et les questions associées
          //         questionnaires = questionnaires.filter(x => x.id !== idFromUrl());
          //         questions = questions.filter(x => x.idQuestionnaire !== idFromUrl());
          //         localStorage.setItem('questions', JSON.stringify(questions));
          //         localStorage.setItem('questionnaires', JSON.stringify(questionnaires));
          //         return ok();
          //     }
          //
          //     // FONCTIONS QUESTIONS
          //     function createQuestion() {
          //         checkLog();
          //         const question = body;
          //         question.id = questions.length ? Math.max(...questions.map(x => x.id)) + 1 : 1;
          //         console.log('Nouvel IDQuestion : ' + question.id);
          //         questions.push(question);
          //         console.log('Question créée');
          //         console.log('id : ' + question.id);
          //         console.log('idQuestionnaire : ' + question.idQuestionnaire);
          //         console.log('idTheme : ' + question.idTheme);
          //         console.log('valeur : ' + question.valeur);
          //         console.log('type : ' + question.type);
          //         console.log('isRequired : ' + question.isRequired);
          //         console.log('isFilter : ' + question.isFilter);
          //         console.log('hasGraph : ' + question.hasGraph);
          //         console.log('order : ' + question.order);
          //
          //         localStorage.setItem('questions', JSON.stringify(questions));
          //         return ok();
          //     }
          //
          //     function  updateQuestion() {
          //         checkLog();
          //         const question = body;
          //         // dans un 1er temps, retire la question de la liste via son id
          //         const updatedQuestion = questions.find(x => x.id === idFromUrl());
          //         questions = questions.filter(x => x.id !== idFromUrl());
          //
          //         // pour chacun de ses champs non booléens (sauf id) on met à jour seulement si une valeur est renseignée dans le formulaire
          //         // pour les booléens on laisse tel quel
          //         question.id = idFromUrl();
          //         question.valeur = question.valeur.length ? question.valeur : updatedQuestion.valeur;
          //         question.type = question.type.length ? question.type : updatedQuestion.type;
          //         question.idTheme = question.idTheme !== undefined ? question.idTheme : updatedQuestion.idTheme;
          //         question.idQuestionnaire = question.idQuestionnaire !== undefined ? question.idQuestionnaire : updatedQuestion.idQuestionnaire;
          //
          //         // puis on ajoute cette même question modifiée en gardant le même id
          //         questions.push(question);
          //
          //         console.log('Question mise à jour');
          //         console.log('id : ' + question.id);
          //         console.log('idQuestionnaire : ' + question.idQuestionnaire);
          //         console.log('idTheme : ' + question.idTheme);
          //         console.log('valeur : ' + question.valeur);
          //         console.log('type : ' + question.type);
          //         console.log('isRequired : ' + question.isRequired);
          //         console.log('isFilter : ' + question.isFilter);
          //         console.log('hasGraph : ' + question.hasGraph);
          //         console.log('order : ' + question.order);
          //
          //         localStorage.setItem('questions', JSON.stringify(questions));
          //         return ok();
          //     }
          //
          //     function deleteQuestion() {
          //         checkLog();
          //         questions = questions.filter(x => x.id !== idFromUrl());
          //         propositions = propositions.filter(x => x.idQuestion !== idFromUrl());
          //         // supprime la question ainsi que les propositions associées
          //         localStorage.setItem('propositions', JSON.stringify(propositions));
          //         localStorage.setItem('questions', JSON.stringify(questions));
          //         return ok();
          //     }
          //
          //     function getQuestionById() {
          //         return ok(questions.find(x => x.id === idFromUrl()));
          //     }
          //
          //     function getQuestionsByIdQuestionnaire() {
          //         return ok(questions.filter(x => x.idQuestionnaire == idFromUrl()));
          //     }
          //
          //     // FONCTIONS PROPOSITIONS
          //
          //     function getPropositions() {
          //         return ok(propositions.filter(x => x.idQuestion == idFromUrl()));
          //     }
          //
          //     function createProposition() {
          //         checkLog();
          //         const proposition = body;
          //         proposition.id = propositions.length ? Math.max(...propositions.map(x => x.id)) + 1 : 1;
          //         propositions.push(proposition);
          //         console.log('Proposition créée');
          //         console.log('id : ' + proposition.id);
          //         console.log('idQuestion : ' + proposition.idQuestion);
          //         console.log('valeur : ' + proposition.valeur);
          //         console.log('order : ' + proposition.order);
          //         localStorage.setItem('propositions', JSON.stringify(propositions));
          //         return ok();
          //     }
          //
          //     function deletePropositions() {
          //         checkLog();
          //         propositions = propositions.filter(x => x.idQuestion != idFromUrl());
          //         localStorage.setItem('propositions', JSON.stringify(propositions));
          //         return ok();
          //     }
          //
          //
          //     // FONCTIONS THEMES
          //
          //     function getThemes() {
          //         return ok(themes.filter(x => x.idQuestionnaire == idFromUrl()));
          //     }
          //
          //     function createTheme() {
          //         checkLog();
          //         const theme = body;
          //         theme.id = themes.length ? Math.max(...themes.map(x => x.id)) + 1 : 1;
          //         themes.push(theme);
          //         localStorage.setItem('themes', JSON.stringify(themes));
          //         return ok();
          //     }
          //
          //     function deleteThemes() {
          //         checkLog();
          //         themes = themes.filter(x => x.idQuestionnaire !== idFromUrl());
          //         localStorage.setItem('themes', JSON.stringify(themes));
          //         return ok();
          //     }
          //
          //     // helper functions
          //
          //     function ok(body?) {
          //         return of(new HttpResponse({ status: 200, body }));
          //     }
          //
          //     function error(message) {
          //         return throwError({error: { message }});
          //     }
          //
          //     function unauthorized() {
          //         return throwError({ status: 401, error: { message: 'Unauthorized' } });
          //     }
          //
          //     function checkLog() {
          //         if (!isLoggedIn()) {
          //             return unauthorized();
          //         }
          //     }
          //
          //     function isLoggedIn() {
          //         return headers.get('Authorization') === 'Bearer fake-jwt-token';
          //     }
          //
          //     function idFromUrl() {
          //         const urlParts = url.split('/');
          //         return parseInt(urlParts[urlParts.length - 1]);
          //     }

        }
      }]);

      return FakeBackendInterceptor;
    }();

    FakeBackendInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], FakeBackendInterceptor);
    var fakeBackendProvider = {
      // use fake backend in place of Http service for backend-less development
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
      useClass: FakeBackendInterceptor,
      multi: true
    };
    /***/
  },

  /***/
  "./src/app/helpers/jwt.interceptor.ts":
  /*!********************************************!*\
    !*** ./src/app/helpers/jwt.interceptor.ts ***!
    \********************************************/

  /*! exports provided: JwtInterceptor */

  /***/
  function srcAppHelpersJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return JwtInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var JwtInterceptor =
    /*#__PURE__*/

    /* L'intercepteur JWT intercepte les demandes http de l'application pour ajouter un jeton d'authentification HWT
     * à l'en-tête Authorization si l'utilisateur est connecté.
     */
    function () {
      function JwtInterceptor(authService) {
        _classCallCheck(this, JwtInterceptor);

        this.authService = authService;
      }

      _createClass(JwtInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          // add authorization header with jwt token if available
          var currentUser = this.authService.currentUserValue;

          if (currentUser && currentUser.token) {
            request = request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(currentUser.token)
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return JwtInterceptor;
    }();

    JwtInterceptor.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    /* L'intercepteur JWT intercepte les demandes http de l'application pour ajouter un jeton d'authentification HWT
     * à l'en-tête Authorization si l'utilisateur est connecté.
     */
    ], JwtInterceptor);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_questionnaire_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/questionnaire.service */
    "./src/app/services/questionnaire.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_question_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/question.service */
    "./src/app/services/question.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var HomeComponent =
    /*#__PURE__*/
    // Le composant home contient la logique permettant d'afficher l'utilisateur actuel ainsi que la liste de tous ses questionnaires
    function () {
      function HomeComponent(authService, userService, questionnaireService, questionService, router) {
        _classCallCheck(this, HomeComponent);

        this.authService = authService;
        this.userService = userService;
        this.questionnaireService = questionnaireService;
        this.questionService = questionService;
        this.router = router;
        this.users = [];
        this.questionnaires = [];
        this.currentUser = this.authService.currentUserValue;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadAllUsers();
          this.loadAllQuestionnaires();
        } // provisoire, à supprimer par la suite

      }, {
        key: "loadAllUsers",
        value: function loadAllUsers() {
          var _this4 = this;

          this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (users) {
            return _this4.users = users;
          });
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(id) {
          var _this5 = this;

          this.userService["delete"](id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function () {
            return _this5.loadAllUsers();
          });
        } // Charge la liste de questionnaires en fonction de l'id de l'utilisateur

      }, {
        key: "loadAllQuestionnaires",
        value: function loadAllQuestionnaires() {
          var _this6 = this;

          this.questionnaireService.getAllByIdUser(this.currentUser.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (questionnaires) {
            _this6.questionnaires = questionnaires;

            _this6.loadNbQuestions();
          });
        }
      }, {
        key: "deleteQuestionnaire",
        value: function deleteQuestionnaire(id) {
          var _this7 = this;

          this.questionnaireService["delete"](id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function () {
            return _this7.loadAllQuestionnaires();
          });
        }
      }, {
        key: "loadNbQuestions",
        value: function loadNbQuestions() {
          var _this8 = this;

          var _iterator = _createForOfIteratorHelper(this.questionnaires),
              _step;

          try {
            var _loop = function _loop() {
              var questionnaire = _step.value;

              _this8.questionService.readAllByIdQuestionnaire(questionnaire.id).subscribe(function (questions) {
                questionnaire.nbQuestions = questions.length;
              });
            };

            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _services_questionnaire_service__WEBPACK_IMPORTED_MODULE_5__["QuestionnaireService"]
      }, {
        type: _services_question_service__WEBPACK_IMPORTED_MODULE_7__["QuestionService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss"))["default"]]
    }) // Le composant home contient la logique permettant d'afficher l'utilisateur actuel ainsi que la liste de tous ses questionnaires
    ], HomeComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var LoginComponent =
    /*#__PURE__*/

    /* Le composant de connexion utilise le service d'authentification pour se connecter à l'application.
     * Si l'utilisateur est déjà connecté, il est automatiquement redirigé vers la page d'accueil.
     * L'objet loginForm: FormGroup définit les contrôles et les validateurs du formulaires et est utilisé pour accéder
     * aux données entrées dans le formulaire.
     */
    function () {
      function LoginComponent(formBuilder, route, router, authService, alertService) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false; // Redirige vers la page d'accueil si l'utilisateur est déjà connecté

        if (this.authService.currentUserValue) {
          this.router.navigate(['/']);
        }
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }); // récupère l'url de retour à partir des paramètres ou par défaut à '/'

          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        } // accès plus facile aux champs du formulaire

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this9 = this;

          this.submitted = true; // réinitialise les alertes lors de la soumission du formulaire

          this.alertService.clear(); // s'arrête ici si le formulaire n'est pas valide

          if (this.loginForm.invalid) {
            return;
          }

          this.loading = true;
          this.authService.login(this.f.email.value, this.f.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (date) {
            _this9.router.navigate([_this9.returnUrl]);
          }, function (error) {
            _this9.alertService.error(error);

            _this9.loading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login.component.scss"))["default"]]
    })
    /* Le composant de connexion utilise le service d'authentification pour se connecter à l'application.
     * Si l'utilisateur est déjà connecté, il est automatiquement redirigé vers la page d'accueil.
     * L'objet loginForm: FormGroup définit les contrôles et les validateurs du formulaires et est utilisé pour accéder
     * aux données entrées dans le formulaire.
     */
    ], LoginComponent);
    /***/
  },

  /***/
  "./src/app/models/proposition.ts":
  /*!***************************************!*\
    !*** ./src/app/models/proposition.ts ***!
    \***************************************/

  /*! exports provided: Proposition */

  /***/
  function srcAppModelsPropositionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Proposition", function () {
      return Proposition;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Proposition = function Proposition() {
      _classCallCheck(this, Proposition);
    };
    /***/

  },

  /***/
  "./src/app/models/questionnaire.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/questionnaire.ts ***!
    \*****************************************/

  /*! exports provided: Questionnaire */

  /***/
  function srcAppModelsQuestionnaireTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Questionnaire", function () {
      return Questionnaire;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Questionnaire = /*#__PURE__*/function () {
      function Questionnaire() {
        _classCallCheck(this, Questionnaire);
      }

      _createClass(Questionnaire, [{
        key: "toString",
        value: function toString() {
          console.log('--- QUESTIONNAIRE ---');
          console.log('id: ' + this.id);
          console.log('idUser: ' + this.idUser);
          console.log('titre: ' + this.titre);
          console.log('description: ' + this.description);
          console.log('merci: ' + this.merci);
          console.log('anonymous: ' + this.anonymous);
          console.log('administrateur: ' + this.administrateur);
          console.log('dateCreation: ' + this.dateCreation);
          console.log('datePeremption: ' + this.datePeremption);
          console.log('url: ' + this.url);
        }
      }]);

      return Questionnaire;
    }();
    /***/

  },

  /***/
  "./src/app/models/user.ts":
  /*!********************************!*\
    !*** ./src/app/models/user.ts ***!
    \********************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./src/app/myaccount/myaccount.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/myaccount/myaccount.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyaccountMyaccountComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215YWNjb3VudC9teWFjY291bnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/myaccount/myaccount.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/myaccount/myaccount.component.ts ***!
    \**************************************************/

  /*! exports provided: MyaccountComponent */

  /***/
  function srcAppMyaccountMyaccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyaccountComponent", function () {
      return MyaccountComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_questionnaire_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/questionnaire.service */
    "./src/app/services/questionnaire.service.ts");
    /* harmony import */


    var _services_question_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/question.service */
    "./src/app/services/question.service.ts");

    var MyaccountComponent = /*#__PURE__*/function () {
      function MyaccountComponent(formBuilder, authService, userService, alertService, questionnaireService, questionService, router) {
        _classCallCheck(this, MyaccountComponent);

        this.formBuilder = formBuilder;
        this.authService = authService;
        this.userService = userService;
        this.alertService = alertService;
        this.questionnaireService = questionnaireService;
        this.questionService = questionService;
        this.router = router;
        this.loading = false;
        this.submitted = false;

        this.checkPasswords = function (group) {
          var pass = group.get('password').value;
          var confirmPass = group.get('confirmPassword').value;
          return pass === confirmPass ? null : {
            notSame: true
          };
        };

        this.currentUser = this.authService.currentUserValue;
      }

      _createClass(MyaccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.updateUserForm = this.formBuilder.group({
            prenom: [this.currentUser.prenom],
            nom: [this.currentUser.nom],
            email: [this.currentUser.email],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]
          }, {
            validators: this.checkPasswords
          });
          this.nbQuestionsCreees = 0;
          this.questionnaireService.getAllByIdUser(this.currentUser.id).subscribe(function (questionnaires) {
            _this10.nbQuestionnairesCrees = questionnaires.length;

            var _iterator2 = _createForOfIteratorHelper(questionnaires),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var questionnaire = _step2.value;

                _this10.questionService.readAllByIdQuestionnaire(questionnaire.id).subscribe(function (questions) {
                  return _this10.nbQuestionsCreees += questions.length;
                });
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          });
        } // accès simplifié aux champs du formulaire

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this11 = this;

          this.submitted = true; // réinitialise les alertes lors de la soumission du formulaire

          this.alertService.clear(); // s'arrête ici si le formulaire est invalide

          if (this.updateUserForm.invalid) {
            return;
          }

          delete this.updateUserForm.value.confirmPassword; // modifie l'utilisateur actuel

          this.userService.update(this.currentUser.id, this.updateUserForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (data) {
            _this11.alertService.success('Modifications enregistrées', true);

            _this11.currentUser = _this11.authService.currentUserValue;
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
          this.router.navigate(['/login']);
        }
      }, {
        key: "deleteAccount",
        value: function deleteAccount() {
          var _this12 = this;

          if (confirm('Etes-vous sûr de supprimer définitivement votre compte?')) {
            this.userService["delete"](this.authService.currentUserValue.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function () {
              return _this12.logout();
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.updateUserForm.controls;
        }
      }]);

      return MyaccountComponent;
    }();

    MyaccountComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
      }, {
        type: _services_questionnaire_service__WEBPACK_IMPORTED_MODULE_8__["QuestionnaireService"]
      }, {
        type: _services_question_service__WEBPACK_IMPORTED_MODULE_9__["QuestionService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    MyaccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-myaccount',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./myaccount.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/myaccount/myaccount.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./myaccount.component.scss */
      "./src/app/myaccount/myaccount.component.scss"))["default"]]
    })], MyaccountComponent);
    /***/
  },

  /***/
  "./src/app/question/question-edit/question-edit.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/question/question-edit/question-edit.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuestionQuestionEditQuestionEditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".button-custom {\n  border: 3px solid darkblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2V0dWRpYW50L3hpbmFwcm8vQmFyb21ldHJlLW1hbmFnZXJpYWwvRnJvbnQvc3JjL2FwcC9xdWVzdGlvbi9xdWVzdGlvbi1lZGl0L3F1ZXN0aW9uLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3F1ZXN0aW9uL3F1ZXN0aW9uLWVkaXQvcXVlc3Rpb24tZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbi9xdWVzdGlvbi1lZGl0L3F1ZXN0aW9uLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWN1c3RvbXtcbiAgYm9yZGVyOiAzcHggc29saWQgZGFya2JsdWU7XG59XG5cbiIsIi5idXR0b24tY3VzdG9tIHtcbiAgYm9yZGVyOiAzcHggc29saWQgZGFya2JsdWU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/question/question-edit/question-edit.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/question/question-edit/question-edit.component.ts ***!
    \*******************************************************************/

  /*! exports provided: QuestionEditComponent */

  /***/
  function srcAppQuestionQuestionEditQuestionEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionEditComponent", function () {
      return QuestionEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/question.service */
    "./src/app/services/question.service.ts");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _services_questionnaire_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/questionnaire.service */
    "./src/app/services/questionnaire.service.ts");

    var QuestionEditComponent = /*#__PURE__*/function () {
      function QuestionEditComponent(formBuilder, questionService, questionnaireService, alertService, authService, route, router, location) {
        _classCallCheck(this, QuestionEditComponent);

        this.formBuilder = formBuilder;
        this.questionService = questionService;
        this.questionnaireService = questionnaireService;
        this.alertService = alertService;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.submitted = false; // themes = [];

        this.loading = false;
      }

      _createClass(QuestionEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          // Récupère les identifiants du questionnaire et de la question via l'url
          this.idQuestionnaire = this.route.snapshot.params.idQuestionnaire;
          this.idQuestion = this.route.snapshot.params.idQuestion;
          this.questionnaireService.getById(this.idQuestionnaire).subscribe(function (questionnaire) {
            if (questionnaire === null) {
              _this13.alertService.clear();

              _this13.alertService.error('Le questionnaire demandé n\'existe pas. Retour au menu principal.', true);

              _this13.router.navigate(['/']);
            }
          });
          this.questionForm = this.formBuilder.group({
            idQuestionnaire: [this.idQuestionnaire],
            valeur: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            typeQuestion: [''],
            // idTheme: [null, Validators.required],
            isRequired: [false],
            isFilter: [false],
            hasGraph: [false],
            propositions: this.formBuilder.array([])
          }); // this.loadAllThemes(this.idQuestionnaire);
          // en cas de modification, on renseigne dans le formulaire les informations déjà présentes

          if (this.idQuestion !== undefined) {
            this.modification = true;
            this.questionService.read(this.idQuestion).subscribe(function (question) {
              if (question !== null) {
                _this13.question = question;
                _this13.typeQuestion = question.typeQuestion;
                _this13.questionForm = _this13.formBuilder.group({
                  idQuestionnaire: [_this13.idQuestionnaire],
                  valeur: [question.valeur, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                  typeQuestion: [question.typeQuestion, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                  // idTheme: [question.idTheme, Validators.required],
                  isRequired: [question.isRequired, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                  isFilter: [question.isFilter, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                  hasGraph: [question.hasGraph, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                  propositions: _this13.formBuilder.array([])
                });

                _this13.question.propositions.forEach(function (item) {
                  _this13.addPropositions(item.valeur);
                });
              } else {
                _this13.alertService.clear();

                _this13.alertService.error('La question demandée n\'existe pas. Retour au questionnaire.', true);

                _this13.router.navigate(['/edit-questionnaire', _this13.idQuestionnaire]);
              }
            }); // sinon, on charge deux propositions vides pour commencer
          } else {
            this.addPropositions('');
            this.addPropositions('');
          }
        } // accès simplifié aux champs du formulaire

      }, {
        key: "addPropositions",
        value: function addPropositions(value) {
          this.propositions.push(this.formBuilder.group({
            valeur: value === null ? '' : value
          }));
        }
      }, {
        key: "removeProposition",
        value: function removeProposition(i) {
          this.propositions.removeAt(i);
        } // loadAllThemes(idQuestionnaire: number) {
        //     this.themes.push('Thème A');
        //     this.themes.push('Thème B');
        //     this.themes.push('Thème C');
        // }

      }, {
        key: "onNewQuestion",
        value: function onNewQuestion() {
          var _this14 = this;

          this.questionForm.value.typeQuestion = this.typeQuestion;
          console.log(this.questionForm.value);
          this.submitted = true; // réinitialise les alertes lors de la soumission du formulaire

          this.alertService.clear(); // s'arrête ici si le formulaire est invalide ; cas particulier pour le typeQuestion...

          if (this.questionForm.invalid || this.typeQuestion === undefined) {
            return;
          }

          this.loading = true; // enregistre le nouveau questionnaire

          if (this.modification) {
            this.questionService.update(this.idQuestion, this.questionForm.value, this.propositions.value).subscribe(function (data) {
              _this14.alertService.success('Question enregistrée', true);
            }, function (error) {
              _this14.alertService.error(error);
            });
          } else {
            this.questionService.create(this.questionForm.value, this.propositions.value).subscribe(function (data) {
              _this14.alertService.success('Question enregistrée', true);
            }, function (error) {
              _this14.alertService.error(error);
            });
          } // ci-dessous, géré par le back
          // this.propositionService.deleteAll(this.idQuestion).subscribe();
          // for (let i = 0; i < this.propositions.length; i++) {
          //   const p = new Proposition();
          //   p.idQuestion = this.idQuestion;
          //   p.libelle = this.propositions.value[i].libelle;
          //   p.order = i + 1;
          //   this.propositionService.create(p).subscribe();
          // }


          this.router.navigate(['/edit-questionnaire', this.idQuestionnaire]);
          this.loading = false;
        }
      }, {
        key: "addCheckBox",
        value: function addCheckBox() {
          this.typeQuestion = 'CHECKBOX';

          if (this.propositions.length === 0) {
            this.addPropositions('');
            this.addPropositions('');
          }
        }
      }, {
        key: "addRadioBtn",
        value: function addRadioBtn() {
          this.typeQuestion = 'RADIO';

          if (this.propositions.length === 0) {
            this.addPropositions('');
            this.addPropositions('');
          }
        }
      }, {
        key: "addSelect",
        value: function addSelect() {
          this.typeQuestion = 'COMBOBOX';

          if (this.propositions.length === 0) {
            this.addPropositions('');
            this.addPropositions('');
          }
        }
      }, {
        key: "addDatePicker",
        value: function addDatePicker() {
          this.typeQuestion = 'DATE';
          this.propositions.clear();
        }
      }, {
        key: "addInput",
        value: function addInput() {
          this.typeQuestion = 'OUVERT';
          this.propositions.clear();
        }
      }, {
        key: "backClicked",
        value: function backClicked() {
          this.location.back();
        }
      }, {
        key: "f",
        get: function get() {
          return this.questionForm.controls;
        }
      }, {
        key: "propositions",
        get: function get() {
          return this.questionForm.get('propositions');
        }
      }]);

      return QuestionEditComponent;
    }();

    QuestionEditComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"]
      }, {
        type: _services_questionnaire_service__WEBPACK_IMPORTED_MODULE_8__["QuestionnaireService"]
      }, {
        type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]
      }];
    };

    QuestionEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-question-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./question-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/question/question-edit/question-edit.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./question-edit.component.scss */
      "./src/app/question/question-edit/question-edit.component.scss"))["default"]]
    })], QuestionEditComponent);
    /***/
  },

  /***/
  "./src/app/question/question-show/question-show.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/question/question-show/question-show.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuestionQuestionShowQuestionShowComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uL3F1ZXN0aW9uLXNob3cvcXVlc3Rpb24tc2hvdy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/question/question-show/question-show.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/question/question-show/question-show.component.ts ***!
    \*******************************************************************/

  /*! exports provided: QuestionShowComponent */

  /***/
  function srcAppQuestionQuestionShowQuestionShowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionShowComponent", function () {
      return QuestionShowComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/question.service */
    "./src/app/services/question.service.ts");

    var QuestionShowComponent = /*#__PURE__*/function () {
      function QuestionShowComponent(route, questionService) {
        _classCallCheck(this, QuestionShowComponent);

        this.route = route;
        this.questionService = questionService;
        this.propositions = [];
      }

      _createClass(QuestionShowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.idQuestionnaire = this.route.snapshot.params.idQuestionnaire;
          this.apercuQuestion = false; // Cas où on affiche uniquement la question (aperçu) et pas tout le questionnaire

          if (this.idQuestion === undefined) {
            this.idQuestion = this.route.snapshot.params.idQuestion;
            this.apercuQuestion = true;
          }

          this.questionService.read(this.idQuestion).subscribe(function (question) {
            _this15.question = question;
            console.log(question.typeQuestion);

            if (question.typeQuestion === 'COMBOBOX' || question.typeQuestion === 'CHECKBOX' || question.typeQuestion === 'RADIO') {
              _this15.propositions = question.propositions;
            }
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          console.log(changes);
        }
      }]);

      return QuestionShowComponent;
    }();

    QuestionShowComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QuestionShowComponent.prototype, "idQuestion", void 0);
    QuestionShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-question-show',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./question-show.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/question/question-show/question-show.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./question-show.component.scss */
      "./src/app/question/question-show/question-show.component.scss"))["default"]]
    })], QuestionShowComponent);
    /***/
  },

  /***/
  "./src/app/questionnaire/questionnaire-answer/questionnaire-answer.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/questionnaire/questionnaire-answer/questionnaire-answer.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuestionnaireQuestionnaireAnswerQuestionnaireAnswerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9ubmFpcmUvcXVlc3Rpb25uYWlyZS1hbnN3ZXIvcXVlc3Rpb25uYWlyZS1hbnN3ZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/questionnaire/questionnaire-answer/questionnaire-answer.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/questionnaire/questionnaire-answer/questionnaire-answer.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: QuestionnaireAnswerComponent */

  /***/
  function srcAppQuestionnaireQuestionnaireAnswerQuestionnaireAnswerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionnaireAnswerComponent", function () {
      return QuestionnaireAnswerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/question.service */
    "./src/app/services/question.service.ts");
    /* harmony import */


    var _services_questionnaire_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/questionnaire.service */
    "./src/app/services/questionnaire.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _services_reponse_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/reponse.service */
    "./src/app/services/reponse.service.ts");
    /* harmony import */


    var _models_proposition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../models/proposition */
    "./src/app/models/proposition.ts");

    var QuestionnaireAnswerComponent = /*#__PURE__*/function () {
      function QuestionnaireAnswerComponent(formBuilder, questionService, questionnaireService, alertService, reponseService, route, router) {
        _classCallCheck(this, QuestionnaireAnswerComponent);

        this.formBuilder = formBuilder;
        this.questionService = questionService;
        this.questionnaireService = questionnaireService;
        this.alertService = alertService;
        this.reponseService = reponseService;
        this.route = route;
        this.router = router;
        this.submitted = false;
        this.loading = false;
        this.done = false;
      }

      _createClass(QuestionnaireAnswerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.answerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            questions: this.formBuilder.array([])
          }); // permet la redirection en cas d'identifiant inexistant

          this.questionnaireService.getById(this.route.snapshot.params.id).subscribe(function (questionnaire) {
            if (questionnaire !== null) {
              _this16.questionnaire = questionnaire;
            } else {
              _this16.alertService.clear();

              _this16.alertService.error('Le questionnaire demandé n\'existe pas.', true);

              _this16.router.navigate(['/login']);
            }
          }); // permet de récupérer l'ensemble des questions et des propositions liées à ce questionnaire

          this.questionService.readAllByIdQuestionnaire(this.route.snapshot.params.id).subscribe(function (questions) {
            questions.forEach(function (item, index) {
              console.log(item.valeur);

              _this16.addQuestion(item);

              item.propositions.forEach(function (item2) {
                _this16.addProposition(index, item2);
              });
            });
          });
        }
      }, {
        key: "initQuestion",
        value: function initQuestion(question) {
          var prop = new _models_proposition__WEBPACK_IMPORTED_MODULE_8__["Proposition"]();
          prop.valeur = 'OUIII';
          prop.id = 54;
          return this.formBuilder.group({
            idQuestion: [question.id],
            valeurQuestion: [question.valeur],
            typeQuestion: [question.typeQuestion],
            isRequired: [question.isRequired],
            order: [''],
            propositions: this.formBuilder.array([])
          });
        }
      }, {
        key: "initProposition",
        value: function initProposition(proposition) {
          return this.formBuilder.group({
            idProp: [proposition.id],
            valeurProp: [proposition.valeur]
          });
        }
      }, {
        key: "addQuestion",
        value: function addQuestion(question) {
          this.questions.push(this.initQuestion(question));
        }
      }, {
        key: "addProposition",
        value: function addProposition(j, proposition) {
          var control = this.questions.controls[j].get('propositions');
          control.push(this.initProposition(proposition));
        }
      }, {
        key: "getQuestions",
        value: function getQuestions(form) {
          return form.controls.questions.controls;
        }
      }, {
        key: "getPropositions",
        value: function getPropositions(question) {
          return question.get('propositions').controls;
        } // ngOnInit(): void {
        //   this.questionnaireService.getById(this.route.snapshot.params.id)
        //       .subscribe(questionnaire => {
        //         if (questionnaire !== null) {
        //           this.questionnaire = questionnaire;
        //         } else {
        //           this.alertService.clear();
        //           this.alertService.error('Le questionnaire demandé n\'existe pas.', true);
        //           this.router.navigate(['/login']);
        //         }
        //       });
        //   this.questionService.readAllByIdQuestionnaire(this.route.snapshot.params.id)
        //       .subscribe(questions => {
        //         questions.forEach( (item) => {
        //           this.addQuestion(item);
        //           item.propositions.forEach((item2) => {
        //             this.addProposition(item2);
        //           });
        //         });
        //       });
        //   this.answerForm = this.formBuilder.group({
        //     firstName: ['', Validators.required],
        //     lastName: ['', Validators.required],
        //     questions: this.formBuilder.array([])
        //   });
        // }
        //
        // accès simplifié aux champs du formulaire

      }, {
        key: "onSubmit",
        //
        // get questions(): FormArray {
        //   return this.answerForm.get('questions') as FormArray;
        // }
        //
        // addQuestion(question: Question) {
        //     this.questions.push(this.formBuilder.group({
        //       valeur: question.valeur,
        //       typeQuestion: question.typeQuestion,
        //       isRequired : question.isRequired,
        //       order: question.order === null ? 0 : question.order,
        //       propositions: this.formBuilder.array(question.propositions)
        //     }));
        // }
        //
        // get propositions(): FormArray {
        //   return this.answerForm.get('questions').get('propositions') as FormArray;
        // }
        //
        // addProposition(proposition: Proposition) {
        //     this.propositions.push(this.formBuilder.group({
        //       valeur: proposition.valeur,
        //       id: proposition.id
        //     }));
        // }
        //
        value: function onSubmit(formGroup) {
          this.submitted = true; // réinitialise les alertes lors de la soumission du formulaire

          this.alertService.clear(); // s'arrête ici si le formulaire est invalide

          if (this.answerForm.invalid) {
            return;
          }

          this.prenom = this.answerForm.value.firstName; // enregistre le nouvel utilisateur puis le connecte immédiatement
          // this.loading = true;
          // this.reponseService.create(this.answerForm.value)
          //     .pipe(first())
          //     .subscribe(
          //         data => {
          //           this.alertService.success('Participation enregistrée', true);
          //           this.done = true;
          //         }, error => {
          //           this.alertService.error(error);
          //           this.loading = false;
          //         }
          //     );

          this.done = true;
        }
      }, {
        key: "questions",
        get: function get() {
          return this.answerForm.get('questions');
        }
      }, {
        key: "f",
        get: function get() {
          return this.answerForm.controls;
        }
      }]);

      return QuestionnaireAnswerComponent;
    }();

    QuestionnaireAnswerComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _services_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]
      }, {
        type: _services_questionnaire_service__WEBPACK_IMPORTED_MODULE_3__["QuestionnaireService"]
      }, {
        type: _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
      }, {
        type: _services_reponse_service__WEBPACK_IMPORTED_MODULE_7__["ReponseService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    QuestionnaireAnswerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-questionnaire-answer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./questionnaire-answer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/questionnaire/questionnaire-answer/questionnaire-answer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./questionnaire-answer.component.scss */
      "./src/app/questionnaire/questionnaire-answer/questionnaire-answer.component.scss"))["default"]]
    })], QuestionnaireAnswerComponent);
    /***/
  },

  /***/
  "./src/app/questionnaire/questionnaire-edit/questionnaire-edit.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/questionnaire/questionnaire-edit/questionnaire-edit.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuestionnaireQuestionnaireEditQuestionnaireEditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9ubmFpcmUvcXVlc3Rpb25uYWlyZS1lZGl0L3F1ZXN0aW9ubmFpcmUtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/questionnaire/questionnaire-edit/questionnaire-edit.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/questionnaire/questionnaire-edit/questionnaire-edit.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: QuestionnaireEditComponent */

  /***/
  function srcAppQuestionnaireQuestionnaireEditQuestionnaireEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionnaireEditComponent", function () {
      return QuestionnaireEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_questionnaire_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/questionnaire.service */
    "./src/app/services/questionnaire.service.ts");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _services_theme_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/theme.service */
    "./src/app/services/theme.service.ts");
    /* harmony import */


    var _services_question_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../services/question.service */
    "./src/app/services/question.service.ts");

    var QuestionnaireEditComponent = /*#__PURE__*/function () {
      function QuestionnaireEditComponent(fb, questionnaireService, alertService, authService, themeService, questionService, location, router, route) {
        _classCallCheck(this, QuestionnaireEditComponent);

        this.fb = fb;
        this.questionnaireService = questionnaireService;
        this.alertService = alertService;
        this.authService = authService;
        this.themeService = themeService;
        this.questionService = questionService;
        this.location = location;
        this.router = router;
        this.route = route;
        this.questions = [];
        this.questionnaires = [];
        this.loading = false;
        this.submitted = false;
        this.modification = false;
      }

      _createClass(QuestionnaireEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.questionnaireForm = this.fb.group({
            titre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            merci: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            anonymous: [false],
            idUser: [this.authService.currentUserValue.id] // themes: this.fb.array([])

          });
          this.idQuestionnaire = this.route.snapshot.params.id; // en cas de modification, on renseigne dans le formulaire les informations déjà présentes

          if (this.idQuestionnaire !== undefined) {
            this.modification = true;
            this.questionnaireService.getById(this.idQuestionnaire).subscribe(function (questionnaire) {
              if (questionnaire !== null) {
                _this17.loadAllQuestions(_this17.idQuestionnaire);

                _this17.loadAllThemes(_this17.idQuestionnaire);

                _this17.questionnaireForm = _this17.fb.group({
                  titre: [questionnaire.titre, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                  description: [questionnaire.description, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                  merci: [questionnaire.merci, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                  anonymous: [questionnaire.anonymous],
                  idUser: [_this17.authService.currentUserValue.id]
                });
              } else {
                _this17.alertService.clear();

                _this17.alertService.error('Le questionnaire demandé n\'existe pas. Retour au menu principal.', true);

                _this17.router.navigate(['/']);
              }
            });
          }
        } // accès simplifié aux champs du formulaire

      }, {
        key: "addTheme",
        value: function addTheme(value) {
          this.themes.push(this.fb.group({
            theme: value === null ? '' : value
          }));
        }
      }, {
        key: "removeTheme",
        value: function removeTheme(i) {
          this.themes.removeAt(i);
        }
      }, {
        key: "onNewQuestionnaire",
        value: function onNewQuestionnaire() {
          var _this18 = this;

          this.submitted = true; // réinitialise les alertes lors de la soumission du formulaire

          this.alertService.clear(); // s'arrête ici si le formulaire est invalide

          if (this.questionnaireForm.invalid) {
            return;
          }

          this.loading = true; // enregistre le nouveau questionnaire

          if (this.modification) {
            this.questionnaireService.update(this.idQuestionnaire, this.questionnaireForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (data) {
              // this.themeService.deleteAll(this.idQuestionnaire).subscribe();
              // for (let i = 1; i <= this.themes.length; i++) {
              //   const t = new Theme();
              //   t.idQuestionnaire = this.idQuestionnaire;
              //   t.theme = this.themes.at(i).value;
              //   t.order = i;
              //   this.themeService.create(t);
              // }
              _this18.alertService.success('Questionnaire enregistré', true);
            }, function (error) {
              _this18.alertService.error(error);
            });
          } else {
            this.questionnaireService.register(this.questionnaireForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (data) {
              _this18.alertService.success('Questionnaire enregistré', true);
            }, function (error) {
              _this18.alertService.error(error);
            });
          }

          this.loading = false;
        }
      }, {
        key: "loadAllQuestions",
        value: function loadAllQuestions(idQuestionnaire) {
          var _this19 = this;

          this.questionService.readAllByIdQuestionnaire(idQuestionnaire).subscribe(function (questions) {
            _this19.questions = questions;
          });
        }
      }, {
        key: "loadAllThemes",
        value: function loadAllThemes(idQuestion) {// const p1 = new Proposition();
          // p1.id = 1;
          // p1.idQuestion = this.idQuestion;
          // p1.libelle = 'Première proposition';
          // const p2 = new Proposition();
          // p2.id = 2;
          // p2.idQuestion = this.idQuestion;
          // p2.libelle = 'Deuxième proposition';
          // this.addPropositions(p1.libelle);
          // this.addPropositions(p2.libelle);
          // this.themeService.readAllByIdQuestionnaire(this.idQuestionnaire)
          //     .subscribe(themes => {
          //       themes.forEach(function(item) {
          //         console.log('Thème : ' + item.id + ', ' + item.idQuestionnaire + ', ' + item.theme);
          //         this.addTheme(item.theme);
          //       });
          //     });
        }
      }, {
        key: "deleteQuestion",
        value: function deleteQuestion(idQuestion) {
          var _this20 = this;

          this.questionService["delete"](idQuestion).subscribe(function () {
            _this20.loadAllQuestions(_this20.idQuestionnaire);
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.questionnaireForm.controls;
        }
      }, {
        key: "themes",
        get: function get() {
          return this.questionnaireForm.get('themes');
        }
      }]);

      return QuestionnaireEditComponent;
    }();

    QuestionnaireEditComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_questionnaire_service__WEBPACK_IMPORTED_MODULE_4__["QuestionnaireService"]
      }, {
        type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _services_theme_service__WEBPACK_IMPORTED_MODULE_9__["ThemeService"]
      }, {
        type: _services_question_service__WEBPACK_IMPORTED_MODULE_10__["QuestionService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    QuestionnaireEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-questionnaire-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./questionnaire-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/questionnaire/questionnaire-edit/questionnaire-edit.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./questionnaire-edit.component.scss */
      "./src/app/questionnaire/questionnaire-edit/questionnaire-edit.component.scss"))["default"]]
    })], QuestionnaireEditComponent);
    /***/
  },

  /***/
  "./src/app/questionnaire/questionnaire-show/questionnaire-show.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/questionnaire/questionnaire-show/questionnaire-show.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuestionnaireQuestionnaireShowQuestionnaireShowComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9ubmFpcmUvcXVlc3Rpb25uYWlyZS1zaG93L3F1ZXN0aW9ubmFpcmUtc2hvdy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/questionnaire/questionnaire-show/questionnaire-show.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/questionnaire/questionnaire-show/questionnaire-show.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: QuestionnaireShowComponent */

  /***/
  function srcAppQuestionnaireQuestionnaireShowQuestionnaireShowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionnaireShowComponent", function () {
      return QuestionnaireShowComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/question.service */
    "./src/app/services/question.service.ts");
    /* harmony import */


    var _services_questionnaire_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/questionnaire.service */
    "./src/app/services/questionnaire.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/alert.service */
    "./src/app/services/alert.service.ts");

    var QuestionnaireShowComponent = /*#__PURE__*/function () {
      function QuestionnaireShowComponent(questionService, questionnaireService, route, router, alertService) {
        _classCallCheck(this, QuestionnaireShowComponent);

        this.questionService = questionService;
        this.questionnaireService = questionnaireService;
        this.route = route;
        this.router = router;
        this.alertService = alertService;
        this.questions = [];
      }

      _createClass(QuestionnaireShowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.questionnaireService.getById(this.route.snapshot.params.id).subscribe(function (questionnaire) {
            if (questionnaire !== null) {
              _this21.questionnaire = questionnaire;
            } else {
              _this21.alertService.clear();

              _this21.alertService.error('Le questionnaire demandé n\'existe pas. Retour au menu principal.', true);

              _this21.router.navigate(['/']);
            }
          });
          this.questionService.readAllByIdQuestionnaire(this.route.snapshot.params.id).subscribe(function (questions) {
            _this21.questions = questions;
          });
        }
      }]);

      return QuestionnaireShowComponent;
    }();

    QuestionnaireShowComponent.ctorParameters = function () {
      return [{
        type: _services_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]
      }, {
        type: _services_questionnaire_service__WEBPACK_IMPORTED_MODULE_3__["QuestionnaireService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }];
    };

    QuestionnaireShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-questionnaire-show',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./questionnaire-show.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/questionnaire/questionnaire-show/questionnaire-show.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./questionnaire-show.component.scss */
      "./src/app/questionnaire/questionnaire-show/questionnaire-show.component.scss"))["default"]]
    })], QuestionnaireShowComponent);
    /***/
  },

  /***/
  "./src/app/register/register.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/register/register.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var RegisterComponent =
    /*#__PURE__*/

    /* Le composant d'enregistrement crée un nouvel utilisateur avec le service utilisateur lors de l'envoi du formulaire de registre.
     * Si l'utilisateur est déjà connecté, il est automatiquement redirigé vers la page d'accueil.
     */
    function () {
      function RegisterComponent(formBuilder, router, authService, userService, alertService) {
        _classCallCheck(this, RegisterComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;

        this.checkPasswords = function (group) {
          var pass = group.get('password').value;
          var confirmPass = group.get('confirmPassword').value;
          return pass === confirmPass ? null : {
            'notSame': true
          };
        }; // redirige vers la page d'accueil si l'utilisateur est déjà connecté


        if (this.authService.currentUserValue) {
          this.router.navigate(['/']);
        }
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm = this.formBuilder.group({
            prenom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
          }, {
            validators: this.checkPasswords
          });
        } // accès simplifié aux champs du formulaire

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this22 = this;

          this.submitted = true; // réinitialise les alertes lors de la soumission du formulaire

          this.alertService.clear(); // s'arrête ici si le formulaire est invalide

          if (this.registerForm.invalid) {
            return;
          } // enregistre le nouvel utilisateur puis le connecte immédiatement


          this.loading = true;
          this.userService.register(this.registerForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (data) {
            _this22.alertService.success('Inscription enregistrée', true);

            _this22.authService.login(_this22.f.email.value, _this22.f.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (date) {
              _this22.router.navigate(['/']);
            }, function (error) {
              _this22.alertService.error(error);

              _this22.loading = false;
            });
          }, function (error) {
            _this22.alertService.error(error);

            _this22.loading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.registerForm.controls;
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.scss */
      "./src/app/register/register.component.scss"))["default"]]
    })
    /* Le composant d'enregistrement crée un nouvel utilisateur avec le service utilisateur lors de l'envoi du formulaire de registre.
     * Si l'utilisateur est déjà connecté, il est automatiquement redirigé vers la page d'accueil.
     */
    ], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/resultat/bar-chart/bar-chart.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/resultat/bar-chart/bar-chart.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppResultatBarChartBarChartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdGF0L2Jhci1jaGFydC9iYXItY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/resultat/bar-chart/bar-chart.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/resultat/bar-chart/bar-chart.component.ts ***!
    \***********************************************************/

  /*! exports provided: BarChartComponent */

  /***/
  function srcAppResultatBarChartBarChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarChartComponent", function () {
      return BarChartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BarChartComponent = /*#__PURE__*/function () {
      function BarChartComponent() {
        _classCallCheck(this, BarChartComponent);

        this.barChartOptions = {
          scaleShowVerticalLines: false,
          responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [{
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Series A'
        }, {
          data: [28, 48, 40, 19, 86, 27, 90],
          label: 'Series B'
        }];
      }

      _createClass(BarChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BarChartComponent;
    }();

    BarChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bar-chart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bar-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/resultat/bar-chart/bar-chart.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bar-chart.component.scss */
      "./src/app/resultat/bar-chart/bar-chart.component.scss"))["default"]]
    })], BarChartComponent);
    /***/
  },

  /***/
  "./src/app/resultat/doughnut-chart/doughnut-chart.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/resultat/doughnut-chart/doughnut-chart.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppResultatDoughnutChartDoughnutChartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdGF0L2RvdWdobnV0LWNoYXJ0L2RvdWdobnV0LWNoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/resultat/doughnut-chart/doughnut-chart.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/resultat/doughnut-chart/doughnut-chart.component.ts ***!
    \*********************************************************************/

  /*! exports provided: DoughnutChartComponent */

  /***/
  function srcAppResultatDoughnutChartDoughnutChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoughnutChartComponent", function () {
      return DoughnutChartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DoughnutChartComponent = /*#__PURE__*/function () {
      function DoughnutChartComponent() {
        _classCallCheck(this, DoughnutChartComponent);

        this.doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
        this.doughnutChartData = [120, 150, 180, 90];
        this.doughnutChartType = 'doughnut';
      }

      _createClass(DoughnutChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DoughnutChartComponent;
    }();

    DoughnutChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-doughnut-chart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./doughnut-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/resultat/doughnut-chart/doughnut-chart.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./doughnut-chart.component.scss */
      "./src/app/resultat/doughnut-chart/doughnut-chart.component.scss"))["default"]]
    })], DoughnutChartComponent);
    /***/
  },

  /***/
  "./src/app/resultat/pie-chart/pie-chart.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/resultat/pie-chart/pie-chart.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppResultatPieChartPieChartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdGF0L3BpZS1jaGFydC9waWUtY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/resultat/pie-chart/pie-chart.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/resultat/pie-chart/pie-chart.component.ts ***!
    \***********************************************************/

  /*! exports provided: PieChartComponent */

  /***/
  function srcAppResultatPieChartPieChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PieChartComponent", function () {
      return PieChartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PieChartComponent = /*#__PURE__*/function () {
      function PieChartComponent() {
        _classCallCheck(this, PieChartComponent);

        this.pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
        this.pieChartData = [120, 150, 180, 90];
        this.pieChartType = 'pie';
      }

      _createClass(PieChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PieChartComponent;
    }();

    PieChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pie-chart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pie-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/resultat/pie-chart/pie-chart.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pie-chart.component.scss */
      "./src/app/resultat/pie-chart/pie-chart.component.scss"))["default"]]
    })], PieChartComponent);
    /***/
  },

  /***/
  "./src/app/resultat/resultat.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/resultat/resultat.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppResultatResultatComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdGF0L3Jlc3VsdGF0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/resultat/resultat.component.ts":
  /*!************************************************!*\
    !*** ./src/app/resultat/resultat.component.ts ***!
    \************************************************/

  /*! exports provided: ResultatComponent */

  /***/
  function srcAppResultatResultatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultatComponent", function () {
      return ResultatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_resultat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/resultat.service */
    "./src/app/services/resultat.service.ts");

    var ResultatComponent = /*#__PURE__*/function () {
      function ResultatComponent(resultatService) {
        _classCallCheck(this, ResultatComponent);

        this.resultatService = resultatService;
      }

      _createClass(ResultatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /*ObjectToCSV(data) {
          const csvRows = [];
          // get the headers
          const  headers = Object.keys((data[0]));
          csvRows.push(headers.join(','));
          for (const row of data) {
            const values = headers.map(header => {
              const escaped = ('' + row[header]).replace(/"/g, '//"');
              return `"${escaped}"`;
            });
            csvRows.push(values.join(','));
          }
          return csvRows.join('\n');
        }*/

      }, {
        key: "download",
        value: function download(data) {
          var blob = new Blob([data], {
            type: 'text/csv'
          });
          var url = window.URL.createObjectURL(blob);
          var a = document.createElement('a');
          a.setAttribute('hidden', '');
          a.setAttribute('href', url);
          a.setAttribute('download', 'download.csv');
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
      }, {
        key: "getReport",
        value: function getReport() {
          var json = this.resultatService.getData(2);
          console.log(json);
          /* const data = json.map(row => ({
             question : row.question,
             reponse : row.reponse,
             participation : row.participation
           }));
          const csvData = this.ObjectToCSV(json);
          this.download(csvData);*/
        }
      }]);

      return ResultatComponent;
    }();

    ResultatComponent.ctorParameters = function () {
      return [{
        type: _services_resultat_service__WEBPACK_IMPORTED_MODULE_2__["ResultatService"]
      }];
    };

    ResultatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resultat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./resultat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/resultat/resultat.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./resultat.component.scss */
      "./src/app/resultat/resultat.component.scss"))["default"]]
    })], ResultatComponent);
    /***/
  },

  /***/
  "./src/app/services/alert.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/alert.service.ts ***!
    \*******************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppServicesAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AlertService = /*#__PURE__*/function () {
      function AlertService(router) {
        var _this23 = this;

        _classCallCheck(this, AlertService);

        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterRouteChange = false; // clear alert messages on route change unless 'keepAfterRouteChange' flag is true

        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
            if (_this23.keepAfterRouteChange) {
              // only keep for a single route change
              _this23.keepAfterRouteChange = false;
            } else {
              // clear alert message
              _this23.clear();
            }
          }
        });
      }

      _createClass(AlertService, [{
        key: "getAlert",
        value: function getAlert() {
          return this.subject.asObservable();
        }
      }, {
        key: "success",
        value: function success(message) {
          var keepAfterRouteChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.keepAfterRouteChange = keepAfterRouteChange;
          this.subject.next({
            type: 'success',
            text: message
          });
        }
      }, {
        key: "error",
        value: function error(message) {
          var keepAfterRouteChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.keepAfterRouteChange = keepAfterRouteChange;
          this.subject.next({
            type: 'error',
            text: message
          });
        }
      }, {
        key: "clear",
        value: function clear() {
          // clear by calling subject.next() without parameters
          this.subject.next();
        }
      }]);

      return AlertService;
    }();

    AlertService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AlertService);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthService =
    /*#__PURE__*/

    /* Le service d'authentification est utilisé pour se connecter et se déconnecter de l'application.
     * Pour se connecter, il affiche les informations d'identification de l'utilisateur sur l'API et vérifie la réponse pour un jeton JWT.
     */
    function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(email, password) {
          var _this24 = this;

          return this.http.post("/admin/login", {
            email: email,
            password: password
          }) // return this.http.post<any>(`/users/authenticate`, { email, password })
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // stocke les détails de l'utilisateur + le jeton jwt dans le stockaqe local pour conserver
            // la connexion de l'utilisateur entre le rafraîchissement des pages
            localStorage.setItem('currentUser', JSON.stringify(user.retour));

            _this24.currentUserSubject.next(user.retour);

            return user.retour;
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          // supprime l'utilisateur du stockage local et définit l'utilisateur actuel à null
          localStorage.removeItem('currentUser');
          this.currentUserSubject.next(null);
        }
      }, {
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })
    /* Le service d'authentification est utilisé pour se connecter et se déconnecter de l'application.
     * Pour se connecter, il affiche les informations d'identification de l'utilisateur sur l'API et vérifie la réponse pour un jeton JWT.
     */
    ], AuthService);
    /***/
  },

  /***/
  "./src/app/services/question.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/question.service.ts ***!
    \**********************************************/

  /*! exports provided: QuestionService */

  /***/
  function srcAppServicesQuestionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionService", function () {
      return QuestionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _models_questionnaire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/questionnaire */
    "./src/app/models/questionnaire.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var QuestionService = /*#__PURE__*/function () {
      function QuestionService(http) {
        _classCallCheck(this, QuestionService);

        this.http = http;
      }

      _createClass(QuestionService, [{
        key: "readAllByIdQuestionnaire",
        value: function readAllByIdQuestionnaire(idQuestionnaire) {
          return this.http.get("question/findByIdQuestionnaire/".concat(idQuestionnaire)); // return this.http.get<Question[]>(`${environment.apiUrl}/questions/all/${idQuestionnaire}`);
        }
      }, {
        key: "read",
        value: function read(idQuestion) {
          return this.http.get("/question/read/".concat(idQuestion)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.question;
          })); // return this.http.get<Question>(`${environment.apiUrl}/questions/read/${idQuestion}`);
        }
      }, {
        key: "create",
        value: function create(question, propositions) {
          function replacer(key, value) {
            if (key === 'idQuestionnaire' || key === 'idTheme' || key === 'merci') {
              return undefined;
            }

            return value;
          }

          question.questionnaire = new _models_questionnaire__WEBPACK_IMPORTED_MODULE_3__["Questionnaire"]();
          question.questionnaire.id = question.idQuestionnaire;
          question.propositions = propositions;
          var questStr = JSON.stringify(question, replacer);
          console.log(questStr);
          return this.http.post("/question/create", JSON.parse(questStr)); // return this.http.post(`${environment.apiUrl}/questions/create`, question);
        }
      }, {
        key: "update",
        value: function update(id, question, propositions) {
          function replacer(key, value) {
            if (key === 'idQuestionnaire' || key === 'idTheme' || key === 'merci') {
              return undefined;
            }

            return value;
          }

          question.questionnaire = new _models_questionnaire__WEBPACK_IMPORTED_MODULE_3__["Questionnaire"]();
          question.questionnaire.id = question.idQuestionnaire;
          question.propositions = propositions;
          var questStr = JSON.stringify(question, replacer);
          console.log(questStr);
          return this.http.post("/question/update/".concat(id), JSON.parse(questStr)); // return this.http.post(`${environment.apiUrl}/questions/update/${id}`, question);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"]("/question/delete/".concat(id)); // return this.http.delete(`${environment.apiUrl}/questions/${id}`);
        }
      }]);

      return QuestionService;
    }();

    QuestionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    QuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], QuestionService);
    /***/
  },

  /***/
  "./src/app/services/questionnaire.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/questionnaire.service.ts ***!
    \***************************************************/

  /*! exports provided: QuestionnaireService */

  /***/
  function srcAppServicesQuestionnaireServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionnaireService", function () {
      return QuestionnaireService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var QuestionnaireService = /*#__PURE__*/function () {
      function QuestionnaireService(http) {
        _classCallCheck(this, QuestionnaireService);

        this.http = http;
      }

      _createClass(QuestionnaireService, [{
        key: "getAllByIdUser",
        value: function getAllByIdUser(idUser) {
          return this.http.get("/questionnaire/findByIdAdministrateur/".concat(idUser)); // return this.http.get<Questionnaire[]>(`${environment.apiUrl}/questionnaires/all/${idUser}`);
        }
      }, {
        key: "getById",
        value: function getById(idQuestionnaire) {
          return this.http.get("/questionnaire/read/".concat(idQuestionnaire)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            return data.questionnaire;
          })); // return this.http.get<Questionnaire>(`${environment.apiUrl}/questionnaires/${idQuestionnaire}`);
        }
      }, {
        key: "register",
        value: function register(questionnaire) {
          function replacer(key, value) {
            if (key === 'idUser' || key === 'description' || key === 'merci') {
              return undefined;
            }

            return value;
          }

          questionnaire.administrateur = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
          questionnaire.administrateur.id = questionnaire.idUser;
          questionnaire.dateCreation = new Date(Date.now());
          questionnaire.datePeremption = new Date(2020, 12, 15);
          questionnaire.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/answer/' + questionnaire.id;
          var questStr = JSON.stringify(questionnaire, replacer);
          return this.http.post("/questionnaire/create", JSON.parse(questStr)); // return this.http.post(`${environment.apiUrl}/questionnaires/register`, questionnaire);
        }
      }, {
        key: "update",
        value: function update(id, questionnaire) {
          function replacer(key, value) {
            if (key === 'idUser' || key === 'description' || key === 'merci') {
              return undefined;
            }

            return value;
          }

          questionnaire.administrateur = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
          questionnaire.administrateur.id = questionnaire.idUser;
          questionnaire.dateCreation = new Date(Date.now());
          questionnaire.datePeremption = new Date(2020, 12, 15);
          questionnaire.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/answer/' + id;
          questionnaire.id = id;
          var questStr = JSON.stringify(questionnaire, replacer);
          return this.http.post("/questionnaire/update/".concat(id), JSON.parse(questStr)); // return this.http.post(`${environment.apiUrl}/questionnaires/update/${id}`, questionnaire);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"]("/questionnaire/delete/".concat(id)); // return this.http.delete(`${environment.apiUrl}/questionnaires/${id}`);
        }
      }]);

      return QuestionnaireService;
    }();

    QuestionnaireService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    QuestionnaireService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], QuestionnaireService);
    /***/
  },

  /***/
  "./src/app/services/reponse.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/reponse.service.ts ***!
    \*********************************************/

  /*! exports provided: ReponseService */

  /***/
  function srcAppServicesReponseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReponseService", function () {
      return ReponseService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ReponseService = /*#__PURE__*/function () {
      function ReponseService(http) {
        _classCallCheck(this, ReponseService);

        this.http = http;
      }

      _createClass(ReponseService, [{
        key: "readAllByIdQuestionAndIdUser",
        value: function readAllByIdQuestionAndIdUser(idQuestion, idUser) {
          return this.http.get("/reponse/findByIdQuestion/".concat(idQuestion)); //return this.http.get<Reponse[]>(`${environment.apiUrl}/reponses/all/${idQuestion}&${idUser}`);
        }
      }, {
        key: "read",
        value: function read(idReponse) {
          return this.http.get("/reponse/read/".concat(idReponse)); //return this.http.get<Reponse>(`${environment.apiUrl}/reponses/read/${idReponse}`);
        }
      }, {
        key: "create",
        value: function create(reponse) {
          return this.http.post("/reponse/create", reponse); //return this.http.post(`${environment.apiUrl}/reponses/create`, reponse);
        }
      }, {
        key: "update",
        value: function update(id, reponse) {
          return this.http.post("/reponse/update/".concat(id), reponse); //return this.http.post(`${environment.apiUrl}/reponses/update/${id}`, reponse);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"]("/reponse/delete/".concat(id)); //return this.http.delete(`${environment.apiUrl}/reponses/${id}`);
        }
      }]);

      return ReponseService;
    }();

    ReponseService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ReponseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ReponseService);
    /***/
  },

  /***/
  "./src/app/services/resultat.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/resultat.service.ts ***!
    \**********************************************/

  /*! exports provided: ResultatService */

  /***/
  function srcAppServicesResultatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultatService", function () {
      return ResultatService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ResultatService = /*#__PURE__*/function () {
      function ResultatService(http) {
        _classCallCheck(this, ResultatService);

        this.http = http;
      }

      _createClass(ResultatService, [{
        key: "getData",
        value: function getData(id) {
          return this.http.get("/statistique/idQuestionnaire/".concat(id));
        }
      }]);

      return ResultatService;
    }();

    ResultatService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ResultatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ResultatService);
    /***/
  },

  /***/
  "./src/app/services/theme.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/theme.service.ts ***!
    \*******************************************/

  /*! exports provided: ThemeService */

  /***/
  function srcAppServicesThemeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeService", function () {
      return ThemeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ThemeService = /*#__PURE__*/function () {
      function ThemeService(http) {
        _classCallCheck(this, ThemeService);

        this.http = http;
      }

      _createClass(ThemeService, [{
        key: "readAllByIdQuestionnaire",
        value: function readAllByIdQuestionnaire(idQuestionnaire) {
          return this.http.get("/themes/".concat(idQuestionnaire));
        }
      }, {
        key: "create",
        value: function create(theme) {
          return this.http.post("/themes/", theme);
        }
      }, {
        key: "deleteAll",
        value: function deleteAll(idQuestionnaire) {
          return this.http["delete"]("/themes/".concat(idQuestionnaire));
        }
      }]);

      return ThemeService;
    }();

    ThemeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ThemeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ThemeService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UserService =
    /*#__PURE__*/

    /* Le service utilisateur contient un ensemble standard de méthodes CRUD pour la gestion des utilisateurs.
     * Il sert d'interface entre l'application Angular et l'API backend.
     */
    function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
      }

      _createClass(UserService, [{
        key: "getAll",
        value: function getAll() {
          return this.http.get("/admin/readAll"); // return this.http.get<User[]>(`${environment.apiUrl}/users`);
        }
      }, {
        key: "register",
        value: function register(user) {
          console.log(user);
          return this.http.post("/admin/create", user); // return this.http.post(`${environment.apiUrl}/users/register`, user);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"]("/admin/delete/".concat(id)); // return this.http.delete(`${environment.apiUrl}/users/${id}`);
        }
      }, {
        key: "update",
        value: function update(id, user) {
          delete user.id;
          return this.http.post("/admin/update/".concat(id), user); // return this.http.post(`${environment.apiUrl}/users/update/${id}`, user);
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })
    /* Le service utilisateur contient un ensemble standard de méthodes CRUD pour la gestion des utilisateurs.
     * Il sert d'interface entre l'application Angular et l'API backend.
     */
    ], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://localhost:4200' // apiUrl: 'http://barometre-managerial.leria-etud.univ-angers.fr'

    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/etudiant/xinapro/Barometre-managerial/Front/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map