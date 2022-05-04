rotulo1.innerHTML = "Ingrese la vuelta N°1";
rotulo2.innerHTML = "Ingrese la vuelta N°2";
rotulo3.innerHTML = "Ingrese la vuelta N°3";
rotulo4.innerHTML = "Ingrese la vuelta N°4";
let btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", () => {
  let vuelta1: number = dato1.value * 1;
  let vuelta2: number = dato2.value * 1;
  let vuelta3: number = dato3.value * 1;
  let vuelta4: number = dato4.value * 1;
  let tiempoTotal: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
  console.log("Tiempo total:", tiempoTotal);
  console.log("Tiempo promedio", tiempoTotal / 4);
});
