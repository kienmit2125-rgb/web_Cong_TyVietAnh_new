/* =====================================================
   DEMO DATA
===================================================== */

const registrations = [

  {
    id: "DD001",
    customer: "Công ty TNHH ABC",
    phone: "0901 234 567",
    vehicle: "Máy cẩu công trình",
    quantity: 2,
    date: "20/08/2026",
    status: "pending"
  },

  {
    id: "DD002",
    customer: "Nguyễn Văn Minh",
    phone: "0912 345 678",
    vehicle: "Máy xúc đào",
    quantity: 1,
    date: "20/08/2026",
    status: "contacted"
  },

  {
    id: "DD003",
    customer: "Công ty Xây dựng Hoàng Gia",
    phone: "0987 111 222",
    vehicle: "Xe lu",
    quantity: 2,
    date: "19/08/2026",
    status: "consulting"
  },

  {
    id: "DD004",
    customer: "Trần Văn Nam",
    phone: "0933 444 555",
    vehicle: "Máy cẩu công trình",
    quantity: 1,
    date: "19/08/2026",
    status: "pending"
  },

  {
    id: "DD005",
    customer: "Công ty Đại Phát",
    phone: "0977 888 999",
    vehicle: "Máy xúc đào",
    quantity: 3,
    date: "18/08/2026",
    status: "transferred"
  }

];


const customers = [

  {
    id: "KH001",
    name: "Công ty TNHH ABC",
    phone: "0901 234 567",
    address: "Hà Nội",
    status: "Đã liên hệ"
  },

  {
    id: "KH002",
    name: "Nguyễn Văn Minh",
    phone: "0912 345 678",
    address: "Hải Phòng",
    status: "Đang tư vấn"
  },

  {
    id: "KH003",
    name: "Công ty Xây dựng Hoàng Gia",
    phone: "0987 111 222",
    address: "Bắc Ninh",
    status: "Đang tư vấn"
  },

  {
    id: "KH004",
    name: "Trần Văn Nam",
    phone: "0933 444 555",
    address: "Hà Nội",
    status: "Chờ xử lý"
  },

  {
    id: "KH005",
    name: "Công ty Đại Phát",
    phone: "0977 888 999",
    address: "Hưng Yên",
    status: "Đã chuyển quản lý"
  }

];


const vehicles = [

  {
    id: "VA-EX01",
    name: "Máy cẩu công trình",
    type: "Máy cẩu",
    capacity: "25 tấn",
    price: "Liên hệ",
    status: "ready",
    icon: "🏗️"
  },

  {
    id: "VA-EX02",
    name: "Máy xúc đào",
    type: "Máy xúc",
    capacity: "20 tấn",
    price: "Liên hệ",
    status: "renting",
    icon: "🚜"
  },

  {
    id: "VA-RL01",
    name: "Xe lu rung",
    type: "Xe lu",
    capacity: "12 tấn",
    price: "Liên hệ",
    status: "ready",
    icon: "🚧"
  },

  {
    id: "VA-BD01",
    name: "Máy ủi công trình",
    type: "Máy ủi",
    capacity: "18 tấn",
    price: "Liên hệ",
    status: "maintenance",
    icon: "🚜"
  }

];


const contracts = [

  {
    id: "HD001",
    customer: "Công ty TNHH ABC",
    vehicle: "Máy cẩu công trình",
    date: "15/08/2026",
    value: "45.000.000 đ",
    status: "Đang thực hiện"
  },

  {
    id: "HD002",
    customer: "Nguyễn Văn Minh",
    vehicle: "Máy xúc đào",
    date: "12/08/2026",
    value: "18.000.000 đ",
    status: "Đang thực hiện"
  },

  {
    id: "HD003",
    customer: "Công ty Đại Phát",
    vehicle: "Máy xúc đào",
    date: "08/08/2026",
    value: "36.000.000 đ",
    status: "Đã hoàn tất"
  }

];


