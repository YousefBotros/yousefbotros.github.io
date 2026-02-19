(function () {
  // Mobile nav
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      const t = e.target;
      if (!nav.contains(t) && !toggle.contains(t)) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Copy email
  const copyBtn = document.getElementById("copyEmail");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const email = copyBtn.getAttribute("data-copy") || "";
      try {
        await navigator.clipboard.writeText(email);
        const old = copyBtn.textContent;
        copyBtn.textContent = "Copied!";
        setTimeout(() => (copyBtn.textContent = old), 1200);
      } catch {
        // fallback
        window.location.href = `mailto:${email}`;
      }
    });
  }

  // Mailto form (no backend)
  const form = document.getElementById("emailForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name")?.value?.trim() || "Someone";
      const msg = document.getElementById("message")?.value?.trim() || "";
      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(msg);
      window.location.href = `mailto:yousefbotros212@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
