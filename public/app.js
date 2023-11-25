document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const productsContainer = document.getElementById("products-container");

    toggleButton.addEventListener("click", function () {
        productsContainer.classList.toggle("list-view");
    });
});