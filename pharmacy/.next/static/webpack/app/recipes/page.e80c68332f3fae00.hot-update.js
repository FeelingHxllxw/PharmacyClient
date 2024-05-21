"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/recipes/page",{

/***/ "(app-pages-browser)/./app/components/Recipes.tsx":
/*!************************************!*\
  !*** ./app/components/Recipes.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Recipes: function() { return /* binding */ Recipes; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var antd_es_button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es//button/button */ \"(app-pages-browser)/../node_modules/antd/es/button/button.js\");\n/* harmony import */ var _RecipeCardTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecipeCardTitle */ \"(app-pages-browser)/./app/components/RecipeCardTitle.tsx\");\n/* harmony import */ var antd_es_card_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/card/Card */ \"(app-pages-browser)/../node_modules/antd/es/card/Card.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ \"(app-pages-browser)/../node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst Recipes = (param)=>{\n    let { recipes, handleDelete, handleOpen } = param;\n    console.log(recipes);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"cards\",\n        children: recipes.map((recipe)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_card_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RecipeCardTitle__WEBPACK_IMPORTED_MODULE_1__.CardTitle, {\n                    diagnosis: recipe.diagnosis,\n                    doctor: recipe.doctor\n                }, void 0, false, {\n                    fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\components\\\\Recipes.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 13\n                }, void 0),\n                bordered: false,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Врач: \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\components\\\\Recipes.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: recipe.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\components\\\\Recipes.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Дата выдачи\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\components\\\\Recipes.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: dayjs__WEBPACK_IMPORTED_MODULE_2___default()(recipe.issueDate).format(\"DD/MM/YYYY\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\components\\\\Recipes.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card_buttons\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_button_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                onClick: ()=>handleOpen(recipe),\n                                style: {\n                                    flex: 1\n                                },\n                                children: \"Редактировать\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\components\\\\Recipes.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_button_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                onClick: ()=>handleDelete(recipe.id),\n                                style: {\n                                    flex: 1\n                                },\n                                danger: true,\n                                children: \"Удалить\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\components\\\\Recipes.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\components\\\\Recipes.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, recipe.id, true, {\n                fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\components\\\\Recipes.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\components\\\\Recipes.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Recipes;\nvar _c;\n$RefreshReg$(_c, \"Recipes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1JlY2lwZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0U7QUFDVDtBQUNYO0FBUW5CLE1BQU1JLFVBQVU7UUFBQyxFQUFFQyxPQUFPLEVBQUVDLFlBQVksRUFBRUMsVUFBVSxFQUFTO0lBQ2xFQyxRQUFRQyxHQUFHLENBQUNKO0lBQ1oscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7a0JBQ1pOLFFBQVFPLEdBQUcsQ0FBQyxDQUFDQyx1QkFDWiw4REFBQ1gseURBQUlBO2dCQUVIWSxxQkFDRSw4REFBQ2IsdURBQVNBO29CQUFDYyxXQUFXRixPQUFPRSxTQUFTO29CQUFFQyxRQUFRSCxPQUFPRyxNQUFNOzs7Ozs7Z0JBRS9EQyxVQUFVOztrQ0FFViw4REFBQ0M7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUdMLE9BQU9NLElBQUk7Ozs7OztrQ0FDZiw4REFBQ0Q7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUdmLDRDQUFLQSxDQUFDVSxPQUFPTyxTQUFTLEVBQUVDLE1BQU0sQ0FBQzs7Ozs7O2tDQUNuQyw4REFBQ1g7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDWCw2REFBTUE7Z0NBQUNzQixTQUFTLElBQU1mLFdBQVdNO2dDQUFTVSxPQUFPO29DQUFFQyxNQUFNO2dDQUFFOzBDQUFHOzs7Ozs7MENBRy9ELDhEQUFDeEIsNkRBQU1BO2dDQUNMc0IsU0FBUyxJQUFNaEIsYUFBYU8sT0FBT1ksRUFBRTtnQ0FDckNGLE9BQU87b0NBQUVDLE1BQU07Z0NBQUU7Z0NBQ2pCRSxNQUFNOzBDQUNQOzs7Ozs7Ozs7Ozs7O2VBbEJFYixPQUFPWSxFQUFFOzs7Ozs7Ozs7O0FBMEJ4QixFQUFFO0tBaENXckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvUmVjaXBlcy50c3g/NGQ4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gXCJhbnRkL2VzLy9idXR0b24vYnV0dG9uXCI7XHJcbmltcG9ydCB7IENhcmRUaXRsZSB9IGZyb20gXCIuL1JlY2lwZUNhcmRUaXRsZVwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiYW50ZC9lcy9jYXJkL0NhcmRcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICByZWNpcGVzOiBSZWNpcGVbXTtcclxuICBoYW5kbGVEZWxldGU6IChpZDogc3RyaW5nKSA9PiB2b2lkO1xyXG4gIGhhbmRsZU9wZW46IChyZWNpcGU6IFJlY2lwZSkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFJlY2lwZXMgPSAoeyByZWNpcGVzLCBoYW5kbGVEZWxldGUsIGhhbmRsZU9wZW4gfTogUHJvcHMpID0+IHtcclxuICBjb25zb2xlLmxvZyhyZWNpcGVzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkc1wiPlxyXG4gICAgICB7cmVjaXBlcy5tYXAoKHJlY2lwZTogUmVjaXBlKSA9PiAoXHJcbiAgICAgICAgPENhcmRcclxuICAgICAgICAgIGtleT17cmVjaXBlLmlkfVxyXG4gICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICA8Q2FyZFRpdGxlIGRpYWdub3Npcz17cmVjaXBlLmRpYWdub3Npc30gZG9jdG9yPXtyZWNpcGUuZG9jdG9yfSAvPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYm9yZGVyZWQ9e2ZhbHNlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwPtCS0YDQsNGHOiA8L3A+XHJcbiAgICAgICAgICA8cD57cmVjaXBlLm5hbWV9PC9wPlxyXG4gICAgICAgICAgPHA+0JTQsNGC0LAg0LLRi9C00LDRh9C4PC9wPlxyXG4gICAgICAgICAgPHA+e2RheWpzKHJlY2lwZS5pc3N1ZURhdGUpLmZvcm1hdChcIkREL01NL1lZWVlcIil9PC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX2J1dHRvbnNcIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPcGVuKHJlY2lwZSl9IHN0eWxlPXt7IGZsZXg6IDEgfX0+XHJcbiAgICAgICAgICAgICAg0KDQtdC00LDQutGC0LjRgNC+0LLQsNGC0YxcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUocmVjaXBlLmlkKX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBmbGV4OiAxIH19XHJcbiAgICAgICAgICAgICAgZGFuZ2VyXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiQ2FyZFRpdGxlIiwiQ2FyZCIsImRheWpzIiwiUmVjaXBlcyIsInJlY2lwZXMiLCJoYW5kbGVEZWxldGUiLCJoYW5kbGVPcGVuIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInJlY2lwZSIsInRpdGxlIiwiZGlhZ25vc2lzIiwiZG9jdG9yIiwiYm9yZGVyZWQiLCJwIiwibmFtZSIsImlzc3VlRGF0ZSIsImZvcm1hdCIsIm9uQ2xpY2siLCJzdHlsZSIsImZsZXgiLCJpZCIsImRhbmdlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Recipes.tsx\n"));

/***/ })

});