//const and let keywords

function func() {
    var x = 1
    let y = 2
    const z = 3
    {
      var x = 1000
      let y = 2000
      const z = 3000
      console.log('x in block scope is', x)
      console.log('y in block scope is', y)
      console.log('z in block scope is', z)
    }
    console.log('x outside of block scope is', x)
    console.log('y outside of block scope is', y)
    console.log('z outside of block scope is', z)
  }
  
  func()

  //default function arguments

  function sort(arr = [], direction = 'ascending') {
    console.log('I am going to sort the array', arr, direction)
  }
  
  sort([1, 2, 3])
  sort([3, 2, 1], 'descending')

  //find keyword

  var people = [
    {name: 'virat', age: 33},
    {name: 'kohli', age: 34}, 
    {name: 'guhan', age: 22}, 
    {name: 'venkat', age: 23}, 
    {name: 'cherry', age: 15}
  ]
  
  function teenager(person) {
      return person.age > 10 && person.age < 50
  }
  
  var firstTeenager = people.find(teenager)
  
  console.log('First found teenager:', firstTeenager.name)


  //foreach

  var colors = ['lightgreen', 'yellow', 'skyblue']

function print(val) {
  console.log(val)
}

colors.forEach(print)


//map

var colors = ['red', 'green', 'blue']

function capitalize(val) {
    return val.toUpperCase()
}

var capitalizedColors = colors.map(capitalize)

console.log(capitalizedColors)


//filter

var values = [2, 80, 27, 72, 22, 7]

function lessThan20(val) {
    return val < 20
}

var valuesLessThan20 = values.filter(lessThan20)

console.log(valuesLessThan20)


//every

var people = [
    {name:'virat', age: 33},
    {name: 'kohli', age: 34}, 
    {name: 'guhan', age: 22}, 
    {name: 'venkat', age: 23}, 
    {name: 'cherry', age: 15}
  ]
  
  function teenager(person) {
      return person.age > 10 && person.age < 20
  }
  
  var everyoneIsTeenager = people.every(teenager)
  
  console.log('Everyone is teenager: ', everyoneIsTeenager)