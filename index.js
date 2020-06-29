let turnOff = ()=>{
    let light = document.createElement('div')

    light.style.position = 'absolute';
    light.style.top = 0;
    light.style.left = 0;
    light.style.width = '100%';
    light.style.height = '100%';
    light.style.zIndex = 999;
    light.style.background = 'black';

    document.body.appendChild(light)

    document.body.onmousemove = function(e){
        let X = e.pageX; 
        let Y = e.pageY; 
        light.style.background = 'radial-gradient(circle at '+X+'px '+Y+'px, transparent, #000 20vh)'
    }

    let lightSwitcher = document.createElement('div');
    lightSwitcher.setAttribute('style',
    "position: absolute;" + 
    "width: 30px;" + 
    "height: 30px;" + 
    "background: url(icon.png);" + 
    "background-size: contain;" +
    "z-index: 998;" +
    "left: " + Math.floor(Math.random()*window.innerWidth) + "px;" + 
    "top: " + Math.floor(Math.random()*window.innerHeight) + "px;");

    document.body.appendChild(lightSwitcher)
    let lightSwitcherProto = document.createElement('div');
    lightSwitcherProto.setAttribute('style',
    "position: absolute;" + 
    "width: 30px;" + 
    "height: 30px;" + 
    "left: " + lightSwitcher.style.left + ";" +
    "top: " + lightSwitcher.style.top + ";");
    light.appendChild(lightSwitcherProto)

    lightSwitcherProto.addEventListener('click',()=>{
        light.remove();
        lightSwitcher.remove();
        lightSwitcherProto.remove();
    })
}

window.addEventListener('load',()=>{
    turnOff();
})

console.log('xyIII')