const books = [

    { name: "Harry Potter", author: "Joanne Rowling" },
  
    { name: "Warcross", author: "Marie Lu" },
  
    { name: "The Hunger Games", author: "Suzanne Collins" },
  
  ];
  let sorted = books.sort((a,b)=>{
    let str1 = a.author.split(' ');
    let str2 = b.author.split(' ');
    if(str1[1] < str2[1]) return -1
  })
  console.log(sorted);