// laços de repetição

// for 
//for (condição) {
    // bloco de código
//}

for (let i = 30; i < 20; i++) {
    console.log(i);
}

for (let i = 20; i >= 10; i--) {
    console.log(i);
}

for (let i = 0; i <= 100; i += 10) {
    console.log(i);
}

// while
//while (condição) {
    // bloco de código
//}

let i = 9;
while (i < 10) {
    console.log(i);
    i++;
}

let j = 10;
while (j > 0) {
    console.log(j);
    j--;
}

let h = 0;
while (h <= 100) {
    console.log(h);
    h += 10;
}

// do while
// do {
    // bloco de código
//} while (condição);

let z = 5;
do {
    console.log(z);
    z++;
} while (z < 10);

let k = 15;
do while (k < 25) {
    console.log(k);
    k++;
} while (k < 15);

let l = 0;
do {
    console.log(l);
    l += 10;
} while (l <= 100);

// solução do Eduardo

let edu1 = 1;
let edu2 = 10;

do {
    console.log(edu1,edu2);
    edu1++;
    edu2++;
}
while (edu1 <= 2 && edu2 <= 12);


// break
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

// continue
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
