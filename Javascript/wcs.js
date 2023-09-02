document.querySelectorAll('.img_container img').forEach(img_r =>{
    img_r.onclick = () =>{
        document.querySelector('.popup_img').style.display = 'block';
        document.querySelector('.popup_img img').src = img_r.getAttribute('src');
    }
});

document.querySelector('.popup_img span').onclick = () =>{
    document.querySelector('.popup_img').style.display = 'none';

}