/* =====================================================
   LOGIN
===================================================== */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

  loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const username =
      document.getElementById("username").value.trim();

    const password =
      document.getElementById("password").value;

    const error =
      document.getElementById("loginError");


    if (username === "sales" && password === "123456") {

      localStorage.setItem(
        "employeeLoggedIn",
        "true"
      );

      localStorage.setItem(
        "employeeRole",
        "sales"
      );

      window.location.href = "dashboard.html";

    } else {

      error.textContent =
        "Tên đăng nhập hoặc mật khẩu không đúng.";

    }

  });


 const togglePassword =
  document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {

  const password =
    document.getElementById("password");

  const icon =
    this.querySelector("i");

  if (password.type === "password") {

    password.type = "text";

    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");

  } else {

    password.type = "password";

    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");

  }

});

}


/* =====================================================
   DASHBOARD
===================================================== */

if (document.querySelector(".employee-layout")) {

  renderRecentRegistrations();
  renderRegistrations();
  renderCustomers();
  renderVehicles();
  renderContracts();

  setupNavigation();
  setupSearch();
  setupModals();

}


/* =====================================================
   NAVIGATION
===================================================== */

function setupNavigation() {

  const navItems =
    document.querySelectorAll(".nav-item[data-section]");

  const sections =
    document.querySelectorAll(".page-section");


  navItems.forEach(item => {

    item.addEventListener("click", function () {

      const target =
        this.dataset.section;


      navItems.forEach(nav =>
        nav.classList.remove("active")
      );

      this.classList.add("active");


      sections.forEach(section =>
        section.classList.remove("active")
      );


      document
        .getElementById(target)
        .classList.add("active");


      updatePageHeader(target);

    });

  });


  document
    .querySelectorAll("[data-go]")
    .forEach(button => {

      button.addEventListener("click", function () {

        const target =
          this.dataset.go;

        const nav =
          document.querySelector(
            `.nav-item[data-section="${target}"]`
          );

        if (nav) nav.click();

      });

    });


  document
    .getElementById("logoutBtn")
    ?.addEventListener("click", logout);


  document
    .getElementById("mobileMenu")
    ?.addEventListener("click", function () {

      document
        .querySelector(".sidebar")
        .classList.toggle("mobile-open");

    });

}


function updatePageHeader(section) {

  const titles = {

    overview: [
      "Tổng quan",
      "Theo dõi tình hình đăng ký thuê xe và khách hàng."
    ],

    registrations: [
      "Đơn đăng ký",
      "Tiếp nhận và xử lý yêu cầu thuê xe của khách hàng."
    ],

    customers: [
      "Khách hàng",
      "Danh sách khách hàng đã được tiếp nhận."
    ],

    vehicles: [
      "Thông tin xe",
      "Tra cứu tình trạng và thông tin xe để tư vấn khách hàng."
    ],

    contracts: [
      "Hợp đồng",
      "Quản lý các hợp đồng thuê xe đang được xử lý."
    ],

    account: [
      "Tài khoản",
      "Thông tin tài khoản nhân viên đang đăng nhập."
    ]

  };


  const data =
    titles[section];

  if (!data) return;


  document.getElementById("pageTitle").textContent =
    data[0];

  document.getElementById("pageDescription").textContent =
    data[1];

}


/* =====================================================
   REGISTRATION TABLE
===================================================== */

function getStatus(status) {

  const statuses = {

    pending: [
      "Chờ xử lý",
      "pending"
    ],

    contacted: [
      "Đã liên hệ",
      "contacted"
    ],

    consulting: [
      "Đang tư vấn",
      "consulting"
    ],

    transferred: [
      "Đã chuyển quản lý",
      "transferred"
    ]

  };

  const data =
    statuses[status] || ["Không xác định", ""];

  return `
    <span class="status ${data[1]}">
      ${data[0]}
    </span>
  `;

}


function renderRecentRegistrations() {

  const table =
    document.getElementById(
      "recentRegistrationTable"
    );

  if (!table) return;


  table.innerHTML =
    registrations
      .slice(0, 5)
      .map(item => `

        <tr>

          <td>
            <strong>${item.id}</strong>
          </td>

          <td>
            ${item.customer}
          </td>

          <td>
            ${item.vehicle}
          </td>

          <td>
            ${item.quantity}
          </td>

          <td>
            ${item.date}
          </td>

          <td>
            ${getStatus(item.status)}
          </td>

        </tr>

      `)
      .join("");

}


