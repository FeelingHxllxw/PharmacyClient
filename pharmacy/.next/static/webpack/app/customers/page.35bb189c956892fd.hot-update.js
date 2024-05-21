"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/customers/page",{

/***/ "(app-pages-browser)/./app/components/Customers.tsx":
/*!**************************************!*\
  !*** ./app/components/Customers.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Customers: function() { return /* binding */ Customers; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var antd_es_button_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es//button/button */ \"(app-pages-browser)/../node_modules/antd/es/button/button.js\");\n/* harmony import */ var _CustomerCartTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerCartTitle */ \"(app-pages-browser)/./app/components/CustomerCartTitle.tsx\");\n/* harmony import */ var antd_es_card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/card/Card */ \"(app-pages-browser)/../node_modules/antd/es/card/Card.js\");\n\n\n\n\nconst Customers = (param)=>{\n    let { customers, handleDelete, handleOpen } = param;\n    console.log(customers);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"cards\",\n        children: customers.map((customer)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_card_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomerCartTitle__WEBPACK_IMPORTED_MODULE_1__.CardTitle, {\n                    last_name: customer.last_Name,\n                    first_name: customer.first_Name,\n                    middle_name: customer.middle_Name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\components\\\\Customers.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                }, void 0),\n                bordered: false,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Телефон: \",\n                            customer.phone\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\components\\\\Customers.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: customer.phone\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\components\\\\Customers.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Город\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\components\\\\Customers.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: customer.city\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\components\\\\Customers.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card_buttons\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_button_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                onClick: ()=>handleOpen(customer),\n                                style: {\n                                    flex: 1\n                                },\n                                children: \"Редактировать\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\components\\\\Customers.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_button_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                onClick: ()=>handleDelete(customer.id),\n                                style: {\n                                    flex: 1\n                                },\n                                danger: true,\n                                children: \"Удалить\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\components\\\\Customers.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\components\\\\Customers.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, customer.id, true, {\n                fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\components\\\\Customers.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\components\\\\Customers.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Customers;\nvar _c;\n$RefreshReg$(_c, \"Customers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0N1c3RvbWVycy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBQ0k7QUFDWDtBQVE5QixNQUFNRyxZQUFZO1FBQUMsRUFBRUMsU0FBUyxFQUFFQyxZQUFZLEVBQUVDLFVBQVUsRUFBUztJQUN0RUMsUUFBUUMsR0FBRyxDQUFDSjtJQUNaLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVO2tCQUNaTixVQUFVTyxHQUFHLENBQUMsQ0FBQ0MseUJBQ2QsOERBQUNWLHlEQUFJQTtnQkFFSFcscUJBQ0UsOERBQUNaLHlEQUFTQTtvQkFDUmEsV0FBV0YsU0FBU0csU0FBUztvQkFDN0JDLFlBQVlKLFNBQVNLLFVBQVU7b0JBQy9CQyxhQUFhTixTQUFTTyxXQUFXOzs7Ozs7Z0JBR3JDQyxVQUFVOztrQ0FFViw4REFBQ0M7OzRCQUFFOzRCQUFVVCxTQUFTVSxLQUFLOzs7Ozs7O2tDQUMzQiw4REFBQ0Q7a0NBQUdULFNBQVNVLEtBQUs7Ozs7OztrQ0FDbEIsOERBQUNEO2tDQUFFOzs7Ozs7a0NBQ0gsOERBQUNBO2tDQUFHVCxTQUFTVyxJQUFJOzs7Ozs7a0NBQ2pCLDhEQUFDZDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNWLDZEQUFNQTtnQ0FBQ3dCLFNBQVMsSUFBTWxCLFdBQVdNO2dDQUFXYSxPQUFPO29DQUFFQyxNQUFNO2dDQUFFOzBDQUFHOzs7Ozs7MENBR2pFLDhEQUFDMUIsNkRBQU1BO2dDQUNMd0IsU0FBUyxJQUFNbkIsYUFBYU8sU0FBU2UsRUFBRTtnQ0FDdkNGLE9BQU87b0NBQUVDLE1BQU07Z0NBQUU7Z0NBQ2pCRSxNQUFNOzBDQUNQOzs7Ozs7Ozs7Ozs7O2VBdEJFaEIsU0FBU2UsRUFBRTs7Ozs7Ozs7OztBQThCMUIsRUFBRTtLQXBDV3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0N1c3RvbWVycy50c3g/YjgyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gXCJhbnRkL2VzLy9idXR0b24vYnV0dG9uXCI7XHJcbmltcG9ydCB7IENhcmRUaXRsZSB9IGZyb20gXCIuL0N1c3RvbWVyQ2FydFRpdGxlXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJhbnRkL2VzL2NhcmQvQ2FyZFwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjdXN0b21lcnM6IEN1c3RvbWVyW107XHJcbiAgaGFuZGxlRGVsZXRlOiAoaWQ6IHN0cmluZykgPT4gdm9pZDtcclxuICBoYW5kbGVPcGVuOiAoY3VzdG9tZXI6IEN1c3RvbWVyKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ3VzdG9tZXJzID0gKHsgY3VzdG9tZXJzLCBoYW5kbGVEZWxldGUsIGhhbmRsZU9wZW4gfTogUHJvcHMpID0+IHtcclxuICBjb25zb2xlLmxvZyhjdXN0b21lcnMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzXCI+XHJcbiAgICAgIHtjdXN0b21lcnMubWFwKChjdXN0b21lcjogQ3VzdG9tZXIpID0+IChcclxuICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAga2V5PXtjdXN0b21lci5pZH1cclxuICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgPENhcmRUaXRsZVxyXG4gICAgICAgICAgICAgIGxhc3RfbmFtZT17Y3VzdG9tZXIubGFzdF9OYW1lfVxyXG4gICAgICAgICAgICAgIGZpcnN0X25hbWU9e2N1c3RvbWVyLmZpcnN0X05hbWV9XHJcbiAgICAgICAgICAgICAgbWlkZGxlX25hbWU9e2N1c3RvbWVyLm1pZGRsZV9OYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYm9yZGVyZWQ9e2ZhbHNlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwPtCi0LXQu9C10YTQvtC9OiB7Y3VzdG9tZXIucGhvbmV9PC9wPlxyXG4gICAgICAgICAgPHA+e2N1c3RvbWVyLnBob25lfTwvcD5cclxuICAgICAgICAgIDxwPtCT0L7RgNC+0LQ8L3A+XHJcbiAgICAgICAgICA8cD57Y3VzdG9tZXIuY2l0eX08L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW4oY3VzdG9tZXIpfSBzdHlsZT17eyBmbGV4OiAxIH19PlxyXG4gICAgICAgICAgICAgINCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGN1c3RvbWVyLmlkKX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBmbGV4OiAxIH19XHJcbiAgICAgICAgICAgICAgZGFuZ2VyXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiQ2FyZFRpdGxlIiwiQ2FyZCIsIkN1c3RvbWVycyIsImN1c3RvbWVycyIsImhhbmRsZURlbGV0ZSIsImhhbmRsZU9wZW4iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiY3VzdG9tZXIiLCJ0aXRsZSIsImxhc3RfbmFtZSIsImxhc3RfTmFtZSIsImZpcnN0X25hbWUiLCJmaXJzdF9OYW1lIiwibWlkZGxlX25hbWUiLCJtaWRkbGVfTmFtZSIsImJvcmRlcmVkIiwicCIsInBob25lIiwiY2l0eSIsIm9uQ2xpY2siLCJzdHlsZSIsImZsZXgiLCJpZCIsImRhbmdlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Customers.tsx\n"));

/***/ })

});