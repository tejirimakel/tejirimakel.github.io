// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenuBtn = document.getElementById("closeMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});

function closeMenu() {
  mobileMenu.classList.add("hidden");
}

closeMenuBtn.addEventListener("click", closeMenu);

// Sticky Header Background on Scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 5) {
    header.classList.add("bg-black", "transition", "duration-300");
  } else {
    header.classList.remove("bg-black");
  }
});


// Hover Button
const hoverButton = document.getElementById('hoverButton');

hoverButton.style.transition = 'background-color 0.3s ease';

hoverButton.addEventListener('mouseover', () => {
  hoverButton.style.backgroundColor = '#fff'; 
  hoverButton.style.color = '#000'; 
});

hoverButton.addEventListener('mouseout', () => {

  hoverButton.style.backgroundColor = '#f97316';
  hoverButton.style.color = '#ffffff';
});

// Incrementing Button with Even/Odd Color Change
let count = 0;
const counter = document.getElementById('counter');

document.getElementById('buttonCounter').onclick = function () {
  count += 1;
  updateCounter();
};

document.getElementById('resetCounter').onclick = function () {
  count = 0;
  updateCounter();
};

function updateCounter() {
  counter.innerHTML = 'Counter: ' + count;

  if (count % 2 === 0) {
    counter.style.color = 'green'; // even number
  } else {
    counter.style.color = 'purple'; // odd number
  }
}

document.getElementById('generateLoop').addEventListener('click', () => {
  const count = parseInt(document.getElementById('loopCount').value);
  const msg = document.getElementById('loopMsg').value.trim();
  const container = document.getElementById('loopBox');

  container.innerHTML = `<h3 class="text-lg font-semibold mb-2">Loop Output:</h3>`;

  if (!count || !msg) {
    container.innerHTML += `<p class="text-red-500">Please enter both a valid number and a message.</p>`;
    return;
  }

  for (let i = 1; i <= count; i++) {
    const line = document.createElement('p');
    line.textContent = `${i}. ${msg}`;
    container.appendChild(line);
  }
});



// Alert on Form Submit
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Your message has been submitted!");
});

// FAQ Accordion Toggle
document.querySelectorAll(".faq-toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const content = toggle.nextElementSibling;
    const icon = toggle.querySelector(".icon");

    // Toggle visibility
    content.classList.toggle("hidden");

    // Toggle icon
    if (icon.textContent === "+") {
      icon.textContent = "−";
    } else {
      icon.textContent = "+";
    }
  });
});

// Pricing Calculator Logic
document.getElementById("calculateBtn").addEventListener("click", () => {
  const price = parseFloat(document.getElementById("serviceType").value);
  const qty = parseInt(document.getElementById("quantity").value);
  const total = price * qty;
  const resultText = `Estimated Total: $${total}`;

  // Display on mobile
  document.getElementById("priceMobile").textContent = resultText;

  // Display on desktop
  const desktopPrice = document.getElementById("priceDesktop");
  const pdView = document.getElementById("pdView");
  const box = document.getElementById("gridBox");

  desktopPrice.textContent = resultText;
  pdView.classList.remove("hidden");
  pdView.classList.add("lg:block", "hidden");

  box.classList.remove("lg:grid-cols-2");
  box.classList.add("lg:grid-cols-3");
});
