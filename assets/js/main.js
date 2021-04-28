// Consegna:
// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

// 1. chiedi all’utente il cognome
var surname = prompt("Quale è il tuo cognome?");
var surnameUp = surname.charAt(0).toUpperCase() + surname.slice(1);
var listSurname = ["Rossi", "Colombo", "Bianchi", "Sisti", "Patella", "Rescaldani", "Montoli", "Rusnati", "Ferrari", "Esposito"];
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
listSurname.push(surnameUp);
var sortList = listSurname.sort();
// 3. stampa la lista ordinata alfabeticamente
console.log(sortList);

for (var i = 0; i < sortList.length; i++) {
    if (surnameUp == sortList[i]) {
        // 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
        document.getElementById("position").innerHTML = i + 1;
    }
}