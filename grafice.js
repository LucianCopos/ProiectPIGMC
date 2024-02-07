        function calculateAndDisplay() {
            const resistorValue = parseFloat(document.getElementById("resistor").value);
            const inductanceValue = parseFloat(document.getElementById("inductanta").value);
            const capacitorValue = parseFloat(document.getElementById("condensator").value);
            const frequencyValue = parseFloat(document.getElementById("frecventa").value);

            if (isNaN(resistorValue) || isNaN(inductanceValue) || isNaN(capacitorValue) || isNaN(frequencyValue)) {
                alert("Introduceți valori valide pentru rezistor, inductanță, condensator și frecvență.");
                return;
            }

            // Calcul impedanta totala (exemplu simplu)
            const totalImpedance = Math.sqrt(resistorValue**2 + (inductanceValue - capacitorValue)**2);

            // Calcul cadere de tensiune (exemplu simplu)
            const voltageDrop = resistorValue * inductanceValue * capacitorValue * frequencyValue;

            // Afișare grafice
            displayImpedanceChart(totalImpedance);
            displayVoltageDropChart(voltageDrop);
        }

        function displayImpedanceChart(impedance) {
            const impedanceCtx = document.getElementById("impedance-chart").getContext("2d");

            // Șterge graficul anterior dacă există
            if (window.impedanceChart) {
                window.impedanceChart.destroy();
            }

            window.impedanceChart = new Chart(impedanceCtx, {
                type: 'bar',
                data: {
                    labels: ['Impedanta Totala'],
                    datasets: [{
                        label: 'Valori',
                        data: [impedance],
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

        function displayVoltageDropChart(voltageDrop) {
            const voltageDropCtx = document.getElementById("voltage-drop-chart").getContext("2d");

            // Șterge graficul anterior dacă există
            if (window.voltageDropChart) {
                window.voltageDropChart.destroy();
            }

            window.voltageDropChart = new Chart(voltageDropCtx, {
                type: 'bar',
                data: {
                    labels: ['Cădere de Tensiune'],
                    datasets: [{
                        label: 'Valori',
                        data: [voltageDrop],
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
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
