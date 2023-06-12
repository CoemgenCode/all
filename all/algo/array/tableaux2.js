// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
let array1 = [18, 22, 33];

function displayLast(array){
    console.log(array[array.length-1]);
}

displayLast(array1);

// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
let array2 = [22, 33 ,51];
function returnLast(array){
    return array[array.length-1];
}

console.log(returnLast(array1));
console.log(returnLast(array2));

// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau
// let array3 = [44, 89, 102];
// function myArray3(){
//     console.log(Math.min(...array3));
// }

// myArray3();

function arrayMini (array){
    let smallest=array[0];
    for(let i=0;i<array.length;i++){
        if(array[i]<smallest){
            smallest = array[i];
        }
    }
    return smallest;
}


console.log(arrayMini(array2));


// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.

// let array4 = [44, 89, 102];
// function myArray4(){
//     console.log(Math.max(...array4));
// }


// myArray4();
function arrayBig (array){
    let bigger=array[0];
    for(let i=0;i<array.length;i++){
        if(array[i]>bigger){
            bigger = array[i];
        }
    }
    return bigger;
}


console.log(arrayBig(array2));



// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.
let array5 = [120, 155, 1, 4, 360, 1, 1, 1];
let max1 = 0;
let max2 = 0;
function myArray(n){
   for(i=0; i<n.length ; i++){
    if(n[i] > max1 ){
         max2 = max1 ;
         max1 = n[i] ;
    } else if (n[i] > max2) {
         max2 = n[i];
    }
   }
   return max2;
}
console.log(myArray(array5));



// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
let many = 0;
function howManyTimes(n, m){
    
    for(let i = 0; i<n.length; i++){
        if(n[i] == m){
            many++;
        }
    }
    return many;
}
console.log(howManyTimes(array5, 1));

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
let exist = false;
    function bool(){
        if(many > 0){
             exist = true;
        }
        return exist;
    }
console.log(bool());
// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].
let array6 = [];
function bigArray(){
    for(let i = 1; i<7778; i++){
        array6.push(i);
    }
    return array6;
}

console.log(bigArray(array6));

// Créer un tableau qui contient [10,20,30,...,77770].k
let array7 = array6;
function bigBigArray(){
    for(let i = 1; i<77771; i++){
        array7[i] = array7[i]* 10;
    }
    return array7;
}

console.log(bigBigArray(array7));

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
let array8 = array7;
function fiveArray(){
    for(let i = 1; i<77771; i++){
        array8[i] = array8[i]/2;
    }
    return array8;
}

console.log(fiveArray(array8));

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
let array9= [12, 33, 56, 99, 1, 3, 33, 28, 9];

function less50(a){
 while(a[a.length-1] <= 50){
    a.pop();
 }
 return a;
}

console.log(less50(array9));

// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12]); // doit afficher [1,45,88,54]


// exobonus

let arrayGame = [];
function game(){
    for(let i = 1; i<16; i++){
        arrayGame.push(i);
    }
    return arrayGame;
}

console.log(game(arrayGame));


