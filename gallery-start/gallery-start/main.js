const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* 添加图片循环 */
for(let i =1;i<=5;i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic'+i+'.jpg');
    thumbBar.appendChild(newImage);
    newImage.onclick=function(e){modifySrc(e.target.src);}
}
function modifySrc(path){
    displayedImage.setAttribute('src',path);
}

/* 编写 变暗/变量 按钮功能 */
btn.onclick=function(e){
    let name = e.target.getAttribute('class');
    if(name === 'dark'){       
        //e.target.setAttribute('textContent','变亮');
        e.target.textContent='变亮';
        e.target.setAttribute('class','light');
        overlay.style.background = "rgba(0,0,0,0.5)";
    }else{
        //e.target.setAttribute('textContent','变暗');
        e.target.textContent='变暗';
        e.target.setAttribute('class','dark');
        overlay.style.background = "rgba(0,0,0,0)";
    }
}