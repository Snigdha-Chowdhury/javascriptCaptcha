let showCapcha = document.getElementById('showCapcha');
let inputCapcha = document.getElementById('inputCapcha');
let verifyCapcha = document.getElementById('verifyCapcha');

let input = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let Capcha = input[Math.floor(Math.random()*input.length)];
for(i=0; i<8;i++){
    Capcha = Capcha + input[Math.floor(Math.random()*input.length)];
}
showCapcha.innerHTML = Capcha;
verifyCapcha.addEventListener('click', () => {

    let inputCapchaValue = inputCapcha.value;
    if(Capcha === inputCapchaValue){
        alert("Successful Submition");
    }else{
        alert("Wrong Capcha Value");
        
    }


    location.reload()
})



