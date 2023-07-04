const ticketsForm = document.querySelector(".tickets-modal-form");
const buyBtns = document.querySelectorAll(".place-buy-btn");
const closeBtns = document.querySelectorAll(".tickets-modal-close-js");
const ticketsFormContainer = document.querySelector(".tickets-modal-form");
const ticketsModal = document.querySelector(".js-tickets-modal")
/////////////////////////
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
/////////////////
function showTicketsModal() {
    ticketsForm.classList.remove("hidden");
}

function closeTicketsModal() {
    ticketsForm.classList.add("hidden");
}