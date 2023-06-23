
function encontrarDuplicados(array) {
    const contador = {};
    const duplicados = [];
  
    for (let i = 0; i < array.length; i++) {
      const elemento = array[i];
      contador[elemento] = (contador[elemento] || 0) + 1;
      if (contador[elemento] === 2) {
        duplicados.push(elemento);
      }
    }
  
    return duplicados;
  }
  
  const array = [4, 5, 44, 98, 4, 5, 6, 7];
  console.log(encontrarDuplicados(array)); 