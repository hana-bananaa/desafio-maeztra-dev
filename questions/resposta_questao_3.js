function sequenciaValida(str) {
    const pilha = [];
    const pares = {
      ')': '(',
      '}': '{',
      ']': '['
    };
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      if (char === '(' || char === '{' || char === '[') {
        pilha.push(char);
      } else if (char === ')' || char === '}' || char === ']') {
        const topo = pilha.pop();
        if (topo !== pares[char]) {
          return false;
        }
      }
    }
  
    return pilha.length === 0;
  }
  
  console.log(sequenciaValida('{ [ ( ) ( ) { } [ ] ] { } }')); 
  console.log(sequenciaValida('{ [ ( ( ) ] }')) 
