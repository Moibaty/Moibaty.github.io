"use strict"


var array = [];
$(document).ready(function () {
    let options = {
        threshold: [0.5]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('#ananas');
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
    }, 15000);
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

function calc() { 
var select = document.getElementById("SiteType");
var value = select.value;
var c = Number(value);
array[0] = c;
var select1 = document.getElementById("Design");
var value1 = select1.value;
var d = Number(value1);
array[1] = d;
var select2 = document.getElementById("adaptability");
var value2 = select2.value;
var k = Number(value2);
array[2] = k;

var p = 0;
var t = 0;
if(array[0] == 1) {
    p = 30000;
    t = 14;
};
if(array[0] == 2) {
    p = 10000;
    t = 7;
};
if(array[0] == 3) {
    p = 50000;
    t = 21;
};

if(array[1] == 1) {
    p +=5000;
     t += 2;
};
if(array[1] == 2) {
    p +=1000;
    t += 1;
};
if(array[2] == 1) {
    p += 3000;
    t += 2;
};
if(array[2] == 2) {
    p += 2000;
    t += 2;
};
if(array[2] == 3) {
    p += 4000;
    t += 4;
};

t = String(t);
p = String(p)
var m = t + " сут.";
var f = p + " руб.";
document.getElementById("Sroki").textContent= m;
document.getElementById("Cena").textContent= f;
};

$("#phone").mask("+7(999) 999-9999");


$(document).ready(function () {
$('form').submit(function(event){
        event.preventDefault();
        $.ajax ({
            type: "POST",
            url: "php/mail.php",
            data: $(this).find("input").val(""),
        }).done(function() {
            $(this).find("input").val("");
            alert("Успешно отправлено!");
            $("form").trigger("reset");
        });
        return false;
    });
    $('form').submit(function(event){
        event.preventDefault();
        $.ajax ({
            type: "POST",
            url: "php/test.php",
            data: $(this).find("input").val(""),
        }).done(function() {
            $(this).find("input").val("");
            alert("Успешно отправлено!");
            $("form").trigger("reset");
        });
        return false;
    });
});











