/* ==================== 
  toggle icon navbar 
====================== */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/* =========================== 
    Scroll Section Active Link 
============================= */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /* ========================
      Sticky Navbar 
=========================== */
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /* ===================== 
    Menu Icon Navbar 
====================== */
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/* ===================== 
    Scroll Reveal 
====================== */
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/* ===================== 
    Typed Js 
====================== */
const typed = new Typed(".multiple-text", {
  strings: ["Teknisi Komputer", "Administrasi Server","Teknisi Jaringan"],
  typeSpeed: 150,
  backSpeed: 90,
  backDelay: 1000,
  loop: true,
});


document.addEventListener("DOMContentLoaded", function() {
  const readMoreBtn = document.querySelector('.read-more');
  const fullDescription = document.querySelector('.full-description');
  const shortDescription = document.querySelector('.short-description');

  readMoreBtn.addEventListener('click', function(event) {
    event.preventDefault();
    if (fullDescription.style.display === 'none') {
      fullDescription.style.display = 'block';
      shortDescription.style.display = 'none';
      readMoreBtn.textContent = 'Baca Leih Sedikit';
    } else {
      fullDescription.style.display = 'none';
      shortDescription.style.display = 'block';
      readMoreBtn.textContent = 'Read More';
    }
  });
});

function sendMessage() {
  var fullName = document.getElementById('fullName').value;
  var emailAddress = document.getElementById('emailAddress').value;
  var mobileNumber = document.getElementById('mobileNumber').value;
  var emailSubject = document.getElementById('emailSubject').value;
  var message = document.getElementById('message').value;

  // Ganti dengan nomor WhatsApp atau WhatsApp Web link Anda
  var waLink = 'https://wa.me/+6287881965963?text=';
  var messageBody = 'Nama: ' + fullName + '%0' +
                    'Email: ' + emailAddress + '%0' +
                    'Nomor HP: ' + mobileNumber + '%0' +
                    'Subjek: ' + emailSubject + '%0' +
                    'Pesan: ' + message;

  // Gabungkan link WhatsApp dengan pesan
  var fullLink = waLink + encodeURIComponent(messageBody);

  // Buka link WhatsApp
  window.open(fullLink, '_blank');
}

function openModal(imageName) {
  var overlay = document.querySelector('.overlay');
  var overlayImg = document.getElementById('overlay-img');
  overlayImg.src = imageName;
  overlayImg.src = imageName;
  overlay.style.display = 'flex'; // Menampilkan overlay
}

// Fungsi untuk menutup overlay
function closeModal() {
  var overlay = document.querySelector('.overlay');
  overlay.style.display = 'none'; // Menyembunyikan overlay
}