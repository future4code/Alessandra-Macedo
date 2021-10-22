### Exercícios de Js

```
function calculaNota(ex, p1, p2) {
  const prova1Nota = p1*2
  const prova2Nota = p2*3
  const exercicios = ex*1
  
  const notaFinal = (prova1Nota + prova2Nota + exercicios) / 6 
  
  if (notaFinal >= 9) {
    return "A"
  } else if (notaFinal < 9 && notaFinal >= 7.5) {
    return "B" 
  } else if (notaFinal < 7.5 && notaFinal >= 6) {
 return "C"
 } else {
    return "D"
  }
}
```
