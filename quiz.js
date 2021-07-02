const form = document.querySelector(".quiz");
const score = document.querySelector(".score");
let result = 0;

form.addEventListener('submit', e => {
    e.preventDefault();

    // e.target equals to form
    result = 0;
    e.target.q1.value === 'a1' ? result += 25 : null;
    e.target.q2.value === 'a2' ? result += 25 : null;
    e.target.q3.value === 'a1' ? result += 25 : null;
    e.target.q4.value === 'a1' ? result += 25 : null;

    score.parentElement.style.display = 'block';
    scrollTo(0, 0);
    
    // animation
    let count = 0;    
    const code = setInterval(() => {
        if (count === result) {
            clearInterval(code);            
        }
        score.textContent = `${count}%`;
        count++;
    }, 10);

});