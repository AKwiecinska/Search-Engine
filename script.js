"use strict";

const search = document.querySelector(".search");
const li = document.querySelectorAll("li");

const searchEngine = (input) => {
  const text = input.target.value.toLowerCase();

  li.forEach((el) => {
    const task = el.textContent;
    if (task.toLowerCase().indexOf(text) !== -1) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
};
search.addEventListener("keyup", searchEngine);
