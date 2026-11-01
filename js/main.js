const nav = document.getElementById("nav");
const toggle = nav.querySelector(".menu-toggle");

const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
nav.querySelectorAll(".nav-links a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      observer.unobserve(e.target);
    }),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal, .mockup").forEach((el) => observer.observe(el));

document.querySelectorAll(".tab").forEach((tab) =>
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((t) => t.classList.toggle("active", t === tab));
    document.querySelectorAll(".tab-panel").forEach((p) => {
      const active = p.dataset.panel === tab.dataset.tab;
      p.classList.toggle("active", active);
      if (active) p.classList.add("in");
    });
  })
);

const copyIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>';
const checkIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>';

document.querySelectorAll(".code").forEach((block) => {
  const btn = document.createElement("button");
  btn.className = "copy";
  btn.setAttribute("aria-label", "Copy to clipboard");
  btn.innerHTML = copyIcon;
  btn.addEventListener("click", async () => {
    await navigator.clipboard.writeText(block.querySelector("pre").innerText);
    btn.classList.add("ok");
    btn.innerHTML = checkIcon;
    setTimeout(() => {
      btn.classList.remove("ok");
      btn.innerHTML = copyIcon;
    }, 1600);
  });
  block.appendChild(btn);
});

document.querySelectorAll("#year").forEach((el) => (el.textContent = new Date().getFullYear()));
