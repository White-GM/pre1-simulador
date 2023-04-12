// Solicitar datos del usuario
let sexo = prompt("Ingresa tu sexo (hombre/mujer):");
let peso = parseFloat(prompt("Ingresa tu peso en kg:"));
let altura = parseFloat(prompt("Ingresa tu altura en cm:"));
let edad = parseInt(prompt("Ingresa tu edad en años:"));

// Validar datos del usuario y calcular TMB
let tmb;
if (sexo === "hombre" || sexo === "mujer") {
    if (sexo === "hombre") {
    tmb = (10 * peso) + (6.25 * altura) - (5 * edad) + 5;
    } else {
    tmb = (10 * peso) + (6.25 * altura) - (5 * edad) - 161;
    }

// Mostrar TMB
alert("Tu Tasa Metabólica Basal (TMB) es: " + tmb.toFixed(2));

// Solicitar nivel de actividad física
let palDescription = "Selecciona tu nivel de actividad física:\n\n" +
    "1. Sedentario (poco o ningún ejercicio)\n" +
    "2. Ligero (ejercicio ligero 1-3 días a la semana)\n" +
    "3. Moderado (ejercicio moderado 3-5 días a la semana)\n" +
    "4. Alto (ejercicio intenso 6-7 días a la semana)\n" +
    "5. Muy alto (ejercicio muy intenso, 2 veces al día, o trabajo físico)";
let palOption = parseInt(prompt(palDescription));

// Asignar PAL basado en la opción seleccionada
let pal;
switch (palOption) {
    case 1:
        pal = 1.2;
        break;
    case 2:
        pal = 1.375;
        break;
    case 3:
        pal = 1.55;
        break;
    case 4:
        pal = 1.725;
        break;
    case 5:
        pal = 1.9;
        break;
    default:
        alert("Opción inválida.");
        break;
}

// Calcular TDEE
if (pal) {
    let tdee = tmb * pal;
    alert("Tu Gasto Energético Total (TDEE) es: " + tdee.toFixed(2)+" Kcal/día");
}

} else {
    alert("Sexo inválido. Por favor, ingresa 'hombre' o 'mujer'.");
}
