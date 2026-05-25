function bg() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}
window.addEventListener('scroll', bg);

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nb");

addEventListener("scroll", () => {
    let current = "home";

    sections.forEach(section => {
        const top = section.offsetTop - 160;
        if (scrollY >= top) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

let buttons = document.querySelectorAll(".filter-btn");
let foods = document.querySelectorAll(".food");
let moreImg = document.querySelector(".moreImg");
let imgs = document.querySelectorAll(".more");
let Rmore = document.querySelector(".Rmore");
let moreP =document.querySelector(".moreP");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn => {
            btn.classList.remove("active");
            btn.classList.add("text-black");
        });

        button.classList.add("active");
        button.classList.remove("text-black");

        let filter = button.dataset.filter;

        moreImg.classList.remove("d-none");

        foods.forEach(food => {

            if (filter === "all") {
                food.classList.remove("d-none");
                imgs.forEach(img => img.classList.add("d-none"));
            }

            else if (food.classList.contains(filter)) {
                food.classList.remove("d-none");
                moreImg.classList.add("d-none");
            }

            else {
                food.classList.add("d-none");
            }
        });

    });

});

moreImg.addEventListener("click", () => {
    imgs.forEach(img => {
        img.classList.remove("d-none");
    });
     moreImg.classList.add("d-none");
});

Rmore.addEventListener("click", () => {
    moreP.classList.toggle("d-none");

    if (moreP.classList.contains("d-none")) {
        Rmore.innerHTML = "Read More";
    } else {
        Rmore.innerHTML = "Less";
    }
});