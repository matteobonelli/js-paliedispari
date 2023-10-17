const pariButton = document.querySelector('.btn-success');
const dispariButton = document.querySelector('.btn-warning');
const numberInputButton = document.querySelector('.btn-danger');
const tryAgainButton = document.querySelector('.btn-dark');
const inputLabelPariDispari = document.getElementById('inputLabel');
let isPari;
let isDispari;
console.log(pariButton, dispariButton, inputLabelPariDispari)

pariButton.addEventListener('click', checkIfPari);

dispariButton.addEventListener('click', checkIfDispari);

numberInputButton.addEventListener('click', checkIfNumbersBetween);

tryAgainButton.addEventListener('click', function(){
    pariButton.classList.remove('d-none');
    dispariButton.classList.remove('d-none');
    const visualizedMessage = document.getElementById('outputAlert');
    visualizedMessage.classList.add('d-none');
    document.getElementById('data').value='';
})

function checkIfPari(){
    isPari = true;
    isDispari = false;
    pariButton.classList.add('d-none');
    dispariButton.classList.add('d-none');
    inputLabelPariDispari.classList.remove('d-none');
    console.log(isPari, isDispari);
}

function checkIfDispari(){
    isDispari = true;
    isPari = false;
    pariButton.classList.add('d-none');
    dispariButton.classList.add('d-none');
    inputLabelPariDispari.classList.remove('d-none');
    console.log(isPari, isDispari);
}

function checkIfNumbersBetween(){
    inputLabelPariDispari.classList.add('d-none');
    const userNumber = parseInt(document.getElementById('data').value);
    const computerNumber = getRndInteger(1, 5);
    console.log(userNumber, computerNumber)
    let msg;
    if(userNumber < 1 || userNumber > 5 || isNaN(userNumber)){
        msg = 'Inserisci un numero valido'
    } else {
        let sumNumber = userNumber + computerNumber;
        console.log(sumNumber);
        if(isPari){
            msg = (sumNumber % 2 === 0) ? 'Hai vinto!' : 'Hai perso!';
            console.log(msg)
        } else{
            msg = (sumNumber % 2 === 1) ? 'Hai vinto!' : 'Hai perso!';
            console.log(msg)
        }
    }
    const visualizedMessage = document.getElementById('outputAlert');
    const theWinnerIs = document.querySelector('.alert');
    console.log(theWinnerIs, visualizedMessage);
    theWinnerIs.innerText = msg;
    visualizedMessage.classList.remove('d-none');
}

function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }