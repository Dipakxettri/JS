
// Boolean
let isRegustred = true;


let a = (2>3); //boolean expression
console.log(a);


// boolean with conditional
// let isTrue = true;

// if (isTrue) {
//     for(let i = 0; i<=10; i++){
//         console.log();
//     }
// }

// let j = 0;
// while(isTrue){
//     j++;

//     if (j == 11) {
//         break;
//     }

//     console.log(j);
    
// }

// let value1 = null;
// let value2 = undefined;

// console.log(typeof value1);  

// let myNum = "10";
// console.log(myNum + 10);

// let num1 = "10";
// let num2 = 10;
// let convert = Number(num1);

// console.log(convert + num2);


// Some Tweaks (Eadge Cases) while converting to number type
// let t1 = Number('abcd');
// let t2 = Number(true);
// let t3 = Number('10');
// let t4 = Number("true");
// let t5 = Number(- true + false);
// console.log(t5);

// boolean

let a1 = 0;
let a2 = Boolean(a1);

let a3 = true;

let bool = Boolean('true');
console.log(bool);

let bool2 = Boolean(100000);
console.log(bool2); // non zero = true, zero = fasle, 0.0 = false, 0.1 = true


// conversion to string from other data types
let myStr = String('Deepak Ghimire');

console.log("10" - 1);

// ## 🧩 Leet Code
// <img src="https://leetcard.jacoblin.cool/dipakxettri?" width="400"/>


for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
