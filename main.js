/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 562:
/***/ (() => {

const ticketsBlock = document.querySelector(".tickets");
const addTicket = document.querySelector(".add-ticket");
const modalAddTicket = document.querySelector(".modal-add-ticket");
const formAddTicket = modalAddTicket.querySelector(".add-form");
const btnAddTicket = formAddTicket.querySelector(".btn-add-ticket");
const servUrl = "http://localhost:5050";
const showModal = function (modal) {
  modal.classList.remove("hidden");
};
const closeModal = function (modal) {
  modal.classList.add("hidden");
};
const responseXhr = function (method, url) {
  let body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState !== 4) return;
      resolve(xhr.response);
    };
    xhr.open(method, url);

    //xhr.responseType = 'json';
    //xhr.setRequestHeader('Content-Type','application/json');

    xhr.send(JSON.stringify(body));
  });
};
addTicket.addEventListener("click", () => {
  showModal(modalAddTicket);
});
formAddTicket.addEventListener("click", e => {
  e.preventDefault();
  if (e.target.classList.contains("modal-close")) {
    closeModal(e.target.closest(".modal"));
  }
});
const tickets = document.querySelector(".tickets");
const renderTickets = function (arr) {
  ticketsBlock.innerHTML = "";
  arr.forEach(ticket => {
    const status = ticket.status ? "checked" : "";
    const newTicket = `<div class="ticket" data-id="${ticket.id}">
        <span class="ticket-checkbox"><input type="checkbox" ${status}></span>
        <span class="ticket-name">${ticket.name}</span>
        <span class="ticket-date">${ticket.created}</span>
        <div class="ticket-manage">
          <span class="ticket-edit"><button class="btn btn-edit">edit</button></span>
          <span class="ticket-remove"><button class="btn btn-remove">remove</button></span>
        </div>
      </div>`;
    tickets.insertAdjacentHTML("beforeEnd", newTicket);
  });
};
responseXhr("GET", servUrl).then(data => renderTickets(JSON.parse(data)));
btnAddTicket.addEventListener("click", e => {
  e.preventDefault();
  modalAddTicket.querySelector("h3").textContent = "Добавить тикет";
  const formdata = new FormData(formAddTicket);
  const data = Object.fromEntries(formdata.entries());
  if (modalAddTicket.dataset.id) {
    data.id = modalAddTicket.dataset.id;
    data.status = modalAddTicket.dataset.checked;
    console.log(data);
  }
  const datajson = JSON.stringify(data);
  responseXhr("POST", servUrl, datajson).then(data => renderTickets(JSON.parse(data)));
  //responseXhr("POST", servUrl,datajson).then(data => console.log(data));
  closeModal(e.target.closest(".modal"));
  modalAddTicket.dataset.id = "";
  modalAddTicket.dataset.checked = "";
  formAddTicket.reset();
});
ticketsBlock.addEventListener("click", e => {
  let curEl = e.target;
  if (curEl.classList.contains("btn-remove")) {
    const id = curEl.closest(".ticket").dataset.id;
    responseXhr("DELETE", servUrl + "/?id=" + id, id).then(data => renderTickets(JSON.parse(data)));
  }
  if (curEl.classList.contains("btn-edit")) {
    showModal(modalAddTicket);
    modalAddTicket.querySelector("h3").textContent = "Редактировать тикет";
    const id = curEl.closest(".ticket").dataset.id;
    const checked = curEl.closest(".ticket").querySelector("input").checked ? true : false;
    modalAddTicket.dataset.id = id;
    modalAddTicket.dataset.checked = checked;
    responseXhr("GET", servUrl).then(data => {
      const cur = JSON.parse(data).filter(obj => obj.id == id);
      modalAddTicket.querySelector("input").value = cur[0].name;
      modalAddTicket.querySelector("textarea").value = cur[0].description;
    });
  }
});

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(562);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_app__WEBPACK_IMPORTED_MODULE_0__);



// TODO: write your code in app.js
})();

/******/ })()
;