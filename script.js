// Button Click, Hover, and Double Click
const magicBtn = document.getElementById("magicBtn");
const message = document.getElementById("buttonMessage");

magicBtn.addEventListener("click", () => {
  message.textContent = "✨ Button Clicked!";
  magicBtn.style.backgroundColor = "#28a745";
});

magicBtn.addEventListener("dblclick", () => {
  message.textContent = "💥 Double Click Magic!";
  magicBtn.style.backgroundColor = "#e83e8c";
});

magicBtn.addEventListener("mouseenter", () => {
  message.textContent = "👋 You hovered over me!";
});

magicBtn.addEventListener("mouseleave", () => {
  message.textContent = "";
});

// Image Gallery
const thumbnails = document.querySelectorAll(".thumbnails img");
const mainImage = document.getElementById("mainImage");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    mainImage.src = thumb.src;
  });
});

// Tabs
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".tab-btn.active").classList.remove("active");
    document.querySelector(".tab-content.active").classList.remove("active");

    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// Form Validation
const form = document.getElementById("signupForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;

  if (!name || !email || !password) {
    feedback.textContent = "❌ Please fill all fields.";
    feedback.style.color = "red";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    feedback.textContent = "📛 Invalid email format.";
    feedback.style.color = "red";
    return;
  }

  if (password.length < 8) {
    feedback.textContent = "🔐 Password must be at least 8 characters.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = "✅ Form submitted successfully!";
  feedback.style.color = "green";
});

// Real-time Feedback (Bonus)
form.password.addEventListener("input", () => {
  if (form.password.value.length < 8) {
    feedback.textContent = "🛡️ Weak password!";
    feedback.style.color = "orange";
  } else {
    feedback.textContent = "🔒 Strong password!";
    feedback.style.color = "blue";
  }
});
