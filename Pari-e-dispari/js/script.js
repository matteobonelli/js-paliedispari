const pariButton = document.querySelector('.btn-success');
const dispariButton = document.querySelector('.btn-warning');
const inputLabelPariDispari = document.getElementById('inputLabel');
let isPari = false;
let isDispari = false;
console.log(pariButton, dispariButton, inputLabelPariDispari)

pariButton.addEventListener('click', function(){
    isPari = true;
    isDispari = false;
    pariButton.classList.add('d-none');
    dispariButton.classList.add('d-none');
    inputLabelPariDispari.classList.remove('d-none');
    console.log(isPari, isDispari);
})

dispariButton.addEventListener('click', function(){
    isDispari = true;
    isPari = false;
    pariButton.classList.add('d-none');
    dispariButton.classList.add('d-none');
    inputLabelPariDispari.classList.remove('d-none');
    console.log(isPari, isDispari);
})

console.log(isPari, isDispari);