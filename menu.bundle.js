/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/components.js":
/*!**************************************!*\
  !*** ./src/components/components.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   btn: () => (/* binding */ componentBtn),
/* harmony export */   div: () => (/* binding */ componentDiv),
/* harmony export */   menuCmp: () => (/* binding */ menuComponent),
/* harmony export */   txt: () => (/* binding */ componentTxt)
/* harmony export */ });
// Div element
const componentDiv = (className) => {
	const element = document.createElement('div');

	element.classList.add(className);

	return element;
};

// Btn element
const componentBtn = (className, url) => {
	const btn = document.createElement('button');
	btn.classList.add(className);
	if(url) {
		const href = document.createElement('a');
		href.setAttribute('href', url);
		href.append(btn);
		return href;
	} else {
		return btn;
	}
};

// Text component
const componentTxt = (className, textDisplayed) => {
	const txt = document.createElement('p');

	txt.classList.add(className);
	txt.textContent = textDisplayed;

	return txt;
};

const menuComponent = (type, name, ingredients) => {
    const component = componentDiv('menuComponent');
    component.append(componentTxt('Type', type));
    component.append(componentTxt('Name', name))
    component.append(componentTxt('Ingredients', ingredients))

    return component;
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/menu/menu.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuDiv: () => (/* binding */ menuDiv)
/* harmony export */ });
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/components.js */ "./src/components/components.js");



const menuDiv = () => {
    // Main
    const menu = _components_components_js__WEBPACK_IMPORTED_MODULE_0__.div('menu');    

    // Starter
    const starter = _components_components_js__WEBPACK_IMPORTED_MODULE_0__.menuCmp('Starter', 'Starter Name', ['Carrot', 'Apple','Potato']);
    menu.append(starter);

    // Main
    const main = _components_components_js__WEBPACK_IMPORTED_MODULE_0__.menuCmp('Main', 'Main Name', ['Pasta', 'Tomato','Basil']);
    menu.append(main);

    // Desert
    const desert = _components_components_js__WEBPACK_IMPORTED_MODULE_0__.menuCmp('Desert', 'Desert Name', ['Coconut', 'Banana','Love']);
    menu.append(desert);

    return menu;
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVtRzs7Ozs7OztVQzFDbkc7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ055RDs7O0FBR2xEO0FBQ1A7QUFDQSxpQkFBaUIsMERBQWE7O0FBRTlCO0FBQ0Esb0JBQW9CLDhEQUFpQjtBQUNyQzs7QUFFQTtBQUNBLGlCQUFpQiw4REFBaUI7QUFDbEM7O0FBRUE7QUFDQSxtQkFBbUIsOERBQWlCO0FBQ3BDOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51L21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRGl2IGVsZW1lbnRcbmNvbnN0IGNvbXBvbmVudERpdiA9IChjbGFzc05hbWUpID0+IHtcblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXG5cdHJldHVybiBlbGVtZW50O1xufTtcblxuLy8gQnRuIGVsZW1lbnRcbmNvbnN0IGNvbXBvbmVudEJ0biA9IChjbGFzc05hbWUsIHVybCkgPT4ge1xuXHRjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0YnRuLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblx0aWYodXJsKSB7XG5cdFx0Y29uc3QgaHJlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRocmVmLnNldEF0dHJpYnV0ZSgnaHJlZicsIHVybCk7XG5cdFx0aHJlZi5hcHBlbmQoYnRuKTtcblx0XHRyZXR1cm4gaHJlZjtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gYnRuO1xuXHR9XG59O1xuXG4vLyBUZXh0IGNvbXBvbmVudFxuY29uc3QgY29tcG9uZW50VHh0ID0gKGNsYXNzTmFtZSwgdGV4dERpc3BsYXllZCkgPT4ge1xuXHRjb25zdCB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cblx0dHh0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblx0dHh0LnRleHRDb250ZW50ID0gdGV4dERpc3BsYXllZDtcblxuXHRyZXR1cm4gdHh0O1xufTtcblxuY29uc3QgbWVudUNvbXBvbmVudCA9ICh0eXBlLCBuYW1lLCBpbmdyZWRpZW50cykgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudERpdignbWVudUNvbXBvbmVudCcpO1xuICAgIGNvbXBvbmVudC5hcHBlbmQoY29tcG9uZW50VHh0KCdUeXBlJywgdHlwZSkpO1xuICAgIGNvbXBvbmVudC5hcHBlbmQoY29tcG9uZW50VHh0KCdOYW1lJywgbmFtZSkpXG4gICAgY29tcG9uZW50LmFwcGVuZChjb21wb25lbnRUeHQoJ0luZ3JlZGllbnRzJywgaW5ncmVkaWVudHMpKVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IHsgY29tcG9uZW50RGl2IGFzIGRpdiwgY29tcG9uZW50QnRuIGFzIGJ0biwgY29tcG9uZW50VHh0IGFzIHR4dCwgbWVudUNvbXBvbmVudCBhcyBtZW51Q21wIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIGNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL2NvbXBvbmVudHMuanMnO1xuXG5cbmV4cG9ydCBjb25zdCBtZW51RGl2ID0gKCkgPT4ge1xuICAgIC8vIE1haW5cbiAgICBjb25zdCBtZW51ID0gY29tcG9uZW50LmRpdignbWVudScpOyAgICBcblxuICAgIC8vIFN0YXJ0ZXJcbiAgICBjb25zdCBzdGFydGVyID0gY29tcG9uZW50Lm1lbnVDbXAoJ1N0YXJ0ZXInLCAnU3RhcnRlciBOYW1lJywgWydDYXJyb3QnLCAnQXBwbGUnLCdQb3RhdG8nXSk7XG4gICAgbWVudS5hcHBlbmQoc3RhcnRlcik7XG5cbiAgICAvLyBNYWluXG4gICAgY29uc3QgbWFpbiA9IGNvbXBvbmVudC5tZW51Q21wKCdNYWluJywgJ01haW4gTmFtZScsIFsnUGFzdGEnLCAnVG9tYXRvJywnQmFzaWwnXSk7XG4gICAgbWVudS5hcHBlbmQobWFpbik7XG5cbiAgICAvLyBEZXNlcnRcbiAgICBjb25zdCBkZXNlcnQgPSBjb21wb25lbnQubWVudUNtcCgnRGVzZXJ0JywgJ0Rlc2VydCBOYW1lJywgWydDb2NvbnV0JywgJ0JhbmFuYScsJ0xvdmUnXSk7XG4gICAgbWVudS5hcHBlbmQoZGVzZXJ0KTtcblxuICAgIHJldHVybiBtZW51O1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=