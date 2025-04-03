/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/stream-to-it";
exports.ids = ["vendor-chunks/stream-to-it"];
exports.modules = {

/***/ "(ssr)/./node_modules/stream-to-it/source.js":
/*!*********************************************!*\
  !*** ./node_modules/stream-to-it/source.js ***!
  \*********************************************/
/***/ ((module) => {

eval("module.exports = readable => {\n  // Node.js stream\n  if (readable[Symbol.asyncIterator]) return readable\n\n  // Browser ReadableStream\n  if (readable.getReader) {\n    return (async function * () {\n      const reader = readable.getReader()\n\n      try {\n        while (true) {\n          const { done, value } = await reader.read()\n          if (done) return\n          yield value\n        }\n      } finally {\n        reader.releaseLock()\n      }\n    })()\n  }\n\n  throw new Error('unknown stream')\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3RyZWFtLXRvLWl0L3NvdXJjZS5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixjQUFjO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc3VtYW5fczJ2aW1ibVxcT25lRHJpdmVcXERlc2t0b3BcXE5GVC1OZXh1c1xcbmV3X2hhcmRoYXRcXG5vZGVfbW9kdWxlc1xcc3RyZWFtLXRvLWl0XFxzb3VyY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZWFkYWJsZSA9PiB7XG4gIC8vIE5vZGUuanMgc3RyZWFtXG4gIGlmIChyZWFkYWJsZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0pIHJldHVybiByZWFkYWJsZVxuXG4gIC8vIEJyb3dzZXIgUmVhZGFibGVTdHJlYW1cbiAgaWYgKHJlYWRhYmxlLmdldFJlYWRlcikge1xuICAgIHJldHVybiAoYXN5bmMgZnVuY3Rpb24gKiAoKSB7XG4gICAgICBjb25zdCByZWFkZXIgPSByZWFkYWJsZS5nZXRSZWFkZXIoKVxuXG4gICAgICB0cnkge1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgIGNvbnN0IHsgZG9uZSwgdmFsdWUgfSA9IGF3YWl0IHJlYWRlci5yZWFkKClcbiAgICAgICAgICBpZiAoZG9uZSkgcmV0dXJuXG4gICAgICAgICAgeWllbGQgdmFsdWVcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgcmVhZGVyLnJlbGVhc2VMb2NrKClcbiAgICAgIH1cbiAgICB9KSgpXG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gc3RyZWFtJylcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/stream-to-it/source.js\n");

/***/ })

};
;