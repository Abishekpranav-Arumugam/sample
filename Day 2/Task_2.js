// 1. With Parameter with return type

const var1=(a,b)=> a*b;
console.log(var1(4,3))

// 2. With Parameter without return type

const var2=(a,b)=>console.log("Addition of two numbers : ",a+b);
var2(2,5)

// 3. Without Parameter with return type

const var3=()=> new Date().toLocaleTimeString();
console.log(var3())

// 4. Without Parameter without return type

const var4=()=>console.log("Life is not merely to breath.");
var4()
