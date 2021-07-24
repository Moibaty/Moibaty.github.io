"use strict"


/*var array = [];

var l = prompt("ТИП САЙТА :\n 1-Интернет-магазин(30.000руб.)\n 2-Сайт-визитка(10.000руб.)\n 3-Корпоративные сайты(50.000руб.)");
for (var h = Number(l); h != 1 && h != 2 && h != 3;) {
    alert("Недопустимое значение.\n Напишите номер желаемого ответа!");
    h = prompt("ТИП САЙТА :\n 1-Интернет-магазин(30.000руб.)\n 2-Сайт-визитка(10.000руб.)\n 3-Корпоративные сайты(50.000руб.)");
};
h = Number(h);
l = h;
array[0] = l;

var w = prompt("ДИЗАЙН САЙТА:\n 1-Индивидуальный(±5.000руб.) \n 2-Шаблонный(±1.000руб.) (Увидеть примеры вы можете в разделе Кейсы)");
for ( var s = Number(w); s != 1 && s != 2;) {
    alert("Недопустимое значение.\n Напишите номер желаемого ответа!");
    s = prompt("ДИЗАЙН САЙТА:\n 1-Индивидуальный(±5.000руб.) \n 2-Шаблонный(±1.000руб.) (Увидеть примеры вы можете в разделе Кейсы)");
};
s = Number(s);
w = s;
array[1] = w;

var i = prompt("АДАПТИВНОСТЬ:\n 1-Только мобильные устройства(3.000руб.)(375px-991px) \n 2-Только широкоформатные экраны(2.000руб.)(≥992px)\n 3-Все устройства(4.000руб.) (≥375px)");
for (var k = Number(i); k != 1 && k != 2 && k != 3;) {
    alert("Недопустимое значение.\n Напишите номер желаемого ответа!");
    k = prompt("АДАПТИВНОСТЬ:\n 1-Только мобильные устройства(3.000руб.)(375px-991px) \n 2-Только широкоформатные экраны(2.000руб.)(≥992px)\n 3-Все устройства(4.000руб.) (≥375px)");
};
k = Number(k);
i = k;
array[2] = i;
console.log(array);
var c = 0;
var t = 0;
if(array[0] == 1) {
    c = 30000;
    t = 14;
};
if(array[0] == 2) {
    c = 10000;
    t = 7;
};
if(array[0] == 3) {
    c = 50000;
    t = 21;
};

if(array[1] == 1) {
    c +=5000;
     t += 2;
};
if(array[1] == 2) {
    c +=1000;
    t += 1;
};
if(array[2] == 1) {
    c += 3000;
    t += 2;
};
if(array[2] == 2) {
    c += 2000;
    t += 2;
};
if(array[2] == 3) {
    c += 4000;
    t += 4;
};
console.log(typeof c);
console.log(c);
var o = "Цена выбранных вами услуг составлят:" + c +"\n Если вы готовы сделать заказ, то обратитесь по этому номеру телефона : +7 999 999 99 99";
confirm(o);
t = String(t);
console.log(typeof t);
console.log(t);
var p = t + " сут.";
var f = c + " руб.";
document.getElementById("Sroki").textContent= p;
document.getElementById("Cena").textContent= f;*/
















$(document).ready(function () {
    let options = {
        threshold: [0.5]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.animationnumbers');
    elements.each((i, el) => {
        observer.observe(el);
    });




});

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            $('.animationnumbers').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
                
            });

        };
    });
}; 





$('.js-close-campaign').click(function() {
    $('.js-overlay-campaign').fadeOut();
    $('main').css('filter','none');
});

$(window).on('load', function() {
    setTimeout(function(){
        if($('js-overlay-campaign').hasClass('disabled')) {
            return false;
        }
        else {
            $('main').css('filter','blur(5px)');
            $(".js-overlay-campaign").fadeIn();
        }
    }, 10000);
});










$('a[href^="#"]').click(function() {
    let valHref = $(this).attr("href");
    $('html,body').animate({scrollTop: $(valHref).offset().top -20 + "px"});
});
$(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();
    $(".section").each((i,el) =>{
       if($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {
           $("nav a").each((i,el) => {
               if($(el).hasClass("active")) {
                   $(el).removeClass("active");
               }
           });
           $('nav li:eq(' + i + ')').find('a').addClass('active');
       }
    });
}); 