// /*================================= toggle icon navbar ==========================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

/*================================= Scroll section active link ==========================*/

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
  /*================================= Sticky navbar ==========================*/
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /*================================= remove toggle icon navbar ==========================*/
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};
/*================================= Scroll reveal==========================*/
ScrollReveal({
  reset: "true",
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

/*================================= Typed JS==========================*/
const typed = new Typed(".multiple-text", {
  strings: [
    "Web Developer",
    "Jasa Pembuatan Website"
  ],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

/*================================= KontakJS==========================*/

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    // Validasi
    if (!name || !email || !service || !message) {
        alert("Silakan lengkapi semua data terlebih dahulu.");
        return;
    }

    // Nomor WhatsApp tujuan
    const whatsappNumber = "6281239648697";

    // Pesan yang akan dikirim
    const whatsappMessage = `
Halo, saya tertarik menggunakan jasa Anda.

Nama: ${name}
Email: ${email}
Kebutuhan: ${service}

Pesan:
${message}

Terima kasih.
`;

    // Membuat URL WhatsApp
    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Membuka WhatsApp
    window.open(whatsappURL, "_blank");

    // Reset form
    contactForm.reset();
});
