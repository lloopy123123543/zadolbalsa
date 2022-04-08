let visible = 'visible';
let hidden = 'hidden';
let text = document.querySelector(".text");
let bg = document.querySelector(".image");
document.querySelector(".ch1").addEventListener('click', function(){
    bg.style.background = 'url(./img/bag4.jpg)';
    text.innerHTML="Это Первая кнопочка";
})
document.querySelector(".ch2").addEventListener('click', function(){
    bg.style.background = 'url(./img/bag3.jpg)';
    text.innerHTML="Это вторая кнопочка";
})
document.querySelector(".ch3").addEventListener('click', function(){
    bg.style.background = 'url(./img/bag2.png)';
    text.innerHTML="Это третья кнопочка";
})
document.querySelector(".ch4").addEventListener('click', function(){
    bg.style.background = 'url(./img/bag.png)';
    text.innerHTML="Это четвертая кнопочка";
})
document.querySelector(".ch5").addEventListener('click', function(){
    bg.style.background = 'url(./img/bag.png)';
    text.innerHTML="Это пятая кнопочка";
})
document.querySelector(".ch6").addEventListener('click', function(){
    bg.style.background = 'url(./img/bag.png)';
    text.innerHTML="Это шестая кнопочка";
})
document.querySelector(".ch7").addEventListener('click', function(){
    bg.style.background = 'url(./img/bag.png)';
    text.innerHTML="Это седьмая кнопочка";
})