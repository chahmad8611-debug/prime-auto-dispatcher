// script.js

let loads = [];

function addLoad() {
  const pickup = document.getElementById("pickup").value;
  const delivery = document.getElementById("delivery").value;
  const driver = document.getElementById("driver").value;

  if (!pickup || !delivery || !driver) {
    alert("Fill all fields");
    return;
  }

  const load = {
    id: Date.now(),
    pickup,
    delivery,
    driver,
    status: "Pending"
  };

  loads.push(load);
  displayLoads();
  document.getElementById("pickup").value = '';
  document.getElementById("delivery").value = '';
  document.getElementById("driver").value = '';
}

function dispatchLoad(id) {
  loads = loads.map(l => l.id === id ? { ...l, status: "Dispatched" } : l);
  displayLoads();
}

function displayLoads() {
  const container = document.getElementById("loads");
  container.innerHTML = "";

  loads.forEach((l, index) => {
    const div = document.createElement("div");
    div.classList.add("card");

    // Round-robin truck images
    const truckImage = `images/truck${(index % 3) + 1}.jpg`;

    div.innerHTML = `
      <img src="${truckImage}" alt="Truck" class="truck-img">
      <p><b>Pickup:</b> ${l.pickup}</p>
      <p><b>Delivery:</b> ${l.delivery}</p>
      <p><b>Driver:</b> ${l.driver}</p>
      <p><b>Status:</b> ${l.status}</p>
      ${l.status === "Pending" ? `<button onclick="dispatchLoad(${l.id})">Dispatch</button>` : ''}
    `;

    container.appendChild(div);
  });
}
const truckImage = `images/truck${(index % 3) + 1}.jpg`; // rotates 3 images
card.innerHTML = `
  <img src="${truckImage}" alt="Truck" class="truck-img">
  <p><b>Pickup:</b> ${load.pickup}</p>
  <p><b>Delivery:</b> ${load.delivery}</p>
  <p><b>Driver:</b> ${load.driver}</p>
  <p><b>Status:</b> ${load.status}</p>
  ${load.status === 'Pending' ? `<button onclick="dispatchLoad(${load.id})">Dispatch</button>` : ''}
`;
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
  } else {
    document.getElementById("error").innerText = "Wrong username or password";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

// protect page
if (localStorage.getItem("loggedIn") !== "true") {
  if (window.location.pathname.includes("index.html")) {
    window.location.href = "login.html";
  }
}