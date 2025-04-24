console.log("Hello, There");

let func = (() => {
    console.log("Hello Word");
})

func();

let func2 = ((array) => {
    array.forEach(element => {
        console.log(element);
    });
});

let arry = [1,2,3,4]

func2(arry);
// let input = Number(prompt("Enter your age"));

let count = 0;
let fun3 = ((object) => {
    for (const key in object) {
        count++;    
    }

    console.log("The number of keys are ",count);
    
})

let obj = {
    name:"Deepak",
    age:"18"
};

fun3(obj);