const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show_2');
        } else{
            entry.target.classList.remove('show_2');
        }
    });
});

const hiddenelements2 = document.querySelectorAll(".w_client_s");
hiddenelements2.forEach((el) => observer2.observe(el));