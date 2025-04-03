/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/get-iterator";
exports.ids = ["vendor-chunks/get-iterator"];
exports.modules = {

/***/ "(ssr)/./node_modules/get-iterator/index.js":
/*!********************************************!*\
  !*** ./node_modules/get-iterator/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("// If the passed object is an (async) iterable, then get the iterator\n// If it's probably an iterator already (i.e. has next function) return it\n// else throw\nmodule.exports = function getIterator (obj) {\n  if (obj) {\n    if (typeof obj[Symbol.iterator] === 'function') {\n      return obj[Symbol.iterator]()\n    }\n    if (typeof obj[Symbol.asyncIterator] === 'function') {\n      return obj[Symbol.asyncIterator]()\n    }\n    if (typeof obj.next === 'function') {\n      return obj // probably an iterator\n    }\n  }\n  throw new Error('argument is not an iterator or iterable')\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZ2V0LWl0ZXJhdG9yL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc3VtYW5fczJ2aW1ibVxcT25lRHJpdmVcXERlc2t0b3BcXE5GVC1OZXh1c1xcbmV3X2hhcmRoYXRcXG5vZGVfbW9kdWxlc1xcZ2V0LWl0ZXJhdG9yXFxpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJZiB0aGUgcGFzc2VkIG9iamVjdCBpcyBhbiAoYXN5bmMpIGl0ZXJhYmxlLCB0aGVuIGdldCB0aGUgaXRlcmF0b3Jcbi8vIElmIGl0J3MgcHJvYmFibHkgYW4gaXRlcmF0b3IgYWxyZWFkeSAoaS5lLiBoYXMgbmV4dCBmdW5jdGlvbikgcmV0dXJuIGl0XG4vLyBlbHNlIHRocm93XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldEl0ZXJhdG9yIChvYmopIHtcbiAgaWYgKG9iaikge1xuICAgIGlmICh0eXBlb2Ygb2JqW1N5bWJvbC5pdGVyYXRvcl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBvYmpbU3ltYm9sLml0ZXJhdG9yXSgpXG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG9ialtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIG9iai5uZXh0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gb2JqIC8vIHByb2JhYmx5IGFuIGl0ZXJhdG9yXG4gICAgfVxuICB9XG4gIHRocm93IG5ldyBFcnJvcignYXJndW1lbnQgaXMgbm90IGFuIGl0ZXJhdG9yIG9yIGl0ZXJhYmxlJylcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/get-iterator/index.js\n");

/***/ })

};
;