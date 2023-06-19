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

const menuComponent = (category, name, list, price) => {
    const component = componentDiv('componentDiv');
    component.append(componentTxt('category', category));
    component.append(componentTxt('name', name))
    component.append(componentTxt('list', list))
    component.append(componentTxt('price', price))


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
    const starter = _components_components_js__WEBPACK_IMPORTED_MODULE_0__.menuCmp('Starter', 'Grilled Portobello Mushrooms & Chimichurri Sauce', ['Portobello mushrooms',' fresh herbs', ' garlic', ' red wine vinegar', ' olive oil', ' lemon juice', ' chili flakes', ' salt', ' pepper'], 'R 50');
    menu.append(starter);

    // Main
    const main = _components_components_js__WEBPACK_IMPORTED_MODULE_0__.menuCmp('Main', 'Chickpea and Vegetable Bunny Chow', ['Chickpeas', ' mixed vegetables (potatoes, carrots, and peas)', ' onion', ' garlic', ' ginger', ' curry powder', ' tomato', ' vegetable broth', ' fresh cilantro', ' bread loaf', ' olive oil', ' salt', ' pepper'], 'R 65');
    menu.append(main);

    // Desert
    const desert = _components_components_js__WEBPACK_IMPORTED_MODULE_0__.menuCmp('Desert', 'Rooibos-infused Chocolate Brownies', ['Flour', ' cocoa powder', ' sugar', ' vegan butter', ' flaxseed meal', ' water', ' vanilla extract', ' brewed rooibos tea', ' dark chocolate chunks'], 'R 50');
    menu.append(desert);

    return menu;
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRW1HOzs7Ozs7O1VDN0NuRztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnlEOzs7QUFHbEQ7QUFDUDtBQUNBLGlCQUFpQiwwREFBYTs7QUFFOUI7QUFDQSxvQkFBb0IsOERBQWlCO0FBQ3JDOztBQUVBO0FBQ0EsaUJBQWlCLDhEQUFpQjtBQUNsQzs7QUFFQTtBQUNBLG1CQUFtQiw4REFBaUI7QUFDcEM7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEaXYgZWxlbWVudFxuY29uc3QgY29tcG9uZW50RGl2ID0gKGNsYXNzTmFtZSkgPT4ge1xuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vLyBCdG4gZWxlbWVudFxuY29uc3QgY29tcG9uZW50QnRuID0gKGNsYXNzTmFtZSwgdXJsLCBuYW1lKSA9PiB7XG5cdGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRidG4uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHRidG4udGV4dENvbnRlbnQgPSBuYW1lO1xuXHRpZih1cmwpIHtcblx0XHRjb25zdCBocmVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdGhyZWYuc2V0QXR0cmlidXRlKCdocmVmJywgdXJsKTtcblx0XHRocmVmLmFwcGVuZChidG4pO1xuXHRcdHJldHVybiBocmVmO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBidG47XG5cdH1cbn07XG5cbi8vIFRleHQgY29tcG9uZW50XG5jb25zdCBjb21wb25lbnRUeHQgPSAoY2xhc3NOYW1lLCB0ZXh0RGlzcGxheWVkKSA9PiB7XG5cdGNvbnN0IHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuXHR0eHQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHR0eHQudGV4dENvbnRlbnQgPSB0ZXh0RGlzcGxheWVkO1xuXG5cdHJldHVybiB0eHQ7XG59O1xuXG5jb25zdCBtZW51Q29tcG9uZW50ID0gKGNhdGVnb3J5LCBuYW1lLCBsaXN0LCBwcmljZSkgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudERpdignY29tcG9uZW50RGl2Jyk7XG4gICAgY29tcG9uZW50LmFwcGVuZChjb21wb25lbnRUeHQoJ2NhdGVnb3J5JywgY2F0ZWdvcnkpKTtcbiAgICBjb21wb25lbnQuYXBwZW5kKGNvbXBvbmVudFR4dCgnbmFtZScsIG5hbWUpKVxuICAgIGNvbXBvbmVudC5hcHBlbmQoY29tcG9uZW50VHh0KCdsaXN0JywgbGlzdCkpXG4gICAgY29tcG9uZW50LmFwcGVuZChjb21wb25lbnRUeHQoJ3ByaWNlJywgcHJpY2UpKVxuXG5cbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgeyBjb21wb25lbnREaXYgYXMgZGl2LCBjb21wb25lbnRCdG4gYXMgYnRuLCBjb21wb25lbnRUeHQgYXMgdHh0LCBtZW51Q29tcG9uZW50IGFzIG1lbnVDbXAgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgY29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy5qcyc7XG5cblxuZXhwb3J0IGNvbnN0IG1lbnVEaXYgPSAoKSA9PiB7XG4gICAgLy8gTWFpblxuICAgIGNvbnN0IG1lbnUgPSBjb21wb25lbnQuZGl2KCdtZW51Jyk7ICAgIFxuXG4gICAgLy8gU3RhcnRlclxuICAgIGNvbnN0IHN0YXJ0ZXIgPSBjb21wb25lbnQubWVudUNtcCgnU3RhcnRlcicsICdHcmlsbGVkIFBvcnRvYmVsbG8gTXVzaHJvb21zICYgQ2hpbWljaHVycmkgU2F1Y2UnLCBbJ1BvcnRvYmVsbG8gbXVzaHJvb21zJywnIGZyZXNoIGhlcmJzJywgJyBnYXJsaWMnLCAnIHJlZCB3aW5lIHZpbmVnYXInLCAnIG9saXZlIG9pbCcsICcgbGVtb24ganVpY2UnLCAnIGNoaWxpIGZsYWtlcycsICcgc2FsdCcsICcgcGVwcGVyJ10sICdSIDUwJyk7XG4gICAgbWVudS5hcHBlbmQoc3RhcnRlcik7XG5cbiAgICAvLyBNYWluXG4gICAgY29uc3QgbWFpbiA9IGNvbXBvbmVudC5tZW51Q21wKCdNYWluJywgJ0NoaWNrcGVhIGFuZCBWZWdldGFibGUgQnVubnkgQ2hvdycsIFsnQ2hpY2twZWFzJywgJyBtaXhlZCB2ZWdldGFibGVzIChwb3RhdG9lcywgY2Fycm90cywgYW5kIHBlYXMpJywgJyBvbmlvbicsICcgZ2FybGljJywgJyBnaW5nZXInLCAnIGN1cnJ5IHBvd2RlcicsICcgdG9tYXRvJywgJyB2ZWdldGFibGUgYnJvdGgnLCAnIGZyZXNoIGNpbGFudHJvJywgJyBicmVhZCBsb2FmJywgJyBvbGl2ZSBvaWwnLCAnIHNhbHQnLCAnIHBlcHBlciddLCAnUiA2NScpO1xuICAgIG1lbnUuYXBwZW5kKG1haW4pO1xuXG4gICAgLy8gRGVzZXJ0XG4gICAgY29uc3QgZGVzZXJ0ID0gY29tcG9uZW50Lm1lbnVDbXAoJ0Rlc2VydCcsICdSb29pYm9zLWluZnVzZWQgQ2hvY29sYXRlIEJyb3duaWVzJywgWydGbG91cicsICcgY29jb2EgcG93ZGVyJywgJyBzdWdhcicsICcgdmVnYW4gYnV0dGVyJywgJyBmbGF4c2VlZCBtZWFsJywgJyB3YXRlcicsICcgdmFuaWxsYSBleHRyYWN0JywgJyBicmV3ZWQgcm9vaWJvcyB0ZWEnLCAnIGRhcmsgY2hvY29sYXRlIGNodW5rcyddLCAnUiA1MCcpO1xuICAgIG1lbnUuYXBwZW5kKGRlc2VydCk7XG5cbiAgICByZXR1cm4gbWVudTtcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9