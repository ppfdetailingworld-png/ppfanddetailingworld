// ===============================
// PPF & Detailing World
// Premium Script
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // ===== Smooth Scroll =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e){
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){
                target.scrollIntoView({
                    behavior:"smooth",
                    block:"start"
                });
            }
        });
    });


    // ===== Header Background =====
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 50){
            header.style.background = "rgba(0,0,0,.92)";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.45)";
        }else{
            header.style.background = "rgba(0,0,0,.70)";
            header.style.boxShadow = "none";
        }

    });


    // ===== Lightbox =====

    const galleryImages =
    document.querySelectorAll(".gallery-box img");

    const lightbox =
    document.getElementById("lightbox");

    const lightboxImg =
    document.getElementById("lightbox-img");

    const close =
    document.querySelector(".close");

    galleryImages.forEach(img=>{

        img.addEventListener("click",()=>{

            lightbox.style.display="flex";

            lightboxImg.src=img.src;

        });

    });

    close.onclick=()=>{

        lightbox.style.display="none";

    };

    lightbox.onclick=(e)=>{

        if(e.target===lightbox){

            lightbox.style.display="none";

        }

    };


    // ===== Scroll Animation =====

    const cards = document.querySelectorAll(
    ".service-card,.gallery-box,.review-card");

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";

                entry.target.style.transform="translateY(0)";

            }

        });

    },{

        threshold:.15

    });

    cards.forEach(card=>{

        card.style.opacity="0";

        card.style.transform="translateY(60px)";

        card.style.transition=".8s";

        observer.observe(card);

    });

});