function renderRegistrations(
  data = registrations
) {

  const table =
    document.getElementById(
      "registrationTable"
    );

  if (!table) return;


  if (data.length === 0) {

    table.innerHTML = `
      <tr>
        <td colspan="8" class="empty-state">
          Không tìm thấy đơn đăng ký.
        </td>
      </tr>
    `;

    return;

  }


  table.innerHTML =
    data.map(item => `

      <tr>

        <td>
          <strong>${item.id}</strong>
        </td>

        <td>
          ${item.customer}
        </td>

        <td>
          ${item.phone}
        </td>

        <td>
          ${item.vehicle}
        </td>

        <td>
          ${item.quantity}
        </td>

        <td>
          ${item.date}
        </td>

        <td>
          ${getStatus(item.status)}
        </td>

        <td>

          <button
            class="table-action"
            onclick="showRegistration('${item.id}')"
          >
            Xem
          </button>

        </td>

      </tr>

    `).join("");

}


/* =====================================================
   CUSTOMERS
===================================================== */

function renderCustomers(
  data = customers
) {

  const table =
    document.getElementById(
      "customerTable"
    );

  if (!table) return;


  table.innerHTML =
    data.map(customer => `

      <tr>

        <td>
          <strong>${customer.id}</strong>
        </td>

        <td>
          ${customer.name}
        </td>

        <td>
          ${customer.phone}
        </td>

        <td>
          ${customer.address}
        </td>

        <td>
          <span class="status neutral">
            ${customer.status}
          </span>
        </td>

        <td>

          <button
            class="table-action"
            onclick="showCustomer('${customer.id}')"
          >
            Xem
          </button>

        </td>

      </tr>

    `).join("");

}


/* =====================================================
   VEHICLES
===================================================== */

function renderVehicles(
  data = vehicles
) {

  const grid =
    document.getElementById(
      "employeeVehicleGrid"
    );

  if (!grid) return;


  const statusNames = {

    ready: "Sẵn sàng",

    renting: "Đang cho thuê",

    maintenance: "Bảo dưỡng"

  };


  grid.innerHTML =
    data.map(vehicle => `

      <article class="employee-vehicle-card">

        <div class="employee-vehicle-image">

          <span class="vehicle-status ${vehicle.status}">
            <i></i>
            ${statusNames[vehicle.status]}
          </span>

          <span class="vehicle-large-icon">
            ${vehicle.icon}
          </span>

          <span class="vehicle-code">
            ${vehicle.id}
          </span>

        </div>


        <div class="employee-vehicle-content">

          <span class="vehicle-meta">
            ${vehicle.type.toUpperCase()} · ${vehicle.capacity}
          </span>

          <h3>
            ${vehicle.name}
          </h3>

          <div class="vehicle-info-row">

            <span>
              Giá thuê
            </span>

            <strong>
              ${vehicle.price}
            </strong>

          </div>


          <button
            class="detail-full-btn"
            onclick="showVehicle('${vehicle.id}')"
          >
            Xem thông tin xe →
          </button>

        </div>

      </article>

    `).join("");

}


/* =====================================================
   CONTRACTS
===================================================== */

function renderContracts(
  data = contracts
) {

  const table =
    document.getElementById(
      "contractTable"
    );

  if (!table) return;


  table.innerHTML =
    data.map(contract => `

      <tr>

        <td>
          <strong>${contract.id}</strong>
        </td>

        <td>
          ${contract.customer}
        </td>

        <td>
          ${contract.vehicle}
        </td>

        <td>
          ${contract.date}
        </td>

        <td>
          <strong>
            ${contract.value}
          </strong>
        </td>

        <td>

          <span class="status completed">
            ${contract.status}
          </span>

        </td>

        <td>

          <button
            class="table-action"
            onclick="showContract('${contract.id}')"
          >
            Xem
          </button>

        </td>

      </tr>

    `).join("");

}


/* =====================================================
   SEARCH
===================================================== */

