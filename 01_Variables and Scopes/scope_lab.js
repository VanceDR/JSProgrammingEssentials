// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

// console.log(globalVar); // Output: "I'm a global variable"
// console.log(globalLet); // Output: "I'm also global, but scoped with let"
// console.log(globalConst); // Output: "I'm a global constant"

{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

//Block Scope
// console.log(blockVar);
// console.log(blockLet);


function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
show();
// console.log(functionVar); // Throws ReferenceError
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError


{
    var blockVar2 = "I'm a block-scoped var";
    let blockLet2 = "I'm a block-scoped let";
    const blockConst2 = "I'm a block-scoped const";
}

blockVar2 = "I'm a block-scoped var - modified";
blockLet2 = "I'm a block-scoped let - modified";
blockConst2 = "I'm a block-scoped const - modified";

console.log(blockVar2); // Output: "I'm a block-scoped var - modified"
console.log(blockLet2); // Output: "I'm a block-scoped let - modified"
console.log(blockConst2); // Output: "I'm a block-scoped const - modified"
