(function calcular(){

    var pes= document.getElementById("peso").value;
    var altu= document.getElementById("altura").value;

    const div= parseInt(pes.value)/(altu.value);

    const resultad= document.getElementById("resultado");
    resultad.textContent = "Tu IMC es: " + value;
    
})();