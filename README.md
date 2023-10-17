PALINDROMI
- Per prima cosa sviluppo l'esercizio pensando a come leggere al contrario la parola che viene inserita in input dall'utente.
- Eseguo un controllo per verificare che la casella di input non sia vuota. Se è stata riempita leggo la parola in input e ciclo all'interno di essa al contrario, mettendo le sue lettere dentro un container.
- con il metodo join unisco le lettere al contrario contenute nel container, e se la parola risultante è uguale all'input inserito dall'utente, allora la parola è un palindromo, altrimenti non lo è.
- Divido lo script in varie funzioni: una esegue il reset, una la stampa, una è la funzione contenuta nell'event listener, ed infine contengo tutto quando dentro una funzione che si avvia al caricamento della pagina.

PARI E DISPARI
- Innanzitutto inserisco due bottoni pari e dispari, cliccando pari setto la variale isPari a true, cliccando dispari, la variabile isPari diventerà false.
- Dopodichè chiedo all'utente di inserire un numero tra 1 e 5, controllo che il numero sia valido (quindi compreso tra 1 e 5 e che non sia NaN), e aspetto che venga premuto il tasto invia
- Appena premuto salvo il valore dell'input in una variabile e genero un altro numero con la funzione rndInteger, creo una variabile sumNumber in cui sommo l'input dell'utente ed il numero generato randomicamente.
- creo un if basato sul valore di isTrue, se è true uso un if in cui calcolo se il modulo di 2 di sumNumber è uguale a 0, se è false uso un if in cui calcolo se il modulo di 2 di sumNumber è uguale a 1.
- in base al risultato, salvo dentro la variabile msg un certo messaggio da visualizzare all'utente.
- infine creo una funzione che prendendo in input la variabile msg, mi visualizza a schermo se ho vinto o se ho perso.
- Inoltre, nella schermata Hai vinto/ Hai perso, visualizzo un bottone Riprova, che riporterà l'utente alla schermata iniziale della pagina.