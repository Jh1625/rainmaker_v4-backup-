const carousel_2 = document.querySelector(".carousel_2");
const arrowbtns_2 = document.querySelectorAll(".wrapper_2 i");
const firstCardWidth_2 = carousel_2.querySelector(".card_2").offsetWidth;

let isDragging_2 = false, startX_2, startScrollLeft_2;

arrowbtns_2.forEach(btn_2 => {
    btn_2.addEventListener("click", () =>{
        carousel_2.scrollLeft += btn_2.id === "left" ? -firstCardWidth_2 : firstCardWidth_2;;
    })
});

const dragStart_2 = (e) => {
    isDragging_2 = true;
    carousel_2.classList.add("dragging");
    startX_2 = e.pageX;
    startScrollLeft_2 = carousel_2.scrollLeft;
}

const dragging_2 = (e) => {
    if(!isDragging_2) return;
    carousel_2.scrollLeft = e.pageX;
    carousel_2.scrollLeft = startScrollLeft_2 - (e.pageX - startX_2);
}   

const dragStop_2 = () => {
    isDragging_2 = false;
    carousel_2.classList.remove("dragging");
}

carousel_2.addEventListener("mousedown", dragStart_2);
carousel_2.addEventListener("mousemove", dragging_2);
document.addEventListener("mouseup", dragStop_2);