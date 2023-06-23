
function verificarOrdenacao(numero) {
    const numString = String(numero);

    let isCrescente = true;
    for (let i = 0; i < numString.length - 1; i++) {
      if (Number(numString[i + 1]) - Number(numString[i]) > 1) {
        isCrescente = false;
        break;
      }
    }

    let isDecrescente = true;
    for (let i = 0; i < numString.length - 1; i++) {
      if (Number(numString[i]) - Number(numString[i + 1]) > 1) {
        isDecrescente = false;
        break;
      }
    }

    if (isCrescente || isDecrescente) {
      return "Está ordenado";
    } else {
      return "Não está ordenado";
    }
  }
   