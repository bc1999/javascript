let num1 = 5;
let num2 = num1;
console.log(num1); // 5
console.log(num2); // 5
num1=10;
console.log(num2); // 5, not a pointer

let obj1 = {
    value: 11
}

let obj2 = obj1;

console.log("obj1.value = ", obj1.value); // 11
console.log("obj2.value = ", obj2.value); // 11

obj1.value=22;

////////////////////////////////
// cannot update obj1 value like this,
// this is like redeclaring obj1

// obj1 = { 
//     value: 22
// }

////////////////////////////////

console.log("obj1.value = ", obj1.value); // 22
console.log("obj2.value = ", obj2.value); // 22, a pointer

let obj3 = {
    value: 57
}
obj2 = obj3;
console.log("obj1.value = ", obj1.value); // 22
console.log("obj2.value = ", obj2.value); // 57
console.log("obj3.value = ", obj3.value); // 57
obj1 = obj2;
console.log("obj1.value = ", obj1.value); // 57