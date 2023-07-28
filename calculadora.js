let promedio = () => {
  let notasYpeso = {
    ec1: {
      nota: 0,
      peso: 0.1,
    },
    ec2: {
      nota: 0,
      peso: 0.1,
    },
    ec3: {
      nota: 0,
      peso: 0.1,
    },
    ec4: {
      nota: 0,
      peso: 0.1,
    },
    ta: {
      nota: 0,
      peso: 0.2,
    },
    ep: {
      nota: 0,
      peso: 0.2,
    },
    ef: {
      nota: 0,
      peso: 0.2,
    },
  };

  let promedio = 0;

  for (let key in notasYpeso) {
    let calificacion = isNaN(parseFloat(document.getElementById(key).value))
      ? 0
      : parseFloat(document.getElementById(key).value);
    notasYpeso[key].nota = calificacion;
    let notaPromedio = notasYpeso[key].nota * notasYpeso[key].peso;
    promedio += notaPromedio;
  }

  let notaMinima = 10.5;

  let notasVacias = 0;

  for (let key in notasYpeso) {
    if (notasYpeso[key].nota === 0) {
      notasVacias += 1;
    }
  }

  let notaPromediaMinimaDeCadaCampo = (notaMinima - promedio) / notasVacias;

  for (let key in notasYpeso) {
    let notaPlaceholder = document.getElementById(key);
    if (notasYpeso[key].nota === 0) {
      notaPlaceholder.placeholder = (
        notaPromediaMinimaDeCadaCampo / notasYpeso[key].peso
      ).toFixed(2);
    }
  }

  document.getElementById("promedio").innerHTML =
    "Promedio: " + promedio.toFixed(2);
};
