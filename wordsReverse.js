let str = "My Name Is Vinz";
str2 = str.split(' ');
let str3 = "";
for(let i = 0; i < str2.length; i++){
    str2[i] = str2[i].split('').reverse().join('');
    str3 = str3 +" "+ str2[i];
}
console.log(str3);