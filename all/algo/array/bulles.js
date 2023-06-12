// Le but est de trier un tableau nous-même (il faut mettre les éléments du plus petit au plus grand). Pour cela, on va procéder en plusieurs étapes :

// Étape 1 : écrire une fonction qui reçoit un tableau et un numéro de case (i). Son but est d'échanger les valeurs des cases i et i+1 si celles-ci ne sont pas dans le bon ordre.

// Étape 2 : écrire une fonction qui reçoit un tableau et qui applique l'étape 1 sur toutes les cases successives (cases 0/1, cases 1/2, cases 2/3, ..., cases avant-dernière/dernière).

// Étape 3 : écrire une fonction qui reçoit un tableau et qui le trie en appelant la fonction 2 autant de fois qu'il y a d'éléments dans le tableau.

// Note : on peut visualiser cet algorithme sur cette image <https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/211162/a9b17b54-b6dd-1602-be04-6fc125676b7a.gif>.
let array1 =[82500, 27209, 67434, 74967, 27718, 27676, 46821, 23936, 38437, 3896, 69289, 87784, 6172, 73922, 82552, 67763, 65675, 34229, 87030, 1584, 42512, 29503, 90425, 46157, 45883, 30032, 44186, 425, 28394, 66724, 1864, 15795, 65175, 53633, 3758, 98568, 55962, 98224, 15483, 37547, 23173, 67326, 32757, 57468, 8031, 93272, 57408, 99685, 7155, 43906, 24232, 24484, 77289, 1110, 14627, 2856, 99841, 51929, 28515, 92853, 39426, 24821, 71338, 41337, 61894, 39905, 71651, 13035, 12821, 54741, 61706, 16692, 8914, 10955, 83668, 49614, 36281, 86031, 66714, 36870, 86532, 51874, 3432, 78787, 32610, 82530, 59743, 98820, 58005, 48053, 48217, 92902, 28563, 76588, 55481, 77511, 12636, 44262, 29222, 5588, 93279, 77248, 58009, 43520, 85204, 82733, 65349, 43509, 90203, 19220, 8303, 58849, 21872, 9875, 25574, 11921, 97906, 36692, 17804, 64934, 98931, 39408, 61334, 53055, 84632, 72703, 63489, 62284, 14971, 21643, 74163, 85596, 17928, 365, 70070, 8775, 41953, 92912, 88622, 84893, 16140, 4756, 65811, 60846, 96444, 97092, 64334, 73988, 26113, 30801, 25660, 77224, 75102, 61627, 46780, 97246, 61778, 60020, 30580, 41861, 51946, 72468, 53373, 32011, 85768, 56048, 97602, 36015, 67689, 29344, 72560, 69258, 32981, 50416, 91948, 23202, 20808, 70467, 7418, 32304, 29090, 82221, 95067, 48836, 10984, 37730, 67207, 95304, 26113, 85943, 78012, 78003, 28634, 76086, 63958, 61324, 49768, 17507, 24643, 62598];

function orderArray(array, i){
    if (array[i] > array[i+1]){
        let temp = 0;
        temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
    } 
  return array;
}

console.log(orderArray(array1, 0));

function orderAllArray(array){

    for (let i = 0; i<array.length; i++){
    orderArray(array, array[i]);
    
    }
    return array;
}

console.log(orderAllArray(array1));


function orderAll(array){
    for(let i=0 ; i<array.length; i++){
        orderAllArray(array);
    }
    return array;
}

console.log(orderAll(array1));