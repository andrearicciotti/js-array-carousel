# Esercizio

---

## Testo dell' esercizio

- **MILESTONE 1**
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot.
In allegato troverete markup con il codice html e css già fatti.
---
- **MILESTONE 2**
Rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
---
- **BONUS:**
Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

---

## Algoritmo di svolgimento

**1. Raccolta dati**

- Inseriremo inizialmente l' array di stringhe per le immagini.

**2. Logica del programma/output**

- Inseriamo una ad una dinamicamente le immagini nel nostro documento HTML.

- Inseriamo dinamicamente le classi in modo che solo la prima immagine sara' visibile, mentre le altre rimarranno nascoste.

- Al click sulla freccie le immagini passeranno alla successiva/precedente in base alla freccia cliccata, andremo quindi a cambiare le classi ad ogni evento di click.

- Aggiungiamo la possibilita' di passare dalla prima all' ultima immagine e viceversa in modo da creare una successione continua senza blocchi.

---

## Anteprima

![preview](img/preview.JPG)