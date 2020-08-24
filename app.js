let showCaptcha = document.getElementById('showCaptcha');
let inputCaptcha = document.getElementById('inputCaptcha');
let verifyCaptcha = document.getElementById('verifyCaptcha');

let input = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let Captcha = input[Math.floor(Math.random()*input.length)];
for(i=0; i<8;i++){
    Captcha = Captcha + input[Math.floor(Math.random()*input.length)];
}
showCaptcha.innerHTML = Captcha;
verifyCaptcha.addEventListener('click', () => {

    let inputCaptchaValue = inputCaptcha.value;
    if(Captcha === inputCaptchaValue){
        alert("Successful Submition");
    }else{
        alert("Wrong Captcha Value");
        
    }


    location.reload()
})