function setupSearch() {

  document
    .getElementById("registrationSearch")
    ?.addEventListener("input", function () {

      const keyword =
        this.value.toLowerCase();

      const filtered =
        registrations.filter(item =>

          item.id.toLowerCase().includes(keyword) ||

          item.customer.toLowerCase().includes(keyword) ||

          item.phone.includes(keyword) ||

          item.vehicle.toLowerCase().includes(keyword)

        );

      renderRegistrations(filtered);

    });


  document
    .getElementById("registrationFilter")
    ?.addEventListener("change", function () {

      if (this.value === "all") {

        renderRegistrations();

      } else {

        renderRegistrations(
          registrations.filter(
            item => item.status === this.value
          )
        );

      }

    });


  document
    .getElementById("customerSearch")
    ?.addEventListener("input", function () {

      const keyword =
        this.value.toLowerCase();

      renderCustomers(
        customers.filter(customer =>

          customer.id.toLowerCase().includes(keyword) ||

          customer.name.toLowerCase().includes(keyword) ||

          customer.phone.includes(keyword)

        )
      );

    });


  document
    .getElementById("vehicleSearch")
    ?.addEventListener("input", filterVehicles);


  document
    .getElementById("vehicleFilter")
    ?.addEventListener("change", filterVehicles);


  document
    .getElementById("contractSearch")
    ?.addEventListener("input", function () {

      const keyword =
        this.value.toLowerCase();

      renderContracts(
        contracts.filter(contract =>

          contract.id.toLowerCase().includes(keyword) ||

          contract.customer.toLowerCase().includes(keyword) ||

          contract.vehicle.toLowerCase().includes(keyword)

        )
      );

    });

}


function filterVehicles() {

  const keyword =
    document
      .getElementById("vehicleSearch")
      .value
      .toLowerCase();


  const status =
    document
      .getElementById("vehicleFilter")
      .value;


  const filtered =
    vehicles.filter(vehicle =>

      (
        vehicle.id.toLowerCase().includes(keyword) ||
        vehicle.name.toLowerCase().includes(keyword)
      )

      &&

      (
        status === "all" ||
        vehicle.status === status
      )

    );


  renderVehicles(filtered);

}


/* =====================================================
   MODALS
===================================================== */

function setupModals() {

  document
    .querySelectorAll("[data-close-modal]")
    .forEach(button => {

      button.addEventListener(
        "click",
        closeDetailModal
      );

    });


  document
    .querySelectorAll("[data-close-contract]")
    .forEach(button => {

      button.addEventListener(
        "click",
        closeContractModal
      );

    });


  document
    .getElementById("detailModal")
    ?.addEventListener("click", function (event) {

      if (event.target === this) {
        closeDetailModal();
      }

    });


  document
    .getElementById("contractModal")
    ?.addEventListener("click", function (event) {

      if (event.target === this) {
        closeContractModal();
      }

    });


  document
    .getElementById("createContractBtn")
    ?.addEventListener(
      "click",
      openContractModal
    );


  document
    .getElementById("contractForm")
    ?.addEventListener("submit", function (event) {

      event.preventDefault();

      alert(
        "Demo: Hợp đồng đã được tạo thành công!"
      );

      closeContractModal();

      this.reset();

    });


  populateCustomerSelect();

}


function populateCustomerSelect() {

  const select =
    document.getElementById(
      "contractCustomer"
    );

  if (!select) return;


  customers.forEach(customer => {

    const option =
      document.createElement("option");

    option.value =
      customer.id;

    option.textContent =
      `${customer.name} - ${customer.phone}`;

    select.appendChild(option);

  });

}


function openContractModal() {

  document
    .getElementById("contractModal")
    .classList.add("show");

}


function closeContractModal() {

  document
    .getElementById("contractModal")
    .classList.remove("show");

}


function closeDetailModal() {

  document
    .getElementById("detailModal")
    .classList.remove("show");

}


/* =====================================================
   DETAIL
===================================================== */

function showRegistration(id) {

  const item =
    registrations.find(
      registration => registration.id === id
    );

  if (!item) return;


  document.getElementById(
    "modalContent"
  ).innerHTML = `

    <span class="eyebrow">
      ĐƠN ĐĂNG KÝ
    </span>

    <h2>${item.id}</h2>

    <div class="detail-grid">

      <div>
        <label>Khách hàng</label>
        <strong>${item.customer}</strong>
      </div>

      <div>
        <label>Số điện thoại</label>
        <strong>${item.phone}</strong>
      </div>

      <div>
        <label>Loại xe</label>
        <strong>${item.vehicle}</strong>
      </div>

      <div>
        <label>Số lượng</label>
        <strong>${item.quantity} xe</strong>
      </div>

      <div>
        <label>Ngày đăng ký</label>
        <strong>${item.date}</strong>
      </div>

      <div>
        <label>Trạng thái</label>
        ${getStatus(item.status)}
      </div>

    </div>


    <div class="modal-actions">

      <button
        class="secondary-btn"
        onclick="closeDetailModal()"
      >
        Đóng
      </button>

      <button
        class="primary-btn"
        onclick="contactCustomer('${item.id}')"
      >
        Đã liên hệ khách hàng
      </button>

    </div>

  `;


  document
    .getElementById("detailModal")
    .classList.add("show");

}


