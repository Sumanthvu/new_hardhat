/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/p-fifo";
exports.ids = ["vendor-chunks/p-fifo"];
exports.modules = {

/***/ "(ssr)/./node_modules/p-fifo/index.js":
/*!**************************************!*\
  !*** ./node_modules/p-fifo/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Fifo = __webpack_require__(/*! fast-fifo */ \"(ssr)/./node_modules/fast-fifo/index.js\")\nconst defer = __webpack_require__(/*! p-defer */ \"(ssr)/./node_modules/p-fifo/node_modules/p-defer/index.js\")\n\nmodule.exports = class PFifo {\n  constructor () {\n    this._buffer = new Fifo()\n    this._waitingConsumers = new Fifo()\n  }\n\n  push (chunk) {\n    const { promise, resolve } = defer()\n    this._buffer.push({ chunk, resolve })\n    this._consume()\n    return promise\n  }\n\n  _consume () {\n    while (!this._waitingConsumers.isEmpty() && !this._buffer.isEmpty()) {\n      const nextConsumer = this._waitingConsumers.shift()\n      const nextChunk = this._buffer.shift()\n      nextConsumer.resolve(nextChunk.chunk)\n      nextChunk.resolve()\n    }\n  }\n\n  shift () {\n    const { promise, resolve } = defer()\n    this._waitingConsumers.push({ resolve })\n    this._consume()\n    return promise\n  }\n\n  isEmpty () {\n    return this._buffer.isEmpty()\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcC1maWZvL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLGFBQWEsbUJBQU8sQ0FBQywwREFBVztBQUNoQyxjQUFjLG1CQUFPLENBQUMsMEVBQVM7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQix3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxtQkFBbUI7QUFDL0Isa0NBQWtDLFNBQVM7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHN1bWFuX3MydmltYm1cXE9uZURyaXZlXFxEZXNrdG9wXFxORlQtTmV4dXNcXG5ld19oYXJkaGF0XFxub2RlX21vZHVsZXNcXHAtZmlmb1xcaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRmlmbyA9IHJlcXVpcmUoJ2Zhc3QtZmlmbycpXG5jb25zdCBkZWZlciA9IHJlcXVpcmUoJ3AtZGVmZXInKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFBGaWZvIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuX2J1ZmZlciA9IG5ldyBGaWZvKClcbiAgICB0aGlzLl93YWl0aW5nQ29uc3VtZXJzID0gbmV3IEZpZm8oKVxuICB9XG5cbiAgcHVzaCAoY2h1bmspIHtcbiAgICBjb25zdCB7IHByb21pc2UsIHJlc29sdmUgfSA9IGRlZmVyKClcbiAgICB0aGlzLl9idWZmZXIucHVzaCh7IGNodW5rLCByZXNvbHZlIH0pXG4gICAgdGhpcy5fY29uc3VtZSgpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIF9jb25zdW1lICgpIHtcbiAgICB3aGlsZSAoIXRoaXMuX3dhaXRpbmdDb25zdW1lcnMuaXNFbXB0eSgpICYmICF0aGlzLl9idWZmZXIuaXNFbXB0eSgpKSB7XG4gICAgICBjb25zdCBuZXh0Q29uc3VtZXIgPSB0aGlzLl93YWl0aW5nQ29uc3VtZXJzLnNoaWZ0KClcbiAgICAgIGNvbnN0IG5leHRDaHVuayA9IHRoaXMuX2J1ZmZlci5zaGlmdCgpXG4gICAgICBuZXh0Q29uc3VtZXIucmVzb2x2ZShuZXh0Q2h1bmsuY2h1bmspXG4gICAgICBuZXh0Q2h1bmsucmVzb2x2ZSgpXG4gICAgfVxuICB9XG5cbiAgc2hpZnQgKCkge1xuICAgIGNvbnN0IHsgcHJvbWlzZSwgcmVzb2x2ZSB9ID0gZGVmZXIoKVxuICAgIHRoaXMuX3dhaXRpbmdDb25zdW1lcnMucHVzaCh7IHJlc29sdmUgfSlcbiAgICB0aGlzLl9jb25zdW1lKClcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgaXNFbXB0eSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1ZmZlci5pc0VtcHR5KClcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/p-fifo/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/p-fifo/node_modules/p-defer/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/p-fifo/node_modules/p-defer/index.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nconst pDefer = () => {\n\tconst deferred = {};\n\n\tdeferred.promise = new Promise((resolve, reject) => {\n\t\tdeferred.resolve = resolve;\n\t\tdeferred.reject = reject;\n\t});\n\n\treturn deferred;\n};\n\nmodule.exports = pDefer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcC1maWZvL25vZGVfbW9kdWxlcy9wLWRlZmVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHN1bWFuX3MydmltYm1cXE9uZURyaXZlXFxEZXNrdG9wXFxORlQtTmV4dXNcXG5ld19oYXJkaGF0XFxub2RlX21vZHVsZXNcXHAtZmlmb1xcbm9kZV9tb2R1bGVzXFxwLWRlZmVyXFxpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBEZWZlciA9ICgpID0+IHtcblx0Y29uc3QgZGVmZXJyZWQgPSB7fTtcblxuXHRkZWZlcnJlZC5wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGRlZmVycmVkLnJlc29sdmUgPSByZXNvbHZlO1xuXHRcdGRlZmVycmVkLnJlamVjdCA9IHJlamVjdDtcblx0fSk7XG5cblx0cmV0dXJuIGRlZmVycmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwRGVmZXI7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/p-fifo/node_modules/p-defer/index.js\n");

/***/ })

};
;