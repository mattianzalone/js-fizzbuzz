// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


var numeri = [];
// numeri da 1 a 100
for (var i = 1; i < 101; i++) {
    numeri.push(i);
    // divisione per 3 e per 5
    if (i % 3 == 0 && i % 5 == 0) {
        // stampa 'FizzBuzz' se i è divisibile per 3 e per 5
        console.log('FizzBuzz');
    }
    // divisione solo per 3
    else if (i % 3 == 0){
        // stampa 'Fizz' solo se i è divisibile per 3
        console.log('fizz');
        // divisione per 5
    } else if (i % 5 == 0) {
            // stampa 'Buzz' solo se i è divisibile per 5
        console.log('buzz');
    } else {
        // stampa i se non è divisibile ne per 3 ne per 5
        console.log(i);
    }
}
