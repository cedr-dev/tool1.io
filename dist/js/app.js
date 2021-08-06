const navbar = document.querySelector("nav");

document.addEventListener('scroll', (e) => {
    console.log(e);
    console.log(window.scrollY);
    if (window.scrollY > 200) {
        if (navbar.classList.contains("bg-opacity-50")) {
            navbar.classList.remove("bg-opacity-50");
        }
    } else {
        if (!navbar.classList.contains("bg-opacity-50")) {
            navbar.classList.add("bg-opacity-50");
        }
    }
});