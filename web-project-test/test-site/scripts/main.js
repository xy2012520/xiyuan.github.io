let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';//h1的内容替换为hello world
//alert('hello!'); // h1内容弹出提示框

function multiply(num1, num2){
    let result = num1 * num2;
    return result;
}
// myHeading.textContent = multiply(4, 7); //(20, 20) (0.5, 3);

//条件语句弹框
let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  // alert('我最喜欢巧克力冰激淋了。');    
} else {
  // alert('但是巧克力才是我的最爱呀……');    
}

//网页的点击事件弹框
document.querySelector('html').onclick = function(){
    //alert('别戳我，啊啊啊啊！');
}

//添加一个图像切换器
let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bg_info.png'){
       myImage.setAttribute('src', 'images/bg_img.png');
    } else {
       myImage.setAttribute('src', 'images/bg_info.png');
    }
}

//添加个性化欢迎信息
function setHeading(name){
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Mozilla 酷毙了，' +name+ '！';
}

function setUserName(){
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
}

let storedName = localStorage.getItem('name');
if(!storedName){
    setUserName();
} else {
    setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;
