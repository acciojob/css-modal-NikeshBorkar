//your JS code here. If required.
document.querySelector(".close-modal").addEventListener("click", () => {
    document.querySelector(".modal").style.display="none";
  })
document.querySelector("body").addEventListener("click", () => {
    document.querySelector(".modal").style.display="none";
  })