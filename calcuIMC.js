 function calcularIMC() {
            let weight = document.getElementById('weight').value;
            let height = document.getElementById('height').value;
            if (weight === '' || height === '') {
                alert('Por favor, introduce ambos valores.');
                return;
            }
            height = height / 100; // Convertir altura a metros
            let bmi = weight / (height * height);
            bmi = bmi.toFixed(2);
            document.getElementById('result').innerText = 'Tu IMC es: ' + bmi;
    
         }

