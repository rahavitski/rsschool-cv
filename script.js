const btn = document.querySelector(".theme_button");
btn.addEventListener("click", function () {
  document.body.classList.toggle("dark_theme")
});

const container = document.querySelector(".main_container");
btn.addEventListener("click", function () {
  container.classList.toggle("dark_theme");
});

const education = document.querySelector(".education");
btn.addEventListener("click", function () {
  education.classList.toggle("dark_theme");
});

const top_line = document.querySelector(".top_line");
btn.addEventListener("click", function () {
  top_line.classList.toggle("dark_theme");
});

const name_line = document.querySelector(".name_line");
btn.addEventListener("click", function () {
  name_line.classList.toggle("dark_theme");
});

const about_me = document.querySelector(".about_me");
btn.addEventListener("click", function () {
  about_me.classList.toggle("dark_theme");
});

const my_education = document.querySelector(".my_education");
btn.addEventListener("click", function () {
  my_education.classList.toggle("dark_theme");
});

const education_link = document.querySelector(".education_link");
btn.addEventListener("click", function () {
  education_link.classList.toggle("dark_theme");
});

const my_code = document.querySelector(".my_code");
btn.addEventListener("click", function () {
  my_code.classList.toggle("dark_theme");
});
