const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show1');
        } else{
            entry.target.classList.remove('show1');
        }
    });
});

const hiddenelements1 = document.querySelectorAll(".content3");
hiddenelements1.forEach((el) => observer1.observe(el));