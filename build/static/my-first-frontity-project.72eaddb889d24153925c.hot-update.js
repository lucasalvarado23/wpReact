webpackHotUpdate("my-first-frontity-project",{

/***/ "./node_modules/@frontity/components/link/index.tsx":
false,

/***/ "./node_modules/@frontity/components/link/utils.ts":
false,

/***/ "./node_modules/@frontity/components/switch.tsx":
/*!******************************************************!*\
  !*** ./node_modules/@frontity/components/switch.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}const Switch=({children})=>{const components=react__WEBPACK_IMPORTED_MODULE_1__[\"Children\"].toArray(children);// Check if components[] has a non-ReactNode type Element\nconst hasInvalidComponent=components.findIndex(component=>!/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"isValidElement\"])(component))!==-1;// last element in components[]\nconst lastComponent=components[components.length-1];// Check if last component is default component - No when props\nconst lastComponentIsDefault=/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"isValidElement\"])(lastComponent)&&!(\"when\"in lastComponent.props);if(hasInvalidComponent){Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"warn\"])(\"Children of <Switch /> component should be a type of ReactNode\");}// Filter components by the value of the 'when' props or path\nconst filteredComponent=components.find(component=>/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"isValidElement\"])(component)&&component.props.when);// Render filteredComponents\nif(filteredComponent){const _filteredComponent$pr=filteredComponent.props,{when}=_filteredComponent$pr,props=_objectWithoutProperties(_filteredComponent$pr,[\"when\"]);return/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(filteredComponent.type,_objectSpread({},props));}// render last component if it's diffult component (without when props);\nif(lastComponentIsDefault)return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"],{children:lastComponent});// Return `null` if none of the children have matched.\nreturn null;};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(Switch));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZyb250aXR5L2NvbXBvbmVudHMvc3dpdGNoLnRzeD8zNTVjIl0sIm5hbWVzIjpbIlN3aXRjaCIsImNoaWxkcmVuIiwiY29tcG9uZW50cyIsIlJlYWN0IiwidG9BcnJheSIsImhhc0ludmFsaWRDb21wb25lbnQiLCJmaW5kSW5kZXgiLCJjb21wb25lbnQiLCJpc1ZhbGlkRWxlbWVudCIsImxhc3RDb21wb25lbnQiLCJsZW5ndGgiLCJsYXN0Q29tcG9uZW50SXNEZWZhdWx0IiwicHJvcHMiLCJ3YXJuIiwiZmlsdGVyZWRDb21wb25lbnQiLCJmaW5kIiwid2hlbiIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OzBwREFjQSxLQUFNQSxPQUFnQyxDQUFHLENBQUMsQ0FBRUMsUUFBRixDQUFELEdBQWtCLENBQ3pELEtBQU1DLFdBQTBCLENBQUdDLDhDQUFBLENBQWVDLE9BQWYsQ0FBdUJILFFBQXZCLENBQW5DLENBRUE7QUFDQSxLQUFNSSxvQkFBNEIsQ0FDaENILFVBQVUsQ0FBQ0ksU0FBWCxDQUFzQkMsU0FBRCxFQUFlLGNBQUNDLDREQUFjLENBQUNELFNBQUQsQ0FBbkQsSUFBb0UsQ0FBQyxDQUR2RSxDQUdBO0FBQ0EsS0FBTUUsY0FBYSxDQUFHUCxVQUFVLENBQUNBLFVBQVUsQ0FBQ1EsTUFBWCxDQUFvQixDQUFyQixDQUFoQyxDQUVBO0FBQ0EsS0FBTUMsdUJBQXNCLENBQzFCLGFBQUFILDREQUFjLENBQUNDLGFBQUQsQ0FBZCxFQUFpQyxFQUFFLFFBQVVBLGNBQWEsQ0FBQ0csS0FBMUIsQ0FEbkMsQ0FHQSxHQUFJUCxtQkFBSixDQUF5QixDQUN2QlEscURBQUksQ0FBQyxnRUFBRCxDQUFKLENBQ0QsQ0FFRDtBQUNBLEtBQU1DLGtCQUFpQixDQUFHWixVQUFVLENBQUNhLElBQVgsQ0FDdkJSLFNBQUQsRUFDRSxhQUFBQyw0REFBYyxDQUFjRCxTQUFkLENBQWQsRUFBMENBLFNBQVMsQ0FBQ0ssS0FBVixDQUFnQkksSUFGcEMsQ0FBMUIsQ0FLQTtBQUNBLEdBQUlGLGlCQUFKLENBQXVCLENBQ3JCLDRCQUEyQkEsaUJBQWlCLENBQUNGLEtBQTdDLENBQU0sQ0FBRUksSUFBRixDQUFOLHVCQUFpQkosS0FBakIsMERBQ0EsbUJBQU9LLDJEQUFhLENBQUNILGlCQUFpQixDQUFDSSxJQUFuQixrQkFBOEJOLEtBQTlCLEVBQXBCLENBQ0QsQ0FFRDtBQUNBLEdBQUlELHNCQUFKLENBQTRCLE1BQU8sc0pBQUdGLGFBQUgsRUFBUCxDQUU1QjtBQUNBLE1BQU8sS0FBUCxDQUNELENBbkNELENBcUNlVSx1SEFBTyxDQUFDbkIsTUFBRCxDQUF0QiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AZnJvbnRpdHkvY29tcG9uZW50cy9zd2l0Y2gudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCwgd2FybiB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IHsgUGFja2FnZSB9IGZyb20gXCJmcm9udGl0eS90eXBlc1wiO1xuaW1wb3J0IHtcbiAgaXNWYWxpZEVsZW1lbnQsXG4gIFJlYWN0Tm9kZUFycmF5LFxuICBSZWFjdEVsZW1lbnQsXG4gIGNyZWF0ZUVsZW1lbnQsXG59IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBTd2l0Y2hDaGlsZCB7XG4gIHdoZW4/OiBib29sZWFuO1xufVxuXG5jb25zdCBTd2l0Y2g6IFJlYWN0LkZDPFBhY2thZ2U+IHwgbnVsbCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgY29tcG9uZW50czogUmVhY3ROb2RlQXJyYXkgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKTtcblxuICAvLyBDaGVjayBpZiBjb21wb25lbnRzW10gaGFzIGEgbm9uLVJlYWN0Tm9kZSB0eXBlIEVsZW1lbnRcbiAgY29uc3QgaGFzSW52YWxpZENvbXBvbmVudDogYm9vbGVhbiA9XG4gICAgY29tcG9uZW50cy5maW5kSW5kZXgoKGNvbXBvbmVudCkgPT4gIWlzVmFsaWRFbGVtZW50KGNvbXBvbmVudCkpICE9PSAtMTtcblxuICAvLyBsYXN0IGVsZW1lbnQgaW4gY29tcG9uZW50c1tdXG4gIGNvbnN0IGxhc3RDb21wb25lbnQgPSBjb21wb25lbnRzW2NvbXBvbmVudHMubGVuZ3RoIC0gMV07XG5cbiAgLy8gQ2hlY2sgaWYgbGFzdCBjb21wb25lbnQgaXMgZGVmYXVsdCBjb21wb25lbnQgLSBObyB3aGVuIHByb3BzXG4gIGNvbnN0IGxhc3RDb21wb25lbnRJc0RlZmF1bHQgPVxuICAgIGlzVmFsaWRFbGVtZW50KGxhc3RDb21wb25lbnQpICYmICEoXCJ3aGVuXCIgaW4gbGFzdENvbXBvbmVudC5wcm9wcyk7XG5cbiAgaWYgKGhhc0ludmFsaWRDb21wb25lbnQpIHtcbiAgICB3YXJuKFwiQ2hpbGRyZW4gb2YgPFN3aXRjaCAvPiBjb21wb25lbnQgc2hvdWxkIGJlIGEgdHlwZSBvZiBSZWFjdE5vZGVcIik7XG4gIH1cblxuICAvLyBGaWx0ZXIgY29tcG9uZW50cyBieSB0aGUgdmFsdWUgb2YgdGhlICd3aGVuJyBwcm9wcyBvciBwYXRoXG4gIGNvbnN0IGZpbHRlcmVkQ29tcG9uZW50ID0gY29tcG9uZW50cy5maW5kKFxuICAgIChjb21wb25lbnQpID0+XG4gICAgICBpc1ZhbGlkRWxlbWVudDxTd2l0Y2hDaGlsZD4oY29tcG9uZW50KSAmJiBjb21wb25lbnQucHJvcHMud2hlblxuICApIGFzIFJlYWN0RWxlbWVudDxTd2l0Y2hDaGlsZD47XG5cbiAgLy8gUmVuZGVyIGZpbHRlcmVkQ29tcG9uZW50c1xuICBpZiAoZmlsdGVyZWRDb21wb25lbnQpIHtcbiAgICBjb25zdCB7IHdoZW4sIC4uLnByb3BzIH0gPSBmaWx0ZXJlZENvbXBvbmVudC5wcm9wcztcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChmaWx0ZXJlZENvbXBvbmVudC50eXBlLCB7IC4uLnByb3BzIH0pO1xuICB9XG5cbiAgLy8gcmVuZGVyIGxhc3QgY29tcG9uZW50IGlmIGl0J3MgZGlmZnVsdCBjb21wb25lbnQgKHdpdGhvdXQgd2hlbiBwcm9wcyk7XG4gIGlmIChsYXN0Q29tcG9uZW50SXNEZWZhdWx0KSByZXR1cm4gPD57bGFzdENvbXBvbmVudH08Lz47XG5cbiAgLy8gUmV0dXJuIGBudWxsYCBpZiBub25lIG9mIHRoZSBjaGlsZHJlbiBoYXZlIG1hdGNoZWQuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChTd2l0Y2gpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@frontity/components/switch.tsx\n");

/***/ }),

