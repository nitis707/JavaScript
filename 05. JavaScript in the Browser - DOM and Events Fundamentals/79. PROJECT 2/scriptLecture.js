"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

/* so whenever we use query selector with a selector, which actually matches multiple elements, only the first one will get selected.

then we have to use:
querySelectorAll();
*/
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
    console.log(btnsOpenModal[i].textContent);
}