function contactCustomer(id) {

  const item =
    registrations.find(
      registration => registration.id === id
    );

  if (!item) return;


  item.status = "contacted";

  renderRegistrations();
  renderRecentRegistrations();

  closeDetailModal();

  alert(
    `Đã cập nhật ${id} → Đã liên hệ`
  );

}


function showCustomer(id) {

  const customer =
    customers.find(
      item => item.id === id
    );

  if (!customer) return;


  document.getElementById(
    "modalContent"
  ).innerHTML = `

    <span class="eyebrow">
      KHÁCH HÀNG
    </span>

    <h2>${customer.name}</h2>

    <div class="detail-grid">

      <div>
        <label>Mã khách hàng</label>
        <strong>${customer.id}</strong>
      </div>

      <div>
        <label>Số điện thoại</label>
        <strong>${customer.phone}</strong>
      </div>

      <div>
        <label>Địa chỉ</label>
        <strong>${customer.address}</strong>
      </div>

      <div>
        <label>Trạng thái</label>
        <strong>${customer.status}</strong>
      </div>

    </div>

  `;


  document
    .getElementById("detailModal")
    .classList.add("show");

}


function showVehicle(id) {

  const vehicle =
    vehicles.find(
      item => item.id === id
    );

  if (!vehicle) return;


  const statusNames = {

    ready: "Sẵn sàng",

    renting: "Đang cho thuê",

    maintenance: "Bảo dưỡng"

  };


  document.getElementById(
    "modalContent"
  ).innerHTML = `

    <span class="eyebrow">
      THÔNG TIN XE
    </span>

    <h2>${vehicle.name}</h2>

    <div class="vehicle-detail-icon">
      ${vehicle.icon}
    </div>

    <div class="detail-grid">

      <div>
        <label>Mã xe</label>
        <strong>${vehicle.id}</strong>
      </div>

      <div>
        <label>Loại xe</label>
        <strong>${vehicle.type}</strong>
      </div>

      <div>
        <label>Tải trọng</label>
        <strong>${vehicle.capacity}</strong>
      </div>

      <div>
        <label>Giá thuê</label>
        <strong>${vehicle.price}</strong>
      </div>

      <div>
        <label>Trạng thái</label>
        <strong>${statusNames[vehicle.status]}</strong>
      </div>

    </div>

  `;


  document
    .getElementById("detailModal")
    .classList.add("show");

}


function showContract(id) {

  const contract =
    contracts.find(
      item => item.id === id
    );

  if (!contract) return;


  document.getElementById(
    "modalContent"
  ).innerHTML = `

    <span class="eyebrow">
      HỢP ĐỒNG THUÊ XE
    </span>

    <h2>${contract.id}</h2>

    <div class="detail-grid">

      <div>
        <label>Khách hàng</label>
        <strong>${contract.customer}</strong>
      </div>

      <div>
        <label>Loại xe</label>
        <strong>${contract.vehicle}</strong>
      </div>

      <div>
        <label>Ngày lập</label>
        <strong>${contract.date}</strong>
      </div>

      <div>
        <label>Giá trị hợp đồng</label>
        <strong>${contract.value}</strong>
      </div>

      <div>
        <label>Trạng thái</label>
        <strong>${contract.status}</strong>
      </div>

    </div>

  `;


  document
    .getElementById("detailModal")
    .classList.add("show");

}


/* =====================================================
   LOGOUT
===================================================== */

function logout() {

  localStorage.removeItem(
    "employeeLoggedIn"
  );

  localStorage.removeItem(
    "employeeRole"
  );

  window.location.href =
    "login.html";

}