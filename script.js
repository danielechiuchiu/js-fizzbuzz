//creo ciclo di ripetizione for per i numeri da 1 a 100
for (var i=1; i<=100; i++) {
//creo condizioni partendo dalla più complessa
  if ((i % 3==0) && (i % 5==0)){
    risultato = i + ' Fizzbuzz';
  } else if (i % 3==0) {
    risultato = i +' Fizz';
  } else if (i % 5 ==0){
    risultato = i +' Buzz';
  } else{
    risultato = i;
  }
  //Stampo tutti i risultati del ciclo
document.getElementById('lista').innerHTML += '<li>' + risultato + '</li>';
}
