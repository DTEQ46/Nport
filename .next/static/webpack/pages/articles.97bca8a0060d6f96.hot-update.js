"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/articles",{

/***/ "./components/Desklinks.js":
/*!*********************************!*\
  !*** ./components/Desklinks.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Desklinks_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Desklinks.module.css */ \"./styles/Desklinks.module.css\");\n/* harmony import */ var _styles_Desklinks_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Desklinks_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _s = $RefreshSig$();\nfunction Desklinks(param) {\n    var num = param.num, name = param.name, link = param.link;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var currentRoute = router.pathname;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: link,\n        className: currentRoute === link ? (_styles_Desklinks_module_css__WEBPACK_IMPORTED_MODULE_2___default().contlinkactive) : (_styles_Desklinks_module_css__WEBPACK_IMPORTED_MODULE_2___default().contlinknonactive),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: num\n            }, void 0, false, {\n                fileName: \"/home/dteq/Documents/myProjects/Nport/components/Desklinks.js\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: currentRoute === link ? (_styles_Desklinks_module_css__WEBPACK_IMPORTED_MODULE_2___default().middleactive) : (_styles_Desklinks_module_css__WEBPACK_IMPORTED_MODULE_2___default().middle)\n            }, void 0, false, {\n                fileName: \"/home/dteq/Documents/myProjects/Nport/components/Desklinks.js\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: name\n            }, void 0, false, {\n                fileName: \"/home/dteq/Documents/myProjects/Nport/components/Desklinks.js\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dteq/Documents/myProjects/Nport/components/Desklinks.js\",\n        lineNumber: 7,\n        columnNumber: 3\n    }, this);\n}\n_s(Desklinks, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Desklinks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Desklinks);\nvar _c;\n$RefreshReg$(_c, \"Desklinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rlc2tsaW5rcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBbUQ7QUFDWjs7QUFDdkMsU0FBU0UsU0FBUyxDQUFDLEtBQWlCLEVBQUU7UUFBbEJDLEdBQUcsR0FBSixLQUFpQixDQUFoQkEsR0FBRyxFQUFFQyxJQUFJLEdBQVYsS0FBaUIsQ0FBWEEsSUFBSSxFQUFFQyxJQUFJLEdBQWhCLEtBQWlCLENBQUxBLElBQUk7O0lBQy9CLElBQU1DLE1BQU0sR0FBR0wsc0RBQVMsRUFBRTtJQUMxQixJQUFNTSxZQUFZLEdBQUdELE1BQU0sQ0FBQ0UsUUFBUTtJQUN0QyxxQkFDQSw4REFBQ0MsR0FBQztRQUFDQyxJQUFJLEVBQUVMLElBQUk7UUFBRU0sU0FBUyxFQUFFSixZQUFZLEtBQUtGLElBQUksR0FBRUwsb0ZBQXFCLEdBQUNBLHVGQUF3Qjs7MEJBQzdGLDhEQUFDYyxLQUFHOzBCQUFFWCxHQUFHOzs7OztvQkFBTzswQkFDaEIsOERBQUNXLEtBQUc7Z0JBQUNILFNBQVMsRUFBRUosWUFBWSxLQUFHRixJQUFJLEdBQUNMLGtGQUFtQixHQUFDQSw0RUFBYTs7Ozs7b0JBQVE7MEJBQzdFLDhEQUFDYyxLQUFHOzBCQUFFVixJQUFJOzs7OztvQkFBTzs7Ozs7O1lBQ2YsQ0FDSDtDQUNGO0dBVlFGLFNBQVM7O1FBQ0NELGtEQUFTOzs7QUFEbkJDLEtBQUFBLFNBQVM7QUFZbEIsK0RBQWVBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXNrbGlua3MuanM/ZWQ2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9EZXNrbGlua3MubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuZnVuY3Rpb24gRGVza2xpbmtzKHtudW0sIG5hbWUsIGxpbmt9KSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgY3VycmVudFJvdXRlID0gcm91dGVyLnBhdGhuYW1lO1xuICByZXR1cm4gKFxuICA8YSBocmVmPXtsaW5rfSBjbGFzc05hbWU9e2N1cnJlbnRSb3V0ZSA9PT0gbGluaz8gc3R5bGVzLmNvbnRsaW5rYWN0aXZlOnN0eWxlcy5jb250bGlua25vbmFjdGl2ZX0gPlxuICAgIDxkaXY+e251bX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3VycmVudFJvdXRlPT09bGluaz9zdHlsZXMubWlkZGxlYWN0aXZlOnN0eWxlcy5taWRkbGV9PjwvZGl2PlxuICAgIDxkaXY+e25hbWV9PC9kaXY+XG4gIDwvYT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXNrbGlua3MiXSwibmFtZXMiOlsic3R5bGVzIiwidXNlUm91dGVyIiwiRGVza2xpbmtzIiwibnVtIiwibmFtZSIsImxpbmsiLCJyb3V0ZXIiLCJjdXJyZW50Um91dGUiLCJwYXRobmFtZSIsImEiLCJocmVmIiwiY2xhc3NOYW1lIiwiY29udGxpbmthY3RpdmUiLCJjb250bGlua25vbmFjdGl2ZSIsImRpdiIsIm1pZGRsZWFjdGl2ZSIsIm1pZGRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Desklinks.js\n");

/***/ })

});