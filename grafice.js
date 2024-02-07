   function calculateVoltageDrop() {
    const resistorValue = parseFloat(document.getElementById("resistor").value);
    const inductanceValue = parseFloat(document.getElementById("inductanta").value);
    const capacitorValue = parseFloat(document.getElementById("condensator").value);
    const frequencyValue = parseFloat(document.getElementById("frecventa").value);

    if (isNaN(resistorValue) || isNaN(inductanceValue) || isNaN(capacitorValue) || isNaN(frequencyValue)) {
        alert("Introduceți valori valide pentru rezistor, inductanță, condensator și frecvență.");
        return;
    }

    // Calcul cădere de tensiune ()
    const voltageDrop = resistorValue * inductanceValue * capacitorValue * frequencyValue;

    // Afișare grafic
    displayChart(voltageDrop);
}

function displayChart(voltageDrop) {
    const ctx = document.getElementById("voltageDropChart").getContext("2d");

    // Șterge graficul precedent dacă există
    if (window.myChart) {
        window.myChart.destroy();
    }

    window.myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Cădere de Tensiune'],
            datasets: [{
                label: 'Cădere de Tensiune (V)',
                data: [voltageDrop],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function calculateTotalImpedance() {
    const resistorValueImp = parseFloat(document.getElementById("resistorImp").value);
    const inductanceValueImp = parseFloat(document.getElementById("inductantaImp").value);
    const capacitorValueImp = parseFloat(document.getElementById("condensatorImp").value);
    const frequencyValueImp = parseFloat(document.getElementById("frecventaImp").value);

    if (isNaN(resistorValueImp) || isNaN(inductanceValueImp) || isNaN(capacitorValueImp) || isNaN(frequencyValueImp)) {
        alert("Introduceți valori valide pentru rezistor, inductanță, condensator și frecvență.");
        return;
    }

    // Calcul impedanta totala ()
    const totalImpedance = Math.sqrt(resistorValueImp**2 + (inductanceValueImp - capacitorValueImp)**2);

    // Afișare grafic
    displayChartimp(totalImpedance);
}

function displayChartimp(totalImpedance) {
    const ctx = document.getElementById("totalImpedanceChart").getContext("2d");

    // Șterge graficul anterior dacă există
    if (window.myChartImp) {
        window.myChartImp.destroy();
    }

    window.myChartImp = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Impedanta Totala'],
            datasets: [{
                label: 'Impedanta Totala (ohmi)',
                data: [totalImpedance],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
