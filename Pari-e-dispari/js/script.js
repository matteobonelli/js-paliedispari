const pariButton = document.querySelector('.btn-success');
const dispariButton = document.querySelector('.btn-warning');
const numberInputButton = document.querySelector('.btn-danger');
const tryAgainButton = document.querySelector('.btn-dark');
const inputLabelPariDispari = document.getElementById('inputLabel');
let isPari;
console.log(pariButton, dispariButton, inputLabelPariDispari)

pariButton.addEventListener('click', checkIfPari);

dispariButton.addEventListener('click', checkIfDispari);

numberInputButton.addEventListener('click', checkIfNumbersBetween);

tryAgainButton.addEventListener('click', resetButton);

function checkIfPari(){
    isPari = true;
    pariButton.classList.add('d-none');
    dispariButton.classList.add('d-none');
    inputLabelPariDispari.classList.remove('d-none');
    console.log(isPari);
}

function checkIfDispari(){
    isPari = false;
    pariButton.classList.add('d-none');
    dispariButton.classList.add('d-none');
    inputLabelPariDispari.classList.remove('d-none');
    console.log(isPari);
}

function checkIfNumbersBetween(){
    inputLabelPariDispari.classList.add('d-none');
    const userNumber = parseInt(document.getElementById('data').value);
    const computerNumber = getRndInteger(1, 5);
    console.log(userNumber, computerNumber)
    let msg;
    if(userNumber < 1 || userNumber > 5 || isNaN(userNumber)){
        msg = `<div class ="display-4 text-danger">Inserisci un numero valido!<div>`
    } else {
        let sumNumber = userNumber + computerNumber;
        console.log(sumNumber);
        if(isPari){
            msg = (sumNumber % 2 === 0) ? `Il tuo numero (${userNumber}) + il numero del computer (${computerNumber}) fanno : ${sumNumber}.
            <div class ="display-4 text-success">Hai vinto!<div>` : `Il tuo numero (${userNumber}) + il numero del computer (${computerNumber}) fanno : ${sumNumber}.
            <div class ="display-4 text-danger">Hai perso!<div>`;
            console.log(msg)
        } else{
            msg = (sumNumber % 2 === 1) ? `Il tuo numero (${userNumber}) + il numero del computer (${computerNumber}) fanno : ${sumNumber}.
            <div class ="display-4 text-success">Hai vinto!<div>` : `Il tuo numero (${userNumber}) + il numero del computer (${computerNumber}) fanno : ${sumNumber}.
            <div class ="display-4 text-danger">Hai perso!<div>`;
            console.log(msg)
        }
    }
    whoIsTheWinner(msg);
}   

function whoIsTheWinner(message){
    const visualizedMessage = document.getElementById('outputAlert');
    const theWinnerIs = document.querySelector('.alert');
    console.log(theWinnerIs, visualizedMessage);
    theWinnerIs.innerHTML = message;
    visualizedMessage.classList.remove('d-none');
}


function resetButton(){
    pariButton.classList.remove('d-none');
    dispariButton.classList.remove('d-none');
    const visualizedMessage = document.getElementById('outputAlert');
    visualizedMessage.classList.add('d-none');
    document.getElementById('data').value='';
}

function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }