document.addEventListener("DOMContentLoaded", function () {

  const galleryImages = document.querySelectorAll(".gallery-box img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");

  galleryImages.forEach(img => {
    img.addEventListener("click", function () {
      lightboxImg.src = this.src;
      lightbox.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

});
