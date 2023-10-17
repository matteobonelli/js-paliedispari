PALINDROMI
- Per prima cosa sviluppo l'esercizio pensando a come leggere al contrario la parola che viene inserita in input dall'utente.
- Eseguo un controllo per verificare che la casella di input non sia vuota. Se è stata riempita leggo la parola in input e ciclo all'interno di essa al contrario, mettendo le sue lettere dentro un container.
- con il metodo join unisco le lettere al contrario contenute nel container, e se la parola risultante è uguale all'input inserito dall'utente, allora la parola è un palindromo, altrimenti non lo è.
- Divido lo script in varie funzioni: una esegue il reset, una la stampa, una è la funzione contenuta nell'event listener, ed infine contengo tutto quando dentro una funzione che si avvia al caricamento della pagina.