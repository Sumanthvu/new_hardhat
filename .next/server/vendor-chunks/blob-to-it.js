"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/blob-to-it";
exports.ids = ["vendor-chunks/blob-to-it"];
exports.modules = {

/***/ "(ssr)/./node_modules/blob-to-it/dist/src/index.js":
/*!***************************************************!*\
  !*** ./node_modules/blob-to-it/dist/src/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ blobToIt)\n/* harmony export */ });\n/* harmony import */ var browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! browser-readablestream-to-it */ \"(ssr)/./node_modules/browser-readablestream-to-it/dist/src/index.js\");\n/**\n * @packageDocumentation\n *\n * Allows reading Blob contents as an async iterator.\n *\n * @example\n *\n * ```javascript\n * import toIt from 'blob-to-it'\n * import all from 'it-all'\n *\n * const content = [ Uint8Array.from([0, 1, 2, 3, 4]) ]\n * const blob = new Blob(content)\n * const arr = await all(toIt(blob))\n *\n * console.info(arr) // [ [ 0, 1, 2, 3, 4 ] ]\n * ```\n */\n\nfunction blobToIt(blob) {\n    if (typeof blob.stream === 'function') {\n        return (0,browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(blob.stream());\n    }\n    // firefox < 69 does not support blob.stream()\n    // @ts-expect-error - response.body is optional, but in practice it's a stream.\n    return (0,browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Response(blob).body);\n}\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYmxvYi10by1pdC9kaXN0L3NyYy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNxRTtBQUN0RDtBQUNmO0FBQ0EsZUFBZSx3RUFBeUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsV0FBVyx3RUFBeUI7QUFDcEM7QUFDQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxzdW1hbl9zMnZpbWJtXFxPbmVEcml2ZVxcRGVza3RvcFxcTkZULU5leHVzXFxuZXdfaGFyZGhhdFxcbm9kZV9tb2R1bGVzXFxibG9iLXRvLWl0XFxkaXN0XFxzcmNcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKlxuICogQWxsb3dzIHJlYWRpbmcgQmxvYiBjb250ZW50cyBhcyBhbiBhc3luYyBpdGVyYXRvci5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB0b0l0IGZyb20gJ2Jsb2ItdG8taXQnXG4gKiBpbXBvcnQgYWxsIGZyb20gJ2l0LWFsbCdcbiAqXG4gKiBjb25zdCBjb250ZW50ID0gWyBVaW50OEFycmF5LmZyb20oWzAsIDEsIDIsIDMsIDRdKSBdXG4gKiBjb25zdCBibG9iID0gbmV3IEJsb2IoY29udGVudClcbiAqIGNvbnN0IGFyciA9IGF3YWl0IGFsbCh0b0l0KGJsb2IpKVxuICpcbiAqIGNvbnNvbGUuaW5mbyhhcnIpIC8vIFsgWyAwLCAxLCAyLCAzLCA0IF0gXVxuICogYGBgXG4gKi9cbmltcG9ydCBicm93c2VyUmVhZGFibGVTdHJlYW1Ub0l0IGZyb20gJ2Jyb3dzZXItcmVhZGFibGVzdHJlYW0tdG8taXQnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmxvYlRvSXQoYmxvYikge1xuICAgIGlmICh0eXBlb2YgYmxvYi5zdHJlYW0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGJyb3dzZXJSZWFkYWJsZVN0cmVhbVRvSXQoYmxvYi5zdHJlYW0oKSk7XG4gICAgfVxuICAgIC8vIGZpcmVmb3ggPCA2OSBkb2VzIG5vdCBzdXBwb3J0IGJsb2Iuc3RyZWFtKClcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gcmVzcG9uc2UuYm9keSBpcyBvcHRpb25hbCwgYnV0IGluIHByYWN0aWNlIGl0J3MgYSBzdHJlYW0uXG4gICAgcmV0dXJuIGJyb3dzZXJSZWFkYWJsZVN0cmVhbVRvSXQobmV3IFJlc3BvbnNlKGJsb2IpLmJvZHkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/blob-to-it/dist/src/index.js\n");

/***/ })

};
;