let arr = ["Hi","Employees","Happy"];
let ele = "Diwali";
const addElement = (...args)=>{
    let result = [];
    for (const iterator of args) {
        result.push(iterator);
    }
    return result;
}
console.log(addElement(...arr,ele));