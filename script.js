(() => {
  // Dynamic year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile navigation toggle
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");

  if (navToggle &&
