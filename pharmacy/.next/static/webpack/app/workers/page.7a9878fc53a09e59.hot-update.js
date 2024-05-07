"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/workers/page",{

/***/ "(app-pages-browser)/./app/services/workers.ts":
/*!*********************************!*\
  !*** ./app/services/workers.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createWorker: function() { return /* binding */ createWorker; },\n/* harmony export */   deleteWorker: function() { return /* binding */ deleteWorker; },\n/* harmony export */   getAllWorkers: function() { return /* binding */ getAllWorkers; },\n/* harmony export */   updateWorker: function() { return /* binding */ updateWorker; }\n/* harmony export */ });\nconst getAllWorkers = async ()=>{\n    const response = await fetch(\"https://localhost:7054/Workers\");\n    return response.json();\n};\nconst createWorker = async (workerRequest)=>{\n    await fetch(\"https://localhost:7054/Workers\", {\n        method: \"POST\",\n        headers: {\n            \"content-type\": \"application/json\"\n        },\n        body: JSON.stringify(workerRequest)\n    });\n};\nconst updateWorker = async (id, workerRequest)=>{\n    await fetch(\"https://localhost:7054/Workers/\".concat(id), {\n        method: \"PUT\",\n        headers: {\n            \"content-type\": \"application/json\"\n        },\n        body: JSON.stringify(workerRequest)\n    });\n};\nconst deleteWorker = async (id)=>{\n    await fetch(\"https://localhost:7054/Workers/\".concat(id), {\n        method: \"DELETE\"\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9zZXJ2aWNlcy93b3JrZXJzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFTTyxNQUFNQSxnQkFBZ0I7SUFDM0IsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO0lBQzdCLE9BQU9ELFNBQVNFLElBQUk7QUFDdEIsRUFBRTtBQUVLLE1BQU1DLGVBQWUsT0FBT0M7SUFDakMsTUFBTUgsTUFBTSxrQ0FBa0M7UUFDNUNJLFFBQVE7UUFDUkMsU0FBUztZQUNQLGdCQUFnQjtRQUNsQjtRQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNMO0lBQ3ZCO0FBQ0YsRUFBRTtBQUVLLE1BQU1NLGVBQWUsT0FDMUJDLElBQ0FQO0lBRUEsTUFBTUgsTUFBTSxrQ0FBcUMsT0FBSFUsS0FBTTtRQUNsRE4sUUFBUTtRQUNSQyxTQUFTO1lBQ1AsZ0JBQWdCO1FBQ2xCO1FBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ0w7SUFDdkI7QUFDRixFQUFFO0FBRUssTUFBTVEsZUFBZSxPQUFPRDtJQUNqQyxNQUFNVixNQUFNLGtDQUFxQyxPQUFIVSxLQUFNO1FBQ2xETixRQUFRO0lBQ1Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9zZXJ2aWNlcy93b3JrZXJzLnRzPzA3OTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBXb3JrZXJSZXF1ZXN0IHtcclxuICBsYXN0X25hbWU6IHN0cmluZztcclxuICBmaXJzdF9uYW1lOiBzdHJpbmc7XHJcbiAgbWlkZGxlX25hbWU6IHN0cmluZztcclxuICBlbXBsb3ltZW50X0RhdGU6IERhdGU7XHJcbiAgYmlydGhfZGF0ZTogRGF0ZTtcclxuICBlZHVjYXRpb246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFsbFdvcmtlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vbG9jYWxob3N0OjcwNTQvV29ya2Vyc1wiKTtcclxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVdvcmtlciA9IGFzeW5jICh3b3JrZXJSZXF1ZXN0OiBXb3JrZXJSZXF1ZXN0KSA9PiB7XHJcbiAgYXdhaXQgZmV0Y2goXCJodHRwczovL2xvY2FsaG9zdDo3MDU0L1dvcmtlcnNcIiwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkod29ya2VyUmVxdWVzdCksXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlV29ya2VyID0gYXN5bmMgKFxyXG4gIGlkOiBzdHJpbmcsXHJcbiAgd29ya2VyUmVxdWVzdDogV29ya2VyUmVxdWVzdFxyXG4pID0+IHtcclxuICBhd2FpdCBmZXRjaChgaHR0cHM6Ly9sb2NhbGhvc3Q6NzA1NC9Xb3JrZXJzLyR7aWR9YCwge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh3b3JrZXJSZXF1ZXN0KSxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVXb3JrZXIgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xyXG4gIGF3YWl0IGZldGNoKGBodHRwczovL2xvY2FsaG9zdDo3MDU0L1dvcmtlcnMvJHtpZH1gLCB7XHJcbiAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgfSk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJnZXRBbGxXb3JrZXJzIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJjcmVhdGVXb3JrZXIiLCJ3b3JrZXJSZXF1ZXN0IiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidXBkYXRlV29ya2VyIiwiaWQiLCJkZWxldGVXb3JrZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/services/workers.ts\n"));

/***/ })

});