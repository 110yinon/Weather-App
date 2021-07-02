const form = document.querySelector('form');
const input = document.querySelector('input');
const feedback = document.querySelector('.feedback');

const pattern = /\w+@(gmail.com|walla.co.i)$/;


input.addEventListener('keyup', () => {
    
    if(pattern.test(form.email.value)){
        console.log('bb');
        input.style.backgroundColor = 'lime';
        input.style.border = '2px solid darkgreen';
    }
    else{
        console.log('sara');
        input.style.backgroundColor = 'tomato';
        input.style.border = '2px solid crimson';
    }
});



