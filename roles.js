let visible = 'visible';
let hidden = 'hidden';
let text = document.querySelector(".text");
let bg = document.querySelector(".image");
document.querySelector(".ch1").addEventListener('click', function(){
    bg.style.background = 'url(./img/bag4.jpg)';
    text.innerHTML="Создатель сервера";
})
document.querySelector(".ch2").addEventListener('click', function(){
    bg.style.background = 'url(./img/bag3.jpg)';
    text.innerHTML="Модеры";
})
document.querySelector(".ch3").addEventListener('click', function(){
    bg.style.background = 'url(./img/bag2.png)';
    text.innerHTML="Подтвержденные ученики";
})
document.querySelector(".ch4").addEventListener('click', function(){
    bg.style.background = 'url(./img/bag.png)';
    text.innerHTML="Админы";
})
document.querySelector(".ch5").addEventListener('click', function(){
    bg.style.background = 'url(./img/bag.png)';
    text.innerHTML="Староста (может кидать в мут людей)";
})
document.querySelector(".ch6").addEventListener('click', function(){
    bg.style.background = 'url(./img/bag.png)';
    text.innerHTML="Продвинутый ученик";
})
document.querySelector(".ch7").addEventListener('click', function(){
    bg.style.background = 'url(./img/bag.png)';
    text.innerHTML="Не подтвержденный ученик";
})