/***/ "./node_modules/@frontity/hooks/use-in-view/index.ts":
false,

/***/ "./node_modules/react-intersection-observer/react-intersection-observer.m.js":
false,

/***/ "./packages/my-first-theme/src/components/index.js":
/*!*********************************************************!*\
  !*** ./packages/my-first-theme/src/components/index.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _frontity_components_switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @frontity/components/switch */ \"./node_modules/@frontity/components/switch.tsx\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst Root=({state})=>{const data=state.source.get(state.router.link);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"h1\",{children:\"Hello Frontity\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxs\"])(\"p\",{children:[\"Current URL: \",state.router.link]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxs\"])(\"nav\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(Link,{link:\"/\",children:\"Home\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"br\",{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(Link,{link:\"/page/2\",children:\"More posts\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"br\",{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(Link,{link:\"/about-us\",children:\"About Us\"})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"hr\",{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"main\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxs\"])(_frontity_components_switch__WEBPACK_IMPORTED_MODULE_0__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"div\",{when:data.isArchive,children:\"This is a list\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"div\",{when:data.isPost,children:\"This is a post\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"div\",{when:data.isPage,children:\"This is a page\"})]})})]});};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9teS1maXJzdC10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcz85MmI5Il0sIm5hbWVzIjpbIlJvb3QiLCJzdGF0ZSIsImRhdGEiLCJzb3VyY2UiLCJnZXQiLCJyb3V0ZXIiLCJsaW5rIiwiaXNBcmNoaXZlIiwiaXNQb3N0IiwiaXNQYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFQSxLQUFNQSxLQUFJLENBQUcsQ0FBQyxDQUFFQyxLQUFGLENBQUQsR0FBZSxDQUMxQixLQUFNQyxLQUFJLENBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxHQUFiLENBQWlCSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsSUFBOUIsQ0FBYixDQUVBLE1BQ0Usd0pBQ0Usd0dBREYsQ0FFRSx1R0FBaUJMLEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUE5QixHQUZGLENBR0UseUZBQ0UsdUVBQUMsSUFBRCxFQUFNLElBQUksQ0FBQyxHQUFYLGtCQURGLENBRUUsK0VBRkYsQ0FHRSx1RUFBQyxJQUFELEVBQU0sSUFBSSxDQUFDLFNBQVgsd0JBSEYsQ0FJRSwrRUFKRixDQUtFLHVFQUFDLElBQUQsRUFBTSxJQUFJLENBQUMsV0FBWCxzQkFMRixHQUhGLENBVUUsK0VBVkYsQ0FXRSx3RkFDRSx3RUFBQyxtRUFBRCxZQUNFLDhFQUFLLElBQUksQ0FBRUosSUFBSSxDQUFDSyxTQUFoQiw0QkFERixDQUVFLDhFQUFLLElBQUksQ0FBRUwsSUFBSSxDQUFDTSxNQUFoQiw0QkFGRixDQUdFLDhFQUFLLElBQUksQ0FBRU4sSUFBSSxDQUFDTyxNQUFoQiw0QkFIRixHQURGLEVBWEYsR0FERixDQXFCRCxDQXhCRCIsImZpbGUiOiIuL3BhY2thZ2VzL215LWZpcnN0LXRoZW1lL3NyYy9jb21wb25lbnRzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN3aXRjaCBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvc3dpdGNoXCJcblxuY29uc3QgUm9vdCA9ICh7IHN0YXRlIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPkhlbGxvIEZyb250aXR5PC9oMT5cbiAgICAgIDxwPkN1cnJlbnQgVVJMOiB7c3RhdGUucm91dGVyLmxpbmt9PC9wPlxuICAgICAgPG5hdj5cbiAgICAgICAgPExpbmsgbGluaz1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPExpbmsgbGluaz1cIi9wYWdlLzJcIj5Nb3JlIHBvc3RzPC9MaW5rPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPExpbmsgbGluaz1cIi9hYm91dC11c1wiPkFib3V0IFVzPC9MaW5rPlxuICAgICAgPC9uYXY+XG4gICAgICA8aHIgLz5cbiAgICAgIDxtYWluPlxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIDxkaXYgd2hlbj17ZGF0YS5pc0FyY2hpdmV9PlRoaXMgaXMgYSBsaXN0PC9kaXY+XG4gICAgICAgICAgPGRpdiB3aGVuPXtkYXRhLmlzUG9zdH0+VGhpcyBpcyBhIHBvc3Q8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHdoZW49e2RhdGEuaXNQYWdlfT5UaGlzIGlzIGEgcGFnZTwvZGl2PlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/my-first-theme/src/components/index.js\n");

/***/ })

})