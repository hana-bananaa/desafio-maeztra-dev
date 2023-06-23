
function calcularPossibilidadesOrganizacao(numeroPessoas) {
    let possibilidades = 1;

    for (let i = 2; i <= numeroPessoas; i++) {
      possibilidades *= i;
    }
  
    return possibilidades;
  }
  console.log(calcularPossibilidadesOrganizacao(numeroPessoas));