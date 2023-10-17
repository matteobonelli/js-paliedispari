
(function checkIfPalindromo(){
    const btn = document.querySelector('button');

    btn.addEventListener('click', ifPalindromo);

    function ifPalindromo(){
        const inputWord = document.getElementById('data').value;
        removeClassesAlert();
        console.log(inputWord);
        let container = [];
        let message;
        let alertColor;
        if(inputWord === '' || typeof inputWord !== 'string'){
            message = 'Scrivi qualcosa di valido!';
            alertColor = 'alert-warning';
        } else{
            let reverseWord = '';
            for(i = inputWord.length - 1; i >= 0; i--){
                // container.push(inputWord[i]);
                reverseWord += inputWord[i];
            }
            // reverseWord = arrayToString(container);
            console.log(reverseWord);
            if(reverseWord.toLowerCase() === inputWord.toLowerCase()){
                message = 'Questa parola è un palindromo!';
                alertColor = 'alert-success';
            } else{
                message = 'Questa parola non è palindroma!';
                alertColor = 'alert-danger';
            }
        }
        printOutputAlert(message, alertColor);
    };

    function arrayToString(array){
        return array.join('');
    }

    function printOutputAlert (msg, aColor){
        const outputMessage = document.querySelector('.alert');
        outputMessage.innerText = msg;
        outputMessage.classList.add(aColor);
        outputMessage.classList.remove('d-none');
    }

    function removeClassesAlert(){
        document.getElementById('data').value = '';
        const outputMessage = document.querySelector('.alert');
        outputMessage.classList.remove('alert-warning');
        outputMessage.classList.remove('alert-success');
        outputMessage.classList.remove('alert-danger');
    }
})();

