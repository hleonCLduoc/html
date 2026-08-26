const botonSumar = document.getElementById("boton-sumar");

botonSumar.addEventListener("click", function(){
    const input1 = document.getElementById("primer-numero");
    const input2 = document.getElementById("segundo-numero");

    const  resultado = parseFloat(input1.value) + parseFloat(input2.value);

    alert("El resultado de la suma es: " + resultado);


});