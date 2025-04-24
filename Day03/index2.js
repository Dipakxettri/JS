
// find how many keys are present in an object

let count = 0;
let func = ((object) => {
    for (const key in object) {
        count ++;
    }
    console.log(count); 
})

let obj = {
    name : "Deepak",
    age :18
};

func(obj);

let arry = [1,2,3,4];
arry.forEach(element => {
    console.log(element);
});