alert("Script Loaded");
const galleryImages = document.querySelectorAll(".gallery-box img");
alert(galleryImages.length);
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach((img) => {
  img.onclick = function () {
    alert("Image Clicked");
    lightbox.style.display = "flex";
    lightboxImg.src = this.src;
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
