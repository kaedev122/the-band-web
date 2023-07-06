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
        if (isParentMenu) {
            event.preventDefault();
        }
        else {
            header.style.height = null;
        }
    }
}

////////////////////////////////////////////////////////////////

const slider = document.getElementById("slider");
const sliderTitle = document.querySelector(".slider-title h2");
const sliderText = document.querySelector(".slider-title p");

  // Mảng chứa danh sách các hình nền
var backgrounds = [
    "slider1.jpg",
    "slider2.jpg",
    "slider3.jpg"
];

var title = [
    "Chicago",
    "New York",
    "Los Angeles"
]

var description = [
    "Thank you, Chicago - A night we won't forget.",
    "The atmosphere in New York is lorem ipsum.",
    "We had the best time playing at Venice Beach!"
]

  // Chỉ số hiện tại của hình nền
var currentSlider = 0;

  // Hàm chuyển đổi hình nền
function changeBackground() {
    // Thay đổi hình nền
    slider.style.backgroundImage = "url('assets/img/sliders/" + backgrounds[currentSlider] + "')";
    sliderTitle.innerHTML=title[currentSlider];
    sliderText.innerHTML=description[currentSlider];

    // Tăng chỉ số hình nền hiện tại
    currentSlider++;

    // Kiểm tra nếu chỉ số vượt quá số lượng hình nền, đặt lại về 0
    if (currentSlider >= backgrounds.length) {
        currentSlider = 0;
    }
}

  // Gọi hàm chuyển đổi hình nền ban đầu
changeBackground();

  // Đặt hàm chuyển đổi hình nền được gọi lại mỗi 5 giây
setInterval(changeBackground, 3000);
