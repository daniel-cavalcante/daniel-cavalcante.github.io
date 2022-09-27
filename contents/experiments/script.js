const nav = document.querySelector('nav');
const article = document.querySelector('article');
const pageButton = document.querySelector('.pageButton');

async function addPageContents() {
  const resp = await fetch("page_one.html");
  const html = await resp.text();
  document.body.insertAdjacentHTML("beforeend", html);
}

pageButton.addEventListener('click', addPageContents);