/*global console*/
var i, j, lableTag, inputTag, pTag, liText, pText, divTag, formTag, liList, lableText, lable1Text, lable2Text, lable3Text,
    formArr = new Array(2),
    liArr = new Array(2),
    bodyTag = document.body,
    h1Tag = document.createElement('h1'),
    ulList = document.createElement('ul'),
    h1Text = document.createTextNode('Daily UI'),
    footerTag = document.createElement('footer'),
    headerTag = document.createElement('header'),
    sectionTag = document.createElement('section'),
    divContainer = document.createElement('div');
// start div class="container"
bodyTag.appendChild(divContainer);
divContainer.setAttribute('class', 'container');
divContainer.setAttribute('style', 'width:1000px; height:600px; color:#fff; position:relative; top:10%; left:25%; border-radius:7px; background:url("./images/formbg.jpg"); background-size:cover; box-shadow:0 20px 25px #666,-1px -100px 25px #fff;');
// end div class="container"
// start header
// start h1
headerTag.appendChild(h1Tag);
h1Tag.appendChild(h1Text);
// end h1
// start ul
for (i = 0; i < liArr.length; i = i + 1) {
    liArr[i] = document.createElement('li');
    if (i === 0) {
        liText = document.createTextNode('Login');
        liArr[i].setAttribute('id', 'in');
    } else {
        liText = document.createTextNode('Sign Up');
        liArr[i].setAttribute('id', 'up');
    }
    liArr[i].appendChild(liText);
    ulList.appendChild(liArr[i]);
    headerTag.appendChild(ulList);
}
ulList.setAttribute('style', 'list-style-type:none; display:flex;');
liArr[0].setAttribute('style', 'justify-content:space-around; margin:auto 20px; font-size:25px; cursor:pointer;');
liArr[1].setAttribute('style', 'justify-content:space-around; margin:auto 20px; font-size:25px; cursor:pointer;');
// end ul
headerTag.setAttribute('style', 'display:flex; justify-content:space-between; padding:40px 35px 0;');
divContainer.appendChild(headerTag);
// end header
// start section
for (i = 0; i < formArr.length; i = i + 1) {
    formArr[i] = document.createElement('form');
    if (i === 0) {
        formArr[i].setAttribute('class', 'login');
        formArr[i].setAttribute('style', 'width:350px; height:300px; display:block;');
    } else {
        formArr[i].setAttribute('class', 'sign_up');
        formArr[i].setAttribute('style', 'width:350px; height:300px; display:none;');
    }
    for (j = 0; j < 3; j = j + 1) {
        divTag = document.createElement('div');
        lableTag = document.createElement('lable');
        inputTag = document.createElement('input');
        divTag.setAttribute('class', 'lable_input');
        if (j === 0) {
            if (i === 0) {
                lableTag.innerHTML = '<i class="fa fa-envelope-o fa-lg"></i>';
            } else {
                lableText = document.createTextNode('Enter your email:');
                lableTag.appendChild(lableText);
            }
            inputTag.setAttribute('type', 'text');
            inputTag.setAttribute('placeholder', 'email@outlock.com');
        } else if (j === 1) {
            if (i === 0) {
                lableTag.innerHTML = '<i class="fa fa-lock fa-lg"></i>';
            } else {
                lable1Text = document.createTextNode('Enter your password:');
                lableTag.appendChild(lable1Text);
            }
            inputTag.setAttribute('type', 'password');
        } else if (j === 2) {
            if (i === 0) {
                lableTag.innerHTML = '<i class="fa fa-angle-right fa-lg"></i>';
                inputTag.setAttribute('type', 'submit');
                inputTag.setAttribute('value', 'Login');
            } else {
                lable2Text = document.createTextNode('Re-Enter your password:');
                lableTag.appendChild(lable2Text);
                inputTag.setAttribute('type', 'password');
            }
        }
        if (i === 0 && j === 2) {
            inputTag.setAttribute('style', 'border-radius:50px; background-color:rgba(50,50,50,.8); font-size:23px; text-indent:-5px; width:100%; height:50px; margin:10px auto; font-weight:bold; border:0;');
            lableTag.setAttribute('style', 'position:absolute; top:25px; right:15px;');
        } else if (i < 2 && j < 3) {
            if (i === 1) {
                lableTag.setAttribute('style', 'margin-top:2px 0;');
            } else {
                lableTag.setAttribute('style', 'position:absolute; top:25px; left:15px;');
            }
            inputTag.setAttribute('style', 'color:#fff; width:100%; height:50px; text-indent:50px; margin:10px 0; font-size:18px; background-color:rgba(50,50,50,.3); border-radius:8px; border:0;');
        }
        divTag.setAttribute('style', 'position:relative;');
        divTag.appendChild(lableTag);
        divTag.appendChild(inputTag);
        formArr[i].appendChild(divTag);
    }
    sectionTag.appendChild(formArr[i]);
}
// start creating Sign UP input for second form field
divTag = document.createElement('div');
lableTag = document.createElement('lable');
inputTag = document.createElement('input');
divTag.setAttribute('class', 'lable_input');
lableTag.innerHTML = '<i class="fa fa-angle-right fa-lg"></i>';
inputTag.setAttribute('type', 'submit');
inputTag.setAttribute('value', 'Sign Up');
inputTag.setAttribute('style', 'border-radius:50px; background-color:rgba(50,50,50,.8); font-size:23px; text-indent:-5px; width:100%; height:50px; margin:10px 0; font-weight:bold; border:0;');
divTag.setAttribute('style', 'position:relative;');
lableTag.setAttribute('style', 'position:absolute; top:25px; right:15px;');
divTag.appendChild(lableTag);
divTag.appendChild(inputTag);
formArr[1].appendChild(divTag);
// end creating Sign UP input for second form field
sectionTag.setAttribute('style', 'width:350px; margin:auto; position:relative;');
// end section
divContainer.appendChild(sectionTag);
// start footer
for (i = 0; i < 2; i = i + 1) {
    pTag = document.createElement('p');
    if (i === 0) {
        pText = document.createTextNode('Made by prakash, All copy right resevied');
    } else {
        pText = document.createTextNode('Just Practice ');
    }
    pTag.setAttribute('style', 'width:350px; margin:20px auto; color:#aaa; font-size:16px; text-align:center;');
    pTag.appendChild(pText);
    footerTag.appendChild(pTag);
}
footerTag.setAttribute('style', 'width:100%; color:#fff; background-color:rgba(50,50,50,.2); position:absolute; bottom:0;');
// end footer
divContainer.appendChild(footerTag);
// end div class="container"
// start switch between Login and Sign Up using onclick event
liArr[0].onclick = function () {
    "use strict";
    formArr[0].style.display = 'block';
    formArr[1].style.display = 'none';
};
liArr[1].onclick = function () {
    "use strict";
    formArr[1].style.display = 'block';
    formArr[0].style.display = 'none';
};
// end switch between Login and Sign Up using onclick event