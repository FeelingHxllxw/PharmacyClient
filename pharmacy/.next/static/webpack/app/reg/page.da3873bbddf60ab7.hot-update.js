"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/reg/page",{

/***/ "(app-pages-browser)/./app/reg/page.tsx":
/*!**************************!*\
  !*** ./app/reg/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RegPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var C_Projects_Pharmacy_frontend_pharmacy_app_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/globals.css */ \"(app-pages-browser)/./app/globals.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_LockOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=LockOutlined,UserOutlined!=!@ant-design/icons */ \"(app-pages-browser)/../node_modules/@ant-design/icons/es/icons/UserOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_LockOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=LockOutlined,UserOutlined!=!@ant-design/icons */ \"(app-pages-browser)/../node_modules/@ant-design/icons/es/icons/LockOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Form_Input_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Form,Input!=!antd */ \"(app-pages-browser)/../node_modules/antd/es/form/index.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Form_Input_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Form,Input!=!antd */ \"(app-pages-browser)/../node_modules/antd/es/input/index.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Form_Input_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Form,Input!=!antd */ \"(app-pages-browser)/../node_modules/antd/es/button/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _services_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/users */ \"(app-pages-browser)/./app/services/users.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction RegPage() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [login, setLogin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [passwordCheck, setPasswordCheck] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleRegister = async ()=>{\n        if (password == passwordCheck) {\n            const user = {\n                login,\n                password\n            };\n            try {\n                await (0,_services_users__WEBPACK_IMPORTED_MODULE_4__.createUser)(user);\n                ToLogin();\n            } catch (error) {\n                console.error(error);\n            }\n        } else {\n            alert(\"Пароли не сопадают\");\n        }\n    };\n    const ToLogin = ()=>{\n        router.push(\"/\");\n    };\n    const handleUsernameChange = (event)=>{\n        setLogin(event.target.value);\n    };\n    const handlePasswordChange = (event)=>{\n        setPassword(event.target.value);\n    };\n    const handlePasswordCheckChange = (event)=>{\n        setPasswordCheck(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"login-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Form_Input_antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            name: \"normal_login\",\n            className: \"login-form\",\n            initialValues: {\n                remember: true\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Form_Input_antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                    name: \"username\",\n                    rules: [\n                        {\n                            required: true,\n                            message: \"Please input your Username!\"\n                        }\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Form_Input_antd__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        prefix: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LockOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: \"site-form-item-icon\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\reg\\\\page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 21\n                        }, void 0),\n                        placeholder: \"Username\",\n                        onChange: handleUsernameChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\reg\\\\page.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\reg\\\\page.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Form_Input_antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                    name: \"password\",\n                    rules: [\n                        {\n                            required: true,\n                            message: \"Please input your Password!\"\n                        }\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Form_Input_antd__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        prefix: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LockOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            className: \"site-form-item-icon\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\reg\\\\page.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, void 0),\n                        type: \"password\",\n                        placeholder: \"Password\",\n                        onChange: handlePasswordChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\reg\\\\page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\reg\\\\page.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Form_Input_antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                    name: \"passwordCHeck\",\n                    rules: [\n                        {\n                            required: true,\n                            message: \"Please input your Password!\"\n                        }\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Form_Input_antd__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        prefix: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LockOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            className: \"site-form-item-icon\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\reg\\\\page.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 21\n                        }, void 0),\n                        type: \"password\",\n                        placeholder: \"Repeat Password\",\n                        onChange: handlePasswordCheckChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\reg\\\\page.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\reg\\\\page.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Form_Input_antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"button-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Form_Input_antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                type: \"primary\",\n                                htmlType: \"submit\",\n                                className: \"login-form-button\",\n                                onClick: handleRegister,\n                                children: \"Register\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\reg\\\\page.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Form_Input_antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                type: \"primary\",\n                                htmlType: \"submit\",\n                                className: \"login-form-button\",\n                                onClick: ToLogin,\n                                style: {\n                                    marginLeft: \"10px\"\n                                },\n                                children: \"Back to Login\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\reg\\\\page.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\reg\\\\page.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\reg\\\\page.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\reg\\\\page.tsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Projects\\\\Pharmacy\\\\frontend\\\\pharmacy\\\\app\\\\reg\\\\page.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(RegPage, \"cJbaXaoCjkKjtGf+8BtTpObm2QY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = RegPage;\nvar _c;\n$RefreshReg$(_c, \"RegPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9yZWcvcGFnZS50c3g/YjY2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBcIkM6L1Byb2plY3RzL1BoYXJtYWN5L2Zyb250ZW5kL3BoYXJtYWN5L2FwcC9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTG9ja091dGxpbmVkLCBVc2VyT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgY3JlYXRlVXNlciwgVXNlclJlcXVlc3QgfSBmcm9tIFwiLi4vc2VydmljZXMvdXNlcnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ1BhZ2UoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmRDaGVjaywgc2V0UGFzc3dvcmRDaGVja10gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IGhhbmRsZVJlZ2lzdGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKHBhc3N3b3JkID09IHBhc3N3b3JkQ2hlY2spIHtcclxuICAgICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgICBsb2dpbixcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICAgfSBhcyBVc2VyUmVxdWVzdDtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBjcmVhdGVVc2VyKHVzZXIpO1xyXG4gICAgICAgIFRvTG9naW4oKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoXCLQn9Cw0YDQvtC70Lgg0L3QtSDRgdC+0L/QsNC00LDRjtGCXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFRvTG9naW4gPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVXNlcm5hbWVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRMb2dpbihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhc3N3b3JkQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0UGFzc3dvcmQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQYXNzd29yZENoZWNrQ2hhbmdlID0gKFxyXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+XHJcbiAgKSA9PiB7XHJcbiAgICBzZXRQYXNzd29yZENoZWNrKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tY29udGFpbmVyXCI+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgbmFtZT1cIm5vcm1hbF9sb2dpblwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyByZW1lbWJlcjogdHJ1ZSB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJQbGVhc2UgaW5wdXQgeW91ciBVc2VybmFtZSFcIiB9XX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgcHJlZml4PXs8VXNlck91dGxpbmVkIGNsYXNzTmFtZT1cInNpdGUtZm9ybS1pdGVtLWljb25cIiAvPn1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVVc2VybmFtZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJQbGVhc2UgaW5wdXQgeW91ciBQYXNzd29yZCFcIiB9XX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgcHJlZml4PXs8TG9ja091dGxpbmVkIGNsYXNzTmFtZT1cInNpdGUtZm9ybS1pdGVtLWljb25cIiAvPn1cclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQYXNzd29yZENoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkQ0hlY2tcIlxyXG4gICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIlBsZWFzZSBpbnB1dCB5b3VyIFBhc3N3b3JkIVwiIH1dfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBwcmVmaXg9ezxMb2NrT3V0bGluZWQgY2xhc3NOYW1lPVwic2l0ZS1mb3JtLWl0ZW0taWNvblwiIC8+fVxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlcGVhdCBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQYXNzd29yZENoZWNrQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ2luLWZvcm0tYnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZWdpc3Rlcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFJlZ2lzdGVyXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dpbi1mb3JtLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17VG9Mb2dpbn1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQmFjayB0byBMb2dpblxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTG9ja091dGxpbmVkIiwiVXNlck91dGxpbmVkIiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwidXNlUm91dGVyIiwiY3JlYXRlVXNlciIsIlJlZ1BhZ2UiLCJyb3V0ZXIiLCJsb2dpbiIsInNldExvZ2luIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInBhc3N3b3JkQ2hlY2siLCJzZXRQYXNzd29yZENoZWNrIiwiaGFuZGxlUmVnaXN0ZXIiLCJ1c2VyIiwiVG9Mb2dpbiIsImVycm9yIiwiY29uc29sZSIsImFsZXJ0IiwicHVzaCIsImhhbmRsZVVzZXJuYW1lQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVBhc3N3b3JkQ2hhbmdlIiwiaGFuZGxlUGFzc3dvcmRDaGVja0NoYW5nZSIsImRpdiIsImNsYXNzTmFtZSIsIm5hbWUiLCJpbml0aWFsVmFsdWVzIiwicmVtZW1iZXIiLCJJdGVtIiwicnVsZXMiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJwcmVmaXgiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidHlwZSIsImh0bWxUeXBlIiwib25DbGljayIsInN0eWxlIiwibWFyZ2luTGVmdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/reg/page.tsx\n"));

/***/ })

});