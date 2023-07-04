const ticketsForm = document.querySelector(".tickets-modal-form");
const buyBtns = document.querySelectorAll(".place-buy-btn");
const closeBtns = document.querySelectorAll(".tickets-modal-close-js");
const ticketsFormContainer = document.querySelector(".tickets-modal-form");
const ticketsModal = document.querySelector(".js-tickets-modal")

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener("click", showTicketsModal);
}

for (const closeBtn of closeBtns) {
    closeBtn.addEventListener("click", closeTicketsModal);
}

ticketsFormContainer.addEventListener("click", closeTicketsModal);
ticketsModal.addEventListener("click", function(event) {
    event.stopPropagation();
})

function showTicketsModal() {
    ticketsForm.classList.remove("hidden");
}

function closeTicketsModal() {
    ticketsForm.classList.add("hidden");
}

////////////////////////////////////////////////////////////////
var header = document.getElementById("header");
var mobileMenu = document.querySelector(".mobile-menu-bar");
var headerHeight = header.clientHeight;

mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = "auto";
    }
    else {
        header.style.height = null;
    }
}

////////////////////////////////////////////////////////////////
var menuItems = document.querySelectorAll("#navbar li a[href*='#']");
for (const menuItem of menuItems) {
    menuItem.onclick = function() {
        var isParentMenu = menuItem.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnavbar');
        if (!isParentMenu) {
            header.style.height = null;
        }
    }
}
////////////////////////////////////////////////////////////////
