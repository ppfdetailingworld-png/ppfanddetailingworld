const galleryImages = document.querySelectorAll(".gallery-box img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach((img) => {
  img.onclick = function () {
    lightboxImg.src = this.src;
    lightbox.style.display = "flex";
};
      });

closeBtn.onclick = function () {
  lightbox.style.display = "none";
};

lightbox.onclick = function (e) {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
};
