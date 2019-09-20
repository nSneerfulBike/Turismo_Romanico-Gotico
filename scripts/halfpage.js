let romnc = document.getElementById('romanico');
romnc.addEventListener('mouseover', () => {

    let inner_img = document.getElementById('romnc-img');
    inner_img.style.animation = 'mousein 0.15s linear';
    inner_img.style.opacity = '0.5';
    inner_img.style.transform = 'scale(1.3)';

    let inner_txt = document.getElementById('romnc-img-txt');
    inner_txt.style.animation = 'txt_mousein 0.15s linear';
    inner_txt.style.opacity = '1';

});
romnc.addEventListener('mouseleave', () => {

    let inner_img = document.getElementById('romnc-img');
    inner_img.style.animation = 'mouseout 0.15s linear';
    inner_img.style.opacity = '1';
    inner_img.style.transform = 'scale(1)';

    let inner_txt = document.getElementById('romnc-img-txt');
    inner_txt.style.animation = 'txt_mouseout 0.15s linear';
    inner_txt.style.opacity = '0';

});

let gotc = document.getElementById('gotico');
gotc.addEventListener('mouseover', () => {

    let inner_img = document.getElementById('gotc-img');
    inner_img.style.animation = 'mousein 0.15s linear';
    inner_img.style.opacity = '0.5';
    inner_img.style.transform = 'scale(1.3)';

    let inner_txt = document.getElementById('gotc-img-txt');
    inner_txt.style.animation = 'txt_mousein 0.15s linear';
    inner_txt.style.opacity = '1';

});
gotc.addEventListener('mouseleave', () => {

    let inner_img = document.getElementById('gotc-img');
    inner_img.style.animation = 'mouseout 0.15s linear';
    inner_img.style.opacity = '1';
    inner_img.style.transform = 'scale(1)';

    let inner_txt = document.getElementById('gotc-img-txt');
    inner_txt.style.animation = 'txt_mouseout 0.15s linear';
    inner_txt.style.opacity = '0';

});

let guide = document.getElementById('guide');
guide.addEventListener('mouseover', () => {

    let inner_img = document.getElementById('guide-img');
    inner_img.style.animation = 'mousein 0.15s linear';
    inner_img.style.opacity = '0.5';
    inner_img.style.transform = 'scale(1.3)';

    let inner_txt = document.getElementById('guide-img-txt');
    inner_txt.style.animation = 'txt_mousein 0.15s linear';
    inner_txt.style.opacity = '1';

});
guide.addEventListener('mouseleave', () => {

    let inner_img = document.getElementById('guide-img');
    inner_img.style.animation = 'mouseout 0.15s linear';
    inner_img.style.opacity = '1';
    inner_img.style.transform = 'scale(1)';

    let inner_txt = document.getElementById('guide-img-txt');
    inner_txt.style.animation = 'txt_mouseout 0.15s linear';
    inner_txt.style.opacity = '0';

});