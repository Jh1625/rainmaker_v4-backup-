window.addEventListener("scroll", function(){
    var header = document.getElementById("nav_box");
    header.classList.toggle("scrollable", window.scrollY > 0);
})