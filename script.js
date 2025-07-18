// Typing effect
const text = "Hi, I'm Abhay, Web Developer.";
let i = 0;
const typing = () => {
  if (i < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
};
typing();

// Dark mode toggle
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Scroll to top
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
};
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
