webpackHotUpdate("my-first-frontity-project",{

/***/ "./packages/my-first-theme/src/components/post.js":
/*!********************************************************!*\
  !*** ./packages/my-first-theme/src/components/post.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst Post=({state})=>{const data=state.source.get(state.router.link);const post=state.source[data.type][data.id];const author=state.source.author[post.author];const formattedDate=dayjs__WEBPACK_IMPORTED_MODULE_2___default()(post.date).format(\"DD MMMM YYYY\");return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(\"div\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"h2\",{children:post.title.rendered}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(\"p\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"strong\",{children:\"Posted: \"}),formattedDate]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(\"p\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"strong\",{children:\"Author: \"}),author.name]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\",{dangerouslySetInnerHTML:{__html:post.content.rendered}})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Post));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9teS1maXJzdC10aGVtZS9zcmMvY29tcG9uZW50cy9wb3N0LmpzPzMzMmUiXSwibmFtZXMiOlsiUG9zdCIsInN0YXRlIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJwb3N0IiwidHlwZSIsImlkIiwiYXV0aG9yIiwiZm9ybWF0dGVkRGF0ZSIsImRheWpzIiwiZGF0ZSIsImZvcm1hdCIsInRpdGxlIiwicmVuZGVyZWQiLCJuYW1lIiwiX19odG1sIiwiY29udGVudCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQSxLQUFNQSxLQUFJLENBQUcsQ0FBQyxDQUFFQyxLQUFGLENBQUQsR0FBZSxDQUMxQixLQUFNQyxLQUFJLENBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxHQUFiLENBQWlCSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsSUFBOUIsQ0FBYixDQUNBLEtBQU1DLEtBQUksQ0FBR04sS0FBSyxDQUFDRSxNQUFOLENBQWFELElBQUksQ0FBQ00sSUFBbEIsRUFBd0JOLElBQUksQ0FBQ08sRUFBN0IsQ0FBYixDQUNBLEtBQU1DLE9BQU0sQ0FBR1QsS0FBSyxDQUFDRSxNQUFOLENBQWFPLE1BQWIsQ0FBb0JILElBQUksQ0FBQ0csTUFBekIsQ0FBZixDQUVBLEtBQU1DLGNBQWEsQ0FBR0MsNENBQUssQ0FBQ0wsSUFBSSxDQUFDTSxJQUFOLENBQUwsQ0FBaUJDLE1BQWpCLENBQXdCLGNBQXhCLENBQXRCLENBR0EsTUFDRSwwRkFDRSxzRkFBS1AsSUFBSSxDQUFDUSxLQUFMLENBQVdDLFFBQWhCLEVBREYsQ0FFRSx1RkFDRSxzR0FERixDQUVHTCxhQUZILEdBRkYsQ0FNRSx1RkFDRSxzR0FERixDQUVHRCxNQUFNLENBQUNPLElBRlYsR0FORixDQVVFLDhFQUFLLHVCQUF1QixDQUFFLENBQUVDLE1BQU0sQ0FBRVgsSUFBSSxDQUFDWSxPQUFMLENBQWFILFFBQXZCLENBQTlCLEVBVkYsR0FERixDQWNELENBdEJELENBd0JlSSx1SEFBTyxDQUFDcEIsSUFBRCxDQUF0QiIsImZpbGUiOiIuL3BhY2thZ2VzL215LWZpcnN0LXRoZW1lL3NyYy9jb21wb25lbnRzL3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCJcblxuY29uc3QgUG9zdCA9ICh7IHN0YXRlIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspXG4gIGNvbnN0IHBvc3QgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXVxuICBjb25zdCBhdXRob3IgPSBzdGF0ZS5zb3VyY2UuYXV0aG9yW3Bvc3QuYXV0aG9yXVxuXG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBkYXlqcyhwb3N0LmRhdGUpLmZvcm1hdChcIkREIE1NTU0gWVlZWVwiKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgPHN0cm9uZz5Qb3N0ZWQ6IDwvc3Ryb25nPlxuICAgICAgICB7Zm9ybWF0dGVkRGF0ZX1cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8c3Ryb25nPkF1dGhvcjogPC9zdHJvbmc+XG4gICAgICAgIHthdXRob3IubmFtZX1cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmNvbnRlbnQucmVuZGVyZWQgfX0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFBvc3QpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/my-first-theme/src/components/post.js\n");

/***/ })

})