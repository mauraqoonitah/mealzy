import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/main.css";
import main from "./scripts/main";
import "./scripts/section-tab.js";
import "./scripts/search-bar.js";
import random from "./scripts/random-meal.js";
import area from "./scripts/area-meal.js";


area();
random();
main();

document.addEventListener("DOMContentLoaded", main);
console.log("Selamat datang di mealzy");