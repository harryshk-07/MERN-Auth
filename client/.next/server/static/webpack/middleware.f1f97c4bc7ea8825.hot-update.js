"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nfunction middleware(request) {\n    console.log(\"middleware executed \");\n    const authToken = localStorage.console.log(authToken, \"my token\");\n    const path = request.nextUrl.pathname;\n    const loggedInpathNotAccess = path === \"/username\" || path === \"/register\";\n    if (loggedInpathNotAccess && authToken) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/profile\", request.url));\n    }\n    if (!loggedInpathNotAccess && !authToken) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/\", request.url));\n    }\n}\nconst config = {\n    matcher: [\n        \"/login\",\n        \"/profile\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFHcEMsU0FBU0MsV0FBV0MsT0FBb0I7SUFDN0NDLFFBQVFDLEdBQUcsQ0FBQztJQUVaLE1BQU1DLFlBQVlDLGFBQ2xCSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVztJQUN2QixNQUFNRSxPQUFPTCxRQUFRTSxPQUFPLENBQUNDLFFBQVE7SUFDckMsTUFBTUMsd0JBQXdCSCxTQUFTLGVBQWVBLFNBQVM7SUFFL0QsSUFBSUcseUJBQXlCTCxXQUFXO1FBQ3RDLE9BQU9MLDJGQUFxQixDQUFDLElBQUlZLElBQUksWUFBWVYsUUFBUVcsR0FBRztJQUM5RDtJQUNBLElBQUksQ0FBQ0gseUJBQXlCLENBQUNMLFdBQVc7UUFDeEMsT0FBT0wsMkZBQXFCLENBQUMsSUFBSVksSUFBSSxLQUFLVixRQUFRVyxHQUFHO0lBQ3ZEO0FBQ0Y7QUFFTyxNQUFNQyxTQUFTO0lBQ3BCQyxTQUFTO1FBQUM7UUFBVTtLQUFXO0FBQ2pDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS50cz80MjJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgeyBOZXh0UmVxdWVzdCB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcclxuICBjb25zb2xlLmxvZyhcIm1pZGRsZXdhcmUgZXhlY3V0ZWQgXCIpO1xyXG5cclxuICBjb25zdCBhdXRoVG9rZW4gPSBsb2NhbFN0b3JhZ2UuXHJcbiAgY29uc29sZS5sb2coYXV0aFRva2VuLCBcIm15IHRva2VuXCIpO1xyXG4gIGNvbnN0IHBhdGggPSByZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWU7XHJcbiAgY29uc3QgbG9nZ2VkSW5wYXRoTm90QWNjZXNzID0gcGF0aCA9PT0gXCIvdXNlcm5hbWVcIiB8fCBwYXRoID09PSBcIi9yZWdpc3RlclwiO1xyXG5cclxuICBpZiAobG9nZ2VkSW5wYXRoTm90QWNjZXNzICYmIGF1dGhUb2tlbikge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKFwiL3Byb2ZpbGVcIiwgcmVxdWVzdC51cmwpKTtcclxuICB9XHJcbiAgaWYgKCFsb2dnZWRJbnBhdGhOb3RBY2Nlc3MgJiYgIWF1dGhUb2tlbikge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKFwiL1wiLCByZXF1ZXN0LnVybCkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBtYXRjaGVyOiBbXCIvbG9naW5cIiwgXCIvcHJvZmlsZVwiXSxcclxufTtcclxuXHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsImNvbnNvbGUiLCJsb2ciLCJhdXRoVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJwYXRoIiwibmV4dFVybCIsInBhdGhuYW1lIiwibG9nZ2VkSW5wYXRoTm90QWNjZXNzIiwicmVkaXJlY3QiLCJVUkwiLCJ1cmwiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});