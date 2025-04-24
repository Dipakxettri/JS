colnsole.log("Hello Word");

for(int i = 0; i < 10; i++){
  console.log(i);
}

let j = 1;


// array with function
let func = ((array) => {
  arry.forEach((element) => {
    console.log(element);
  })
})

let arry = [1,2,3,4];
func(arry);

// object with function
let fun2 = ((object) => {
  for(const key in object){
    console.log(key);
  }
})

let obj = {
  name : "Deepak",
  age: 18
};

fun2(obj);

// add two arrys 
let arry1 = [1,2];
let arry2 = [3,4];
let merged = [...arry1,...arry2];

merged.forEach((elements) => {
  console.log(elements);
})

// access multidyamantal object
let obj2 = {
  name : "Deepak",
  address: {
    city: "butwal",
    path: "ydvd"
  }
};

for(key in object){
  if(key === "address"){
    for(key2 in key){
      console.log(key2);
    }
  }
}
