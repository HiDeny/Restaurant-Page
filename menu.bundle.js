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
const componentBtn = (className, url, name) => {
	const btn = document.createElement('button');
	btn.classList.add(className);
	btn.textContent = name;
	if (url) {
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

const menuComponent = (category, name, list, price) => {
	const component = componentDiv('componentDiv');
	component.append(componentTxt('category', category));
	component.append(componentTxt('name', name));
	component.append(componentTxt('list', list));
	component.append(componentTxt('price', price));

	return component;
};




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
	const starter = _components_components_js__WEBPACK_IMPORTED_MODULE_0__.menuCmp(
		'Starter',
		'Grilled Portobello Mushrooms & Chimichurri Sauce',
		[
			'Portobello mushrooms',
			' fresh herbs',
			' garlic',
			' red wine vinegar',
			' olive oil',
			' lemon juice',
			' chili flakes',
			' salt',
			' pepper',
		],
		'R 50'
	);
	menu.append(starter);

	// Main
	const main = _components_components_js__WEBPACK_IMPORTED_MODULE_0__.menuCmp(
		'Main',
		'Chickpea and Vegetable Bunny Chow',
		[
			'Chickpeas',
			' mixed vegetables (potatoes, carrots, and peas)',
			' onion',
			' garlic',
			' ginger',
			' curry powder',
			' tomato',
			' vegetable broth',
			' fresh cilantro',
			' bread loaf',
			' olive oil',
			' salt',
			' pepper',
		],
		'R 65'
	);
	menu.append(main);

	// Desert
	const desert = _components_components_js__WEBPACK_IMPORTED_MODULE_0__.menuCmp(
		'Desert',
		'Rooibos-infused Chocolate Brownies',
		[
			'Flour',
			' cocoa powder',
			' sugar',
			' vegan butter',
			' flaxseed meal',
			' water',
			' vanilla extract',
			' brewed rooibos tea',
			' dark chocolate chunks',
		],
		'R 50'
	);
	menu.append(desert);

	return menu;
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFPRTs7Ozs7OztVQ2pERjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnlEOztBQUVsRDtBQUNQO0FBQ0EsY0FBYywwREFBYTs7QUFFM0I7QUFDQSxpQkFBaUIsOERBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyw4REFBaUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQiw4REFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEaXYgZWxlbWVudFxuY29uc3QgY29tcG9uZW50RGl2ID0gKGNsYXNzTmFtZSkgPT4ge1xuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vLyBCdG4gZWxlbWVudFxuY29uc3QgY29tcG9uZW50QnRuID0gKGNsYXNzTmFtZSwgdXJsLCBuYW1lKSA9PiB7XG5cdGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRidG4uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHRidG4udGV4dENvbnRlbnQgPSBuYW1lO1xuXHRpZiAodXJsKSB7XG5cdFx0Y29uc3QgaHJlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRocmVmLnNldEF0dHJpYnV0ZSgnaHJlZicsIHVybCk7XG5cdFx0aHJlZi5hcHBlbmQoYnRuKTtcblx0XHRyZXR1cm4gaHJlZjtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gYnRuO1xuXHR9XG59O1xuXG4vLyBUZXh0IGNvbXBvbmVudFxuY29uc3QgY29tcG9uZW50VHh0ID0gKGNsYXNzTmFtZSwgdGV4dERpc3BsYXllZCkgPT4ge1xuXHRjb25zdCB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cblx0dHh0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblx0dHh0LnRleHRDb250ZW50ID0gdGV4dERpc3BsYXllZDtcblxuXHRyZXR1cm4gdHh0O1xufTtcblxuY29uc3QgbWVudUNvbXBvbmVudCA9IChjYXRlZ29yeSwgbmFtZSwgbGlzdCwgcHJpY2UpID0+IHtcblx0Y29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50RGl2KCdjb21wb25lbnREaXYnKTtcblx0Y29tcG9uZW50LmFwcGVuZChjb21wb25lbnRUeHQoJ2NhdGVnb3J5JywgY2F0ZWdvcnkpKTtcblx0Y29tcG9uZW50LmFwcGVuZChjb21wb25lbnRUeHQoJ25hbWUnLCBuYW1lKSk7XG5cdGNvbXBvbmVudC5hcHBlbmQoY29tcG9uZW50VHh0KCdsaXN0JywgbGlzdCkpO1xuXHRjb21wb25lbnQuYXBwZW5kKGNvbXBvbmVudFR4dCgncHJpY2UnLCBwcmljZSkpO1xuXG5cdHJldHVybiBjb21wb25lbnQ7XG59O1xuXG5leHBvcnQge1xuXHRjb21wb25lbnREaXYgYXMgZGl2LFxuXHRjb21wb25lbnRCdG4gYXMgYnRuLFxuXHRjb21wb25lbnRUeHQgYXMgdHh0LFxuXHRtZW51Q29tcG9uZW50IGFzIG1lbnVDbXAsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBjb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9jb21wb25lbnRzLmpzJztcblxuZXhwb3J0IGNvbnN0IG1lbnVEaXYgPSAoKSA9PiB7XG5cdC8vIE1haW5cblx0Y29uc3QgbWVudSA9IGNvbXBvbmVudC5kaXYoJ21lbnUnKTtcblxuXHQvLyBTdGFydGVyXG5cdGNvbnN0IHN0YXJ0ZXIgPSBjb21wb25lbnQubWVudUNtcChcblx0XHQnU3RhcnRlcicsXG5cdFx0J0dyaWxsZWQgUG9ydG9iZWxsbyBNdXNocm9vbXMgJiBDaGltaWNodXJyaSBTYXVjZScsXG5cdFx0W1xuXHRcdFx0J1BvcnRvYmVsbG8gbXVzaHJvb21zJyxcblx0XHRcdCcgZnJlc2ggaGVyYnMnLFxuXHRcdFx0JyBnYXJsaWMnLFxuXHRcdFx0JyByZWQgd2luZSB2aW5lZ2FyJyxcblx0XHRcdCcgb2xpdmUgb2lsJyxcblx0XHRcdCcgbGVtb24ganVpY2UnLFxuXHRcdFx0JyBjaGlsaSBmbGFrZXMnLFxuXHRcdFx0JyBzYWx0Jyxcblx0XHRcdCcgcGVwcGVyJyxcblx0XHRdLFxuXHRcdCdSIDUwJ1xuXHQpO1xuXHRtZW51LmFwcGVuZChzdGFydGVyKTtcblxuXHQvLyBNYWluXG5cdGNvbnN0IG1haW4gPSBjb21wb25lbnQubWVudUNtcChcblx0XHQnTWFpbicsXG5cdFx0J0NoaWNrcGVhIGFuZCBWZWdldGFibGUgQnVubnkgQ2hvdycsXG5cdFx0W1xuXHRcdFx0J0NoaWNrcGVhcycsXG5cdFx0XHQnIG1peGVkIHZlZ2V0YWJsZXMgKHBvdGF0b2VzLCBjYXJyb3RzLCBhbmQgcGVhcyknLFxuXHRcdFx0JyBvbmlvbicsXG5cdFx0XHQnIGdhcmxpYycsXG5cdFx0XHQnIGdpbmdlcicsXG5cdFx0XHQnIGN1cnJ5IHBvd2RlcicsXG5cdFx0XHQnIHRvbWF0bycsXG5cdFx0XHQnIHZlZ2V0YWJsZSBicm90aCcsXG5cdFx0XHQnIGZyZXNoIGNpbGFudHJvJyxcblx0XHRcdCcgYnJlYWQgbG9hZicsXG5cdFx0XHQnIG9saXZlIG9pbCcsXG5cdFx0XHQnIHNhbHQnLFxuXHRcdFx0JyBwZXBwZXInLFxuXHRcdF0sXG5cdFx0J1IgNjUnXG5cdCk7XG5cdG1lbnUuYXBwZW5kKG1haW4pO1xuXG5cdC8vIERlc2VydFxuXHRjb25zdCBkZXNlcnQgPSBjb21wb25lbnQubWVudUNtcChcblx0XHQnRGVzZXJ0Jyxcblx0XHQnUm9vaWJvcy1pbmZ1c2VkIENob2NvbGF0ZSBCcm93bmllcycsXG5cdFx0W1xuXHRcdFx0J0Zsb3VyJyxcblx0XHRcdCcgY29jb2EgcG93ZGVyJyxcblx0XHRcdCcgc3VnYXInLFxuXHRcdFx0JyB2ZWdhbiBidXR0ZXInLFxuXHRcdFx0JyBmbGF4c2VlZCBtZWFsJyxcblx0XHRcdCcgd2F0ZXInLFxuXHRcdFx0JyB2YW5pbGxhIGV4dHJhY3QnLFxuXHRcdFx0JyBicmV3ZWQgcm9vaWJvcyB0ZWEnLFxuXHRcdFx0JyBkYXJrIGNob2NvbGF0ZSBjaHVua3MnLFxuXHRcdF0sXG5cdFx0J1IgNTAnXG5cdCk7XG5cdG1lbnUuYXBwZW5kKGRlc2VydCk7XG5cblx0cmV0dXJuIG1lbnU7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9