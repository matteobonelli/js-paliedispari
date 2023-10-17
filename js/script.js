const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    const inputWord = document.getElementById('data').value;
    let letterPalindromo;
    let container = [];
    let message;
    for(i = inputWord.length - 1; i >= 0; i--){
        letterPalindromo = inputWord[i];
        container.push(letterPalindromo);
    }
    console.log(container);
    if(container.join('') === inputWord){
        message = 'Questa parola è un palindromo!';
    } else{
        message = 'Questa parola non è palindroma!';
    }
    const outputMessage = document.querySelector('.alert');
    outputMessage.innerText = message;
    outputMessage.classList.remove('d-none');
})