const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    const inputWord = document.getElementById('data').value;
    console.log(inputWord);
    let letterPalindromo;
    let container = [];
    let message;
    let alertColor;
    if(inputWord === ''){
        message = 'Scrivi qualcosa di valido!';
        alertColor = 'alert-warning';
    } else{
        for(i = inputWord.length - 1; i >= 0; i--){
            letterPalindromo = inputWord[i];
            container.push(letterPalindromo);
        }
        let palindromo = container.join('');
        console.log(palindromo);
        if(palindromo === inputWord){
            message = 'Questa parola è un palindromo!';
            alertColor = 'alert-success';
        } else{
            message = 'Questa parola non è palindroma!';
            alertColor = 'alert-danger';
        }
    }
    const outputMessage = document.querySelector('.alert');
    outputMessage.className = 'alert d-none'
    outputMessage.innerText = message;
    outputMessage.classList.add(alertColor);
    outputMessage.classList.remove('d-none');
})
