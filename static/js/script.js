const btn = document.querySelector('.button');

btn.addEventListener('click', () => {
    
    camera = document.querySelector('.camera');
    const showCam = 'show a camera';
    const hideCam = 'hide a camera';
    const cameraSetting = camera.style;

    if(cameraSetting.display == 'block'){
        camera.style.display = 'none';
        btn.innerText = showCam;
    }
    else {
        camera.style.display = 'block';
        btn.innerText = hideCam;
    }

})