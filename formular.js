function submitForm() {
    const nume = document.getElementById('nume').value;
    const prenume = document.getElementById('prenume').value;
    const email = document.getElementById('email').value;
    const telefon = document.getElementById('telefon').value;

    // Afișează datele într-un cadru separat pe pagină
    const displayContainer = document.getElementById('display-container');
    displayContainer.innerHTML = `
        <h3>Datele completate:</h3>
        <p>Nume: ${nume}</p>
        <p>Prenume: ${prenume}</p>
        <p>Email: ${email}</p>
        <p>Telefon: ${telefon}</p>
    `;
 
}