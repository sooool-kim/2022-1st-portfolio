const loader = document.querySelector("#loadingScreen");
const loaderComment = document.querySelector("#loadingScreen h2");

window.addEventListener("load", function () {
  setTimeout(() => {
    loaderComment.innerText = "DONE!";
  }, 2000);
  setTimeout(() => {
    loaderComment.innerText = "Hi there!";
  }, 3000);
  setTimeout(() => {
    loader.style.opacity = "0";
    window.scrollTo(0, 0);
  }, 4500);
  setTimeout(() => {
    loader.style.display = "none";
  }, 5000);
});
