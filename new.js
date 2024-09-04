// let product=(a,b)=>a*b;
// console.log(product(2,3));

// let add=(a,b)=>a+b;
// console.log(add(5,2));

// let arr=[2,3];
// let sum=arr=>{
//     let num=0;
//     for(let i of arr ){
//         num+=i;
//     }
//     return num;
// }

// console.log(sum(arr));

let button = document.getElementById("button");
button.addEventListener("click", greet);
function greet() {
  let name = document.getElementById("input").value;
  console.log(name);
  // let output=`hii ${name}`;
  let result = document.getElementById("result");
  result.innerHTML = `hii ${name}`;
}
