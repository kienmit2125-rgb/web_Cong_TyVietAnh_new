// ===============================
// MENU MOBILE
// ===============================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle?.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

document.querySelectorAll(".main-nav a").forEach(link => {

  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
  });

});


// ===============================
// TÌM KIẾM XE
// ===============================

const searchInput =
  document.getElementById("vehicleSearch");

const typeSelect =
  document.getElementById("vehicleType");

const searchBtn =
  document.getElementById("searchBtn");

const cards = [
  ...document.querySelectorAll(".vehicle-card")
];

const emptyState =
  document.getElementById("emptyState");


function filterVehicles() {

  const keyword =
    searchInput.value.trim().toLowerCase();

  const type =
    typeSelect.value;

  let count = 0;


  cards.forEach(card => {

    const name =
      card.dataset.name.toLowerCase();

    const cardType =
      card.dataset.type;


    const matchesName =
      name.includes(keyword);

    const matchesType =
      type === "all" ||
      cardType === type;


    const visible =
      matchesName && matchesType;


    card.style.display =
      visible ? "" : "none";


    if (visible) {
      count++;
    }

  });


  emptyState.style.display =
    count === 0 ? "block" : "none";
}


searchBtn.addEventListener(
  "click",
  filterVehicles
);


searchInput.addEventListener(
  "input",
  filterVehicles
);


typeSelect.addEventListener(
  "change",
  filterVehicles
);


// ===============================
// MODAL ĐĂNG KÝ
// ===============================

const modal =
  document.getElementById("registerModal");

const registerBtn =
  document.getElementById("registerBtn");

const modalClose =
  document.getElementById("modalClose");

const modalBackdrop =
  document.getElementById("modalBackdrop");

const registerForm =
  document.getElementById("registerForm");

const successMessage =
  document.getElementById("successMessage");


// Mở modal
function openModal() {

  modal.classList.add("open");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow = "hidden";
}


// Đóng modal
function closeModal() {

  modal.classList.remove("open");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow = "";
}


// Nút đăng ký
registerBtn?.addEventListener(
  "click",
  openModal
);


// Những link có href="#register"
document
  .querySelectorAll('a[href="#register"]')
  .forEach(el => {

    el.addEventListener(
      "click",
      event => {

        event.preventDefault();

        openModal();

      }
    );

  });


// Nút đóng
modalClose.addEventListener(
  "click",
  closeModal
);


// Click bên ngoài modal
modalBackdrop.addEventListener(
  "click",
  closeModal
);


// Nhấn ESC
document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {
      closeModal();
    }

  }
);


// ===============================
// GỬI FORM ĐĂNG KÝ
// ===============================

registerForm.addEventListener(
  "submit",
  event => {

    event.preventDefault();


    // Hiện thông báo thành công
    registerForm.style.display = "none";

    successMessage.classList.add(
      "show"
    );

  }
);


// ===============================
// CHI TIẾT XE - DEMO
// ===============================

document
  .querySelectorAll(".detail-btn")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const card =
          button.closest(".vehicle-card");

        const vehicleName =
          card.querySelector("h3").textContent;


        alert(
          `Demo: Trang chi tiết "${vehicleName}" sẽ được xây dựng ở bước tiếp theo.`
        );

      }
    );

  });