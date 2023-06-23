function AnosMaisPessoasTrab(matriz) {
    const anosTrabalho = {};

    for (let i = 0; i < matriz.length; i++) {
      const [anoInicio, anoAposentadoria] = matriz[i];

      for (let ano = anoInicio; ano <= anoAposentadoria; ano++) {
        if (anosTrabalho[ano]) {
          anosTrabalho[ano]++;
        } else {
          anosTrabalho[ano] = 1;
        }
      }
    }
  
    let anosMaisPessoas = [];
    let maxPessoas = 0;
  
    for (const ano in anosTrabalho) {
      const numPessoas = anosTrabalho[ano];
  
      if (numPessoas > maxPessoas) {
        maxPessoas = numPessoas;
        anosMaisPessoas = [ano];
      } else if (numPessoas === maxPessoas) {
        anosMaisPessoas.push(ano);
      }
    }
  
    return anosMaisPessoas;
  }

  const matriz = [[1960, 2005], [1945, 2008], [1938, 1999], [1950, 1990], [1975, 2005]];
  console.log(AnosMaisPessoasTrab(matriz));