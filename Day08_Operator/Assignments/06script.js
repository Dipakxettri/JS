let c = Number(prompt("Enter marks of c"));
let dsa = Number(prompt("Enter marks of DSA"));
let java = Number(prompt("Enter marks of Java"));
let ml = Number(prompt("Enter the marks of Machine Learning"));
let passMarks = 40;
let fullMarks = 100;

let result = (c>=passMarks && dsa>=passMarks && java>=passMarks && ml>=passMarks?  `You are passed the exam` : `You have fail the exam`);
console.log(result);



